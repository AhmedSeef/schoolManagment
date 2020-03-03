import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddParentComponent } from './add-parent/add-parent.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: '', component: DashBoardComponent},
      {path:'AddUser',component:AddUserComponent},
      {path:'AddParent',component:AddParentComponent},
      {path:'AddTeacher',component:AddTeacherComponent},
      {path:'AddStudent',component:AddStudentComponent},
      {path:'AddCategory',component:AddCategoryComponent},
      {path:'AddSubject',component:AddSubjectComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
