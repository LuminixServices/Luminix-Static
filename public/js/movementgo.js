function getRandomTransformValue() {
    const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
    return `translate(${getRandomNumber(-450, 450)}px, ${getRandomNumber(-450, 450)}px)`;
  }
  
  window.addEventListener("load", () => {
    const circles = document.querySelectorAll(".circle");
  
    circles.forEach(circle => {
      const randomTransform = getRandomTransformValue();
      circle.style.transform = randomTransform;
  
      let isDragging = false;
      let offset = { x: 0, y: 0 };
  
      // Event listener for when the mouse is pressed on the circle
      circle.addEventListener("mousedown", e => {
        isDragging = true;
        offset = {
          x: e.clientX - circle.getBoundingClientRect().left,
          y: e.clientY - circle.getBoundingClientRect().top
        };
        circle.style.cursor = "grabbing";
      });
  
      // Event listener for when the mouse is moved while holding the circle
      document.addEventListener("mousemove", e => {
        if (isDragging) {
          const x = e.clientX - offset.x;
          const y = e.clientY - offset.y;
          circle.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
  
      // Event listener for when the mouse is released
      document.addEventListener("mouseup", () => {
        isDragging = false;
        circle.style.cursor = "grab";
        const randomTransform = getRandomTransformValue();
        circle.style.transform = randomTransform;
      });
    });
  });