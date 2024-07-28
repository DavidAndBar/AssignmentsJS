import { User } from './User';

export class Profile {
    private interests: string[] = [];

    constructor(
        public user: User,
        public age: number,
        public bio: string
    ) {}

    addInterest(interest: string): void {
        this.interests.push(interest);
    }

    getInterests(): string[] {
        return [...this.interests];
    }

    match(otherProfile: Profile): number {
        const commonInterests = this.interests.filter(interest => 
        otherProfile.interests.includes(interest)
        );
        return commonInterests.length;
    }
}