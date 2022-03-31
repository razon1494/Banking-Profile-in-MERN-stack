import React from 'react';
import {Button, Col, FloatingLabel, Form, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './ContactUs.css';
const ContactUs=() => {
    return (
        <div className='contact-us-container p-3 border rounded-3'>
        {/* responsive contact us form */}
<Form className='container'>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="email" placeholder="Enter Your Name" />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control placeholder="Phone Number" />
  </Form.Group>

<FloatingLabel controlId="floatingTextarea2" label="Please Write down your order details. We will give you our estimate via email">
    <Form.Control
      as="textarea"
      placeholder=""
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <Link to='/'><button className='my-3 button-50 fs-5'>
    Submit
  </button></Link>
</Form>

</div>
    );
};

export default ContactUs;