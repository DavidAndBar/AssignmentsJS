import { User } from './User';

export class Message {
    constructor(
        public sender: User,
        public recipient: User,
        public content: string,
        public timestamp: Date = new Date()
    ) {}

    toString(): string {
        return `From: ${this.sender.name}, To: ${this.recipient.name}, Content: ${this.content}, Time: ${this.timestamp.toLocaleString()}`;
    }
}