import "./Page.css";
import { Jumbotron, Container } from "reactstrap";
import { Button } from 'reactstrap';

const Page = (props) => {
  return (
    <div className='Page'>
      <Jumbotron fluid>
        <Container fluid>
            <h6>{props.date}</h6>
          <h1 className='display-3'>{props.title}</h1>
          <p className='lead'>{props.text}</p>
          <div className='buttons'>
              <Button color="warning" onClick={props.edit}>Edit</Button>
              <Button color="danger" onClick={props.delete}>Delete</Button>{' '}
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Page;
