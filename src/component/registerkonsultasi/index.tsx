import { useForm } from "react-hook-form"
import style from "./index.module.css"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import Swal from "sweetalert2"
import { SwalLoading } from "../../util/Swal"
const ZInput = z.object({
    nama: z.string().min(1),
    no_wa: z.string().min(5).regex(/^[0-9]+$/i),
    email: z.string().min(1).email(),
    referal : z.string()
})

type IInput = z.infer<typeof ZInput>

export default function RegisterKonsultasi() {
    const { register, handleSubmit, formState: { errors } } = useForm<IInput>({
        resolver: zodResolver(ZInput),
        defaultValues : {
            email : "",
            nama : "",
            no_wa : "",
            referal : ""
        }
    })

    async function submitData(data: IInput) {
        console.log(data)
        SwalLoading.fire()
        try {
            const feting = await fetch("/api/konsultasi", {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-Type": "application/json"
                }
            })
            const json = await feting.json()
            if(feting.ok == false) {
                return Swal.fire("Error",json.error, "error")
            }
            return Swal.fire("Success",json.message, "success")
        }catch(err) {
            Swal.fire("Error", "Terdapat masalah", "error")
        }
    }
    return (
        <div className={style.register}>
            <div>
                <div>
                    <h2>Ingin mendapatkan konsultasi?</h2>
                    <div>
                        <div>

                        </div>
                        <h5>Diskon Hingga</h5>
                        <h4>30%</h4>
                    </div>
                </div>
                <div>
                    <h2>Dapatkan Potongan Harga dan juga konsultasi</h2>
                    <form onSubmit={handleSubmit(submitData)}>
                        <input {...register("nama")} type="text" placeholder="Nama" />
                        <input {...register("no_wa")} type="text" placeholder="Nomor Whatsapp" />
                        <input {...register("email")} type="text" placeholder="Email" />
                        <div>
                            <div>
                                <p>
                                    Saya Punya Kode Referal
                                </p>
                                <input type="checkbox" />
                            </div>
                            <div>
                                <input {...register("referal")} type="text" placeholder="Kode Referal" />
                            </div>
                        </div>
                        <button type="submit">Dapatkan Konsultasi</button>
                    </form>
                </div>
            </div>
        </div>
    )
}