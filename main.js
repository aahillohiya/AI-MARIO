img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioX = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_jump = loadSound("jump.wav");
	mario_death = loadSound("miriodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("GAMEconcole");

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",gotPoses)

	instializeInSetup(mario);
}

function draw() {
	game()
} 

function modelLoaded() {
	console.log("Model is Loaded");
}

function gotPoses(results) {
	if (results.length>0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}