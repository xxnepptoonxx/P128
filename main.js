song_1 = "";
song_2 = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristY = 0;
RightWristX = 0;
function preload() {
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song_1.play();

}

function gotPoses (results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+LeftWristY);
    }
}
