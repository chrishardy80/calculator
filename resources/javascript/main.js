$(document).ready(function() {

  var solution = [];
  var log = [];
  var answer = '';
  var logDisplay = '';
  var answerLength = '';


  $('.button.number').click(function() {

    if (log.length > 18) {
      return;
    }

    if (log.includes('=')) {
      log = [];
      solution = [];
    }

    //Ensure input length is not more than 8
    if (solution.includes('.')) {
      answerLength = solution.length -1;
    }

    else {
      answerLength = solution.length;
    }

    if (answerLength === 8) {
      return;
    }

    else {
    if (isNaN(answer)) {
      solution = [$(this).attr("value")];
    }
    else {
      solution.push($(this).attr("value"));
      answer = solution;
    }



    log.push($(this).attr("value"));
    answer = solution.join("");
    logDisplay =log.join("");
    $('.answer').html(answer);
    $('.log').html(logDisplay);
    console.log(log);
    console.log(answerLength)
  }
  });

  // AC button

  $('#ac').click(function() {
    answer = 0;
    solution =[];
    log=[];
    logDisplay = 0;
    $('.answer').html(answer);
    $('.log').html(logDisplay);
  });

  // CE button

  $('#ce').click(function() {
    answer = 0;
    solution = [];
    if (log[log.length-1] === '+' ||
        log[log.length-1] === '-' ||
        log[log.length-1] === '/' ||
        log[log.length-1] === '*') {
          log.pop();
        }
    else {
      while (log[log.length-1] === '0' ||
            log[log.length-1] === '1' ||
            log[log.length-1] === '2' ||
            log[log.length-1] === '3' ||
            log[log.length-1] === '4' ||
            log[log.length-1] === '5' ||
            log[log.length-1] === '6' ||
            log[log.length-1] === '7' ||
            log[log.length-1] === '8' ||
            log[log.length-1] === '9' ||
            log[log.length-1] === '.'
          )
             {
            if (log == 0) {
              return;
            }
            else {
            log.pop();
          }

        }

    }
    if (log == 0) {
      logDisplay = 0;
    }
    else {
    logDisplay =log.join("");
    }
    $('.log').html(logDisplay);
    $('.answer').html(answer);
  });

  // Operator buttons

  $('.button.operators').click(function() {

    if (log.length > 18 && log[log.length-1] != '=') {
      return;
    }

    //If last button pressed was 'equals', summarise the log.
    if (log[log.length-1] == '=') {
      log=[];
      log.push(answer);
    }
    //If last button pressed was an operator, replace it with the new operator
    if ((log[log.length-1] == '+') || (log[log.length-1] == '-')
       || (log[log.length-1] == '/') || (log[log.length-1] == '*')) {
         log.pop();
       }

    solution = [];

    log.push($(this).attr("value"));

    logDisplay = log.join("");
    $('.log').html(logDisplay);
    $('.answer').html(answer);
    console.log(log);
  });

  // Equals button

  $('#equals').click(function() {
    if (log.includes('=')) {
      return;
    }

    if (log.length > 22) {
      logDisplay.slice(0);
      console.log('its massive!');
    }

    if ((log[log.length-1] == '+') || (log[log.length-1] == '-')
       || (log[log.length-1] == '/') || (log[log.length-1] == '*')) {
         log.pop();
         logDisplay = log.join('');
       }



      log.push($(this).attr("value"));



    var checkfordecimal = eval(logDisplay);
    if (checkfordecimal % 1 != 0){
      answer = checkfordecimal.toFixed(2);
      if (answer.toString().length > 9) {
        answer = 0;
        logDisplay = 'Digit Limit Met';
        $('.log').html(logDisplay);
      }
      else {
        $('.log').html(logDisplay + "=" + answer);
      }
      }

    else {
      answer = checkfordecimal;
      if (answer.toString().length > 8) {
        answer = 0;
        logDisplay = 'Digit Limit Met';
        $('.log').html(logDisplay);
      }
      else {
        $('.log').html(logDisplay + "=" + answer);
      }
    }



    $('.answer').html(answer);
    console.log(log);

  });

  // Decimal button
  $('#decimal').click(function() {

    if (log.length > 18) {
      return;
    }

    if (log.includes('=')) {
      log = [];
      solution = [];
    }

  // if answer already contains decimal, don't allow another
  if (solution.includes('.')) {
    return;
  }

  else {

    //If decimal is pressed without a number preceding it, 0 is added
    if (solution == 0) {
      solution.push('0');
      log.push('0');
    }
  log.push($(this).attr("value"));
  solution.push($(this).attr("value"));
  answer = solution.join("");
  logDisplay =log.join("");
  $('.answer').html(answer);
  $('.log').html(logDisplay);

  }
  });




});
