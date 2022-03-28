import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HubConnection } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  // providers: [HubConnectionFactory],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(factory: HubConnectionFactory) {
  //   factory.create(
  //     { key: "order", endpointUri: "/order" },
  //   );
  // }
}
