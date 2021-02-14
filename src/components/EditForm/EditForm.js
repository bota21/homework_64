import "./EditForm.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditForm = (props) => {
  return (
    <Form onSubmit={props.submit}>
      <div className='form_wrapper'>
        <FormGroup>
          <h2>Edit post</h2>
        </FormGroup>
        <FormGroup>
          <Label for='title'>Title</Label>
          <Input
            type='text'
            id='title'
            name={props.nameTitle}
            value={props.valueTitle}
            onChange={props.change}
          />
        </FormGroup>
        <FormGroup>
          <Label for='text'>Content</Label>
          <Input
            type='textarea'
            id='text'
            name={props.nameText}
            value={props.valueText}
            onChange={props.change}
          />
        </FormGroup>
        <Button color='success'>Save</Button>
      </div>
    </Form>
  );
};

export default EditForm;
