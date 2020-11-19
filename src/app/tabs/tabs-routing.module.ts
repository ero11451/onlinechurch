import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../page/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../page/profile/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'messsage',
        loadChildren: () => import('../page/message/messgaelist/messgaelist.module').then(m => m.MessgaelistPageModule),
      },
      {
        path: 'wallet',
        loadChildren: () => import('../page/payment/wallet/wallet.module').then(m => m.WalletPageModule),
      },
      
      {
        path: 'service',
        loadChildren: () => import('../page/mainservice/service/service.module').then(m => m.ServicePageModule)
      },
      {
        path: 'community',
        loadChildren: () => import('../page/community/group/group.module').then(m => m.GroupPageModule),
      },
      {
        path: 'market',
        loadChildren: () => import('../page/marketplace/market/market.module').then(m => m.MarketPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
