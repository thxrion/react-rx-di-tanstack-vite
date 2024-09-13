import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

import { SignInRememberComponent } from "./sign-in-remember.component";

export function SignInRemember() {
    const { loading, remember } = useObservableState(UC.signInForm.getState());

    return (
        <SignInRememberComponent
            value={remember}
            disabled={loading}
            onChange={UC.signInForm.changeRemember}
        />
    );
}
