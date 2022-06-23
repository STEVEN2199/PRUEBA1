/*let ejecutarCodigo = () => {
    alert("Hola, mundo!")
}
ejecutarCodigo();*/
let elemento = document.getElementById("titulo1");
elemento.textContent = 'Album de fotos';

arreglo = document.getElementsByClassName('text-muted');
    elemento = arreglo[1];
    elemento.innerHTML = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>';



    arreglo = document.getElementsByTagName('p');
    elemento = arreglo[2];
    elemento.setAttribute('class','d-none');


const svg = document.querySelector("svg");
const img = document.createElement("img");
img.innerHTML = { url: "https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "camino"}, { url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "energia"}, { url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "papá"};
svg.parentNode.replaceChild(img, svg);