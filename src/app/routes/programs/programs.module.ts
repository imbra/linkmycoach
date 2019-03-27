import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './programs/programs.component';
import { TreeModule } from 'angular-tree-component';

const routes: Routes = [
  { path: '', component: ProgramsComponent }
];

@NgModule({
  declarations: [ProgramsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    TreeModule.forRoot()
  ],
  exports: [
    RouterModule
  ]
})
export class ProgramsModule { }
