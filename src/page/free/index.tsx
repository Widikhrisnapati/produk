import { useForm } from "react-hook-form"
import style from "./index.module.css"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Swal from "sweetalert2"
import { SwalLoading } from "../../util/Swal"
import { Reviews } from "@mui/icons-material"
import ReviewsSection from "../../component/Reviews"


const ZInput = z.object({
    nama: z.string().min(1, "Tidak Boleh Kosong").max(30, "Tidak Boleh Lebih dari 30 karakter"),
    usia: z.number().min(1).int(),
    email: z.string().email(),
    no_hp: z.string().min(5, "Harus Lebih dari 5 karakter").regex(/^\d+$/i, "Harus Angka"),
    domisil: z.string().min(1),
    kelas: z.string().min(1),
    alasan: z.string().min(1)
})
type IInput = z.infer<typeof ZInput>
export default function FreePage() {

    const { register, handleSubmit, formState: { errors } } = useForm<IInput>({
        resolver: zodResolver(ZInput),
        mode: "all"
    })

    async function daftarData(data: IInput) {
        console.log(data)
        SwalLoading.fire()
        try {
            const feting = await fetch("/api/freeclass",
            {
                method : "POST",
                headers : {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(data)
            })
            const json = await feting.json()
            if(feting.ok == false) {
                Swal.fire("Error", json.error, "error")
                return
            }
            Swal.fire("Sukses", json.message, "success")
        }catch(err) {
            console.log(err)
            Swal.fire("error", "Jaringan Bermasalah", "error")
        }
    }

    return (
        <div>
            <div className={style.firstsect}>
                <img src="/free11.png" alt="" />
                <div>
                    <div>
                        <div>
                            <h3>Undangan Belajar Gratis!</h3>
                            <h4>1 Bulan</h4>
                            <h5>#HanyaZONAENGLISHyangbisa</h5>
                        </div>
                        <div>
                            <p>Semua berhak bisa berbahasa Inggris</p>
                            <p>
                                Rasakan pengalaman belajar di tempat yang berkualitas. tanpan harus mengeluarkan biaya 1 rupiahpun
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <div>
                            <h5>Yuk Daftar Sekarang!</h5>
                            <form onSubmit={handleSubmit(daftarData)}>
                                <div>
                                    <p>Nama</p>
                                    <input type="text" {...register("nama")} className={!!errors.nama ? style.inputerror : ""} />
                                    <p className={!!errors.nama ? style.inputerror : ""}>{errors.nama != null && errors.nama.message}</p>
                                </div>
                                <div>
                                    <p>Umur</p>
                                    <input type="number" {...register("usia", {
                                        valueAsNumber: true
                                    })} className={!!errors.usia ? style.inputerror : ""} />
                                    <p className={!!errors.usia ? style.inputerror : ""}>{errors.usia != null && errors.usia.message}</p>

                                </div>
                                <div>
                                    <p>Email</p>
                                    <input type="text" {...register("email")} className={!!errors.email ? style.inputerror : ""} />
                                    <p className={!!errors.email ? style.inputerror : ""}>{errors.email != null && errors.email.message}</p>

                                </div>
                                <div>
                                    <p>Nomor Whatsapp</p>
                                    <input type="text" {...register("no_hp")} className={!!errors.no_hp ? style.inputerror : ""} />
                                    <p className={!!errors.no_hp ? style.inputerror : ""}>{errors.no_hp != null && errors.no_hp.message}</p>

                                </div>
                                <div>
                                    <p>Domisil</p>
                                    <input type="text" {...register("domisil")} className={!!errors.domisil ? style.inputerror : ""} />
                                    <p className={!!errors.domisil ? style.inputerror : ""}>{errors.domisil != null && errors.domisil.message}</p>

                                </div>
                                <div>
                                    <p>Kelas</p>
                                    <input type="text" {...register("kelas")} className={!!errors.kelas ? style.inputerror : ""} />
                                    <p className={!!errors.kelas ? style.inputerror : ""}>{errors.kelas != null && errors.kelas.message}</p>

                                </div>
                                <div>
                                    <p>Alasan Mengikuti Kelas Gratis</p>
                                    <textarea {...register("alasan")} className={!!errors.alasan ? style.inputerror : ""} rows={5} />
                                    <p className={!!errors.alasan ? style.inputerror : ""}>{errors.alasan != null && errors.alasan.message}</p>

                                </div>
                                <div>
                                    <button>Daftar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.secondsect}>
                <div>
                    <h2>Bagaimana Belajar Secara Efektif di ZONAENGLISH</h2>
                    <div>
                        <div data-aos="zoom-out-up" data-aos-offset="300">
                            <img src="/free21.png" alt="" />
                            <p>Jadwal belajar 2 kali sepekan : 1 jam kelas utama (fokus speaking dan listening) 30-50 menit extra kelas (fokus kosa kata dan penyebutan)</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-offset="300" data-aos-delay="300">
                            <img src="/free22.png" alt="" />
                            <p>Dengan jumlah siswa sekelas hanya 5-10 org, membuat setiap siswa mendapat perhatian khusus dari Master teacher yang membantu siswa lebih cepat paham</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-offset="300" data-aos-delay="500">
                            <img src="/free23.png" alt="" />
                            <p>
                                Anda akan di ajar oleh Master Teacher yang memiliki skill mengajar dan dengan metode khusus zonaenglish, anda akan mendapatkan kemudahan dalam belajar

                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.thirdsect}>
                <div>
                    <h3>Apa kata mereka yang belajar gratis 1 bulan</h3>
                    <div>
                        <div>
                            <div>
                                <img src="/free3.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <img src="/free311.png" alt="" />
                                    <div>
                                        <p>Zonaenglish: Belajar Bahasa Inggris di Pallangga Gowa seru! Metode inovatif, guru berkomitmen, fasilitas nyaman. Pengalaman pembelajaran yang optimal dan memuaskan. Terima kasih, Zonaenglish!</p>
                                        <h4>arya.ar</h4>
                                    </div>
                                    <img src="/free311.png" alt="" />
                                    
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="/free3.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <img src="/free311.png" alt="" />
                                    <div>
                                        <p>Zonaenglish: Belajar Bahasa Inggris di Pallangga Gowa seru! Metode inovatif, guru berkomitmen, fasilitas nyaman. Pengalaman pembelajaran yang optimal dan memuaskan. Terima kasih, Zonaenglish!</p>
                                        <h4>arya.ar</h4>
                                    </div>
                                    <img src="/free311.png" alt="" />
                                    
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="/free3.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <img src="/free311.png" alt="" />
                                    <div>
                                        <p>Zonaenglish: Belajar Bahasa Inggris di Pallangga Gowa seru! Metode inovatif, guru berkomitmen, fasilitas nyaman. Pengalaman pembelajaran yang optimal dan memuaskan. Terima kasih, Zonaenglish!</p>
                                        <h4>arya.ar</h4>
                                    </div>
                                    <img src="/free311.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewsSection />
        </div>
    )
}