
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
    var audioFiles = {
        "getRupee": "assets/sound/WW_Get_Rupee.wav",
        "fanFare": "assets/sound/WW_Fanfare_SmallItem.wav",
        "youLose": "assets/sound/WW_Ganondorf_Final_TriforceLaugh1.wav"
    }

    function restart() {
        playerPoints = 0;
        
        goalPoints = Math.floor(Math.random() * (121 - 19)) + 19;
        redRupee = Math.floor(Math.random() * (12)) + 1;
        greenRupee = Math.floor(Math.random() * (12)) + 1;
        blueRupee = Math.floor(Math.random() * (12)) + 1;
        yellowRupee = Math.floor(Math.random() * (12)) + 1;

        document.getElementById("goal").innerText = goalPoints;

    };   
    
    
    function playSound(audioFile) {
        var player = document.getElementById("audioPlayer");
        player.src=audioFiles[audioFile];
        player.play();
        }

    $("#redc").click(function() {
       playerPoints = redRupee + playerPoints;
       $("#currentScore").html(playerPoints);
       playSound("getRupee");
       victory();
       loss();
    })

    $("#greenc").click(function() {
        playerPoints = greenRupee + playerPoints;
        $("#currentScore").html(playerPoints);
        playSound("getRupee");
        victory();
        loss();
     })

     $("#bluec").click(function() {
        playerPoints = blueRupee + playerPoints;
        $("#currentScore").html(playerPoints);
        playSound("getRupee");
        victory();
        loss();
     })
     
     $("#yellowc").click(function() {
        playerPoints = yellowRupee + playerPoints;
        $("#currentScore").html(playerPoints);
        playSound("getRupee");
        victory();
        loss();
     })

     function victory() {
         if(playerPoints === goalPoints) {
             wins++;
             $("#currentWins").html("Wins: " + wins)
             playSound("fanFare");
             finishGame = true;
         }
     }

     function loss() {
         if(playerPoints > goalPoints) {
             losses++;
             $("#currentLosses").html("Losses: " + losses);
             playSound("youLose");
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