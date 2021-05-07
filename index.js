import './app-popup.js';

window.addEventListener('load', () => {
    initApp();
});

function initApp() {
  const mainParargraph = document.getElementById('mainParagraph');
  
  mainParagraph.addEventListener("mouseenter", () => {
    createPopup()
  });

  mainParagraph.addEventListener("mouseleave", () => {
    removePopup();
 });
}

function createPopup() {
    console.log(123)
    const mainContainer = document.getElementById("mainContainer");
    const imPopup = document.createElement("P");
    imPopup.innerText = 'COOL POPUP';
    let appPopup = document.createElement("app-popup");
    appPopup.initPopup = imPopup;
    const popupLocation = document.getElementById("popupLocation");
    const popupLocationBounds = popupLocation.getBoundingClientRect();
  
    appPopup.style.position = 'absolute';
    appPopup.style.top = popupLocationBounds.top + 30 + 'px';
    appPopup.style.left = popupLocationBounds.left + 'px';
    appPopup.style.padding = '10px'
    appPopup.style.backgroundColor = 'rgba(0,0,0,.03)';
    appPopup.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,.3)';

    mainContainer.appendChild(appPopup);
}

function removePopup() {
    const mainContainer = document.getElementById("mainContainer");
    const appPopup = document.querySelector("app-popup");
    mainContainer.removeChild(appPopup);
}