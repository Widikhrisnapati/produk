import { useParams } from "react-router-dom"
import useFetch from "../../../../hooks/useFetch"
import style from "./index.module.css"
export default function TeacherProfile() {
    const params = useParams()
    const [data] = useFetch("/api/admin/teach/" + params.id)
    
    return (
        <div className={style.container}>
            {
                data != null && <>
                    <h2>Profile</h2>
                    <div>
                        <img src={"/api/admin/file/"+data.photo} alt="" />
                    </div>
                    <div>
                       <h4>Nama : {data.nama}</h4>
                       <h4>Jenis Kelamin : {data.jenis_kelamin}</h4>
                       <h4>Jenis Kelamin : {data.jenis_kelamin}</h4>
                       <h4>Nomor HP : {data.no_hp}</h4>
                       <h4>Email : {data.email}</h4>
                       <h4>Alamat : {data.alamat}</h4>
                       <h4>Pendidikan Terakhir : {data.pendidikan_terakhir}</h4>
                        
                    </div>
                    <a href={"/api/admin/file/"+data.cv} target="_blank">Download CV</a>
                </>
            }

        </div>
    )
}