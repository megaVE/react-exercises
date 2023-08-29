/* 5th Exercise */

import { Component } from "react"

class ClassDataReceiver extends Component{
    render(){
        const{place, age, sunglasses} = this.props

        return(
            <p>You live in {place}, are {age} years old and {sunglasses ? "stylishly " : "not "}wearing sunglasses</p>
        )
    }
}

export default ClassDataReceiver