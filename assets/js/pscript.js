$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio ";
            $("#favicon").attr("href", "assets/image/namelogo.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/image/namelogo.png");
        }
    });


// fetch projects start
function getProjects() {
    return fetch("assets/js/projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}


function showProjects(projects) {
    let projectsContainer = document.querySelector(".myproject .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 35rem; margin: 1rem">
      <img draggable="false" src="assets/image/project/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // vanilla tilt.js
     VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 5,
     });
    // // vanilla tilt.js  

    // /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
         origin: 'bottom',
        distance: '80px',
         duration: 1000,
         reset: true
     });

    // /* SCROLL PROJECTS */
    // srtop.reveal('.work .box', { interval: 100 });

    // isotope filter products
    

    // filter items on button click
   
}

getProjects().then(data => {
    showProjects(data);
})
// fetch projects end



/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 100 });
srtop.reveal('.home .content p', { delay: 100 });
srtop.reveal('.home .content .btn', { delay: 100 });

srtop.reveal('.home .image', { delay: 100 });
srtop.reveal('.home .linkedin', { interval: 100 });
srtop.reveal('.home .github', { interval: 100 });
srtop.reveal('.home .twitter', { interval:100 });
srtop.reveal('.home .telegram', { interval: 100 });
srtop.reveal('.home .instagram', { interval: 100 });
srtop.reveal('.home .dev', { interval: 100 });

/* SCROLL ABOUT */
srtop.reveal('.about .heading', { interval: 100 });
srtop.reveal('.about .image', { delay: 100 });
srtop.reveal('.about .content h3', { delay: 100 });
srtop.reveal('.about .content .tag', { delay: 100 });
srtop.reveal('.about .content p', { delay: 100 });
srtop.reveal('.about .content .box-container', { delay: 100 });
srtop.reveal('.about .content .resumebtn', { delay: 100 });


/* SCROLL SKILLS */
srtop.reveal('.skills .heading', { interval: 100 });
srtop.reveal('.skills .skills_quotes', { interval: 100 });
srtop.reveal('.skills .skills_container .skills_element .skills_data', { interval: 100 });
srtop.reveal('.skills .skills_container .skills_element p', { delay: 100 });
srtop.reveal('.skills .skills_container .skills_image', { delay: 100 });

/* SCROLL EDucation */
srtop.reveal('.education .heading', { interval: 100 });
srtop.reveal('.education .timeline', { delay: 100 });
srtop.reveal('.education .timeline .container', { interval: 100 });

/* Experience */
srtop.reveal('.experience .heading', { interval: 100 });
srtop.reveal('.experience .heading', { interval: 100 });
srtop.reveal('.experience .box-container .box ', { interval: 100 });
srtop.reveal('.experience .box-container .box .image', { delay: 100 });
srtop.reveal('.experience .box-container .box .content h3', { delay: 100 });
srtop.reveal('.experience .box-container .box .content h2', { delay: 100 });
srtop.reveal('.experience .box-container .box .content p', { delay: 100 });
srtop.reveal('.experience .box-container .box .content h4', { delay: 100 });

/* SCROLL PROJECTS */
srtop.reveal('.myproject .heading', { interval: 100 });
srtop.reveal('.myproject .content h3', { interval: 100 });
srtop.reveal('.myproject .box-container', { interval: 100 });

/* SCROLL CONTACT */
srtop.reveal('.contact .heading', { interval: 100 });
srtop.reveal('.contact .content .mapbox', { delay: 100 });
srtop.reveal('.contact .contact-form', { delay: 100 });
