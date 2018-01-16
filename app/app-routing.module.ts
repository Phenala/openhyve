import { ProjectsComponent } from './pages/projects/projects.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'teams', component: TeamsComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: '', redirectTo: '/chat', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
