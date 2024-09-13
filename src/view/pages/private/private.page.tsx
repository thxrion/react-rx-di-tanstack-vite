import { Navigate } from "@tanstack/react-router";
import { useObservableState } from "observable-hooks";

import { UC } from "usecase";

export function PrivatePage() {
    const { authorized } = useObservableState(UC.session.getState());

    if (!authorized) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            Hello private stuff visible only to authenticated users!
        </div>
    );
}
