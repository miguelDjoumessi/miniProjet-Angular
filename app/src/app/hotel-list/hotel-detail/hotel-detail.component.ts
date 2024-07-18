import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelListService } from '../hotel.service';
import { IHotel } from '../../hotel';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { StarRatingComponent } from '../../share/components/star-rating/star-rating.component';


@Component({
  selector: 'app-hotel-detail',
  standalone:true,
  imports: [
    StarRatingComponent,
    UpperCasePipe, CurrencyPipe
  ],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css'
})
export class HotelDetailComponent implements OnInit {
  // public hotel = <IHotel>{};
  public hotel = {} as IHotel;
  constructor(
    private route: ActivatedRoute,
    private hotelListService: HotelListService,
    private router: Router
  ){}
  
  
  ngOnInit(): void {
    const id: Number = Number(this.route.snapshot.paramMap.get('id'));
    console.log("id = ", id ,'\n' + 'typeof: ', typeof(id));

    this.hotelListService.getHotel().subscribe(
      (hotels: IHotel[]) => {
        const hotelSelected = hotels.find(hotel => hotel.hotelId == id);
        hotelSelected != undefined ? this.hotel = hotelSelected : this.hotel = {} as IHotel;
        console.log('l\'hotel selectionner est: ', this.hotel);
      } 
    );
  }

  backToList(){
    this.router.navigate(['/hotels']);
  }
}

/**
 * La recuperation des params de l'url se fait a partir de la classe ActivedRoute
 * Number() permet de convertir un string en nombre
 * L'instanciation d'un type personnaliser et l'insertion des donnees a l'interieur doit passer par une verification 
 */
