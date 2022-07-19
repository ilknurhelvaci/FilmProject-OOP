class Storage{
    constructor(){
        const newFilm = new Film();
    }

   addFilmToStorage(newFilm){
     let films = this.getFilmsFromStorage();
     films.push(newFilm);

     /* Bu defa storage da ki arrayimiz objelerden oluşacak
     [
        {title : "Yüzüklerin Efendisi" , director : "Peter Jackson", url : "3232265"},
        {title : "Yüzüklerin Efendisi" , director : "Peter Jackson", url : "3232265"},
     ]

     */
    localStorage.setItem("films",JSON.stringify(films));
   }
   getFilmsFromStorage(){
    let films;

     if(localStorage.getItem(films) === null){
          films = [];
     }
     else{
        films = JSON.parse(localStorage.getItem("films"));
     }
     return films;

   }
   deleteFilmFromStorage(filmTitle){
      let films = this.getFilmsFromStorage();
      // Arrayden silmek için splice methodunu kullanıyoruz 
      films.forEach(function(film,index){
       if(film.title === filmTitle){
           films.splice(index,1);
       }

   });
   localStorage.setItem("films", JSON.stringify(films));


   }
   clearAllFilmsFromStorage(){
      
      LocalStorage.removeItem("films");
   }


}


