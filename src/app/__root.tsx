import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { Header } from "view/component"

export const Route = createRootRoute({
    component: () => (
        <>
            <Header />
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
