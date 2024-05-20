import { createContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

type IUser = {
    username: string,
    uuid: string
}

type AuthType = {
    user: IUser | null,
    loading: boolean,
    logout: () => void,

}

export const AuthContext = createContext<AuthType>({
    user: null,
    loading: false,
    logout: () => { }
})
export default function Auth({ children }: { children: any }) {
    const [user, setUser] = useState<IUser | null>(null)
    const [loading, setLoading] = useState(false)
    const nav = useNavigate()
    const loc = useLocation()
    async function logout() {
        try {
            const feting = await fetch("/api/admin/logout", {
                method : "DELETE"
            })
            console.log(feting.ok)
            if (feting.ok) {
                setUser(null)
                return nav("/login?"+new URLSearchParams({
                    cb : loc.pathname
                }))
            } 
        }catch(err) {

        }
    }

    async function checkToken() {
        try {
            setLoading(true)
            const feting = await fetch("/api/admin/auth")
            if (!feting.ok) {
                return nav("/login?"+new URLSearchParams({
                    cb : loc.pathname
                }))
            } 
            const json = await feting.json()
            setUser(json)
        } catch (err) {
            return nav("/login?"+new URLSearchParams({
                cb : loc.pathname
            }))
        }
    }
    useEffect(() => {
        checkToken()
    }, [])

    return (
        <AuthContext.Provider value={{
            user, logout,
            loading

        }}>{children}</AuthContext.Provider>
    )
}