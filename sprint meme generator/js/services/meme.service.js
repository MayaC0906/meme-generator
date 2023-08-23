'use strict'

var gImgs = [
  { id: 1, url: '/images/1.jpg', keywords: ['funny', 'politics'] },
  { id: 2, url: '/images/2.jpg', keywords: ['cute', 'dogs'] },
  { id: 3, url: '/images/3.jpg', keywords: ['cute', 'dogs'] },
  { id: 4, url: '/images/4.jpg', keywords: ['cute', 'cat'] },
  { id: 5, url: '/images/5.jpg', keywords: ['angry', 'baby'] },
  { id: 6, url: '/images/6.jpg', keywords: ['funny', 'tv'] },
  { id: 7, url: '/images/7.jpg', keywords: ['funny', 'baby'] },
  { id: 8, url: '/images/8.jpg', keywords: ['funny', 'tv'] },
  { id: 9, url: '/images/9.jpg', keywords: ['funny', 'baby'] },
  { id: 10, url: '/images/10.jpg', keywords: ['funny', 'politics'] },
  { id: 11, url: '/images/11.jpg', keywords: ['angry', 'cat'] },
  { id: 12, url: '/images/12.jpg', keywords: ['cute', 'sport'] },
  { id: 13, url: '/images/13.jpg', keywords: ['funny', 'tv'] },
  { id: 14, url: '/images/14.jpg', keywords: ['angry', 'tv'] },
  { id: 15, url: '/images/15.jpg', keywords: ['funny', 'tv'] },
  { id: 16, url: '/images/16.jpg', keywords: ['funny', 'tv'] },
  { id: 17, url: '/images/17.jpg', keywords: ['angry', 'politics'] },
  { id: 18, url: '/images/18.jpg', keywords: ['funny', 'tv'] }
]

var gMeme = {
  selectedImgId: 2,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'enter your text',
      size: 40,
      color: 'black'
    }
  ]
}

function getMeme() {
  return gMeme
}

function setLineTxt(txt) {
  let currTxt = getMemeTextProp()
  gMeme.lines[gMeme.selectedLineIdx].txt = txt
  console.log(gMeme.lines[0].txt);
}

function setImg(imgId) {
  gMeme.selectedImgId = imgId
}

function getMemeTextProp() {
  let meme = getMeme()
  return meme.lines[meme.selectedLineIdx]
}

function getImgUrlById(id) {
  let img = gImgs.find(img => img.id === id)
  console.log(img);
  return img.url
}

