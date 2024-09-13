import React from "react";
import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

import { SignUpSubmitComponent } from "./sign-up-submit.component";

export function SignUpSubmit(): JSX.Element {
    const { loading } = useObservableState(UC.signUpForm.getState());

    return <SignUpSubmitComponent loading={loading} onClick={UC.signUpForm.submit}/>;
}
