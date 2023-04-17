const textArea = document.getElementById('text-area')
const encryptButton = document.getElementById('encriptar')
const desencryptButton = document.getElementById('desencriptar')
const copyButton = document.getElementById('copy')
const noResult = document.getElementById('no-result-section')
const resultSection = document.getElementById('result-section')
const resultText = document.getElementById('result-text')


const encriptar = (texto) =>{
    let resultado = texto
    resultado = resultado.replace(/e/img, "enter")
    resultado = resultado.replace(/i/img, "imes")
    resultado = resultado.replace(/a/img, "ai")
    resultado = resultado.replace(/o/img, "ober")
    resultado = resultado.replace(/u/img,"ufat")
    return resultado
}

const desencriptar = (texto) =>{
    let resultado = texto
    resultado = resultado.replace(/enter/img, "e")
    resultado = resultado.replace(/imes/img, "i")
    resultado = resultado.replace(/ai/img, "a")
    resultado = resultado.replace(/ober/img, "o")
    resultado = resultado.replace(/ufat/img, "u")
    return resultado
}

const copiar = (texto) =>{
    const range = document.createRange()
    range.selectNode(texto)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()

}

encryptButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(textArea.value != ''){
        noResult.classList.add('invisible')
        resultSection.classList.remove('invisible')
        resultText.innerHTML = `${encriptar(textArea.value)}`
    }else{
        noResult.classList.remove('invisible')
        resultSection.classList.add('invisible')
    }
})

desencryptButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(textArea.value != ''){
        noResult.classList.add("invisible")
        resultSection.classList.remove("invisible")
        resultText.innerHTML = desencriptar(textArea.value)
    }else{
        noResult.classList.remove('invisible')
        resultSection.classList.add('invisible')
    }
})

copyButton.addEventListener('click', (e)=>{
    e.preventDefault();
    copiar(resultText)
})

console.log(encriptar('Cristhian'));