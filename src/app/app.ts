import {Component, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

class Hero {
    id: number;
    name: string;
    details: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'templates/main.html',
    viewProviders: [HTTP_PROVIDERS],  
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
class AppComponent {
    public title = 'Volkov Alexander';
	public selectedHero: Hero;
//    public heroes = HEROES;
    
    constructor(http: Http) {
    http.get('activity.json')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json()).subscribe(heroes => this.heroes = heroes);
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
//      .subscribe(people => this.people = people);
  }
       
    onSelect(hero){
        this.selectedHero = hero;
//         console.log(JSON.stringify(HEROES) );
   
    }
    getSelectedClass(hero: Hero) {
        return { 'selected': hero === this.selectedHero };
    }

}

bootstrap(AppComponent);

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


