import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoService } from 'src/app/todo.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';
import { ChildComponent } from './child/child.component';
import { SearchboxPipe } from './searchbox.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DataComponent,
    HomeComponent,
    DatabaseComponent,
    ChildComponent,
    SearchboxPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
