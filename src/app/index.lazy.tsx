import { createLazyFileRoute } from "@tanstack/react-router";

import { HomePage } from "view/pages/home";

export const Route = createLazyFileRoute("/")({
    component: HomePage,
});
