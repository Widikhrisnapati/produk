import Auth from "../../provider/auth";
import AdminGuard from "./_guard";

export default function AdminLayout() {
    return(
        <Auth>
            <AdminGuard/>
        </Auth>
    )
}