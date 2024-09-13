import { injectable } from "tsyringe";

import { ISignInForm, ISignUpForm } from "model/dtm";

interface ISerializedAccount {
    token: string;
    email: string;
    password: string;
}

const TIMEOUT = 5000;

@injectable()
export class AuthConnector {
    private localStorageEntry = "backend-database-accounts";

    public async createAccount(data: ISignUpForm): Promise<string> {
        await this.timeout(TIMEOUT);

        const token = Math.random().toString(4 * 9).substring(2, 9);

        this.putNewAccountToLocalStorage({
            email: data.email,
            password: data.password,
            token,
        });

        return token;
    }

    public async authorize(data: ISignInForm): Promise<string | null> {
        await this.timeout(TIMEOUT);

        const accounts = this.getAccountsFromLocalStorage();

        const accountInDatabase = accounts.find(({ email, password }) => data.email === email && data.password === password);

        if (!accountInDatabase) {
            return null;
        }

        return accountInDatabase.token;
    }

    private getAccountsFromLocalStorage(): ISerializedAccount[] {
        const accountsJson = localStorage.getItem(this.localStorageEntry);

        if (!accountsJson) {
            return [];
        }

        return JSON.parse(accountsJson);
    }

    private putNewAccountToLocalStorage(account: ISerializedAccount) {
        const accounts = this.getAccountsFromLocalStorage();
        accounts.push(account);
        localStorage.setItem(this.localStorageEntry, JSON.stringify(accounts));
    }

    private timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
