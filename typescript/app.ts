import {TDiaDiem, THoChiMinh, TmienTaysongnuoc, THaNoi} from './data.js'
import {hochiminh_arr, mienTaysongnuoc_arr, hanoi_arr} from './data.js'

 const hien1HoChiMinh = ( hochiminh: THoChiMinh) => {
     return `<div>
<h4>Địa điểm: ${hochiminh .diadiem} </h4>
<img src="${hochiminh .hinh}">
<p>Địa chỉ:   ${hochiminh .diachi} </p>
<p>Ghi chú:   ${hochiminh .ghichu}</p>
</div>`;
}

export const showlisthochiminh = () => {
      const html_arr =hochiminh_arr.map(hien1HoChiMinh); // call back
      return html_arr.join("");
     let str=``;
     hochiminh_arr.forEach( hochiminh => str+=hien1HoChiMinh(hochiminh));
     return str;
}

const hien1mienTaysongnuoc = (mienTaysongnuoc:TmienTaysongnuoc) =>{
     return `<div>
      <h4>Địa điểm: ${mienTaysongnuoc .diadiem} </h4>
      <img src="    ${mienTaysongnuoc. hinh}">
      <p>Địa chỉ:   ${mienTaysongnuoc .diachi} </p>
      <p>Ghi chú:   ${mienTaysongnuoc .ghichu}</p>
</div>`;
}
export const showlistmientay = () => {
       const html_arr = mienTaysongnuoc_arr.map(hien1mienTaysongnuoc);
       return html_arr.join("");
}

const hien1hanoi = (hanoi:THaNoi) =>{
     return `<div>
      <h4>Địa điểm: ${hanoi .diadiem} </h4>
      <img src="${hanoi.hinh}">
      <p>Địa chỉ:   ${hanoi .diachi} </p>
      <p>Ghi chú:   ${hanoi .ghichu}</p>
</div>`;
}
export const showlisthanoi = ()=>{
      const html_arr =hanoi_arr.map(hien1hanoi);
      return html_arr.join("");
     }
