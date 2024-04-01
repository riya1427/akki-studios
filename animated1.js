
var cer = document.querySelector("#cursor")
var cer2 = document.querySelector("#cursor2")

document.addEventListener("mousemove", function(dets){
    
    cer.style.left = dets.x+"px"
    cer.style.top = dets.y+"px"
    cer2.style.left = dets.x -150  + "px"
    cer2.style.top = dets.y -150 + "px"
});


gsap.to("#nav", {
    backgroundColor:"#000",
    duration:0.5,
    height: "100px",
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        start: "top -10%",
        end : "top -11%",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    },

       });

       gsap.from("#about-us img,#about-us-in", {
        y: 90,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#about-us",
          scroller: "body",
          // markers:true,
          start: "top 70%",
          end: "top 65%",
          scrub: 1,
        },
      });
      gsap.from(".card", {
        scale: 0.8,
        // opacity:0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".card",
          scroller: "body",
          // markers:false,
          start: "top 70%",
          end: "top 65%",
          scrub: 1,
        },
      });
      gsap.from("#colon1", {
        y: -70,
        x: -70,
        scrollTrigger: {
          trigger: "#colon1",
          scroller: "body",
          // markers:true,
          start: "top 55%",
          end: "top 45%",
          scrub: 4,
        },
      });
      gsap.from("#colon2", {
        y: 70,
        x: 70,
        scrollTrigger: {
          trigger: "#colon1",
          scroller: "body",
          // markers:true,
          start: "top 55%",
          end: "top 45%",
          scrub: 4,
        },
      });
      gsap.from("#page4 h1", {
        y: 50,
        scrollTrigger: {
          trigger: "#page4 h1",
          scroller: "body",
          // markers:true,
          start: "top 75%",
          end: "top 70%",
          scrub: 3,
        },
      });


