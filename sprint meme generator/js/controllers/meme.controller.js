'use strict'

let gElCanvas
let gCtx

function onInIt() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    renderGallery()
    renderMeme()
}


function renderMeme() {
    let meme = getMeme()
    let memeImg = getImgUrlById(meme.selectedImgId)
    renderMemeImg(memeImg)
}


function renderMemeImg(img) {
    let bgcImg = new Image()
    bgcImg.src = img

    bgcImg.onload = () => {
        gElCanvas.height = (bgcImg.naturalHeight / bgcImg.naturalWidth) * gElCanvas.width
        gCtx.drawImage(bgcImg, 0, 0, gElCanvas.width, gElCanvas.height)

        let memeTxtProp = getMemeTextProp()
        renderMemeTxt(memeTxtProp)
    }

}

function onSetLineText(txt) {
    setLineTxt(txt)
    renderMeme()
}

function renderMemeTxt(txtProp) {

    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = `${txtProp.color}`
    gCtx.font = `${txtProp.size}px rubik`
    gCtx.textBaseline = 'middle'

    gCtx.fillText(`${txtProp.txt}`, 45, 50)
    gCtx.strokeText(`${txtProp.txt}`, 45, 50)
}
