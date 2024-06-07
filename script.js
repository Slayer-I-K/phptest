function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locoscroll()
function cursoreffect() {
    var pg1 = document.querySelector("#pg1content")
    var cursor = document.querySelector("#cursor")

    pg1.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x + -50,
            y: dets.y + -50,
        })
    })
    pg1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    pg1.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
cursoreffect()

function cursor2() {
    var c2 = document.querySelector("#pg4conti")
    var cursor2 = document.querySelector("#cursor2")
    c2.addEventListener("mousemove", function (detc) {
        gsap.to(cursor2, {
            x: detc.x + -40,
            y: detc.y
        })
    })
    c2.addEventListener("mouseenter", function () {
        gsap.to(cursor2, {
            scale: 1,
            opacity: 1
        })
    })
    c2.addEventListener("mouseleave", function () {
        gsap.to(cursor2, {
            scale: 0,
            opacity: 0
        })
    })
}
cursor2()



function seat(x) {
    var seatnum = x
    var stpl = document.querySelector("#avseat")
    stpl.innerHTML = seatnum
    var seatbl = document.querySelector("#seatball")
    if (seatnum > 0) {
        var tl = gsap.timeline({ repeat: 100, repeatDelay: 1 });
        tl.to(seatbl, {
            rotate: 360,
            duration: 3

        });
    } else {
        tl.to(seatbl, {
            rotate: 360,
            duration: 3

        });
    }
}
seat(3)
function intro() {
    var intro = document.querySelector("#loader")
    var introh = document.querySelectorAll("#loader h3")
    var rejo = document.querySelectorAll(".rejo")
    var itl = gsap.timeline({});
    itl.from(introh, {
        x: 70,
        duration: 1,
        stagger: 0.2,
        opacity: 0
    })
    itl.to(introh, {
        opacity: 0,
        x: -10,
        duration: 1
    })

    itl.to(intro, {
        zInde: -1,
        opacity: 0,
        display: "none",
        duration: 1.5
    })
    itl.from(rejo, {
        y: 300,
        duration: 0.3,
        stagger: 0.1
    })
    itl.to(rejo, {
        y: -110,
        duration: 4,

    })

}
intro()
var imgconti = document.querySelector("#imgconti")
    var img = document.querySelectorAll(".getimg")
    var img1 = document.querySelector("#getimg1")
    var img2 = document.querySelector("#getimg2")
    var img3 = document.querySelector("#getimg3")
    var img4 = document.querySelector("#getimg4")
    var img5 = document.querySelector("#getimg5")
var imgtl = gsap.timeline({
    
})
