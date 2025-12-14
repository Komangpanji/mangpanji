// ===============================
// ANIMASI SAAT WEB DIBUKA
// ===============================
window.addEventListener("load", () => {
  // Fade + slide halaman
  const page = document.querySelector(".page");
  if (page) page.classList.add("show");

  // Alert sambutan (opsional)
  setTimeout(() => {
    alert("Selamat datang di website photofolio saya!");
  }, 600);
});

// ===============================
// SMOOTH SCROLL NAVBAR
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===============================
// NAVBAR AKTIF SAAT SCROLL
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// TYPING EFFECT
// ===============================
const text = "Photographer | Designer | Web Creator";
let index = 0;
const typing = document.getElementById("typing");

function typingEffect() {
  if (typing && index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(typingEffect, 100);
  }
}
typingEffect();

// ===============================
// ANIMASI SECTION SAAT SCROLL
// ===============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  observer.observe(sec);
});

// ===============================
// MODAL FOTO GALERI
// ===============================
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    if (modal && modalImg) {
      modal.style.display = "flex";
      modalImg.src = img.src;
    }
  });
});

if (modal) {
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// ===============================
// SCROLL TO TOP BUTTON
// ===============================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (topBtn) {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
