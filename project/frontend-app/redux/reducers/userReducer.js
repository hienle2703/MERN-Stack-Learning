import { createReducer } from "@reduxjs/toolkit";

// Builder là 1 đối tượng để định nghĩa các case action của 1 reducer
// => Trực quan hơn là switch case truyền thống của reducer trước đây
export const userReducer = createReducer(
  {
    users: [],
  },
  (builder) => {
    builder
      .addCase("loginRequest", (state) => {
        state.loading = true;
      })
      .addCase("loadUserRequest", (state) => {
        state.loading = true;
      })
      .addCase("logoutRequest", (state) => {
        state.loading = true;
      })
      .addCase("registerRequest", (state) => {
        state.loading = true;
      });
    builder
      .addCase("loginSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload;
      })
      .addCase("loadUserSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase("logoutSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.message = action.payload;
        state.user = null;
      })
      .addCase("registerSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload;
      });
    builder
      .addCase("loginFail", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase("loadUserFail", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase("logoutFail", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
      })
      .addCase("registerFail", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      });

    // Get Users - Admin Only
    builder
      .addCase("getUsersRequest", (state) => {
        state.loading = true;
      })
      .addCase("getUsersSuccess", (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase("getUsersFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Delete User - Admin Only
    builder
      .addCase("deleteUserRequest", (state) => {
        state.loading = true;
      })
      .addCase("deleteUserSuccess", (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase("deleteUserFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder.addCase("clearError", (state) => {
      state.error = null;
    });
    builder.addCase("clearMessage", (state) => {
      state.message = null;
    });
  }
);
