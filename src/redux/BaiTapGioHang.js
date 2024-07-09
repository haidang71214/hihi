import img1 from '../img/applephone.jpg'
const stateGioHang ={ 
  giohang :[],
  productDetail: {
    maSP: 1,
    tenSP: "VinSmart Live",
    hinhAnh:img1,
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    
  },

}

// lưu , sửa
const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
      case 'THEM_GIO_HANG':
          const gioHangThem = [...state.giohang];
          const indexThem = gioHangThem.findIndex(sanPham => sanPham.maSP === action.sanPhamDemo.maSP);
          if (indexThem !== -1) {
              gioHangThem[indexThem].soluong += 1;   
          } else {
              gioHangThem.push(action.sanPhamDemo);
          }
          return { ...state, giohang: gioHangThem };

      case 'XOA_GIO_HANG':
          if (!action.maSP) {
              return state; // Nếu không có maSP trong action, trả về state hiện tại
          }

          // Sao chép mảng gioHang để thay đổi
          const gioHangXoa = [...state.giohang];
          
          // Tìm vị trí của sản phẩm cần xóa
          const indexXoa = gioHangXoa.findIndex(sanPham => sanPham.maSP === action.maSP);

          // Nếu tìm thấy vị trí, xóa sản phẩm đó khỏi mảng gioHang
          if (indexXoa !== -1) {
              gioHangXoa.splice(indexXoa, 1);
          }

          // Trả về state mới với giohang đã cập nhật
          return { ...state, giohang: gioHangXoa };
          // them
        case "THEMM":
          const Plu = [...state.giohang];
          const indeThemBot = Plu.findIndex(sanpham => sanpham.maSP === action.maSP);
          if(indeThemBot !== -1){
            if(action.tangGiam === true){
                  Plu[indeThemBot].soluong +=1
            }else if(Plu[indeThemBot].soluong >0 && action.tangGiam === false){
                Plu[indeThemBot].soluong -= 1;
            }
     
            return {...state, giohang:Plu}
            
          }
          


        case 'THEM':
          return { ...state, productDetail: action.sanPhamDemo };
    // cập nhật lại mảng thêm khi nó click vô, gán lại giá trị cho productdetail


      default:
          return state;
  }
}

export default BaiTapGioHangReducer;
