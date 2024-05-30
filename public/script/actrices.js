const url_actrices = "./public/datos/actrices.json"
let actrices; 
const getActrices =  async ()=>{

    const response = await fetch(url_actrices)
    const data = await response.json()

    return data

}

async function htmlArmado(){ 
    actrices = await getActrices()
    console.log("actrices", actrices)
    const wraper = document.querySelector(".wrapper")

    actrices.forEach((actriz)=>{
        const divs = document.createElement("div")
        divs.classList.add("item-image")
        
        divs.innerHTML = `
        <a onclick='popUpActriz(${actriz.id})'><img src=${actriz.image} alt="foto de Andrea del foto"></a><h6 class="text-white text-center">${actriz.name}</h6>
        `
    
        wraper.appendChild(divs)


    })
    
}

htmlArmado()

function popUpActriz(id){
    console.log("APRETA BOTON")
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

