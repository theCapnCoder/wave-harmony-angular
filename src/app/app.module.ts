import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CardComponent } from './pages/card/card.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { MainComponent } from './pages/main/main.component';
import { OrderComponent } from './pages/order/order.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeroesComponent } from './test/heroes/heroes.component';
import { FormsModule } from '@angular/forms';

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
    FooterComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatExpansionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
