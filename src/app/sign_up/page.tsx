// form para que alguien se registre: nombre, correo, contraseña
// rect con 3 params y un btn
// Campos con almenos 1 caracter
// Correo -> Si sea correo
// Pass -> 1 mayuscula, min 8 letras, 1 caracter especial
// Regex -> Usar libreria

import { useState } from "react";
import AuthForm from "../components/AuthForm";
import { UserContext } from "../utils/userContext";

// Info del usuario -> se guarde en memoria (useState) -> En un objeto y una sola variable
// SI hay un error -> Agregar cuadro rojo debajo indicando el error
// Si es correcto -> Agregar el nombre de la persona en la esquina superior derecha
// Opcional -> Al iniciar sesion agregar el nombre en la navbar (useContext)

const SignUpPage = () => {
    
    return (
            <div className="h-full flex flex-col gap-5 justify-center items-center">
                Hi
                <AuthForm />
            </div>
    )
}

export default SignUpPage;