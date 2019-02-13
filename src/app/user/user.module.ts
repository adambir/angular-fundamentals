import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.route';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [

  ]
})
export class UserModule {

}
