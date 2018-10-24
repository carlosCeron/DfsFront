import { Component, OnInit } from "@angular/core";



@Component({
    templateUrl: 'mision.component.html'
})
export class MisionComponent implements OnInit{


    message : String = "";

    ngOnInit(){

        this.message = "Hola Mision";
        console.log("Hola desde Mision");
    }

}