import style from "./index.module.css"
import { useNavigate, useLocation } from "react-router-dom"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useCallback, useMemo, useRef, useState } from "react";
const navbarItem: Array<{
    label: string,
    path: string
} | Array<{ label: string, path: string }>> = [

        { label: "Online Class", path: "/onlineclass" },
        {
            label: "ZE Center",
            path: "/zecenter"
        },
        { label: "ZE Land", path: "/zeland" },
        {
            label: "Teach",
            path: "/teach"
        },
        {
            label: "Free 1 Bulan",
            path: "/free"
        },
        {
            label: "About",
            path: "/about"
        },

    ]

function DropDownNav({ items, onChange, selected }: { items: { label: string, path: string }[], onChange: any, selected: string }) {
    const selectedLabel = useMemo(() => {
        const selectedNav = items.filter(el => el.path == selected)
        if (selectedNav.length == 0) return "Zona English"
        return selectedNav[0].label
    }, [selected])
    return (
        <div className={style.dropdown} data-isselect={selectedLabel != "Zona English" ? "true" : "false"}>
            <button aria-label="User menu" aria-haspopup="true">
                {selectedLabel}
                <KeyboardArrowDownIcon />
            </button>
            <div tabIndex={0} role="menu" aria-labelledby="user-menu">
                {
                    items.map(el => <p onClick={() => {
                        console.log("Oke")
                        onChange(el.path)
                    }}>{el.label}</p>)
                }
            </div>
        </div>
    )
}

export default function Navbar() {
    const nav = useNavigate()
    const loc = useLocation()
    const [checked, setChecked] = useState<boolean | null>(null)
    const ref = useRef<HTMLDivElement>(null)


    return (
        <div className={style.box}>
            <div className={style.container}>
                <div className={style.title} onClick={() => {
                    nav("/")
                }}>
                    <p style={{ color: "#01305C" }}>ZONA</p>
                    <p style={{ color: "#FF0000" }}>ENGLISH</p>
                </div>
                <div className={style.hamburger} onClick={() => {
                    setChecked(el => {
                        return el != null ? !el : true
                    })

                    const root = document.getElementsByTagName("html")[0]
                    root.classList.remove("hidden")
                }} data-checked={checked != null ? checked ? "true" : "false" : "null"} >
                    <span></span>
                    <span></span>
                </div>
                <div ref={ref} className={style.item}>
                    {
                        navbarItem.map(el => {
                            if (Array.isArray(el)) {
                                return <DropDownNav items={el} selected={loc.pathname} onChange={(path: string) => {
                                    nav(path)
                                }} />
                            }
                            return <p key={"Nav-" + el.label} onClick={() => {
                                nav(el.path)

                                setTimeout(() => {
                                    setChecked(el => {
                                       
                                        return false
                                    })
    
                                    const root = document.getElementsByTagName("html")[0]
                                    root.classList.remove("hidden")
                                }, 300)
                            }} className={el.path == loc.pathname ? style.selected : ""} >{el.label}</p>
                        })
                    }
                    {/* <button onClick={() => {
                        nav("/login")
                    }}>
                        Admin
                    </button> */}
                </div>
            </div>
        </div>
    )
}