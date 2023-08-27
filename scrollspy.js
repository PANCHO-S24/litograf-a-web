document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const navigationLinks = document.querySelectorAll(".nav-menu a");
    
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
      
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          navigationLinks.forEach(link => link.classList.remove("active"));
          navigationLinks[index].classList.add("active");
        }
      });
    });
  });