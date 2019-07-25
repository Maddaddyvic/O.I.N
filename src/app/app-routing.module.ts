import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'guitar', loadChildren: './pages/guitar/guitar.module#GuitarPageModule' },
  { path: 'violin', loadChildren: './violin/violin.module#ViolinPageModule' },
  { path: 'trumpet', loadChildren: './trumpet/trumpet.module#TrumpetPageModule' },
  { path: 'trombone', loadChildren: './trombone/trombone.module#TrombonePageModule' },
  { path: 'keyboard', loadChildren: './keyboard/keyboard.module#KeyboardPageModule' },
  { path: 'saxaphone', loadChildren: './saxaphone/saxaphone.module#SaxaphonePageModule' },
  { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'listing', loadChildren: './listing/listing.module#ListingPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
