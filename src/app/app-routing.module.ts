import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutpresComponent } from './aboutpres/aboutpres.component';
import { AppComponent } from './app.component';
import { BackgroundgifComponent } from './backgroundgif/backgroundgif.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { EventInfoComponent } from './event-info/eventinfo.component';
import { EventsComponent } from './events/events.component';
import { EwebinarComponent } from './ewebinar/ewebinar.component';
import { FakenewsComponent } from './fakenews/fakenews.component';
import { HistoricalbgComponent } from './historicalbg/historicalbg.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { HumanrightsComponent } from './humanrights/humanrights.component';
import { MainComponent } from './main/main.component';
import { PetitionComponent } from './petition/petition.component';
import { TakeactionComponent } from './takeaction/takeaction.component';

const routes: Routes = [
  
  {
    path:'app',
    component: AppComponent
  },
  {
    path:'backgroundgif',
    component: BackgroundgifComponent
  },
  {path:'home',
  component: HomeComponent
},
{path:'fakenews',
  component: FakenewsComponent
},
{path:'petition',
  component: PetitionComponent
},
{path:'donate',
  component: DonateComponent
},
    {path:'about',
    component: AboutComponent
  },
    {path:'takeaction',
  component: TakeactionComponent
},
{
  path:'main',
component: MainComponent
},
{
  path:'contact',
component: ContactComponent
},
{
  path:'events',
component: EventsComponent
},
{
  path:'eventinfo',
component: EventInfoComponent
},
{
  path:'campaign',
component: CampaignComponent
},
{
  path:'ewebinar',
component: EwebinarComponent
},
{
  path:'history',
component: HistoryComponent
},
{
  path:'aboutpres',
component: AboutpresComponent
},
{
  path:'historicalbg',
component: HistoricalbgComponent
},
{
  path:'humanrights',
component: HumanrightsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }