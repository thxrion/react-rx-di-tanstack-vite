import { container } from "tsyringe";

import { AuthConnector } from "repository/connector";
import { SignInFormService, SessionService } from "repository/service";
import { router } from "router";
import { SESSION_TOKEN_KEY } from "const";

export class SignInFormController {
    private readonly signInFormService: SignInFormService;

    private readonly sessionService: SessionService;

    private readonly authConnector: AuthConnector;

    constructor() {
        this.signInFormService = container.resolve(SignInFormService);
        this.sessionService = container.resolve(SessionService);
        this.authConnector = container.resolve(AuthConnector);
    }

    changeEmail = (value: string) => {
        this.signInFormService.setEmail(value);
        this.signInFormService.validateEmail();
    };

    changePassword = (value: string) => {
        this.signInFormService.setPassword(value);
        this.signInFormService.validatePassword();
    };

    changeRemember = (value: boolean) => {
        this.signInFormService.setRemember(value);
    };

    submit = async() => {
        this.signInFormService.validateEmail();
        this.signInFormService.validatePassword();

        this.signInFormService.touchPassword();
        this.signInFormService.touchEmail();

        const { errors } = this.signInFormService.state;

        if (errors.email || errors.password) {
            return;
        }

        this.signInFormService.setLoading(true);

        const token = await this.authConnector.authorize(this.signInFormService.state.values);

        if (!token) {
            this.signInFormService.setLoading(false);

            return;
        }

        this.sessionService.setToken(token);
        localStorage.setItem(SESSION_TOKEN_KEY, token);

        router.navigate({ to: "/private" });
    };

    reset = () => this.signInFormService.reset();

    getState = () => this.signInFormService.state$;
}
