import style from "./index.module.css"

export default function Footer() {
    return (
        <div className={style.container}>
            <div>
                <div>
                    <img src="/footer1.png" alt="" />
                </div>
                <div>
                    <h5>Download App</h5>
                    <img src="/appgoogle.png" alt="" onClick={() => {
                        window.open("https://play.google.com/store/apps/details?id=com.zn.zonaenglish&pli=1", "_blank")
                    }} />
                </div>
                <div>
                    <h5>Alamat</h5>
                    <p>
                        ZonaEnglish indonesia HQ Jln. Pemuda No. 352 Kolaka Sulawesi Tenggara
                    </p>
                </div>
            </div>
        </div>
    )
}