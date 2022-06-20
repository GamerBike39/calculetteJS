const touches = [...document.querySelectorAll(".bouton")];
const keys = document.querySelectorAll("button");
const ecran = document.querySelector(".ecran");
const blague = document.querySelector(".egal");
const pasVoir = document.querySelector(".pasVoir");
// renvoi une node list, ce n'est pas un tableau. on le transforme en tableau avec l'utilisation de  [... ]

// la fonction map() prend chaque élément d'un tableau, fait quelque chose à cet élément (fonction callbak : une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action. Et retourne le résulat sous forme d'un nouveau tableau (ici dans la variable nouveauTab)
// const nouveauTab = taleau.map( element => faireQqch(element));
const listeKeycode = touches.map((touche) => touche.dataset.key);
console.log(listeKeycode);
// affiche l'ensemble des touches avec leur keycode à l'intérieur de la classe .touches // ces keycodes sont sous la forme de phrases c'est important pour la suite.

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
  console.log(valeur, typeof valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
  console.log(valeur, typeof valeur);
});

//fonction calculer
const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.innerHTML = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      case "46":
        const del = ecran.textContent.slice(0, -1);
        ecran.textContent = del;
        break;
      default:
        const indexKeyCode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeyCode];
        ecran.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  ecran.textContent = "ERREUR";
});

// animation souris
const mousemove = document.querySelector(".mouse");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// blague
blague.addEventListener("dblclick", () => {
  blague.style.top = Math.floor(Math.random() * 95) + "vh";
  blague.style.left = Math.floor(Math.random() * 95) + "vw";
  blague.classList.toggle("blague");
  pasVoir.classList.toggle("pasVoir");
});

blague.addEventListener("click", () => {
  blague.classList.toggle("blagueNon");
});

// effet sonore et visuelle sur la touche AC
let reload = document.querySelector(".sound");
reload.volume = 0.5;

toucheReload = document.querySelector(".ac");
toucheReload.addEventListener("click", () => {
  reload.play();
  toucheReload.classList.add("gaucheDroite");
  ecran.classList.add("ecranFeu");
  setTimeout(() => {
    toucheReload.classList.remove("gaucheDroite");
    ecran.classList.remove("ecranFeu");
  }, 700);
});
