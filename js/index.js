    const targetDiv = document.querySelector('.main-menu__dropdown');
    const chevron = document.querySelector('.chevron--js');
    const btn = document.querySelector('.dropdown-menu--js');

    btn.onclick = function () {
        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";

            chevron.classList.remove('fa-chevron-up');
            chevron.classList.add('fa-chevron-down');
        } else {
            targetDiv.style.display = "block";

            chevron.classList.remove('fa-chevron-down');
            chevron.classList.add('fa-chevron-up');
        }

        return false;
    };


    const progress = document.querySelector('.progress-bar');
    const progressBtn = document.querySelector('.progress-bar__btn--js');
    let defaultVal = 5;

    progressBtn.addEventListener('click', function(e) {
        e.preventDefault();

        progress.style.width = '25%';
        progress.innerText = '25%';
    });


    document.addEventListener('DOMContentLoaded', () => {
        ItcCustomSelect.create('#city_select', {
            name: 'city',
            options: [
                ['1', 'Москва'],
                ['2', 'Санкт-Петербург'],
                ['3', 'Владивосток'],
                ['4', 'Оренбург']
        ],
        onSelected(select, option) {
                // выбранное значение
                console.log(`Выбранное значение: ${select.value}`);
                // индекс выбранной опции
                console.log(`Индекс выбранной опции: ${select.selectedIndex}`);
                // выбранный текст опции
                const text = option ? option.textContent : '';
                console.log(`Выбранный текст опции: ${text}`);
            },
        });
        document.querySelector('.itc-select').addEventListener('itc.select.change', (e) => {
            const btn = e.target.querySelector('.itc-select__toggle');
            // выбранное значение
            console.log(`Выбранное значение: ${btn.value}`);
            // индекс выбранной опции
            console.log(`Индекс выбранной опции: ${btn.dataset.index}`);
            // выбранный текст опции
            const selected = e.target.querySelector('.itc-select__option_selected');
            const text = selected ? selected.textContent : '';
            console.log(`Выбранный текст опции: ${text}`);
        });
    })



    $('.content__slider--js').slick({
        slidesToShow: 3,
        dots: true,
        arrows: true,
        prevArrow: $('.prevArrow--js'),
        nextArrow: $('.nextArrow--js')
    });

    $('.slide__rating').starRating({
        totalStars: 5,
        readOnly: true,
        starSize: 22,
        starShape: 'rounded',
        emptyColor: '#fff',
        hoverColor: '#FF2D23',
        activeColor: '#FF2D23',
        useGradient: false
    });


    ymaps.ready(init);

    function init () {
        let myMap = new ymaps.Map("map", {
            center: [59.928194, 30.346644],
            controls: [],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        });

        const ballon = `
            <div class="map__ballon">
                <h2>Наш адрес</h2>
                <p>Санкт-Петербург, Владимирский проспект, 23, лит. А, офис 701</p>
                <a href="#">Схема проезда</a>
            </div>
        `;

        // Открываем балун на карте (без привязки к геообъекту).
        myMap.balloon.open([59.928194, 30.346644], { content: ballon }, {
            // Опция: не показываем кнопку закрытия.
            closeButton: false
        });
    }


const backToTopButton = document.querySelector('.backtotop--js');

const goToTop = () => {
        document.body.scrollIntoView({
        behavior: "smooth"
    });
};

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();

    goToTop();
});
