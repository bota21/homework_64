import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

const AddForm = (props) => {
  return (
    <Form onSubmit={props.submit}>
      <div className='form_wrapper'>
        <FormGroup>
          <h2>Add new post</h2>
        </FormGroup>
        <FormGroup>
          <Label for='input'>Title</Label>
          <Input
            type='text'
            id='input'
            name={props.nameTitle}
            onChange={props.change}
            placeholder='Enter a title'
          />
        </FormGroup>
        <FormGroup>
          <Label for='textarea'>Content</Label>
          <Input
            type='textarea'
            id='textarea'
            name={props.nameText}
            onChange={props.change}
            placeholder='Enter content'
          />
        </FormGroup>
        <Button color='success'>Save</Button>
      </div>
    </Form>
  );
};

export default AddForm;
