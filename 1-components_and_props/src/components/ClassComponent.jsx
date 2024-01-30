import { Component } from "react";

class ClassComponent extends Component {
    render() {
        const { name, age, city } = this.props

        return (
            <p>Hi, {name}! I see you're {age} years old and live in {city}.</p>
        )
    }

}

export default ClassComponent;