const NestedComponent = ({ list }) => {
    return (
        <ul>
            {list.map((subList, sublistIndex) => (
                <li key={sublistIndex}>
                    <ul>
                        {subList.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </li>
            ))}        
        </ul>
    )
}

export default NestedComponent