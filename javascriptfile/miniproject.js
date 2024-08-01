//for smooth scroling in main div
const scroll = new LocomotiveScroll({

    el: document.querySelector('#main'),
    smooth: true
});
// gasp is a library in js which is used for animation 
function firstPageAnim(){
    // this fuction is for animation of headers
    // there are two main opject in gasp 
    // 1'st is from 
    // 2'nd is to 
    // form used for bottom-top
    // to is for top-bottom
    let t1 = gsap.timeline();
    t1.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1,
        delay: -.4,
        stagger:  .5
    })
    .from("#herofooter",{
        y: -10,
        opacity: 0,
        delay: -1,
        duration: 1.5,
        ease: Expo.easeInOut
    })
}
// this is for skew the cursor

let timeout;
function circleskew(){
    let xscale = 1;
     let yscale= 1;

     let xprev = 0;
     let  yprev = 0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
     xscale = gsap.utils.clamp(.8, 1.2 ,dets.clientX - xprev );
    yscale = gsap.utils.clamp(.8, 1.2,dets.clientY - yprev );
    xprev = dets.clientX;
    yprev = dets.clientY;
    

    timeout= setTimeout(function(){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 100)
    circleMouseFollower(xscale, yscale);
    });
}
    

function circleMouseFollower(xscale, yscale) {
    window.addEventListener('mousemove', function(dets){
//    console.log(dets);
    document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale} ,${yscale})`;
    });
    //  this code show you the mouse cursor movement you can see in the console window in the whole window there are two detail show in the console first is client x and client y when you move the cursor in x direction it increase x direction and when you move the cursor in y direction it increase y direction
}

circleskew();
circleMouseFollower(); 
firstPageAnim();

// this is for second section of page where you can seen multiple workout 
document.querySelectorAll(".elem").
forEach(function(elem) {
   let  rotate = 0;
   let diffrot = 0;
    elem.addEventListener("mousemove",function(details) {
      let diff = details.clientY - elem.getBoundingClientRect().top;
      diffrot = details.clientX - rotate;
      rotate = details.clientX;
      
       gsap.to( elem.querySelector("img"),{
        opacity: 1,
        ease: Power4,
        top: diff,
        left: details.clientX,
       rotate: gsap.utils.clamp(-20 ,20, diffrot*.8),
       })
    })
    elem.addEventListener("mouseleave",function(details) {
         gsap.to( elem.querySelector("img"),{
          opacity: 0,
          
         })

      })
  })

  //for menu bar 
  function myFunction(x) {
    x.classList.toggle("change");
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  //reset the side bar size
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // scrolling
 document.querySelector( ".ri-arrow-down-s-fill" ).addEventListener("click",function() {
    scrolled=scrolled-300;
     document.querySelector("body").animate({
   scrollTop: scrolled
   });
});