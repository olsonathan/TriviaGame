//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function() {

  //  Click events are done for us:
  $("#lap").click(stopwatch.recordLap);
  $("#stop").click(stopwatch.stop);
  $("#reset").click(stopwatch.reset);
  $("#start").click(stopwatch.start);
};

var number = 0
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

//  Our stopwatch object.
var stopwatch = {

  time: 30,
  lap: 1,

  reset: function() {

    stopwatch.time = 30;
    stopwatch.lap = 1;

    //  TODO: Change the "display" div to "00:00."

  },

  start: function() {
    intervalId = setInterval(increment, 1000);

    function increment() {

      stopwatch.time--;

      $("#display").html(stopwatch.time);
      
    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      
      
       
    }

  };},

  stop: function() {

    clearInterval(intervalId);

    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.

  },

  recordLap: function() {

    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.

    //  TODO: Add the current lap and time to the "laps" div.

    //  TODO: Increment lap by 1. Remember, we can't use "this" here.
  },
  count: function() {

    //  TODO: increment time by 1, remember we cant use "this" here.

    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.

    //  TODO: Use the variable you just created to show the converted time in the "display" div.

  },

  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.

  timeConverter: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
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







initilize();
  

var resetGame = function () {
  counter = 0;
  targetNumber = 0;
  numberOptions = 0;
  rerun()
  
 }                                                        


 var targetNumber;
 var win = 0
 var lose = 0



function initilize() {

var k = 0

if (k >= 0) {


  var Tmax = 120;
  var Tmin = 19;

  var x = (Math.random()*((Tmax-Tmin)))+Tmin;
  var r = (Math.round)(x)
  targetNumber = r
  console.log(r)


  $("#number-to-guess").text(targetNumber);

 
  var numberOptions = [];
  var k = 0

  while (k < 4){
    var Omax = 12;
    var Omin = 1;
  

  var q = (Math.random()*((Omax-Omin)))+Omin;
  var a = (Math.round)(q)
  numberOptions.push(a)
  console.log(a)
  console.log(numberOptions)
  var k = (k + 1)
    }
  counter = 0;
 
  $("#wins").text(win);
  $("#losses").text(lose);
  

  var imgArray = ["assets/images/00261fda-4062-4096-81fd-8cf96b9034e8.jpg", 
  "assets/images/photo-1544274101-42412eeff2c5.jpg",
  "assets/images/photo-1533737338828-ebebc30718b3.jpg",
  "assets/images/photo-1544274102-2fe4d95912f7.jpg",
  ]


  for (var i = 0; i < numberOptions.length; i++) {

    
    var imageCrystal = $("<img>");

    
    imageCrystal.addClass("crystal-image");

    
    imageCrystal.attr("src", imgArray[i]);

    
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    
    $("#crystals").append(imageCrystal);
  }

}

return targetNumber

}
  
  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    counter += crystalValue;

   
    document.getElementById("demo").innerHTML = counter;
 
    

    if (counter === targetNumber) {
      document.getElementById("demo1").innerHTML = "You Win!!";
      
      win = (win + 1);
      
      
      $("#wins").text(win);
      resetGame()
      
    }

    else if (counter >= targetNumber) {
      document.getElementById("demo1").innerHTML = "You lose!!";
      
      lose = (lose + 1)
      $("#losses").text(lose);
      resetGame()
      
      }
  });

  console.log(targetNumber)
  
    

  function rerun() {

    var k = 0
    
    if (k >= 0) {
 
      var Tmax = 120;
      var Tmin = 19;
      
    
      var x = (Math.random()*((Tmax-Tmin)))+Tmin;
      var r = (Math.round)(x)
      targetNumber = r
      console.log(r)
    
    
      $("#number-to-guess").text(targetNumber);
    
     
      var numberOptions = [];
      var k = 0
    
      while (k < 4){
        var Omax = 12;
        var Omin = 1;
      
    
      var q = (Math.random()*((Omax-Omin)))+Omin;
      var a = (Math.round)(q)
      numberOptions.push(a)
      console.log(a)
      console.log(numberOptions)
      var k = (k + 1)
        }
      counter = 0;
     
      $("#wins").text(win);
      $("#losses").text(lose);
      
    
      
      for (var i = 0; i < numberOptions.length; i++) {
    
       
        var imageCrystal = $("<img>");
    
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    
        
        $("#crystals").append(imageCrystal);
      }
    
    }
    
    return targetNumber
    
    }

  