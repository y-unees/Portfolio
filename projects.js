const projects = [
  {
    name: "Fakebook",
    image: "/extras/images/fakebook.png", 
    link: "https://simulation-silk-mu.vercel.app/",
    description: "A mock social media platform to spread awareness about phishing and credential security. A cybersecurity project raising awaresness about phishing."
  },
];

const projectContainer = document.querySelector("#projects-container");

projects.forEach(project => {
  const card = document.createElement("a");
  card.href = project.link;
  card.className = "project-card";
  card.target = "_blank";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.name}" class="project-image">
    <div class="project-content">
      <div class="project-title">${project.name}</div>
      <div class="project-description">${project.description}</div>
    </div>
  `;
  projectContainer.appendChild(card);
});
