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
import { UsersListComponent } from './users-list/users-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { StageListComponent } from './stage-List/stage-List.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { SubjectListComponent } from './subject-list/subject-list.component';

import { UserSubjComponent } from './users-list/user-subj/user-subj.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: '', component: DashBoardComponent},
      {path:'adduser',component:AddUserComponent},
      {path:'UpdateUser',component:UpdateUserComponent},
      {path:'AddParent',component:AddParentComponent},
      {path:'AddTeacher',component:AddTeacherComponent},
      {path:'AddStudent',component:AddStudentComponent},
      {path:'addcategory',component:AddCategoryComponent},
      {path:'addsubject',component:AddSubjectComponent},
      {path:'users',component:UsersListComponent},
      {path:"stages",component:StageListComponent},
      {path:"addstage",component:AddStageComponent},
      {path:'categories',component:CategoryListComponent},
      {path:'subjects',component:SubjectListComponent},     
      {path:'user-subj/:id',component:UserSubjComponent},

      { path: "**", component: DashBoardComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
