var question = 1;

var mainPageData = [
    {
        quest: "What team has won the most UEFA Champions League titles?",
        options: {
            text: ["Real Madrid", "Liverpool FC", "Juventus", "Bayer Munchen",
            ],
            img: ["<img src='assets/images/madrid.png'/>", "<img src='assets/images/liverpool.png'/>",
                "<img src='assets/images/juventus.png'/>", "<img src='assets/images/bayern.png'/>"
            ]
        }
    },

    {
        quest: "What team won UEFA Champions League in season 2012 - 2013?",
        options: {
            text: ["Bayer Munchen", "Paris Saint Germain", "Real Madrid", "Juventus",
            ],
            img: ["<img src='assets/images/bayern.png'/>", "<img src='assets/images/psg.png'/>",
                "<img src='assets/images/madrid.png'/>", "<img src='assets/images/juventus.png'/>"
            ]
        }
    },
    {
        quest: "What team won UEFA Champions League in season 2018 - 2019?",
        options: {
            text: ["Liverpool FC", "Bayer Munchen", "Paris Saint Germain", "Real Madrid",
            ],
            img:["<img src='assets/images/liverpool.png'/>", "<img src='assets/images/bayern.png'/>",
            "<img src='assets/images/psg.png'/>", "<img src='assets/images/madrid.png'/>"
            ]
        }
    },
    {
        quest: "Team with most Runners-up in the UEFA Champions League history",
        options: {
            text: ["Paris Saint Germain", "Juventus", "Bayer Munchen", "Liverpool FC",
            ],
            img:["<img src='assets/images/psg.png'/>", "<img src='assets/images/juventus.png'/>",
            "<img src='assets/images/bayern.png'/>", "<img src='assets/images/liverpool.png'/>"
            ]
        }
    },
    {
        quest: "What team won UEFA Champions League in season 2017 - 2018?",
        options: {
            text: ["Juventus", "Real Madrid", "Liverpool FC", "Paris Saint Germain",
        ],
            img:["<img src='assets/images/juventus.png'/>", "<img src='assets/images/madrid.png'/>",
            "<img src='assets/images/liverpool.png'/>", "<img src='assets/images/psg.png'/>"
            ]
        }
    }
]
console.log(mainPageData.length);

for (var i = 0; i < mainPageData.length; i++) {
    var questDiv = "#quest" + (i + 1);
    console.log(questDiv);
    $(questDiv).text(mainPageData[i].quest);
    for (var j = 0; j < 4; j++) {
        textDiv = "#text_" + (i + 1) + "_" + (j + 1);
        imgDiv = "#img_" + (i + 1) + "_" + (j + 1);
        $(imgDiv).html(mainPageData[i].options.img[j]);
        $(textDiv).text(mainPageData[i].options.text[j]);
        console.log(imgDiv);
        console.log(mainPageData[i].options.img[j]);
    }
}

$(".img_quest_1").on("click", function(){
    console.log(this);
    $(".img_quest_1").css("border", "none")
    $(this).css({"border-color": "#C1E0FF", 
             "border-weight":"100px", 
             "border-style":"solid"});
})

$(".img_quest_2").on("click", function(){
    console.log(this);
    $(".img_quest_2").css("border", "none")
    $(this).css({"border-color": "#C1E0FF", 
             "border-weight":"100px", 
             "border-style":"solid"});
})

$(".img_quest_3").on("click", function(){
    console.log(this);
    $(".img_quest_3").css("border", "none")
    $(this).css({"border-color": "#C1E0FF", 
             "border-weight":"100px", 
             "border-style":"solid"});
})

$(".img_quest_4").on("click", function(){
    console.log(this);
    $(".img_quest_4").css("border", "none")
    $(this).css({"border-color": "#C1E0FF", 
             "border-weight":"100px", 
             "border-style":"solid"});
})

$(".img_quest_5").on("click", function(){
    console.log(this);
    $(".img_quest_5").css("border", "none")
    $(this).css({"border-color": "#C1E0FF", 
             "border-weight":"100px", 
             "border-style":"solid"});
})

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