import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './components/main/main.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';

import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';

import { AddCollectionComponent } from './modal/add-collection/add-collection.component';
import { AddCardComponent } from './modal/add-card/add-card.component';

import { AnoFormatPipe } from './components/pipe/ano-format.pipe';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CardListComponent,
    FilterComponent,
    HomeComponent,
    CollectionComponent,
    AddCollectionComponent,
    AddCardComponent,
    AnoFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
