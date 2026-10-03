// Открытие меню на телефоне

function toggleMenu() {
    const nav = document.querySelector("nav");

    nav.classList.toggle("active");
}


// Кнопки "Подробнее"

function showMessage(service) {

    alert(
        "Вы выбрали услугу: " + service
    );

}


// Кнопка контактов

function contactMessage() {

    alert(
        "Спасибо за интерес! Здесь можно добавить Telegram, Instagram или Email."
    );

}


// Закрываем меню после перехода по ссылке

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector("nav")
            .classList.remove("active");

    });

});