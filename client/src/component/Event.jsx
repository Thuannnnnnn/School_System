import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('../events.json');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events: ', error);
    }
  };

  return (
    <div>
      {events.map(event => (
        <Card key={event.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={event.image} />
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>
              {event.description}
            </Card.Text>
            <button className="btn btn-primary">Đăng kí</button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Event;
