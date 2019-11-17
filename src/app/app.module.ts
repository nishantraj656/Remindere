import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, matFormFieldAnimations, matTabsAnimations } from '@angular/material';
import { MatInputModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  
import { StudentService } from './student.service';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';  
import {MatButtonModule} from '@angular/material/button';


import { MatMenuModule, MatIconModule, MatCardModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    NewStudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule


  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }  

