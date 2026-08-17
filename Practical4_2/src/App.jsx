import Header from "./Header";
import Footer from "./Footer";
import Student from "./Student";

function App() {
  return (
    <div>
      <Header />
      <p>This is the main content.</p>
      <p>I am developer Uzair Ghole</p>
      <Student
        name="Uzair Ghole"
        course="MERN STACK PRACTICAL"
        age={18}
      />
      <Footer />
    </div>
  );
}

export default App;