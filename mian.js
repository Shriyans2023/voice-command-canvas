x = 0;
y = 0;
draw_apple = "";
draw_2_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML= "The Speech has been recognized as: " + content;
    if(content=="apple")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing apple ";
        draw_circle="set";
    }
    if(content=="2 apples")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 2 apples ";
        draw_rect="set";
    }
}

function setup() { 
    canvas= createCanvas(900,600);
}

function draw() {
    if(draw_2_apple=="set")
    {
        radius = Math.floor(math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML= "Apple is drawn. ";
        draw_apple="";
    }
    if(draw_apple=="set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML= "2 Apples are drawn. ";
        draw_2_apple="";
    }
    }