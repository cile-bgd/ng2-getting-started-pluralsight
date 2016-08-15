import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

const MAX_STAR_WIDTH_PX = 100;

@Component ({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    maxStarWidth: number = MAX_STAR_WIDTH_PX;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * this.maxStarWidth / 5;
    }

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
        console.log('onClick in star.component');
    }
}
