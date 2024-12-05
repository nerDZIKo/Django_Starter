    // Lista kolorów
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow'];

    // Funkcja zmieniająca kolor czcionki
    function changeFontColor() {
        // Wybierz losowy kolor z listy
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // Zastosuj wybrany kolor do elementów tekstowych na stronie
        document.body.style.color = randomColor;
    }

    // Ustaw interwał na 1 sekundę (1000 ms)
    setInterval(changeFontColor, 1000);