// Aurora Cursor
const aurora = document.createElement('div');
aurora.classList.add('aurora');
document.body.appendChild(aurora);

document.addEventListener('mousemove', (e) => {
  aurora.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Reveal Animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Initial call to reveal to show elements that are already in view on page load
reveal();

// Particle Effect (Basic Implementation - Consider a library like particles.js for more advanced effects)
const hero = document.getElementById('hero');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.width = `${Math.random() * 5}px`;
  particle.style.height = particle.style.width;
  particle.style.background = 'rgba(255, 255, 255, 0.2)';
  particle.style.position = 'absolute';
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.animation = `particleAnimation ${Math.random() * 5 + 5}s linear infinite`;
  hero.appendChild(particle);
}
