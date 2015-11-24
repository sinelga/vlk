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
    AppComponent.prototype.addHero = function (newemail, newphone) {
        if (newemail.value || newphone.value) {
            //      this.heroes.push(newHero.value); 
            //      newHero.value = null; // clear the newHero textbox
            console.log("newemail.value ", newemail.value);
            console.log("newphone.value", newphone.value);
            newemail.value = null;
            newphone.value = null;
        }
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
//# sourceMappingURL=app.js.map