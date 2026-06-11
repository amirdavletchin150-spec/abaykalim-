window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "0.5s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
".stat-card, .feature, .uni-card, .review-card, .step"
).forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = parseInt(counter.innerText);
        const current = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / 50);

        if(current < target){

            const newValue = current + increment;

            counter.setAttribute("data-count", newValue);
            counter.innerText = newValue + "+";

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.08)";

    }

});
