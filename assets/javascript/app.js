
window.onload = function() {

  $("#submit").click(tabulateAnswers)
  $("#submit").click(hide)
  $("#start").click(stopwatch.start);
  
  //$("#page2").html(rancolor)
};

var number = 0
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

//  Our stopwatch object.
var stopwatch = {

  time: 30,
  

  reset: function() {

    stopwatch.time = 30;
    

  },

  start: function() {
    intervalId = setInterval(increment, 1000);

    function increment() {

      stopwatch.time--;

      $("#display").html(stopwatch.time);
     
      
    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      
        if (stopwatch.time == -1) {
          show()
          hide()
          tabulateAnswers()
          stopwatch.reset()
        }
       
    }

  }//end incr()
},//end start()

  stop: function() {

    clearInterval(intervalId);

    
  }

  
  

}


function show(){
  document.getElementById('page3').style.visibility='visible';
  }


  function hide(){
    document.getElementById('page2').style.visibility='hidden';
      }


  function show1(){
      document.getElementById('page2').style.visibility='visible';
      document.getElementById('start').style.visibility='hidden';
  }

function tabulateAnswers() {
 
  var correct = 0;
  var wrong = 0;
  var unans = 0;
  
  var choices = document.getElementsByTagName('input');
  
  for (i=0; i<choices.length; i++) {
   
    if (choices[i].checked) {
      
      if (choices[i].value == 'true') {
        correct = correct + 1;
      }
      if (choices[i].value == 'false') {
        wrong = wrong + 1;
      }
     

    }
  }
  
  var sub = correct + wrong
  //console.log(sub)

  var unans = (5 - sub)
  
  var total1 = document.getElementById('right')
 
    total1.innerHTML = correct
  
  var total2 = document.getElementById("wrong")
    total2.innerHTML = wrong

  
  var total3 = document.getElementById("unanswered")
     total3.innerHTML = unans


  
}

var colorArray = [];
var randomColor;

function rancolor(){
  randomColor = Math.floor(Math.random()*16777215).toString(16);
  //colorArray.push(randomColor)
  //return randomColor
}

rancolor()

console.log(randomColor)
console.log(typeof randomColor)

function addColor(){
  document.getElementById("qq1").style.color = '#' + randomColor;
  document.getElementById("qq3").style.color = '#' + randomColor;
  document.getElementById("qq5").style.color = '#' + randomColor;
}
addColor()

//function addColor(){
//  document.getElementById("q2").style.color = '#' + randomColor;/
//}
//addColor()