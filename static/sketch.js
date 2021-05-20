let midiOutput;
let button;
let t1;
let t2;
let timer = 0;

function preload() {
  t1 = loadJSON("/getdata")
  t2 = loadJSON("/getlights")
}

function setup() {
  createCanvas(400, 400);

  button = createButton("send note to trellis", 500, 500);
  button.mousePressed(buttonPressed);
  t = "hello"
  text(t, 100, 100);
  text(t1.message, 100, 150);
  text(t2[0], 100, 200);
  text(t2[0][0], 100, 250);
}

function draw() {
  // background(255);

  
  
  fill(0);
  ellipse(mouseX, mouseY, 25, 25);

  


  if (millis() >= 2000+timer) {
    WebMidi.outputs[0].playNote(random(9,16));
    console.log("auto note sent")
    timer = millis();
  }
}


function buttonPressed(){
  
  WebMidi.outputs[0].playNote(random(1,8));
  console.log("note sent")
  
}

WebMidi.enable(function (err) {
  if (err) {
    console.log("WebMidi could not be enabled.", err);
  }
  WebMidi.outputs[0].playNote("C3");
  // Print available MIDI outputs
  for(let i = 0; i < WebMidi.outputs.length; i++){
  	console.log(WebMidi.outputs[i].name);
  }
  

});

WebMidi.enable(function(err) {
   if (err) console.log("An error occurred", err);

   WebMidi.inputs[0].addListener("noteon", "all", function(e) {
     // console.log("object data: " + JSON.stringify(e));
     console.log("Received " + e.data[1] + ", " + e.data[2])
     fill(random(0,255), random(0,255), random(0,255));
     ellipse(e.data[1]*25, e.data[2]*25, 25, 25);
   });

 });