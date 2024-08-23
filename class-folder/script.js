
const numeroInput = document.getElementById("inputnumtarjeta")
const numeroTarjeta = document.getElementById("numerotarjeta")
function setNumeroTarjeta(event) {
    let numberText = numeroInput.value

    if (numeroInput.value == "") {
        numeroTarjeta.textContent = "#### #### #### ####"
        return;
    }

    const result = String(numberText).replace(/([0-9]{4})/g, '$1')

    numeroTarjeta.textContent = result
}
numeroInput.addEventListener("keyup", setNumeroTarjeta)