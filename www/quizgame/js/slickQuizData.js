// Setup your quiz text and questions here
/*$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://104.238.96.209/~project/db/jsoncode',
        data: { get_param: 'value' },
        success: function (data) {
            var questions = data;
            //alert(data);
            //$('#cand').html(data);
        }
    });
});*/

// Setup your quiz text and questions here

$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://104.238.96.209/~project/db/jsoncode',
        data: { get_param: 'value' },
        success: function (data) {
           // quizJSON = data;
            var quizJSON = data;
            alert(data);
            //$('#cand').html(data);
        }
    })
});


//$.ajaxSetup({async:false});
//$.get('http://104.238.96.209/~project/db/jsoncode', function(data) { remote = data; });
// or
//remote = $.get('http://104.238.96.209/~project/db/jsoncode').responseText;


/*

function readJsonFile() {
    $.ajax({
        url: "http://104.238.96.209/~project/db/jsoncode",
        dataType: "json",
        success: function(json) {
            $(json.questions).each(function(){
                var questions = new Object();
                questions = this;
                quizy.push(questions);
            });
            db.transaction(populateDB, transaction_error, populateDB_success);
        }
    });
}
 */
/*$.getJSON("http://104.238.96.209/~project/db/jsoncode2", function(json){
    myjson = json;
});
$.getJSON("http://104.238.96.209/~project/db/jsoncode", function(data) {
    // Now use this data to update your view models,
    // and Knockout will update your UI automatically
})
*/
//var quizJSON = myjson;





var quizJSON =  $.get('json/quiz.json').responseText;



/*    "questions": [
        {
            "q": "What number is the letter A in the English alphabet?",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "14",     "correct": false},
                {"option": "1",      "correct": true},
                {"option": "23",     "correct": false}
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>"
        },
        {
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false}
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 times a year in Michigan.</p>"
        },
        {
            "q": "In which of these places can you purchase a car?",
            "a": [
                {"option": "The Zoo",        "correct": false},
                {"option": "Ebay",           "correct": false},
                {"option": "Grocery Store",  "correct": false},
                {"option": "Used Car Lot",   "correct": true}
            ],
            "correct": "<p><span>Nice!</span> You can indeed buy a car on Ebay or in a used car lot.</p>",
            "incorrect": "<p><span>No.</span> You can't buy a car at the zoo or in a grocery store, try Ebay or a used car lot instead.</p>"
        },
        {
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false}
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>"
        },
        {
            "q": "What planet are you in right now?",
            "a": [
                {"option": "Planet Earth",   "correct": true},
                {"option": "Pluto",          "correct": false},
                {"option": "At a computer",  "correct": false},
                {"option": "The Milky Way",  "correct": false}
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>"
        }
    ]
};

    */