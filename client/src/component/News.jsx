import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import ListSubheader from "@mui/material/ListSubheader";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
const News = (props) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/News/getNew`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <p className="text-2xl p-4"> Thông Báo trong tháng </p>
        </ListSubheader>
      }
    >
      {data.map((data) => (
        <a href={data.N_LinkDetail}>
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={data.N_Description} />
          </ListItemButton>
        </a>
      ))}
      <div className="flex justify-center">
        <div href="#" >
          <ListItemButton>
            <ListItemIcon>
              <KeyboardDoubleArrowDownRoundedIcon />
              <div className="flex justify-between">
                <ListItemText primary="Xem thêm" />
              </div>
            </ListItemIcon>
          </ListItemButton>
        </div>
      </div>
    </List>
  );
};

export default News;
