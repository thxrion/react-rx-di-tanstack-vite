import { injectable } from "tsyringe";

import { ProtoService } from "repository/service/service.proto";
import { SESSION_TOKEN_KEY } from "const";

import { ISessionState } from "./session.types";

const defaultState: ISessionState = {
    authorized: false,
    token: "",
}

@injectable()
export class SessionService extends ProtoService<ISessionState> {
    constructor() {
        super(defaultState);

        const token = localStorage.getItem(SESSION_TOKEN_KEY);
        if (token) {
            this.setToken(token);
        }
    }

    setToken(token: string) {
        this.push({
            token,
            authorized: !!token,
        });
    }

    reset() {
        localStorage.setItem(SESSION_TOKEN_KEY, "");
        this.setDefaultState();
    }
}
