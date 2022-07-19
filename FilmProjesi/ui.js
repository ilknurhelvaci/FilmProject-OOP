class UI{
    


    addFilmToUI(newFilm){
        const fimList = document.getElementById("films"); // Tbodyi seçme
        /*
              <tr>
                    <td><img src="" class="img-fluid img-thumbnail"></td>
                     <td></td>
                    <td></td>
                     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                   </tr> -->


        */
        fimList.innerHTML += `
        <tr>
           <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
           <td>${newFilm.title}</td>
           <td>${newFilm.director}</td>
           <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
       </tr>
        
        `;
        
    }
    clearInputs(elements1,elements2,elements3)
    {
        elements1.value = "";
        elements2.value = "";
        elements3.value = "";

    }
    displayMessages(message,type){
        const cardBody = document.querySelectorAll(".card-body")[0];

        const div = document.createElement("div");

        div.className = `alert alert-${type}`;
        div.textContent = message ;

        cardBody.appendChild(div);

        setTimeout(function(){
            div.remove();

        },2000);

    }
    loadAllFilms(){
        const filmList = document.getElementById("films");

        films.forEach(function(film){
         fimList.innerHTML += `
        <tr>
           <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
           <td>${film.title}</td>
           <td>${film.director}</td>
           <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
       </tr>
        
        `;
        });
    }
    deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();

    }
    clearAllFilmsFromUI(){
        const filmList = document.getElementById("films");
        // filmList.innerHTML = ""; yavaş olan yöntem

        while(filmList.firstElementChild != null){
            filmList.firstElementChild.remove();

        }
    }

}


