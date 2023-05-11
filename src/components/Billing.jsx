import React, { useState } from 'react';

import useFormContext from "../hooks/useFormContext"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';
import { InputGroup, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';

const Billing = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [lessThan37Weeks, setLessThan37Weeks] = useState('No');
    const [weekBorn, setWeekBorn] = useState('');
    const [childWeight, setChildWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [childHeight, setChildHeight] = useState('');
    const [heightUnit, setHeightUnit] = useState('cm');

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="">
            <div className="form-group">
  <label htmlFor="billFirstName">Child's name</label>
  <input
    type="text"
    className="form-control"
    id="billFirstName"
    name="billFirstName"
    placeholder="Jane"
    pattern="([A-Z])[\w+.]{1,}"
    value={data.billFirstName}
    onChange={handleChange}
  />
</div>
                <div className="flex-col">
                    <label htmlFor="billLastName">Child Date of Birth</label>
                        <span style={{display: "flex"}}>
                            <DatePicker
                            id="formBasicDate"
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                            placeholderText="Select date"
                            />
                            <Button variant="outline-secondary" onClick={() => document.getElementById("formBasicDate").click()}>
                            <FaCalendarAlt />
                            </Button>
                        </span>
                </div>
            </div>
            <Form.Group>
              <Form.Label>Born at less than 37 weeks?</Form.Label>
              <Form.Check
                type="radio"
                label="No"
                name="lessThan37Weeks"
                checked={lessThan37Weeks === 'No'}
                onChange={() => setLessThan37Weeks('No')}
              />
              <Form.Check
                type="radio"
                label="Yes"
                name="lessThan37Weeks"
                checked={lessThan37Weeks === 'Yes'}
                onChange={() => setLessThan37Weeks('Yes')}
              />
              {lessThan37Weeks === 'Yes' && (
                <Form.Group>
                  <Form.Label>Week Born</Form.Label>
                  <Form.Control type="number" value={weekBorn} onChange={(e) => setWeekBorn(e.target.value)} max={36} />
                </Form.Group>
              )}
            </Form.Group>
            <Form.Group>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <label htmlFor="selectedweight" className="">Child's Weight</label>
                    <label htmlFor="selectedunit" className="">Weight Unit</label>
                </div>
                <div style={{ display: 'flex', marginBottom: '12px' }}>
                    <Form.Control type="number" value={childWeight} onChange={(e) => setChildWeight(e.target.value)} style={{ width: '50%' }} />
                    <Form.Control as="select" value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)} style={{ width: '50%', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23333\'%3E%3Cpath d=\'M8 11.172L3.879 7.05a.5.5 0 01.707-.707L8 9.657l3.414-3.414a.5.5 0 01.707.707L8 11.172z\'/%3E%3C/svg%3E")', backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5em' }}>
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>
                    </Form.Control>
                </div>
            </Form.Group>
            <Form.Group>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <label htmlFor="selectedheight" className="">Child's height</label>
                    <label htmlFor="heightUnit" className="">Height Unit</label>
                </div>
                <div style={{ display: 'flex', marginBottom: '12px' }}>
                    <Form.Control type="number" value={childHeight} onChange={(e) => setChildHeight(e.target.value)} style={{ width: '50%' }} />
                    <Form.Control as="select" value={heightUnit} onChange={(e) => setChildHeight(e.target.value)} style={{ width: '50%', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23333\'%3E%3Cpath d=\'M8 11.172L3.879 7.05a.5.5 0 01.707-.707L8 9.657l3.414-3.414a.5.5 0 01.707.707L8 11.172z\'/%3E%3C/svg%3E")', backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5em' }}>
                    <option value="kg">cm</option>
                    <option value="lb">feet</option>
                    </Form.Control>
                </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="james@gmail.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone no</Form.Label>
              <InputGroup>
                <DropdownButton
                              as={InputGroup.Prepend}
                              variant="outline-secondary"
                              title="+91"
                              id="input-group-dropdown-1"
                            >
                <Dropdown.Item href="#">+91</Dropdown.Item>
                <Dropdown.Item href="#">+92</Dropdown.Item>
                <Dropdown.Item href="#">+93</Dropdown.Item>
                <Dropdown.Item href="#">+94</Dropdown.Item>
                </DropdownButton>
                <Form.Control type="tel" placeholder="Enter phone number" />
              </InputGroup>
            </Form.Group>
        </div>
    )

    return content
}
export default Billing;
