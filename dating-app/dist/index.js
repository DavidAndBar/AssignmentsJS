"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatingService_1 = require("./services/DatingService");
// Create an instance of the DatingService
const datingService = new DatingService_1.DatingService();
// Create users
const alice = datingService.createUser("Alice", "alice@example.com", "password123");
const bob = datingService.createUser("Bob", "bob@example.com", "password456");
const charlie = datingService.createUser("Charlie", "charlie@example.com", "password789");
// Create profiles
const aliceProfile = datingService.createProfile(alice, 28, "I love hiking and reading.");
const bobProfile = datingService.createProfile(bob, 32, "Passionate about music and travel.");
const charlieProfile = datingService.createProfile(charlie, 30, "Foodie and movie enthusiast.");
// Add interests
aliceProfile.addInterest("hiking");
aliceProfile.addInterest("reading");
aliceProfile.addInterest("travel");
bobProfile.addInterest("music");
bobProfile.addInterest("travel");
bobProfile.addInterest("food");
charlieProfile.addInterest("food");
charlieProfile.addInterest("movies");
charlieProfile.addInterest("reading");
// Find matches for Alice
const aliceMatches = datingService.findMatches(aliceProfile, 1);
console.log("Matches for Alice:");
aliceMatches.forEach(match => {
    console.log(`- ${match.user.name} (Score: ${aliceProfile.match(match)})`);
});
// Send messages
const messageToBob = datingService.sendMessage(alice, bob.id, "Hi Bob, I noticed we both like traveling!");
const messageToCharlie = datingService.sendMessage(bob, charlie.id, "Hey Charlie, want to grab dinner sometime?");
// Get messages for Bob
const bobMessages = datingService.getMessages(bob.id);
console.log("\nMessages for Bob:");
bobMessages.forEach(message => console.log(message.toString()));
// Verify password
const isPasswordCorrect = alice.verifyPassword("password123");
console.log(`\nIs Alice's password correct? ${isPasswordCorrect}`);
