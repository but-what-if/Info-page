'use strict'



let wonders = {
    'starting-card': document.querySelector('#starting-card'),
    'the-brooklyn-bridge': document.querySelector('#the-brooklyn-bridge'),
    'tower-bridge': document.querySelector('#tower-bridge'),
    'the-eiffel-tower': document.querySelector('#the-eiffel-tower'),
    'tokyo-skytree': document.querySelector('#tokyo-skytree'),
    'azadi-tower': document.querySelector('#azadi-tower'),
    'the-galata-tower': document.querySelector('#the-galata-tower'),
    'mount-ararat': document.querySelector('#mount-ararat'),
    'mount-kenya': document.querySelector('#mount-kenya'),
    'mount-everest': document.querySelector('#mount-everest'),
    'chimborazo-mount': document.querySelector('#chimborazo-mount'),
    'sabancaya-volcano': document.querySelector('#sabancaya-volcano'),
    'cordillera-de-apaneca': document.querySelector('#cordillera-de-apaneca'),
    'volcano-kilimanjaro': document.querySelector('#volcano-kilimanjaro'),
    'angel-falls': document.querySelector('#angel-falls'),
    'niagara-falls': document.querySelector('#niagara-falls'),
    'the-burj-khalifa': document.querySelector('#the-burj-khalifa'),
    'the-wainwright-building': document.querySelector('#the-wainwright-building')
}



function showCard(e) {
    for(let i = 0; i < Object.keys(wonders).length; i++) {
        if (wonders[Object.keys(wonders)[i]].childNodes[1].classList.contains('show')) {
            wonders[Object.keys(wonders)[i]].childNodes[1].classList.remove('show')
        }
    }
    wonders[e.target.innerText.toLowerCase().split(' ').join('-')].childNodes[1].classList.add('show')
}

