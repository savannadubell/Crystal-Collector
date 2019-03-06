// Declaring variables for tallies 
var userTotal= 0; 
var wins= 0;
var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

// On open computer needs to produce a randome number 
// A number between 1-100 
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*100)+1; 

// Connecting the random number to the "randomNumber" id in html doc 
    $('#randomNumber').text(Random);
   
// Setting a random number for each jewel
// Random number for each jewel between 1 - 25  
    var number1 = Math.floor(Math.random()*25)+1
    var number2 = Math.floor(Math.random()*25)+1
    var number3 = Math.floor(Math.random()*25)+1
    var number4 = Math.floor(Math.random()*25)+1
   
//Game Reset
  function reset(){
        Random=Math.floor(Math.random()*100)+1;
       
        $('#randomNumber').text(Random);
        number1= Math.floor(Math.random()*25)+1;
        number2= Math.floor(Math.random()*25)+1;
        number3= Math.floor(Math.random()*25)+1;
        number4= Math.floor(Math.random()*25)+1;
        userTotal= 0;
       
        $('#finalTotal').text(userTotal);
        } 

//  Add the User Wins to User Total 
  function winner(){
  alert("You are a Winner!");
    wins++; 
    
    $('#numberWins').text(wins);
    reset();
  }
  // Add the User Looses to User Total 
    function loser(){
    alert ("You are bad and a Loser! Try Again.");
        losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  
//  Connect Clicks to Jewels 
    $('#bigBlue').on('click', function(){
      userTotal = userTotal + number1;
      console.log("userTotal= " + userTotal);
      
      $('#finalTotal').text(userTotal); 
    // Set if and else statements for user totals 
          if (userTotal == Random){
            winner();
          } else if ( userTotal > Random){
            loser();
          }   
    });  

    $('#bigGreen').on('click', function(){
      userTotal = userTotal + number2;
      console.log("userTotal= " + userTotal);
      
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winner();
          } else if ( userTotal > Random){
            loser();
          } 
    }); 

    $('#bigRed').on('click', function(){
      userTotal = userTotal + number3;
      console.log("userTotal= " + userTotal);

      $('#finalTotal').text(userTotal);
            if (userTotal == Random){
            winner();
          } else if ( userTotal > Random){
            loser();
          } 
    }); 

    $('#bigYellow').on ('click', function(){
      userTotal = userTotal + number4;
      console.log("userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 