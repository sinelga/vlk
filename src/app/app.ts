import {Component, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

class Hero {
    id: number;
    name: string;
    title: string;
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
    
     addHero(newemail,newphone) {
    if (newemail.value || newphone.value) { 
//      this.heroes.push(newHero.value); 
//      newHero.value = null; // clear the newHero textbox
        console.log("newemail.value ",newemail.value);
        console.log("newphone.value",newphone.value);
        newemail.value = null;
        newphone.value =null;
        
    }
  }

}

bootstrap(AppComponent);




