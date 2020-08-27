let clientSizeWidthBrowser = document.body.offsetWidth

/* SLIDER BLOCK ONE */
let blockOne = document.querySelector('.block__one')
let blockOnePrices = document.querySelector('.block__onePrices')
let blockOnePriceAtRound = document.querySelector('.block__onePriceAtRound')

if (clientSizeWidthBrowser < 768) {
    blockOnePrices.classList.add('swiper-container')
    blockOnePriceAtRound.classList.add('swiper-wrapper')

    var blockOneSlider = new Swiper(".block__one .swiper-container", {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.block__one .arrow__right',
            prevEl: '.block__one .arrow__left',
        }
    });

}
// SLIDE TO SPECIFIC EL WHEN CLICKED ON BLOCK PRICE_AT_ROUND {COLOR}
let priceAtRoundGoldBlockOne = [...document.querySelectorAll('.block__onePriceAtRound .priceAtRound--gold')]
let priceAtRoundGreyBlockOne = [...document.querySelectorAll('.block__onePriceAtRound .priceAtRound--grey')]

priceAtRoundGoldBlockOne.map(el => {
    el.addEventListener('click', () => {
        fullpage_api.moveTo(2, 0)
    })
})
priceAtRoundGreyBlockOne.map(el => {
    el.addEventListener('click', () => {
        fullpage_api.moveTo(3, 0)
    })
})
/* --------END-------- */

/* SLIDER BLOCK FOUR */
if (clientSizeWidthBrowser < 768) {

    var blockOneSlider = new Swiper(".block__four .swiper-container", {
        grabCursor: true,
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.block__four .arrow__right',
            prevEl: '.block__four .arrow__left',
        }
    });

}
/* --------END-------- */

/* SLIDER BLOCK SIX */
let swiperContainer = document.createElement('div')
let sectionBlockSixProgressive = document.querySelector('.block__sixProgressive')
let parentSectionBlockSixProgressive = sectionBlockSixProgressive.parentNode;
let sectionBlockSixReviews = document.querySelector('.block__sixReviews')

function hideSliderReviews() {
    swiperContainer.setAttribute('class', 'swiper-container')
    parentSectionBlockSixProgressive.insertBefore(swiperContainer, sectionBlockSixProgressive)

    swiperContainer.appendChild(sectionBlockSixReviews)

    var blockSix = new Swiper(".block__six .swiper-container", {
        grabCursor: true,
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.block__six .arrow__right',
            prevEl: '.block__six .arrow__left',
        }
    });
}

if (clientSizeWidthBrowser <= 1439) {
    hideSliderReviews()
}
/* --------END-------- */

/* ---HEADING BLOCK SIX--- */
let blockSixReviewsHeading = document.querySelector('.block__sixReviewsHeading')
let pushHeadingToBlockSixReviews = document.querySelector('.block__sixReviews')
let firstChildWhenPushHeading = pushHeadingToBlockSixReviews.firstChild.nextSibling;

if (clientSizeWidthBrowser > 1439) {
    pushHeadingToBlockSixReviews.insertBefore(blockSixReviewsHeading, firstChildWhenPushHeading)
}
/* ---------END---------- */

/* ---POPUP MENU MOBILE--- */
let nav = document.querySelector('.menu__nav')
let navMobile = document.querySelector('.menu__navMobile')
let navMobileStyle = navMobile.style
let navMobileIconClose = document.querySelector('.menu__navMobileIconClose')
let opacity = false;

function showHideNavMobile() {
    if (!opacity) {
        opacity = true
        navMobileStyle.opacity = 1
        navMobileStyle.zIndex = 1
    } else {
        opacity = false
        navMobileStyle.opacity = 0
        navMobileStyle.zIndex = 0
    }
}

function addEventClickForNavMobile(event) {
    event.preventDefault()

    if (clientSizeWidthBrowser <=1440) {
        nav.classList.toggle('menu__navMobileIconClose')
        showHideNavMobile();
    }
}

nav.addEventListener('click', addEventClickForNavMobile, {passive: false})
/* --------END-------- */

/* ---POPUP PRICES--- */
let slides = [ ...document.querySelectorAll('.block') ]
let menu = document.querySelector('.menu')

slides.map(slide => {
    let buttonShowPrice = [ ...slide.querySelectorAll('.showPrice') ]
    let popup = slide.querySelector('.popup')
    let whenAddCloseButton = slide.querySelector('.popup__heading')
    let closeButton = document.createElement('button')

    closeButton.classList.add('popup__close')

    buttonShowPrice.map(button => {
        button.addEventListener('click', () => {
            whenAddCloseButton.appendChild(closeButton)

            popup.style.cssText = "opacity: 1; z-index: 1";
            menu.style.cssText = 'display: none'
        })
    })

    closeButton.addEventListener('click', () => {
        popup.style.cssText = "opacity: 0; z-index: -1";
        menu.style.cssText = ''
    })

})
/* -------END------- */

let myFullpage = new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Главная', 'Скупка золота', 'Скупка серебра', 'Ломбард', 'Продажа', 'Отзывы', 'Контакты']
});

// sniff window size of client
window.addEventListener('resize', () => {
    document.location.reload(true);
})

let popupPricesInputPrice = [...document.querySelectorAll('.popup__pricesInputPrice')];
let popupPricesItem = [...document.querySelectorAll('.popup__pricesItem')];

popupPricesInputPrice.map(selectedPrice => {
    let whereSearch = selectedPrice.closest('.popup')
    let popupPricesItem = [...whereSearch.querySelectorAll('.popup__pricesItem')]
    selectedPrice.onchange = function() {
        popupPricesItem.forEach(price => price.style.display = 'none')
        whereSearch.querySelector('.n' + this.value).style.display = 'table-row-group'
    }
})

/* SLIDE MOBILE MENU */
let menuNavMobile = [...document.querySelectorAll('.menu__navMobile .menu__li')]

menuNavMobile.map(el => {
    el.addEventListener('click', (event) => {

        event.preventDefault()

        let textElMenu = event.target.text.toUpperCase();

        switch (textElMenu) {
            case 'ГЛАВНАЯ':
                window.open("/","_self")
                break;
            case 'СКУПКА ЗОЛОТА':
                fullpage_api.moveTo(2, 0)
                break;
            case 'СКУПКА СЕРЕБРА':
                fullpage_api.moveTo(3, 0)
                break;
            case 'ЛОМБАРД':
                fullpage_api.moveTo(4, 0)
                break;
            case 'ПРОДАЖА':
                fullpage_api.moveTo(5, 0)
                break;
            case 'КОНТАКТЫ':
                fullpage_api.moveTo(7, 0)
                break;
            default:
                document.location.reload(true);
        }

        nav.classList.toggle('menu__navMobileIconClose')

        showHideNavMobile()
    })
}, {passive: false})
/* ------ END ------ */