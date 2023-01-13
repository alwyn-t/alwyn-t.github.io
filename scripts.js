window.onload = function exampleFunction() {
    console.log('Javascript loaded');
}
window.addEventListener('resize', function(event) {
    createStarArray();
    if(activeProject){
        if(inTransition){
            fullScreen(activeProject);
        }
    }
    // const gradientPrecent = 200/window.innerWidth*100;
    // document.getElementById('btn1').style.backgroundImage = 'linear-gradient(-120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) '+gradientPrecent+'%, rgb(86, 115, 148) 100%), url(Circle/ Serenity.png)';
}, true);
const btns = document.getElementsByClassName("btn");
const btnPos = [];
const backgroundEffectElement = document.getElementsByClassName("backgroundEffect");
window.onload = function loaded(){
    for(const element of btns){
        btnRect = element.getBoundingClientRect();
        x = (btnRect.left+btnRect.right)/2;
        y = (btnRect.top+btnRect.bottom)/2;
        btnPos.push({element, x,y});
    }
    for(const element of document.getElementsByClassName("secondaryBtn")){
        btnRect = element.getBoundingClientRect();
        x = (btnRect.left+btnRect.right)/2;
        y = (btnRect.top+btnRect.bottom)/2;
        btnPos.push({element, x,y});
    }
}

https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        for({element, x, y} of btnPos){
            dx = x-event.pageX;
            dy = y-event.pageY;
            dh = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            if(event.pageX-x!=0){
                theta = Math.asin(dy/dh);
                if(dx<0){
                    theta = Math.PI - theta;
                }
                theta = theta +Math.PI/2;
            }else{
                theta = null;
            }
            if(!inTransition){
                if(element.matches(':hover')){
                    // element.style.transform = 'rotateX('+dy/50+'deg) rotateY('+dx/(-50)+'deg)';
                    element.style.transform = 'rotateX('+Math.cos(theta)*10+'deg) rotateY('+Math.sin(theta)*10+'deg)';
                }else{
                    element.style.transform = 'rotate(0)';
                }
            }
        }

        //update backgroundEffect
        const maxSideLength = Math.max(window.innerHeight, window.innerWidth);
        const background = document.getElementById('backgroundEffect');
        background.setAttribute('height', maxSideLength);
        background.setAttribute('width', maxSideLength);
        const radial = document.getElementById('backgroundEffectRadial');
        radial.setAttribute('cx', event.pageX/maxSideLength);
        radial.setAttribute('cy', event.pageY/maxSideLength);
        background.setAttribute('fill', 'url(#backgroundEffectRadial)');
        // const rawBackground = document.getElementById('rawBackground');
        // rawBackground.setAttribute('fill', 'url(#backgroundEffectRadial)');
        // background.setAttribute('fill', 'url(#backgroundEffect)');
    }
})();

function createStarArray(){
    console.log('createStarArray');
    const body = document.body,
        mask = document.getElementById('starArray');
    while(mask.lastElementChild){
        mask.removeChild(mask.lastElementChild);
    }
    // svgTest = document.getElementById('svgTest');
    // svgTest.appendChild(rect.cloneNode(true));
    // https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
    // const windowHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
    //     document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    document.getElementById('background').setAttribute('height', '0px');
    const windowHeight = document.documentElement.scrollHeight;
    rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', '0');
    rect.setAttribute('y', '0');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', windowHeight+'px');
    rect.setAttribute('fill', 'black');
    mask.appendChild(rect);
    console.log(windowHeight + ' | ' + window.innerHeight);
    const starSeparation = 50;
    const xOffset = (windowHeight%starSeparation)/2;
    const yOffset = (window.innerWidth %starSeparation)/2;
    for (let i = 0; i < windowHeight/starSeparation; i++) {
        for (let j = 0; j < window.innerWidth/starSeparation; j++) {
            circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            x = (j+0.5)*starSeparation + xOffset;
            y = (i+0.5)*starSeparation + yOffset;
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', 5);
            circle.setAttribute('fill', '#FFFFFF');
            mask.appendChild(circle);
            // svgTest.appendChild(circle.cloneNode(true));
        }
    }
    // body.appendChild(svgTest);
    document.getElementById('rawBackground').setAttribute('height', windowHeight+'px');
    document.getElementById('background').setAttribute('height', windowHeight+'px');
    document.getElementById('background').style.maskImage = 'url(#starArray)';
    console.log(mask);
}
createStarArray();

var inTransition = false;
var activeProject = null;
document.getElementById('btn1').addEventListener('click', function(){
    clickTransition(document.getElementById('btn1'));
});
document.getElementById('btn2').addEventListener('click', function(){
    clickTransition(document.getElementById('btn2'));
});
document.getElementById('btn3').addEventListener('click', function(){
    clickTransition(document.getElementById('btn3'));
});
document.getElementById('btn4').addEventListener('click', function(){
    clickTransition(document.getElementById('btn4'));
});
document.getElementById('btn5').addEventListener('click', function(){
    clickTransition(document.getElementById('btn5'));
});
function clickTransition(element){
    console.log('click');
    if(inTransition){
        inTransition = false;
        activeProject = null;
        element.style.transform = 'rotate(0)';
        element.style.width = null;
        element.style.height = null;
        element.style.position = null;
        element.style.position = 'relative';
        element.style.margin = null;
        element.lastElementChild.classList.remove('projectContentActive');
        element.lastElementChild.classList.add('projectContent');
    }else{
        document.getElementById('btn1').style.zIndex = null;
        document.getElementById('btn2').style.zIndex = null;
        document.getElementById('btn3').style.zIndex = null;
        document.getElementById('btn4').style.zIndex = null;
        document.getElementById('btn5').style.zIndex = null;
        inTransition = true;
        activeProject = element;
        element.style.zIndex = '10';
        fullScreen(element);
        element.lastElementChild.classList.add('projectContentActive');
        element.lastElementChild.classList.remove('projectContent');
        console.log(document.getElementsByClassName('projectContent'));
    }
}
function fullScreen(element){
    if(element.id == 'btn1'){
        element.style.transform = 'rotate(0) translate(0px , 0px)';
    }else if(element.id == 'btn2'){
        element.style.transform = 'rotate(0) translate(0px , calc(-2*max(var(--minUnitBlock), var(--unitBlock))))';
    }else if(element.id == 'btn3'){
        element.style.transform = 'rotate(0) translate(0px , calc(-4*max(var(--minUnitBlock), var(--unitBlock))))';
    }else if(element.id == 'btn4'){
        element.style.transform = 'rotate(0) translate(0px , calc(-6*max(var(--minUnitBlock), var(--unitBlock))))';
    }else if(element.id == 'btn5'){
        element.style.transform = 'rotate(0) translate(0px , calc(-8*max(var(--minUnitBlock), var(--unitBlock))))';
    }
    element.style.width = '100vw';
    element.style.height = 'calc(10*max(var(--minUnitBlock), var(--unitBlock)))';
    element.style.position = 'absolute';
    element.style.left = '0';
    element.style.right = '0';
    element.style.margin = '0';
    console.log(window.innerWidth);
}

document.getElementById('homeBtn').addEventListener('click', function(){
    backHome();
});
function backHome(){
    if(inTransition){
        clickTransition(activeProject);
    }
}

function playEasterEgg(){
    if(document.getElementById('easterEgg').paused){
        document.getElementById('easterEgg').play();
    }else{
        document.getElementById('easterEgg').pause();
        document.getElementById('easterEgg').currentTime = 0;
    }
}