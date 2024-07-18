import { CurrencyPipe, NgFor, NgIf, registerLocaleData} from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import LocalFr from "@angular/common/locales/fr";
import { IHotel } from "../hotel";
import { ReplaceCommaPipe } from "../share/pipes/remove-coma.pipe";
import {StarRatingComponent } from "../share/components/star-rating/star-rating.component";
import { SrvRecord } from "dns";
import { HotelListService } from "./hotel.service";
import { HttpClient } from "@angular/common/http";
import { RouterLink, RouterOutlet } from "@angular/router";
registerLocaleData(LocalFr, 'fr');

@Component({
    selector: 'hotel-list',
    standalone: true,
    templateUrl: "./hotel-list.component.html",
    imports: [NgIf, NgFor, FormsModule, 
      CurrencyPipe, ReplaceCommaPipe, StarRatingComponent, RouterLink, RouterOutlet
    ],
    providers: [HttpClient]
})
export class HotelListComponent implements OnInit{
    title = 'Liste d\'hotels'
    message: string = "";
    hotels: IHotel[] = [];
    public showBadge: boolean = true;
    private _hotelFilter = '';
    public FilteredHotels: IHotel[] = [];
    public errMsg: string ="";


    constructor(private hotelsListService: HotelListService){

    }

    public toogleBadge():void{
        this.showBadge = !this.showBadge;    
    }

    public get hotelFilter():string{
      return this._hotelFilter;
    }

    public set hotelFilter(filter: string){
      this._hotelFilter = filter;

      this.FilteredHotels = this.hotelFilter ? this.filterHotel(this.hotelFilter) : this.hotels; 
    }

    private filterHotel(criteria: string): IHotel[]{
      criteria = criteria.toLocaleLowerCase();

      const res = this.hotels.filter(
         (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
      );
      return res;
    }
    receiveRating(message: string){
      this.message = message;
    }

    ngOnInit(): void {
      // this.hotels = this.hotelsListService.getHotel();
      this.hotelsListService.getHotel().subscribe({
         next: hotels => {
          this.hotels = hotels
          this.FilteredHotels = this.hotels;
        },
         error: err => this.errMsg = err
      });
   }
}

/**
  -OnInit() c'est une methode implementer par la classe OnInit qui est un niveau de niveau
  * .suscribe() permet de s'enregistrer a un service retournant un observable 
  * le next permet de recuperer les donnees de l'observable
  * error permet de recuperer les erreur envoi par l'observable
*/