'use strict'

function renderGallery() {
    let elGallery = document.querySelector('.gallery')
    let galleryStr = gImgs.map(img => `<img onclick="onImgSelect(${img.id})" src="${img.url}" alt=""></img>`)
    console.log(galleryStr);
    elGallery.innerHTML = galleryStr.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()    
}

