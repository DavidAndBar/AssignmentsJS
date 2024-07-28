import { Profile } from './Profile';

export class MatchMaker {
    static findMatches(profile: Profile, potentialMatches: Profile[], minScore: number): Profile[] {
        return potentialMatches
        .filter(p => p.user.id !== profile.user.id)
        .map(p => ({ profile: p, score: profile.match(p) }))
        .filter(match => match.score >= minScore)
        .map(match => match.profile);
    }
}