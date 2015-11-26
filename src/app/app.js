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
var Saveinfo = (function () {
    function Saveinfo() {
    }
    return Saveinfo;
})();
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.title = 'Volkov Alexander';
        this.saveInfo = new Saveinfo();
        this.visible = false;
        this.savedInfo = false;
        http.get('activity.json').map(function (res) { return res.json(); }).subscribe(function (heroes) { return _this.heroes = heroes; });
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.visible = false;
        //        this.toggle();
        //        this.saveInfo.email = "";
        //        this.saveInfo.phone = "";
    };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    AppComponent.prototype.addHero = function (newname, newphone, newemail) {
        if ((newname.value && newphone.value) || (newname.value && newemail.value)) {
            this.toggle();
            this.saveInfo = { activity: this.selectedHero.name, name: newname.value, email: newemail.value, phone: newphone.value };
        }
    };
    AppComponent.prototype.confirmSaving = function (newphone, newemail) {
        this.toggle();
        this.savedInfo = true;
    };
    AppComponent.prototype.dismissSaving = function () {
        this.toggle();
    };
    AppComponent.prototype.toggle = function () {
        this.visible = !this.visible;
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