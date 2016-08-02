angular.module('quartermaester')

.controller("mapCtrl", function($scope, $filter, $timeout, uiGmapGoogleMapApi, smgMapType, qmCsv) {

    var qmData = {};
    $scope.state = "slider";
    $scope.search = "";
    $scope.slider = {
      show: "episodes",
      currentEpisode: 0,
      currentChapter: 0
    };
    $scope.options = {
      characterPaths: true,
      houseHeraldry: false,
      geographicRegions: false,
      politicalAllegiances: false,
      characters: {}
    };
    $scope.map = {
      center: {
        latitude: 1.3182,
        longitude: -105.9960
      },
      zoom: 4,
      options: {
        maxZoom: 5,
        minZoom: 1,
        disableDefaultUI: true,
        zoomControl: true
      },
      events: {
        click: mapClick
      },
      control: {},
      smgMapType: smgMapType,
      locationClick: locationClick,
      heraldryClick: heraldryClick,
      characterClick: characterClick
    };
    $scope.mapModels = {
      towns: [],
      heraldry: [],
      characters: [],
      paths: [],
      regions: [],
      loyalties: []
    };
    $scope.episodes = [];
    $scope.chapters = [];
    $scope.searchResults = [];
    $scope.toState = toState;
    $scope.slideTo = slideTo;
    $scope.panTo = panTo;
    $scope.refreshMap = refreshMap;
    $scope.locationDetail = null;

    // Set up promises
    uiGmapGoogleMapApi.then(onMapLoad);
    qmCsv.loadData().then(addToScope);


//////////////////

    function addToScope(d) {
      qmData = d;

      // Add data from CSV files into $scope
      $scope.episodes = qmData.episodes;
      $scope.chapters = qmData.chapters;
      $scope.characters = qmData.characters;
      $scope.searchResults = qmData.searchResults;
      $scope.mapModels.regions = qmData.regions;

      $scope.$watch('slider',  refreshMap, true);
      $scope.$watch('options', refreshMap, true);

      for (var i=0;i<qmData.characters.length; i++) {
        $scope.options.characters[qmData.characters[i].key] = false;
      }

      return true;
    }

    function refreshMap() {
      // Redraw map with new slider values
      $scope.mapModels.towns = $filter('qmSlider')(qmData.towns, $scope.slider);
      $scope.mapModels.heraldry = $scope.options.houseHeraldry ? $filter('qmSlider')(qmData.heraldry, $scope.slider) : [];
      $scope.mapModels.characters = $filter('qmSlider')(qmData.characterMarkers, $scope.slider, $scope.options);
      $scope.mapModels.paths = $filter('qmSlider')(qmData.characterPaths, $scope.slider, $scope.options);
      //console.log("mapModels.paths", $scope.mapModels.paths);


    }

    function toState(stateName) {
      $scope.state = stateName;
      if (stateName=="search")
        $timeout(function() {
          document.getElementById("searchInput").focus();
        });
    }

    function slideTo(input) {
      var books = qmData.books.map(function(book) {return book.abbreviation;});
      var measure = ($scope.slider.show=="episodes") ? "currentEpisode" : "currentChapter";
      var sliderMax   = ($scope.slider.show=="episodes") ? $scope.episodes.length-1 : $scope.chapters.length-1;
      switch (input) {
        case -10:
          if ($scope.slider[measure]==0) break;
          if ($scope.slider.show=="episodes") $scope.slider[measure] = Math.floor(($scope.slider[measure]-1)/10)*10;
          else {
            for (var bookId=4; bookId>=0; bookId--) {
              var prologue = parseInt(qmData.books[bookId].precedingChapters, 10);
              if (prologue > $scope.slider[measure]-1) continue;
              $scope.slider[measure] = prologue;
              break;
            }
          }
          break;
        case -1:
          if ($scope.slider[measure]>0) $scope.slider[measure]--;
          break;
        case 1:
          if ($scope.slider[measure]<sliderMax) $scope.slider[measure]++;
          break;
        case 10:
          if ($scope.slider[measure]==sliderMax) break;
          if ($scope.slider.show=="episodes") $scope.slider[measure] = Math.min(sliderMax, Math.ceil(($scope.slider[measure]+2)/10)*10-1);
          else {
            for (var bookId=0; bookId<=4; bookId++) {
              var epilogue = parseInt(qmData.books[bookId].precedingChapters, 10)-1;
              if (epilogue < $scope.slider[measure]+1) continue;
              $scope.slider[measure] = epilogue;
              break;
            }
          }
          break;
        default:
          $scope.state = "slider";
          if (input.indexOf("-")<0) {
            // HBO show
            $scope.slider.show = "episodes";
            $scope.slider.currentEpisode = qmCsv.getEpisodeId(input);
            // var reMatch = /S(\d)E0?(\d+)/.exec(input);
            // $scope.slider.currentEpisode = 10*(parseInt(reMatch[1])-1) + parseInt(reMatch[2])-1;
          } else {
            $scope.slider.show = "chapters";
            // $scope.slider.currentChapter = qmCsv.getChapterId(input);
            var reMatch = /(\w{4})\-(\d+)/.exec(input);
            var bookId = books.indexOf(reMatch[1]);
            $scope.slider.currentChapter = parseInt(qmData.books[bookId].precedingChapters, 10) + parseInt(reMatch[2], 10);
          }
          break;
      }

    }

    function panTo(input) {

      console.log("panTo", input);
      var location = $filter('filter')($scope.map.locations, {key: input})[0];
      $scope.map.control.getGMap().panTo({lat: location.coords.latitude, lng: location.coords.longitude});
      $scope.locationDetail = location;
      $scope.state = "location";
    }

    function locationClick(marker, eventName, model) {
      $scope.locationDetail = model;
      $scope.state = "location";
    }

    function heraldryClick(marker, eventName, model) {
      $scope.locationDetail = {
        name: model.seat,
        url: model.seatUrl,
        house: model.name,
        houseImg: model.houseImg,
        houseUrl: model.url,
        direct: model.direct
      };
      $scope.state = "location";
    }

    function characterClick(marker, eventName, model) {
      $scope.locationDetail = {
        name: model.town.name,
        url: model.town.url,
        house: model.character.name,
        houseImg: model.character.houseImg,
        houseUrl: model.character.url,
        direct: ($scope.slider.show=="episodes") ? model.episode.url : model.chapter.url
      };
      $scope.state = "location";
    }

    function mapClick() {
      $scope.state = "slider";
    }

    function onMapLoad(maps) {

      // Add background to .rz-bar
      var rzbars = document.getElementsByClassName("rz-bar");
      rzbars[0].innerHTML = "<span class='odd'>1</span><span>2</span><span class='odd'>3</span><span>4</span><span class='odd'>5</span><span>6</span>";
      rzbars[2].innerHTML = "<span class='odd'>AGOT</span><span>ACOK</span><span class='odd'>ASOS</span><span>AFFC</span><span class='odd'>ADWD</span>";

    }

});
