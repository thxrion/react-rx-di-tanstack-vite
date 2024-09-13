import "reflect-metadata";
import { container } from "tsyringe";
import { SignInFormService } from "./sign-in-form.service";

describe("SignInFormService", () => {
    let signInFormService: SignInFormService;

    beforeEach(() => {
        container.clearInstances();
        signInFormService = container.resolve(SignInFormService);
    });

    it("should update loading state", () => {
        signInFormService.setLoading(true);
        expect(signInFormService.state.loading).toBe(true);

        signInFormService.setLoading(false);
        expect(signInFormService.state.loading).toBe(false);
    });

    it("should update email", () => {
        const email = "test@example.com";
        signInFormService.setEmail(email);

        expect(signInFormService.state.values.email).toBe(email);
    });

    it("should validate email and set error for invalid email", () => {
        const invalidEmail = "invalid-email";
        signInFormService.setEmail(invalidEmail);

        signInFormService.validateEmail();

        expect(signInFormService.state.errors.email?.message).toBe("Invalid email");
    });

    it("should validate email and pass for valid email", () => {
        const validEmail = "test@example.com";
        signInFormService.setEmail(validEmail);

        signInFormService.validateEmail();

        expect(signInFormService.state.errors.email).toBeNull();
    });

    it("should touch email field", () => {
        signInFormService.touchEmail();

        expect(signInFormService.state.touched.email).toBe(true);
    });

    it("should update password", () => {
        const password = "securePassword";
        signInFormService.setPassword(password);

        expect(signInFormService.state.values.password).toBe(password);
    });

    it("should validate password and set error for invalid password", () => {
        signInFormService.setPassword("123");

        signInFormService.validatePassword();

        expect(signInFormService.state.errors.password?.message).toBe("Password must be longer than 6 symbols");
    });

    it("should validate password and pass for valid password", () => {
        signInFormService.setPassword("securePassword");
        signInFormService.validatePassword();

        expect(signInFormService.state.errors.password).toBeNull();
    });

    it("should touch password field", () => {
        signInFormService.touchPassword();

        expect(signInFormService.state.touched.password).toBe(true);
    });

    it("should update remember state", () => {
        signInFormService.setRemember(true);
        expect(signInFormService.state.remember).toBe(true);

        signInFormService.setRemember(false);
        expect(signInFormService.state.remember).toBe(false);
    });

    it("should reset the form state", () => {
        signInFormService.setEmail("test@example.com");
        signInFormService.setPassword("password123");
        signInFormService.setRemember(true);

        signInFormService.reset();

        expect(signInFormService.state).toEqual({
            loading: false,
            values: {
                email: "",
                password: "",
            },
            touched: {
                email: false,
                password: false,
            },
            errors: {
                email: null,
                password: null,
            },
            remember: false,
        });
    });
});
