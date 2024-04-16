import * as React from "react";
import UseRole from "../hooks/UserRole";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const Student = [
  {
    id: 1,
    Option: "Tra cứu thông tin",
    Choose: ["Biểu học phí", "Thời khóa biểu từng tuần", "Xem lịch thi"],
  },
  {
    id: 2,
    Option: "Thủ tục/đơn từ",
    Choose: [
      "Xin tạm hoãn tiến độ một học kỳ để học lại | Hủy bỏ việc xin tạm hoãn",
      "Xin chuyển lớp",
      "Đăng ký học cải thiện điểm",
      "Đăng ký học lại | Hủy đăng ký học",
      "Gửi đơn | Xem đơn",
    ],
  },
  {
    id: 3,
    Option: "Báo cáo điểm",
    Choose: ["Báo cáo điẻm danh", "Báo cáo điểm", "khung truong trình"],
  },
  {
    id: 4,
    Option: "Others",
    Choose: [
      "Ý kiến về việc giảng dạy",
      "Các loại chứng chỉ",
      "Các tài liệu học tập",
    ],
  },
];

const Teacher = [
  {
    id: 1,
    Option: "Quản lý lớp học",
    Choose: ["Xem danh sách sinh viên", "Tạo bảng điểm", "Gửi thông báo", "Điểm danh"],
  },
  {
    id: 2,
    Option: "Thời khóa biểu",
    Choose: ["Xem thời khóa biểu", "Sửa thời khóa biểu", "Điểm danh"],
  },
  {
    id: 3,
    Option: "Báo cáo và đánh giá",
    Choose: ["Xem báo cáo", "Đánh giá kết quả học tập của sinh viên", "Điểm danh"],
  },
  {
    id: 4,
    Option: "Hỗ trợ sinh viên",
    Choose: ["Hỗ trợ về học phí", "Giải đáp thắc mắc về chương trình học", "Điểm danh"],
  },
];


export default function FAQ() {
  const { data, user } = UseRole(); 

  const [openId, setOpenId] = React.useState(null);

  const handleClick = (id) => {
    setOpenId(id === openId ? null : id);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="Academic Information"
      subheader={
        <ListSubheader component="div" id="Academic Information">
          <p className="text-2xl p-4">Academic Information</p>
        </ListSubheader>
      }
    >
      {Student.map((item) => (
        <React.Fragment key={item.id}>
          <ListItemButton onClick={() => handleClick(item.id)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.Option} />
            {openId === item.id ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openId === item.id} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.Choose.map((Choose, index) => (
                <ListItemButton key={index} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={Choose} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
}
