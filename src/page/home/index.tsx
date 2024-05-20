import ReviewsSection from "../../component/Reviews"
import style from "./index.module.css"




export default function Home() {
    return (
        <div>
            <div className={style.firstsection}>

                <div>
                    <div>
                        <div>
                            <h5>Cara gratis<br/>
                                Belajar bahasa Inggris</h5>
                            <p>
                                Seruh dan efektif, setiap hari
                            </p>
                        </div>

                        <button>
                            Lihat Selengkapnya
                        </button>
                    </div>
                </div>
                <div>
                    <img src="/appgoogle.png" alt="" />
                    <img src="/head2.png" alt="" data-aos="fade-left" data-aos-delay="200" />
                </div>
                <img src="/head1.png" alt="" />
            </div>
            <div className={style.secondsection}>
                <div>
                    <img src="/icon1.png" alt="" className={style.icon1} />
                    <p>
                        Fitur - fitur ini cocok untuk anda yang senang belajar dengan otodidak, lebih worthit dari membeli buku buku belajar bahasa inggris yang harganya setara 1 juta - 6 juta
                    </p>
                    <div>

                    </div>
                </div>
            </div>
            <div className={style.thirdsection}>
                <div >
                    <h5>Belajar dengan Aplikasi ZONAENGLISH</h5>
                    <div>
                        <div>
                            <img src="/home11.png" alt="" />
                            <p>Video belajar dan berlatih soal untuk menguji pemahaman</p>
                        </div>
                        <div>
                            <img src="/home12.png" alt="" />
                            <p>Live class dari master teacher </p>
                        </div>
                        <div>
                            <img src="/home13.png" alt="" />
                            <p>Rasakan Keseruan Latihan Soal dan Temukan kelemahan Anda! </p>
                        </div>
                        <div>
                            <img src="/home14.png" alt="" />
                            <p>Temukan komunitas belajar bahasa Inggris  dan bangun pertemanan positif, bermanfaat, luas, di seluruh Indonesia. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.sectright} >
                <div data-aos="fade-left" data-aos-offset="400">
                    <div>
                        <h5>Video Belajar</h5>
                        <p>Video belajar mulai dari level pemula sampai advance, dengan mengikuti susunan pembelajaran, akan mendapat hasil belajar maksimal.</p>
                    </div>
                    <div>
                        <img style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%"
                        }} src="/home21.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={style.sectleft} >
                <div data-aos="fade-right" data-aos-offset="400">
                    <div>
                        <h5>Video belajar dan berlatih soal untuk menguji pemahaman</h5>
                        <p>
                            Masih punya pertanyaan setelah menonton video belajar dan menjawab soal, saatnya bertanya lansung ke master teacher di sesi live class, dengan materi grammar, kosa kata baru, berlatih listening dan reading.
                        </p>
                    </div>
                    <div>
                        <img style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%"
                        }} src="/home22.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={style.sectright} >
                <div data-aos="fade-left" data-aos-offset="400">
                    <div>
                        <h5>Live class master teacher</h5>
                        <p>
                            Masih punya pertanyaan setelah menonton video belajar dan menjawab soal, saatnya bertanya lansung ke master teacher di sesi live class, dengan materi grammar, kosa kata baru, berlatih listening dan reading.
                        </p>
                    </div>
                    <div>
                        <img style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%"
                        }} src="/home24.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={style.sectleft} >
                <div data-aos="fade-right" data-aos-offset="400">
                    <div>
                        <h5>Latihan soal</h5>
                        <p>
                            Terasa menyenangkan dan menantang, jawab soal soal dan ketahui kelemahan anda.
                        </p>
                    </div>
                    <div>
                        <img style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%"
                        }} src="/home23.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={style.sectright}>
                <div data-aos="fade-left" data-aos-offset="400">
                    <div>
                        <h5>Temukan komunitas belajar bahasa Inggris dan bangun pertemanan positif, bermanfaat, luas, di seluruh Indonesia.</h5>
                        <p>
                            Kami percaya banyak teman yang baik hatinya yang telah membentuk komunitas untuk membagi ilmunya secara gratis ataupun dengan biaya yang semurah murahnya.
                        </p>
                        <p>
                            Gabung belajar dengan komunitas tersebut melalui aplikasi zonaenglish
                        </p>

                    </div>
                    <div>
                        <img style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%"
                        }} src="/home25.png" alt="" />
                    </div>
                </div>
            </div>

            <ReviewsSection />

        </div>
    )
}