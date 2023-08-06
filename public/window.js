function importCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }

  function removeCSS(url) {
    var links = document.querySelectorAll("link[rel=stylesheet]");
    for (var i = 0; i < links.length; i++) {
      if (links[i].href === url) {
        links[i].parentNode.removeChild(links[i]);
        break;
      }
    }
  }
function openBrowser(url) {
    importCSS("./css/windows.css");
    // create container div
    const container = document.createElement("div");
    container.style.borderTopLeftRadius = "10px"
    container.style.borderTopRightRadius = "10px"
    container.className = "CTNAIR";
    document.body.appendChild(container);
  
    // create topbar div
    const topbar = document.createElement("div");
    topbar.style.borderTopLeftRadius = "10px"
    topbar.style.borderTopRightRadius = "10px"
    topbar.className = "stopbar";
    container.appendChild(topbar);
  
    // create logo img
    const logo = document.createElement("img");
    logo.src = "./img/Proton.png";
    logo.alt = "Logo";
    logo.className = "f_logo";
    topbar.appendChild(logo);
  
    // create buttons div
    const buttons = document.createElement("div");
    buttons.className = "buttons";
    topbar.appendChild(buttons);
  
      // create goto button
    const gotoBtn = document.createElement("img");
    gotoBtn.style.height = "32px"
    gotoBtn.style.width = "32px"
    gotoBtn.className = "btn";
    gotoBtn.id = "gotoBtn";
    gotoBtn.src = "./img/code.png";
    gotoBtn.alt = "Go to";
    buttons.appendChild(gotoBtn);
  
    // create fullscreen button
    const fullscreenBtn = document.createElement("img");
    fullscreenBtn.style.height = "32px"
    fullscreenBtn.style.width = "32px"
    fullscreenBtn.className = "btn";
    fullscreenBtn.id = "fullscreenBtn";
    fullscreenBtn.src = "./img/Fullscreen.png";
    fullscreenBtn.alt = "Fullscreen";
    buttons.appendChild(fullscreenBtn);
  
      // create close button
    const closeBtn = document.createElement("img");
    closeBtn.style.height = "32px"
    closeBtn.style.width = "32px"
    closeBtn.className = "btn";
    closeBtn.id = "closeBtn";
    closeBtn.src = "./img/X_Button.png";
    closeBtn.alt = "Close";
    buttons.appendChild(closeBtn);
  
  
    // create iframe
    const iframe = document.createElement("iframe");
    iframe.id = "iframe";
    iframe.src = "./go.html#" + url
    container.appendChild(iframe);
  
    // make the topbar draggable
    let isDragging = false;
    let initialX;
    let initialY;
    let offsetX = 0;
    let offsetY = 0;
  
    topbar.addEventListener("mousedown", (event) => {
      isDragging = true;
      initialX = event.clientX;
      initialY = event.clientY;
    });
  
    topbar.addEventListener("mouseup", () => {
      isDragging = false;
    });
  
    topbar.addEventListener("mousemove", (event) => {
      if (isDragging) {
        offsetX = event.clientX - initialX;
        offsetY = event.clientY - initialY;
  
        container.style.left = `${container.offsetLeft + offsetX}px`;
        container.style.top = `${container.offsetTop + offsetY}px`;
  
        initialX = event.clientX;
        initialY = event.clientY;
      }
    });
  
    // add event listeners to buttons
    closeBtn.addEventListener("click", () => {
        removeCSS("./css/windows.css");
      container.remove();
    });
  
    fullscreenBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        iframe.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });
  
    gotoBtn.addEventListener("click", () => {
      window.location.href= iframe.src
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function openWindow(url) {
    importCSS("./css/windows.css");
    // create container div
    const container = document.createElement("div");
    container.style.borderTopLeftRadius = "10px"
    container.style.borderTopRightRadius = "10px"
    container.className = "CTNAIR";
    document.body.appendChild(container);
  
    // create topbar div
    const topbar = document.createElement("div");
    topbar.style.borderTopLeftRadius = "10px"
    topbar.style.borderTopRightRadius = "10px"
    topbar.className = "stopbar";
    container.appendChild(topbar);
  
    // create logo img
    const logo = document.createElement("img");
    logo.src = "./img/Proton.png";
    logo.alt = "Logo";
    logo.className = "f_logo";
    topbar.appendChild(logo);
  
    // create buttons div
    const buttons = document.createElement("div");
    buttons.className = "buttons";
    topbar.appendChild(buttons);
  
      // create goto button
    const gotoBtn = document.createElement("img");
    gotoBtn.style.height = "32px"
    gotoBtn.style.width = "32px"
    gotoBtn.className = "btn";
    gotoBtn.id = "gotoBtn";
    gotoBtn.src = "./img/code.png";
    gotoBtn.alt = "Go to";
    buttons.appendChild(gotoBtn);
  
    // create fullscreen button
    const fullscreenBtn = document.createElement("img");
    fullscreenBtn.style.height = "32px"
    fullscreenBtn.style.width = "32px"
    fullscreenBtn.className = "btn";
    fullscreenBtn.id = "fullscreenBtn";
    fullscreenBtn.src = "./img/Fullscreen.png";
    fullscreenBtn.alt = "Fullscreen";
    buttons.appendChild(fullscreenBtn);
  
      // create close button
    const closeBtn = document.createElement("img");
    closeBtn.style.height = "32px"
    closeBtn.style.width = "32px"
    closeBtn.className = "btn";
    closeBtn.id = "closeBtn";
    closeBtn.src = "./img/X_Button.png";
    closeBtn.alt = "Close";
    buttons.appendChild(closeBtn);
  
  
    // create iframe
    const iframe = document.createElement("iframe");
    iframe.id = "iframe";
    iframe.src = url
    container.appendChild(iframe);
  
    // make the topbar draggable
    let isDragging = false;
    let initialX;
    let initialY;
    let offsetX = 0;
    let offsetY = 0;
  
    topbar.addEventListener("mousedown", (event) => {
      isDragging = true;
      initialX = event.clientX;
      initialY = event.clientY;
    });
  
    topbar.addEventListener("mouseup", () => {
      isDragging = false;
    });
  
    topbar.addEventListener("mousemove", (event) => {
      if (isDragging) {
        offsetX = event.clientX - initialX;
        offsetY = event.clientY - initialY;
  
        container.style.left = `${container.offsetLeft + offsetX}px`;
        container.style.top = `${container.offsetTop + offsetY}px`;
  
        initialX = event.clientX;
        initialY = event.clientY;
      }
    });
  
    // add event listeners to buttons
    closeBtn.addEventListener("click", () => {
        removeCSS("./css/windows.css");
      container.remove();
    });
  
    fullscreenBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        iframe.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });
  
    gotoBtn.addEventListener("click", () => {
      window.location.href= iframe.src
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }