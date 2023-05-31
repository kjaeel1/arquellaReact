import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: any = {  };

export const SessionSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    Session_Reducer_SetToken: (state, action: PayloadAction<string>) => {
    //   const token = action.payload;
    //   const decodedToken: any = jwtDecode(action.payload);
    //   const webName: string = decodedToken.WebName;
    //   const backendAppversion: string = decodedToken.appversion;
    //   const deeplink: string = decodedToken.deeplink;
    //   const webID: string = decodedToken.WebId;
    //   let versionDifferenceToBackend = false;
    //   // || process.env.NODE_ENV === 'development'
    //   if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //     versionDifferenceToBackend = false;
    //   } else {
    //     versionDifferenceToBackend = backendAppversion !== state.DeployInfo?.Version;
    //   }

    //   if (versionDifferenceToBackend) {
    //     state.VersionDifferenceToBackend = true;
    //     state.NewBackendVersion = backendAppversion;
    //   }
    //   state.isLoggedIn = true;
    //   state.JwtToken = token;
    //   state.WebName = webName;
    }
  },
})

export const {  Session_Reducer_SetToken, } = SessionSlice.actions



