import axios from "axios";
import { domain, token } from "../config/setting";
export class QuanLyNguoiDung {
  dangNhap = (userLogin) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: userLogin,
    });
  };
  dangKy = (thongTin) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: thongTin,
    });
  };
  layThongTinTaiKhoan = (taiKhoan) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: taiKhoan,
    });
  };
  datVe = (thongTinDatVe) => {
    return axios({
      url: `${domain}/quanlydatve/datve`,
      method: "POST",
      data: thongTinDatVe,
      headers: {
        Authorization: "DSer " + localStorage.getItem(token),
      },
    });
  };

  layBinhLuan = () => {
    return axios({
      url: "https://6012814854044a00172dc0ee.mockapi.io/comment",
      method: "GET",
    });
  };

  themBinhLuan = (binhLuan) => {
    return axios({
      url: "https://6012814854044a00172dc0ee.mockapi.io/comment",
      method: "POST",
      data: binhLuan,
    });
  };
  thongTinTaiKhoan = (taiKhoan) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: taiKhoan,
    });
  };
}
export const qlyNguoiDung = new QuanLyNguoiDung();
