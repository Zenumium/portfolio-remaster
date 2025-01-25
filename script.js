const projects = [
  {
    type: "Coding",
    title: "Web App",
    description: "Interactive project demonstrating web development skills",
    technologies: ["HTML", "CSS", "JavaScript"],
    fullDetails:
      "Developed a comprehensive web application showcasing responsive design and interactive features. Implemented modern web technologies to create a seamless user experience.",
  },
  {
    type: "Blender",
    title: "3D Character Model",
    description: "Detailed character render showing modeling skills",
    techniques: ["Modeling", "Texturing", "Lighting"],
    fullDetails:
      "Created a high-fidelity 3D character model with intricate texturing and advanced lighting techniques. Demonstrates proficiency in Blender and 3D character design.",
  },
  {
    type: "Coding",
    title: "Data Visualization",
    description: "Interactive dashboard with complex data displays",
    technologies: ["React", "D3.js", "ChartJS"],
    fullDetails:
      "Built an interactive data visualization dashboard using React and advanced charting libraries. Transformed complex data into intuitive, visually appealing graphics.",
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

  modalDetails.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.fullDetails}</p>
            <h3>Technologies/Techniques:</h3>
            <ul>${(project.technologies || project.techniques)
              .map((tech) => `<li>${tech}</li>`)
              .join("")}</ul>
        `;

  modal.style.display = "block";
}

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

renderProjects();
