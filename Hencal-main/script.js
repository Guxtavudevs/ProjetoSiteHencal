document.addEventListener("DOMContentLoaded", () => {
    const btnArtigos = document.getElementById("btn-artigo");
    const btnNoticias = document.getElementById("btn-noticia");
  
    btnArtigos.addEventListener("click", () => {
      window.location.href = "artigo.html"; 
    });
  
    btnNoticias.addEventListener("click", () => {
      window.location.href = "noticia.html"; 
    });
  });
  