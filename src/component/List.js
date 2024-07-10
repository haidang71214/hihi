import React, { Component } from 'react'
import img1 from "../img/vsphone.jpg";
import img2 from '../img/meizuphone.jpg';
import img3 from '../img/applephone.jpg';
import img4 from '../img/anh4.jpg'; // Thêm ảnh mới
import img5 from '../img/anh5.jpg'; // Thêm ảnh mới
import img6 from '../img/anh6.jpg'; // Thêm ảnh mới
import img7 from '../img/anh7.jpg'; // Thêm ảnh mới
import img8 from '../img/anh8.jpg';
import img9 from '../img/anh9.jpg'
import Item from './Item';

export default class List extends Component {
    mangSanPham = [
      {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2, Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": img1
      },
      {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": img2
      },
      {
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": img3
      },
      {
        "maSP": 4,
        "tenSP": "Samsung Galaxy S20",
        "manHinh": "Dynamic AMOLED 2X, 6.2, Quad HD+",
        "heDieuHanh": "Android 10",
        "cameraTruoc": "10 MP",
        "cameraSau": "Chính 12 MP & Phụ 64 MP, 12 MP",
        "ram": "8 GB",
        "rom": "128 GB",
        "giaBan": 20000000,
        "hinhAnh": img4
      },
      {
        "maSP": 5,
        "tenSP": "OnePlus 8 Pro",
        "manHinh": "Fluid AMOLED, 6.78, Quad HD+",
        "heDieuHanh": "Android 10",
        "cameraTruoc": "16 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 48 MP, 5 MP",
        "ram": "12 GB",
        "rom": "256 GB",
        "giaBan": 18000000,
        "hinhAnh": img5
      },
      {
        "maSP": 6,
        "tenSP": "Google Pixel 4 XL",
        "manHinh": "P-OLED, 6.3, Quad HD+",
        "heDieuHanh": "Android 10",
        "cameraTruoc": "8 MP",
        "cameraSau": "Chính 12.2 MP & Phụ 16 MP",
        "ram": "6 GB",
        "rom": "64 GB",
        "giaBan": 15000000,
        "hinhAnh": img6
      },
      {
        "maSP": 7,
        "tenSP": "Huawei P40 Pro",
        "manHinh": "OLED, 6.58, Quad HD+",
        "heDieuHanh": "Android 10, EMUI 10.1",
        "cameraTruoc": "32 MP",
        "cameraSau": "Chính 50 MP & Phụ 12 MP, 40 MP, TOF",
        "ram": "8 GB",
        "rom": "256 GB",
        "giaBan": 23000000,
        "hinhAnh": img7
      }
      ,
      {
        "maSP": 8,
        "tenSP": "Huawei P40 Pro",
        "manHinh": "OLED, 6.58, Quad HD+",
        "heDieuHanh": "Android 10, EMUI 10.1",
        "cameraTruoc": "32 MP",
        "cameraSau": "Chính 50 MP & Phụ 12 MP, 40 MP, TOF",
        "ram": "8 GB",
        "rom": "256 GB",
        "giaBan": 23000000,
        "hinhAnh": img8
      },
      {
        "maSP": 9,
       "tenSP": "VinSmart Live",
    "manHinh": "AMOLED, 6.2, Full HD+",
    "heDieuHanh": "Android 9.0 (Pie)",
    "cameraTruoc": "20 MP",
    "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
    "ram": "4 GB",
    "rom": "64 GB",
    "giaBan": 5700000,
        "hinhAnh": img9,
      }
      
    ];
      
      renderList = () =>{
         return this.mangSanPham.map((item,index) => { 
           return <div className='col-4' key={index}>
            <Item item={item}/>
           </div>
         })
      }

  render() {
    return (
      <div className='row'>{this.renderList()}</div>
    )
  }
}
