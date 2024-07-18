
export interface IHotel{
    hotelId: number;
    hotelName: string;
    hotelDescription: string;
    price: number;
    imageUrl: string;
    rating: number;
}

/**
 * les interfaces en angular ne contient que de propriete et pas de methode il fait office de type de donnees
 */

export class Hotel implements IHotel{
    hotelId: number;
    hotelName: string;
    hotelDescription: string;
    price: number;
    imageUrl: string;
    rating: number;

    constructor(Id:number, Name:string, description:string, prix:number, image:string, rating:number){
        this.hotelId = Id;
        this.hotelName = Name;
        this.hotelDescription = description;
        this.price = prix;
        this.imageUrl = image
        this.rating = rating
    }
    getNewPrice(price:number):number{
        return this.price - 5;
    }
} 