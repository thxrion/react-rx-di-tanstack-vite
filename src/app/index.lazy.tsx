import { createLazyFileRoute } from "@tanstack/react-router";

import { HomePage } from "view/page/home";

export const Route = createLazyFileRoute("/")({
    component: HomePage,
});
