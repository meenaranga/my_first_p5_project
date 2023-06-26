function preload()
{
    
}
function setup()
{
    canvas = createCanvas( 700 , 700 );
    canvas.position(110 , 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    circle(150, 500, 30);

    ellipse(40, 300, 55, 55);

    rect(600, 40, 150, 250);
}