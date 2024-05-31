const botonLogin = document.querySelector("#botonLogin");

botonLogin.addEventListener("click", () => {
    console.log("boton de iniciar sesion");
    LoginBoton()
});


function LoginBoton(){


    const botonModalLogin = document.createElement("button");

    botonModalLogin.setAttribute('type', 'button');
    botonModalLogin.className = 'btn btn-primary';
    botonModalLogin.setAttribute('data-bs-toggle', 'modal');
    botonModalLogin.setAttribute('data-bs-target', '#exampleModal');
    botonModalLogin.textContent = 'Launch demo modal';
    document.body.appendChild(botonModalLogin);
    botonModalLogin.click();
    botonModalLogin.remove();



}

  