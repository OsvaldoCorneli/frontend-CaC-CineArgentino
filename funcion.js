
function navegar(direccion){
    const botonMenu = document.querySelector(".navbar-toggler") 
    switch(direccion){
        case "inicio":
        window.location.href = "#inicio"
        deleteRouteLink()
        if(botonMenu.ariaExpanded){
            botonMenu.click()
        }
        break;
        case "estreno":
            window.location.href = "#estreno"
            deleteRouteLink()
            if(botonMenu.ariaExpanded){
                botonMenu.click()
            }
        break;
        case "actrices":
            window.location.href = "#actrices"
            deleteRouteLink()
            if(botonMenu.ariaExpanded){
                botonMenu.click()
            }
        break;
        case "actores":
            window.location.href = "#actores"
            deleteRouteLink()
            if(botonMenu.ariaExpanded){
                botonMenu.click()
            }
        break;
        case "directores":
            window.location.href = "#directores"
            deleteRouteLink()
            if(botonMenu.ariaExpanded){
                botonMenu.click()
            }
        break;
        case "clasica":
            window.location.href = "#clasica"
            deleteRouteLink()
            if(botonMenu.ariaExpanded){
                botonMenu.click()
            }
        break;

        default:
        break;
    }


}


function deleteRouteLink(){
    
    if (window.location.hash) {
      history.replaceState({}, document.title, window.location.href.split('#')[0]);
  }}