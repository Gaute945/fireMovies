const firebaseApp = firebase.initializeApp({

});

const db = firebaseApp.firestore();

function fetchValuesAndAddMovies() {
	const nameValue = document.getElementById("name").value;
	const ageValue = document.getElementById("age").value;
    const genreValue = document.getElementById("genre").value;
    const directorValue = document.getElementById("director").value;
    const pictureValue = document.getElementById("picture").value;

	db.collection("movies").doc().set({
		title: nameValue,
		year: ageValue,
        genre: genreValue,
        director: directorValue,
        picture: pictureValue,
	});
	updateMovies();
}
updateMovies();

function updateMovies() {
	let messagesText = "";

	db.collection("movies")
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				messagesText += "<div class='movie'>" + "<img src= " + doc.data().picture + ">" + "title: " + doc.data().title + " | year: " + doc.data().year +  " | genre: " + doc.data().genre +  " | director: " + doc.data().director + "</div>";
			});
			document.getElementById("movies").innerHTML = messagesText;
		});
}

function delAll() {
    const moviesRef = db.collection('movies');
  
    moviesRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.delete();
      });
      updateMovies();
      console.log('All documents in the "movies" collection deleted successfully.');
    }).catch((error) => {
      console.error('Error deleting documents:', error);
    }); 
};  
