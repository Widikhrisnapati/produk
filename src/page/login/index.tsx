import { useNavigate, useSearchParams } from "react-router-dom"
import style from "./index.module.css"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Swal from "sweetalert2"
import { useEffect } from "react"
import { SwalLoading } from "../../util/Swal"

const ZInput = z.object({
    username: z.string().min(1, "Tidak Boleh Kosong").regex(/^\S+$/i, "Tidak boleh ada spasi"),
    password: z.string().min(1, "Tidak Boleh Kosong").regex(/^\S+$/i, "Tidak boleh ada spasi"),
})

type IInput = z.infer<typeof ZInput>

export default function Login() {
    const nav = useNavigate()
    const [search] = useSearchParams()
    const { control, handleSubmit } = useForm<IInput>({
        mode: "onBlur",
        resolver: zodResolver(ZInput),
        defaultValues : {
            username : "",
            password :""
        }
    })

    async function Login(data : IInput) {
        try {
            console.log(data)
            SwalLoading.fire()
            const feting = await fetch("/api/login", {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-Type": "application/json"
                }
            })
            const json = await feting.json()
            if(!feting.ok) {
                Swal.fire("Error", json.error, "error")
                return
            }

            const cb : string = search.get("cb") || "/admin/teach" ; 
            nav(cb)
            Swal.fire("Sukses", json.message, "success")
        }catch(err) {
            console.log(err)
            Swal.fire("Error", "Jaringan Bermasalah", "error")
        }
    }

    async function checkToken() {
        try {
            const feting = await fetch("/api/admin/auth")
            if(feting.ok) {
                return nav("/admin")
            }
        }catch(err) {
           
        }
    }

    useEffect(()=> {
        checkToken()
    }, [])

    return (
        <div className={style.container}>
            <div onClick={() => {
                nav("/")
            }}>
                <p style={{ color: "white" }}>ZONA</p>
                <p style={{ color: "#FF0000" }}>ENGLISH</p>
            </div>
            <div>
                <h3>Login Admin</h3>
                <div>
                    <Controller control={control} name="username" render={({field, fieldState : {error}}) => <div className={error != null ? style.inputerror : ""}>
                        <label htmlFor="username">Username</label>
                        <input {...field} type="text" autoSave="true" id="username" />
                        <p>
                            {error?.message}
                        </p>
                    </div>} />

                    <Controller control={control} name="password" render={({field, fieldState : {error}}) => <div className={error != null ? style.inputerror : ""}>
                        <label htmlFor="password">Password</label>
                        <input  {...field} type="password"  autoSave="true" id="password"  />
                        <p>
                            {error?.message}
                        </p>
                    </div>} />
                    <div>
                        <button onClick={handleSubmit(Login)}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}