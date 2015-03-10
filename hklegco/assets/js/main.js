jQuery(document).ready(function($) {
  
  $("#languages .btn").click(function( event ) {
    $("#languages .btn").toggleClass("active");
    $(".en, .zh").toggle();
  });
  
  if (location.hash=="#!lang=tc") {
    $("#languages button").toggleClass("active");
    $(".en, .zh").toggle();
    $("title").html("香港立法會的投票趨勢");
  }
  
  $("#committees button").click(function( event ) {
    $("#committees button").removeClass("active");
    $(this).addClass("active");
    $("#currentCommittee span.en").text( $(this).attr("data-name-en") );
    $("#currentCommittee span.zh").text( $(this).attr("data-name-zh") );
  });
  
  $("#sessions button").click(function( event ) {
    $("#sessions button").removeClass("active");
    $(this).addClass("active");
  });
  
  var width = 690,
      height = 400;

  var color = d3.scale.category20();

  var force = d3.layout.force()
      .charge(-120)
      .linkDistance(30)  //, function(d) { return Math.sqrt(d.value); }
      .size([width, height]);

  var svg = d3.select("#graph").append("svg")
      .attr("width", width)
      .attr("height", height);

//  d3.json("data.json", function(error, graph) {
    //graph is currently defined in data.js
    
    // Choose the best metric to tie to voting similarity (e.g. linkStrength, linkDistance, friction, charge)
    // https://github.com/mbostock/d3/wiki/Force-Layout
    force
        .nodes(graph.nodes)
        .links(graph.links.cm.all)
        .start();

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", 1);

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 5)
        .style("fill", function(d) { return color(d.partyCode); })
        .call(force.drag);

    node.append("title")
        .text(function(d) { return d.name; });
        
    /*
    node.append("image")
        .attr("xlink:href", "https://github.com/favicon.ico")
        .attr("x", -8)
        .attr("y", -8)
        .attr("width", 16)
        .attr("height", 16);
    */

    force.on("tick", function() {
      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
//    });
  });

});