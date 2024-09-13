import { createLazyFileRoute } from "@tanstack/react-router";

import { AboutPage } from "view/page/about";

export const Route = createLazyFileRoute("/about")({
    component: AboutPage,
});
