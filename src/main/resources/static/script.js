// Pobranie referencji do przycisku za pomocą jego id
const myButton = document.getElementById('myButton');

// Dodanie nasłuchiwania na zdarzenie "click"
myButton.addEventListener('click', function() {
    // Kod do wykonania po kliknięciu przycisku
    alert('Przycisk został kliknięty!');
});
