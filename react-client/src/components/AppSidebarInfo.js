import React from 'react'
import { CCard, CCardBody, CRow, CCol } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

const AppSidebarInfo = () => {
  return (
    <CCard className="bg-transparent shadow-none mt-5">
      <CCardBody className="text-white">
        <CRow>
          <CCol md={4}>
            <strong>Họ Và Tên:</strong>
          </CCol>
          <CCol md={8}>Trần Quốc Thuận</CCol>
        </CRow>
        <CRow className="mt-2">
          <CCol md={4}>
            <strong>Ngày Sinh:</strong>
          </CCol>
          <CCol md={8}>26/5/2003</CCol>
        </CRow>
        <CRow className="mt-2">
          <CCol md={4}>
            <strong>Địa Chỉ:</strong>
          </CCol>
          <CCol md={8}>Phú Quốc</CCol>
        </CRow>
        <CRow className="mt-2">
          <CCol md={4}>
            <strong>Số Điện Thoại:</strong>
          </CCol>
          <CCol md={8}>0941646254</CCol>
        </CRow>
        <CRow className="mt-2">
          <CCol md={4}>
            <strong>Email:</strong>
          </CCol>
          <CCol md={8}>tranquocthuan2003@gmail.com</CCol>
        </CRow>
        <CRow className="mt-2">
          <CCol md={4}>
            <strong>Lớp:</strong>
          </CCol>
          <CCol md={8}>10A5</CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default AppSidebarInfo
