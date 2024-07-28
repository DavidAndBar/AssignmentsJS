"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    constructor(sender, recipient, content, timestamp = new Date()) {
        this.sender = sender;
        this.recipient = recipient;
        this.content = content;
        this.timestamp = timestamp;
    }
    toString() {
        return `From: ${this.sender.name}, To: ${this.recipient.name}, Content: ${this.content}, Time: ${this.timestamp.toLocaleString()}`;
    }
}
exports.Message = Message;
