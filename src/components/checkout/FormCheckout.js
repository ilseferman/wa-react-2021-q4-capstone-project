import React from 'react';
import { FormGroup, Row } from '../UI';

const FormCheckout = function () {
  return (
    <form>
      <Row columns="1fr" justify="start">
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="zip">Post/zip</label>
          <input id="zip" type="text" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="notes">Order notes</label>
          <textarea id="notes" type="text" />
        </FormGroup>
      </Row>
    </form>
  );
};

export default FormCheckout;
