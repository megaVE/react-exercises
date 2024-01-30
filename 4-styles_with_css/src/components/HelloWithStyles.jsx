const HelloWithStyles = () => {
    const customStyles = {
        color: "#fff",
        backgroundColor: "#000",
        fontSize: "20px",
    }

    return (
        <p style={customStyles}>Hello, world!</p>
    )
}

export default HelloWithStyles