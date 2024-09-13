import React from "react";

import { UC } from "usecase";

import { SignInSubmitComponent } from "./sign-in-submit.component";
import { useObservableState } from "observable-hooks";


export function SignInSubmit(): JSX.Element {
    const { loading } = useObservableState(UC.signInForm.getState());

    return <SignInSubmitComponent loading={loading} onClick={UC.signInForm.submit}/>;
}
