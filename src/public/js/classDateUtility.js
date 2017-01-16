function DateUtility(date) {
    this.objectType = "date",
        this.date = new Date(date),
        this.formattedDate = this.date.getFormattedString(),
        this.getDaysElapsed = function () {
            todaysDate = new Date();
            return this.convertMilisecondsToDays(todaysDate - this.date);
        },
        this.convertMilisecondsToDays = function (miliseconds) {
            var oneDay = 1000 * 60 * 60 * 24;
            return Math.round(miliseconds / oneDay);
        }
}