function triangleBtn(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const baseInputText = triangleBaseInput.value;
    const base = parseFloat(baseInputText);
    console.log(base);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // triangle area
    const area = 0.5 * base * height;
    console.log(area);

    // display result
    const show = document.getElementById("triangleArea");
    show.innerText = area;
}
