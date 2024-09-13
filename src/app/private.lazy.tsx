import { createLazyFileRoute } from "@tanstack/react-router";
import { PrivatePage } from "view/page/private";

export const Route = createLazyFileRoute("/private")({
    component: PrivatePage,
});
