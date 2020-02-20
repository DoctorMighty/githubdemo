function Time(){   
    var timeleft = document.getElementById("userInput").value;
        var downloadTimer = setInterval(function(){
       parseInt(timeleft);
          timeleft--;
        document.getElementById("Number").textContent = timeleft;
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        },1000);
    
        }