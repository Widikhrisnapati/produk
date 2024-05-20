import style from "./index.module.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";
function TeacherTypeCard({ img, title, list, index, mobile }: { mobile : boolean, img: string, title: string, list: string[], index: number }) {
   
    return (
        <div className={style.teachertype}  data-aos="zoom-out-up" data-aos-offset={"200"} data-aos-delay={!mobile  ? index * 300 + "" :"0"} data-aos-once="true">
            <div>

                <img src={img} alt="" />
            </div>
            <h5>{title}</h5>
            <ul>
                {
                    list.map(el => <li key={el}>{el}</li>)
                }
            </ul>
        </div>
    )
}
function BonusTypeCard({ img, title, list, index, mobile }: {mobile : boolean, img: string, title: string, list: string[], index: number }) {
    
    return (
        <div className={style.bonustype} data-aos="zoom-out-up" data-aos-offset={"300"} data-aos-delay={!mobile ? index * 300 + "" :"0"} data-aos-once="true">
            <div>
                <img src={img} alt="" />
            </div>
            <h5>{title}</h5>
            <ul>
                {
                    list.map(el => <li key={el}>{el}</li>)
                }
            </ul>
        </div>
    )
}

function TutorTypeCard({ index, label, text }: { index: number, label: string, text: string }) {
    return (
        // <div data-aos="flip-up" data-aos-offset="200" data-aos-delay={index*300+""}>
        <div>
            <div>
                <img src={"/teach3" + index + ".png"} alt="" />
            </div>
            <h5>{label}</h5>
            <p>{text}</p>
        </div>
    )
}

const teachertypes = [
    {
        img: "/teach21.png",
        title: "Master Teacher Indonesia",
        list: [
            "Fluent in English",
            "Has Experience in teaching",
        ]
    },
    {
        img: "/teach22.png",
        title: "Native Speaker",
        list: [
            "English is Mother Tongue",

        ]
    },
    {
        img: "/teach23.png",
        title: "Foreign Teacher",
        list: [
            "English is your second language",

        ]
    },
    {
        img: "/teach24.png",
        title: "Volunter",
        list: [
            "Active in speaking English",
            "Still at University",
            "From difterent major",
            "Wanna get experionce in teaching",

        ]
    },
]

const tutortypes = [
    {
        label: "Video Belajar",
        text: "Buat video belajar yang menarik dan memudahkan pelajar paham"
    },
    {
        label: "Online Class Group",
        text: "Mengajar kelas online dari tempat yang nyaman"
    },
    {
        label: "Private Classes",
        text: "Mulai dulu dengan 1 pelajar , bantu seminimal yang kamu bisa"
    },
    {
        label: "Offline Class",
        text: "Menemani pelajar praktek di tempat yang keren, dan nyaman"
    },
    {
        label: "Zona Insight",
        text: "Bagi pengalaman dan wawasan anda dalam meraih sukses dari kemampuan berbahasa Inggris"
    },
]

const bonustypes = [
    {
        img: "/teach41.png",
        title: "Waktu dan lokasi mengajar yang Fleksibel",
        list: [
            "Mengajar sambil liburan ok",
            "Mengajar di tempat favorit kamu pun ok"
        ]
    },
    {
        img: "/teach42.png",
        title: "Tingkatkan penghasilan 2x lipat",
        list: [
            "Jaminan penghasilan tiap bulan",
            "bisa dapat tambahan penghasilan"
        ]
    },
    {
        img: "/teach43.png",
        title: "Selalu mensuport Anda",
        list: [
            "Berkembang bersama kominitas teacher",
            "Pusat bantuan aplikasi 24 jam",
            "Program pelatihan online & offline",
        ]
    },
    {
        img: "/teach44.png",
        title: "Wujudkan Kelas Impian",
        list: [
            "Bebas berkreasi dan berinovasi dalam mengajar",
            "Bebas memilih tempat praktek di mana saja yang anda suka. Mall, Taman, Pasar dll",

        ]
    },
    {
        img: "/teach45.png",
        title: "Dapatkan sebanyak banyaknya pelajar",
        list: [
            "Karena ZonaEnglish adalah startup Education yang ada di seluruh Indonesia",


        ]
    },
]


export default function TeachPage() {

    const nav = useNavigate()   
    const screenSize = useScreenSize()
    return (
        <div>
            <div className={style.firstsect}>
                <div>
                    <div>
                        <h3>Ayo, Wujudkan Harapan 1 Juta Pelajar
                            Bisa Bahasa Inggris</h3>
                        <h5>dengan semangat terus belajar,dan senang memberi Ilmu, Kreatif & Inovatif</h5>
                        <div data-aos="fade-right">
                            <p>Jadilah</p>
                            <p >#Teacher Perubahan</p>
                        </div>
                    </div>
                    <div>
                        <img src="/teach1.png" alt="" />
                    </div>
                </div>

            </div>
            <div className={style.secondsect}>
                <div>
                    <h3>4 Type Pengajar Kami</h3>
                    <div>
                        {
                            teachertypes.map((el, ind) => <TeacherTypeCard mobile={screenSize.width < 768} key={"TeacherType-" + el.title} {...el} index={ind} />)
                        }
                    </div>
                </div>
            </div>
            <div className={style.thirdsect}>
                <div>
                    <div>
                        <h3>Apa yang Tutor bisa lakukan?</h3>
                        <p>Bantu pelajar berbahasa inggris dengan beberapa cara</p>
                    </div>
                    <div>
                        {
                            tutortypes.map((el, ind) => <TutorTypeCard {...el} index={ind + 1} />)
                        }
                    </div>
                </div>
            </div>

            <div className={style.secondsect}>
                <div>
                    <h3>Kenapa mengajar di ZonaEnglish?</h3>
                    <h4>Dapat berbagi keuntungan dan bantu kami untuk meningkatkan<br /> kemampuan Bahasa Inggris Pelajar Indonesia</h4>
                    <div>
                        {
                            bonustypes.map((el, index) => <BonusTypeCard mobile={screenSize.width < 768} key={"bonusType-" + el.title} index={index} {...el} />)
                        }
                    </div>
                </div>
            </div>

            <div className={style.fourthsect}>
                <div>
                    <h3>Ayo Gabung Sekarang!</h3>
                    <div>
                        <div>
                            <p>Langka - langkah Mendaftar di ZONAEnglish.ID</p>
                            <p><WhatsAppIcon />Hubungi Whatsaap ZONAEnglish.ID jika anda memiliki pertanyaan</p>
                            <p><EmailIcon />Email ke Teacher@ZONAEnglish.id berisi Curriculum Vitae</p>
                            <p>Anda akan segera di hubungi tim ZONAEnglish.ID untuk proses selanjutnya</p>
                            <div>
                                <button onClick={() => {
                                    nav("/daftarteacher")
                                }}>Daftar</button>
                                <button><EmailIcon />Zona Email</button>
                                <button><WhatsAppIcon />Zona Whatsapp</button>
                            </div>
                        </div>
                        <div>
                            <img src="/teach51.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}