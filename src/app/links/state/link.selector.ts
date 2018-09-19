import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromlink from "./link.reducer";
export const selectLinkState = createFeatureSelector<fromlink.LinkState>(
  "link"
);
export const getSelectedLinkId = (state: fromlink.LinkState) =>
  state.selectedLinkId;
export const selectlinkIds = createSelector(
  selectLinkState,
  fromlink.selectIds
);
export const selectLinkEntities = createSelector(
  selectLinkState,
  fromlink.selectEntities
);
export const selectAllLinks = createSelector(
  selectLinkState,
  fromlink.selectAll
);
export const selectlinkTotal = createSelector(
  selectLinkState,
  fromlink.selectTotal
);

export const selectCurrentLink = createSelector(
  selectLinkEntities,
  getSelectedLinkId,
  (entities, id) => entities[id]
);
