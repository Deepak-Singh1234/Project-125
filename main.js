noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(908,290);
    video = createCapture(VIDEO);
    video.size(550,550);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('modelLoaded!');
}   

function gotPoses(results){
   
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX );
        console.log("noseY = "+ noseY );
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}



function draw(){
    background("#c2c2a3");
    fill("#ffff00");
    stroke("#00ffff");
    textSize(difference)
    text("Deepak" , noseX , noseY);
    document.getElementById("hello").innerHTML = difference;
}

