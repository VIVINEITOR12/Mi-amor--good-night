const gifs = [
    'https://tenor.com/embed/1790956462399038439',
    'https://tenor.com/embed/17351129372538383681',
    'https://tenor.com/embed/15578426',
    'https://tenor.com/embed/11410215819709098761',
    'https://tenor.com/embed/1824454323751468012'
];

const textos = [
    'Olaaaa mi niña <span class="emoji">💜😍</span>',
    'Como tas?, espero que tes bien jijii',
    'Te estaño muchote',
    'Buenas noches amor, ya toy muy canshadito, me lelen los sojos trataré de mimir niña',
    'Teamito mi niña hermosa <span class="emoji">💜😍</span>' // Texto añadido para el nuevo GIF
];

let indiceActual = 0;

function cambiarContenido() {
    indiceActual = (indiceActual + 1) % gifs.length;
    document.getElementById('gif').src = gifs[indiceActual];
    document.getElementById('texto').innerHTML = textos[indiceActual]; // Utiliza innerHTML para permitir etiquetas HTML
}