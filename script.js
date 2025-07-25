var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 240 + "px"
    blur.style.top = dets.y - 240 + "px"
})

// THIS IS USED FOR THE MOUSE TRANSPARENT MOVEMENT (for h4 nav)
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "Transparent"
})
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #96c11e"
        crsr.style.backgroundColor = "#96c11e"
    })
})

// THIS IS USED FOR THE MOUSE TRANSPARENT MOVEMENT (for arrow)
var arrow = document.querySelectorAll("#arrow")
arrow.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "Transparent"
})
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #96c11e"
        crsr.style.backgroundColor = "#96c11e"
    })
})

// THIS GSAP IS USED FOR SCROLLING OF THE NAV BAR
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger: {
        trigger: "#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

// THIS IS USED FOR SCROLLING ANIMATION ON ABOUT US SECTION
gsap.from("#aboutus img,#aboutus-in",{
    y:50,
    opacity: 0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})

// THIS IS USED FOR APPLYING SCROLLING ANIMATIONN TO CARDS SECTION
gsap.from(".cards",{
    scale:0.8,
    opacity: 0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

// THIS IS USED FOR THE COLON 1 SECTION
gsap.from("#colon-1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

// THIS IS USED FOR THE COLON 2 SECTION
gsap.from("#colon-2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

// THIS IS USED FOR SCROLLING OF PAGE4 TEXT
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})