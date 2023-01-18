window.onload = function exampleFunction() {
    console.log('Javascript loaded');
    updateContentBlocks();
}

window.addEventListener('resize', function(event) {
    console.log("resize detected");
    updateContentBlocks();
}, true);

function updateContentBlocks(){
    console.log('Updating Content Blocks');
    if(this.window.innerHeight > this.window.innerWidth){
        console.log('Swapping to horizontal blocks');
        alignLeft = false;
        document.documentElement.style.setProperty('--contentBlockHeight', 'calc(0.2 * var(--mainHeight))');
        document.documentElement.style.setProperty('--contentBlockWidth', '100vw');
        for(let i = 0; i < contentBlocks.length; i++){
            contentBlocks[i].classList.remove('vertical');
            contentBlocks[i].classList.add('horizontal');
        }
    }else{
        console.log('Swapping to vertical blocks');
        alignLeft = true;
        document.documentElement.style.setProperty('--contentBlockHeight', 'var(--mainHeight)');
        document.documentElement.style.setProperty('--contentBlockWidth', '20vw');
        for(let i = 0; i < contentBlocks.length; i++){
            contentBlocks[i].classList.remove('horizontal');
            contentBlocks[i].classList.add('vertical');
        }
    }

}

var alignLeft = false;
const contentBlocks = document.getElementsByClassName('contentBlock');
function toggleFullScreen(element){
    for(let i = 0; i < contentBlocks.length; i++){
        if(contentBlocks[i]==element){
            index = i;
        }
    }
    console.log(element + " | toggleFullScreen");
    if(element.classList.contains('contentBlockActive')){
        element.classList.remove('contentBlockActive');
        element.lastElementChild.classList.add('hidden');
        for(let i = 0; i < contentBlocks.length; i++){
            if(i < index){
                if(alignLeft){
                    contentBlocks[i].classList.remove('contentBlockDeactiveLeft');
                }else{
                    contentBlocks[i].classList.remove('contentBlockDeactiveUp');
                }
            }else if(i > index){
                if(alignLeft){
                    contentBlocks[i].classList.remove('contentBlockDeactiveRight');
                }else{
                    contentBlocks[i].classList.remove('contentBlockDeactiveDown');
                }
            }
        }
    }else{
        element.classList.add('contentBlockActive');
        element.lastElementChild.classList.remove('hidden');
        for(let i = 0; i < contentBlocks.length; i++){
            if(i < index){
                if(alignLeft){
                    contentBlocks[i].classList.add('contentBlockDeactiveLeft');
                }else{
                    contentBlocks[i].classList.add('contentBlockDeactiveUp');
                }
            }else if(i > index){
                if(alignLeft){
                    contentBlocks[i].classList.add('contentBlockDeactiveRight');
                }else{
                    contentBlocks[i].classList.add('contentBlockDeactiveDown');
                }
            }
        }
    }
}