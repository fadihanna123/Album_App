export class ActionTypes {
  constructor(public type: string, public payload: void) {}
}

export class ListReducerTypes {
  constructor(public listReducer: { assets: [{}] }) {}
}

export class LoadingReducerTypes {
  constructor(public loadingReducer: boolean) {}
}

export class ViewReducerTypes {
  constructor(public viewReducer: boolean) {}
}

export class PhotoReducerTypes {
  constructor(public photoReducer: string) {}
}

export class RefreshReducerTypes {
  constructor(public refreshReducer: boolean) {}
}
