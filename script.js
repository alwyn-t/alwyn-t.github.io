// window.onload = function exampleFunction() {
//     console.log('Javascript loaded');
//     updateContentBlocks();
// }

// window.addEventListener('resize', function(event) {
//     console.log("resize detected");
//     updateContentBlocks();
// }, true);

// function updateContentBlocks(){
//     console.log('Updating Content Blocks');
//     if(this.window.innerHeight > this.window.innerWidth){
//         console.log('Swapping to horizontal blocks');
//         alignLeft = false;
//         document.documentElement.style.setProperty('--contentBlockHeight', 'calc(0.2 * var(--mainHeight))');
//         document.documentElement.style.setProperty('--contentBlockWidth', '100vw');
//         for(let i = 0; i < contentBlocks.length; i++){
//             contentBlocks[i].classList.remove('vertical');
//             contentBlocks[i].classList.add('horizontal');
//         }
//     }else{
//         console.log('Swapping to vertical blocks');
//         alignLeft = true;
//         document.documentElement.style.setProperty('--contentBlockHeight', 'var(--mainHeight)');
//         document.documentElement.style.setProperty('--contentBlockWidth', '20vw');
//         for(let i = 0; i < contentBlocks.length; i++){
//             contentBlocks[i].classList.remove('horizontal');
//             contentBlocks[i].classList.add('vertical');
//         }
//     }

// }

// var alignLeft = false;
// const contentBlocks = document.getElementsByClassName('contentBlock');
// function toggleFullScreen(element){
//     for(let i = 0; i < contentBlocks.length; i++){
//         if(contentBlocks[i]==element){
//             index = i;
//         }
//     }
//     console.log(element + " | toggleFullScreen");
//     if(element.classList.contains('contentBlockActive')){
//         element.classList.remove('contentBlockActive');
//         element.lastElementChild.classList.add('hidden');
//         for(let i = 0; i < contentBlocks.length; i++){
//             if(i < index){
//                 if(alignLeft){
//                     contentBlocks[i].classList.remove('contentBlockDeactiveLeft');
//                 }else{
//                     contentBlocks[i].classList.remove('contentBlockDeactiveUp');
//                 }
//             }else if(i > index){
//                 if(alignLeft){
//                     contentBlocks[i].classList.remove('contentBlockDeactiveRight');
//                 }else{
//                     contentBlocks[i].classList.remove('contentBlockDeactiveDown');
//                 }
//             }
//         }
//     }else{
//         element.classList.add('contentBlockActive');
//         element.lastElementChild.classList.remove('hidden');
//         for(let i = 0; i < contentBlocks.length; i++){
//             if(i < index){
//                 if(alignLeft){
//                     contentBlocks[i].classList.add('contentBlockDeactiveLeft');
//                 }else{
//                     contentBlocks[i].classList.add('contentBlockDeactiveUp');
//                 }
//             }else if(i > index){
//                 if(alignLeft){
//                     contentBlocks[i].classList.add('contentBlockDeactiveRight');
//                 }else{
//                     contentBlocks[i].classList.add('contentBlockDeactiveDown');
//                 }
//             }
//         }
//     }
// }

const allContentBlock = document.getElementsByClassName('contentBlock');
const allProjectBlock = [document.getElementById('projectBlock1'), 
                         document.getElementById('projectBlock2'), 
                         document.getElementById('projectBlock3'), 
                         document.getElementById('projectBlock4'), 
                         document.getElementById('projectBlock5')];
const allProjectLogo = document.getElementsByClassName('projLogo');
const allProjectContentBlock = document.getElementsByClassName('projectContentBlock');

function transition(menu){
    if(menu==0){
        document.getElementById('nav').classList.remove('navAct');
    }else{
        document.getElementById('nav').classList.add('navAct');
    }
    hideContent();
    setTimeout(() => {
        for (let i = 0; i < allProjectLogo.length; i++){
            allProjectLogo[i].style.zIndex = null;
        }
        if(menu!=0){
            allProjectLogo[menu-1].style.setProperty('z-index', 10);
        }
        showContent(menu);
    }, 200);
}

function hideContent(){
    for (let i = 0; i < allContentBlock.length; i++) {
        allContentBlock[i].style.animation = "fadeOut 0.2s linear forwards";
        allContentBlock[i].lastElementChild.style.setProperty('pointer-events', 'none');
    }
    for (let i = 0; i < allProjectBlock.length; i++) {
        allProjectBlock[i].style.animation = "fadeOut 0.2s linear forwards";
    }
    for (let i = 0; i < allProjectContentBlock.length; i++) {
        allProjectContentBlock[i].style.animation = "fadeOut 0.2s linear forwards";
    }
    setTimeout(() => {
        for (let i = 0; i < allContentBlock.length; i++) {
            allContentBlock[i].style.setProperty('visibility', 'hidden');
        }
        for (let i = 0; i < allProjectBlock.length; i++) {
            allProjectBlock[i].style.setProperty('visibility', 'hidden');
        }
        for (let i = 0; i < allProjectContentBlock.length; i++) {
            allProjectContentBlock[i].style.setProperty('visibility', 'hidden');
        }
    },200);
}

