import { useState } from "react"

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const ValidationForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        setError({})

        const user = { name, email, password }

        if(checkError(user)) {
            return
        }

        console.log(user)
    }

    const checkError = (user) => {
        let hasError = false

        // Name
        if(user.name.length === 0) {
            setError(state => ({ ...state, name: "The name cannot be blank." }))
            hasError = true
        }

        // Email

        if(!user.email.toLowerCase().match(emailRegex)) {
            setError(state => ({ ...state, email: "Enter a valid email address." }))
            hasError = true
        }

        // Password
        if(user.password.length < 6) {
            setError(state => ({...state, password: "The password must be at least 6 characters long." }))
            hasError = true
        }

        return hasError
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="User name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            {error.name && <p>{error.name}</p>}
            <div>
                <label htmlFor="email">E-mail: </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="User email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {error.email && <p>{error.email}</p>}
            <div>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error.password && <p>{error.password}</p>}
            <input type="submit" value="Register" />
        </form>
    )
}

export default ValidationForm