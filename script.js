window.onresize = snapToID;
window.onload = snapToID;

function snapToID(){
    if(document.getElementById('p0').checked) {
        window.location='#landing-page';
    }else if(document.getElementById('p1').checked) {
        window.location='#circle-page';
    }else if(document.getElementById('p2').checked) {
        window.location='#chess-page';
    }else if(document.getElementById('p3').checked) {
        window.location='#landing-page';
    }else if(document.getElementById('p4').checked) {
        window.location='#landing-page';
    }else if(document.getElementById('p5').checked) {
        window.location='#landing-page';
    }else if(document.getElementById('p6').checked) {
        window.location='#landing-page';
    }
}