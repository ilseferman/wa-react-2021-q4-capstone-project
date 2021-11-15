import { FormGroup, Row } from '../UI';

function FormCheckout() {
  return (
    <form>
      <Row columns="1fr" justify="start">
        <FormGroup>
          <label labelFor="name">Name</label>
          <input id="name" type="text" />
        </FormGroup>
        <FormGroup>
          <label labelFor="email">Email</label>
          <input id="email" type="text" />
        </FormGroup>

        <FormGroup>
          <label labelFor="zip">Post/zip</label>
          <input id="zip" type="text" />
        </FormGroup>

        <FormGroup>
          <label labelFor="notes">Order notes</label>
          <textarea id="notes" type="text" />
        </FormGroup>
      </Row>
    </form>
  );
}

export default FormCheckout;
