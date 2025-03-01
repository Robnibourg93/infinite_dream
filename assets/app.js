import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
window.addEventListener('load',function(){
    var title = document.querySelector('.greet'),
        subtext = document.querySelector('.subTexts'),
        delay = 1000;


    setTimeout(function(){title.style.top='0';},delay);
    setTimeout(function(){subtext.style.bottom = '0%';},delay*2);

});
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
