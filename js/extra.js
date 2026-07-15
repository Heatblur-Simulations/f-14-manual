$.fn.onClassChange = function (cb) {
  return $(this).each((_, el) => {
    new MutationObserver((mutations) => {
      mutations.forEach(
        (mutation) => cb && cb(mutation.target, mutation.target.className),
      );
    }).observe(el, {
      attributes: true,
      attributeFilter: ["class"], // only listen for class attribute changes
    });
  });
};

// Disabled for now, because it causes page-changes when clicking the chapter collapse/expand button as well
/*
$("li.chapter-item").on("click", function (e) {
  // When clicking next to the anchor in the nav bar, click the anchor as well
  e.stopPropagation();
  $(this).find("a")[0].click();
});
*/

$("div.menu-logo img, h1.menu-title").on("click", function (e) {
  // When clicking logo or title text, click main chapter link
  e.stopPropagation();
  $("ol.chapter").children(":first").click();
});

function swapLightDarkModeImages() {
  $("img").each(function () {
    const e = $(this);
    const src = e.attr("src");
    const useDark = $("html").hasClass("hb_dark");

    if (!src) {
      return;
    }

    if (useDark && src.includes("img/light/")) {
      e.attr("src", src.replace("img/light/", "img/dark/"));
    }

    if (!useDark && src.includes("img/dark/")) {
      e.attr("src", src.replace("img/dark/", "img/light/"));
    }
  });
}

// Below functions fix initial explain me use switching to top of section/page by mistake
function scrollToHash() {
  if (!location.hash) return;
  const id = decodeURIComponent(location.hash.slice(1));
  const el = document.getElementById(id) || document.getElementsByName(id)[0];
  if (el) el.scrollIntoView();
}

function scrollToHashWhenReady() {
  if (!location.hash) return;

  const pending = Array.from(document.images).filter(img => !img.complete);
  const waits = pending.map(img => new Promise(resolve => {
    img.addEventListener('load',  resolve, { once: true });
    img.addEventListener('error', resolve, { once: true });   // broken img must not hang
  }));

  Promise.all(waits).then(() => {
    // Two frames: let the final layout/paint flush before measuring.
    requestAnimationFrame(() => requestAnimationFrame(scrollToHash));
  });
}

$(window).on('load', scrollToHashWhenReady);

$(document).ready(function () {
  swapLightDarkModeImages();
});

$("html").onClassChange((el, newClass) => {
  swapLightDarkModeImages();
});

window.setTheme = function setTheme(theme_id) {
  $("button.theme#mdbook-theme-" + theme_id).click();
  scrollToHashWhenReady();
};

window.enableGameMode = function enableGameMode() {
  $("#mdbook-theme-toggle").hide(); // Themes switch automatically based on in-game time
  $(".right-buttons").hide(); // Print, PDF, GitHub, Edit Buttons
  $(".menu-logo").hide(); // Logo on the sidebar uses absolute path and hence is broken in-game
  scrollToHashWhenReady();
};
