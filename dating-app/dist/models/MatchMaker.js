"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchMaker = void 0;
class MatchMaker {
    static findMatches(profile, potentialMatches, minScore) {
        return potentialMatches
            .filter(p => p.user.id !== profile.user.id)
            .map(p => ({ profile: p, score: profile.match(p) }))
            .filter(match => match.score >= minScore)
            .map(match => match.profile);
    }
}
exports.MatchMaker = MatchMaker;
