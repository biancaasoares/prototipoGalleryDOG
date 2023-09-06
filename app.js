'use script'

async function pegarImagens(){
  const url = 'https://dog.ceo/api/breed/pug/images'

  const responce = await fetch(url)
  const imagens =  await responce.json()
  return imagens.message
}

function criarImg (imagem){
    const galeria = document.getElementById ('galeria')

    const tagImg = document.createElement ('img')
    tagImg.src = imagem
    galeria.appendChild(tagImg)


}

 async function carregarGaleria(){
    const imagens =  await pegarImagens()
    imagens.forEach(criarImg)
}

carregarGaleria()