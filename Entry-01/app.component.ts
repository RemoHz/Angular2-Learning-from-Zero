import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    template: `
        <courses></courses>
        `,
    directives: [CoursesComponent]
})
export class AppComponent {

}
