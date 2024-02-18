// // var $cube = $('.cube'),
// //     $nav = $('.nav'),
// //     $checkBox = $('input[type="checkbox"]'),
// //     currentPos = 0,
// //     rotateVal = 0,
// //     autoPlay,
// //     navReady = true,
// //     posVals = { //front, right, back, left
// //   translatex: ["0", "-50vw", "-0vw", "50vw"],
// //   translatez: ["0", "50vw", "100vw", "50vw" ]
// //   };

// // $(document).ready(function(){
// //   setAutoPlay();    
// // });

// // $checkBox.on('click', function() {
// //   if($checkBox.prop("checked") === false) {
// //     clearInterval(autoPlay);
// //   } else {
// //     setAutoPlay();
// //   }
// // }); 

// // function setAutoPlay() {
// //   autoPlay = setInterval(function(){
// //       rotateVal -= 90;
// //       if (currentPos === 3) {
// //         currentPos = 0;
// //         animate(rotateVal, currentPos);  
// //       } else {
// //         currentPos += 1;
// //         animate(rotateVal, currentPos);
// //       }  
// //     }, 2500)  
// // }

// // $nav.on('click', function(e) {
// //   if (!navReady) {
// //     return;  
// //   } else {
// //     clearInterval(autoPlay);
// //     $checkBox.prop("checked", false)
// //     handleClick(e);
// //     navReady = false;
// //     setTimeout(function(){
// //       navReady = true;
// //     }, 1000);
// //   } 
// //  }); 

// // function handleClick(e) {
// //   if (e.target.className === 'nav next') {
// //     rotateVal -= 90;
// //     if (currentPos === 3) {
// //       currentPos = 0;
// //       animate(rotateVal, currentPos);  
// //     } else {
// //       currentPos += 1;
// //       animate(rotateVal, currentPos);
// //     }    
// //   }
// //   if (e.target.className === 'nav prev') {
// //     rotateVal += 90;
// //     if (currentPos === 0) {
// //       currentPos = 3;
// //       animate(rotateVal, currentPos);  
// //     } else {
// //       currentPos -= 1;
// //       animate(rotateVal, currentPos);
// //     }    
// //   }
// // }

// // function animate(rotatey, pos) {
// //   $cube.css(
// //      "transform", "rotateY("+rotatey+"deg) translateX("+posVals.translatex[pos]+") translatez("+posVals.translatez[pos]+")"
// //     );
// // }

// // // Auto-scroll functionality
// // // (function autoScroll() {
// // //     const container = document.querySelector('.container');
// // //     const distance = 2; // Distance to scroll in pixels
// // //     const speed = 100; // Speed of scrolling in milliseconds

// // //     container.scrollTop += distance;

// // //     setTimeout(autoScroll, speed);
// // // })();


document.addEventListener('DOMContentLoaded', function() {
    const cube = document.querySelector('.cube');
    const autoplayCheckbox = document.querySelector('.autoplay');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentRotation = 0;
    let isAutoplayEnabled = true;
    let autoplayInterval;

    function rotateCube(deg) {
        currentRotation += deg;
        cube.style.transform = `rotateY(${currentRotation}deg)`;
    }

    function rotateLeft() {
        rotateCube(-90);
    }

    function rotateRight() {
        rotateCube(90);
    }

    function toggleAutoplay() {
        isAutoplayEnabled = !isAutoplayEnabled;
        if (isAutoplayEnabled) {
            autoplayInterval = setInterval(rotateRight, 3000); // Change autoplay interval as needed
        } else {
            clearInterval(autoplayInterval);
        }
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', rotateLeft);
    nextButton.addEventListener('click', rotateRight);

    // Event listener for autoplay checkbox
    autoplayCheckbox.addEventListener('change', toggleAutoplay);

    // Start autoplay initially
    toggleAutoplay();
});


// var $cube = $('.cube'),
//     $nav = $('.nav'),
//     $checkBox = $('input[type="checkbox"]'),
//     currentPos = 0,
//     rotateVal = 0,
//     autoPlay,
//     navReady = true,
//     posVals = { //front, right, back, left
//   translatex: ["0", "-50vw", "-0vw", "50vw"],
//   translatez: ["0", "50vw", "100vw", "50vw" ]
//   };

// $(document).ready(function(){
//   setAutoPlay();    
// });

// $checkBox.on('click', function() {
//   if($checkBox.prop("checked") === false) {
//     clearInterval(autoPlay);
//   } else {
//     setAutoPlay();
//   }
// }); 

// function setAutoPlay() {
//   autoPlay = setInterval(function(){
//       rotateVal -= 90;
//       if (currentPos === 3) {
//         currentPos = 0;
//         animate(rotateVal, currentPos);  
//       } else {
//         currentPos += 1;
//         animate(rotateVal, currentPos);
//       }  
//     }, 2500)  
// }

// $nav.on('click', function(e) {
//   if (!navReady) {
//     return;  
//   } else {
//     clearInterval(autoPlay);
//     $checkBox.prop("checked", false)
//     handleClick(e);
//     navReady = false;
//     setTimeout(function(){
//       navReady = true;
//     }, 1000);
//   } 
//  }); 

// function handleClick(e) {
//   if (e.target.className === 'nav next') {
//     rotateVal -= 90;
//     if (currentPos === 3) {
//       currentPos = 0;
//       animate(rotateVal, currentPos);  
//     } else {
//       currentPos += 1;
//       animate(rotateVal, currentPos);
//     }    
//   }
//   if (e.target.className === 'nav prev') {
//     rotateVal += 90;
//     if (currentPos === 0) {
//       currentPos = 3;
//       animate(rotateVal, currentPos);  
//     } else {
//       currentPos -= 1;
//       animate(rotateVal, currentPos);
//     }    
//   }
// }

// function animate(rotatey, pos) {
//   $cube.css(
//      "transform", "rotateY("+rotatey+"deg) translateX("+posVals.translatex[pos]+") translatez("+posVals.translatez[pos]+")"
//     );
// }