// heaeder ==========================================
// active links
const navLinks = document.querySelectorAll(".nav li a")
const sections = document.querySelectorAll("section")
window.onscroll = () => {
    let current = "";
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    })
    navLinks.forEach((e) => {
        e.classList.remove("active")
        if (e.getAttribute("href").replace("#","") === current) {
            e.classList.add("active")
            nav.classList.remove("active")
            menueBtn.classList.remove("active")
        }
    })

    // change background
    if(window.scrollY >= 20) {
        document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.9)"
        document.querySelector("header").style.boxShadow = "0 3px 5px rgba(255, 255, 255, 0.7)"
    } else {
        document.querySelector("header").style.backgroundColor = "transparent"
        document.querySelector("header").style.boxShadow = "none"
    }
}

// menue button
const menueBtn = document.querySelector(".menue-btn");
const nav = document.querySelector(".nav")
menueBtn.addEventListener("click", () => {
    menueBtn.classList.toggle("active");
    nav.classList.toggle("active");
})
// ========================================== heaeder


// download ==========================================
const downloadBtn = document.querySelector(".download")
downloadBtn.addEventListener("click", () => {
    downloadBtn.download = "PrimeCar.png"
})
// ========================================== download


// slider ========================================== 
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
// ========================================== slider