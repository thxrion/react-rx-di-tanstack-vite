import { createLazyFileRoute } from "@tanstack/react-router";
import { PrivatePage } from "view/pages/private";

export const Route = createLazyFileRoute("/private")({
    component: PrivatePage,
});
