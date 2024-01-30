const DateTimeComponent = () => {
    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    console.log(currentHour)

    return (
        <div>
            {(currentHour >= 6 && currentHour) <= 12 && <p>Good Morning!</p>}
            {(currentHour >= 12 && currentHour) <= 18 && <p>Good Afternoon!</p>}
            {(currentHour >= 18 || currentHour) <= 6 && <p>Good Evening!</p>}
        </div>
    )
}

export default DateTimeComponent