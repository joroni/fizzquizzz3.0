

    (function($){



        /*************** DATE *********************/
      


        var dateFormat = function () {
            var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                timezoneClip = /[^-+\dA-Z]/g,
                pad = function ( val, len ) {
                    val = String(val);
                    len = len || 2;
                    while (val.length < len) val = "0" + val;
                    return val;
                };

            // Regexes and supporting functions are cached through closure
            return function ( date, mask, utc ) {
                var dF = dateFormat;

                // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
                if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                    mask = date;
                    date = undefined;
                }


                // Passing date through Date applies Date.parse, if necessary
                date = date ? new Date(date) : new Date;
                if (isNaN(date)) throw SyntaxError("invalid date");

                mask = String(dF.masks[mask] || mask || dF.masks["default"]);

                // Allow setting the utc argument via the mask
                if (mask.slice(0, 4) == "UTC:") {
                    mask = mask.slice(4);
                    utc = true;
                }

                var _ = utc ? "getUTC" : "get",
                    d = date[_ + "Date"](),
                    D = date[_ + "Day"](),
                    m = date[_ + "Month"](),
                    y = date[_ + "FullYear"](),
                    H = date[_ + "Hours"](),
                    M = date[_ + "Minutes"](),
                    s = date[_ + "Seconds"](),
                    L = date[_ + "Milliseconds"](),
                    o = utc ? 0 : date.getTimezoneOffset(),
                    flags = {
                        d: d,
                        dd: pad(d),
                        ddd: dF.i18n.dayNames[D],
                        dddd: dF.i18n.dayNames[D + 7],
                        m: m + 1,
                        mm: pad(m + 1),
                        mmm: dF.i18n.monthNames[m],
                        mmmm: dF.i18n.monthNames[m + 12],
                        yy: String(y).slice(2),
                        yyyy: y,
                        h: H % 12 || 12,
                        hh: pad(H % 12 || 12),
                        H: H,
                        HH: pad(H),
                        M: M,
                        MM: pad(M),
                        s: s,
                        ss: pad(s),
                        l: pad(L, 3),
                        L: pad(L > 99 ? Math.round(L / 10) : L),
                        t: H < 12 ? "a" : "p",
                        tt: H < 12 ? "am" : "pm",
                        T: H < 12 ? "A" : "P",
                        TT: H < 12 ? "AM" : "PM",
                        Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                        o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                        S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                    };

                return mask.replace(token, function ( $0 ) {
                    return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
                });
            };
        }();
// Some common format strings
        dateFormat.masks = {
            "default": "ddd mmm dd yyyy HH:MM:ss",
            shortDate: "m/d/yy",
            mediumDate: "mmm d, yyyy",
            longDate: "mmmm d, yyyy",
            fullDate: "dddd, mmmm d, yyyy",
            shortTime: "h:MM TT",
            mediumTime: "h:MM:ss TT",
            longTime: "h:MM:ss TT Z",
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };

// Internationalization strings
        dateFormat.i18n = {
            dayNames: [
                "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            monthNames: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ]
        };

// For convenience...
        Date.prototype.format = function ( mask, utc ) {
            return dateFormat(this, mask, utc);
        };



        var today = new Date();
        var timenow;
        timenow = today.getTime();
        console.log('timenow', timenow);

        localStorage.setItem('mylocaltime', timenow);





        var date = new Date();
        var dateto = new Date();
        var dateto2 = new Date();
        var dateto3 = new Date();

//        var today = new Date();


		    var dateFrString = localStorage.getItem('dateFrString');

        var dateToString = localStorage.getItem('dateToString');


        var dateToStringNow = localStorage.getItem('mylocaltime');


		var dateFrString2 = new Date(dateFrString);
		dateFrString2.setDate(dateFrString2.getDate()+1);
		dateFrString2 = dateFrString2.format("yyyy-mm-dd");


		var dateFrString3 = new Date(dateFrString);
		dateFrString3.setDate(dateFrString3.getDate()+2);


        var dateCurrString = new Date(dateToStringNow);
		dateCurrString = dateCurrString.format("yyyy-mm-dd");


	//	var dateToString1 = new Date(dateToString);
		//dateToString1.setDate(dateToString1.getDate()+1);


		// var dateToString1 = dateToString.format("yyyy-mm-dd");

		//dateToString1.setDate(dateToString1.getDate() + 1);
        date.setDate(date.getDate() + 0);
        dateto.setDate(date.getDate() + 0);
        dateto2.setDate(date.getDate() + 1);
        dateto3.setDate(date.getDate() + 2);

		//var dateToString1DayAfter = dateToString1.format("yyyy-mm-dd");

		var dateFrString3 = dateFrString3.format("yyyy-mm-dd");


       // var dateToString48 = dateto2.format("yyyy-mm-dd");
        //var dateToString72 = dateto3.format("yyyy-mm-dd");


        console.log('dateFrString: ' + dateFrString);
		      console.log('dateToString: ' + dateToString);
        console.log('dateFrString2: ' + dateFrString2);
        console.log('dateFrString3: ' + dateFrString3);


        console.log('dateCurrString: ' + dateCurrString);


        localStorage.setItem('dateCurrString', dateCurrString);



        var dateFrStringV2 = localStorage.getItem('dateFrString');

		var dateToStringV2 = localStorage.getItem('dateToString');

		console.log('dateFrStringV2: ' + dateFrStringV2);
		console.log('dateToStringV2: ' + dateToStringV2);

        if (dateCurrString == dateFrString) {
		    // device date equals from date
		    //if (dateStringToday >= dateFrStringV2 && dateStringToday <= dateToStringV2) {
            console.log('3 points' );
            var unitResult = 'You got 3 Bottles';
            var timesScore = 3;

		} else {

			if (dateCurrString == dateFrString2) {
	  			console.log('2 points');
            	var unitResult = 'You got 2 Bottles';
            	var timesScore = 2;

			   // from date is only past
			} else {

            	console.log('1 Bottle');
            	var unitResult = 'You got 1 Bottle';
            	var timesScore = 1;

			} // else the from date is morethan past 2 days


		} // not device date equals from date




        /*************** DATE *********************/
        // Setup Sexy Quiz


        $.slickQuiz = function(element, options) {
            var $element = $(element),
                element = element;

            var plugin = this;

            var defaults = {
                checkAnswerText:  'Answer',
                nextQuestionText: 'Next',
                backButtonText: '',
                randomSort: false,
                randomSortQuestions: false,
                randomSortAnswers: true,
                preventUnanswered: false,
                completionResponseMessaging: false,
                disableResponseMessaging: false
            };

            // Reassign user-submitted deprecated options
            var depMsg = '';

            if (options && typeof options.disableNext != 'undefined') {
                if (typeof options.preventUnanswered == 'undefined') {
                    options.preventUnanswered = options.disableNext;
                }
                depMsg += 'The \'disableNext\' option has been deprecated, please use \'preventUnanswered\' in it\'s place.\n\n';
            }

            if (depMsg != '') {
                if (typeof console != 'undefined') {
                    console.warn(depMsg);
                } else {
                    alert(depMsg);
                }
            }
            // End of deprecation reassignment

            plugin.config = $.extend(defaults, options);

            var selector = $(element).attr('id');

            var triggers = {
                starter:         '#' + selector + ' .startQuiz',
                checker:         '#' + selector + ' .checkAnswer',
                next:            '#' + selector + ' .nextQuestion',
                back:            '#' + selector + ' .backToQuestion'
            };

            var targets = {
                quizName:        '#' + selector + ' .quizName',
                quizArea:        '#' + selector + ' .quizArea',
                quizResults:     '#' + selector + ' .quizResults',
                quizResultsCopy: '#' + selector + ' .quizResultsCopy',
                quizHeader:      '#' + selector + ' .quizHeader',
                quizScore:       '#' + selector + ' .quizScore',
                quizLevel:       '#' + selector + ' .quizLevel'
            };

            // Set via json option or quizJSON variable (see slickQuiz-config.js)
            var quizValues = (plugin.config.json ? plugin.config.json : typeof quizJSON != 'undefined' ? quizJSON : null);


            var questions = plugin.config.randomSort || plugin.config.randomSortQuestions ?
                quizValues.questions.sort(function() { return (Math.round(Math.random())-0.5); }) :
                quizValues.questions;

            var levels = {
                1: quizValues.info.level1, // 80-100%
                2: quizValues.info.level2, // 60-79%
                3: quizValues.info.level3, // 40-59%
                4: quizValues.info.level4, // 20-39%
                5: quizValues.info.level5  // 0-19%
            }

            // Count the number of questions
            var questionCount = questions.length;

            var dateFrString = questions.date_published;
            var dateToString = questions.date_expire;
            //localStorage.setItem('dateFrString', dateFrString);
            //localStorage.setItem('dateToString', dateToString);
            //alert('dateFrString'+ dateFrString);
            //alert('dateToString'+ dateToString);


            /*// Count the number of questions */
            var dateFromString = questions.date_published;
            var questionDateFrom = dateFrString;
            var questionDateTo = dateToString;
          //  var questionDateFrom = dateFromString;
            //var questionDateTo = dateToString24;
		//	var DateRanges = $(question.date_published+' - ' + question.date_expire );
            plugin.method = {
                // Sets up the questions and answers based on above array
                setupQuiz: function() {
                    $(targets.quizName).hide().html(quizValues.info.name).fadeIn(1000);
                    $(targets.quizHeader).hide().prepend(quizValues.info.main).fadeIn(1000);
                    $(targets.quizResultsCopy).append(quizValues.info.results);

                    // Setup questions
                    var quiz  = $('<ol class="questions"></ol>'),
                        count = 1;
                    // Loop through questions object
                    for (i in questions) {
                        if (questions.hasOwnProperty(i)) {
                            var question = questions[i];

                            var questionHTML = $('<li class="question" id="question' + (count - 1) + '"></li>');
                            questionHTML.append('<div class="questionCount">Question <span class="current">' + count + '</span> of <span class="total">' + questionCount + '</span></div>');
                           //  questionHTML.append('<span class="daterange">'+ question.date_published +' - '+ question.date_expire +'</span>');

							// Custom
                            questionHTML.append('<div class="questionDateFrom">From <span class="total">' + questionDateFrom + '</span>');
                            questionHTML.append('<div class="questionDateTo">To <span class="total">' + questionDateTo + '</span>');
                            // questionHTML.append('<div class="questionDatePublished">To <span class="total">' + dateFromString + '</span>');

                            questionHTML.append('<h3>' + count + '. ' + question.q + '</h3>');

                            // Count the number of true values
                            var truths = 0;
                            for (i in question.a) {
                                if (question.a.hasOwnProperty(i)) {
                                    var answer = question.a[i];
                                    if (answer.correct) {
                                        truths++;
                                    }
                                }
                            }

                            // prepare a name for the answer inputs based on the question
                            var inputName  = 'question' + (count - 1);

                            // Now let's append the answers with checkboxes or radios depending on truth count
                            var answerHTML = $('<ul class="answers"></ul>');

                            var answers = plugin.config.randomSort || plugin.config.randomSortAnswers ?
                                question.a.sort(function() { return (Math.round(Math.random())-0.5); }) :
                                question.a;

                            for (i in answers) {
                                if (answers.hasOwnProperty(i)) {
                                    var answer   = answers[i],
                                        optionId = inputName + '_' + i.toString();

                                    // If question has >1 true answers, use checkboxes; otherwise, radios
                                    var input = '<input class="checkAnswer" id="' + optionId + '" name="' + inputName
                                        + '" type="' + (truths > 1 ? 'checkbox' : 'radio') + '" />';

                                    var optionLabel = '<label for="' + optionId + '">' + answer.option + '</label>';

                                    var answerContent = $('<li></li>')
                                        .append(input)
                                        .append(optionLabel);
                                    answerHTML.append(answerContent);
                                }
                            };

                            // Append answers to question
                            questionHTML.append(answerHTML);

                            // If response messaging is NOT disabled, add it
                            if (!plugin.config.disableResponseMessaging) {
                                // Now let's append the correct / incorrect response messages
                                var responseHTML = $('<ul class="responses"></ul>');
                                responseHTML.append('<li class="correct" style="color: green;">' + question.correct + '</li>');
                                responseHTML.append('<li class="incorrect" style="color: red;">' + question.incorrect + '</li>');

                                /**********************************************/

                                responseHTML.append('<div class="date">' + question.date_published + '</div>');
                                responseHTML.append('<input id="datePublished" type="hidden" value="' + question.date_published + '"/>');
                                responseHTML.append('<input id="dateExpire" type="hidden" value="' + question.date_expire + '"/>');
                                // $('#date_published').text(question.date_published);
                                responseHTML.append('<div class="answerResult correct animated fadeInBottomBig options fast">' +
                                    '<div class="unit-ans-result">' +
                                    '<div class="bottles scoring"></div>' +
                                    '<div id="scored" class="score">' +
                                    /*     'You got' +
                                     ' <span>3</span> ' +
                                     'Bottles' + */
                                    unitResult +
                                    '</div>' +
                                    '</div>' +
                                    '</div>'
                                );
                                // Append responses to question
                                questionHTML.append(responseHTML);
                            }

                            // Appends check answer / back / next question buttons
                            if (plugin.config.backButtonText && plugin.config.backButtonText != '') {
                                questionHTML.append('<a href="#" class="button backToQuestion">' + plugin.config.backButtonText + '</a>');
                            }

                            // If response messaging is disabled or hidden until the quiz is completed,
                            // make the nextQuestion button the checkAnswer button, as well
                            if (plugin.config.disableResponseMessaging || plugin.config.completionResponseMessaging) {
                                questionHTML.append('<a href="#" class="button nextQuestion checkAnswer">' + plugin.config.nextQuestionText + '</a>');
                            } else {
                                questionHTML.append('<a href="#" class="button nextQuestion">' + plugin.config.nextQuestionText + '</a>');
                                questionHTML.append('<a href="#" class="button checkAnswer">' + plugin.config.checkAnswerText + '</a>');
                            }

                            // Append question & answers to quiz
                            quiz.append(questionHTML);

                            count++;
                        }
                    }

                    // Add the quiz content to the page
                    $(targets.quizArea).append(quiz);

                    // Toggle the start button
                    $(triggers.starter).fadeIn(500);
                },

                // Starts the quiz (hides start button and displays first question)
                startQuiz: function(startButton) {
                    $(startButton).fadeOut(300, function(){
                        var firstQuestion = $('#' + selector + ' .questions li').first();
                        if (firstQuestion.length) {
                            firstQuestion.fadeIn(500);
                        }
                    });
                },

                // Validates the response selection(s), displays explanations & next question button
                checkAnswer: function(checkButton) {
                    var questionLI   = $($(checkButton).parents('li.question')[0]),
                        answerInputs = questionLI.find('input:checked'),
                        answers      = questions[parseInt(questionLI.attr('id').replace(/(question)/, ''))].a;

                    // Collect the true answers needed for a correct response
                    var trueAnswers = [];
                    for (i in answers) {
                        if (answers.hasOwnProperty(i)) {
                            var answer = answers[i];

                            if (answer.correct) {
                                trueAnswers.push(answer.option);
                            }
                        }
                    }

                    // Collect the answers submitted
                    var selectedAnswers = []
                    answerInputs.each( function() {
                        // If we're in jQuery Mobile, grab value from nested span
                        if ($('.ui-mobile').length > 0) {
                            var inputValue = $(this).next('label').find('span.ui-btn-text').html();
                        } else {
                            var inputValue = $(this).next('label').html();
                        }

                        selectedAnswers.push(inputValue);
                    });

                    if (plugin.config.preventUnanswered && selectedAnswers.length == 0) {
                        alert('You must select at least one answer.');
                        return false;
                    }

                    // Verify all true answers (and no false ones) were submitted
                    var correctResponse = plugin.method.compareAnswers(trueAnswers, selectedAnswers);

                    if (correctResponse) {
                        questionLI.addClass('correctResponse');
                    }

                    // If response messaging hasn't been disabled, toggle the proper response
                    if (!plugin.config.disableResponseMessaging) {
                        // If response messaging hasn't been set to display upon quiz completion, show it now
                        if (!plugin.config.completionResponseMessaging) {
                            questionLI.find('.answers').hide();
                            questionLI.find('.responses').show();

                            $(checkButton).hide();
                            questionLI.find('.nextQuestion').fadeIn(300);
                            questionLI.find('.backToQuestion').fadeIn(300);
                        }

                        // Toggle responses based on submission
                        if (correctResponse) {
                            questionLI.find('.correct').fadeIn(300);
                        } else {
                            questionLI.find('.incorrect').fadeIn(300);
                        }
                    }
                },

                // Moves to the next question OR completes the quiz if on last question
                nextQuestion: function(nextButton) {
                    var currentQuestion = $($(nextButton).parents('li.question')[0]),
                        nextQuestion    = currentQuestion.next('.question'),
                        answerInputs    = currentQuestion.find('input:checked');

                    // If response messaging has been disabled or moved to completion,
                    // make sure we have an answer if we require it, let checkAnswer handle the alert messaging
                    if (plugin.config.preventUnanswered && answerInputs.length == 0) {
                        return false;
                    }

                    if (nextQuestion.length) {
                        currentQuestion.fadeOut(300, function(){
                            nextQuestion.find('.backToQuestion').show().end().fadeIn(500);
                        });
                    } else {
                        plugin.method.completeQuiz();
                    }
                },

                // Go back to the last question
                backToQuestion: function(backButton) {
                    var questionLI = $($(backButton).parents('li.question')[0]),
                        answers    = questionLI.find('.answers');

                    // Back to previous question
                    if (answers.css('display') === 'block' ) {
                        var prevQuestion = questionLI.prev('.question');

                        questionLI.fadeOut(300, function() {
                            prevQuestion.removeClass('correctResponse');
                            prevQuestion.find('.responses, .responses li').hide()
                            prevQuestion.find('.answers').show();
                            prevQuestion.find('.checkAnswer').show();

                            // If response messaging hasn't been disabled or moved to completion, hide the next question button
                            // If it has been, we need nextQuestion visible so the user can move forward (there is no separate checkAnswer button)
                            if (!plugin.config.disableResponseMessaging && !plugin.config.completionResponseMessaging) {
                                prevQuestion.find('.nextQuestion').hide();
                            }

                            if (prevQuestion.attr('id') != 'question0') {
                                prevQuestion.find('.backToQuestion').show();
                            } else {
                                prevQuestion.find('.backToQuestion').hide();
                            }

                            prevQuestion.fadeIn(500);
                        });

                        // Back to question from responses
                    } else {
                        questionLI.find('.responses').fadeOut(300, function(){
                            questionLI.removeClass('correctResponse');
                            questionLI.find('.responses li').hide();
                            answers.fadeIn(500);
                            questionLI.find('.checkAnswer').fadeIn(500);
                            questionLI.find('.nextQuestion').hide();

                            // if question is first, don't show back button on question
                            if (questionLI.attr('id') != 'question0') {
                                questionLI.find('.backToQuestion').show();
                            } else {
                                questionLI.find('.backToQuestion').hide();
                            }
                        });
                    }
                },

                // Hides all questions, displays the final score and some conclusive information
                completeQuiz: function() {
                    var score     = $('#' + selector + ' .correctResponse').length,
                        levelRank = plugin.method.calculateLevel(score),
                        levelText = levels[levelRank];
                    var overallScore = score * timesScore;

                    console.log(score);
                    console.log(overallScore);
                    localStorage.setItem('score_bottle', overallScore);
                    $('#redeemScore').html(overallScore); /**** Displayed on the app ****/
                    $('#score_bottle').val(overallScore);/***** Input to submt ******/
                    $(targets.quizScore + ' span').html(score + ' / ' + questionCount);
                    $(targets.quizLevel + ' span').html(levelText);
                    $(targets.quizLevel).addClass('level' + levelRank);

                    $(targets.quizArea).fadeOut(300, function() {
                        // If response messaging is set to show upon quiz completion, show it
                        if (plugin.config.completionResponseMessaging && !plugin.config.disableResponseMessaging) {
                            $('#' + selector + ' .questions input').prop('disabled', true);
                            $('#' + selector + ' .questions .button, #' + selector + ' .questions .questionCount').hide();
                            $('#' + selector + ' .questions .question, #' + selector + ' .questions .responses').show();
                            $(targets.quizResults).append($('#' + selector + ' .questions')).fadeIn(500);
                        } else {
                            $(targets.quizResults).fadeIn(500);
                        }
                    });
                },

                // Compares selected responses with true answers, returns true if they match exactly
                compareAnswers: function(trueAnswers, selectedAnswers) {
                    if (trueAnswers.length != selectedAnswers.length) {
                        return false;
                    }

                    var trueAnswers     = trueAnswers.sort(),
                        selectedAnswers = selectedAnswers.sort();

                    for (var i = 0, l = trueAnswers.length; i < l; i++) {
                        if (trueAnswers[i] !== selectedAnswers[i]) {
                            return false;
                        }
                    }

                    return true;
                },

                // Calculates knowledge level based on number of correct answers
                calculateLevel: function(correctAnswers) {
                    var percent = correctAnswers / questionCount,
                        level   = 0;

                    if (plugin.method.inRange(0, 0.20, percent)) {
                        level = 5;
                    } else if (plugin.method.inRange(0.21, 0.40, percent)) {
                        level = 4;
                    } else if (plugin.method.inRange(0.41, 0.60, percent)) {
                        level = 3;
                    } else if (plugin.method.inRange(0.61, 0.80, percent)) {
                        level = 2;
                    } else if (plugin.method.inRange(0.81, 1.00, percent)) {
                        level = 1;
                    }

                    return level;
                },

                // Determines if percentage of correct values is within a level range
                inRange: function(start, end, value) {
                    if (value >= start && value <= end) {
                        return true;
                    }
                    return false;
                }
            }

            plugin.init = function() {

                // Setup quiz
                plugin.method.setupQuiz();

                // Bind "start" button
                $(triggers.starter).bind('click', function(e) {
                    e.preventDefault();
                    plugin.method.startQuiz(this);
                });

                // Using 'live' instead of 'bind' since these triggers are generated
                // on the fly in setupQuiz and thus won't be available on page load

                // Bind "submit answer" button
                $(triggers.checker).on('click', function(e) {
                    e.preventDefault();
                    plugin.method.checkAnswer(this);
                });

                // Bind "back" button
                $(triggers.back).on('click', function(e) {
                    e.preventDefault();
                    plugin.method.backToQuestion(this);
                });

                // Bind "next question" button
                $(triggers.next).on('click', function(e) {
                    e.preventDefault();
                    plugin.method.nextQuestion(this);

                });
            };

            plugin.init();
            var datefrom = $('#datePublished').val();
            var dateto = $('#dateExpire').val();
            localStorage.setItem('dateFrString', datefrom);
            localStorage.setItem('dateToString', dateto);
        };

        $.fn.slickQuiz = function(options) {
            return this.each(function() {
                if (undefined == $(this).data('slickQuiz')) {
                    var plugin = new $.slickQuiz(this, options);
                    $(this).data('slickQuiz', plugin);
                }
            });
        }
    })(jQuery);
