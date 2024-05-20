import { useEffect, useState } from "react"

export default function useFetch(uri : string) {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function fetching() {
        try {
            const feting = await fetch(uri)
            const json = await feting.json()
            if(!feting.ok) {
                setError(json.error)
                setLoading(false)
                return
            }
            console.log(json)
            setData(json)
        }catch(err) {
            setError("Internet Error")
        }
        setLoading(false)
    }

    useEffect(() => {
        fetching()
    }, [uri])

    return[data, loading, error, fetching]
}