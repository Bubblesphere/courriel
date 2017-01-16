function Message (message) {
    this.objectType = "message",
    this.from = message.from,
    this.recipient = message.recipient,
    this.receptionDate = new DateUtility(message.receptionDate),
    this.content = message.content
}