import { Component } from '@angular/core';

import { KonektedPage } from '../konekted/konekted';
import { ChatsPage } from '../chats/chats';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChatsPage;
  tab3Root = KonektedPage;

  constructor() {

  }
  
}
