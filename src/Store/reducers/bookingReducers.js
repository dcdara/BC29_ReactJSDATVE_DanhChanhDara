import dataBooking from "../../Data/danhSachGhe.json";

const DEFAULT_STATE = {
  selectedSeat: "",
  data: dataBooking,
  listGhe: [],
};
export const bookingReducers = (state = DEFAULT_STATE, { type, payload }) => {
  // console.log(state.listGhe);
  switch (type) {
    case "SELECTED_SEAT": {

      const hang = state.data.find((ele) => ele.hang === payload.hang);
      hang.danhSachGhe = hang.danhSachGhe.map((ghe) => {
        if (ghe.soGhe === payload.soGhe) {
          if (ghe.daDat) {
            const dataSeat = [...state.listGhe];
            const indx = dataSeat.findIndex(
              (ele) => ele.soGhe === payload.soGhe
            );

            dataSeat.splice(indx, 1);
            state.listGhe = dataSeat;
          }
          return { ...ghe, daDat: !ghe.daDat };
        }
        return ghe;
      });
      state.data = [...state.data];
      return { ...state };
    }

    case "DELETE_SEAT": {
      const dataSeat = [...state.listGhe];
      const indx = dataSeat.findIndex((ele) => ele.soGhe === payload.soGhe);

      dataSeat.splice(indx, 1);
      state.listGhe = dataSeat;
      return { ...state };
    }
    case "UNSELECTED_SEAT2": {
      state.selectedSeat = payload;

      state.data.map((ele) => {
        ele.danhSachGhe.map((seat) => {
          if (seat.soGhe === state.selectedSeat) {
            seat.daDat = false;
            state.selectedSeat = "";
          }
        });
      });
      return { ...state };
    }
    default:
      return state;
  }
};
