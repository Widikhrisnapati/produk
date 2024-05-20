import {
  Navigate,
  RouteObject,
  createBrowserRouter, redirect,
} from "react-router-dom";
import Home from "../page/home";
import Layout from "../layout";
import FreePage from "../page/free";
import ZACENTERPAGE from "../page/zacenter";
import ZELand from "../page/zeland";
import DaftarTeacher from "../page/daftar";
import TeachPage from "../page/teach";
import Login from "../page/login";
import AdminLayout from "../page/admin/_layout";
import TeachAdmin from "../page/admin/teach";
import FreeClassAdmin from "../page/admin/freeclass";
import TeacherProfile from "../page/admin/teach/byId";
import KonsultasiAdmin from "../page/admin/konsultasi";
import PaketAdmin from "../page/admin/paket";
import OnlineClass from "../page/onlineclass";
import About from "../page/about";
const routerMeta: any = [
    {
      path: '/admin',
      element: <AdminLayout />,

      children: [
        {
          index: true,
          element : <Navigate to={"/admin/teach"} />
        },
        {
          path: "/admin/teach",
          element: <TeachAdmin />,
        },
        {
          path : "/admin/freeclass",
          element : <FreeClassAdmin />
        },
        {
          path : "/admin/teach/:id",
          element : <TeacherProfile />
        },
        {
          path : "/admin/konsultasi",
          element : <KonsultasiAdmin />
        },
        {
          path : "/admin/paket",
          element : <PaketAdmin />
        },
      ]
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/free",
          element: <FreePage />,
        },
        {
          path: "/zecenter",
          element: <ZACENTERPAGE />
        },
        {
          path: "/zeland",
          element: <ZELand />
        },
        {
          path: "/teach",
          element: <TeachPage />
        },
        {
          path: "/onlineclass",
          element: <OnlineClass />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/daftarteacher",
          element: <DaftarTeacher />,

          meta: {
            layout: [true, false]
          }
        },
        {
          path: "/login",
          element: <Login />,
          meta: {
            layout: [false, false]
          }
        }
      ]
    },


  ]

const currentRouter: any = []

function checkRouterMeta(data: any, path: string): {
  path: `/${string}`,
  layout: [boolean, boolean]

}[] {

  console.log(data)
  data.forEach((el: any) => {
    console.log(el.path)
    const newRouter: any = {
      path: path + el.path,
      layout: el.meta?.layout || [true, true]
    }
    if (el.children != null) checkRouterMeta(el.children, el.path.trim() == "/" ? "" : el.path)
    currentRouter.push(newRouter)
  })
  return currentRouter
}

export const preprocessedRouterMeta = checkRouterMeta(routerMeta, "")



const router = createBrowserRouter(routerMeta);


export default router;
