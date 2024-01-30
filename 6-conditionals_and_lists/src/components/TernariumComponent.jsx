const TernariumComponent = ({ isFooter }) => {
    return isFooter ? (
        <div>
            <p>Footer - (insert the owner name) &copy; 2024</p>
        </div>
    ) : (
        <div>
            <p>Block component.</p>
        </div>
    )
}

export default TernariumComponent