import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

window.addEventListener('load', function () {
    var title = document.querySelector('.greet'),
        subtext = document.querySelector('.sub-texts'),
        footer = document.querySelector('.footer'),
        button = document.createElement("button"),
        delay = 1000;

    button.className += "enter-button";
    button.innerHTML = 'ENTER'

    setTimeout(function () {
        title.style.top = '0';
    }, delay);
    setTimeout(function () {
        subtext.style.bottom = '0%';
    }, delay * 2);
    setTimeout(function () {
        footer.style.opacity = '1'
    }, delay * 3);
    setTimeout(function () {
        footer.style.opacity = '0'
    }, delay * 5);
    setTimeout(function () {
        footer.removeChild(document.querySelector('.warcraftLogo'))
    }, delay * 6);
    setTimeout(function () {
        footer.appendChild(button)
    }, delay * 6);
    setTimeout(function () {
        footer.style.opacity = '1'
    }, delay * 7);

});


console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
