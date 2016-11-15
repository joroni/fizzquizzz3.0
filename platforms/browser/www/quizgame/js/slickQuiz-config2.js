// Setup your quiz text and questions here
/*$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://104.238.96.209/~project/db/jsoncode',
        data: { get_param: 'value' },
        success: function (data) {
            //var questions = data;
            console.log(data);
           // $('#cand').val(data);
            stringObject = document.write(data);

            var quizJSON = stringObject
        }

    });
});
*/
// Setup your quiz text and questions here

/* $(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://104.238.96.209/~project/db/jsoncode',
        data: { get_param: 'value' },
        success: function (data) {
           // quizJSON = data;
            var quizJSON = data;
            alert(data);
            localStorage.quizJSON = data;
            //$('#cand').html(data);
        }
    })
});
*/

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

//var quizJSON = localStorage.quizJSON;



/*

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<div id='meSsage'><video width='100%' controls><source src='media/sample.mp4' type='video/mp4'></video></div>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..."
    },
    //  readJsonFile();
    "questions": [remote = $.get('http://104.238.96.209/~project/db/jsoncode').responseText;
]
};


    "questions": [
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
//QuizWrite();
/*
$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://104.238.96.209/~project/db/jsoncode',
        data: { get_param: 'value' },
        success: function (data) {
            // quizJSON = data;

            var quizJSON = data;
            //alert([quizJSON]);

            window.console.debug(quizJSON);
            //$('#cand').html(data);
           // json = JSON.parse(quizJS);
            //js = print_r(json);
           // window.alert(JSON.stringify(json));
        }
    })
});
*/
//loadQuestions();
//var iq = localStorage.getItem('quizdata');
//var stringObject = /*JSON.stringify(iq);*/ {"info" :{"name":"Test Your Knowledge!!","main":"sample.mp4","results":"Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus","level1":"starter","level2":"poineer","level3":"awesome","level4":"wonderfull","level5":"genius"},"questions" :[{"q":"color of brown","a":[{"option":"2","correct":false},{"option":"brown","correct":true},{"option":"green","correct":false},{"option":"white","correct":false}],"correct":"correct","incorrect":"incorrect"}]}
//var stringObject = document.write(iq);

//var quizJSON = stringObject;

//alert(quizJSON);
//$('#cand').html(data);

//var quizJSON = quizJSON;
/*
var data= '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

json = JSON.parse(data);
window.alert(JSON.stringify(json));*/
/*
var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<div id='meSsage'><video width='100%' controls><source src='media/sample.mp4' type='video/mp4'></video></div>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..."
    },
    //  readJsonFile();
    "questions": [remote = $.get('http://104.238.96.209/~project/db/jsoncode2').responseText;
    //"questions": quest;

*/
loadQuestions();