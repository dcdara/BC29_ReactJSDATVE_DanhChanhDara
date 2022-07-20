import React, { Component } from 'react'
import BodyBooking from '../BodyBooking/BodyBooking'
import DanhSachGhe from '../BodyBooking/DanhSachGhe/DanhSachGhe'
import HeaderBooking from '../HeaderBooking/HeaderBooking'

export default class Container extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className="row col-12">
                    <HeaderBooking />
                    <div className="container-left col-8">
                        <div className="title-seat screen ">
                            <p>Màn hình</p>
                        </div>
                        <div className="list-body">
                            <BodyBooking />
                        </div>
                    </div>
                    <div className="container-right col-4">
                        <div className="seat-selected mb-4">
                            <p>Danh sách ghế bạn chọn</p>
                        </div>
                        <DanhSachGhe />
                    </div>
                </div>

                <div className="container-bottom">

                </div>
            </div>
        )
    }
}
