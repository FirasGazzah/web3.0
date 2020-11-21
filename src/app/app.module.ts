import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EmojiPickerModule } from 'ng-emoji-picker';
import { PushNotificationsModule } from 'ng-push';
import { Ng2Webstorage } from 'ngx-webstorage';
import { FileDropModule } from 'ngx-file-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { StoreService } from './store/store.service';
import { HttpModule, Http } from '@angular/http';
import {GetdataService} from './getdata.service';
import { BooksComponent } from './books/books.component';
import {Ng5SliderModule} from 'ng5-slider';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    EmojiPickerModule,
    PushNotificationsModule,
    Ng2Webstorage,
    FileDropModule,
    AppRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCEjamb9D0FOm3MuWynOjLGXUTejDclRcA'
    }),
    AgmDirectionModule,
    Ng5SliderModule
  ],
  providers: [
    GetdataService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
