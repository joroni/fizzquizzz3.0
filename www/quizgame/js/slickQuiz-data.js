// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys
//[{"id":1,"question":"What is the first letter in the Alphabet?","question_id":1,"option":"Z","is_correct":0},{"id":2,"question":"What is the first letter in the Alphabet?","question_id":1,"option":"N","is_correct":0},{"id":3,"question":"What is the first letter in the Alphabet?","question_id":1,"option":"O","is_correct":0},{"id":4,"question":"What is the first letter in the Alphabet?","question_id":1,"option":"A","is_correct":1}]

function quiz_data() {
    /*$.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "http://104.238.96.209/~project/db/app/views/json/quizdata.json",
        data: "{}",
        dataType: "json",
        success: function ( data ) {
            alert(data);
        },
        error: function ( result ) {
            alert("Error");
        }
    });*/
    $(document).ready(function () {
        $.ajax({
            type: 'GET',
            url: 'http://104.238.96.209/~project/db/jsoncode',
            //url: 'http://104.238.96.209/~project/db/app/views/json/quizdata.json',
            data: { get_param: 'value' },
            success: function (data) {
                alert(data);
                /*for (var i=0;i<data.length;++i)
                {
                    $('#cand').append('<div class="name">data[i].name</>');
                }*/
            }
        });
    });
}

    quiz_data();

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
            "q": "What number is the letter A in the English alphabet?",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "14",     "correct": false},
                {"option": "1",      "correct": true},
                {"option": "23",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 times a year in Michigan.</p>" // no comma here
        },
        { // Question 3
            "q": "In which of these places can you purchase a car?",
            "a": [
                {"option": "The Zoo",        "correct": false},
                {"option": "Ebay",           "correct": false},
                {"option": "Grocery Store",  "correct": false},
                {"option": "Used Car Lot",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> You can indeed buy a car on Ebay or in a used car lot.</p>",
            "incorrect": "<p><span>No.</span> You can't buy a car at the zoo or in a grocery store, try Ebay or a used car lot instead.</p>" // no comma here
        },
        { // Question 4
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 5
            "q": "What planet are you in right now?",
            "a": [
                {"option": "Planet Earth",   "correct": true},
                {"option": "Pluto",          "correct": false},
                {"option": "At a computer",  "correct": false},
                {"option": "The Milky Way",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        } // no comma here
    ]
};