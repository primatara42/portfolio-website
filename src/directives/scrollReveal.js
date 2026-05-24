export default {
  mounted(el) {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.9s ease-out";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        } else {
          // reset saat keluar viewport
          el.style.opacity = 0;
          el.style.transform = "translateY(40px)";
        }
      });
    });

    observer.observe(el);
  },
};
