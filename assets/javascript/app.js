//define variables
var question = 1;

var mainPageData = [
    {

        quest: "What team won UEFA Champions League in season 2018 - 2019?",
        value: 0,
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
        value: 0,
        options: {
            text: ["Bayer Munchen", "Paris Saint Germain", "Real Madrid", "Juventus",
            ],
            img: ["<img src='assets/images/bayern.png'/>", "<img src='assets/images/psg.png'/>",
                "<img src='assets/images/madrid.png'/>", "<img src='assets/images/juventus.png'/>"
            ]
        }
    },
    {
        quest: "What team has won the most UEFA Champions League titles?",
        value: 0,
        options: {
            text: ["Liverpool FC", "Bayer Munchen", "Paris Saint Germain", "Real Madrid",
            ],
            img: ["<img src='assets/images/liverpool.png'/>", "<img src='assets/images/bayern.png'/>",
                "<img src='assets/images/psg.png'/>", "<img src='assets/images/madrid.png'/>"
            ]
        }
    },
    {
        quest: "Team with most Runners-up in the UEFA Champions League history",
        value: 0,
        options: {
            text: ["Paris Saint Germain", "Juventus", "Bayer Munchen", "Liverpool FC",
            ],
            img: ["<img src='assets/images/psg.png'/>", "<img src='assets/images/juventus.png'/>",
                "<img src='assets/images/bayern.png'/>", "<img src='assets/images/liverpool.png'/>"
            ]
        }
    },
    {
        quest: "What team won UEFA Champions League in season 2017 - 2018?",
        value: 0,
        options: {
            text: ["Juventus", "Real Madrid", "Liverpool FC", "Paris Saint Germain",
            ],
            img: ["<img src='assets/images/juventus.png'/>", "<img src='assets/images/madrid.png'/>",
                "<img src='assets/images/liverpool.png'/>", "<img src='assets/images/psg.png'/>"
            ]
        }
    }
]
var count;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var res_quest;

//function that check and print the results
function checkResults() {
    for (var k = 0; k < mainPageData.length; k++) {
        if (mainPageData[k].value == 1) {
            console.log("question " + k + " correct");
            res_quest = "#res_quest_" + (k + 1);
            console.log(res_quest);
            $(res_quest).text("Question" + (k + 1) +" : Correct");
            correct++;
        } else if (mainPageData[k].value == 2) {
            console.log("question " + k + " wrong");
            res_quest = "#res_quest_" + (k + 1);
            console.log(res_quest);
            $(res_quest).text("Question" + (k + 1) +" : Wrong");
            wrong++;
        } else if (mainPageData[k].value == 0) {
            console.log("question " + k + " unanswered");
            res_quest = "#res_quest_" + (k + 1);
            console.log(res_quest);
            $(res_quest).text("Question" + (k + 1) +" : Unanswered")
            unanswered++;
        }

    }
    $("#correct").text("Correct: " + correct)
    $("#wrong").text("Wrong:  " + wrong)
    $("#uns").text("Unanswered: " + unanswered)
    console.log("correct: " + correct);
    console.log("wrong: " + wrong);
    console.log("unanswered: " + unanswered);
}

console.log(mainPageData.length);
//function timer that determinate the time for the game
function timer() {
    var timeElapse = 59;
    count = setInterval(function () {
        //console.log(timeElapse);
        var timeToPrint = timeConverter(timeElapse)
        $(time).text(timeToPrint);
        timeElapse--;
        if (timeElapse < 0) {
            clearInterval(count);
            navForDivs($("#results"))
            $("#navigator").hide();
            checkResults();
        }
    }, 1000)

}
//function to convert the timer to mm:ss
function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
//take the info in the mainPage Data object and show the questions info
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

//on click for the fist question
$(".img_quest_1").on("click", function () {
    console.log(this);
    $(".img_quest_1").css("border", "none")
    $(this).css({
        "border-color": "#C1E0FF",
        "border-weight": "100px",
        "border-style": "solid"
    });
    if (this.id == "img_1_2") {
        mainPageData[0].value = 1
    } else {
        mainPageData[0].value = 2
    }
    console.log(mainPageData[0].value);
})

//on click for the second question
$(".img_quest_2").on("click", function () {
    console.log(this);
    $(".img_quest_2").css("border", "none")
    $(this).css({
        "border-color": "#C1E0FF",
        "border-weight": "100px",
        "border-style": "solid"
    });
    if (this.id == "img_2_1") {
        mainPageData[1].value = 1
    } else {
        mainPageData[1].value = 2
    }
    console.log(mainPageData[1].value);
})

//on click for the third question
$(".img_quest_3").on("click", function () {
    console.log(this);
    $(".img_quest_3").css("border", "none")
    $(this).css({
        "border-color": "#C1E0FF",
        "border-weight": "100px",
        "border-style": "solid"
    });
    if (this.id == "img_3_4") {
        mainPageData[2].value = 1
    } else {
        mainPageData[2].value = 2
    }
    console.log(mainPageData[2].value);
})

//on click for the fourth question
$(".img_quest_4").on("click", function () {
    console.log(this);
    $(".img_quest_4").css("border", "none")
    $(this).css({
        "border-color": "#C1E0FF",
        "border-weight": "100px",
        "border-style": "solid"
    });
    if (this.id == "img_4_2") {
        mainPageData[3].value = 1
    } else {
        mainPageData[3].value = 2
    }
    console.log(mainPageData[3].value);
})

//on click for the fith question
$(".img_quest_5").on("click", function () {
    console.log(this);
    $(".img_quest_5").css("border", "none")
    $(this).css({
        "border-color": "#C1E0FF",
        "border-weight": "100px",
        "border-style": "solid"
    });
    if (this.id == "img_5_2") {
        mainPageData[4].value = 1
    } else {
        mainPageData[4].value = 2
    }
    console.log(mainPageData[4].value);
})

//on click to sent the answers before finish the time
$(".btn_sent_ans").on("click", function () {
    console.log(this);
    navForDivs($("#results"))
    $("#navigator").hide();
    $("#time").text(":");
    clearInterval(count);
    checkResults();
})

//function to naviate the diferents questions
function navForDivs(divToShow) {
    $("#question-1").hide();
    $("#question-2").hide();
    $("#question-3").hide();
    $("#question-4").hide();
    $("#question-5").hide();
    $("#results").hide();
    divToShow.show();
}

//hide all the divs 
$("#question-1").hide();
$("#question-2").hide();
$("#question-3").hide();
$("#question-4").hide();
$("#question-5").hide();
$("#navigator").hide();
$("#minutes").hide();
$("#seconds").hide();
$("#results").hide();

//on click to start the game
$("#btn-start").on("click", function () {
    $("#question-1").show();
    $("#start").hide();
    $("#navigator").show();
    $("#minutes").show();
    $("#seconds").show();
    $("#time").text("01:00");
    timer();
});

//on click to change direct to fisrt question
$("#btn-one").on("click", function () {
    navForDivs($("#question-1"))
    question = 1;
});
//on click to change direct to second question
$("#btn-two").on("click", function () {
    navForDivs($("#question-2"))
    question = 2;
});
//on click to change direct to third question
$("#btn-tree").on("click", function () {
    navForDivs($("#question-3"))
    question = 3;
});
//on click to change direct to fourth question
$("#btn-four").on("click", function () {
    navForDivs($("#question-4"))
    question = 4;
});
//on click to change direct to fifth question
$("#btn-five").on("click", function () {
    navForDivs($("#question-5"))
    question = 5;
});

//on click to move to previous question
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
//on click to move to next question
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