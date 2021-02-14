import "./Page.css";
import { Jumbotron, Container } from "reactstrap";
import { Button } from "react-bootstrap";

const Page = (props) => {
  return (
    <div className='Page'>
      <Jumbotron fluid>
        <Container fluid>
            <h6>{props.date}</h6>
          <h1 className='display-3'>{props.title}</h1>
          <p className='lead'>{props.text}</p>
          <div className='buttons'>
              <Button>Edit</Button>
              <Button>Delete</Button>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Page;
