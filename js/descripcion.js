
// DESCRIPCION

// cuando hacemos click en .Historia-flecha
    // Quitamos la clase isActive de todos los .Historia-bloque
    // Vamos a añadir la clase isActive al bloque con la posición de .Historia-ul

    const historiaBloque = document.querySelectorAll (`.Historia-bloque`)
    const historiaFlecha = document.querySelectorAll (`.Historia-flecha`)
    const historiaUl = document.querySelectorAll (`.Historia-ul`)
    
    console.log (historiaBloque)
    console.log (historiaUl)
    console.log (historiaFlecha)
    
    historiaFlecha.forEach (( _ , i )=>{
        historiaFlecha[i].addEventListener(`click` , ()=>{
            
            historiaBloque.forEach (( _ , i) =>{
                historiaBloque[i].classList.remove(`isActive`)
            })
    
            
            historiaBloque[i].classList.add(`isActive`)
        })
    
    })
    
    
    // Cuando hago click en .Historia-cruz
        // .Historia-ul le style es height 0
    
        const historiaCruz = document.querySelectorAll (`.Historia-cruz`)
        console.log (historiaCruz)
    
        historiaCruz.forEach (( _ , i )=>{
            historiaCruz[i].addEventListener(`click` , ()=>{
                
                historiaBloque.forEach (( _ , i) =>{
                    historiaBloque[i].classList.remove(`isActive`)
                })
        
                historiaBloque[i].classList.remove(`isActive`)
            })
        
        })
    