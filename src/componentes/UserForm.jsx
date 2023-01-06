import React, { useState } from "react";
import "./style.css"
import DatosUsuario from "./DatosUsuario";

const UserForm= (props) => {
    const [state, setState]= useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''

    })
    const changeUser = (e) => {
        console.log(e.value);
        setState({
            ...state,
            [e.name]:e.value
    })
}
    const createUser= (e) => {
        e.preventDefault();
    };
    return(
        <div>
            <form className="formulario" onSubmit={createUser}>
                <div className="nombre">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" value={state.firstName} onChange={(e) => changeUser(e.target)}/>
                </div>
                <div className="apellido">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" value={state.lastName} onChange={(e) => changeUser(e.target)}/>
                </div>
                <div className="correo">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={state.email} onChange={(e) => changeUser(e.target)}/>
                </div>
                <div className="contraseña">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={state.password} onChange={(e) => changeUser(e.target)}/>
                </div>
                <div className="confCont">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={(e) => changeUser(e.target)}/>
                </div>
            </form>
            <DatosUsuario datos={state}/>
        </div> 
    )
}
export default UserForm;