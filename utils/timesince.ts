export function timeSince(date: string) {

    const now = new Date();
    const diffInMs = now.getTime() - new Date(date).getTime()

    const diffInSec = Math.floor(diffInMs / 1000)
    const diffInMin = Math.floor(diffInSec / 60)
    const diffInHs = Math.floor(diffInMin / 60)
    const diffInDays = Math.floor(diffInHs / 24)

    if (diffInSec < 60) {
        return diffInSec + "s"

    }
    if (diffInMin < 60) {
        return diffInMin + " min"


    }
    if (diffInHs < 24) {
        return diffInHs + " h"

    }
    if (diffInDays === 1) {
        return 'Yesterday'

    }
    return diffInDays + " days"
}