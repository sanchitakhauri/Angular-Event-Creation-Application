import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from './shared/event.service';
@Component({
    templateUrl: './create-event.component.html',
    styles: [`
      em {float:right; color:#E05C65; padding-left:10px;}
      .error input {background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder {color: #999;}
      .error ::-moz-placeholcer {color: #999}
      .error :-moz-placeholcer {color: #999}
      .error ::-ms-placeholcer {color: #999}
     `
    ]
})

export class CreateEventComponent{
    ngForm;
    isDirty: any = true;
    newEvent;
    constructor(private router: Router, private eventService: EventService){

    }
    saveEvent(formValues){
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }
    cancel(){
        this.router.navigate(['/events']);
    }
}
