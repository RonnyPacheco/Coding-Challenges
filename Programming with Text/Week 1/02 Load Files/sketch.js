var textTest;

function preload() {
    textTest = loadStrings("text.txt");

}

function setup() {
    noCanvas();
    console.log(textTest);
    createP(textTest);
}