/* IMPORTS */

import { buttonSubmitForm } from "./components.js"
import { cargarForm } from "./functions.js"


/* LEVANTAR APP */
document.addEventListener('DOMContentLoaded', () => {
    buttonSubmitForm.addEventListener('click',cargarForm)
})