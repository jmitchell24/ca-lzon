/// Matomo 

var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="//matomo.delm.win/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '4']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();

/// Settings Popup

// document.addEventListener('DOMContentLoaded', () => {

//     const footerButton = document.querySelector("footer-button"); 
//     const bodyOverlay = document.querySelector("body-overlay"); 
//     const bodyOverlayPopup = document.querySelector("body-overlay-popup");

//     bodyOverlayPopup.addEventListener('click', () => { 

//     }); 
    
//     bodyOverlay.addEventListener("click", (e) => { 
//         if (e.target === bodyOverlay) { 
//             bodyOverlay.style.display = "none"; 
//         }
//     });

//     footerButton.addEventListener("click", () => {
//         bodyOverlay.style.display = "flex"; 
//     });
// });

