/* 13th Exercise */

import "./FormMode.css"

import { useState } from "react"

const RegisterForm = () => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleForm = (e) => {
        e.preventDefault()
        console.log("Name: ", name)
        console.log("Email: ", email)
        console.log("Password: ", password)
    }

    return (<form onSubmit={handleForm}>
        <div className="form-input">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-input">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-input">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="Confirm"/>
    </form>)
}

export default RegisterForm