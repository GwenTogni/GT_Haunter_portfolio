
/* Dropdown menu */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.menuPulsante')) {
      var dropdowns = document.getElementsByClassName("menuVoci");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
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

    if (filter === 'all' || tags.includes(filter)) {
      project.classList.remove('hidden');
    } else {
      project.classList.add('hidden');
    }
  });
}

// Aggiungi l'evento di click su ogni bottone di filtro
filters.forEach(filter => {
  filter.addEventListener('click', filterProjects);
});


/* Language */
function loadTranslations() {
  fetch('src/translation.json')
    .then(response => response.json())
    .then(data => {
      window.translations = data;
    })
    // .catch(error => console.error("Errore nel caricamento delle traduzioni:", error));
}

function switchLanguage() {
  const language = document.getElementById('languageSwitcher').value;

  // Aggiorna il contenuto della pagina con i testi tradotti
  document.getElementById('header01').innerText = translations[language].about;
  document.getElementById('header02').innerText = translations[language].contact;

  document.getElementById('title').innerText = translations[language].welcome_title;

  document.getElementById('title01').innerText = translations[language].title_01;
  document.getElementById('title02').innerText = translations[language].title_02;
  document.getElementById('title03').innerText = translations[language].title_03;
  document.getElementById('title04').innerText = translations[language].title_04;
  document.getElementById('title05').innerText = translations[language].title_05;
  document.getElementById('title06').innerText = translations[language].title_06;
  document.getElementById('title07').innerText = translations[language].title_07;
  document.getElementById('title08').innerText = translations[language].title_08;
  document.getElementById('title09').innerText = translations[language].title_09;
  document.getElementById('title10').innerText = translations[language].title_10;
  document.getElementById('title11').innerText = translations[language].title_11;
  document.getElementById('title12').innerText = translations[language].title_12;
  document.getElementById('title13').innerText = translations[language].title_13;

  document.getElementById('how01').innerText = translations[language].project_how_01;
  document.getElementById('how02').innerText = translations[language].project_how_02;
  document.getElementById('how03').innerText = translations[language].project_how_03;
  document.getElementById('how04').innerText = translations[language].project_how_04;
  document.getElementById('how05').innerText = translations[language].project_how_05;

  document.getElementById('tag01').innerText = translations[language].tag_all;
  document.getElementById('tag02').innerText = translations[language].tag_book;
  document.getElementById('tag03').innerText = translations[language].tag_brand;
  document.getElementById('tag04').innerText = translations[language].tag_illustration;
  document.getElementById('tag05').innerText = translations[language].tag_game;
  document.getElementById('tag06').innerText = translations[language].tag_interaction;
  document.getElementById('tag07').innerText = translations[language].tag_photo;
  document.getElementById('tag08').innerText = translations[language].tag_video;


  document.getElementById('titleFlyers').innerText = translations[language].title_Flyers;

  document.getElementById('titleMonte').innerText = translations[language].title_Monte;

}

// Carica le traduzioni al caricamento della pagina
window.onload = loadTranslations;

