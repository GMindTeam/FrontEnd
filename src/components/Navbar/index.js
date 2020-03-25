import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import CreateEvent from "../../containers/CreateEvent";
import CreateResponse from "../../containers/CreateResponse";
import Credit from "../../containers/Credit";
import EventDetail from "../../containers/EventDetail";
import { Nav ,Button} from "./style";

export default function NavBar() {

    return (
      <BrowserRouter>
        <div>
          <Nav>
            <ul className="nav-link">
              <Link to="/create">
                <img alt="Logo" src={require("../../images/logo.PNG")} />
              </Link>

              <li className="link">
                <Link to="/credit">Credit</Link>
              </li>
              <li className="link">
                <Link to="/create">
                  <Button>CreateEvent</Button>
                </Link>
              </li>

        
            </ul>
          </Nav>

          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/credit">
              <Credit />
            </Route>
            <Route path="/create">
              <CreateEvent type="create"/>
            </Route>
            <Route path="/createResponse">
              <CreateResponse />
            </Route>
            <Route path="/editEvent">
              <CreateEvent type="edit" />
            </Route>
            <Switch>
              <Route path="/event/:eventID" component={EventDetail} />
            </Switch>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

