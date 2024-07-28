export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        private password: string
    ) {}
    
    verifyPassword(inputPassword: string): boolean {
        return this.password === inputPassword;
    }
}