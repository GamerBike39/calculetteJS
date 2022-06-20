const output = document.querySelector(".output");
let result = document.querySelector(".ecran");
const keys = document.querySelectorAll("button");
const toucheReload = document.querySelector(".ac");
const ici = document.querySelector(".ici");
const calculatrice = document.querySelector(".calculatrice");
const cheat = document.querySelector(".cheatcode");
const cheatS = document.querySelector(".cheatcodeS");
const soleil = document.querySelector(".cheatcodeS p:nth-last-child(1)");
const cochon = document.querySelector(".cheatcode p:nth-last-child(1)");

keys.forEach((key) => {
  key.addEventListener("click", calculer);
  // console.log(key);
});

function calculer() {
  let buttonText = this.innerText;
  //   Si aucun accesseur de propriété est utilisé, this fait référence à l'objet global; Dans un constructeur (via l'appel à l'opérateur new ), this fait référence à l'objet qui vient d'être créé; Dans une méthode, this fait référence à l'objet qui a appelé la méthode.
  if (buttonText === "AC") {
    output.innerText = "";
    result.innerText = "";
    // définir le fichier son
    let reload = document.querySelector(".sound");
    reload.volume = 1;
    toucheReload.addEventListener("click", () => {
      reload.play();
      toucheReload.classList.add("gaucheDroite");
      result.classList.add("ecranFeu");
      setTimeout(() => {
        toucheReload.classList.remove("gaucheDroite");
        result.classList.remove("ecranFeu");
      }, 700);
    });
    return;
  }

  if (buttonText === "DEL") {
    const del = output.textContent.slice(0, -1);
    output.textContent = del;
    return;
  }

  if (buttonText === "=") {
    result.innerText = eval(output.innerText);
    //  faille XSS Possible Cross-site scripting (XSS) est une faille de sécurité qui permet à un attaquant d'injecter dans un site web un code client malveillant. Ce code est exécuté par les victimes et permet aux attaquants de contourner les contrôles d'accès et d'usurper l'identité des utilisateurs

    result.style.animation = "big 0.2s ease-in-out";
    output.style.animation = "small 0.2s ease-in-out";
    result.style.animationFillMode = "forwards";
    output.style.animationFillMode = "forwards";
  }
  if (output.textContent === "35383773") {
    calculatrice.classList.add("retourne");
    cheat.classList.add("changeColor");
    cochon.classList.add("grossir");

    setTimeout(() => {
      calculatrice.classList.add("retourneBonsens");
      cheat.classList.remove("changeColor");
      cochon.classList.remove("grossir");
    }, 4000);

    setTimeout(() => {
      calculatrice.classList.remove("retourne");
      calculatrice.classList.remove("retourneBonsens");
      output.innerHTML = "";
      result.innerHTML = "";
    }, 5000);
    return;
  }

  if (output.textContent === "713705") {
    calculatrice.classList.add("retourne");
    cheatS.classList.add("changeColor");
    soleil.classList.add("grossir");

    setTimeout(() => {
      calculatrice.classList.add("retourneBonsens");
      cheatS.classList.remove("changeColor");
      soleil.classList.remove("grossir");
    }, 4000);

    setTimeout(() => {
      calculatrice.classList.remove("retourne");
      calculatrice.classList.remove("retourneBonsens");
      output.innerHTML = "";
      result.innerHTML = "";
    }, 5000);
    return;
  } else {
    output.textContent += buttonText;
    return;
  }
}

// afficher des erreurs
window.addEventListener("error", () => {
  result.textContent = "ERREUR";
  toucheReload.classList.add("clignote");
  ici.classList.remove("display");
  setTimeout(() => {
    toucheReload.classList.remove("clignote");
    ici.classList.add("display");
    result.textContent = "";
    output.textContent = "";
  }, 3000);
});

// animation souris
const mousemove = document.querySelector(".mouse");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
