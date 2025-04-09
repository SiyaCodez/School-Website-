// Dynamic News
const articles = [
  {
    title: "Emerging Tech Summit 2025",
    date: "May 5, 2025",
    description: "Join leaders in AI, robotics, and data science for a full-day summit on tech innovation and future careers.",
    image: "./assets/images/Summit.png",
    link: "#"
  },
  {
    title: "Hackathon: Code for Change",
    date: "May 10, 2025",
    description: "Our annual student hackathon returns! Teams will build solutions that address real-world problems using emerging tech.",
    image: "./assets/images/Hackathon.png",
    link: "#"
  },
  {
    title: "Guest Lecture: AI & Ethics",
    date: "June 28, 2025",
    description: "Don't miss a thought-provoking session by Prof. Smith on how ethics and bias impact the evolution of AI.",
    image: "./assets/images/Lecturer.png",
    link: "#"
  }
];

  document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");

    articles.forEach(article => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";

      col.innerHTML = `
      <div class="card h-100 shadow-sm news-card">
        <img src="${article.image}" class="card-img-top news-img" alt="${article.title}">
        <div class="card-body">
          <h6 class="card-title">${article.title}</h6>
          <p class="card-date text-muted small">${article.date}</p>
          <p class="card-text">${article.description}</p>
          <a href="${article.link}" class="btn news-btn">Read More</a>
        </div>
      </div>
      `;
      newsContainer.appendChild(col);
    });
  });

//Form Validation
(() => {
  'use strict';
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {

      event.stopPropagation();
      form.classList.add('was-validated');
      alertBox.classList.add('d-none'); 
    } else {
      
      form.classList.remove('was-validated');
      form.reset(); 
      alertBox.classList.remove('d-none');
      alertBox.classList.add('show');

      setTimeout(() => {
        alertBox.classList.add('d-none');
      }, 5000);
    }
  });
})();
