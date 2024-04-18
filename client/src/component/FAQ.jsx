import * as React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
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
    Links: ["/student/bieu-hoc-phi", "/student/thoi-khoa-bieu", "/student/xem-lich-thi"],
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
    Links: [
      "/student/tam-hoan",
      "/student/chuyen-lop",
      "/student/ho-tro-hoc",
      "/student/dang-ky-hoc-lai",
      "/student/gui-don",
    ],
  },
  {
    id: 3,
    Option: "Báo cáo điểm",
    Choose: ["Báo cáo điẻm danh", "Báo cáo điểm", "khung truong trình"],
    Links: ["/student/diem-danh", "http://localhost:3000/ScoreOfStudent", "/student/khung-truong-trinh"],
  },
  {
    id: 4,
    Option: "Others",
    Choose: [
      "Ý kiến về việc giảng dạy",
      "Các loại chứng chỉ",
      "Các tài liệu học tập",
    ],
    Links: ["/student/y-kien-giang-day", "/student/chung-chi", "/student/tai-lieu-hoc-tap"],
  },
];

const Teacher = [
  {
    id: 1,
    Option: "Quản lý lớp học",
    Choose: [
      "Xem danh sách sinh viên",
      "Tạo bảng điểm",
      "Gửi thông báo",
      "Điểm danh",
    ],
    Links: [
      "/teacher/danh-sach-sinh-vien",
      "/teacher/bang-diem",
      "/teacher/thong-bao",
      "/teacher/diem-danh",
    ],
  },
  {
    id: 2,
    Option: "Thời khóa biểu",
    Choose: ["Xem thời khóa biểu", "Sửa thời khóa biểu", "Điểm danh"],
    Links: ["/teacher/thoi-khoa-bieu", "/teacher/sua-thoi-khoa-bieu", "/teacher/diem-danh"],
  },
  {
    id: 3,
    Option: "Báo cáo và đánh giá",
    Choose: [
      "Xem báo cáo",
      "Đánh giá kết quả học tập của sinh viên",
      "Điểm danh",
    ],
    Links: ["/teacher/bao-cao", "/teacher/danh-gia", "/teacher/diem-danh"],
  },
  {
    id: 4,
    Option: "Hỗ trợ sinh viên",
    Choose: [
      "Hỗ trợ về học phí",
      "Giải đáp thắc mắc về chương trình học",
      "Điểm danh",
    ],
    Links: ["/teacher/ho-tro-hoc-phi", "/teacher/giai-dap-thac-mac", "/teacher/diem-danh"],
  },
];

export default function FAQ() {
  const { user } = UseRole("http://localhost:5000/Student/getAll");
  const [openId, setOpenId] = React.useState(null);

  const handleClick = (id) => {
    setOpenId(id === openId ? null : id);
  };
  let roleOptions = [];
  if (user && user.role === "Student") {
    roleOptions = Student;
  } else if (user && user.role === "Teacher") {
    roleOptions = Teacher;
  }

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
      {roleOptions.map((item) => (
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
                  {/* Wrap each ListItemButton with Link */}
                  <Link to={item.Links[index]+`/${user.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemText primary={Choose} />
                  </Link>
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
}
