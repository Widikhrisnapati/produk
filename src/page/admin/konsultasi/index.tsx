import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import style from "./index.module.css"
import { useEffect, useMemo } from "react"
export default function KonsultasiAdmin() {

    const [data] = useFetch("/api/admin/konsultasi")
    const [searchParams] = useSearchParams()
    const loc = useLocation()
    const nav = useNavigate()
    const page = useMemo(() => {
        const curPage = searchParams.get("page")
        return parseInt(curPage || "") - 1
    }, [loc.search])

    useEffect(() => {
        if (searchParams.get("page") == null) {
            nav("?" + new URLSearchParams({
                page: "1"
            }).toString())
        }
    }, [loc.search])


    return (
        <div className={style.container}>
            {
                data != null && <>
                    <p>{data.count} orang terdaftar</p>
                    <div>

                        <table className="admintable">
                            <thead>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Nomor Whatsapp</th>
                                <th>Email</th>
                                <th>Nomor Referal</th>
                            </thead>
                            <tbody>
                                {
                                    data.data.map((el: any, ind: number) => <tr>

                                        <td>{(page * 10) + ind + 1}</td>
                                        <td>{el.nama}</td>
                                        <td>{el.no_wa}</td>
                                        <td>{el.email}</td>
                                        <td>{el.referal}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>

                </>
            }
        </div>
    )
}