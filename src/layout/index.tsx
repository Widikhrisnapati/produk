import { useMemo } from "react";
import { preprocessedRouterMeta } from "../router";
import Footer from "./footer";
import Navbar from "./navbar";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"


export default function Layout() {
    const loc = useLocation()
    const { layout} =
        useMemo(() => {
            const result = preprocessedRouterMeta.filter(el => {
                return el.path == loc.pathname
            })
            return result[0]  || {role : "Common", layout : [true, true]}

        }, [loc.pathname])



    return (
        <>
            {
               layout[0] && <Navbar />
            }
            <div style={{
                minHeight: "100vh",
                overflowX :"hidden"
            }}>
                <Outlet />
            </div>
            {
                layout[1] && <Footer />

            }
            <ScrollRestoration />
        </>
    )
}