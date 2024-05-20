import { useRef, useState } from "react"
import style from "./index.module.css"
import CheckIcon from '@mui/icons-material/Check';
import stylemodal from "./modal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { SwalLoading } from "../../util/Swal";
import paket from "./item";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RegisterKonsultasi from "../registerkonsultasi";
const ZPaket = z.object({
    nama: z.string().min(1),
    jenis_kelamin: z.enum(["pria", "perempuan"]),
    usia: z.string().min(1),
    email: z.string().min(1).email(),
    no_wa: z.string().min(1).regex(/^[0-9]+$/i, "Harus Angka")
})

type IPaket = z.infer<typeof ZPaket>
function PaketModal({ active, close, selected, bulan, lokasi }: {
    lokasi: string, active: boolean, close: any, selected: {
        color: string,
        label: string,
        harga: number[]
    } | null, bulan: number
}) {
    const { control, handleSubmit, reset } = useForm<IPaket>({
        resolver: zodResolver(ZPaket),
        mode: "onBlur",
        defaultValues: {
            email: "",
            jenis_kelamin: "pria",
            usia: "",
            no_wa: "",
            nama: ""
        }

    })


    async function submitData(data: IPaket) {
        console.log(data)
        if (selected == null) return
        SwalLoading.fire()
        try {
            const feting = await fetch("/api/paket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    tipe: selected.label,
                    bulan: bulan == 0 ? 1 : 3,
                    harga: selected.harga[bulan],
                    lokasi: lokasi
                })
            })
            const json = await feting.json()
            if (feting.ok == false) {
                Swal.fire("Error", json.error, "error")
                return
            }
            Swal.fire("Sukses", "Berhasil", "success")
            reset()
            close()
        } catch (err) {
            Swal.fire("Error", "Terdapat Masalah", "error")
        }
    }

    return (
        <div className={`${stylemodal.container}`} data-isactive={active ? "true" : "false"} >
            <div>
                <div>
                    <h2>Daftar English Center</h2>
                    <div>
                        {
                            selected != null && <>
                                <div style={{
                                    color: selected.color
                                }}>

                                    <h4 >Paket</h4>
                                    <h2 >{selected.label}</h2>
                                    <h3>{bulan == 0 ? 1 : 3} Bulan</h3>
                                </div>
                                <h5 style={{
                                    color: selected.color
                                }}>
                                    {Intl.NumberFormat("id-ID", { currency: "IDR", style: "currency" }).format(selected.harga[bulan])}
                                </h5>
                            </>
                        }
                    </div>
                    <div>
                        <Controller name="nama" control={control} render={({ field, fieldState }) => <div className={fieldState.error != null ? stylemodal.fieldError : ""}>
                            <p>Nama</p>
                            <input {...field} type="text" />
                            <h5>
                                {fieldState.error?.message || ""}
                            </h5>
                        </div>} />
                        <Controller name="jenis_kelamin" control={control} render={({ field, fieldState }) => <div className={fieldState.error != null ? stylemodal.fieldError : ""}>
                            <p>Jenis Kelamin</p>
                            <select {...field} >
                                <option value="pria">Pria</option>
                                <option value="perempuan">Perempuan</option>
                            </select>
                            <h5>
                                {fieldState.error?.message || ""}
                            </h5>
                        </div>} />
                        <Controller name="usia" control={control} render={({ field, fieldState }) => <div className={fieldState.error != null ? stylemodal.fieldError : ""}>
                            <p>Usia</p>
                            <input {...field} type="number" />
                            <h5>
                                {fieldState.error?.message || ""}
                            </h5>
                        </div>} />
                        <Controller name="email" control={control} render={({ field, fieldState }) => <div className={fieldState.error != null ? stylemodal.fieldError : ""}>
                            <p>Email</p>
                            <input {...field} type="text" />
                            <h5>
                                {fieldState.error?.message || ""}
                            </h5>
                        </div>} />
                        <Controller name="no_wa" control={control} render={({ field, fieldState }) => <div className={fieldState.error != null ? stylemodal.fieldError : ""}>
                            <p>Nomor Whatsapp</p>
                            <input {...field} type="text" />
                            <h5>
                                {fieldState.error?.message || ""}
                            </h5>
                        </div>} />




                        <div>

                            <button onClick={handleSubmit(submitData)}>Daftar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => {
                close()
            }} >
                <CloseIcon fontSize="large" htmlColor="red" />
            </div>
            <div >
                <p style={{ color: "white" }}>ZONA</p>
                <p style={{ color: "#FF0000" }}>ENGLISH</p>
            </div>
        </div>
    )
}

