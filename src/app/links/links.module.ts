import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LinksRoutingModule } from "./links-routing.module";
import { LinksComponent } from "./links.component";
import { LinkListComponent } from "./components/link-list/link-list.component";
import { LinkAddComponent } from "./components/link-add/link-add.component";
import { LinkEditComponent } from "./components/link-edit/link-edit.component";
import { LinkDetailsComponent } from "./components/link-details/link-details.component";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromLink from "./state/link.reducer";
import { LinkEffects } from "./state/link.effects";
import * as fromLink from './state/link.reducer';

@NgModule({
  imports: [
    CommonModule,
    LinksRoutingModule,
    StoreModule.forFeature("link", fromLink.reducer),
    EffectsModule.forFeature([LinkEffects]),
    StoreModule.forFeature('link', fromLink.reducer)
  ],
  declarations: [
    LinksComponent,
    LinkListComponent,
    LinkAddComponent,
    LinkEditComponent,
    LinkDetailsComponent
  ]
})
export class LinksModule {}
