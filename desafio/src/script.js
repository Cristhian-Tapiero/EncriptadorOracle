const encriptar = (texto) =>{
    let resultado = texto
    resultado = resultado.replace("e", "enter")
    resultado = resultado.replace("i", "imes")
    resultado = resultado.replace("a", "ai")
    resultado = resultado.replace("o", "ober")
    resultado = resultado.replace("u","ufat")
    return resultado
}
const desencriptar = (texto) =>{
    let resultado = texto
    resultado = resultado.replace("enter", "e")
    resultado = resultado.replace("imes", "i")
    resultado = resultado.replace("ai", "a")
    resultado = resultado.replace("ober", "o")
    resultado = resultado.replace("ufat", "u")
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