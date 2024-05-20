import { useEffect, useRef, useState } from "react"
import style from "./index.module.css"
import ReviewsSection from "../../component/Reviews";
import RegisterKonsultasi from "../../component/registerkonsultasi";
import Paket from "../../component/paket";
import useScreenSize from "../../hooks/useScreenSize";
const selectimages = [
    {
        img: "/zecenter31.jpg",
        html: () => <div>
            <h3>Modern ClassRoom</h3>
            <p>
                Ruang belajar berfasilitas modern dengan kapasitas maksimum 14 siswa
            </p>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <img src="/zecenter34.jpg" alt="" style={{
                    width: "3rem",
                    height: "4rem",
                    objectFit: "contain"
                }} />
                <div>
                    <h3 >
                        Terintegrasi teknologi
                    </h3>
                    <p>
                        Aplikasi ZonaEnglish untuk latihan dan pembelajaran online
                    </p>
                </div>
            </div>
        </div>
    },
    {
        img: "/zecenter33.jpg",
        html: () => <div>
            <h3>Taman Belajar</h3>
            <p>
                Area belajar diluar ruangan yang lebih asik
            </p>

        </div>
    },
    {
        img: "/zecenter32.jpg",
        html: () => <div>
            <h3>Cozy Lounge</h3>
            <p>
                Area loby yang luas nyaman serta dilengkapi AC
            </p>
            <h3>Area Duduk</h3>
            <p>
                Bersantai atau menunggu pembeljaran dimulai
            </p>

        </div>
    },

]



const alamat = [
    {
        lokasi: "Makassar (Abdesir)",
        alamat: "Jl. Penjernihan kompleks PDAM No.7A, Karampuang, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan"
    },
    {
        lokasi: "Gowa",
        alamat: "Pallangga Mas 3, Kabupaten Gowa, Sulawesi Selatan"
    },
    {
        lokasi: "Kolaka",
        alamat: "Jl. Pemuda, Balandete, Kec. Kolaka, Kabupaten Kolaka, Sulawesi Tenggara"
    },
    {
        lokasi: "Coming Soon\nMakassar (Nipah Park)",
        alamat: ""
    },
    {
        lokasi: "Coming Soon\nMakassar (BTP)",
        alamat: ""
    },
    {
        lokasi: "Coming Soon\nMakassar (Talasa City)",
        alamat: ""
    },
]

