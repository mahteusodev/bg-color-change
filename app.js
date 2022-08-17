let btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
 
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('text').innerHTML = `rgb(${r}, ${g}, ${b})`;

    if (r < 100 && g < 100 && b < 100){
        document.getElementById('text').style.color = '#FFF';
        document.getElementById('btn').style.color = '#FFF';
        document.getElementById('btn').style.borderColor = '#FFF';
        document.getElementById('creator').style.color = '#FFF';
    } else {
        document.getElementById('text').style.color = '#000';
        document.getElementById('btn').style.color = '#000';
        document.getElementById('btn').style.borderColor = '#000';
        document.getElementById('creator').style.color = '#000';
    }
})