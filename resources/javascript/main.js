$(document).ready(function() {

  var solution = [];
  var log = [];
  var answer = '';
  var logDisplay = '';


  $('.button.number').click(function() {

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
    solution.pop();
    answer = solution.join("");
    $('.answer').html(answer);
  });

  // Operator buttons

  $('.button.operators').click(function() {


    if (isNaN(answer[answer.length-1])) {
      answer = answer.slice(0, -1);
      log = log.slice(0, -1);
    }
    if (log.includes('+')) {
      answer = eval(logDisplay);
    }
    else {
      answer = solution.join("");
    }
    solution = [];
    //solution.push($(this).attr("value"));
    log.push($(this).attr("value"));

    logDisplay = log.join("");
    $('.log').html(logDisplay);
    $('.answer').html(answer);
  });

  // Equals button

  $('#equals').click(function() {

    log.push($(this).attr("value"));
    answer = eval(logDisplay);
    $('.answer').html(answer);
    $('.log').html(logDisplay + "=" + answer);
  });
});
