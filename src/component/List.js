import React, { Component } from 'react'
import img1 from "../img/vsphone.jpg";
import img2 from '../img/meizuphone.jpg';
import img3 from '../img/applephone.jpg';
import Item from './Item';

export default class List extends Component {
    mangSanPham = [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          manHinh: "AMOLED, 6.2, Full HD+",
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 5700000,
          hinhAnh: img1,
        },
        {
          maSP: 2,
          tenSP: "Meizu 16Xs",
          manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
          heDieuHanh: "Android 9.0 (Pie); Flyme",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 7600000,
          hinhAnh: img2,
        },
        {
          maSP: 3,
          tenSP: "Iphone XS Max",
          manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
          heDieuHanh: "iOS 12",
          cameraSau: "Chính 12 MP & Phụ 12 MP",
          cameraTruoc: "7 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 27000000,
          hinhAnh: img3,
        },
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
