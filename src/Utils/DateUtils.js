
const targetDate = new Date('2025-11-06 12:00:00 am')

const dateDiffFromCurrentDate = () => {
    const currentDate = new Date()

    const diffInMs = targetDate.getTime() - currentDate.getTime()

    const diffInSeconds = Math.floor(diffInMs/1000)
    const diffInMinutes = Math.floor(diffInMs/(1000 * 60))
    const diffInHours = Math.floor(diffInMs/(1000 * 60 * 60))
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) 

    return { diffInDays, diffInHours, diffInMinutes, diffInSeconds}
}

export default dateDiffFromCurrentDate