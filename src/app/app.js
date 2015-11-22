var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var AppComponent = (function () {
    //    public heroes = HEROES;
    function AppComponent(http) {
        var _this = this;
        this.title = 'Volkov Alexander';
        http.get('activity.json')
            .map(function (res) { return res.json(); }).subscribe(function (heroes) { return _this.heroes = heroes; });
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        //      .subscribe(people => this.people = people);
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        //         console.log(JSON.stringify(HEROES) );
    };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: 'templates/main.html',
            viewProviders: [http_1.HTTP_PROVIDERS],
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//var HEROES: Hero[] = [
//    { "id": 1, "name": "Translation","details":"details ksksksks"},
//    { "id": 2, "name": "Consultation","details":"details jsjsjsjs" },
//    { "id": 3, "name": "Company Creation","details":"details 18182828" },
//    { "id": 4, "name": "Activity 4","details":"details hshs828282" },
//    { "id": 5, "name": "Activity 5","details":"details iwiwiw838383" },
//    { "id": 6, "name": "Activity 6","details":"details jshdhd64363636" },
//    { "id": 7, "name": "Activity 7","details":"details kskskk 8383838" },
//    { "id": 8, "name": "Activity 8","details":"details ksksksks 8282828" },
//    { "id": 9, "name": "Activity 9","details":"details sksksksk " },
//    { "id": 10, "name": "Activity 10","details":"details ksksksksksk" }
//];
//# sourceMappingURL=app.js.map