import { useState, useEffect } from "react"


export const useTimer = (gameStarted) => {
    const [now, setNow] = useState<Date | null>(null)

    return {
        minutes,
        seconds
    }
}