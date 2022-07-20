import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachGhe extends Component {
  renderTableList = () => {
    return this.props.listGhe.map((ele, index) => {
      if (!ele.daDat) {
        return (
          <tr key={index} className="list-seat">
            <td>
              {ele.soGhe}
            </td>
            <td>
              {ele.gia}
            </td>
            <td>
              <button
                onClick={() => {
                  this.props.DeleteGhe(ele);
                  this.props.UnselectecSeat(ele.soGhe);
                }}
                className="btn btn-danger">
                Hủy
              </button>
            </td>
          </tr>
        );
      }
    });
  };
  render() {
    return (
        <div>
          <div className="row col-12 mb-1">
            <div className="col-1 gheDuocChon">
            </div>
            <div className="col-9 text-white">
              <label>Ghế đã đặt</label>
            </div>
          </div>
          <div className="row col-12 mb-2">
            <div className="col-1 gheDangChon">
            </div>
            <div className="col-9 text-white">
              <label>Ghế đang chọn</label>
            </div>
          </div>
          <div className="row col-12 mb-2">
            <div className="col-1 gheChuaChon">
            </div>
            <div className="col-9 text-white">
              <label>Ghế chưa đặt</label>
            </div>
          </div>

          <div>
            <table className="table table-bordered text-white mt-3">
              <thead>
                <tr>
                  <th>Số ghế</th>
                  <th>Giá</th>
                  <th>Hủy</th>
                </tr>
              </thead>
              <tbody>{this.renderTableList()}</tbody>
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
    DeleteGhe: (type) => {
      dispatch({
        type: "DELETE_SEAT",
        payload: type,
      });
    },
    UnselectecSeat: (type) => {
      dispatch({
        type: "UNSELECTED_SEAT2",
        payload: type,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe);
