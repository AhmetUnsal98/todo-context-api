import Form from "./components/Form";
import Header from "./components/Header";
import "./App.css";
import List from "./components/List";
import ListFooter from "./components/ListFooter";
import Footer from "./components/Footer";
import { TodoContextProvider } from "./context/TodoContext";
function App() {
  return (
    <TodoContextProvider>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="App">
          <Header />
          <Form />
          <List />
          <ListFooter />
          <Footer />
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
