import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationComponent } from './component/reservation/reservation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'; 
import { DatePipe } from '@angular/common'
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';
import { DialogErreurComponent } from './dialog/dialog-erreur/dialog-erreur.component';
//material import 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule, MatIconModule } from '@angular/material'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PhotosComponent } from './component/photos/photos.component';
@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    DialogErreurComponent,
    ToolBarComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule
  ],
  entryComponents: [DialogErreurComponent],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
