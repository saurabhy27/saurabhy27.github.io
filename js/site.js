(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#primary-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 960px)").matches) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
})();

(function () {
  var slider = document.querySelector("[data-slider]");
  if (!slider) return;

  var track = slider.querySelector("[data-slider-track]");
  var prev = slider.querySelector("[data-slider-prev]");
  var next = slider.querySelector("[data-slider-next]");
  var slides = track ? Array.prototype.slice.call(track.children) : [];

  if (!track || !prev || !next || !slides.length) return;

  function getSlidesPerView() {
    var styles = window.getComputedStyle(track);
    var value = parseInt(styles.getPropertyValue("--slides-per-view"), 10);
    return Number.isNaN(value) ? 1 : value;
  }

  function getStepWidth() {
    if (slides.length < 2) return slides[0].offsetWidth;
    return slides[1].offsetLeft - slides[0].offsetLeft;
  }

  function updateStatus() {
    var stepWidth = getStepWidth();
    var maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0);

    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft >= maxScroll - 4;
  }

  function scrollByPage(direction) {
    var slidesPerView = getSlidesPerView();
    var stepWidth = getStepWidth();
    track.scrollBy({
      left: direction * stepWidth * slidesPerView,
      behavior: "smooth"
    });
  }

  prev.addEventListener("click", function () {
    scrollByPage(-1);
  });

  next.addEventListener("click", function () {
    scrollByPage(1);
  });

  track.addEventListener("scroll", updateStatus, { passive: true });
  window.addEventListener("resize", updateStatus);
  updateStatus();
})();