function showContent(menu){
    if(menu == 0){
        for (let i = 0; i < allContentBlock.length; i++) {
            allContentBlock[i].style.setProperty('visibility', 'visible');
            allContentBlock[i].style.animation = "fadeIn 0.2s linear forwards";
            allContentBlock[i].lastElementChild.style.setProperty('pointer-events', 'auto');
        }
    }else{
        allProjectBlock[menu-1].style.setProperty('visibility', 'visible');
        allProjectBlock[menu-1].style.animation = "fadeIn 0.2s linear forwards";
        allProjectContentBlock[menu-1].style.setProperty('visibility', 'visible');
        allProjectContentBlock[menu-1].style.animation = "fadeIn 0.2s linear forwards";
    }
}

const allIcons = document.getElementsByClassName('icon');
var mode = 'dark';
function switchMode(){
    if(mode=='dark'){
        mode = 'light';
        for (let i = 0; i < allIcons.length; i++) {
            allIcons[i].style.setProperty('background-color', '#F8F4EA');
        }
        for (let i = 0; i < allContentBlock.length; i++){
            allContentBlock[i].style.setProperty('box-shadow', '8px 8px 4px #579BB1');
        }
        for (let i = 0; i < allProjectContentBlock.length; i++){
            allProjectContentBlock[i].style.setProperty('box-shadow', '8px 8px 4px #579BB1');
        }
        document.getElementById('circle').src = "/assests/circle-black.svg";
        document.getElementById('chess').src = "/assests/chess-black.svg";
        // console.log(window.getComputedStyle(document.getElementById('circle'), 'before'));
        // window.getComputedStyle(document.getElementById('circle'), 'before').style.setProperty('background-image', '/assests/circle-black.svg');
        // window.getComputedStyle(document.getElementById('chess'), 'before').style.setProperty('background-image', '/assests/chess-black.svg');

        document.getElementById('logo').src = "/icon/logo_black.svg";
        document.getElementById('githubIcon').src = "/assests/github-mark-black.svg";
        document.getElementById('itchioIcon').src = "/assests/itchio-logo-textless-black.svg";
        document.getElementById('modeIcon').src = "/assests/brightness_5_FILL1_wght400_GRAD0_opsz40.svg";
        document.documentElement.style.setProperty('color', '#282A3A');
        document.getElementById('linkArrow').firstElementChild.style.setProperty('stroke', '#282A3A');
        document.getElementById('linkArrow').lastElementChild.style.setProperty('stroke', '#282A3A');
        document.getElementsByTagName('header')[0].style.setProperty('box-shadow', '0px 8px 4px #579BB1');
        document.getElementsByTagName('footer')[0].style.setProperty('box-shadow', '0px -8px 4px #579BB1');
        document.getElementsByTagName('header')[0].style.setProperty('background-color', '#EAE0DA');
        document.getElementsByTagName('main')[0].style.setProperty('background-color', '#EAE0DA');
        document.getElementsByTagName('footer')[0].style.setProperty('background-color', '#EAE0DA');
    }else{
        mode = 'dark';
        for (let i = 0; i < allIcons.length; i++) {
            allIcons[i].style.setProperty('background-color', 'black');
        }
        for (let i = 0; i < allContentBlock.length; i++){
            allContentBlock[i].style.setProperty('box-shadow', '8px 8px 4px #735F32');
        }
        for (let i = 0; i < allProjectContentBlock.length; i++){
            allProjectContentBlock[i].style.setProperty('box-shadow', '8px 8px 4px #735F32');
        }
        document.getElementById('circle').src = "/assests/circle-white.svg";
        document.getElementById('chess').src = "/assests/chess-white.svg";
        // window.getComputedStyle(document.getElementById('circle'), 'before').style.setProperty('background-image', '/assests/circle-white.svg');
        // window.getComputedStyle(document.getElementById('chess'), 'before').style.setProperty('background-image', '/assests/chess-white.svg');

        document.getElementById('logo').src = "/icon/logo_white.svg";
        document.getElementById('githubIcon').src = "/assests/github-mark-white.svg";
        document.getElementById('itchioIcon').src = "/assests/itchio-logo-textless-white.svg";
        document.getElementById('modeIcon').src = "/assests/dark_mode_FILL1_wght400_GRAD0_opsz40.svg";
        document.documentElement.style.setProperty('color', 'white');
        document.getElementById('linkArrow').firstElementChild.style.setProperty('stroke', 'white');
        document.getElementById('linkArrow').lastElementChild.style.setProperty('stroke', 'white');
        document.getElementsByTagName('header')[0].style.setProperty('box-shadow', '0px 8px 4px #735F32');
        document.getElementsByTagName('footer')[0].style.setProperty('box-shadow', '0px -8px 4px #735F32');
        document.getElementsByTagName('header')[0].style.setProperty('background-color', '#282A3A');
        document.getElementsByTagName('main')[0].style.setProperty('background-color', '#282A3A');
        document.getElementsByTagName('footer')[0].style.setProperty('background-color', '#282A3A');
    }
}