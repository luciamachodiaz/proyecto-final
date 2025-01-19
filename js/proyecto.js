
// Slider

//Constantes
const SliderImg = document.querySelectorAll (`.Slider-img`)
console.log (SliderImg)

const SliderButton = document.querySelectorAll (`.Slider-button`)
console.log (SliderButton)

const Alante = document.querySelector (`.Slider-arrow--alante`)
console.log (Alante)

const Atras = document.querySelector (`.Slider-arrow--atras`)
console.log (Atras)


//Variables
let foto = 0


//Funciones
//Funcion mostrarImagen
    // Todas las Img se le remove la classList isVisible
    // Img (foto) se le add la classlist isVisible

const mostrarImagen = () =>{
    SliderImg.forEach (( _ , i)=>{
        SliderImg[i].classList.remove (`isVisible`)
    })

    SliderImg[foto].classList.add (`isVisible`)

    SliderButton.forEach (( _ , i) =>{
        SliderButton[i].classList.remove (`isActive`)
    })

    SliderButton[foto].classList.add (`isActive`)
}

const alanteHandler = ()=>{
    foto++

    if (foto >= 4){
        foto = 0
    }
    mostrarImagen()
}

const atrasHandler = ()=>{
    if (foto <= 0){
        foto = 4
    }

    foto--
    
    mostrarImagen()
}

const sliderPointsHandler = ( _ , i)=>{
    SliderButton[i].addEventListener (`click`, ()=>{
        foto = i
        mostrarImagen ()
    })
}

const windowHandler = ( e )=>{
    console.log (e.key)

    if (e.key === `ArrowAlante`){
        alanteHandler ()
    }

    if (e.key === `ArrowAtras`){
        atrasHandler ()
    }

}

//Listener
// Cuando hago click en .Next
    //Foto++
    //mostrarImagen()

Alante.addEventListener (`click`, alanteHandler)
   
// Cuando hago click en .Prev
    //Foto--
    //mostrarImagen()

Atras.addEventListener (`click`, atrasHandler)

// Cuando hago click en todos los .Slider-point
    //Foto es posicion (i)
    //mostrarImagen()

SliderButton.forEach (sliderPointsHandler)


window.addEventListener (`keydown`, windowHandler)



//Cuando MOUSEMOVE el raton en window
// .Tooltip le style transform: translate x y translate y


const tooltip = document.querySelector (`.Tooltip`)
console.log (tooltip)

window.addEventListener (`mousemove` , (e)=>{
    const { clientX , clientY } = e
    
        console.log (window)
        tooltip.style.transform = `translateX(${clientX}px) translateY(${clientY}px)`
        
    })

//Cuando hago mouseover en .Funcion-li
    //.Tooltip le add la class isVisible
    //Todas las .Tooltip-img se le remove isVisible
    //.Tooltip-img [i] le add isVisible

const funcion = document.querySelectorAll (`.Funcion-li`)
const tooltipImg = document.querySelectorAll (`.Tooltip-img`)

funcion.forEach (( _ , i )=>{
    funcion[i].addEventListener(`mouseover` , () =>{
        tooltip.classList.add(`isVisible`)

        tooltipImg.forEach ( ( _ , i) =>{
            tooltipImg[i].classList.remove (`isVisible`)
        })

        tooltipImg[i].classList.add(`isVisible`)
    })

    funcion[i].addEventListener(`mouseout` , () =>{
        tooltip.classList.remove(`isVisible`)
    })
})


