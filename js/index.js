

// Propiedad de cursor que se añade a todas las páginas

// Se ha creado una etiqueta cursor web para crear la caja y se declara la variabla a para que la caja sufra cambios cuando está encima de un enlace directo

// Constantes
const cursor = document.querySelector (`.Cursor-web`)
console.log (cursor)

const enlace = document.querySelector (`a`)
console.log (enlace)

// Variables
let distanciaX = 0
let distanciaY = 0
let escala     = 1

// Aplicamos propiedades al método ventana porque el ratón depende de ella
    window.addEventListener (`mousemove` , (e)=>{
    let { clientX , clientY } = e
        
        distanciaX = clientX
        distanciaY = clientY

        console.log (distanciaX)
        console.log (distanciaY)

        // El cursor cambia el estilo según la ventana
        cursor.style.transform = `translateX(${distanciaX}px) translateY(${distanciaY}px) scale(${escala})`
        
    })

    enlace.addEventListener(`mouseover` ,(e)=>{
        console.log (enlace)
        escala = 1.5
    })

    enlace.addEventListener(`mouseout` , ()=>{
        console.log(enlace)
        escala = 1
    })
