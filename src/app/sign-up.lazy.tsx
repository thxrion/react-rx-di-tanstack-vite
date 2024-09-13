import { createLazyFileRoute } from "@tanstack/react-router";

import { SignUpPage } from "view/pages/sign-up";

export const Route = createLazyFileRoute("/sign-up")({
    component: SignUpPage,
});

