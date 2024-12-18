
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


// /* Filters */
// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("card");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

/* Filters ChatGPT */
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

