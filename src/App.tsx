import Home from "./component/Home";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="dark:bg-backgroundDark md:mx-16">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
