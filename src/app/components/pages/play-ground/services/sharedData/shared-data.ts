import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedData {

  dataFromService = signal({
    product: "chocklate",
    price: 10,
    quantity: 2,
  });

  getDataFromService() {
    return JSON.stringify(this.dataFromService());
  }

  setDataFromService(data: { product: string; price: number; quantity: number; }) {
    this.dataFromService.update((pv) => ({ ...pv, product: data.product, price: data.price, quantity: data.quantity }));
  }


}
