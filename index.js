// Créer un événément au scroll

// Cacher la navbar si l'utilisateur commence à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)


const navBar = document.querySelector('#navbar');
let currentScrollY = 0

window.addEventListener('scroll', (e) => {

  if (window.scrollY < currentScrollY) {
    navBar.style.top = -160 + "px";
    
  } else {
    navBar.style.top = 10 + "px";
  }
  currentScrollY = window.scrollY
});