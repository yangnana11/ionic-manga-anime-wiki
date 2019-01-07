import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CollectionPage } from '../collection/collection'
import { SearchPage } from '../search/search'
import { MorePage } from '../more/more'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CollectionPage;
  tab3Root = SearchPage;
  tab4Root = MorePage;
  badge

  constructor() {
    this.badge = 14
  }
}
