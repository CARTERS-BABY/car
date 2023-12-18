var video = ''
var status = ''
var object = []
var nome = 'car'
function preload(){
video = createVideo('video.mp4')

}

function setup(){
 canvas = createCanvas(630 , 360) 
    canvas.center()
   video.center()
   video.position(320 , 230)
   video.hide()
}

function draw(){
image(video , 0 , 0 , 630 , 360) 
if(status != ''){
    objectdetector.detect(video,gotresult)
    for (let index = 0; index < object.length; index++) {
      document.getElementById('status').innerHTML = 'objetos detectados '
      document.getElementById('objetos').innerHTML = 'quantidade de objetos detectados: ' + object.length
fill('red')
porcento = floor(object[index].confidence * 100  )
text(object[index].label + ' ' + porcento + '%' , object[index].x , object[index].y)
        noFill()
        stroke('blue')
        rect(object[index].x , object[index].y , object[index].width , object[index].height )
if(object[index].label == nome ){
  document.getElementById('status').innerHTML = 'carro detectado'
}
    }
} 

}
function start(){
    objectdetector = ml5.objectDetector('cocossd' , modeloaded)
    document.getElementById('status').innerHTML = 'status : detectando objetos'

}
function modeloaded(){
console.log('model')
status = true 
video.loop()
video.speed(1)
video.volume(0)
}

function gotresult(error, result ){
if(error){
    console.log(error)
} 
    console.log(result)
    object = result

}


