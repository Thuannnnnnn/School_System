import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";


export default function Event() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/Events/getEvents`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((event) => (
        <div className="flex justify-center pt-4">
          <Card key={event.id} sx={{ width: 300}}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 400,  width: 300}}
                image={event.E_Poster}
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  "{event.E_Name}"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nicee skillllll
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="flex justify-center">
              <Button size="small" color="primary">
                Đăng kí
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
}
