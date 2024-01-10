Webcam.set(
    {
        width:350,
        height:300,
        image_format:"png",
        png_quality:90
    }
);
camera = document.getElementById("webcam")
Webcam.attach("#webcam");

function capture()
{
    Webcam.snap(
        function(data_uri){
        document.getElementById("output").innerHTML= '<img id="pic" src="'+data_uri+'"/>';}
    );
}
console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CMsB45U5-/model.json,modelloaded')
function modelloaded()
{
    console.log("model loaded");
}