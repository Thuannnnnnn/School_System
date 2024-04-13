import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import events from "../Data/events";

export default function Event() {
  return (
    <>
      {events.map((event) => (
        <div className="flex justify-center">
          <Card key={event.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
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
