import { container } from "tsyringe";

import { AuthConnector } from "repository/connector";
import { SignUpFormService, SessionService } from "repository/service";
import { router } from "router";
import { SESSION_TOKEN_KEY } from "const";

export class SignUpFormController {
    private readonly signUpFormService: SignUpFormService;
    private readonly sessionService: SessionService;
    private readonly authConnector: AuthConnector;

    constructor() {
        this.signUpFormService = container.resolve(SignUpFormService);
        this.sessionService = container.resolve(SessionService);
        this.authConnector = container.resolve(AuthConnector);
    }

    changeEmail = (value: string) => {
        this.signUpFormService.setEmail(value);
        this.signUpFormService.validateEmail();
    }

    changePassword = (value: string) => {
        this.signUpFormService.setPassword(value);
        this.signUpFormService.validatePassword();
    }

    changePasswordRepeated = (value: string) => {
        this.signUpFormService.setPasswordRepeated(value);
        this.signUpFormService.validatePassword();
    }

    submit = async () => {
        this.signUpFormService.validateEmail();
        this.signUpFormService.validatePassword();

        this.signUpFormService.touchPassword();
        this.signUpFormService.touchEmail();

        const { errors } = this.signUpFormService.state;

        if (errors.email || errors.password) {
            return;
        }

        this.signUpFormService.setLoading(true);

        const token = await this.authConnector.createAccount(this.signUpFormService.state.values);

        if (!token) {
            this.signUpFormService.setLoading(false);
            return;
        }

        this.sessionService.setToken(token);
        localStorage.setItem(SESSION_TOKEN_KEY, token);

        router.navigate({ to: "/private" });
    }

    reset = () => {
        this.signUpFormService.reset();
    }

    getState = () => (
        this.signUpFormService.state$
    );
}
