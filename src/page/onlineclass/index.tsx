import { useRef, useState } from "react"
import style from "./index.module.css"
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Paket from "../../component/paket";
import RegisterKonsultasi from "../../component/registerkonsultasi";
const Cards = [
    {
        nama: "Mr. Rob Herman",
        asal: "American",
        video: "/onlineclass21.mp4"
    },
    {
        nama: "Chaimae Laafou",
        asal: "Marocco",
        video: "/onlineclass22.mp4"
    },
    {
        nama: "Mr.Senol Koc",
        asal: "Canada",
        video: "/onlineclass23.mp4"
    },
    {
        nama: "Mis. Melanie",
        asal: "South Africa",
        video: "/onlineclass24.mp4#t=0.2"
    },
]

const sec3 = [
    {
        label: "Kids",
        usia: 12,

    },
    {
        label: "Teenager",
        usia: 17,

    },
    {
        label: "Young Adult",
        usia: 18,

    }
]

function Sect3Card({ label, usia, gambar }: { label: string, usia: number, gambar: string }) {
    return (
        <div>
            <h4>{label}</h4>
            {usia < 18 &&
                <h5>usia di bawah</h5>}
            <h5>{usia} tahun</h5>
            <div>
                <img src={gambar} alt="" />
            </div>
        </div>
    )
}

function VideoCard({ source }: { source: string }) {
    const ref = useRef<HTMLVideoElement>(null)
    const [play, setPlay] = useState(false)
    return (
        <div>
            <div tabIndex={1} onFocus={() => {

                setPlay(true)
                const root = document.getElementsByTagName("html")[0]
                root.classList.add("hidden")
                ref.current?.load()
                setTimeout(() => {
                    ref.current?.play()
                }, 500)
            }}  >
                <video  >
                    <source src={source} />
                </video>
                <div >
                    <div>
                        <PlayArrowIcon fontSize="large" />
                    </div>
                </div>
            </div>
            <div data-play={play ? "true" : "false"} >
                <div>
                    <div>
                        <div>
                            <video ref={ref} src={source} controls>
                            </video>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    setPlay(false)
                    ref.current?.pause()
                    const root = document.getElementsByTagName("html")[0]
                    root.classList.remove("hidden")
                }}>
                    <CloseIcon fontSize="large" htmlColor="red" />
                </div>
            </div>

        </div>
    )
}

export default function OnlineClass() {
    return (
        <div>
            <div className={style.section1}>
                <div>

                    <h3>Kursus online bahasa Inggris</h3>
                    <h3>yang di desain interaktif untuk bisa speaking</h3>
                    <h4>
                        kami akan membantu anda untuk menjadi fasih berbahasa Inggris
                    </h4>
                </div>
                <div>
                    <img src="/onlineclass11.png" alt="" />
                </div>
            </div>
            <div className={style.section2}>
                <h2>Belajar bersama Master Teacher dari</h2>
                <div>
                    <h3>Indonesia</h3>
                    <h3>Foreign</h3>
                    <h3>Native</h3>
                </div>
                <div>
                    {
                        Cards.map(el => <div>
                            <VideoCard source={el.video} />
                            <div>
                                <h4>{el.nama}</h4>
                                <h4>{el.asal}</h4>
                            </div>
                        </div>)
                    }


                </div>
            </div>
            <div className={style.section3}>
                <h2>Kursus online tersedia untuk</h2>
                <div>
                    {
                        sec3.map((el, ind) => <Sect3Card {...el} gambar={`/onlineclass3${ind + 1}.png`} />)
                    }
                </div>
            </div>
            <Paket tipe="onlineclass" />
            <div className={style.section4}>

                <RegisterKonsultasi />
            </div>
        </div>
    )
}

