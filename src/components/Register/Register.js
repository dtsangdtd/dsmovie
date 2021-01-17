import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Register/Register.scss";
import { qlyNguoiDung } from "../../services/QuanLyNguoiDungServices";
import { groupID } from "../../config/setting";
import swal from "sweetalert";
import Logo_sign_up from "../../images/Logo_sign_up.png";
export default class Register extends Component {
  state = {
    values: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "KhachHang",
      maNhom: groupID,
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
    },
  };

  handleChangeInput = (event) => {
    var { value, name } = event.target;
    //tạo ra object this.state.values mới
    let newValues = {
      ...this.state.values,
      [name]: value,
    };
    //set trường hợp rỗng
    //tạo ra object this.state.errors mới
    let newErrors = {
      ...this.state.errors,
      [name]: value === "" ? "Thông tin không được để trống!" : "",
    };
    // Lỗi email
    if (name === "email") {
      let regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
      if (value.match(regexEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Email không hợp lệ";
      }
    }
    //Lỗi mật khẩu
    if (name === "matKhau") {
      let regexMatKhau = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (value.match(regexMatKhau)) {
        newErrors.matKhau = "";
      } else {
        newErrors.matKhau = "Mật khẩu không hợp lệ";
      }
    }
    //Lỗi tên
    if (name === "hoTen") {
      let regexHoTen = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
      if (value.match(regexHoTen)) {
        newErrors.hoTen = "";
      } else {
        newErrors.hoTen = "Tên không hợp lệ";
      }
    }
    //Lỗi số điện thoại
    if (name === "soDT") {
      let regexPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
      if (value.match(regexPhone)) {
        newErrors.soDT = "";
      } else {
        newErrors.soDT = "Số điện thoại không hợp lệ";
      }
    }
    //setState lại values và errors
    this.setState({ values: newValues, errors: newErrors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    let { values, errors } = this.state;
    for (let key in values) {
      if (values[key] === "") {
        // kiểm tra lỗi
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("Thông tin không hợp lệ");
      return;
    }
    // Connect API
    let { navigator } = this.props;
    qlyNguoiDung
      .dangKy(values)
      .then((res) => {
        swal({
          title: "Đăng ký thành công",
          icon: "success",
          button: "OK",
        });
        navigator.history.push("/login");
      })
      .catch((err) => {
        swal({
          title: err.response.data,
          text: "Điền lại thông tin!",
          icon: "warning",
          button: "OK",
        });
      });
  };

  render() {
    return (
      <section className="background__user">
        <div className="container-fluid">
          <div className="registerForm">
            <div className="img__logo">
              <NavLink className="img__link" to="/">
                <img src={Logo_sign_up} alt="logo" />
              </NavLink>
            </div>
            <div className="formSocial">
              <form className="formRegister">
                <div className="form-group">
                  <input
                    className="input"
                    name="taiKhoan"
                    placeholder="Tên tài khoản"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.taiKhoan}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="matKhau"
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.matKhau}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="hoTen"
                    type="text"
                    placeholder="Họ tên"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.hoTen}</span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.email}</span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="soDT"
                    type="text"
                    placeholder="Số điện thoại"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.soDT}</span>
                </div>
                <div className="form-group">
                  <button
                    className="btnLogin"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Đăng ký
                  </button>
                </div>
                <div className="form-group">
                  <NavLink className="text-light" to="/login">
                    Bạn đã có tài khoản?
                  </NavLink>
                </div>
              </form>
            </div>
            <NavLink className="close__btn" to="/"></NavLink>
          </div>
        </div>
      </section>
    );
  }
}
