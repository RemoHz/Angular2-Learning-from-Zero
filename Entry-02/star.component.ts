
import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
    selector: 'star',
    templateUrl: 'app/star.template.html',
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `],
})

export class StarComponent {
    @Input('is-Star') isStar = false;

    @Output() change = new EventEmitter();

    onClick(){
        this.isStar = !this.isStar;
        this.change.emit({ newValue: this.isStar });
    }
}
