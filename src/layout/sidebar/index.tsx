import { useLocation, useNavigate } from "react-router-dom";
import style from "./index.module.css";
import useAuth from "../../hooks/useAuth";

const routes = [
    {
        path: "/teach",
        label: "Teach"
    },
    {
        path : "/freeclass",
        label :"Free Class"
    },
    {
        path : "/konsultasi",
        label :"Konsultasi"
    },
    {
        path : "/paket",
        label :"Paket"
    },
]

export default function AdminSidebar() {
    const nav = useNavigate()
    const loc = useLocation()
    const auth = useAuth()
    return (
        <div className={style.container}>
            <h2>Admin</h2>
            <div>
                {
                    routes.map(el => <div className={"/admin"+el.path == loc.pathname ? style.selected : ""} onClick={() => {
                        nav("/admin"+el.path)
                    }}>
                        {el.label}
                    </div>)
                }
                <div onClick={() => {
                    auth.logout()
                }}>
                    Log Out
                </div>


            </div>
        </div>
    )
}