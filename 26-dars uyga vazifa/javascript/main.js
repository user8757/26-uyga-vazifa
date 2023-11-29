// -- dark light -- //

const root = document.querySelector(":root");
const btnImage = document.getElementById("dark-light").firstElementChild;

const setVariables = (vars) =>
  Object.entries(vars).forEach((v) => root.style.setProperty(v[0], v[1]));

const myLightColors = {
  "--white": "#ffffff",
  "--black": "#000000",
  "--blue": "#57b8ff",
  "--yellow": "#fdd04a",
  "--grey": "#dfdfdfcc",
  "--black-00": "#000000"
};

const myDarkColors = {
  "--white": "#000000",
  "--black": "#ffffff",
  "--blue": "#57b8ff",
  "--yellow": "#ffd04a",
  "--grey": "#080808",
  "--black-00": "#fdd04a"
};

const btn = document.getElementById("dark-light");

btn.addEventListener("click", (e) => {
  if (btnImage.getAttribute("data-type") === "light") {
    btnImage.src = "images/dark.svg";
    setVariables(myDarkColors);
    btnImage.setAttribute("data-type", "dark");
  } else {
    btnImage.src = "images/light.svg";
    setVariables(myLightColors);
    btnImage.setAttribute("data-type", "light");
  }
});

// -- back top -- //

let backtop = document.getElementById("backtop");
  
function toggleBacktop() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backtop.style.opacity = 1;
  } else {
    backtop.style.opacity = 0;
  }
}

// -- -- //

let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }
  function openNavbar() {
	document.getElementById("navbar-responsive").style.left = "0";
	// document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
	document.getElementById("navbar-responsive").style.left = "-100%";
	// document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


  window.addEventListener("scroll", function () {
	toggleBacktop();
  });

