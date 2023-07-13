const number = 21; // nombre d'image de JDG
const alt = [5, 6, 8, 10, 17, 18]

function main() {
    // Récupère les miniatures qui ne sont pas en preview / shorts ou JDGifié
    let Query = "ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img:only-child";
    let thumbnail = document.querySelectorAll(Query);

    // Applique une image sur chaque miniature
    thumbnail.forEach((thumbnail) => {
        AddJDG(thumbnail);
    })
}

// Ajout d'un JDG à la miniature
function AddJDG(thumbnail) {
    // Image
    let img = document.createElement("img");
    // Récupère l'image
    img.src = GetJDG();
    // Permet d'avoir l'image bien positionné
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100%";
    img.style.height = "100%";

    // Ajoute JDG dans la miniature
    thumbnail.parentElement.appendChild(img);
}

// Récupère l'image de JDG
function GetJDG() {
    // Choisis un JDG aléatoire
    let index = Math.floor(Math.random() * number+1);
    let Result = GetPath(index); // Création du lien vers l'image

    if (typeof browser === "undefined") {
        return chrome.runtime.getURL(Result); // Google
    }
    return browser.extension.getURL(Result); // Autre
}

// Récupère le lien vers l'image
function GetPath(index) {
    if (alt.includes(index)) { // Version alt
        let x = Math.random
        if (x > 0.5) return ("images/JDG" + index + "alt.png");
    }
    return ("images/JDG" + index + ".png")
}

console.log("Vilain le jeu, mé...méchant jeu, t'es un méchant jeu, vilain le jeu - JDG");

// Relance tous les 500ms
setInterval(() => {
    main();
}, 500);

