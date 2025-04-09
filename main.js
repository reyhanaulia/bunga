window.onload = () => {
  // Hilangkan class 'not-loaded'
  document.body.classList.remove("not-loaded");

  // Efek mengetik
  const text = "Congratulations, Zahiraa! 🎉 You've successfully passed the second thesis. Semangat untuk sidang selanjutnya,hwaiting~"; 
  const typingTarget = document.getElementById("typing-text");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingTarget.textContent += text.charAt(index);
      index++;
      const delay = text.charAt(index - 1) === ' ' ? 120 : 80;
      setTimeout(typeEffect, delay);
    } else {
      // Tambahkan emoji GIF setelah teks selesai
      const img = document.createElement("img");
      img.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTl3MHd5cWpzM3hlZHN1bDR3am5sNG1iNWF0djZnM2Y3eWNxaGYzYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ekswLitBUEKHxTc70h/giphy.gif";
      img.alt = "hwaiting gif";
      img.style.width = "60px";
      img.style.marginLeft = "10px";
      img.style.marginTop = "6px"; // Bikin agak turun
      img.style.verticalAlign = "sub"; // Tambahan agar posisinya sejajar bawah teks
      typingTarget.appendChild(img);
    }
  }

  typeEffect();
};
