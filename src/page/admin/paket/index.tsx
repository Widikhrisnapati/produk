import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import style from "./index.module.css"
import { useEffect, useMemo } from "react"
export default function PaketAdmin() {

    const [data] = useFetch("/api/admin/paket")
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
                                <th>Jenis Kelamin</th>
                                <th>Usia</th>
                                <th>Email</th>
                                <th>Nomor Whatsapp</th>
                                <th>Lokasi</th>
                                <th>Paket</th>
                                <th>Harga</th>
                            </thead>
                            <tbody>
                                {
                                    data.data.map((el: any, ind: number) => <tr>

                                        <td>{(page * 10) + ind + 1}</td>
                                        <td>{el.nama}</td>
                                        <td>{el.jenis_kelamin}</td>
                                        <td>{el.usia}</td>
                                        <td>{el.email}</td>
                                        <td>{el.no_wa}</td>
                                        <td>{el.lokasi}</td>
                                        <td>{el.tipe}</td>
                                        <td>{Intl.NumberFormat("id-ID", {
                                            currency :"IDR",
                                            style : "currency"
                                        }).format(el.harga)}</td>
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