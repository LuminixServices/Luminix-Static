window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const encodedData = window.location.hash.substr(1);
      openUV(encodedData)
    }, 1000); // Wait for 2 seconds before executing the code inside the setTimeout callback
  });
  

  function encodeUrl(str){
    if (!str) return str;
    return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
  }
  
  function openUV(url){
    window.navigator.serviceWorker.register('./uv/sw.js', {
      scope: __uv$config.prefix
    }).then(() => {
      window.location.href = __uv$config.prefix + encodeUrl(url);
    });
  }