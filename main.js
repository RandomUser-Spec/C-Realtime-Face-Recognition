//https://teachablemachine.withgoogle.com/models/ez0cwSe5O/

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ez0cwSe5O/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResults);
}

function gotResults(error, results){
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("accuracy_object_name").innerHTML = (results[0].confidence*100).toFixed()+"%";
        if(results[0].label == "Kitty")
        {
            document.getElementById("emoji").innerHTML = "&#128049;"
        }
        if(results[0].label == "Dinosaur")
        {
            document.getElementById("emoji").innerHTML = "&#129430;"
        }
        if(results[0].label == "Monkey")
        {
            document.getElementById("emoji").innerHTML = "&#128053;"
        }
        if(results[0].label == "Dog")
        {
            document.getElementById("emoji").innerHTML = "&#128021;"
        }
    }
}