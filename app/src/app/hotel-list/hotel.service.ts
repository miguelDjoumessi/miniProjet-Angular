import { Injectable } from "@angular/core";
import { IHotel } from "../hotel";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable,  throwError } from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class HotelListService {

    private HOTEL_API_URL = '../api/hotels.json'

    constructor(private http: HttpClient){}

    public getHotel(): Observable<IHotel[]>{
        return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
            tap(hotel => console.log("hotels: ", hotel)),
            catchError(this.handleError)
        )
    }

    private handleError(error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            // A client-side or network error occured. Handle it accordingly
            console.log("A error occured: " , error.error.message);
        }else{
            // the backend returned an unsuccessfull response code.
            //the body response may contain clues as to what went wrong
            console.error(
                `the backend returned a code ${error.status}` + 
                `the backend was ${error.error}`
            );   
        }
        // returned an observable with a user-facing error message
        return throwError(
            `Something bad happened: please try again later.`
        )
    } 
}

/**
 * le tap() permet de d'effectuer de operations sur les données retourner
 * catchError() pour gerer les error concernant le fetch
*/ 