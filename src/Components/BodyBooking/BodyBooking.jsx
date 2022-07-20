import React, { Component } from "react";
import dataBooking from "../../Data/danhSachGhe.json";
import { connect } from "react-redux";

class BodyBooking extends Component {
  renderRowNumber = () => {
    return dataBooking.map((ele) => {

      if (ele.hang === "") {

        return ele.danhSachGhe.map((numberSeat) => {
          return (
            <th className="rowNumber"
              key={numberSeat.soGhe}
            >
              {numberSeat.soGhe}
            </th>
          );
        });
      }
    });
  };
  renderRow = () => {
    return dataBooking.map((ele, index) => {
      if (ele.hang !== "") {
        return (
          <tr className="rowNumber" key={index} >
            <td>{ele.hang}</td>

            {ele.danhSachGhe.map((seat, index) => {
              return (
                <td key={index}>
                  <button className={`ghe ${seat.daDat ? "gheDuocChon" : ""}`}
                    key={index}
                    onClick={() => {
                      this.props.selectecSeat({
                        hang: ele.hang,
                        soGhe: seat.soGhe,
                      });

                      this.props.listGhe.push(seat);
                    }}
                  >
                    {seat.soGhe}
                  </button>
                </td>
              );
            })}
          </tr>
        );
      }
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-auto">
        <table>
          <thead>
            <tr>
              <th></th>
              {this.renderRowNumber()}
            </tr>
          </thead>
          <tbody>{this.renderRow()}</tbody>
        </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    ...state.bookingReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectecSeat: (type) => {
      dispatch({
        type: "SELECTED_SEAT",
        payload: type,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BodyBooking);
