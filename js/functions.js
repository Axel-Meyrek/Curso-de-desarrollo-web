export const cargarForm = e => {
    e.preventDefault();
    const $inputNombre = document.querySelector('#inputNombre')
    const $inputCorreo = document.querySelector('#inputCorreo')


    if(!$inputNombre.value || !$inputCorreo.value){
        console
        return 
    }
    // Add one line to the sheet
    fetch("https://sheet.best/api/sheets/ea7d9d89-95f1-4c02-82d3-1a6e4bbbb3fd", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "NOMBRE": $inputNombre.value,
            "CORREO ELECTRONICO": $inputCorreo.value,
        }),
    })

    document.querySelector('#titleForm').textContent = "TU REGISTRO FUE LLENADO CORRECTAMENTE"
    const buttonSubmitForm = document.querySelector('#buttonSubmitForm')
    buttonSubmitForm.remove()
    $inputNombre.remove()
    $inputCorreo.remove()
}