import { useEffect, useState } from "react"
import './App.css'

export default function App() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    function displayTime() {
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        return `${hours} : ${minutes} : ${seconds}`
    }
    return (
        <>
            <h1>{displayTime()}</h1>
        </>
    )
}