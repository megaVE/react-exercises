import { useState } from "react"

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const MultiStepForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [step, setStep] = useState(0)
    const [error, setError] = useState(null)

    const toNextStep = (e) => {
      e.preventDefault()

      setStep(state => state + 1)
    }

    const toPreviousStep = (e) => {
      e.preventDefault()

      setStep(state => state - 1)
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

    const handleSubmit = (e) => {
      e.preventDefault()

      setError(null)

      const user = { name, email, password }
      
      if(checkError(user)) {
        return 
      }


      setStep(3)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
              {step === 0 && (
                <>
                  <label htmlFor="name">Name: </label>
                  <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="User name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
                </>
              )}
              {step === 1 && (
                <>
                  <label htmlFor="email">E-mail: </label>
                  <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="User email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </>
              )}
              {step === 2 && (
                <>
                  <label htmlFor="password">Password: </label>
                  <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && (
                    <ul>
                      {error.name && <li>{error.name}</li>}
                      {error.email && <li>{error.email}</li>}
                      {error.password && <li>{error.password}</li>}
                    </ul>
                  )}
                </>
              )}
              {step === 3 && <p>You have been successfully registered!</p>}
            </div>
            <div>
              {step > 0 && step < 3 && <button onClick={toPreviousStep}>Previous</button>}
              {step < 2 && <button onClick={toNextStep}>Next</button>}
              {step === 2 && <input type="submit" value="Register" />}
            </div>
        </form>
    )
}

export default MultiStepForm