
$(document).ready(function(){

    var redRupee;
    var greenRupee;
    var blueRupee;
    var yellowRupee;
    var playerPoints = 0;
    var goalPoints;
    var wins = 0;
    var losses = 0;
    var finishGame = true;

    function restart() {
        playerPoints = 0;
        
        goalPoints = Math.floor(Math.random() * (121 - 19)) + 19;
        redRupee = Math.floor(Math.random() * (12)) + 1;
        greenRupee = Math.floor(Math.random() * (12)) + 1;
        blueRupee = Math.floor(Math.random() * (12)) + 1;
        yellowRupee = Math.floor(Math.random() * (12)) + 1;

        document.getElementById("goal").innerText = goalPoints;

    };   
    
    

    $("#redc").click(function() {
       playerPoints = redRupee + playerPoints;
       $("#currentScore").html(playerPoints);
       victory();
       loss();
    })

    $("#greenc").click(function() {
        playerPoints = greenRupee + playerPoints;
        $("#currentScore").html(playerPoints);
        victory();
        loss();
     })

     $("#bluec").click(function() {
        playerPoints = blueRupee + playerPoints;
        $("#currentScore").html(playerPoints);
        victory();
        loss();
     })
     
     $("#yellowc").click(function() {
        playerPoints = yellowRupee + playerPoints;
        $("#currentScore").html(playerPoints);
        victory();
        loss();
     })

     function victory() {
         if(playerPoints === goalPoints) {
             wins++;
             $("#currentWins").html(wins)
             finishGame = true;
         }
     }

     function loss() {
         if(playerPoints > goalPoints) {
             losses++;
             $("#currentLosses").html(losses);
             finishGame = true;
         }
     }

    
   document.onclick = function(event) {
       if(finishGame) {
           restart();
           finishGame = false;
       }
   }
   
})