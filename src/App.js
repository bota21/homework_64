import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./container/Home/Home";
import Page from "./container/Page/Page";
import EditForm from "./container/EditForm/EditForm";
import AddForm from "./container/AddForm/AddForm";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/posts/add' component={AddForm} />
          <Route path='/posts/:id' exact component={Page} />
          <Route path='/posts/:id/edit' exact component={EditForm} />          
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
