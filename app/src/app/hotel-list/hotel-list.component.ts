import { NgFor, NgIf} from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'hotel-list',
    standalone: true,
    templateUrl: "./hotel-list.component.html",
    imports: [NgIf, NgFor]
})
export class HotelListComponent{
    title = 'Liste d\'hotels'
    hotels = [
        {
           hotelId: 1, 
           hotelName: 'Luxior',
           price: 100.0,
           imageUrl: "../assets/images/chambre_anglaise.jpg",
           hotelDescription: "chambre luxieuse dans la ville de londre"
        },
        {
           hotelId: 2, 
           hotelName: 'Indiara hotels',
           price: 120.0,
           imageUrl: '../assets/images/chambre_indonesienne.jpg',
           hotelDescription: "chambre d'hotels dans une ville de l'inde"
        },
        {
           hotelId: 3, 
           hotelName: 'Le GoraDor',
           price: 130.0,
           imageUrl: '../assets/images/chambre_kribienne.jpg',
           hotelDescription: "profiter d'une chambre d'hotels donnant vue sur la mer dans la ville de kribie"
        },
        {
            hotelId: 4, 
           hotelName: 'Spatior',
           price: 140.0,
           imageUrl: '../assets/images/chambre_losangeles.jpg',
           hotelDescription: "chambre d'hotels dans les manifique graftciel de losangeles"
        },
        {
           hotelId: 5, 
           hotelName: 'Louange',
           price: 150.0,
           imageUrl: '../assets/images/chambre_violet.jpg',
           hotelDescription: "chambre au milieu d'une belle ville"
        },
        {
           hotelId: 6, 
           hotelName: 'Oulala  hotel',
           price: 160.0,
           imageUrl: '../assets/images/chambre_vue_sur_plage.jpg',
           hotelDescription: "chambre au milieu d'hawouail"
        }
    ];
    public showBadge: boolean = true;

    public toogleBadge():void{
        this.showBadge = !this.showBadge;    
    }
}