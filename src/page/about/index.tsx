import style from "./index.module.css"

const sect2Items = [
    {
        label: "Metode Belajar",
        color: "#ED8936"
    },
    {
        label: "Teacher",
        color: "#704CFF"
    },
    {
        label: "Materi",
        color: "#4C8EF1"
    },
    {
        label: "Sistem Teknologi",
        color: "#1CA932"
    },
    {
        label: "Tempat Belajar",
        color: "#ED36BA"
    },
    {
        label: "",
        color: "#ED3657"
    }
]

const sect7Items = [
    {
        label: "Belajar otodiadak dengan fasilitas video rekaman, latihan soal, live class , dan komunitas",
        price: "Free -"
    },
    {
        label: "Belajar dengan guru , online interaktive 2 arah",
        price: "Mulai dari Rp. 100.000/bulan"
    },
    {
        label: "Belajar dengan guru, tatap muka di English Center, pengalaman nyata",
        price: "Mulai dari Rp. 200.000/bulan"
    },
    {
        label: "Belajar dengan guru, tatap muka, intensive, camp kota inggris, full english 7/24, pengalaman nyata",
        price: "Mulai dari Rp. 1.300.000/bulan"
    },
    {
        label: "Private 1 on 1",
        price: "Mulai Rp. 90.000/jam"
    }
]

const sect9Items = [
    {
        label: "Grammar, reading, writing & speaking club"
        , price: "Gratis",
        sup: "club"
    },
    {
        label: "TOEFL",
        price: "Gratis",
        sup: "club"
    },
    {
        label: "IELTS",
        price: "Gratis",
        sup: "club"
    },
    {
        label: "Weekend and Holiday camp"
        , price: "Gratis dan Berbayar"
    },
    {
        label: "Staycation with english",
        price: "Gratis dan Berbayar"
    },
    {
        label: "Real-life  Experiences",
        price: "Gratis dan Berbayar"
    },
    {
        label: "Language exchange",
        price: "Gratis"
    },
    {
        label: "English competition",
        price: "Gratis dan Berbayar"
    },
    {
        label: "English Community  in Indonesia",
        price: "Gratis dan Berbayar"
    },
]

const sect8Items = [
    "Pre school\nusia 3-5 tahun",
    `Kids\nusia 6-13 tahun`,
    `Teenagers\nusia 14-17 tahun`,
    `Young adults\nusia 18+`,
]