export default function ZACENTERPAGE() {

    const [selectedImage, setSelectedImage] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const screenSize = useScreenSize()
    return (
        <div>
            <div className={style.firstsect}>
                <div>
                    <div data-aos="fade-right">
                        <p>
                            ZonaEnglish Center
                        </p>
                    </div>
                    <h1>The Best English center</h1>
                    <p>
                        orang memilih pusat bahasa Inggris yang lebih baik untuk memaksimalkan hasil belajar mereka, menerima instruksi berkualitas, mendapatkan kepercayaan diri dalam kemahiran bahasa Inggris, dan mencapai tujuan bahasa mereka secara efektif.
                    </p>

                </div>
                <div>
                    <img src="/zecenter11.png" alt="" />
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div className={style.secondsect}>
                <h2>Sarana untuk mencapai hasil belajar yang maksimal</h2>
                <div>
                    <div data-aos="flip-up" data-aos-offset="300">
                        <div>
                            <img src="/zecenter21.png" alt="" />
                        </div>
                        <h4>Kelas Kecil 5-10/KELAS</h4>
                        <p>
                            Kelompok yang lebih kecil memungkinkan, siswa untuk berpartisipasi aktif dalam diskusi, menerima umpan balik tentang kemampuan bahasa mereka, dan memiliki lebih banyak kesempatan untuk berlatih berbicara bahasa Inggris
                        </p>
                    </div>
                    <div data-aos="flip-up" data-aos-offset="300" data-aos-delay={screenSize.width > 768 ?"300" : "0"}>
                        <div>
                            <img src="/zecenter22.png" alt="" />
                        </div>
                        <h4>Kurikulum Komprehensif</h4>
                        <p>
                            kurikulum yang terstruktur dengan baik dan komprehensif yang mencakup semua aspek pembelajaran bahasa, termasuk tata bahasa, kosa kata, berbicara, mendengarkan, membaca, dan menulis. Kurikulum dirancang untuk memenuhi tingkat kemahiran yang berbeda, memastikan bahwa siswa menerima pendidikan bahasa holistik.
                        </p>
                    </div>
                    <div data-aos="flip-up" data-aos-offset="300" data-aos-delay={screenSize.width > 768 ?"600" : "0"}>
                        <div>
                            <img src="/zecenter23.png" alt="" />
                        </div>
                        <h4>Metode Pengajaran Interaktif</h4>
                        <p>
                            Pusat bahasa Inggris yang baik menggunakan metode pengajaran interaktif untuk membuat proses pembelajaran menarik dan efektif. Metode ini mencakup kegiatan kelompok, diskusi, permainan peran, sumber daya multimedia, dan integrasi teknologi. Pembelajaran interaktif mempromosikan keterlibatan siswa, menumbuhkan pemahaman konsep yang lebih baik, dan meningkatkan penguasaan bahasa.
                        </p>
                    </div>
                    <div data-aos="flip-up" data-aos-offset="300" data-aos-delay={screenSize.width > 768 ?"900" : "0"}>
                        <div>
                            <img src="/zecenter24.png" alt="" />
                        </div>
                        <h4>Integrasi fitur ZonaEnglish App</h4>
                        <p>
                            Melengkapi kebutuhan belajar dengan beragam fitur unggulan ZonaEnglish Online
                        </p>
                    </div>
                </div>
            </div>

            <div className={style.thirdsect}>
                <h2>Fasilitas yang mendukung proses pembelajaran</h2>
                <div>
                    <div ref={ref} onAnimationEnd={() => {
                        ref.current?.removeAttribute("data-animate")
                    }}>
                        {
                            selectimages[selectedImage].html()
                        }
                        <div>
                            <img src={selectimages[selectedImage].img} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    {
                        selectimages.map((el, ind) => <div key={"availableimages-" + el} className={ind == selectedImage ? style.selected : ""} onClick={() => {
                            ref.current?.removeAttribute("data-animate")
                            setSelectedImage(ind)
                            ref.current?.setAttribute("data-animate", "")
                        }}>

                            <img src={el.img} alt="" />
                        </div>)
                    }


                </div>
            </div>
            <div className={style.fourthsect}>
                <h3>ZE English Center hadir di kota berikut!</h3>
                <div>
                    {
                        alamat.map((el, ind) => <div>
                            <div data-kota={el.lokasi} onClick={() => {
                                if(el.alamat.trim().length == 0 ) return
                                window.open(`https://www.google.com/maps/search/${encodeURIComponent(el.alamat)}/@-5.1109608,119.3202257,12z/data=!3m1!4b1?entry=ttu`)
                            }}>
                                <img src={`/zecenter4${ind + 1}.png`} alt="" />
                            </div>
                            <p>
                                {el.alamat}
                            </p>
                        </div>
                        )
                    }

                </div>
            </div>
            <Paket tipe="zecenter" />
            <div className={style.sixsect}>
                <h2>Dibimbing oleh Master Teacher berpengalaman</h2>
                <div>
                    <div>
                        <div>

                            <img src="/zecenter51.png" alt="" />
                        </div>
                        <div>
                            <h4>WA ODE DEWI HASTUTI PUTRI</h4>
                            <h5>ZE Teacher</h5>
                            <div>
                                <div>
                                    <img src="/zecenter54.png" alt="" />
                                </div>
                                <p>
                                    Teaching English for 2 Years
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <div>

                            <img src="/zecenter52.png" alt="" />
                        </div>
                        <div>
                            <h4>BILLY CHEN</h4>
                            <h5>ZE Teacher</h5>
                            <div>
                                <div>
                                    <img src="/zecenter54.png" alt="" />
                                </div>
                                <p>
                                    Teaching English for 2 Years
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <div>

                            <img src="/zecenter53.png" alt="" />
                        </div>
                        <div>
                            <h4>ILMA MAZRO’AH RIZKA</h4>
                            <h5>ZE Teacher</h5>
                            <div>
                                <div>
                                    <img src="/zecenter54.png" alt="" />
                                </div>
                                <p>
                                    Teaching English for 2 Years
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ReviewsSection/> */}
            {/* <RegisterKonsultasi/> */}
        </div>
    )
}