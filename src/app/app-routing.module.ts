import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InprintComponent } from './inprint/inprint.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'inprint', component: InprintComponent },
  { path: 'privacynotice', component: PrivacyNoticeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
