import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modalcard extends Component {
  rendersth = () => {
    return this.props.giohang.map((item, index) => { 
      return (
        <tr key={index}>
        
          <td>{item.maSP}</td>
          <td><img src={item.hinhAnh} alt={item.tenSP} width="50" height="50" /></td>
          <td>{item.tenSP}</td>
          <td><button className='btn btn-success' onClick={() =>{this.props.themSoLuong(item.maSP,false)}}>-</button>{item.soluong}<button className='btn btn-success' onClick={()=>{this.props.themSoLuong(item.maSP,true)}}>+</button></td>
          <td>{item.giaBan.toLocaleString('vi-VN')}</td>
          <td>{(item.soluong * item.giaBan).toLocaleString('vi-VN')}</td>
          <td>
  <button onClick={() => this.props.xoaGioHang(item.maSP)} className='btn btn-danger'>Xóa</button>
</td>
  </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content" style={{width:'1500px', marginLeft:'-450px' }} >
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Ma SP</th>
                        <th>Anh</th>
                        <th>Ten SP</th>
                        <th>Soluong</th>
                        <th>Gia</th>
                        <th>Tong</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.rendersth()}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    xoaGioHang : (maSP) =>{
      let action = {
        type:'XOA_GIO_HANG',
        maSP,
      } 
      dispatch(action);
    },
    themSoLuong : (maSP,giatri) => { 
      let action = { 
        tangGiam: giatri,
        type:'THEMM',
        maSP,
      }
      dispatch(action)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    giohang: state.giohang // Đảm bảo rằng "giohang" là thuộc tính trong state
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modalcard);
