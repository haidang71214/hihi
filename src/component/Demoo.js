import React, { Component } from 'react'
import { connect } from 'react-redux'


class Demoo extends Component {
  render() {
    const { sanPhamDemo } = this.props;
    return (
      <div className='row'>

        <div className='col4'><img alt='hihi' style={{width:'500px'}}  src={this.props.sanPhamDemo.hinhAnh}></img></div>
        <div className='col-8'>
        <ul className='product-details'>
          <li><strong>Tên:</strong> {sanPhamDemo.tenSP}</li>
          <li><strong>Màn Hình:</strong> {sanPhamDemo.manHinh}</li>
          <li><strong>Hệ Điều Hành:</strong> {sanPhamDemo.heDieuHanh}</li>
          <li><strong>Camera Trước:</strong> {sanPhamDemo.cameraTruoc}</li>
          <li><strong>Camera Sau:</strong> {sanPhamDemo.cameraSau}</li>
          <li><strong>RAM:</strong> {sanPhamDemo.ram}</li>
          <li><strong>ROM:</strong> {sanPhamDemo.rom}</li>
          <li><strong>Giá Bán:</strong> {sanPhamDemo.giaBan.toLocaleString('vn-VI')} VND</li>
        </ul>
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    sanPhamDemo :  state.productDetail
  }
} 
// lấy dữ liệu xuống

export default connect(mapStateToProps,null)(Demoo);