prediction1 = "";
prediction2 = "";

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
 Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML = '<img id = "captured_image" src="'+data_uri+'">';



 });


}

function speak() {
var speaking = window.speechSynthesis;
speak_data_1 = "the first prediction is "+ prediction1;
speak_data_2 = "the second prediction is "+ prediction2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
speaking.speak(utterThis);


}
console.log("ml5 version is",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelloaded);
function modelloaded() {
console.log("the models is loaded successfully");
}


function check() {
img = document.getElementById("captured_image");
classifier.classify(img, gotResult);
  }

function gotResult(error , results) {
if (error) {
console.error(error);
} else {
console.log(results);
document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;
prediction1 = results[0].label;
prediction2 = results[0].label; 
speak();
if (results[0].label == "victory gesture")
{
  document.getElementById("update_emoji").innerHTML = "&#128406;";
}

if (results[0].label == " Thumbs up gesture")
{
  document.getElementById("update_emoji").innerHTML = "&#128077;";
}

if (results[0].label == "awesome gesture")
{
  document.getElementById("update_emoji").innerHTML = "&#128076;";
}

if (results[1].label == "victory gesture")
{
  document.getElementById("update_emoji").innerHTML = "&#128406;";
}

if (results[1].label == " Thumbs up gesture")
{
  document.getElementById("update_emoji").innerHTML = "&#128077;";
}

if (results[1].label == "awesome gesture")
{
  document.getElementById("update_emoji").innerHTML = "&#128076;";
}








}




















}