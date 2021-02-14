import "./Blog.css";
import Spinner from "../components/modalWindow/Spinner/Spinner";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "../components/Home/Home";
import axios from "axios";
import Page from "../components/Home/Page/Page";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogId, setBlogId] = useState("");
  const [singleData, setSingleData] = useState();

  useEffect(() => {
    setLoading(true);
    let fetchData = async () => {
      try {
        let response = await axios.get(".json");
        response = Object.keys(response.data).map((id) => {
          return { ...response.data[id], id };
        });
        setData(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData().finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(blogId + ".json");
        response = Object.keys(response.data).map((id) => {
          setSingleData ({ ...response.data, id });
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [blogId]);
  console.log(singleData);
  let jumpSinglePage = (id) => {
    setBlogId(id);
    return history.push("/posts/" + id);
  };

  let history = useHistory();

  return (
    <div className='Blog'>
      {loading ? <Spinner /> : null}
      <Switch>
        <Layout>
          <Route exact
            path='/'render={() => {
              return <Home array={data} click={jumpSinglePage} />;
            }}
          />
          <Route path='/posts/:id' render={() => {
            return <Page 
            date={singleData.date}
            title={singleData.title}
            text={singleData.text}
            /> 
          }}/>
          {/* <Route render={() => <p>Page not found</p>} /> */}
        </Layout>
      </Switch>
      {/* <Spinner/> */}
    </div>
  );
};

export default Blog;
