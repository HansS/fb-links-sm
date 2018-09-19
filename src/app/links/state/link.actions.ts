import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Link } from './link.model';

export enum LinkActionTypes {
  LoadLinks = '[Link] Load Links',
  AddLink = '[Link] Add Link',
  UpsertLink = '[Link] Upsert Link',
  AddLinks = '[Link] Add Links',
  UpsertLinks = '[Link] Upsert Links',
  UpdateLink = '[Link] Update Link',
  UpdateLinks = '[Link] Update Links',
  DeleteLink = '[Link] Delete Link',
  DeleteLinks = '[Link] Delete Links',
  ClearLinks = '[Link] Clear Links'
}

export class LoadLinks implements Action {
  readonly type = LinkActionTypes.LoadLinks;

  constructor(public payload: { links: Link[] }) {}
}

export class AddLink implements Action {
  readonly type = LinkActionTypes.AddLink;

  constructor(public payload: { link: Link }) {}
}

export class UpsertLink implements Action {
  readonly type = LinkActionTypes.UpsertLink;

  constructor(public payload: { link: Link }) {}
}

export class AddLinks implements Action {
  readonly type = LinkActionTypes.AddLinks;

  constructor(public payload: { links: Link[] }) {}
}

export class UpsertLinks implements Action {
  readonly type = LinkActionTypes.UpsertLinks;

  constructor(public payload: { links: Link[] }) {}
}

export class UpdateLink implements Action {
  readonly type = LinkActionTypes.UpdateLink;

  constructor(public payload: { link: Update<Link> }) {}
}

export class UpdateLinks implements Action {
  readonly type = LinkActionTypes.UpdateLinks;

  constructor(public payload: { links: Update<Link>[] }) {}
}

export class DeleteLink implements Action {
  readonly type = LinkActionTypes.DeleteLink;

  constructor(public payload: { id: string }) {}
}

export class DeleteLinks implements Action {
  readonly type = LinkActionTypes.DeleteLinks;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearLinks implements Action {
  readonly type = LinkActionTypes.ClearLinks;
}

export type LinkActions =
 LoadLinks
 | AddLink
 | UpsertLink
 | AddLinks
 | UpsertLinks
 | UpdateLink
 | UpdateLinks
 | DeleteLink
 | DeleteLinks
 | ClearLinks;
