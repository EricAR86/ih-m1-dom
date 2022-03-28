// OBJETIVO -> OBTENER TODOS LOS DATOS DEL CAMPO DE TEXTO Y MOSTRARLOS EN UNA ETIQUETA NUEVA, AL MOMENTO DE QUE LE DE CLICK ENVIAR

// 1. SELECCIÓN
const form = document.getElementById("formulario")
const button = document.getElementById("enviar")

// 2. MANIPULACIÓN

// A. EVENTOS
button.addEventListener("click", (event) => {


	// 1. EVITA LA RECARGA DE PÁGINA
	event.preventDefault()

	// 2. OBTENER TODOS LOS DATOS EN VARIABLES
	// -> [selector].[nombre del campo de texto].["value"]
	const name = form.nombre.value
	const email = form.email.value
	const birthDate = form.birthDate.value

	const dessert = form.dessert.checked

	let dessertIsCheckedMessage

	if(dessert){ 
		dessertIsCheckedMessage = "El usuario SÍ seleccionó el helado"
	 } else {
		 dessertIsCheckedMessage = "El usuario NO seleccionó el helado"
	 }

	 const selectedIndex = form.decisions.selectedIndex
	 const selectedOption = form.decisions.options[selectedIndex]
	 const selectedOptionText = selectedOption.text

})


// Seleccion

const formTwo = document.getElementById("formulario2");
const bottomTwo = document.getElementById("enviar2");
const results = document.getElementById("resultados")

// Manipilacion y evento

bottomTwo.addEventListener("click", (event) => {
    event.preventDefault()


    const nameTwo = formTwo.nombre2.value
    const emailTwo = formTwo.correo2.value
	const nacimiento = formTwo.nacimiento.value

    const suscribirse = formTwo.suscribirse.checked

    let suscribirseChecked

    if(suscribirse){
        suscribirseChecked = "El usuario desea suscribirse"
    } else {
        suscribirseChecked = "El usuario no desea suscribirse"
        }

        const indiceSeleccionado = formTwo.ciudades.selectedIndex
        const opcionSeleccionada = formTwo.ciudades.options[indiceSeleccionado]
        const ciudadSeleccionada = opcionSeleccionada.text

    console.log(`Nombre: ${nameTwo}`)
    console.log(`Correo: ${emailTwo}`)
    console.log(`Fecha Nacimiento: ${nacimiento}`)
    console.log(suscribirseChecked)
    console.log(`Ciudad Seleccionada: ${ciudadSeleccionada}`)
    
   
    return results.innerHTML = `
    <h1>Datos de envío</h1>
    <p>El nombre es: ${nameTwo}</p>
    <p>El email es: ${emailTwo}</p>
    <p>Fecha Nacimiento: ${nacimiento}</p>
    <p>${suscribirseChecked}</p>
    <p>Ciudad Seleccionada: ${ciudadSeleccionada}</p>
    `
}) 