import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';

export interface IOrder {
  pid?: string;
  image?: string;
  description?: string;
  price?: number;
  quantity?: number;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders: Array<IOrder> = [];

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {
    this.orders = [{
      'pid': '1',
      'image': 'assets/sm_android.jpeg',
      'description': 'Android',
      'price': 150.00,
      'quantity': 2
    }, {
      'pid': '2',
      'image': 'assets/sm_iphone.jpeg',
      'description': 'IPhone',
      'price': 200.00,
      'quantity': 1
    }, {
      'pid': '3',
      'image': 'assets/sm_windows.jpeg',
      'description': 'Windows Phone',
      'price': 110.00,
      'quantity': 2
    }];

  }

  async ngOnInit() {

  }
  displayOrder() {
    this.orders = [{
      'pid': '1',
      'image': 'assets/sm_android.jpeg',
      'description': 'Android',
      'price': 150.00,
      'quantity': 2
    }, {
      'pid': '2',
      'image': 'assets/sm_iphone.jpeg',
      'description': 'IPhone',
      'price': 200.00,
      'quantity': 1
    }, {
      'pid': '3',
      'image': 'assets/sm_windows.jpeg',
      'description': 'Windows Phone',
      'price': 110.00,
      'quantity': 2
    }];
  }

  delete(index: number) {
    this.orders.splice(index, 1);
  }
}

// addItem(item: string); {
//   switch (item) {
//     case 'Android':
//       this.orders.unshift({
//         'pid': '1',
//         'image': 'assets/sm_android.jpeg',
//         'description': 'Android',
//         'price': 150.00,
//         'quantity': 1
//       });
//       break;
//     case 'Android':
//       this.orders.unshift({
//         'pid': '2',
//         'image': 'assets/sm_iphone.jpeg',
//         'description': 'IPhone',
//         'price': 200.00,
//         'quantity': 1
//       });
//       break;
//     case 'Android':
//       this.orders.unshift({
//         'pid': '3',
//         'image': 'assets/sm_windows.jpeg',
//         'description': 'Windows Phone',
//         'price': 110.00,
//         'quantity': 1
//       });
//       break;
//   }
// }


// clear() {
//   this.orders.map((item: IOrder, i: number) => {
//     Object.keys(item).map((key: string) => {
//       if (key != 'image') {
//         item[key] = '';
//       }
//     });
//   });
// }