import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { CardComponent } from '../pages/card/card.component';
import { CatalogComponent } from '../pages/catalog/catalog.component';
import { CertificateComponent } from '../pages/certificate/certificate.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { DeliveryComponent } from '../pages/delivery/delivery.component';
import { MainComponent } from '../pages/main/main.component';
import { OrderComponent } from '../pages/order/order.component';
import { ProfileComponent } from '../pages/profile/profile.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'card', component: CardComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'certificate', component: CertificateComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'main', component: MainComponent },
  { path: 'order', component: OrderComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
