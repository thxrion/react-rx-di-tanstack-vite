import { createLazyFileRoute } from "@tanstack/react-router";

import { SignUpPage } from "view/page/sign-up";

export const Route = createLazyFileRoute("/sign-up")({
    component: SignUpPage,
});

