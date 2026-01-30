function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleProjects() {
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    const btn = document.getElementById('toggleProjectsBtn');
    const isHidden = hiddenProjects[0].classList.contains('hidden-project');
    
    hiddenProjects.forEach(project => {
        if (isHidden) {
            project.classList.remove('hidden-project');
            project.classList.add('visible-project');
        } else {
            project.classList.remove('visible-project');
            project.classList.add('hidden-project');
        }
    });
    
    btn.textContent = isHidden ? 'Show Less Projects' : 'Show More Projects';
}