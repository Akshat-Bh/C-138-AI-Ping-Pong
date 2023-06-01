scoreRighttWrist= 0;
right_wristX= 0;
right_wristY = 0;

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

function gotPoses(results)
  {
	if(results.length > 0)
	{
      rightWristX= results[0].pose.rightWrist.x;
      rightWristY= results[0].pose.rightWrist.y;

      scoreRighttWrist= results[0].pose.keypoint[10].score;
      console.log("scoreRightWrist = " + scoreRightWrist);

	  console.log(results);
	}
  }

  if(scoreRightWrist > 0.2)
    {
    fill("#FFFF00");
    stroke("#FFFF00");
    circle(rightWristX, rightWristY, 20);
    }