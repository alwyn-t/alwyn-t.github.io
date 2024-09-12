// based on StackOverflow implementation of a loading barby Roko C. Buljan
// https://stackoverflow.com/questions/11072759/display-a-loading-bar-before-the-entire-page-is-loaded/11072778#11072778

const element = (sel, par) => (par || document).querySelector(sel);

function load(){
    // run transition logic
    onPageLoad();
    const elLoadingScreen = element("#loading-screen");
    const images = document.images;
    const imageCount = images.length;
    let c = 0;
    let targetProgress = 0; // 0 - 100
    let progress = 0; // 0 - 100
    let loadTrigger = false;

    if (imageCount == 0) {targetProgress = 100};

    function imageLoaded() {
        c += 1;
        targetProgress = c * 100 / imageCount;
    }
    function updatePrecentage() {
        const percentage = Math.floor(progress * 1.5) + '%'; // my range is from 0% to 150%
        elLoadingScreen.style.setProperty('--loadingProgress', percentage);
        console.log(progress);
    }
    function doneLoading() {
        elLoadingScreen.style.setProperty('animation-name', 'animateHide');
        elLoadingScreen.addEventListener('animationend', () => {
            // elLoadingScreen.style.visibility = 'hidden';
            document.body.classList.remove('disableScroll');
            clearInterval(animationController);
            // schedule transition logic
            addEventListener('hashchange', onPageLoad, false);
        })
    }

    [...images].forEach(img => {
        const tmpImg = new Image();
        tmpImg.onload = imageLoaded;
        tmpImg.onerror = imageLoaded;
        tmpImg.src = img.src;
    });

    let animationController = setInterval(function() {
        if (progress != targetProgress) {
            const progressDifference = targetProgress - progress;
            progress += progressDifference / 50; // higher the difference, the faster it travels
        }
        updatePrecentage();
        if (progress > 97 && !loadTrigger) {
            // clearInterval(animationController);
            doneLoading();
            loadTrigger = true;
        }
    }, 10);
}
addEventListener('DOMContentLoaded', load, false);
