import {Component} from 'angular2/core';

@Component({
   selector: 'my-app',
   template: `
    <img src="{{ imageUrl }}" />    // Interpolation, recommend use to load dynamic value
    <img [src]="imageUrl" />        // DOM property binding
    <img bind-src="imageUrl" />     // bind-DOM, rare to use

    <button
        class="btn btn-primary"
        [class.active]="isActive"    // The active class will be add when isActive is true
        [style.backgroundColor]="isActive ? 'blue' : 'gray'"    // The background color will change based on isActive
    >
    Submit</button>

    <div (click)="onDivClick()">
        <button (click)="onClick($event)">Submit</button>    // Event binding
    </div>
   `
})
export class AppComponent {
    imageUrl = "path to the image";
    isActive = true;

    onDivClick() {
      console.log("Div clicked");
    }

    onClick($event) {
      $event.stopPropagation();    // Use to ignore parent DOM event
      console.log("Clicked", $event);
    }
}
