var question = 1;

var mainPageData = [
    {
        quest: "De que color es el caballo blanco de SB",
        options: {

            opt_one: "blanco", img_opt_one: "/assets/images/paris.jpg",
            opt_two: "azul", img_opt_two: "<img src='assets/images/madrid.png'/>",
            opt_tree: "rojo", img_opt_tree: "img_opt_tree",
            opt_four: "negro", img_opt_four: "img_opt_four",
        }
    },
    
    {
        quest: "Donde Murio el soldado invisible",
        options: {

            opt_one: "blanco", img_opt_one: "img_opt_1_1",
            opt_two: "azul", img_opt_two: "img_opt_1_2",
            opt_tree: "rojo", img_opt_tree: "img_opt_1_3",
            opt_four: "negro", img_opt_four: "img_opt_1_4",
        }
    },
    {
        quest: "Real Madrid",
        options: {

            opt_one: "blanco", img_opt_one: "img_opt_one",
            opt_two: "azul", img_opt_two: "img_opt_two",
            opt_tree: "rojo", img_opt_tree: "img_opt_tree",
            opt_four: "negro", img_opt_four: "img_opt_four",
        }
    },
    {
        quest: "Barcelona",
        options: {

            opt_one: "blanco", img_opt_one: "img_opt_one",
            opt_two: "azul", img_opt_two: "img_opt_two",
            opt_tree: "rojo", img_opt_tree: "img_opt_tree",
            opt_four: "negro", img_opt_four: "img_opt_four",
        }
    },
    {
        quest: "Bayern",
        options: {

            opt_one: "blanco", img_opt_one: "img_opt_one",
            opt_two: "azul", img_opt_two: "img_opt_two",
            opt_tree: "rojo", img_opt_tree: "img_opt_tree",
            opt_four: "negro", img_opt_four: "img_opt_four",
        }
    }
]
console.log(mainPageData.length);
//console.log(mainPageData[0].quest1);
//console.log(mainPageData[0].options.opt_one);
//console.log(mainPageData[0].options.opt_two);
//console.log(mainPageData[0].options.opt_tree);
//console.log(mainPageData[0].options.opt_four);
//console.log(mainPageData[0].options.img_opt_four);

for (var i = 0; i < mainPageData.length; i++) {
    var questDiv = "#quest" + (i + 1);
    var imgDiv = "";
    //imgDiv = "#img_" + (i + 1);
    console.log(questDiv);
    //console.log(imgDiv);
    $(questDiv).text(mainPageData[i].quest);
    for (var j = 0; j < 4; j++) {
        imgDiv = "#img_"     + (i + 1) + "_" + (j + 1);
        console.log(imgDiv);
        //$(imgDiv).html(mainPageData[0].options.img_opt_two);
    }
    console.log(mainPageData[i].quest);
}


function navForDivs(divToShow) {
    $("#question-1").hide();
    $("#question-2").hide();
    $("#question-3").hide();
    $("#question-4").hide();
    $("#question-5").hide();
    divToShow.show();
}

$("#question-1").hide();
$("#question-2").hide();
$("#question-3").hide();
$("#question-4").hide();
$("#question-5").hide();
$("#navigator").hide();

$("#btn-start").on("click", function () {
    $("#question-1").show();
    $("#start").hide();
    $("#navigator").show();
});

$("#btn-one").on("click", function () {
    navForDivs($("#question-1"))
    question = 1;
});

$("#btn-two").on("click", function () {
    navForDivs($("#question-2"))
    question = 2;
});

$("#btn-tree").on("click", function () {
    navForDivs($("#question-3"))
    question = 3;
});

$("#btn-four").on("click", function () {
    navForDivs($("#question-4"))
    question = 4;
});

$("#btn-five").on("click", function () {
    navForDivs($("#question-5"))
    question = 5;
});

$("#btn-prev").on("click", function () {

    if (question === 1) {
        $("#question-5").show();
        $("#question-1").hide();
        question = 5;
    } else if (question === 2) {
        $("#question-1").show();
        $("#question-2").hide();
        question = 1;
    } else if (question === 3) {
        $("#question-2").show();
        $("#question-3").hide();
        question = 2;
    } else if (question === 4) {
        $("#question-3").show();
        $("#question-4").hide();
        question = 3;
    } else if (question === 5) {
        $("#question-4").show();
        $("#question-5").hide();
        question = 4;
    }
});

$("#btn-next").on("click", function () {

    if (question === 1) {
        $("#question-2").show();
        $("#question-1").hide();
        question = 2;
    } else if (question === 2) {
        $("#question-3").show();
        $("#question-2").hide();
        question = 3;
    } else if (question === 3) {
        $("#question-4").show();
        $("#question-3").hide();
        question = 4;
    } else if (question === 4) {
        $("#question-5").show();
        $("#question-4").hide();
        question = 5;
    } else if (question === 5) {
        $("#question-1").show();
        $("#question-5").hide();
        question = 1;
    }
});