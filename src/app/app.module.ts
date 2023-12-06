import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

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
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeroesComponent } from './test/heroes/heroes.component';
import { HeroDetailComponent } from './test/hero-detail/hero-detail.component';
import { MessagesComponent } from './test/messages/messages.component';
import { DashboardComponent } from './test/dashboard/dashboard.component';
import { InMemoryDataService } from './test/in-memory-data.service';
import { MyInputComponent } from './test/my-input/my-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyStylesComponent } from './test/my-styles/my-styles.component';
import { RxjsComponent } from './test/AutoTest/rxjs/rxjs.component';
import { CartComponent } from './test/form/cart/cart.component';
import { NameEditorComponent } from './test/form/name-editor/name-editor.component';
import { ProfileEditorComponent } from './test/form/profile-editor/profile-editor.component';
import { HeroFormComponent } from './test/form/hero-form/hero-form.component';

const matAngModules = [
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BlogComponent,
    CardComponent,
    CatalogComponent,
    CertificateComponent,
    ContactsComponent,
    DashboardComponent,
    DeliveryComponent,
    FooterComponent,
    HeroDetailComponent,
    HeroesComponent,
    MainComponent,
    MessagesComponent,
    OrderComponent,
    ProfileComponent,
    MyInputComponent,
    MyStylesComponent,
    RxjsComponent,
    CartComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormComponent,
  ],
  imports: [
    ...matAngModules,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
