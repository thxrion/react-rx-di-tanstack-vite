import React from "react";
import { Navigate } from "@tanstack/react-router";
import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

import { SignInScaffold } from "./component/sign-in-scaffold";
import { SignInEmail } from "./component/sign-in-email";
import { SignInPassword } from "./component/sign-in-password";
import { SignInRemember } from "./component/sign-in-remember";
import { SignInSubmit } from "./component/sign-in-submit";

export function SignInPage(): JSX.Element {
    const { authorized } = useObservableState(UC.session.getState());

    if (authorized) {
        return <Navigate to="/" />;
    }

    return (
        <SignInScaffold
            email={<SignInEmail />}
            password={<SignInPassword />}
            remember={<SignInRemember />}
            submit={<SignInSubmit />}
            onInit={() => {}}
            onDestroy={UC.signInForm.reset}
        />
    );
}

