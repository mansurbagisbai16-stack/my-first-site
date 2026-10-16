const cityData = {

    astana: {
        title: "Астана",
        category: "СТОЛИЦА КАЗАХСТАНА",
        image: "images/astana.jpeg",
        description:
            "Астана — столица Казахстана и один из самых современных городов Центральной Азии. Город расположен на реке Ишим и известен своей необычной современной архитектурой."
    },

    almaty: {
        title: "Алматы",
        category: "ЮЖНАЯ СТОЛИЦА",
        image: "images/almaty.jpeg",
        description:
            "Алматы — крупнейший город Казахстана. Он расположен у подножия Заилийского Алатау и является важным культурным, экономическим и образовательным центром страны."
    },

    aktau: {
        title: "Актау",
        category: "КАСПИЙСКОЕ МОРЕ",
        image: "images/aktau.jpeg",
        description:
            "Актау — город на берегу Каспийского моря. Он известен морскими пейзажами, необычной природой Мангистау и красивыми видами побережья."
    },

    shymkent: {
        title: "Шымкент",
        category: "ЮЖНЫЙ КАЗАХСТАН",
        image: "images/shymkent.jpeg",
        description:
            "Шымкент — один из крупнейших городов Казахстана. Это тёплый и зелёный город с богатой историей, культурой и традициями."
    },

    taraz: {
        title: "Тараз",
        category: "ДРЕВНИЙ ГОРОД",
        image: "images/taraz.jpeg",
        description:
            "Тараз — один из древнейших городов Казахстана. Город имеет богатое историческое наследие и связан с Великим Шёлковым путём."
    },

    turkistan: {
        title: "Туркестан",
        category: "ИСТОРИЧЕСКИЙ ЦЕНТР",
        image: "images/turkistan.jpeg",
        description:
            "Туркестан — один из главных исторических и духовных центров Казахстана. Город известен своим культурным наследием и древними памятниками."
    }

};


/* Открыть информацию о городе */

function showInfo(city) {

    const data = cityData[city];

    if (!data) {
        return;
    }

    document.getElementById("modalTitle").textContent = data.title;

    document.getElementById("modalCategory").textContent = data.category;

    document.getElementById("modalDescription").textContent =
        data.description;

    document.getElementById("modalImage").style.backgroundImage =
        `url("${data.image}")`;

    document.getElementById("infoModal").classList.add("active");

    document.body.style.overflow = "hidden";
}


/* Закрыть окно */

function closeInfo() {

    document.getElementById("infoModal").classList.remove("active");

    document.body.style.overflow = "auto";
}


/* Закрытие при клике по фону */

document.getElementById("infoModal").addEventListener("click", function(event) {

    if (event.target === this) {

        closeInfo();

    }

});


/* Закрытие клавишей Escape */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeInfo();

    }

});