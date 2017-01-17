function Message(message) {
    this.objectType = "message",
        this.from = message.from,
        this.to = message.to,
        this.title = message.tite,
        this.receptionDate = new DateUtility(message.receptionDate),
        this.content = message.content
}