function RouteList(containers) {
    this.bodyContainer = containers.body,
    this.headContainer = containers.head,
    this.items = [],
    this.add = function(route) {
        this.items.push(route);
    },
    this.goTo = function(id) {
        var targetedRoute = this.getById(id);

        var source = $("#" + targetedRoute.id + "-template").html();
        var template = Handlebars.compile(source);
        var html = template(targetedRoute.model);
        $(this.bodyContainer).html(html);

        var head = $("#head-template").html();
        var headTemplate = Handlebars.compile(head);
        var headHtml = headTemplate({ pageTitle: targetedRoute.name });
        $(this.headContainer).html(headHtml);
    },
    this.getById = function(id) {
        var route = this.items.find(function (currentRoute) {
            return currentRoute.id == id;
        });
        return route;
    }
}