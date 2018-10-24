import { Component, OnInit } from "@angular/core";


@Component({
    templateUrl: 'producto.component.html'
})
export class ProductoComponent implements OnInit{


    message : String = "";

    ngOnInit(){
        this.message = "Hola Mundo";
        console.log("Dentro del Componente Producto");
    }

}