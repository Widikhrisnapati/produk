import { Outlet } from "react-router-dom";
import AdminNavbar from "../../layout/adminnavbar";
import AdminSidebar from "../../layout/sidebar";

export default function AdminGuard() {



    return (
        <>
            <AdminNavbar />

            <AdminSidebar />
            <div style={{
                marginLeft: "26%",
                minHeight :"100vh"
            }}>
                <Outlet />
            </div>

        </>
    )
}