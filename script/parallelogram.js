function ParallelogramBtn(){
    const getBase = document.getElementById('Parallelogram-base').value;
    const base = parseFloat(getBase);
  
    const getHeight = document.getElementById('Parallelogram-height').value;
    const height = parseFloat(getHeight);
  
    const area = base * height;
    const display = document.getElementById('parallelogramArea');
    display.innerText = area;

}