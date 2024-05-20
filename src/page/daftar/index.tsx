import { useRef, useState } from "react";
import style from "./index.module.css"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { constants } from "buffer";
import { SwalLoading } from "../../util/Swal";

const ZTeach = z.object({
    nama: z.string().min(1,"Tidak Boleh Kosong"),
    jenis_kelamin: z.string().min(1,"Tidak Boleh Kosong"),
    tanggal_lahir: z.string(),
    no_hp: z.string().min(1,"Tidak Boleh Kosong"),
    email: z.string().email(),
    alamat: z.string().min(1,"Tidak Boleh Kosong"),
    pendidikan_terakhir: z.string().min(1,"Tidak Boleh Kosong"),
    sosmed: z.string().min(1,"Tidak Boleh Kosong"),


});


type ITeach = z.infer<typeof ZTeach>
export default function DaftarTeacher() {
    const [jenis_kelamin, setJenisKelamin] = useState("pria")
    const ref = useRef<HTMLDivElement>(null)
    const nav = useNavigate()
    const cvRef = useRef<HTMLInputElement>(null)
    const photoRef = useRef<HTMLInputElement>(null)
    const [photo, setPhoto] = useState<File | null>(null)
    const [cv, setCv] = useState<File | null>(null)
    const { control, handleSubmit } = useForm<ITeach>({
        resolver: zodResolver(ZTeach),
        mode: "all",
        defaultValues: {
            email: "",
            jenis_kelamin: "pria",
            nama: "",
            no_hp: "",
            alamat: "",
            pendidikan_terakhir: "",
            sosmed: "",
            tanggal_lahir: new Date().toISOString()
        }
    })

    async function submitData(data: ITeach) {
        try {
            const formData = new FormData()
            if (cv == null || photo == null) return
            SwalLoading.fire()
            formData.append("cv", cv)
            formData.append("photo", photo)

            const keys = Object.keys(data)
            keys.forEach((el) => {
                const key = el as keyof typeof data
                formData.append(key, data[key])
            })



            const feting = await fetch("/api/teach", {
                method: "POST",
                body: formData
            })
            const json = await feting.json()
            if (!feting.ok) {
                Swal.fire("Error", json.error, "error")
                return
            }



            ref.current?.classList.add(style.click)
            Swal.fire("Sukses", "Data Anda Telah Dikirim", "success")
            setTimeout(() => {
                nav("/teach")
            }, 500)

        } catch (err) {
            console.log(err)
        }
    }



    return (
        <div className={style.container}>
            <div>
                <div>

                </div>
                <img src="/daftar11.png" alt="" />
            </div>
            <div>

            </div>
            <div  data-aos="fade-left">

                <p>ZONA English is a place for all teachers to collaborate, to share, and to find solution about educational problems in Indonesia. Be part of us to level up education in Indonesia!!</p>
                <div>
                    <div>
                        <div>
                            <div onDragOver={(ev) => {
                                ev.preventDefault()
                                // console.log(ev.dataTransfer.files)
                            }} onClick={() => {
                                photoRef.current?.click()
                            }} onDrop={(ev) => {
                                ev.preventDefault()
                                if (ev.dataTransfer.files) {
                                    const files = ev.dataTransfer.files
                                    if (files.length == 0) return
                                    const file = files[0]
                                    if (!/image\/jpeg|image\/jpg|image\/png/.test(file.type)) {
                                        return
                                    }
                                    setPhoto(file)
                                }
                            }}>
                                {
                                    photo != null ? <img src={URL.createObjectURL(photo)} /> : <>
                                        <CameraAltIcon fontSize="large" />
                                        <p>Drag & Drop gambar di sini</p>
                                        <p>Hanya Gambar PNG dan JPG yang diterima</p>
                                    </>
                                }
                            </div>
                            <Controller control={control} name="nama" render={({ field, fieldState: { error } }) => <div className={error != null ? style.isError : ""}>
                                <h5>Nama Lengkap</h5>
                                <input {...field} type="text" />
                                <h4>{error?.message || ""}</h4>
                            </div>} />

                            <div>
                                <h5>Jenis Kelamin</h5>
                                <div>
                                    <Controller control={control} name="jenis_kelamin" render={({ field, fieldState: { error } }) => <label>
                                        <input type="radio" {...field} value={"pria"} checked={field.value == "pria"} />
                                        Laki-Laki
                                    </label>} />

                                    <Controller control={control} name="jenis_kelamin" render={({ field, fieldState: { error } }) => <label>
                                        <input type="radio" {...field} value={"perempuan"} checked={field.value == "perempuan"} />
                                        Perempuan
                                    </label>} />
                                </div>
                            </div>
                            <Controller control={control} name="tanggal_lahir" render={({ field, fieldState: { error } }) => <div className={error != null ? style.isError : ""}>
                                <h5>Tanggal Lahir</h5>
                                <input {...field} type="date" />
                                <h4>{error?.message || ""}</h4>
                            </div>} />
                            <Controller control={control} name="no_hp" render={({ field, fieldState: { error } }) => <div className={error != null ? style.isError : ""}>
                                <h5>Nomor HP</h5>
                                <input {...field} type="text" />
                                <h4>{error?.message || ""}</h4>
                            </div>} />
                            <Controller control={control} name="email" render={({ field, fieldState: { error } }) => <div className={error != null ? style.isError : ""}>
                                <h5>Email</h5>
                                <input {...field} type="text" />
                                <h4>{error?.message || ""}</h4>
                            </div>} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Controller control={control} name="alamat" render={({ field, fieldState: { error } }) => <div className={error != null ? style.isError : ""}>
                                <h5>Alamat</h5>
                                <input {...field} type="text" />
                                <h4>{error?.message || ""}</h4>
                            </div>} />
                            <Controller control={control} name="pendidikan_terakhir" render={({ field, fieldState: { error } }) => <div className={error != null ? style.isError : ""}>
                                <h5>Pendidikan Terakhir</h5>
                                <input {...field} type="text" />
                                <h4>{error?.message || ""}</h4>
                            </div>} />
                            
                            <Controller control={control} name="sosmed" render={({ field, fieldState: { error } }) => <div className={error != null ? style.isError : ""}>
                                <h5>Akun Sosial Media</h5>
                                <input {...field} type="text" />
                                <h4>{error?.message || ""}</h4>
                            </div>} />
                            <div>
                                <button onClick={() => {
                                    cvRef.current?.click()
                                }}>Upload cv</button>
                                <input onChange={(ev) => {
                                    if (ev.target.files == null) return
                                    if (ev.target.files?.length == 0) {
                                        return
                                    }
                                    setCv(ev.target.files[0])
                                }} ref={cvRef} style={{
                                    display: "none"
                                }} type="file" accept="application/pdf" name="" id="" />

                                <input onChange={(ev) => {
                                    if (ev.target.files == null) return
                                    if (ev.target.files?.length == 0) {
                                        return
                                    }
                                    setPhoto(ev.target.files[0])
                                }} ref={photoRef} style={{
                                    display: "none"
                                }} type="file" accept="image/jpeg,image/png" name="" id="" />
                                <h6>{cv?.name}</h6>
                            </div>
                            <div>
                                <button onClick={handleSubmit(submitData)} className={style.submit}>Daftar</button>

                            </div>
                        </div>
                    </div>
                    <div ref={ref} tabIndex={1} onClick={handleSubmit(submitData)}>
                        <div></div>
                        <div></div>
                        <div >
                            <h3>To : Zona English</h3>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}