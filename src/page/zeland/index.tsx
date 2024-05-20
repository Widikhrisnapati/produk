import Paket from "../../component/paket"
import RegisterKonsultasi from "../../component/registerkonsultasi"
import useScreenSize from "../../hooks/useScreenSize"
import style from "./index.module.css"

const section1Data = [
    {
        title: "Belajar di ZELAND",
        desc: `Belajar di ZELAND dan temukan cara unik penguasaan bahasa inggris. kami memberikan dukungan penuh ke-siswa untuk mulai mengembankan kemampuan berkomunikasi dalam bahasa Inggris. Dengan sangat teliti, kami mendesain topik materi yang berwawasan, aktivitas kelas yang beragam, dan aktivitas outdoor seru untuk memberikan pengalaman belajar yang tak terlupakan.`
    },
    {
        title: "Pratik membuat sempurna",
        desc: `Belajar di ZELAND membuat bahasa Inggris Anda akan meningkat dengan pesat. Menguasai bahasa Inggris memang membutuhkan perjuangan, butuh banyak waktu, rasa bosan karena rumitnya pelafalan berbeda dengan tulisan, banyaknya kosakata yang harus diingat, sulitnya terpahami grammar, kebingungan saat mendengarkan. Namun dengan banyaknya waktu untuk praktik dan berlatih bersama Master Teacher, bersamaan dengan itu juga melakukan aktivitas secara langsung dan nyata, menjadikan semua rintangan tersebut menjadi mudah dan ternikmati.`
    },
    {
        title: "Untuk siapa ini?",
        desc: `Program ZELAND ini sangat di rekomendasikan untuk; Anda yang baru lulus SMA dan ingin Gap year sebagai persiapan masuk universitas favorit., Anda yang baru lulus kuliah, ingin memantaskan diri masuk dunia kerja. Anda yang sedang mendapat libur mendapat libur panjang 1 bulan.`
    }
]

const section3Data = [
    "Makassar",
    "Bandung",
    "Bogor",
    "Tangerang",
    "Bekasi",
    "Jakarta"
]
const section4Data = [
    "Kolaka",
    "Pare",
    "Bira",
]

const section5Data = [
    {
        label: "HOMESTAY",
        desc: "Bagi banyak siswa memilih homestay karena bisa lebih hemat namun tetap nyaman untuk beristirahat.",
        harga: 500_000
    },
    {
        label: "HOUSE SHARE",
        desc: "Apakah Anda mencari tempat tinggal yang menawarkan ruang pribadi dan kesempatan untuk terhubung dengan siswa dari berbagai latar belakang? Jika demikian, berbagi rumah adalah pilihan akomodasi ideal untuk Anda.",
        harga: 900_000
    },
    {
        label: "APARTEMENT",
        desc: "Sangat cocok bagi Anda yang ingin tinggal di akomodasi dengan fasilitas lengkap dengan kolam renang, memasak dan bersosialisasi bersama.",
        harga: 2_000_000
    },
]

export default function ZELand() {
    const screenSize = useScreenSize()
    return (
        <div>
            <div className={style.section1} >
                <div>

                </div>
                <img src="/zeland11.jpeg" alt="" />
                <div>
                    <h1 data-aos="fade-right">ZELAND</h1>
                </div>
                <p>
                    Belajar intensif bersama siswa dari seluruh Indonesia, kursus intensif ZELAND-Kota Inggris untuk menyelesaikan pengajaran yang setara dengan satu tahun hanya dalam 8 minggu. Belajar dan Praktek berbicara bahasa Inggris full selama program intensive ZELAND-Kota Inggris
                </p>
            </div>
            <div className={style.section2}>
                <div>
                    {
                        section1Data.map(el => <div>
                            <h2>{el.title}</h2>
                            <h4>{el.desc}</h4>
                        </div>)
                    }
                </div>
                <div data-aos="fade-left" data-aos-offset="400">
                    <img src="/zeland21.png" alt="" />
                </div>
            </div>
            <div className={style.section3}>
                <h2>ZELAND (KOTA INGGRIS)</h2>
                <div>
                    {
                        section3Data.map((el, ind) => <div>
                            <img src={`zeland3${ind + 1}.png`} alt="" />
                            {
                                ind > 0 && <h3>Coming Soon</h3>
                            }
                            <h4>{el}</h4>
                        </div>)
                    }

                </div>
            </div>
            <div className={style.section3}>
                <h2>ZELAND (Kampung INGGRIS)</h2>
                <div>
                    {
                        section4Data.map((el, ind) => <div>
                            <img src={`zeland4${ind + 1}.png`} alt="" />
                            {
                                ind > 0 && <h3>Coming Soon</h3>
                            }
                            <h4>{el}</h4>
                        </div>)
                    }

                </div>
            </div>
            <Paket tipe="zeland" />
            <div className={style.section4}>
                <h2>Paket Akomodasi</h2>
                <div>

                    <div>
                        <h2>Akomodasi</h2>
                        <h3>Paket akomodasi adalah pilihan, untuk melengkapi pengalaman Anda ketika belajar bahasa inggris di ZELAND. Ada banyak berbeda yang tersedia, tergantung pada apa yang Anda inginkan.<br /><br /> Kebanyakan siswa lebih suka mengambil paket belajar plus akomodasi, ini menjadi pilihan yang sangat populer, Dimana siswa berbagi rumah atau apartment dengan siswa lainnya. Mereka bisa berlatih bahasa Inggris bersama sepanjang hari 7/24 jam, hingga program selesai.</h3>
                    </div>
                    <div data-aos="fade-left"  data-aos-offset={screenSize.width > 768 ?"400" : "0"}>
                        <img src="/zeland51.png" alt="" />
                        <img src="/zeland52.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={style.section5}>
                {
                    section5Data.map((el, ind) => <div>
                        <img src={`/zeland6${ind + 1}.png`} />
                        <div>
                            <div>
                                <h3>{el.label}</h3>
                                <p>{el.desc}</p>
                            </div>
                            <h6>Perkiraan {Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(el.harga)}</h6>
                        </div>
                    </div>)
                }
            </div>
            <RegisterKonsultasi/>
        </div>
    )
}