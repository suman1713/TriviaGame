var answer1=0, answer2=0,answer3=0,answer4=0,answer5=0;

window.onload = function() {
  $("#btn-start").on("click", start);

  $("#submit_button").on("click", onsubmit);
  $("#submit_button").on("click", stopwatch.stop);





$("#btn-start").on("click", stopwatch.start);
  
  $("input[name=q1]").on("click", function(){
   answer1=($('input[name=q1]:checked').val());
   console.log(answer1);
   });
  $("input[name=q2]").on("click", function(){
   answer2=($('input[name=q2]:checked').val());
   console.log(answer2);
   });
  $("input[name=q3]").on("click", function(){
   answer3=($('input[name=q3]:checked').val());
   console.log(answer3);
   });
  $("input[name=q4]").on("click", function(){
   answer4=($('input[name=q4]:checked').val());
   console.log(answer4);
   });
  $("input[name=q5]").on("click", function(){
   answer5=($('input[name=q5]:checked').val());
   console.log(answer5);
   });

  

};
 
 var intervalId;
 

//prevents the clock from being sped up unnecessarily
var sclockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 60,
  lap: 1,

  reset: function() {

    stopwatch.time = 60;
    stopwatch.lap = 1;

  
    
  },
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!sclockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        
    }
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;
      if (stopwatch.time==00) {
              

         onsubmit(); 

      
      clearInterval(intervalId);
    }else{

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
   

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#timer").html(converted);}
  },
  timeConverter: function(t) {

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














};

function onsubmit(){
  $("#questions").addClass("hidden");
  $("#submit_button").addClass("hidden");
  $("#restart_button").removeClass("hidden");
  showanswers();
  stopwatch.stop();
  
  
  

}

function start(){
 $("#questions").removeClass("hidden");
  $("#btn-start").hide();
  $("#submit_button").removeClass("hidden");
}


$("#restart_button").on("click", function(){
  $("#restart_button").addClass("hidden");
  stopwatch.reset();
  stopwatch.start();
  start();
});

function showanswers(){
  var wins=0,loss=0,unanswer=0;
  if(answer1===3){
            wins++;
          }else if (answer1==1|answer1==2|answer1==4) {
            loss++;
          } else{
            unanswer++;
          }

          if(answer2===4){
            wins++;
          }else if (answer2==1|answer2==2|answer2==3) {
            loss++;
          } else{
            unanswer++;
          }

        if(answer3===3){
            wins++;
          }else if (answer3==1|answer3==2|answer3==4) {
            loss++;
          } else{
            unanswer++;
          }

          if(answer4===1){
            wins++;
          }else if (answer4==3|answer4==2|answer4==4) {
            loss++;
          } else{
            unanswer++;
          }

          if(answer5===3){
            wins++;
          }else if (answer5==1|answer5==2|answer5==4) {
            loss++;
          } else{
            unanswer++;
          }
          $("#results").html("<h1>Correct Answers: "+wins+"</h1><br><h1>Wrong Answers: "+loss+"</h1><br><h1> Unanswered Questions: "+unanswer+"</h1><br>");
}