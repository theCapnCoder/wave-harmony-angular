import { Component } from '@angular/core';
import {
  frequentlySearchedLinks,
  productCategoriesLinks,
  usefulLinksLinks,
} from './data/urlLists';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public usefulLinks = usefulLinksLinks;
  public productCategoriesLinks = productCategoriesLinks;
  public frequentlySearchedLinks = frequentlySearchedLinks;
}
