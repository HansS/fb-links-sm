import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import * as fromLink from "../links/state/link.reducer";

export interface State {
  link: fromLink.LinkState;
}

export const reducers: ActionReducerMap<State> = {
  link: fromLink.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
