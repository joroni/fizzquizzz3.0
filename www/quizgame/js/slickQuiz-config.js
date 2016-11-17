// Setup your quiz text and questions here
/*$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://104.238.96.209/~project/db/jsoncode',
        data: { get_param: 'value' },
        success: function (data) {
            var questions = data;
            alert(data);
            //$('#cand').html(data);
        }
    });
});*/
// NOTE: pay attention to commas, IE struggles with those bad boys
//[{"id":1,"question":"What is the first letter in the Alphabet?","question_id":1,"option":"Z","is_correct":0},{"id":2,"question":"What is the first letter in the Alphabet?","question_id":1,"option":"N","is_correct":0},{"id":3,"question":"What is the first letter in the Alphabet?","question_id":1,"option":"O","is_correct":0},{"id":4,"question":"What is the first letter in the Alphabet?","question_id":1,"option":"A","is_correct":1}]
var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<div id='meSsage'><video width='100%' controls><source src='media/sample.mp4' type='video/mp4'></video></div>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Which of the following packages is not considered to be “Sparkling IC”?",
            "a": [
                {"option": "237mL glass",      "correct": true},
                {"option": "414mL",     "correct": false},
                {"option": "500mL",      "correct": false},
                {"option": "310mL sleek can",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> 237mL glass is not considered to be "Sparkling IC</p>",
            "incorrect": "<p><span>Uhh no.</span> 237mL glass is not considered to be "Sparkling IC</p>" // no comma here
        },
        { // Question 2
            "q": "Who needs to approve any equipment swap before the work order is placed through coketech.ca?",
            "a": [
                {"option": "ASM",    "correct": false},
                {"option": "Small Format Director",     "correct": true},
                {"option": "DSM",      "correct": false},
                {"option": "SUVP",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> The Small Format Director needs to approve an equipment swap before the work order is placed through coketech.ca.</p>",
            "incorrect": "<p><span>Fail.</span>  The Small Format Director needs to approve an equipment swap before the work order is placed through coketech.ca.</p>" // no comma here
        },
        { // Question 3
            "q": "What is the minimum order size required for a Convenience Retail customer located within 90km of the Distribution Centre before we should key an order?",
            "a": [
                {"option": "$280",        "correct": false},
                {"option": "$190",           "correct": false},
                {"option": "$250",  "correct": true},
                {"option": "$475",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> The minimum order size required for a Convenience Retail customer located within 90km of the Distribution Centre is $250.</p>",
            "incorrect": "<p><span>No.</span> The minimum order size required for a Convenience Retail customer located within 90km of the Distribution Centre is $250.</p>" // no comma here
        },
        { // Question 4
            "q": "What is the minimum order size required for an FSOP customer located within 90km of the Distribution Centre before we should key an order?",
            "a": [
              {"option": "$280",        "correct": false},
              {"option": "$190",           "correct": true},
              {"option": "$250",  "correct": false},
              {"option": "$475",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> The minimum order size required for an FSOP customer located within 90km of the Distribution Centre  is $190.</p>",
            "incorrect": "<p><span>ERRRR!</span> The minimum order size required for an FSOP customer located within 90km of the Distribution Centre  is $190.</p>" // no comma here
        },
        { // Question 5
            "q": "In Convenience Retail, what is the maximum number of cooler clings per door?",
            "a": [
                {"option": "2 clings",   "correct": false},
                {"option": "3 clings",          "correct": false},
                {"option": "1 cling",  "correct": false},
                {"option": "None of the above",  "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> In Convenience Retail, a maximum of 2 clings can be placed on a cooler door.</p>",
            "incorrect": "<p><span>Not Quite.</span> In Convenience Retail, a maximum of 2 clings can be placed on a cooler door.</p>" // no comma here
        } // no comma here
    ]
};