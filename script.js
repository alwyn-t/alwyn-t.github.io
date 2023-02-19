const allContentBlock = document.getElementsByClassName('contentBlock');
const allProjectBlock = [document.getElementById('projectBlock1'), 
                         document.getElementById('projectBlock2'), 
                         document.getElementById('projectBlock3'), 
                         document.getElementById('projectBlock4'), 
                         document.getElementById('projectBlock5')];
const allProjectLogo = document.getElementsByClassName('projLogo');
const allProjectContentBlock = document.getElementsByClassName('projectContentBlock');

window.onload = function(){
    setTimeout(() => {
        document.getElementById('loadingScreen').lastElementChild.style.animation = "fadeOut 0.5s linear forwards";
        setTimeout(() => {
            document.getElementById('loadingScreen').style.animation = "fadeOut 0.5s linear forwards";
            setTimeout(() => {
                document.getElementById('loadingScreen').style.zIndex = -1;
            }, 500);
        }, 500);
    }, 1000);
}

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
    }, 500);
}

function hideContent(){
    for (let i = 0; i < allContentBlock.length; i++) {
        allContentBlock[i].style.animation = "fadeOut 0.5s linear forwards";
        allContentBlock[i].lastElementChild.style.setProperty('pointer-events', 'none');
    }
    for (let i = 0; i < allProjectBlock.length; i++) {
        allProjectBlock[i].style.animation = "fadeOut 0.5s linear forwards";
    }
    for (let i = 0; i < allProjectContentBlock.length; i++) {
        allProjectContentBlock[i].style.animation = "fadeOut 0.5s linear forwards";
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
    },500);
}

function showContent(menu){
    if(menu == 0){
        for (let i = 0; i < allContentBlock.length; i++) {
            allContentBlock[i].style.setProperty('visibility', 'visible');
            allContentBlock[i].style.animation = "fadeIn 0.5s linear forwards";
            allContentBlock[i].lastElementChild.style.setProperty('pointer-events', 'auto');
        }
    }else{
        allProjectBlock[menu-1].style.setProperty('visibility', 'visible');
        allProjectBlock[menu-1].style.animation = "fadeIn 0.5s linear forwards";
        allProjectContentBlock[menu-1].style.setProperty('visibility', 'visible');
        allProjectContentBlock[menu-1].style.animation = "fadeIn 0.5s linear forwards";
    }
}

const allIcons = document.getElementsByClassName('icon');
var mode = 'dark';
function switchMode(){
    if(mode=='dark'){
        mode = 'light';
        for (let i = 0; i < allIcons.length; i++) {
            allIcons[i].style.setProperty('background-color', 'white');
        }
        document.getElementById('circle').src = "/assests/circle-black.svg";
        document.getElementById('chess').src = "/assests/chess-black.svg";
        
        document.getElementById('logo').src = "/icon/logo_black.svg";
        document.getElementById('githubIcon').src = "/assests/github-mark-black.svg";
        document.getElementById('itchioIcon').src = "/assests/itchio-logo-textless-black.svg";
        document.getElementById('modeIcon').src = "/assests/brightness_5_FILL1_wght400_GRAD0_opsz40.svg";
        document.documentElement.style.setProperty('color', '#282A3A');
        document.getElementById('linkArrow').firstElementChild.style.setProperty('stroke', '#282A3A');
        document.getElementById('linkArrow').lastElementChild.style.setProperty('stroke', '#282A3A');
        document.documentElement.style.setProperty('--backgroundColor', '#f1f6f0');
        document.documentElement.style.setProperty('--accentColor', '#d5d6db');
        document.documentElement.style.setProperty('--project1Color', 'rgb(61, 144, 238)');
        document.documentElement.style.setProperty('--project2Color', 'rgb(247, 139, 39)');
        document.documentElement.style.setProperty('--project3Color', 'rgb(95, 223, 66)');
        document.documentElement.style.setProperty('--project4Color', 'rgb(236, 47, 47)');
        document.documentElement.style.setProperty('--project5Color', 'rgb(173, 46, 236)');
    }else{
        mode = 'dark';
        for (let i = 0; i < allIcons.length; i++) {
            allIcons[i].style.setProperty('background-color', 'black');
        }
        document.getElementById('circle').src = "/assests/circle-white.svg";
        document.getElementById('chess').src = "/assests/chess-white.svg";
        
        document.getElementById('logo').src = "/icon/logo_white.svg";
        document.getElementById('githubIcon').src = "/assests/github-mark-white.svg";
        document.getElementById('itchioIcon').src = "/assests/itchio-logo-textless-white.svg";
        document.getElementById('modeIcon').src = "/assests/dark_mode_FILL1_wght400_GRAD0_opsz40.svg";
        document.documentElement.style.setProperty('color', 'white');
        document.getElementById('linkArrow').firstElementChild.style.setProperty('stroke', 'white');
        document.getElementById('linkArrow').lastElementChild.style.setProperty('stroke', 'white');
        document.documentElement.style.setProperty('--backgroundColor', '#14233a');
        document.documentElement.style.setProperty('--accentColor', '#303843');
        document.documentElement.style.setProperty('--project1Color', 'rgb(49, 85, 126)');
        document.documentElement.style.setProperty('--project2Color', 'rgb(211, 120, 35)');
        document.documentElement.style.setProperty('--project3Color', 'rgb(74, 157, 56)');
        document.documentElement.style.setProperty('--project4Color', 'rgb(166, 51, 51)');
        document.documentElement.style.setProperty('--project5Color', 'rgb(135, 59, 174)');
    }
}