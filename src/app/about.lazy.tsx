import { createLazyFileRoute } from "@tanstack/react-router"

import { AboutPage } from "view/pages/about";

export const Route = createLazyFileRoute("/about")({
    component: AboutPage,
});
