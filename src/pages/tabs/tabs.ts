import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CollectionPage } from '../collection/collection'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CollectionPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
