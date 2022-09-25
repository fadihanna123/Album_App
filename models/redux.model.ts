import { Album } from './album.model';

export class ActionTypes {
  constructor(public type: string, public payload: void) {}
}

export class ListReducerTypes {
  constructor(public listReducer: { assets: [Record<string, never>] }) {}
}

export class LoadingReducerTypes {
  constructor(public loadingReducer: boolean) {}
}

export class ViewReducerTypes {
  constructor(public viewReducer: boolean) {}
}

export class ViewInfoReducerTypes {
  constructor(public viewInfoReducer: boolean) {}
}

export class PhotoReducerTypes {
  constructor(public photoReducer: string) {}
}

export class RefreshReducerTypes {
  constructor(public refreshReducer: boolean) {}
}

export class SelectedPhotoReducerTypes {
  constructor(public selectedPhotoReducer: Album) {}
}
