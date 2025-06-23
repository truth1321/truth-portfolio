console.log("Welcome to Truth Chainda's portfolio!");
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      if (category === 'all' || project.classList.contains(category)) {
        project.style.display = 'list-item';
      } else {
        project.style.display = 'none';
      }
    });
  }
  