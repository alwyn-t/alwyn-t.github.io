window.onresize = snapToId;
window.onload = updateIdToUrl;

function snapToId(){
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
    }else if(document.getElementById('p7').checked) {
        window.location='#contact-page';
    }
}

function updateIdToUrl(){
    let url = window.location.href;
    let url_split = url.split('#');
    console.log('loaded url: ' + url);
    if(url_split.length > 1){
        console.log('loaded id: ' + url_split[1]);
        if(url_split[1] == "landing-page"){
            document.getElementById('p0').checked = true;
        }else if(url_split[1] == "landing-page"){
            document.getElementById('p1').checked = true;
        }else if(url_split[1] == "circle-page"){
            document.getElementById('p2').checked = true;
        }else if(url_split[1] == "chess-page"){
            document.getElementById('p3').checked = true;
        }else if(url_split[1] == "-page"){
            document.getElementById('p4').checked = true;
        }else if(url_split[1] == "-page"){
            document.getElementById('p5').checked = true;
        }else if(url_split[1] == "-page"){
            document.getElementById('p6').checked = true;
        }else if(url_split[1] == "contact-page"){
            document.getElementById('p7').checked = true;
        }
    }
    snapToId;
}