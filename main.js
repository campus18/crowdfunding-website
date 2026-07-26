/*==========================================
SevaSetu Foundation
Main JavaScript
==========================================*/

// ==============================
// Sticky Navbar
// ==============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#111827";
        navbar.style.padding = "10px 0";

    } else {

        navbar.style.background = "rgba(17,24,39,.85)";
        navbar.style.padding = "15px 0";

    }

});

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = Number(counter.getAttribute("data-target"));

        if (!target) return;

        let count = Number(counter.innerText);

        const speed = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + speed);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ==============================
// Fade In Animation
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section,.card").forEach(item => {

    observer.observe(item);

});

// ==============================
// Gallery Lightbox
// ==============================

window.showImage = function (src) {

    const modalImage = document.getElementById("modalImage");

    if (!modalImage) return;

    modalImage.src = src;

    const modal = new bootstrap.Modal(document.getElementById("imageModal"));

    modal.show();

}

// ==============================
// Gallery Filter
// ==============================

window.filterGallery = function(category){

    const items = document.querySelectorAll(".gallery");

    items.forEach(item=>{

        if(category==="all"){

            item.style.display="block";

        }

        else if(item.classList.contains(category)){

            item.style.display="block";

        }

        else{

            item.style.display="none";

        }

    });

}

// ==============================
// Active Navigation
// ==============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach(link=>{

    const href = link.getAttribute("href");

    if(href===currentPage){

        link.classList.add("active");

    }

});

// ==============================
// Dummy Subscribe Button
// ==============================

document.querySelectorAll("button").forEach(btn=>{

    if(btn.innerText.trim()==="Subscribe"){

        btn.addEventListener("click",()=>{

            alert("Thank you for subscribing!");

        });

    }

});

// ==============================
// Dummy Donate Buttons
// ==============================

document.querySelectorAll(".btn-warning").forEach(btn=>{

    if(btn.innerText.includes("Donate")){

        btn.addEventListener("click",()=>{

            console.log("Demo Donation");

        });

    }

});

// ==============================
// Smooth Anchor Links
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==============================
// Loading Screen
// ==============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// ==============================
// Console Message
// ==============================

console.log("%cSevaSetu Foundation",
"color:#ff6b35;font-size:20px;font-weight:bold");

console.log("Demo NGO Website");