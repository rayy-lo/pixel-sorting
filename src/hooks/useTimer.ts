import { useState, useEffect } from "react"

export const useTimer = (startTime: Date | null) => {
    const [endTime, setEndTime] = useState<Date | null>(null);
    let minutes = '00'
    let seconds = '00'

    if(endTime && startTime) {
        seconds = `${(Math.floor(Math.abs(endTime.getTime() - startTime.getTime()) / (1000) % 60))}`.padStart(2, '0')
        minutes = `${(Math.floor(Math.abs(endTime.getTime() - startTime.getTime()) / (1000 * 60) % 60))}`.padStart(2, '0')
    }


    useEffect(() => {
        if(startTime){
            const id = setInterval(() => {
                setEndTime(new Date());
            }, 1000)
        }    
    }, [startTime])

    return {
        minutes,
        seconds
    }
}