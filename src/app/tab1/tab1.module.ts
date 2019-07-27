import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab1Page },
      { path: 'guitar', loadChildren: '../pages/guitar/guitar.module#GuitarPageModule' },
      { path: 'violin', loadChildren: '../violin/violin.module#ViolinPageModule' },
      { path: 'trumpet', loadChildren: './trumpet/trumpet.module#TrumpetPageModule' },
      { path: 'trombone', loadChildren: './trombone/trombone.module#TrombonePageModule' },
    
    ])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
