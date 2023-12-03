import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddCollectionDialog } from './components/add-collection-dialog/add-collection-dialog.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CardListComponent,
    FilterComponent,
    NavbarComponent,
    HomeComponent,
    CollectionComponent,
    AddCollectionDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
