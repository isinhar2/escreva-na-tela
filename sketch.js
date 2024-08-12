function setup() {
    createCanvas(400, 400);
    background("white")
}
function draw() {
    stroke("blue");
    fill("red");
    if (mouseIsPressed) {
        Reflect(mouseX, mouseY, 20, 35);
    }
}