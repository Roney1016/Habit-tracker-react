import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector , useDispatch } from "react-redux";
import WeeklyCard from "./WeeklyCard";

const Weekly = () => {
  const habits = useSelector((state) => state.habitsReducer);
  console.log(habits);
  
  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={8} className="justify-content-center">
      { habits.list.map((habit , index)=>(
          <WeeklyCard habit={habit} key={index}   />
        ))
     }
      </Col>
    </Row>
  </Container>
  
  );
};

export default Weekly;

