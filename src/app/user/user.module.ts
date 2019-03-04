import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.route';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProfileComponent,

    LoginComponent
  ],
  providers: [

  ]
})
export class UserModule {

}
