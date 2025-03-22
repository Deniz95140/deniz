document.addEventListener("DOMContentLoaded", function () {
  // Filtering items
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".item");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      // Loop through items and show/hide based on filter
      items.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      });
    });
  });

  // Show all items initially
  document.querySelector(".filter-btn[data-filter='all']").click();

  // Progress bars filling function
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function fillProgressBars() {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const skillValue = bar.getAttribute("data-skill");
      if (isElementInViewport(bar) && !bar.classList.contains("filled")) {
        bar.style.width = skillValue + "%";
        bar.classList.add("filled");
      }
    });
  }

  window.addEventListener("scroll", fillProgressBars);
  window.addEventListener("resize", fillProgressBars);
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;

  // Navigation menu functionality
  const navLinks = document.querySelectorAll(".nav-link");
  const openBtn = document.querySelector(".open");
  const closeBtn = document.querySelector(".close");
  const menuItem = document.querySelector(".menu_item");

  // Add click event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      navLinks.forEach((nav) => {
        nav.classList.remove("active");
      });
      menuItem.classList.remove("active");
      closeBtn.classList.remove("active");
      openBtn.classList.add("active");

      // Add active class to the clicked link
      // this.classList.add("active");
    });
  });

  openBtn.addEventListener("click", () => {
    menuItem.classList.add("active");
    closeBtn.classList.add("active");
    openBtn.classList.remove("active");
  });

  closeBtn.addEventListener("click", () => {
    menuItem.classList.remove("active");
    closeBtn.classList.remove("active");
    openBtn.classList.add("active");
  });
});
