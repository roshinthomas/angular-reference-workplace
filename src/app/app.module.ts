
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service1Service } from './services/service1.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { BehaviourSubjectService } from './services/behaviour-subject.service';  
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    WidgetsModule
  ],
  providers: [Service1Service,BehaviourSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
