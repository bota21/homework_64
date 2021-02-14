import "./Blog.css";
import Spinner from "../components/modalWindow/Spinner/Spinner";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "../components/Home/Home";
import axios from "axios";
import Page from "../components/Home/Page/Page";
import EditForm from "../components/EditForm/EditForm";
import AddForm from "../components/AddForm/AddForm";
import About from "../components/About/About";
import Contacts from '../components/Contacts/Contacts';

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogId, setBlogId] = useState("");
  const [singleData, setSingleData] = useState();
  const [postValue, setPostValue] = useState();

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
          setSingleData({ ...response.data, id });
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [blogId]);

  let jumpSinglePage = (id) => {
    setBlogId(id);
    return history.push("/posts/" + id);
  };

  let jumpEditPage = (id) => {
    return history.push("/posts/" + blogId + "/edit");
  };

  let deletePage = () => {
    setLoading(true);
    let fetchData = async () => {
      try {
        await axios.delete(blogId + ".json");
        window.location.href = '/';
      } catch (e) {
        console.error(e);
      }
    };
    fetchData().finally(() => setLoading(false));
  };

  // let editPage = () => {
  //   setLoading(true);
  //   let fetchData = async () => {
  //     try {
  //       await axios.put(blogId + ".json");
  //       history.push("/");
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   fetchData().finally(() => setLoading(false));
  // };
  let changeValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setSingleData({ ...singleData, [name]: value });
  };

  let submitEditForm = (e) => {
    setLoading(true);
    e.preventDefault();
    let fetchData = async () => {
      try {
        console.log(blogId);
        let newValue = {
          date: singleData.date,
          title: singleData.title,
          text: singleData.text,
        };
        await axios.put(blogId + ".json", newValue);
        return history.push("/posts/" + blogId);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData().finally(() => setLoading(false));
  };

  let addValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPostValue({ ...postValue, [name]: value });
  };

  let submitAddForm = (e) => {
    e.preventDefault();
    setLoading(true);
    let fetchData = async () => {
      try {
        let date = new Date();
        let newDate = date.toLocaleString('en-US', { hour12: false });
        let newValue = {
          date: newDate,
          title: postValue.title,
          text: postValue.text,
        };
        await axios.post(".json", newValue);
        window.location.href = '/'
      } catch (e) {
        console.error(e);
      }
    };
    fetchData().finally(() => setLoading(false));
  };

  let history = useHistory();

  return (
    <div className='Blog'>
      {loading ? <Spinner /> : null}
      <Layout>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return <Home array={data} click={jumpSinglePage} />;
            }}
          />
          <Route
            exact
            path='/posts/:id'
            render={() => {
              return (
                <Page
                  date={singleData.date}
                  title={singleData.title}
                  text={singleData.text}
                  delete={deletePage}
                  edit={jumpEditPage}
                />
              );
            }}
          />
          <Route
            path='/posts/:id/edit'
            render={() => {
              return (
                <EditForm
                  valueTitle={singleData.title}
                  valueText={singleData.text}
                  nameText='text'
                  nameTitle='title'
                  change={(e) => changeValue(e)}
                  submit={(e) => submitEditForm(e)}
                />
              );
            }}
          />
          <Route
            // exact
            path='/post/add'
            render={() => {
              return (
                <AddForm
                  nameTitle='title'
                  nameText='text'
                  change={addValue}
                  submit={submitAddForm}
                />
              );
            }}
          />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </Layout>
    </div>
  );
};

export default Blog;
