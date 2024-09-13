import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

import { HeaderComponent } from "./header.component";

export function Header() {
    const { authorized } = useObservableState(UC.session.getState());

    return <HeaderComponent authorized={authorized} signOut={UC.session.signOut} />;
}
