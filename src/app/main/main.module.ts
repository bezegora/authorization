import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  }
]

@NgModule({
  declarations: [
    MainPage
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    MainPage
  ]
})
export class MainModule { }
