import { useLocation } from "react-router-dom"
import style from "./index.module.css"

export default function AdminNavbar() {
    const loc = useLocation()

    return(
        <div className={style.container}>
            <div>
                <h4>
                    ZONA
                </h4>
                <h4>
                    English
                </h4>
            </div>
            <div>
                {loc.pathname.trim().replace("/admin/", "")}
            </div>
        </div>
    )
}