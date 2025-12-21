/// Settings Popup

document.addEventListener('DOMContentLoaded', () => {

    const footerButton = document.querySelector("footer-button"); 
    const bodyOverlay = document.querySelector("body-overlay"); 
    const bodyOverlayPopup = document.querySelector("body-overlay-popup");

    bodyOverlayPopup.addEventListener('click', () => { 

    }); 
    
    bodyOverlay.addEventListener("click", (e) => { 
        if (e.target === bodyOverlay) { 
            bodyOverlay.style.display = "none"; 
        }
    });

    footerButton.addEventListener("click", () => {
        bodyOverlay.style.display = "flex"; 
    });
});

