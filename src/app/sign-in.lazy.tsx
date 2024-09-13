import { createLazyFileRoute } from "@tanstack/react-router";

import { SignInPage } from "view/page/sign-in";

export const Route = createLazyFileRoute("/sign-in")({
    component: SignInPage,
});
