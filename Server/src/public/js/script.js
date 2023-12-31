const contenedor = document.getElementById('container')
const btnCrear = document.getElementById('btn-new')
const myModal = new bootstrap.Modal(document.getElementById('myModal'))
const btnSave = document.getElementById('btn-save')
const form = document.getElementById('formulario')


let html = ''
let option = ''
let idForm = ''

const imputTitle = document.getElementById('imputTitle')
const imputDescription = document.getElementById('imputDescription')
const imputPoster = document.getElementById('imputPoster')


// boton crear //
btnCrear.addEventListener('click', () => {
    option = "new"
    btnSave.textContent = "Agregar"
    imputTitle.value = ""
    imputDescription.value = ""
    imputPoster.value =""
  myModal.show()

})

//boton delete//
document.addEventListener('click', (event) => {
  if(event.target.matches('#btn-delete')) {
    const article = event.target.closest('.col-4')
    const idArticle = article.dataset.id

    Swal.fire({
      title: "¿Esta usted seguro?",
      text: "Esta accion no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, deseo borrarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/api/foro/${idArticle}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              article.remove();
            }
          })
          .catch((err) => {
            console.error(err);
          });
        Swal.fire("Borrada!", "La Entrada fue borrada exitosamente.", "correctamente");
      }
    });
  }
});

//boton editar//
document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-edit')) {
        const article = event.target.closest('.col-4')
        // console.log(article)
        const idArticle = article.dataset.id
        const urlPoster = article.children[0].children[0].src;
        const titleEdit = article.children[0].children[1].children[0].textContent;
        const descriptionEdit = article.children[0].children[1].children[1].textContent;

        idForm = idArticle;
        imputTitle.value = titleEdit;
        imputDescription.value = descriptionEdit;
        imputPoster.value = urlPoster;
        option = "edit";
        btnSave.textContent = "Editar";
        myModal.show();

        //console.log(descriptionEdit);
    }
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("submit");

  if (option === "new") {
    const newForo = {
      title: imputTitle.value,
      description: imputDescription.value,
      poster: imputPoster.value,
    };

    fetch('http://localhost:3000/api/foro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newForo)

    }).then(res => {
      console.log(res)
        if (res.ok) {
          //alert("Creado exitosamente!");
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Tu entrada fue agregada exitosamente',
            showConfirmButton: true,
            timer: 1200
          }).then((result) =>{
            if (result.isConfirmed){
            myModal.hide();
            location.reload();
            }
          })
         
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (option === "edit") {
    const newForo = {
      title: imputTitle.value,
      description: imputDescription.value,
      poster: imputPoster.value,
    };

    fetch(`http://localhost:3000/api/foro/${idForm}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newForo)
    }).then(res => {
      if(res.ok){
        alert('Entrada edited successfully')
        myModal.hide();
        location.reload();
      }
    })
  }
});