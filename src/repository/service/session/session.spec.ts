import "reflect-metadata";
import { container } from "tsyringe";
import { SessionService } from "./session.service";
import { SESSION_TOKEN_KEY } from "const";

describe("SessionService", () => {
    let sessionService: SessionService;

    beforeEach(() => {
        container.clearInstances();
        localStorage.clear();
        sessionService = container.resolve(SessionService);
    });

    it("should set token and mark as authorized", () => {
        const token = "test-token";

        sessionService.setToken(token);
        expect(sessionService.state).toEqual({
            authorized: true,
            token,
        });
    });

    it("should retrieve token from localStorage on initialization", () => {
        const token = "stored-token";
        localStorage.setItem(SESSION_TOKEN_KEY, token);

        sessionService = container.resolve(SessionService);

        expect(sessionService.state.token).toBe(token);
        expect(sessionService.state.authorized).toBe(true);
    });

    it("should reset session", () => {
        sessionService.setToken("test-token");
        sessionService.reset();

        expect(sessionService.state).toEqual({
            authorized: false,
            token: "",
        });

        expect(localStorage.getItem(SESSION_TOKEN_KEY)).toBe("");
    });
});
