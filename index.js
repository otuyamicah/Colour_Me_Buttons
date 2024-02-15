document.getElementById('red').addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})  
document.getElementById('blue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
})  
document.getElementById('green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})  
document.getElementById('yellow').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
    document.getElementById('colourText').style.color = 'black';
})  
document.getElementById('black').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
    document.getElementById('colourText').style.color = 'white';
})  
document.getElementById('white').addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
    document.getElementById('colourText').style.color = 'black';
})  
