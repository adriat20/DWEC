// Array con 10 URLs
const urls = [
    "https://www.marca.com/",
    "https://www.as.com/",
    "https://www.zalando.com/",
    "https://www.google.es/",
    "https://www.aliexpres.com/",
    "https://www.parchis.com/",
    "https://www.minijuegos.com/",
    "https://www.telecinco.com/",
    "https://www.facebook.com/",
    "https://www.twitter.com/"
  ];
  
  // Función que cambia la URL del navegador
  function cambiaURL(url) {
    window.location.href = url;
  }
  
  // Obtiene una URL aleatoria del array
  const urlAleatoria = urls[Math.floor(Math.random() * urls.length)];
  
  // Ejecuta la función cambiaURL después de 10 segundos
  setTimeout(cambiaURL, 10000, urlAleatoria);
  