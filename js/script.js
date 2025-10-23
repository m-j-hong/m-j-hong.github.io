
function scrollToSection(target) {
    let element = document.getElementById(target);
    let y = element.offsetTop + -150
    window.scrollTo({top: y, behavior: "smooth"});
}

// fonts to cycle through (make sure they're imported)
const fonts = [
    "'JetBrains Mono', monospace",
    "'IBM Plex Mono', monospace",
    "'DM Mono', monospace",
    "'Courier New', monospace",

  ];
  
  // grab the element and split into spans
const coverText = document.getElementById("cover-text");
const letters = coverText.textContent.split("");
coverText.innerHTML = "";
  
letters.forEach(letter => {
    const span = document.createElement("span");
    span.innerHTML = letter;
    coverText.appendChild(span);
});
  
// animate font switching
const spans = coverText.querySelectorAll("span");
spans.forEach((span, i) => {
    setInterval(() => {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        span.style.fontFamily = randomFont;
    }
    , 500 + i * 100); // slight stagger by index
});


document.addEventListener('scroll', () => {
    const topButton = document.getElementById('top-button-div');
    if (window.scrollY <= 0) {
        topButton.innerHTML = ''
    } else {
        topButton.innerHTML = '<a id="top-button" href="#top">^</a>'
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key == '6') {
        scrollToSection('top')
    }
})
/*
document.querySelectorAll('.project-item').forEach(item => {
    // get background image url from CSS variable
    const bgUrl = getComputedStyle(item).getPropertyValue('--bg-img')
      .replace(/url\(["']?|["']?\)/g, '');
    
    // get background color from computed style
    const bgColor = getComputedStyle(item).getPropertyValue('background-color');
  
    const img = new Image();
    img.src = bgUrl;
  
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
  
      // fill background color first
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      // draw the image on top with blur
      ctx.filter = 'blur(20px)';
      ctx.drawImage(img, 0, 0);
  
      const blurredURL = canvas.toDataURL();
  
      // hover effect
      item.addEventListener('mouseenter', () => {
        item.style.backgroundImage = `url(${blurredURL})`;
      });
      item.addEventListener('mouseleave', () => {
        item.style.backgroundImage = `var(--bg-img)`;
      });
    };
  });
  */