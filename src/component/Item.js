import React, { Component } from "react";
import { connect } from "react-redux";

 class Item extends Component {
  render() {
    return (
      <div>
        <div className="card text-left" style={{height:'300px'}}>
          <img style={{width:'100px'}}
            className="card-img-top"
            src={this.props.item.hinhAnh}
            alt={this.props.item.tenSP}
          />
          <div className="card-body">
            <h4 className="card-title">
              {this.props.item.tenSP}
            </h4>
            <p className="card-text">
              {this.props.item.giaBan.toLocaleString('vn-VI') } VND
            </p>
            <button onClick={() => {this.props.themGioHang(this.props.item)}} style={{marginBottom:"20px"}} className="btn btn-success">Thêm vào giỏ hàng</button>
            <br></br>
            <button onClick={() => {this.props.hienHon(this.props.item)}} className="btn btn-success"></button>
            
          </div>
        </div>
      </div>
    );
  }
}
// gửi dữ liệu lên :
const mapDispatchToProps = (dispatch) => { 
  return { 
    themGioHang : (sanPham) => {
      let sanPhamDemo = { 
          maSP : sanPham.maSP,
          tenSP : sanPham.tenSP,
          hinhAnh : sanPham.hinhAnh,
          giaBan : sanPham.giaBan,
          soluong: 1,
      }
      let action = { 
          type:'THEM_GIO_HANG',
          sanPhamDemo
      }
      dispatch(action);
    },
    hienHon : (sanPham) => { 
      let sanPhamDemo = { 

        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh : sanPham.hinhAnh,
        manHinh: sanPham.manHinh ,
        heDieuHanh: sanPham.heDieuHanh ,
        cameraTruoc: sanPham.cameraTruoc,
        cameraSau: sanPham.cameraSau,
        ram: sanPham.ram,
        rom: sanPham.rom,
        giaBan: sanPham.giaBan,
    }
    let action = { 
        type:'THEM',
        sanPhamDemo
    }
    dispatch(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(Item);