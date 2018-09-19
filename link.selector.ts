"import { createFeatureSelector, createSelector } from "@ngrx/store"; import * as fromlink from "./link.reducer"; export const selectlinkState = createFeatureSelector<fromlink.State>("link"); export const getSelectedlinkId = (state: fromlink.State) => state.selectedlinkId; export const selectlinkIds = createSelector(selectlinkState,fromlink.selectlinkIds); export const selectlinkEntities = createSelector(selectlinkState,fromlink.selectlinkEntities);export const selectAlllinks = createSelector(selectlinkState,fromlink.selectAlllinks); export const selectlinkTotal = createSelector(selectlinkState,fromlink.selectlinkTotal); export const selectCurrentlinkId = createSelector(selectlinkState,fromlink.getSelectedlinkId);export const selectCurrentlink = createSelector(selectlinkEntities,selectCurrentlinkId,(entities, id) => entities[id]);" 