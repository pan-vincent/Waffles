const css = {
  shift: () => {
    css.i = (css.i + 1) % 2;
    for (var key in css.color) {
      if (key == "shift" || key == "i") continue;
      css[key] = css.color[key][css.i];
    }
  },
  i: 1,
  color: {
    bookmark: ["#e6dfd7", "#fabc3c"],
    background: ["white", "#151515"],
    text: ["black", "#eeeeee"],
    dark_mode: ["#073349", "#fabc3c"],
  },
};
const bookmarks = [...document.getElementsByClassName("bookmark")];
function theme() {
  css.shift();
  for (let i = 0; i < bookmarks.length; i++) {
    bookmarks[i].style.backgroundColor = css.bookmark;
  }
  document.body.style.backgroundColor = css.background;
  document.documentElement.style.setProperty("--text-color", css.text);
  [moon_button.style.display, sun_button.style.display] = [
    sun_button.style.display,
    moon_button.style.display,
  ];
  dark_mode.style.backgroundColor = css.dark_mode;
}
for (let k = 0; k < bookmarks.length; k++) {
  bookmarks[k].addEventListener("click", function () {
    for (let i = 0; i < bookmarks.length; i++) {
      if (bookmarks[i].style.left == "-300%") {
        bookmarks[i].style.left = "-75%";
        document.getElementById(
          bookmarks[i].firstElementChild.textContent.toLowerCase().trim().replace(' ', '-')
        ).style.display = "none";
        document.getElementById(
          bookmarks[k].firstElementChild.textContent.toLowerCase().trim().replace(' ', '-')
        ).style.display = "";
      }
      bookmarks[k].style.left = "-300%";
    }
  });
}

theme();
