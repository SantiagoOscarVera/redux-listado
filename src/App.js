import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
      <Provider store={store}> {/* para que toda la app tenga el store */}
        <Navbar/>
        <UserList/>
      </Provider>
  );
}

export default App;
