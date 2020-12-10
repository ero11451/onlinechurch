import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../db/service/auth-guard.service';
import { TabsPage } from './tabs.page';
import { RoutnetworkguardService } from '../helper/routnetworkguard.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../page/home/home.module').then(m => m.HomePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'profile/:userid',
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
        path: 'noservice',
        loadChildren: () => import('../page/mainservice/nosevice/nosevice.module').then(m => m.NosevicePageModule),
      },
      {
        path: 'chat/:uid',
        loadChildren: () => import('../page/mainchat/chatlist/chatlist.module').then(m => m.ChatlistPageModule),
      },


      {
        path: 'service',
        loadChildren: () => import('../page/mainservice/service/service.module').then(m => m.ServicePageModule),
        // canActivate: [AuthGuard, RoutnetworkguardService],
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
