import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundgifComponent } from './backgroundgif/backgroundgif.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { EventInfoComponent } from './event-info/eventinfo.component';
import { EventsComponent } from './events/events.component';
import { EwebinarComponent } from './ewebinar/ewebinar.component';
import { FakenewsComponent } from './fakenews/fakenews.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PetitionComponent } from './petition/petition.component';
import { TakeactionComponent } from './takeaction/takeaction.component';
import { HistoryComponent } from './history/history.component';
import { AboutpresComponent } from './aboutpres/aboutpres.component';
import { HistoricalbgComponent } from './historicalbg/historicalbg.component';
import { HumanrightsComponent } from './humanrights/humanrights.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    ContactComponent,
    EventsComponent,
    TakeactionComponent,
    HomeComponent,
    BackgroundgifComponent,
    FakenewsComponent,
    DonateComponent,
    PetitionComponent,
    EventInfoComponent,
    CampaignComponent,
    EwebinarComponent,
    HistoryComponent,
    AboutpresComponent,
    HistoricalbgComponent,
    HumanrightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
