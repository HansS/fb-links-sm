import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Link } from "./link.model";
import { LinkActions, LinkActionTypes } from "./link.actions";

export interface LinkState extends EntityState<Link> {
  // additional entities state properties
  selectedLinkId: number | null;
}

export const adapter: EntityAdapter<Link> = createEntityAdapter<Link>();

export const initialState: LinkState = adapter.getInitialState({
  // additional entity state properties
  selectedLinkId: null
});

export function reducer(state = initialState, action: LinkActions): LinkState {
  switch (action.type) {
    case LinkActionTypes.AddLink: {
      return adapter.addOne(action.payload.link, state);
    }

    case LinkActionTypes.UpsertLink: {
      return adapter.upsertOne(action.payload.link, state);
    }

    case LinkActionTypes.AddLinks: {
      return adapter.addMany(action.payload.links, state);
    }

    case LinkActionTypes.UpsertLinks: {
      return adapter.upsertMany(action.payload.links, state);
    }

    case LinkActionTypes.UpdateLink: {
      return adapter.updateOne(action.payload.link, state);
    }

    case LinkActionTypes.UpdateLinks: {
      return adapter.updateMany(action.payload.links, state);
    }

    case LinkActionTypes.DeleteLink: {
      return adapter.removeOne(action.payload.id, state);
    }

    case LinkActionTypes.DeleteLinks: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case LinkActionTypes.LoadLinks: {
      return adapter.addAll(action.payload.links, state);
    }

    case LinkActionTypes.ClearLinks: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
