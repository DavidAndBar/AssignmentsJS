import { User } from '../models/User';
import { Profile } from '../models/Profile';
import { Message } from '../models/Message';
import { MatchMaker } from '../models/MatchMaker';

export class DatingService {
    private users: User[] = [];
    private profiles: Profile[] = [];
    private messages: Message[] = [];

    createUser(name: string, email: string, password: string): User {
        const id = this.users.length + 1;
        const user = new User(id, name, email, password);
        this.users.push(user);
        return user;
    }

    createProfile(user: User, age: number, bio: string): Profile {
        const profile = new Profile(user, age, bio);
        this.profiles.push(profile);
        return profile;
    }

    sendMessage(sender: User, recipientId: number, content: string): Message | null {
        const recipient = this.users.find(u => u.id === recipientId);
        if (recipient) {
        const message = new Message(sender, recipient, content);
        this.messages.push(message);
        return message;
        }
        return null;
    }

    getMessages(userId: number): Message[] {
        return this.messages.filter(m => m.recipient.id === userId || m.sender.id === userId);
    }

    findMatches(profile: Profile, minScore: number): Profile[] {
        return MatchMaker.findMatches(profile, this.profiles, minScore);
    }
}