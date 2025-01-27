const projects = [
  {
    title: "My Github",
    type: "Coding",
    description: " development project",
    image: "/api/placeholder/400/300",
    fullDetails: "Comprehensive web application showcasing responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Zenumium",
    },
  },
  {
    title: "3D Character Model",
    type: "Blender",
    description: "Detailed character render",
    image: "/api/placeholder/400/300",
    fullDetails: "High-fidelity 3D character with advanced texturing.",
    techniques: ["Modeling", "Texturing", "Lighting"],
    links: {
      artStation: "https://www.artstation.com/projecktaqua",
    },
  },
];

function renderProjects() {
  const projectGrid = document.getElementById("projectGrid");
  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.dataset.index = index;
    card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <small>${project.type} Project</small>
            `;
    card.addEventListener("click", openModal);
    projectGrid.appendChild(card);
  });
}

const modal = document.getElementById("projectModal");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.querySelector(".close-modal");

function openModal(e) {
  const projectIndex = e.currentTarget.dataset.index;
  const project = projects[projectIndex];
  const modal = document.getElementById("projectModal");
  const modalDetails = document.getElementById("modalDetails");

  modalDetails.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.fullDetails}</p>
      <h3>Technologies:</h3>
      <ul>${(project.technologies || project.techniques)
        .map((tech) => `<li>${tech}</li>`)
        .join("")}</ul>
      <div class="project-links">
          ${Object.entries(project.links)
            .map(
              ([name, url]) => `<a href="${url}" target="_blank">${name}</a>`
            )
            .join("")}
      </div>
  `;

  modal.style.display = "block";
}

document.querySelector(".close-modal").onclick = function () {
  document.getElementById("projectModal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("projectModal")) {
    document.getElementById("projectModal").style.display = "none";
  }
};

renderProjects();
