// Pobranie referencji do przycisku za pomocą jego id
const myButton = document.getElementById('myButton');

// Dodanie nasłuchiwania na zdarzenie "click"
myButton.addEventListener('click', function() {
    // Kod do wykonania po kliknięciu przycisku
    alert('Przycisk został kliknięty!');
    fetch("http://localhost:8080/")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Wystąpił błąd:', error));
});
