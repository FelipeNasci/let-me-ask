import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { Room, NewRoom, AdminRoom } from "./pages/room";

import { AuthContextProvider } from "./context";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/room/new" component={NewRoom} />
          <Route path="/room/:id" component={Room} />
          <Route path="/admin/room/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
