// const photoCardElements = document.querySelectorAll(".photoCard");
// var photoCardElements = document.getElementsByClassName("photoCard");
// console.log(photoCardElements);

// for (let photoCardElement of photoCardElements) {
//     const photoSlider = photoCardElement.firstElementChild;
//     const photoSliderStart = photoSlider.firstElementChild;
//     const photoSliderElements = photoSlider.children;
//     photoCardElement.addEventListener('click', function(event){
//         var photoSliderRect = photoSlider.getBoundingClientRect(); // bounding box needs to be updated in case the user updates the window size
//         var photoSliderWidth = photoSliderRect.right - photoSliderRect.left;
//         var photoSliderStartRect = photoSliderStart.getBoundingClientRect();
//         var position = (photoSliderStartRect.left - photoSliderRect.left)/photoSliderWidth;
//         position = Math.round(position*10)/10;
//         if (event.clientX > document.body.clientWidth/2) {// if button clicked is pointing to the right
//             console.log("scroll to the right");
//             console.log(position);
//             for (let i = 1; i < photoSliderElements.length; i++) {
//                 if (position > -i) {
//                     photoSlider.scrollTo({left: (photoSliderWidth * i), behavior: "smooth"});
//                     break;
//                 }
//             }
//         } else { // button clicked is pointing to the left
//             console.log("scroll to the left");
//             console.log(position);
//             for (let i = photoSliderElements.length-1; i >= 0; i--) {
//                 if (position < -i) {
//                     photoSlider.scrollTo({left: (photoSliderWidth * i), behavior: "smooth"});
//                     break;
//                 }
//             }
//         }
//     });
// }
// window.onresize = () => {
//     for (let photoCardElement of photoCardElements) {
//         const photoSlider = photoCardElement.firstElementChild;
//         const photoSliderStart = photoSlider.firstElementChild;

//         var photoSliderRect = photoSlider.getBoundingClientRect(); // bounding box needs to be updated in case the user updates the window size
//         var photoSliderWidth = photoSliderRect.right - photoSliderRect.left;
//         var photoSliderStartRect = photoSliderStart.getBoundingClientRect();
//         var position = (photoSliderStartRect.left - photoSliderRect.left)/photoSliderWidth;
//         position = Math.round(position);
//         console.log("resize to position: " + position);
//         photoSlider.scrollTo({left: (photoSliderWidth * position), behavior: "smooth"});
//     }
// }

var galleryWrapperElements = document.getElementsByClassName("photoGalleryOuter");
console.log(galleryWrapperElements);

for (let galleryWrapperElement of galleryWrapperElements) {
    const gallery = galleryWrapperElement.getElementsByClassName("photoGallery")[0]
    // firstElementChild;
    const galleryStart = gallery.firstElementChild;
    const galleryElements = gallery.children;

    const leftArrow = galleryWrapperElement.getElementsByClassName("photoGalleryLeftArrow")[0]
    const rightArrow = galleryWrapperElement.getElementsByClassName("photoGalleryRightArrow")[0]
    
    leftArrow.addEventListener('click', function(event){
        var galleryRect = gallery.getBoundingClientRect(); // bounding box needs to be updated in case the user updates the window size
        var galleryWidth = galleryRect.right - galleryRect.left;
        var galleryStartRect = galleryStart.getBoundingClientRect();
        var position = (galleryStartRect.left - galleryRect.left)/galleryWidth;

        console.log("scroll to the left");
        console.log(position);
        for (let i = galleryElements.length-1; i >= 0; i--) {
            if (position < -i) {
                gallery.scrollTo({left: (galleryWidth * i), behavior: "smooth"});
                break;
            }
        }
    });
    rightArrow.addEventListener('click', function(event){
        var galleryRect = gallery.getBoundingClientRect(); // bounding box needs to be updated in case the user updates the window size
        var galleryWidth = galleryRect.right - galleryRect.left;
        var galleryStartRect = galleryStart.getBoundingClientRect();
        var position = (galleryStartRect.left - galleryRect.left)/galleryWidth;

        console.log("scroll to the right");
        console.log(position);
        for (let i = 1; i < galleryElements.length; i++) {
            if (position > -i) {
                gallery.scrollTo({left: (galleryWidth * i), behavior: "smooth"});
                break;
            }
        }
    });
}
window.onresize = () => {
    for (let galleryWrapperElement of galleryWrapperElements) {
        const gallery = galleryWrapperElement.firstElementChild;
        const galleryStart = gallery.firstElementChild;

        var galleryRect = gallery.getBoundingClientRect(); // bounding box needs to be updated in case the user updates the window size
        var galleryWidth = galleryRect.right - galleryRect.left;
        var galleryStartRect = galleryStart.getBoundingClientRect();
        var position = (galleryStartRect.left - galleryRect.left)/galleryWidth;
        position = Math.round(position);
        console.log("resize to position: " + position);
        gallery.scrollTo({left: (galleryWidth * position), behavior: "smooth"});
    }
}