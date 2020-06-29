import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyChoiceComponent } from './components/my-choice/my-choice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChoicesService } from './services/choices.service';

@NgModule({
  declarations: [
    AppComponent,
    MyChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ChoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
