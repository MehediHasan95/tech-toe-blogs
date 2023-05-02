import { Toaster } from "react-hot-toast";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  return (
    <main className="App">
      <Header />
      <Blogs />
      <Toaster />
    </main>
  );
}

export default App;
