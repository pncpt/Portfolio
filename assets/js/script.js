/* Active menu bar */
function showActiveMenu() {
    const section = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(
      ".menu__items > a"
    );
  
    window.addEventListener("scroll", () => {
      let current = "";
      section.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      navLinks.forEach((li) => {
        li.classList.remove("active");
        if (current == li.getAttribute("href").split("#")[1]) {
          li.classList.add("active");
    
        }
      });
    });
  }
  
  showActiveMenu();

  const hourEl = document.getElementById("hour");
  const minuteEl = document.getElementById("minutes");
  const secondEl = document.getElementById("seconds");
  const ampmEl = document.getElementById("ampm");
  
  function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
  
    if (h > 12) {
      h = h - 12;
      ampm = "PM";
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
      updateClock();
    }, 1000);
  }
  
  updateClock();
  
  window.onload = function(){
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  });
  }
  // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("praveenbcpt@gmail.com");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->



document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio";
            $("#favicon").attr("href", "assets/image/namelogo.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/image/namelogo.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "web designing","web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.content ', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->

/*==================== SHOW SCROLL up ====================*/ 
/* function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
 */
// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}




/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 100 });
srtop.reveal('.home .content p', { delay: 100 });
srtop.reveal('.home .content .btn', { delay: 100 });

srtop.reveal('.home .image', { delay: 100 });
srtop.reveal('.home .linkedin', { interval: 100 });
srtop.reveal('.home .github', { interval: 100 });
srtop.reveal('.home .twitter', { interval: 100 });
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
srtop.reveal('.education.heading', { interval: 100 });
srtop.reveal('.education .timeline', { delay:100 });
srtop.reveal('.education .timeline .container', { interval:100 });

/* Experience */
srtop.reveal('.experience .heading', { interval: 100 });
srtop.reveal('.experience .box-container .box ', { interval: 100 });
srtop.reveal('.experience .box-container .box .image', { delay:100 });
srtop.reveal('.experience .box-container .box .content h3', { delay: 100 });
srtop.reveal('.experience .box-container .box .content h2', { delay: 100 });
srtop.reveal('.experience .box-container .box .content p', { delay: 100 });
srtop.reveal('.experience .box-container .box .content h4', { delay: 100 });

/* SCROLL PROJECTS */
srtop.reveal('.myproject .heading', { interval: 100 });
srtop.reveal('.myproject .content h3', { interval: 100 });
srtop.reveal('.myproject .box-container', { interval:100 });



/* SCROLL CONTACT */
srtop.reveal('.contact .heading', { interval: 100 });
srtop.reveal('.contact .content .mapbox', { delay:100 });
srtop.reveal('.contact .contact-form', { delay: 100 });