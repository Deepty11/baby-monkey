const CountdownSection = ({timeLeft}) => {
    return <div className="flex flex-1 gap-2.5 mb-3.5 justify-center">
        <div className="bg-gradient-to-bl from-purple-600 to-purple-400 rounded-md flex flex-col p-1">
            <span>{timeLeft.diffInDays}</span>
            <span>Days</span>
        </div>

        <div className="bg-gradient-to-bl from-green-600 to-green-400 rounded-md flex flex-col p-1">
            <span>{timeLeft.diffInHours % 24}</span>
            <span>Hours</span>
        </div>

        <div className="bg-gradient-to-bl from-orange-600 to-orange-400 rounded-md flex flex-col p-1">
            <span>{timeLeft.diffInMinutes % 60}</span>
            <span>Minutes</span>
        </div>

        <div className="bg-gradient-to-bl from-yellow-600 to-yellow-400 rounded-md flex flex-col p-1">
            <span>{timeLeft.diffInSeconds % 60}</span>
            <span>Seconds</span>
        </div>
    </div>
}

export default CountdownSection