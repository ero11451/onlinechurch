import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'wallet',
    loadChildren: () => import('./page/payment/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./page/mainservice/service/service.module').then( m => m.ServicePageModule)
  },
  {
    path: 'founding',
    loadChildren: () => import('./page/payment/founding/founding.module').then( m => m.FoundingPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./page/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'bible',
    loadChildren: () => import('./page/bible/bible/bible.module').then( m => m.BiblePageModule)
  },
  {
    path: 'devotion',
    loadChildren: () => import('./page/devolotion/devolotion.module').then( m => m.DevolotionPageModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./page/community/group/group.module').then( m => m.GroupPageModule)
  },
 
  {
    path: 'giving',
    loadChildren: () => import('./page/payment/giving/giving.module').then( m => m.GivingPageModule)
  },
  {
    path: 'messgaelist/:channelId',
    loadChildren: () => import('./page/message/messgaedetail/messgaedetail.module').then( m => m.MessgaedetailPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./page/message/messgaelist/messgaelist.module').then( m => m.MessgaelistPageModule)
  },
  {
    path: 'paymentlist',
    loadChildren: () => import('./page/payment/paymentlist/paymentlist.module').then( m => m.PaymentlistPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./container/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./page/profile/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'profile/:userid',
    loadChildren: () => import('./page/profile/profile/profile.module').then( m => m.ProfilePageModule)
  },

  {
    path: 'setting',
    loadChildren: () => import('./container/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'makepost',
    loadChildren: () => import('./page/community/makepost/makepost.module').then( m => m.MakepostPageModule)
  },
  {
    path: 'comment/:postid',
    loadChildren: () => import('./page/community/comment/comment.module').then( m => m.CommentPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./container/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./container/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'foundwallet',
    loadChildren: () => import('./page/payment/foundwallet/foundwallet.module').then( m => m.FoundwalletPageModule)
  },
  {
    path: 'testimony',
    loadChildren: () => import('./page/testimony/testimony.module').then( m => m.TestimonyPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/reg/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/reg/register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'chapter',
    loadChildren: () => import('./page/bible/chapter/chapter.module').then( m => m.ChapterPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./page/reg/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('./page/marketplace/market/market.module').then( m => m.MarketPageModule)
  },
  {
    path: 'nosevice',
    loadChildren: () => import('./page/mainservice/nosevice/nosevice.module').then( m => m.NosevicePageModule)
  },
  {
    path: 'celebrationcard',
    loadChildren: () => import('./page/payment/celebrationcard/celebrationcard.module').then( m => m.CelebrationcardPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./page/payment/subcription/subcription.module').then( m => m.SubcriptionPageModule)
  },
  {
    path: 'productdetail',
    loadChildren: () => import('./page/marketplace/productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
  {
    path: 'servicemenu',
    loadChildren: () => import('./page/mainservice/servicemenu/servicemenu.module').then(m => m.ServicemenuPageModule)
  },
  {
    path: 'searchproduct',
    loadChildren: () => import('./page/marketplace/searchproduct/searchproduct.module').then( m => m.SearchproductPageModule)
  },
  {
    path: 'follow',
    loadChildren: () => import('./page/profile/follow/follow.module').then( m => m.FollowPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./page/community/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'nonetwork',
    loadChildren: () => import('./page/nonetwork/nonetwork.module').then( m => m.NonetworkPageModule)
  },
  {
    path: 'chatlist',
    loadChildren: () => import('./page/mainchat/chatlist/chatlist.module').then( m => m.ChatlistPageModule)
  },
  {
    path: 'chat-view',
    loadChildren: () => import('./page/mainchat/chat-view/chat-view.module').then( m => m.ChatViewPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
