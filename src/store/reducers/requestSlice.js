import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/////// getTripPopular
export const getTripPopular = createAsyncThunk(
  "getTripPopular",
  async function (i, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/trips`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// getOurGids
export const getOurGids = createAsyncThunk(
  "getOurGids",
  async function (i, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/gids`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// getLastWeekTrip
export const getLastWeekTrip = createAsyncThunk(
  "getLastWeekTrip",
  async function (i, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/next_week`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// getTrasportList
export const getTrasportList = createAsyncThunk(
  "getTrasportList",
  async function (i, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/transports`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// getDiscountTrip
export const getDiscountTrip = createAsyncThunk(
  "getDiscountTrip",
  async function (i, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/discount_trips`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// getUserTrip
export const getUserTrip = createAsyncThunk(
  "getUserTrip",
  async function (i, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/recomendate_trips`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// addLocation
export const addLocation = createAsyncThunk(
  "addLocation",
  async function ({ data, getData }, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/addLocations`,
        data,
      });
      if (response.status >= 200 && response.status < 300) {
        setTimeout(() => {
          getData();
        }, 1000);
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// searchTrips
export const searchTrips = createAsyncThunk(
  "searchTrips",
  async function (search, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/seacrh_trips?name=${search}`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// detailedTrips
export const detailedTrips = createAsyncThunk(
  "detailedTrips",
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/trips/${id}`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// createSingTrip
export const createSingTrip = createAsyncThunk(
  "createSingTrip",
  async function (data, { rejectWithValue }) {
    console.log(data, "data");
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/create_order`,
        data,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  alertText: {
    text: "",
    backColor: "",
    state: false,
  },
  preloader: false,
  popularTrip: [],
  ourGids: [],
  lastWeekTrip: [],
  trasportList: [],
  discountTrip: [],
  userTrip: [],
  searchData: [],
  everyTrip: {},
};

const requestSlice = createSlice({
  name: "requestSlice",
  initialState,
  extraReducers: (builder) => {
    ///// getTripPopular
    /////
    builder.addCase(getTripPopular.fulfilled, (state, action) => {
      state.preloader = false;
      state.popularTrip = action.payload;
    });
    builder.addCase(getTripPopular.rejected, (state, action) => {
      state.error = action.payload;
      state.popularTrip = [];

      state.preloader = false;
      state.alertText = {
        text: "Упс, что-то пошло не так!",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(getTripPopular.pending, (state, action) => {
      state.preloader = true;
    });

    ///// getOurGids
    /////
    builder.addCase(getOurGids.fulfilled, (state, action) => {
      state.preloader = false;
      state.ourGids = action.payload;
    });
    builder.addCase(getOurGids.rejected, (state, action) => {
      state.error = action.payload;
      state.ourGids = [];

      state.preloader = false;
      state.alertText = {
        text: "Упс, что-то пошло не так!",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(getOurGids.pending, (state, action) => {
      state.preloader = true;
    });

    ///// getLastWeekTrip
    /////
    builder.addCase(getLastWeekTrip.fulfilled, (state, action) => {
      state.preloader = false;
      state.lastWeekTrip = action.payload;
    });
    builder.addCase(getLastWeekTrip.rejected, (state, action) => {
      state.error = action.payload;
      state.lastWeekTrip = [];

      state.preloader = false;
      state.alertText = {
        text: "Упс, что-то пошло не так!",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(getLastWeekTrip.pending, (state, action) => {
      state.preloader = true;
    });

    ///// getTrasportList
    /////
    builder.addCase(getTrasportList.fulfilled, (state, action) => {
      state.preloader = false;
      state.trasportList = action.payload;
    });
    builder.addCase(getTrasportList.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
      state.trasportList = [];
      state.alertText = {
        text: "Упс, что-то пошло не так!",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(getTrasportList.pending, (state, action) => {
      state.preloader = true;
    });

    ///// getDiscountTrip
    /////
    builder.addCase(getDiscountTrip.fulfilled, (state, action) => {
      state.preloader = false;
      state.discountTrip = action.payload;
    });
    builder.addCase(getDiscountTrip.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
      state.discountTrip = [];
      state.alertText = {
        text: "Упс, что-то пошло не так!",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(getDiscountTrip.pending, (state, action) => {
      state.preloader = true;
    });

    ///// getUserTrip
    /////
    builder.addCase(getUserTrip.fulfilled, (state, action) => {
      state.preloader = false;
      state.userTrip = action.payload;
    });
    builder.addCase(getUserTrip.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
      state.userTrip = [];
      state.alertText = {
        text: "Упс, что-то пошло не так!",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(getUserTrip.pending, (state, action) => {
      state.preloader = true;
    });

    ///// addLocation
    /////
    builder.addCase(addLocation.fulfilled, (state, action) => {
      state.preloader = false;
      state.alertText = {
        text: "Ваша локация была успешно добавлена",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(addLocation.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
      state.alertText = {
        text: "Упс, что-то пошло не так!",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(addLocation.pending, (state, action) => {
      state.preloader = true;
    });

    //////////searchTrips
    /////
    builder.addCase(searchTrips.fulfilled, (state, action) => {
      state.preloader = false;
      state.searchData = action.payload;
    });
    builder.addCase(searchTrips.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
      state.alertText = {
        text: "Упс, что-то пошло не так!",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(searchTrips.pending, (state, action) => {
      state.preloader = true;
    });

    ///////////////detailedTrips
    /////
    builder.addCase(detailedTrips.fulfilled, (state, action) => {
      state.preloader = false;
      state.everyTrip = action.payload;
    });
    builder.addCase(detailedTrips.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
      state.alertText = {
        text: "Упс, что-то пошло не так!",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(detailedTrips.pending, (state, action) => {
      state.preloader = true;
    });

    /////////////createSingTrip
    /////
    builder.addCase(createSingTrip.fulfilled, (state, action) => {
      state.preloader = false;
      state.alertText = {
        text: "Ваша запись успешно сохранена! Ожидайте звонка Турагентства",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(createSingTrip.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
      state.alertText = {
        text: "Упс, что-то пошло не так!",
        backColor: "#f9fafd",
        state: true,
      };
    });
    builder.addCase(createSingTrip.pending, (state, action) => {
      state.preloader = true;
    });
  },
  reducers: {
    alertFN: (state, action) => {
      state.alertText = action.payload;
    },
    clearSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});
export const { alertFN, clearSearchData } = requestSlice.actions;

export default requestSlice.reducer;
