const SwitchComponent = ({ verb }) => {
    switch(verb) {
        case "GET":
            return (
                <p>Loading data from server...</p>
            )
        
        case "POST":
            return (
                <p>Uploading data to server...</p>
            )
        
        case "DELETE":
            return (
                <p>Deleting data...</p>
            )

        default:
            return (
                <p>Error 404: Component not found</p>
            )
    }
}

export default SwitchComponent