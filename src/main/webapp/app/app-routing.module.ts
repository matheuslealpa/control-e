import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './view/home/home.component';
import { ProfileComponent } from './view/profile/profile.component';
import { TasksComponent } from './view/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';


const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'evento',
    loadChildren: () => import('./view/evento/evento-page.module').then(m => m.EventoPageModule),
  },
  {
    path: 'colando',
    loadChildren: () => import('./view/colando/colando-page.module').then(m => m.ColandoPageModule),
  },
  {
    path: 'curso',
    loadChildren: () => import('./view/@configuracoes/curso/curso-page.module').then(m => m.CursoPageModule),
  },
  {
    path: 'endereco',
    loadChildren: () => import('./view/@configuracoes/endereco/endereco-page.module').then(m => m.EnderecoPageModule),
  },
  {
    path: '**',
    redirectTo: 'evento'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent
  ]
})
export class AppRoutingModule { }
