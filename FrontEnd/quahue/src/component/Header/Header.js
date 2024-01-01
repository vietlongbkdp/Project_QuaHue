import './HeaderStyle.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHelmetSafety, faLocationDot, faMagnifyingGlass, faPhone, fas, faUser} from '@fortawesome/free-solid-svg-icons'
import {faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from './logo.png';
import {Button, Col, Form, Row} from "react-bootstrap";
library.add(fas, faFontAwesome)
export default function Header(){
    return(
      <div className={"container-fluid header-flu"}>
          <div className={"container pt-2"}>
              <div className={"d-flex justify-content-between"}>
                  <p className={"fw-bold"}>HỆ THỐNG ĐẶT HÀNG ĐẶC SẢN HUẾ - MÓN QUÀ HUẾ TRỰC TUYẾN SỐ 1 HUẾ</p>
                  <div className={"d-flex justify-content-between"}>
                      <div className={"fw-bold mx-2"}><FontAwesomeIcon icon={faUser} className={"mx-2"}/>Tài khoản</div>
                      <div className={"fw-bold mx-2"}><FontAwesomeIcon icon={faHelmetSafety} className={"mx-2"}/>Sản phẩm</div>
                      <div className={"fw-bold mx-2"}><FontAwesomeIcon icon={faLocationDot} className={"mx-2"}/>Hệ thống cửa hàng</div>
                  </div>
              </div>
              <div className={"d-flex justify-content-between"}>
                  <img src={logo} alt="Logo" style={{width: 250}}/>
                  <div className={"d-flex my-auto search-product"}>
                          <Form.Control
                              type="text"
                              id="inputSearch"
                              placeholder={"Tìm kiếm sản phẩm..."}
                          />
                      <Button variant="outline-secondary" className={"buttonSearch"}><FontAwesomeIcon icon={faMagnifyingGlass} className={"fw-bold fs-5"}/></Button>{' '}
                  </div>
                  <div className={"fw-bold d-flex my-auto"}>
                      <div className={"mx-3 my-auto"}>
                          <FontAwesomeIcon icon={faPhone}/>
                      </div>
                      <div>
                          <div>NHẬN ĐẶT HÀNG</div>
                          <div>0913.331.916</div>
                      </div>
                  </div>
              </div>
              <div></div>
          </div>
      </div>
    )
}