export default function Paket({ tipe }: { tipe: "zecenter" | "zeland" | "onlineclass" }) {
    const [selectedBulan, setSelectedBulan] = useState(0)
    const [activeModal, setActiveModal] = useState(false)
    const [lokasi, setLokasi] = useState("pilih tempat")
    const [selectedPaket, setSelectedPaket] = useState<{
        color: string,
        label: string,
        harga: number[]
    } | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const pakets = paket[tipe]
    return (
        <>
            <PaketModal bulan={selectedBulan} lokasi={lokasi} selected={selectedPaket} close={() => {
                setActiveModal(false)
                setTimeout(() => {
                    setSelectedPaket(null)
                }, 800)

                const root = document.getElementsByTagName("html")[0]
                root.classList.remove("hidden")

            }} active={activeModal} />
            <div className={style.paket}>
                <h2>Pilihan paket sesuai kebutuhan belajarmu</h2>
                <div>

                    <div>
                        {
                            tipe == "zeland" && <select name="" id="" value={lokasi} onChange={(ev) => {
                                setLokasi(ev.target.value)
                            }}>
                                <option value="Makassar">Makassar</option>
                            </select>
                        }
                    </div>
                    <div>

                        <button className={selectedBulan == 0 ? style.selectedBulan : ""} onClick={() => {
                            setSelectedBulan(0)
                        }}>
                            1 Bulan
                        </button>
                        <button className={selectedBulan == 1 ? style.selectedBulan : ""} onClick={() => {

                            setSelectedBulan(1)
                        }}>
                            3 Bulan
                        </button>
                    </div>
                </div>
                <div >
                    <div ref={ref}>

                        {
                            pakets.map((el, ind) => <div key={el.label + "-paket"}>
                                <div style={{
                                    color: el.color
                                }}>
                                    <div>
                                        <h4>{el.label} </h4>
                                        <p>{selectedBulan == 0 ? "1" : "3"} Bulan</p>
                                    </div>
                                    <h2>{Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR"
                                    }).format(el.harga[selectedBulan])}</h2>
                                    <p>
                                        {
                                            selectedBulan == 0 ? "Per User/bulan" : `${Intl.NumberFormat("id-ID", {
                                                style: "currency",
                                                currency: "IDR"
                                            }).format(Math.floor(el.harga[selectedBulan] / 3))}/ bulan`
                                        }
                                    </p>
                                    <button onClick={() => {
                                        setActiveModal(true)
                                        setSelectedPaket(el)
                                        const root = document.getElementsByTagName("html")[0]
                                        root.classList.add("hidden")
                                    }}>Daftar</button>
                                </div>
                                <div>
                                    {
                                        el.fasilitas.map(el => {
                                            if (typeof el != "string") {
                                                return (
                                                    <div>
                                                        <p><CheckIcon fontSize="small" />{el.label}</p>
                                                        <div>
                                                            {
                                                                el.children.map(el2 => <p>{el2}</p>)
                                                            }
                                                        </div>
                                                    </div>)
                                            }
                                            return <p><CheckIcon fontSize="small" />{el}</p>
                                        }
                                        )
                                    }
                                </div>
                            </div>)
                        }
                    </div>

                    <div onClick={() => {
                        const percentage = (ref.current?.offsetWidth || 0) * 0.2
                        // if (((ref.current?.scrollLeft || 0) + (percentage * -1)) < 0) {
                        //     ref.current?.scrollTo({
                        //         behavior: "smooth",
                        //         left: ref.current.offsetWidth 
                        //     })
                        //     return
                        // }
                        ref.current?.scrollBy({
                            behavior: "smooth",
                            left: percentage * -1
                        })
                    }}>
                        <ArrowBackIosIcon fontSize="large" />
                    </div>
                    <div onClick={() => {
                        const percentage = ref.current?.offsetWidth || 0 * 0.2
                       
                        // if (((ref.current?.scrollLeft || 0) + percentage) > (ref.current?.offsetWidth || 100)) {
                        //     console.log()
                        //     ref.current?.scrollTo({
                        //         behavior: "smooth",
                        //         left: 0
                        //     })
                        //     return
                        // }
                        ref.current?.scrollBy({
                            behavior: "smooth",
                            left: percentage
                        })
                    }} >
                        <ArrowForwardIosIcon fontSize="large" />
                    </div>

                </div>
            </div>
        </>

    )
}