// let url_actores = "./actores.json"

// const getActores = async ()=>{
//     try {
//         const response = await fetch(url_actores)
//         if(response.status != 200) throw new error("No encontrado")

//         const actores = await response.json()
       
//         console.log(actores)
    
//     } catch (error) {
//         console.error(error)
//     }
// }

// getActores()

// function navegar(direccion){
//     const botonMenu = document.querySelector(".navbar-toggler") 
//     let destino = 0
//     switch(direccion){
//         case "inicio":
//             destino = document.getElementById("inicio").offsetTop; 
//         break;
//         case "estreno":
//             destino = document.getElementById("estreno").offsetTop; 
//         break;
//         case "actrices":
//             destino = document.getElementById("actrices").offsetTop;      
//         break;
//         case "actores":
//             destino = document.getElementById("actores").offsetTop;   
//         break;
//         case "directores":
//             destino = document.getElementById("directores").offsetTop;  
//         break;
//         case "clasica":
//             destino = document.getElementById("clasica").offsetTop;  
//         break;

//         default:
//         break;
//     }

//     window.scrollTo({
//         top: destino,
//         behavior: 'smooth'
//     });

//     if(botonMenu.ariaExpanded){
//         botonMenu.click()
//     }

// }


// function deleteRouteLink(){
    
//     if (window.location.hash) {
//       history.replaceState({}, document.title, window.location.href.split('#')[0]);
//   }}


