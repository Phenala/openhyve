import { SearchService } from './services/search.service';
import { ChatService } from './services/chat.service';
import { ContactService } from './services/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    TeamProjectsComponent
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
  providers: [ContactService, ChatService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
