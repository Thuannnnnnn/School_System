import React from 'react'
import { CSidebar, CSidebarBrand } from '@coreui/react'
import AppSidebarInfo from './AppSidebarInfo'
import 'simplebar/dist/simplebar.min.css'

const AppSidebar = () => {
  return (
    <CSidebar position="fixed">
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img
          src="https://scontent.fvkg1-1.fna.fbcdn.net/v/t39.30808-1/416270138_925074129218911_5230489908088143444_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHPgNQCWUB6uRa9OVrOx2m7RP2gaKFPoHtE_aBooU-ge5uZArDi1HZrC04wjLK1haLJlCx31HFUgLUss2wLvch6&_nc_ohc=mxRW-7x2tlYQ7kNvgHQEHqT&_nc_ht=scontent.fvkg1-1.fna&oh=00_AYD8zIF1pcMXJzMxBxyWCygw3w9r9vpsqH91Ti4nMN1xZw&oe=66DA7E3D"
          className="rounded my-4"
          alt="avatar"
          style={{ width: '50%' }}
        />
      </CSidebarBrand>
      <AppSidebarInfo />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
