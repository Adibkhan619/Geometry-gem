function rectangleBtn(){
    // rectangle width
    const getWidth = document.getElementById('rectangle-width').value;
    const width = parseFloat(getWidth);


    // rectangle length
    const getLength = document.getElementById('rectangle-length').value;
    const length = parseFloat(getLength);
    
    // rectangle area
    const area = width * length;

    // display rectangle area
    const display = document.getElementById('rectangleArea');
    display.innerText = area;
}