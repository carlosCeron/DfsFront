import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/producto.services";
import { Product } from "../models/product";
import { element } from "protractor";
import { SelectItem } from "../models/selecitem";
import { Router } from '@angular/router';

@Component({
    templateUrl: 'producto.component.html',
    styles: [`      
        .ui-button { 
            margin-top: 3em;
        }  
        .filter-container {
            text-align: center;
        }
        @media (max-width: 40em) {
            .car-details, .search-icon {
                text-align: center;
                margin-top: 0;
            }
            .filter-container {
                text-align: left;
            }
        }
    `]
})
export class ProductoComponent implements OnInit{
    message : String = "";
    listadoProductos: Product[];

    displayDialog: boolean;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;


    constructor(private productService: ProductService, private router: Router){}

    ngOnInit(){
        this.getData();
        
        this.sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];
    }
    
    getData(){
        return this.productService.getProductos()
        .snapshotChanges().subscribe(item => {
            this.listadoProductos = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.listadoProductos.push(x as Product);
            })
            
            console.log(this.listadoProductos);
            })
    }

    newProduct(){
        this.router.navigate(['productos/new']);
    }

    /** Metodos DataView */

    selectCar(event: Event) {
        this.displayDialog = true;
        event.preventDefault();
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onDialogHide() {}

}