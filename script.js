// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // stop default jump

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//nav bar scroll effect
// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     window.scrollY > 50 ?
//         navbar.Style.backgroundcolor = 'rgba(10,10,10,0.98)' :
//         navbar.Style.backgroundcolor = 'rgba(10,10,10,0.95)';
        
    
//     })
    const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

