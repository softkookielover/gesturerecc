function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function draw(){
    background('#FF0000');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}