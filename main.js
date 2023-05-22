function setup() {
	canvas = createCanvas(1240,336);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(1140,300);

	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Model Loaded!');
}

function gotPoses