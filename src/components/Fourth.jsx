import useFormContext from "../hooks/useFormContext"
import React, { useState } from 'react';
import { InputGroup, FormControl, Button, DropdownButton, Dropdown, Select } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';
import { Container, Row, Col, Bottom } from "react-bootstrap";

const times = [
  "10:30 to 11:00 am",
  "11:00 to 11:30 am",
  "11:30 to 12:00 pm",
  // Add more time options as needed
];
const time = [
  "10:30-10:45",
  "10:45-11:00"
  // add more times here as needed
];
const Fourth = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect1 = (type) => {
    setSelected(type);
  };

  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectSlot = (type) => {
    setSelectedSlot(type);
  };

  const [selectedType, setSelectedType] = useState('');

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const [selectedTime, setSelectedTime] = useState(null);

  const [selectedTime1, setSelectedTime1] = useState("10:30 - 11:00 am");

  const handleClick = (time) => {
    setSelectedTime1(time);
  };

  const handleSelect = (eventKey) => {
    setSelectedTime(times[eventKey]);
  };
  const [selectedDate, setSelectedDate] = useState(null);
    const { data, handleChange } = useFormContext()

    const content = (
      <div id = 'delete'>
        <span className="flex-col" >
          <label htmlFor="billLastName">Child Date of Birth</label>
          <span style={{display:"flex"}}>
          <DatePicker
            id="formBasicDate"
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            className="form-control"
            placeholderText="Select date"
          />
          <Button variant="outline-secondary" onClick={() => document.getElementById("formBasicDate").click()}>
            <FaCalendarAlt />
          </Button>
          </span>
        </span>

        <Form.Group controlId="selectTime">
          <Form.Label>Select Time</Form.Label>
          <Form.Select>
            {times.map((time, index) => (
              <option key={index}>{time}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <div>
          <label>Choose a slot</label>
          <br/>
          <Container>
            <Row>
              <Col xs={6} className="d-flex align-items-center justify-content-center">
                <div
                  className={`call-type ${selected === "10:30 - 11:00 am" ? "selected" : ""}`}
                  onClick={() => handleSelectSlot("10:30 - 11:00 am")}
                  style={{margin:'12px'}}
                >
                  <p>10:30 - 11:00 am</p>
                  
                </div>
              </Col>
              <Col xs={6} className="d-flex align-items-center justify-content-center">
                <div
                  className={`call-type ${selected === "10:45 - 11:45 am" ? "selected" : ""}`}
                  onClick={() => handleSelectSlot("10:45 - 11:45 am")}
                >
                  <p>10:45 - 11:45am</p>
                </div>
              </Col>
            </Row>
            <style jsx>{`
              .call-type {
                width: 100%;
                padding: 5px;
                border-radius: 5px;
                text-align: center;
                cursor: pointer;
                background-color: #f5f5f5;
              }
              .call-type:hover {
                background-color: #ede7f6;
              }
              .selected {
                background-color: #ede7f6;
              }
              .call-type svg {
                height: 1em;
                width: 1em;
                margin-bottom: 0.5em;
              }
              .call-type p {
                margin: 0;
                font-size: 0.9em;
              }
            `}</style>
          </Container>
        </div>

        <label>Call type</label>
        <Container>
          <Row>
            <Col xs={6} className="d-flex align-items-center justify-content-center">
              <div
                className={`call-type ${selected === "video" ? "selected" : ""}`}
                onClick={() => handleSelect1("video")}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path>
                </svg>
                <p>Video Call</p>
              </div>
            </Col>
            <Col xs={6} className="d-flex align-items-center justify-content-center">
              <div
                className={`call-type ${selected === "audio" ? "selected" : ""}`}
                onClick={() => handleSelect1("audio")}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" stroke-miterlimit="10" strokeWidth="32"  d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"></path>
                </svg>
                <p>Audio Call</p>
              </div>
            </Col>
          </Row>
          <style jsx>{`
            .call-type {
              width: 100%;
              padding: 5px;
              border-radius: 5px;
              text-align: center;
              cursor: pointer;
              background-color: #f5f5f5;
            }
            .call-type:hover {
              background-color: #ede7f6;
            }
            .selected {
              background-color: #ede7f6;
            }
            .call-type svg {
              height: 1em;
              width: 1em;
              margin-bottom: 0.5em;
            }
            .call-type p {
              margin: 0;
              font-size: 0.9em;
            }
          `}</style>
        </Container>

        <Button block style={{ backgroundColor: '#7C55C5' }}>Next</Button>

      </div>
    )
    return content
}
export default Fourth;