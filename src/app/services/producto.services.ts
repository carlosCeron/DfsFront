import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Product } from '../models/product';

@Injectable()
export class ProductService {


    productosList: AngularFireList<any>;
    selectProducto: Product = new Product();


    constructor(private firebase: AngularFireDatabase){}

    getProductos(){
        return this.productosList = this.firebase.list('productos');
    }

    addProducto(producto: Product){
        this.productosList.push({
            nombre: producto.nombre,
            caracteristicas: producto.caracteristicas,
            correo: producto.correo,
            pais: producto.pais,
            fecha: producto.fecha,
            precio: producto.precio,
            unidadDisponible: producto.unidadDisponible,
            unidadVendidas: producto.unidadVendidas,
            imagen: producto.imagen
        })
    }

    deleteProducto(key: string){
        this.productosList.remove(key);
    }
}