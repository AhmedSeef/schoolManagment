import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatePipe} from '@angular/common';

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
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { StageListComponent } from './stage-List/stage-List.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { SubjectListComponent } from './subject-list/subject-list.component';

import { UserSubjComponent } from './users-list/user-subj/user-subj.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddQuestionComponent } from './add-question/add-question.component';


@NgModule({
  declarations: [
    PagesComponent,
     DashBoardComponent,
      AddUserComponent,
       AddParentComponent,
        AddTeacherComponent,
         AddStudentComponent,
          AddCategoryComponent,
           AddSubjectComponent,
            UsersListComponent,
            UpdateUserComponent,
            CategoryListComponent,
            StageListComponent,
            AddStageComponent,
            SubjectListComponent,
            UserSubjComponent
    ,AddMaterialComponent,
  MaterialListComponent,
ExamListComponent,
AddExamComponent,
AddQuestionComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule {
}
