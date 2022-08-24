    const cardsItems = document.querySelectorAll('.card__item')
    const cardsImg = document.querySelectorAll('.card__item img')
    const cardsTitle = document.querySelectorAll('.card__item h2')
    const cardsDescription = document.querySelectorAll('.card__item p')
    const cardsBtns = document.querySelectorAll('.btn')
    const attribution = document.querySelector('.attribution')


    const startAnimation = (entries, observer)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible')
            }
        });
    }

    const observer = new IntersectionObserver(startAnimation, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    })
    
    cardsItems.forEach(cardItem => {
        observer.observe(cardItem)
    });
    cardsImg.forEach(cardImg => {
        observer.observe(cardImg)
    });
    cardsTitle.forEach(cardTitle => {
        observer.observe(cardTitle)
    });
    cardsDescription.forEach(cardDescrition => {
        observer.observe(cardDescrition)
    });
    cardsBtns.forEach(cardBtn => {
        observer.observe(cardBtn)
    });
    observer.observe(attribution)