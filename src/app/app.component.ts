import { Component, OnInit } from '@angular/core';

import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rnd-application';
  dataSet: any;

  private _hubConnection: HubConnection | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:56558/order',
        {
          skipNegotiation: true,
          transport: HttpTransportType.WebSockets
        })
      .build();

    this._hubConnection
      .start()
      .then(() => console.log("Connection Started!"))
      .catch(err => console.log("Error while establishing a connection :( "));

    this._hubConnection.on('ReceivedOrder', (data) => {
      this.dataSet = data;
    })
  }
}
