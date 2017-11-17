app.controller("slider", function($scope) {
  
  
  $scope.chapters = [
    {book_id:1, id:0, title:"Prologue", awoiaf:"A_Game_of_Thrones-Prologue"},
    {book_id:1, id:1, title:"Bran I", awoiaf:"A_Game_of_Thrones-Chapter_1"},
    {book_id:1, id:2, title:"Catelyn I", awoiaf:"A_Game_of_Thrones-Chapter_2"},
    {book_id:1, id:3, title:"Daenerys I", awoiaf:"A_Game_of_Thrones-Chapter_3"},
    {book_id:1, id:4, title:"Eddard I", awoiaf:"A_Game_of_Thrones-Chapter_4"},
    {book_id:1, id:5, title:"Jon I", awoiaf:"A_Game_of_Thrones-Chapter_5"},
    {book_id:1, id:6, title:"Catelyn II", awoiaf:"A_Game_of_Thrones-Chapter_6"},
    {book_id:1, id:7, title:"Arya I", awoiaf:"A_Game_of_Thrones-Chapter_7"},
    {book_id:1, id:8, title:"Bran II", awoiaf:"A_Game_of_Thrones-Chapter_8"},
    {book_id:1, id:9, title:"Tyrion I", awoiaf:"A_Game_of_Thrones-Chapter_9"},
    {book_id:1, id:10, title:"Jon II", awoiaf:"A_Game_of_Thrones-Chapter_10"},
    {book_id:1, id:11, title:"Daenerys II", awoiaf:"A_Game_of_Thrones-Chapter_11"},
    {book_id:1, id:12, title:"Eddard II", awoiaf:"A_Game_of_Thrones-Chapter_12"},
    {book_id:1, id:13, title:"Tyrion II", awoiaf:"A_Game_of_Thrones-Chapter_13"},
    {book_id:1, id:14, title:"Catelyn III", awoiaf:"A_Game_of_Thrones-Chapter_14"},
    {book_id:1, id:15, title:"Sansa I", awoiaf:"A_Game_of_Thrones-Chapter_15"},
    {book_id:1, id:16, title:"Eddard III", awoiaf:"A_Game_of_Thrones-Chapter_16"},
    {book_id:1, id:17, title:"Bran III", awoiaf:"A_Game_of_Thrones-Chapter_17"},
    {book_id:1, id:18, title:"Catelyn IV", awoiaf:"A_Game_of_Thrones-Chapter_18"},
    {book_id:1, id:19, title:"Jon III", awoiaf:"A_Game_of_Thrones-Chapter_19"},
    {book_id:1, id:20, title:"Eddard IV", awoiaf:"A_Game_of_Thrones-Chapter_20"},
    {book_id:1, id:21, title:"Tyrion III", awoiaf:"A_Game_of_Thrones-Chapter_21"},
    {book_id:1, id:22, title:"Arya II", awoiaf:"A_Game_of_Thrones-Chapter_22"},
    {book_id:1, id:23, title:"Daenerys III", awoiaf:"A_Game_of_Thrones-Chapter_23"},
    {book_id:1, id:24, title:"Bran IV", awoiaf:"A_Game_of_Thrones-Chapter_24"},
    {book_id:1, id:25, title:"Eddard V", awoiaf:"A_Game_of_Thrones-Chapter_25"},
    {book_id:1, id:26, title:"Jon IV", awoiaf:"A_Game_of_Thrones-Chapter_26"},
    {book_id:1, id:27, title:"Eddard VI", awoiaf:"A_Game_of_Thrones-Chapter_27"},
    {book_id:1, id:28, title:"Catelyn V", awoiaf:"A_Game_of_Thrones-Chapter_28"},
    {book_id:1, id:29, title:"Sansa II", awoiaf:"A_Game_of_Thrones-Chapter_29"},
    {book_id:1, id:30, title:"Eddard VII", awoiaf:"A_Game_of_Thrones-Chapter_30"},
    {book_id:1, id:31, title:"Tyrion IV", awoiaf:"A_Game_of_Thrones-Chapter_31"},
    {book_id:1, id:32, title:"Arya III", awoiaf:"A_Game_of_Thrones-Chapter_32"},
    {book_id:1, id:33, title:"Eddard VIII", awoiaf:"A_Game_of_Thrones-Chapter_33"},
    {book_id:1, id:34, title:"Catelyn VI", awoiaf:"A_Game_of_Thrones-Chapter_34"},
    {book_id:1, id:35, title:"Eddard IX", awoiaf:"A_Game_of_Thrones-Chapter_35"},
    {book_id:1, id:36, title:"Daenerys IV", awoiaf:"A_Game_of_Thrones-Chapter_36"},
    {book_id:1, id:37, title:"Bran V", awoiaf:"A_Game_of_Thrones-Chapter_37"},
    {book_id:1, id:38, title:"Tyrion V", awoiaf:"A_Game_of_Thrones-Chapter_38"},
    {book_id:1, id:39, title:"Eddard X", awoiaf:"A_Game_of_Thrones-Chapter_39"},
    {book_id:1, id:40, title:"Catelyn VII", awoiaf:"A_Game_of_Thrones-Chapter_40"},
    {book_id:1, id:41, title:"Jon V", awoiaf:"A_Game_of_Thrones-Chapter_41"},
    {book_id:1, id:42, title:"Tyrion VI", awoiaf:"A_Game_of_Thrones-Chapter_42"},
    {book_id:1, id:43, title:"Eddard XI", awoiaf:"A_Game_of_Thrones-Chapter_43"},
    {book_id:1, id:44, title:"Sansa III", awoiaf:"A_Game_of_Thrones-Chapter_44"},
    {book_id:1, id:45, title:"Eddard XII", awoiaf:"A_Game_of_Thrones-Chapter_45"},
    {book_id:1, id:46, title:"Daenerys V", awoiaf:"A_Game_of_Thrones-Chapter_46"},
    {book_id:1, id:47, title:"Eddard XIII", awoiaf:"A_Game_of_Thrones-Chapter_47"},
    {book_id:1, id:48, title:"Jon VI", awoiaf:"A_Game_of_Thrones-Chapter_48"},
    {book_id:1, id:49, title:"Eddard XIV", awoiaf:"A_Game_of_Thrones-Chapter_49"},
    {book_id:1, id:50, title:"Arya IV", awoiaf:"A_Game_of_Thrones-Chapter_50"},
    {book_id:1, id:51, title:"Sansa IV", awoiaf:"A_Game_of_Thrones-Chapter_51"},
    {book_id:1, id:52, title:"Jon VII", awoiaf:"A_Game_of_Thrones-Chapter_52"},
    {book_id:1, id:53, title:"Bran VI", awoiaf:"A_Game_of_Thrones-Chapter_53"},
    {book_id:1, id:54, title:"Daenerys VI", awoiaf:"A_Game_of_Thrones-Chapter_54"},
    {book_id:1, id:55, title:"Catelyn VIII", awoiaf:"A_Game_of_Thrones-Chapter_55"},
    {book_id:1, id:56, title:"Tyrion VII", awoiaf:"A_Game_of_Thrones-Chapter_56"},
    {book_id:1, id:57, title:"Sansa V", awoiaf:"A_Game_of_Thrones-Chapter_57"},
    {book_id:1, id:58, title:"Eddard XV", awoiaf:"A_Game_of_Thrones-Chapter_58"},
    {book_id:1, id:59, title:"Catelyn IX", awoiaf:"A_Game_of_Thrones-Chapter_59"},
    {book_id:1, id:60, title:"Jon VIII", awoiaf:"A_Game_of_Thrones-Chapter_60"},
    {book_id:1, id:61, title:"Daenerys VII", awoiaf:"A_Game_of_Thrones-Chapter_61"},
    {book_id:1, id:62, title:"Tyrion VIII", awoiaf:"A_Game_of_Thrones-Chapter_62"},
    {book_id:1, id:63, title:"Catelyn X", awoiaf:"A_Game_of_Thrones-Chapter_63"},
    {book_id:1, id:64, title:"Daenerys VIII", awoiaf:"A_Game_of_Thrones-Chapter_64"},
    {book_id:1, id:65, title:"Arya V", awoiaf:"A_Game_of_Thrones-Chapter_65"},
    {book_id:1, id:66, title:"Bran VII", awoiaf:"A_Game_of_Thrones-Chapter_66"},
    {book_id:1, id:67, title:"Sansa VI", awoiaf:"A_Game_of_Thrones-Chapter_67"},
    {book_id:1, id:68, title:"Daenerys IX", awoiaf:"A_Game_of_Thrones-Chapter_68"},
    {book_id:1, id:69, title:"Tyrion IX", awoiaf:"A_Game_of_Thrones-Chapter_69"},
    {book_id:1, id:70, title:"Jon IX", awoiaf:"A_Game_of_Thrones-Chapter_70"},
    {book_id:1, id:71, title:"Catelyn XI", awoiaf:"A_Game_of_Thrones-Chapter_71"},
    {book_id:1, id:72, title:"Daenerys X", awoiaf:"A_Game_of_Thrones-Chapter_71"},
    {book_id:2, id:0, title:"Prologue", awoiaf:"A_Clash_of_Kings-Prologue"},
    {book_id:2, id:1, title:"Arya I", awoiaf:"A_Clash_of_Kings-Chapter_1"},
    {book_id:2, id:2, title:"Sansa I", awoiaf:"A_Clash_of_Kings-Chapter_2"},
    {book_id:2, id:3, title:"Tyrion I", awoiaf:"A_Clash_of_Kings-Chapter_3"},
    {book_id:2, id:4, title:"Bran I", awoiaf:"A_Clash_of_Kings-Chapter_4"},
    {book_id:2, id:5, title:"Arya II", awoiaf:"A_Clash_of_Kings-Chapter_5"},
    {book_id:2, id:6, title:"Jon I", awoiaf:"A_Clash_of_Kings-Chapter_6"},
    {book_id:2, id:7, title:"Catelyn I", awoiaf:"A_Clash_of_Kings-Chapter_7"},
    {book_id:2, id:8, title:"Tyrion II", awoiaf:"A_Clash_of_Kings-Chapter_8"},
    {book_id:2, id:9, title:"Arya III", awoiaf:"A_Clash_of_Kings-Chapter_9"},
    {book_id:2, id:10, title:"Davos I", awoiaf:"A_Clash_of_Kings-Chapter_10"},
    {book_id:2, id:11, title:"Theon I", awoiaf:"A_Clash_of_Kings-Chapter_11"},
    {book_id:2, id:12, title:"Daenerys I", awoiaf:"A_Clash_of_Kings-Chapter_12"},
    {book_id:2, id:13, title:"Jon II", awoiaf:"A_Clash_of_Kings-Chapter_13"},
    {book_id:2, id:14, title:"Arya IV", awoiaf:"A_Clash_of_Kings-Chapter_14"},
    {book_id:2, id:15, title:"Tyrion III", awoiaf:"A_Clash_of_Kings-Chapter_15"},
    {book_id:2, id:16, title:"Bran II", awoiaf:"A_Clash_of_Kings-Chapter_16"},
    {book_id:2, id:17, title:"Tyrion IV", awoiaf:"A_Clash_of_Kings-Chapter_17"},
    {book_id:2, id:18, title:"Sansa II", awoiaf:"A_Clash_of_Kings-Chapter_18"},
    {book_id:2, id:19, title:"Arya V", awoiaf:"A_Clash_of_Kings-Chapter_19"},
    {book_id:2, id:20, title:"Tyrion V", awoiaf:"A_Clash_of_Kings-Chapter_20"},
    {book_id:2, id:21, title:"Bran III", awoiaf:"A_Clash_of_Kings-Chapter_21"},
    {book_id:2, id:22, title:"Catelyn II", awoiaf:"A_Clash_of_Kings-Chapter_22"},
    {book_id:2, id:23, title:"Jon III", awoiaf:"A_Clash_of_Kings-Chapter_23"},
    {book_id:2, id:24, title:"Theon II", awoiaf:"A_Clash_of_Kings-Chapter_24"},
    {book_id:2, id:25, title:"Tyrion VI", awoiaf:"A_Clash_of_Kings-Chapter_25"},
    {book_id:2, id:26, title:"Arya VI", awoiaf:"A_Clash_of_Kings-Chapter_26"},
    {book_id:2, id:27, title:"Daenerys II", awoiaf:"A_Clash_of_Kings-Chapter_27"},
    {book_id:2, id:28, title:"Bran IV", awoiaf:"A_Clash_of_Kings-Chapter_28"},
    {book_id:2, id:29, title:"Tyrion VII", awoiaf:"A_Clash_of_Kings-Chapter_29"},
    {book_id:2, id:30, title:"Arya VII", awoiaf:"A_Clash_of_Kings-Chapter_30"},
    {book_id:2, id:31, title:"Catelyn III", awoiaf:"A_Clash_of_Kings-Chapter_31"},
    {book_id:2, id:32, title:"Sansa III", awoiaf:"A_Clash_of_Kings-Chapter_32"},
    {book_id:2, id:33, title:"Catelyn IV", awoiaf:"A_Clash_of_Kings-Chapter_33"},
    {book_id:2, id:34, title:"Jon IV", awoiaf:"A_Clash_of_Kings-Chapter_34"},
    {book_id:2, id:35, title:"Bran V", awoiaf:"A_Clash_of_Kings-Chapter_35"},
    {book_id:2, id:36, title:"Tyrion VIII", awoiaf:"A_Clash_of_Kings-Chapter_36"},
    {book_id:2, id:37, title:"Theon III", awoiaf:"A_Clash_of_Kings-Chapter_37"},
    {book_id:2, id:38, title:"Arya VIII", awoiaf:"A_Clash_of_Kings-Chapter_38"},
    {book_id:2, id:39, title:"Catelyn V", awoiaf:"A_Clash_of_Kings-Chapter_39"},
    {book_id:2, id:40, title:"Daenerys III", awoiaf:"A_Clash_of_Kings-Chapter_40"},
    {book_id:2, id:41, title:"Tyrion IX", awoiaf:"A_Clash_of_Kings-Chapter_41"},
    {book_id:2, id:42, title:"Davos II", awoiaf:"A_Clash_of_Kings-Chapter_42"},
    {book_id:2, id:43, title:"Jon V", awoiaf:"A_Clash_of_Kings-Chapter_43"},
    {book_id:2, id:44, title:"Tyrion X", awoiaf:"A_Clash_of_Kings-Chapter_44"},
    {book_id:2, id:45, title:"Catelyn VI", awoiaf:"A_Clash_of_Kings-Chapter_45"},
    {book_id:2, id:46, title:"Bran VI", awoiaf:"A_Clash_of_Kings-Chapter_46"},
    {book_id:2, id:47, title:"Arya IX", awoiaf:"A_Clash_of_Kings-Chapter_47"},
    {book_id:2, id:48, title:"Daenerys IV", awoiaf:"A_Clash_of_Kings-Chapter_48"},
    {book_id:2, id:49, title:"Tyrion XI", awoiaf:"A_Clash_of_Kings-Chapter_49"},
    {book_id:2, id:50, title:"Theon IV", awoiaf:"A_Clash_of_Kings-Chapter_50"},
    {book_id:2, id:51, title:"Jon VI", awoiaf:"A_Clash_of_Kings-Chapter_51"},
    {book_id:2, id:52, title:"Sansa IV", awoiaf:"A_Clash_of_Kings-Chapter_52"},
    {book_id:2, id:53, title:"Jon VII", awoiaf:"A_Clash_of_Kings-Chapter_53"},
    {book_id:2, id:54, title:"Tyrion XII", awoiaf:"A_Clash_of_Kings-Chapter_54"},
    {book_id:2, id:55, title:"Catelyn VII", awoiaf:"A_Clash_of_Kings-Chapter_55"},
    {book_id:2, id:56, title:"Theon V", awoiaf:"A_Clash_of_Kings-Chapter_56"},
    {book_id:2, id:57, title:"Sansa V", awoiaf:"A_Clash_of_Kings-Chapter_57"},
    {book_id:2, id:58, title:"Davos III", awoiaf:"A_Clash_of_Kings-Chapter_58"},
    {book_id:2, id:59, title:"Tyrion XIII", awoiaf:"A_Clash_of_Kings-Chapter_59"},
    {book_id:2, id:60, title:"Sansa VI", awoiaf:"A_Clash_of_Kings-Chapter_60"},
    {book_id:2, id:61, title:"Tyrion XIV", awoiaf:"A_Clash_of_Kings-Chapter_61"},
    {book_id:2, id:62, title:"Sansa VII", awoiaf:"A_Clash_of_Kings-Chapter_62"},
    {book_id:2, id:63, title:"Daenerys V", awoiaf:"A_Clash_of_Kings-Chapter_63"},
    {book_id:2, id:64, title:"Arya X", awoiaf:"A_Clash_of_Kings-Chapter_64"},
    {book_id:2, id:65, title:"Sansa VIII", awoiaf:"A_Clash_of_Kings-Chapter_65"},
    {book_id:2, id:66, title:"Theon VI", awoiaf:"A_Clash_of_Kings-Chapter_66"},
    {book_id:2, id:67, title:"Tyrion XV", awoiaf:"A_Clash_of_Kings-Chapter_67"},
    {book_id:2, id:68, title:"Jon VIII", awoiaf:"A_Clash_of_Kings-Chapter_68"},
    {book_id:2, id:69, title:"Bran VII", awoiaf:"A_Clash_of_Kings-Chapter_69"},
    {book_id:3, id:0, title:"Prologue", awoiaf:"A_Storm_of_Swords-Prologue"},
    {book_id:3, id:1, title:"Jaime I", awoiaf:"A_Storm_of_Swords-Chapter_1"},
    {book_id:3, id:2, title:"Catelyn I", awoiaf:"A_Storm_of_Swords-Chapter_2"},
    {book_id:3, id:3, title:"Arya I", awoiaf:"A_Storm_of_Swords-Chapter_3"},
    {book_id:3, id:4, title:"Tyrion I", awoiaf:"A_Storm_of_Swords-Chapter_4"},
    {book_id:3, id:5, title:"Davos I", awoiaf:"A_Storm_of_Swords-Chapter_5"},
    {book_id:3, id:6, title:"Sansa I", awoiaf:"A_Storm_of_Swords-Chapter_6"},
    {book_id:3, id:7, title:"Jon I", awoiaf:"A_Storm_of_Swords-Chapter_7"},
    {book_id:3, id:8, title:"Daenerys I", awoiaf:"A_Storm_of_Swords-Chapter_8"},
    {book_id:3, id:9, title:"Bran I", awoiaf:"A_Storm_of_Swords-Chapter_9"},
    {book_id:3, id:10, title:"Davos II", awoiaf:"A_Storm_of_Swords-Chapter_10"},
    {book_id:3, id:11, title:"Jaime II", awoiaf:"A_Storm_of_Swords-Chapter_11"},
    {book_id:3, id:12, title:"Tyrion II", awoiaf:"A_Storm_of_Swords-Chapter_12"},
    {book_id:3, id:13, title:"Arya II", awoiaf:"A_Storm_of_Swords-Chapter_13"},
    {book_id:3, id:14, title:"Catelyn II", awoiaf:"A_Storm_of_Swords-Chapter_14"},
    {book_id:3, id:15, title:"Jon II", awoiaf:"A_Storm_of_Swords-Chapter_15"},
    {book_id:3, id:16, title:"Sansa II", awoiaf:"A_Storm_of_Swords-Chapter_16"},
    {book_id:3, id:17, title:"Arya III", awoiaf:"A_Storm_of_Swords-Chapter_17"},
    {book_id:3, id:18, title:"Samwell I", awoiaf:"A_Storm_of_Swords-Chapter_18"},
    {book_id:3, id:19, title:"Tyrion III", awoiaf:"A_Storm_of_Swords-Chapter_19"},
    {book_id:3, id:20, title:"Catelyn III", awoiaf:"A_Storm_of_Swords-Chapter_20"},
    {book_id:3, id:21, title:"Jaime III", awoiaf:"A_Storm_of_Swords-Chapter_21"},
    {book_id:3, id:22, title:"Arya IV", awoiaf:"A_Storm_of_Swords-Chapter_22"},
    {book_id:3, id:23, title:"Daenerys II", awoiaf:"A_Storm_of_Swords-Chapter_23"},
    {book_id:3, id:24, title:"Bran II", awoiaf:"A_Storm_of_Swords-Chapter_24"},
    {book_id:3, id:25, title:"Davos III", awoiaf:"A_Storm_of_Swords-Chapter_25"},
    {book_id:3, id:26, title:"Jon III", awoiaf:"A_Storm_of_Swords-Chapter_26"},
    {book_id:3, id:27, title:"Daenerys III", awoiaf:"A_Storm_of_Swords-Chapter_27"},
    {book_id:3, id:28, title:"Sansa III", awoiaf:"A_Storm_of_Swords-Chapter_28"},
    {book_id:3, id:29, title:"Arya V", awoiaf:"A_Storm_of_Swords-Chapter_29"},
    {book_id:3, id:30, title:"Jon IV", awoiaf:"A_Storm_of_Swords-Chapter_30"},
    {book_id:3, id:31, title:"Jaime IV", awoiaf:"A_Storm_of_Swords-Chapter_31"},
    {book_id:3, id:32, title:"Tyrion IV", awoiaf:"A_Storm_of_Swords-Chapter_32"},
    {book_id:3, id:33, title:"Samwell II", awoiaf:"A_Storm_of_Swords-Chapter_33"},
    {book_id:3, id:34, title:"Arya VI", awoiaf:"A_Storm_of_Swords-Chapter_34"},
    {book_id:3, id:35, title:"Catelyn IV", awoiaf:"A_Storm_of_Swords-Chapter_35"},
    {book_id:3, id:36, title:"Davos IV", awoiaf:"A_Storm_of_Swords-Chapter_36"},
    {book_id:3, id:37, title:"Jaime V", awoiaf:"A_Storm_of_Swords-Chapter_37"},
    {book_id:3, id:38, title:"Tyrion V", awoiaf:"A_Storm_of_Swords-Chapter_38"},
    {book_id:3, id:39, title:"Arya VII", awoiaf:"A_Storm_of_Swords-Chapter_39"},
    {book_id:3, id:40, title:"Bran III", awoiaf:"A_Storm_of_Swords-Chapter_40"},
    {book_id:3, id:41, title:"Jon V", awoiaf:"A_Storm_of_Swords-Chapter_41"},
    {book_id:3, id:42, title:"Daenerys IV", awoiaf:"A_Storm_of_Swords-Chapter_42"},
    {book_id:3, id:43, title:"Arya VIII", awoiaf:"A_Storm_of_Swords-Chapter_43"},
    {book_id:3, id:44, title:"Jaime VI", awoiaf:"A_Storm_of_Swords-Chapter_44"},
    {book_id:3, id:45, title:"Catelyn V", awoiaf:"A_Storm_of_Swords-Chapter_45"},
    {book_id:3, id:46, title:"Samwell III", awoiaf:"A_Storm_of_Swords-Chapter_46"},
    {book_id:3, id:47, title:"Arya IX", awoiaf:"A_Storm_of_Swords-Chapter_47"},
    {book_id:3, id:48, title:"Jon VI", awoiaf:"A_Storm_of_Swords-Chapter_48"},
    {book_id:3, id:49, title:"Catelyn VI", awoiaf:"A_Storm_of_Swords-Chapter_49"},
    {book_id:3, id:50, title:"Arya X", awoiaf:"A_Storm_of_Swords-Chapter_50"},
    {book_id:3, id:51, title:"Catelyn VII", awoiaf:"A_Storm_of_Swords-Chapter_51"},
    {book_id:3, id:52, title:"Arya XI", awoiaf:"A_Storm_of_Swords-Chapter_52"},
    {book_id:3, id:53, title:"Tyrion VI", awoiaf:"A_Storm_of_Swords-Chapter_53"},
    {book_id:3, id:54, title:"Davos V", awoiaf:"A_Storm_of_Swords-Chapter_54"},
    {book_id:3, id:55, title:"Jon VII", awoiaf:"A_Storm_of_Swords-Chapter_55"},
    {book_id:3, id:56, title:"Bran IV", awoiaf:"A_Storm_of_Swords-Chapter_56"},
    {book_id:3, id:57, title:"Daenerys V", awoiaf:"A_Storm_of_Swords-Chapter_57"},
    {book_id:3, id:58, title:"Tyrion VII", awoiaf:"A_Storm_of_Swords-Chapter_58"},
    {book_id:3, id:59, title:"Sansa IV", awoiaf:"A_Storm_of_Swords-Chapter_59"},
    {book_id:3, id:60, title:"Tyrion VIII", awoiaf:"A_Storm_of_Swords-Chapter_60"},
    {book_id:3, id:61, title:"Sansa V", awoiaf:"A_Storm_of_Swords-Chapter_61"},
    {book_id:3, id:62, title:"Jaime VII", awoiaf:"A_Storm_of_Swords-Chapter_62"},
    {book_id:3, id:63, title:"Davos VI", awoiaf:"A_Storm_of_Swords-Chapter_63"},
    {book_id:3, id:64, title:"Jon VIII", awoiaf:"A_Storm_of_Swords-Chapter_64"},
    {book_id:3, id:65, title:"Arya XII", awoiaf:"A_Storm_of_Swords-Chapter_65"},
    {book_id:3, id:66, title:"Tyrion IX", awoiaf:"A_Storm_of_Swords-Chapter_66"},
    {book_id:3, id:67, title:"Jaime VIII", awoiaf:"A_Storm_of_Swords-Chapter_67"},
    {book_id:3, id:68, title:"Sansa VI", awoiaf:"A_Storm_of_Swords-Chapter_68"},
    {book_id:3, id:69, title:"Jon IX", awoiaf:"A_Storm_of_Swords-Chapter_69"},
    {book_id:3, id:70, title:"Tyrion X", awoiaf:"A_Storm_of_Swords-Chapter_70"},
    {book_id:3, id:71, title:"Daenerys VI", awoiaf:"A_Storm_of_Swords-Chapter_71"},
    {book_id:3, id:72, title:"Jaime IX", awoiaf:"A_Storm_of_Swords-Chapter_72"},
    {book_id:3, id:73, title:"Jon X", awoiaf:"A_Storm_of_Swords-Chapter_73"},
    {book_id:3, id:74, title:"Arya XIII", awoiaf:"A_Storm_of_Swords-Chapter_74"},
    {book_id:3, id:75, title:"Samwell IV", awoiaf:"A_Storm_of_Swords-Chapter_75"},
    {book_id:3, id:76, title:"Jon XI", awoiaf:"A_Storm_of_Swords-Chapter_76"},
    {book_id:3, id:77, title:"Tyrion XI", awoiaf:"A_Storm_of_Swords-Chapter_77"},
    {book_id:3, id:78, title:"Samwell V", awoiaf:"A_Storm_of_Swords-Chapter_78"},
    {book_id:3, id:79, title:"Jon XII", awoiaf:"A_Storm_of_Swords-Chapter_79"},
    {book_id:3, id:80, title:"Sansa VII", awoiaf:"A_Storm_of_Swords-Chapter_80"},
    {book_id:3, id:81, title:"Epilogue", awoiaf:"A_Storm_of_Swords-Epilogue"},
    {book_id:4, id:0, title:"Prologue", awoiaf:"A_Feast_for_Crows-Prologue"},
    {book_id:4, id:1, title:"The Prophet", awoiaf:"A_Feast_for_Crows-Chapter_1"},
    {book_id:4, id:2, title:"The Captain Of Guards", awoiaf:"A_Feast_for_Crows-Chapter_2"},
    {book_id:4, id:3, title:"Cersei I", awoiaf:"A_Feast_for_Crows-Chapter_3"},
    {book_id:4, id:4, title:"Brienne I", awoiaf:"A_Feast_for_Crows-Chapter_4"},
    {book_id:4, id:5, title:"Samwell I", awoiaf:"A_Feast_for_Crows-Chapter_5"},
    {book_id:4, id:6, title:"Arya I", awoiaf:"A_Feast_for_Crows-Chapter_6"},
    {book_id:4, id:7, title:"Cersei II", awoiaf:"A_Feast_for_Crows-Chapter_7"},
    {book_id:4, id:8, title:"Jaime I", awoiaf:"A_Feast_for_Crows-Chapter_8"},
    {book_id:4, id:9, title:"Brienne II", awoiaf:"A_Feast_for_Crows-Chapter_9"},
    {book_id:4, id:10, title:"Sansa I", awoiaf:"A_Feast_for_Crows-Chapter_10"},
    {book_id:4, id:11, title:"Kraken's Daughter", awoiaf:"A_Feast_for_Crows-Chapter_11"},
    {book_id:4, id:12, title:"Cersei III", awoiaf:"A_Feast_for_Crows-Chapter_12"},
    {book_id:4, id:13, title:"The Soiled Knight", awoiaf:"A_Feast_for_Crows-Chapter_13"},
    {book_id:4, id:14, title:"Brienne III", awoiaf:"A_Feast_for_Crows-Chapter_14"},
    {book_id:4, id:15, title:"Samwell II", awoiaf:"A_Feast_for_Crows-Chapter_15"},
    {book_id:4, id:16, title:"Jaime II", awoiaf:"A_Feast_for_Crows-Chapter_16"},
    {book_id:4, id:17, title:"Cersei IV", awoiaf:"A_Feast_for_Crows-Chapter_17"},
    {book_id:4, id:18, title:"The Iron Captain", awoiaf:"A_Feast_for_Crows-Chapter_18"},
    {book_id:4, id:19, title:"The Drowned Man", awoiaf:"A_Feast_for_Crows-Chapter_19"},
    {book_id:4, id:20, title:"Brienne IV", awoiaf:"A_Feast_for_Crows-Chapter_20"},
    {book_id:4, id:21, title:"The Queenmaker"", awoiaf:"A_Feast_for_Crows-Chapter_21"},
    {book_id:4, id:22, title:"Arya II", awoiaf:"A_Feast_for_Crows-Chapter_22"},
    {book_id:4, id:23, title:"Alayne I", awoiaf:"A_Feast_for_Crows-Chapter_23"},
    {book_id:4, id:24, title:"Cersei V", awoiaf:"A_Feast_for_Crows-Chapter_24"},
    {book_id:4, id:25, title:"Brienne V", awoiaf:"A_Feast_for_Crows-Chapter_25"},
    {book_id:4, id:26, title:"Samwell III", awoiaf:"A_Feast_for_Crows-Chapter_26"},
    {book_id:4, id:27, title:"Jaime III", awoiaf:"A_Feast_for_Crows-Chapter_27"},
    {book_id:4, id:28, title:"Cersei VI", awoiaf:"A_Feast_for_Crows-Chapter_28"},
    {book_id:4, id:29, title:"The Reaver", awoiaf:"A_Feast_for_Crows-Chapter_29"},
    {book_id:4, id:30, title:"Jaime IV", awoiaf:"A_Feast_for_Crows-Chapter_30"},
    {book_id:4, id:31, title:"Brienne VI", awoiaf:"A_Feast_for_Crows-Chapter_31"},
    {book_id:4, id:32, title:"Cersei VII", awoiaf:"A_Feast_for_Crows-Chapter_32"},
    {book_id:4, id:33, title:"Jaime V", awoiaf:"A_Feast_for_Crows-Chapter_33"},
    {book_id:4, id:34, title:"Cat Of The Canals", awoiaf:"A_Feast_for_Crows-Chapter_34"},
    {book_id:4, id:35, title:"Samwell IV", awoiaf:"A_Feast_for_Crows-Chapter_35"},
    {book_id:4, id:36, title:"Cersei VIII", awoiaf:"A_Feast_for_Crows-Chapter_36"},
    {book_id:4, id:37, title:"Brienne VII", awoiaf:"A_Feast_for_Crows-Chapter_37"},
    {book_id:4, id:38, title:"Jaime VI", awoiaf:"A_Feast_for_Crows-Chapter_38"},
    {book_id:4, id:39, title:"Cersei IX", awoiaf:"A_Feast_for_Crows-Chapter_39"},
    {book_id:4, id:40, title:"Princess in the Tower", awoiaf:"A_Feast_for_Crows-Chapter_40"},
    {book_id:4, id:41, title:"Alayne II", awoiaf:"A_Feast_for_Crows-Chapter_41"},
    {book_id:4, id:42, title:"Brienne VIII", awoiaf:"A_Feast_for_Crows-Chapter_42"},
    {book_id:4, id:43, title:"Cersei X", awoiaf:"A_Feast_for_Crows-Chapter_43"},
    {book_id:4, id:44, title:"Jaime VII", awoiaf:"A_Feast_for_Crows-Chapter_44"},
    {book_id:4, id:45, title:"Samwell V", awoiaf:"A_Feast_for_Crows-Chapter_45"},
    {book_id:5, id:0, title:"Prologue", awoiaf:"Prologue_(A_Dance_with_Dragons)"},
    {book_id:5, id:1, title:"Tyrion I", awoiaf:"Tyrion_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:2, title:"Daenerys I", awoiaf:"Daenerys_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:3, title:"Jon I", awoiaf:"Jon_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:4, title:"Bran I", awoiaf:"Bran_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:5, title:"Tyrion II", awoiaf:"Tyrion_II_(A_Dance_with_Dragons)"},
    {book_id:5, id:6, title:"The Merchant's Man", awoiaf:"The_Merchant%27s_Man_(A_Dance_with_Dragons)"},
    {book_id:5, id:7, title:"Jon II", awoiaf:"Jon_II_(A_Dance_with_Dragons)"},
    {book_id:5, id:8, title:"Tyrion III", awoiaf:"Tyrion_III_(A_Dance_with_Dragons)"},
    {book_id:5, id:9, title:"Davos I", awoiaf:"Davos_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:10, title:"Jon III", awoiaf:"Jon_III_(A_Dance_with_Dragons)"},
    {book_id:5, id:11, title:"Daenerys II", awoiaf:"Daenerys_II_(A_Dance_with_Dragons)"},
    {book_id:5, id:12, title:"Reek I", awoiaf:"Reek_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:13, title:"Bran II", awoiaf:"Bran_II_(A_Dance_with_Dragons)"},
    {book_id:5, id:14, title:"Tyrion IV", awoiaf:"Tyrion_IV_(A_Dance_with_Dragons)"},
    {book_id:5, id:15, title:"Davos II", awoiaf:"Davos_II_(A_Dance_with_Dragons)"},
    {book_id:5, id:16, title:"Daenerys III", awoiaf:"Daenerys_III_(A_Dance_with_Dragons)"},
    {book_id:5, id:17, title:"Jon IV", awoiaf:"Jon_IV_(A_Dance_with_Dragons)"},
    {book_id:5, id:18, title:"Tyrion V", awoiaf:"Tyrion_V_(A_Dance_with_Dragons)"},
    {book_id:5, id:19, title:"Davos III", awoiaf:"Davos_III_(A_Dance_with_Dragons)"},
    {book_id:5, id:20, title:"Reek II", awoiaf:"Reek_II_(A_Dance_with_Dragons)"},
    {book_id:5, id:21, title:"Jon V", awoiaf:"Jon_V_(A_Dance_with_Dragons)"},
    {book_id:5, id:22, title:"Tyrion VI", awoiaf:"Tyrion_VI_(A_Dance_with_Dragons)"},
    {book_id:5, id:23, title:"Daenerys IV", awoiaf:"Daenerys_IV_(A_Dance_with_Dragons)"},
    {book_id:5, id:24, title:"The Lost Lord", awoiaf:"The_Lost_Lord_(A_Dance_with_Dragons)"},
    {book_id:5, id:25, title:"The Windblown", awoiaf:"The_Windblown_(A_Dance_with_Dragons)"},
    {book_id:5, id:26, title:"The Wayward Bride", awoiaf:"The_Wayward_Bride_(A_Dance_with_Dragons)"},
    {book_id:5, id:27, title:"Tyrion VII", awoiaf:"Tyrion_VII_(A_Dance_with_Dragons)"},
    {book_id:5, id:28, title:"Jon VI", awoiaf:"Jon_VI_(A_Dance_with_Dragons)"},
    {book_id:5, id:29, title:"Davos IV", awoiaf:"Davos_IV_(A_Dance_with_Dragons)"},
    {book_id:5, id:30, title:"Daenerys V", awoiaf:"Daenerys_V_(A_Dance_with_Dragons)"},
    {book_id:5, id:31, title:"Melisandre I", awoiaf:"Melisandre_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:32, title:"Reek III", awoiaf:"Reek_III_(A_Dance_with_Dragons)"},
    {book_id:5, id:33, title:"Tyrion VIII", awoiaf:"Tyrion_VIII_(A_Dance_with_Dragons)"},
    {book_id:5, id:34, title:"Bran III", awoiaf:"Bran_III_(A_Dance_with_Dragons)"},
    {book_id:5, id:35, title:"Jon VII", awoiaf:"Jon_VII_(A_Dance_with_Dragons)"},
    {book_id:5, id:36, title:"Daenerys VI", awoiaf:"Daenerys_VI_(A_Dance_with_Dragons)"},
    {book_id:5, id:37, title:"Prince of Winterfell", awoiaf:"The_Prince_of_Winterfell_(A_Dance_with_Dragons)"},
    {book_id:5, id:38, title:"The Watcher", awoiaf:"The_Watcher_(A_Dance_with_Dragons)"},
    {book_id:5, id:39, title:"Jon VIII", awoiaf:"Jon_VIII_(A_Dance_with_Dragons)"},
    {book_id:5, id:40, title:"Tyrion IX", awoiaf:"Tyrion_IX_(A_Dance_with_Dragons)"},
    {book_id:5, id:41, title:"The Turncloak", awoiaf:"The_Turncloak_(A_Dance_with_Dragons)"},
    {book_id:5, id:42, title:"The King's Prize", awoiaf:"The_King's_Prize_(A_Dance_with_Dragons)"},
    {book_id:5, id:43, title:"Daenerys VII", awoiaf:"Daenerys_VII_(A_Dance_with_Dragons)"},
    {book_id:5, id:44, title:"Jon IX", awoiaf:"Jon_IX_(A_Dance_with_Dragons)"},
    {book_id:5, id:45, title:"The Blind Girl"", awoiaf:"The_Blind_Girl_(A_Dance_with_Dragons)"},
    {book_id:5, id:46, title:"A Ghost In Winterfell", awoiaf:"A_Ghost_in_Winterfell_(A_Dance_with_Dragons)"},
    {book_id:5, id:47, title:"Tyrion X", awoiaf:"Tyrion_X_(A_Dance_with_Dragons)"},
    {book_id:5, id:48, title:"Jaime I", awoiaf:"Jaime_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:49, title:"Jon X", awoiaf:"Jon_X_(A_Dance_with_Dragons)"},
    {book_id:5, id:50, title:"Daenerys VIII", awoiaf:"Daenerys_VIII_(A_Dance_with_Dragons)"},
    {book_id:5, id:51, title:"Theon I", awoiaf:"Theon_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:52, title:"Daenerys IX", awoiaf:"Daenerys_IX_(A_Dance_with_Dragons)"},
    {book_id:5, id:53, title:"Jon XI", awoiaf:"Jon_XI_(A_Dance_with_Dragons)"},
    {book_id:5, id:54, title:"Cersei I", awoiaf:"Cersei_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:55, title:"The Queensguard", awoiaf:"The_Queensguard_(A_Dance_with_Dragons)"},
    {book_id:5, id:56, title:"The Iron Suitor", awoiaf:"The_Iron_Suitor_(A_Dance_with_Dragons)"},
    {book_id:5, id:57, title:"Tyrion XI", awoiaf:"Tyrion_XI_(A_Dance_with_Dragons)"},
    {book_id:5, id:58, title:"Jon XII", awoiaf:"Jon_XII_(A_Dance_with_Dragons)"},
    {book_id:5, id:59, title:"Discarded Knight", awoiaf:"The_Discarded_Knight_(A_Dance_with_Dragons)"},
    {book_id:5, id:60, title:"The Spurned Suitor", awoiaf:"The_Spurned_Suitor_(A_Dance_with_Dragons)"},
    {book_id:5, id:61, title:"The Griffin Reborn", awoiaf:"The_Griffin_Reborn_(A_Dance_with_Dragons)"},
    {book_id:5, id:62, title:"The Sacrifice", awoiaf:"The_Sacrifice_(A_Dance_with_Dragons)"},
    {book_id:5, id:63, title:"Victarion I", awoiaf:"Victarion_I_(A_Dance_with_Dragons)"},
    {book_id:5, id:64, title:"The Ugly Little Girl", awoiaf:"The_Ugly_Little_Girl_(A_Dance_with_Dragons)"},
    {book_id:5, id:65, title:"Cersei II", awoiaf:"Cersei_II_(A_Dance_with_Dragons)"},
    {book_id:5, id:66, title:"Tyrion XII", awoiaf:"Tyrion_XII_(A_Dance_with_Dragons)"},
    {book_id:5, id:67, title:"The Kingbreaker", awoiaf:"The_Kingbreaker_(A_Dance_with_Dragons)"},
    {book_id:5, id:68, title:"The Dragontamer", awoiaf:"The_Dragontamer_(A_Dance_with_Dragons)"},
    {book_id:5, id:69, title:"Jon XIII", awoiaf:"Jon_XIII_(A_Dance_with_Dragons)"},
    {book_id:5, id:70, title:"The Queen's Hand", awoiaf:"The_Queen%27s_Hand_(A_Dance_with_Dragons)"},
    {book_id:5, id:71, title:"Daenerys X", awoiaf:"Daenerys_X_(A_Dance_with_Dragons)"},
    {book_id:5, id:72, title:"Epilogue", awoiaf:"Epilogue_(A_Dance_with_Dragons)"},
    {book_id:6, id:-1, title:"Theon I", awoiaf:"Theon_I_(The_Winds_of_Winter)"},
  ];
  $scope.episodes = [
    
  ];
  $scope.novellas = [
    
  ];
});