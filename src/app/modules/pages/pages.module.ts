import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';

import { AddUserComponent } from './add-user/add-user.component';
import { AddParentComponent } from './add-parent/add-parent.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';


@NgModule({
  declarations: [PagesComponent, DashBoardComponent, AddUserComponent, AddParentComponent, AddTeacherComponent, AddStudentComponent, AddCategoryComponent, AddSubjectComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule
  ]
})
export class PagesModule {
}
