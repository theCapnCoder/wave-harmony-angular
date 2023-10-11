import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardComponent } from './components/card/card.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { MainComponent } from './components/main/main.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    CardComponent,
    CatalogComponent,
    CertificateComponent,
    ContactsComponent,
    DeliveryComponent,
    MainComponent,
    OrderComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
