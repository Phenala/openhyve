import { UiService } from './services/ui.service';
import { SearchService } from './services/search.service';
import { ChatService } from './services/chat.service';
import { ContactService } from './services/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';

import { InMemoryServiceService } from './temp/in-memory-service.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { SearchBarComponent } from './util/search-bar/search-bar.component';
import { EntityImageComponent } from './util/entity-image/entity-image.component';
import { NotificationBellComponent } from './main/notification-bell/notification-bell.component';
import { ScrollerComponent } from './util/scroller/scroller.component';
import { PreferencesComponent } from './main/preferences/preferences.component';
import { NavigatorComponent } from './main/navigator/navigator.component';
import { FooterComponent } from './main/footer/footer.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { TitleComponent } from './util/title/title.component';
import { MessagesComponent } from './main/messages/messages.component';
import { MessageInputComponent } from './util/message-input/message-input.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { LoginBarComponent } from './main/login-bar/login-bar.component';
import { WebsiteFrontComponent } from './main/website-front/website-front.component';
import { LoaderComponent } from './util/loader/loader.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamsListComponent } from './main/teams-list/teams-list.component';
import { TeamContentComponent } from './main/team-content/team-content.component';
import { TabsComponent } from './util/tabs/tabs.component';
import { TeamProjectsComponent } from './main/team-projects/team-projects.component';
import { AppRoutingModule } from './/app-routing.module';
import { EntityUserComponent } from './util/entity-user/entity-user.component';
import { TeamDetailComponent } from './main/team-detail/team-detail.component';
import { TeamChatComponent } from './main/team-chat/team-chat.component';
import { TeamInfoComponent } from './main/team-info/team-info.component';
import { EntityDescriptorComponent } from './util/entity-descriptor/entity-descriptor.component';
import { MembersComponent } from './util/members/members.component';
import { ButtonComponent } from './util/button/button.component';
import { LineGraphComponent } from './util/line-graph/line-graph.component';
import { OptionButtonComponent } from './util/option-button/option-button.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectsListComponent } from './main/projects-list/projects-list.component';
import { ProgressComponent } from './util/progress/progress.component';
import { ProjectContentComponent } from './main/project-content/project-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    EntityImageComponent,
    NotificationBellComponent,
    ScrollerComponent,
    PreferencesComponent,
    NavigatorComponent,
    FooterComponent,
    ChatComponent,
    ContactsComponent,
    TitleComponent,
    MessagesComponent,
    MessageInputComponent,
    LoginComponent,
    UserComponent,
    LoginBarComponent,
    WebsiteFrontComponent,
    LoaderComponent,
    TeamsComponent,
    TeamsListComponent,
    TeamContentComponent,
    TabsComponent,
    TeamProjectsComponent,
    EntityUserComponent,
    TeamDetailComponent,
    TeamChatComponent,
    TeamInfoComponent,
    EntityDescriptorComponent,
    MembersComponent,
    ButtonComponent,
    LineGraphComponent,
    OptionButtonComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProgressComponent,
    ProjectContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryServiceService, {dataEncapsulation: false}
    ),
    AppRoutingModule
  ],
  providers: [ContactService, ChatService, SearchService, UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
