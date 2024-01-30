import MultiPropsUsage from "./MultiPropsUsage"

const ComposingComponent = ({ members }) => {
    return (
        <div>
            {members && members.map(member => (
                <MultiPropsUsage
                    key={JSON.stringify(member)}
                    name={member.name}
                    age={member.age}
                    city={member.city}
                />
            ))}
        </div>
    )
}

export default ComposingComponent