import { Component, OnInit } from "@angular/core";


@Component({
    templateUrl: 'vision.component.html'
})
export class VisionComponent implements OnInit{




    message : String = "";

    ngOnInit(){
        this.message = "Hola desde Vision";
        console.log("Hola desde Vision");
    }

}