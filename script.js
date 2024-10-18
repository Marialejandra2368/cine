function pelicularecomendada(genero) {
    const edad = document.getElementById('edad').value;
    let pelicularec = '';

    switch (genero) {
        case 'comedia':
            if (edad < 13) {
                pelicularec = 'Te recomendamos "Back to the Future" (ATP)';
            } else if (edad < 16) {
                pelicularec = 'Te recomendamos "The Truman Show" (+13)';
            } else {
                pelicularec = 'Te recomendamos "The Wolf of Wall Street" (+16)';
            }
            break;

        case 'crimen':
            if (edad < 13) {
                pelicularec  = 'No hay películas recomendadas para tu edad.';
            } else if (edad < 16) {
                pelicularec = 'Te recomendamos "El secreto de sus ojos" (+13)';
            } else {
                pelicularec = 'Te recomendamos "The Godfather" (+16)';
            }
            break;

        case 'drama':
            if (edad < 13) {
                pelicularec  = 'Te recomendamos "Casablanca" (ATP)';
            } else if (edad < 16) {
                pelicularec  = 'Te recomendamos "The Shawshank Redemption" (+13)';
            } else {
                pelicularec = 'Te recomendamos "Taxi Driver" (+16)';
            }
            break;

        case 'musical':
            if (edad < 13) {
                pelicularec = 'Te recomendamos "La La Land" (ATP)';
            } else if (edad < 16) {
                pelicularec  = 'Te recomendamos "Les Miserables" (+13)';
            } else {
                pelicularec = 'Te recomendamos :"The Rocky Horror Picture Show" (+16)';
            }
            break;

        default:
            pelicularec = 'Selecciona un género.';
    }

    document.getElementById('recomendacion').innerText = pelicularec ;
}