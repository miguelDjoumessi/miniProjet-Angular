import { Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";

@Component({
    selector: 'compo-rating',
    standalone: true,
    templateUrl: "./star-rating.component.html",
    styleUrls: ['./star-rating.component.css'],
    imports: []
})

export class StarRatingComponent implements OnChanges{
    public starWidth: number = 0;
    @Input() rating = 2;
    @Output() starRatingClicked: EventEmitter<string> = new EventEmitter<string>()

    public sendRating(){
        this.starRatingClicked.emit(`la note est ${this.rating}`);
    }
    ngOnChanges(): void {
        this.starWidth = (this.rating * 125) / 5
    }

}

/**
 * le @Input() permet de recuperer les donnees du parent pour stocker vers une propte du composant enfant
 * le @Output() permet de transmettre les datas de l'enfant vers le parent a travers une propte de type EventEmitter<>()
 */