import React from "react";
import { Navigate } from "@tanstack/react-router";
import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

import { SignUpScaffold } from "./component/sign-up-scaffold";
import { SignUpEmail } from "./component/sign-up-email";
import { SignUpPassword } from "./component/sign-up-password";
import { SignUpPasswordRepeated } from "./component/sign-up-passwod-repeated";
import { SignUpSubmit } from "./component/sign-up-submit";

export function SignUpPage(): JSX.Element {
    const { authorized } = useObservableState(UC.session.getState());

    if (authorized) {
        return <Navigate to="/" />;
    }

    return (
        <SignUpScaffold
            email={<SignUpEmail />}
            password={<SignUpPassword />}
            passwordRepeated={<SignUpPasswordRepeated />}
            submit={<SignUpSubmit />}
            onInit={() => {}}
            onDestroy={UC.signUpForm.reset}
        />
    );
}

