import "./Home.css";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const Home = (props) => {
  let renderBlogs = props.array.map((item) => {
    return (
      <Card key={item.id}>
        <CardBody>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            {item.date}
          </CardSubtitle>
          <CardTitle tag='h5'>{item.title}</CardTitle>
          <Button color='success' onClick={() => props.click(item.id)}>
            Read more >>
          </Button>
        </CardBody>
      </Card>
    );
  });
  return <div className='blog_wrapper'>{renderBlogs}</div>;
};

export default Home;
