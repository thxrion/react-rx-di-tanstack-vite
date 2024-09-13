import { container } from "tsyringe";

import { SessionService } from "repository/service";

export class SessionController {
    private readonly sessionService: SessionService;

    constructor() {
        this.sessionService = container.resolve(SessionService);
    }

    signOut = () => {
        this.sessionService.reset();
    };

    getState = () => this.sessionService.state$;
}
