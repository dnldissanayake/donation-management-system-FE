const navLinks = document.querySelectorAll(".navigation ul li a");

const tabContents = document.querySelectorAll(".tab-content");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    this.classList.add("active");

    tabContents.forEach((tab) => {
      tab.classList.remove("active");
    });

    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).classList.add("active");
  });
});
