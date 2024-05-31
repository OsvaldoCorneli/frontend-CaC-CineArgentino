const url_peliculas = "./public/datos/peliculas.json"

let peliculas; 
const getPeliculas =  async ()=>{

    const response = await fetch(url_peliculas)
    const data = await response.json()

    return data

}

async function htmlArmado(){ 
    
    peliculas = await getPeliculas()
    console.log(peliculas)
    const row = document.querySelector(".row")

    peliculas.forEach((pelicula)=>{

        console.log()
        if(pelicula.estreno.split("-")[0] != "2024"){ 
        const divs = document.createElement("div")
        divs.classList.add("col-sm-12", "col-md-6", "col-lg-4", "col-xxl-3", "text-center")
        
        divs.innerHTML = `
        <img src="${pelicula.imagen}"  alt="${pelicula.tittle}">
        `
    
        row.appendChild(divs)
    }
    else{
        console.log(pelicula.estreno)
    }

    })
    
}

htmlArmado()

function popUpActriz(id){
    
    const boton = document.querySelector("#botonModals")
    
            actrices.forEach((element)=>{
            if(element.id == id){
                    document.querySelector("#exampleModalLabel").textContent = element.name
                    document.querySelector(".modal-body").innerText = element.description
                    document.querySelector("#wikiModal").href = element.wikilink
            }
        })
         boton.click()



}
