import {Component, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

class Hero {
    id: number;
    name: string;
    title: string;
    details: string;
}
class Saveinfo {
    activity: string;
    name: string;
    email: string;
    phone: string;
        
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
    public saveInfo: Saveinfo;
    public heroes: Array<Hero>;
    public visible: boolean;
    public savedInfo: boolean;
    
   
    
    constructor(http: Http) {
 
        this.saveInfo =new Saveinfo();
        this.visible = false;
        this.savedInfo=false;
        
        http.get('activity.json').map(res => res.json()).subscribe(heroes => this.heroes = heroes);

    }
       
    onSelect(hero){
        this.selectedHero = hero;
        this.visible = false;
//        this.toggle();
//        this.saveInfo.email = "";
//        this.saveInfo.phone = "";
   
    }
    getSelectedClass(hero: Hero) {
        return { 'selected': hero === this.selectedHero };
    }
    
     addHero(newname,newphone,newemail) {
        if ((newname.value && newphone.value) || (newname.value && newemail.value)) { 
            this.toggle();
            this.saveInfo = {activity:this.selectedHero.name,name:newname.value,email:newemail.value,phone:newphone.value};
               
        }
    }
    
    confirmSaving(newphone,newemail){
        
       this.toggle();
       this.savedInfo=true; 
        
    }    
    dismissSaving(){
        
        this.toggle();
        
    }    
    
   
  toggle() {
    this.visible = !this.visible;
  }

}

bootstrap(AppComponent);




