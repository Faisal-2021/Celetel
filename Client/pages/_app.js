import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { fetchUsers } from "../Slices/getUser";
import { addUser } from "../Slices/AddUser";

function MyApp({ Component, pageProps }) {

  // store.dispatch(fetchUsers)
  store.dispatch(addUser)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
