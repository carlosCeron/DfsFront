import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { NgForm } from "@angular/forms";
import { ProductService } from "../services/producto.services";
import {
    AngularFireStorage,
    AngularFireUploadTask
  } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { CountryService } from "../services/country.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: 'producto.new.component.html'
})
export class ProductoNewComponent implements OnInit{

    date2: Date;
    country: any;
    countries: any[];
    filteredCountriesSingle: any[];
    results: string[];
    text: string;
    uploadedFiles: any[] = [];
    es: any;
    task: AngularFireUploadTask;
    porcentaje: Observable<number>;
    snapshot: Observable<any>;
    downloadUrl: Observable<string>;

    constructor(
        private productService:ProductService,
        private countryService: CountryService, 
        private producto: Product,
        private storage: AngularFireStorage,
        private db: AngularFirestore,
        private router: Router
    ){}

    ngOnInit(){
        console.log(this.productService.getProductos());
        console.log("Nuevo Producto Componente");


        /* Calendario en español */

        this.es = {
            firstDayOfWeek: 1,
            dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
            dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
            dayNamesMin: [ "D","L","M","X","J","V","S" ],
            monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
            monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
            today: 'Hoy',
            clear: 'Borrar'
        }
    }

    /* Metodos */

    onSubmit(form: NgForm){

        console.log(form.value);
        console.log(this.producto);
        this.productService.addProducto(this.producto);
        this.router.navigate(['productos']);
    }

    startUpload(event: FileList){
        
        const file = event.item(0);

        console.log(file);
        
        if (file.type.split('/')[0] !== 'image') {
            console.error('unsupported file type :( ');
            return;
        }

        const path = `productos/${new Date().getTime()}_${file.name}`;

        const customMetadata = { app: 'My AngularFire-powered PWA!' };

        this.storage.upload(path, file, { customMetadata }).then(() => {
            var downloadURL = this.storage.ref(path).getDownloadURL();

            downloadURL.subscribe((res) => {
                this.producto.imagen = res;
                console.log(res)
            }, (err) => console.log(err));
            console.log(downloadURL);
        });
    }

    goBack(){
        this.router.navigate(['productos']);
    }


    clean(form: NgForm){

        if(form != null){
            form.reset();
        }
    }

    filterCountrySingle(event) {
        let query = event.query;
        this.countryService.getCountries().then(countries => {

            console.log(countries);
            this.filteredCountriesSingle = this.filterCountry(query, countries);
        })
        console.log(query);
    }

    filterCountry(query, countries: any[]):any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        for(let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

    onUpload(event) {
        console.log(event);
    }

}