export default function About() {
    return (
        <div>
            <div className={style.section1}>

                <h2>Mengapa<br /> Zona English?</h2>
                <div>
                    <img src="/about11.png" alt="" />
                </div>
            </div>
            <div className={style.section2}>
                <div>
                    <h3>Metode Belajar di Zona English</h3>
                    <p>
                        Metode belajar di zonaenglish di kembangkan sejak 2015 dengan mengumpulkan data penyebab siswa gagal dan kemudian di analisa untuk menghadirkan solusi, serta kami juga mengumpulkan data penyebab siswa berhasil dan mengembankannya untuk bisa lebih efektif.
                    </p>
                    <p>
                        Hasil dari riset dan analisa zonaenglish selama 8 tahun, zonaenglish memberikan fokus pengembangan yang berkelanjutan di
                    </p>
                    <div>
                        {
                            sect2Items.map(el => <div style={{
                                backgroundColor: el.color
                            }}>
                                {el.label}
                            </div>)
                        }
                    </div>
                </div>
                <div>
                    <img src="/about21.png" alt="" />
                </div>


            </div>
            <div className={style.section3}>
                <h2>Metode Zona English</h2>
                <h3>Metode ini berfokus pada</h3>
                <div>
                    <img src="/why1.png" alt="" />
                </div>
            </div>
            <div className={style.section4}>
                <h2>Teacher</h2>
                <h3>Kami Memberikan jaminan Teacher yang berkualitas</h3>
                <div>
                    <img src="/why2.png" alt="" />
                    <div>
                        <p>
                            Untuk mendapatkan teacher berkualitas adalah hal yang paling sulit dalam dunia pendidikan karena teacher yang memegang peran utama untuk menjadikan siswa aktif, paham dan senang belajar. 3 hal ini yang kami lakukan untuk menjamin kualitas teacher di zonaEnglish;
                        </p>
                        <p>Mulai dari proses seleksi yang teliti</p>
                        <p>Mengikuti zonaenglish teaching Training, dan</p>
                        <p>Memberikan salary yang tinggi</p>
                    </div>
                </div>
            </div>
            <div className={style.section5}>
                <h2>Metode Zona English</h2>
                <h3>Metode ini berfokus pada</h3>
                <div>
                    <img src="/why3.png" alt="" />
                </div>
                <p>ZonaEnglish telah memiliki data dari setiap kesulitan siswa dalam memahami setiap materi sehingga dari hal tersebut, ZonaEnglish menhadirkan teknik khusus untuk setiap materi tersebut agar siswa mudah paham, dan merasakan hasil belajarnya lansung di setiap materi.</p>
            </div>
            <div className={style.section6}>
                <img src="/why4.png" />
                <div>
                    <h2>Sistem Teknologi</h2>
                    <p>
                        Dengan sistem teknologi yang di kembangkan ZonaEnglish dapat memberikan solusi untuk siswa bisa belajar dengan efektif, hemat dan bisa mendapatkan hasil yang maksimal.
                    </p>
                </div>
            </div>
            <div className={style.section6}>
                <img src="/why5.png" />
                <div>
                    <h2>Tempat Belajar</h2>
                    <p>
                        ZonaEnglish menghadirkan 3 pilihan tempat belajar secara tatap muka:
                        ZE Center, ZE Hub, ZE Home, sehingga siswa bisa belajar lebih dekat, lebih hemat dan lebih nyaman
                    </p>
                </div>
            </div>
            <div className={style.section6}>
                <img src="/why6.png" />
                <div>
                    <h2>Biaya Terjangkau</h2>
                    <p>
                        Banyak yang ingin bisa berbahasa Inggris namun terkendala dengan biaya.
                    </p>
                    <p style={{
                        fontWeight: "bold",
                        marginTop: "2rem"
                    }}>
                        Belajar di ZonaEnglish mulai dari Rp 0 atau dengan
                        membayar sesuai kemampuan finansial anda.
                    </p>
                </div>
            </div>
            <div className={style.section7}>
                <h2>Beragam cara belajar bahasa inggris di ZonaEnglish</h2>
                <div>
                    {
                        sect7Items.map(el => <div>
                            <p>{el.label}</p>
                            <p>{el.price}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className={style.section8}>
                <h2>Beragam usia bisa belajar di ZonaEnglish</h2>
                <div>
                    {
                        sect8Items.map(el => <div>
                            <p>{el}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className={style.section9}>
                <h2>Beragam program dan Aktivitas belajar seru  di zonaenglish</h2>
                <h3>Online & Offline</h3>
                <div>
                    {
                        sect9Items.map(el => <div>
                            <p>{el.label}</p>
                            <p>{el.price}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className={style.section10}>
                <img src="/why7.png" />
                <div>
                    <h2>Dapatkan info terupdate seputar Aktivitas Belajar gratis gabung di group WA ZonaEnglish</h2>
                    <button>
                        Join Now
                    </button>
                </div>
            </div>
            <div className={style.section11}>
                <h2>Mari Mulai Perjalanan Belajarmu Bersama Kami!</h2>
                <div>
                    <div>
                        <img src="/why81.png" alt="" />
                        <h5>Daftar</h5>
                        <p>
                            Isi formulir pendaftaran lalu
                            kami akan segera menghubungi anda.
                        </p>
                    </div>
                    <div>
                        <img src="/why82.png" alt="" />
                        <h5>Panggilan Perkenalan</h5>
                        <p>
                            Kami akan menghubunfi anda untuk
                            mengobrol singkat tentang
                            kebutuhan anda.
                        </p>
                    </div>
                    <div>
                        <img src="/why83.png" alt="" />
                        <h5>Kelas uji kelas gratis</h5>
                        <p>
                            Course Consultant kami akan
                            memasangkan anda dengan guru yang
                            sesuai untuk kelas uji coba gratis anda!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}