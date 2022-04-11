// DOM
// on récupère toute les touches avec le dom et le queryselectorALL la classe .bouton
const touches = [...document.querySelectorAll('.bouton')];
const ecran = document.querySelector('.ecran');
// console.log(touches); 
// renvoi une node list, ce n'est pas un tableau. on le transforme en tableau (array) avec l'utilisation de  [... ]
// une node list ne permet pas forcément les actions que l'ont peut faire avec un tableau 

// la fonction map() prend chaque élément d'un tableau, fait quelque chose à cet élément (fonction callbak) et retourne le résulat sous forme d'un nouveau tableau (ici dans la variable nouveauTab)
// const nouveauTab = taleau.map( element => faireQqch(element));
const listeKeycode = touches.map(touche => touche.dataset.key);
// console.log(listeKeycode);
// affiche l'ensemble des touches avec leur keycode à l'intérieur de la classe .touches // ces keycodes sont sous la forme de phrases c'est important pour la suite.

document.addEventListener('keydown', (e)=> {
    const valeur = e.keyCode.toString();
    calculer(valeur);
    // console.log(valeur, typeof valeur);
});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
    // console.log(valeur, typeof valeur)
})

// permet d'"écouter" l'évènement souhaité que ce soit une pression de touche comme avec keydown, ou un clic avec onclick

//fonction calculer
const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)) {
        switch(valeur){
            case '8' :
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            case '46':
                const del = ecran.textContent.slice(0, -1);
                ecran.textContent = del;
                break;
            default : 
            const indexKeyCode = listeKeycode.indexOf(valeur);
            const touche = touches[indexKeyCode];
            ecran.textContent += touche.innerHTML;
        }
    }

}
  
window.addEventListener('error', (e) => {

	ecran.textContent = ('⛔ ERREUR ⛔');
})

// animation souris
const mousemove = document.querySelector(".mouse");

window.addEventListener("mousemove", (e) => {
   mousemove.style.left = e.pageX + "px";
});
window.addEventListener("mousemove", (e) => {
   mousemove.style.top = e.pageY + "px";
});

