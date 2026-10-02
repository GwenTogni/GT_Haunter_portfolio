
/* Dropdown menu */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.menuPulsante')) {
      var dropdowns = document.getElementsByClassName("menuVoci");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

/* Gallery */
function GalleriaImmagini(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}


/* Filters */
// Ottieni tutti i bottoni di filtro e i progetti
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

// Funzione per applicare il filtro
function filterProjects(event) {
  const filter = event.target.getAttribute('data-filter');

  projects.forEach(project => {
    const tags = project.getAttribute('data-tags').split(' ');

    if (filter == 'all' || tags.includes(filter)) {
      project.classList.remove('hidden');
    } else {
      project.classList.add('hidden');
    }
  });
}

// Aggiungi l'evento di click su ogni bottone di filtro
filters.forEach(
  filter => {
    filter.addEventListener('click', filterProjects);
  }
);