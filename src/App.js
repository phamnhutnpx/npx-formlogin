import './App.css';
import SignupForm from './components/Form/SignupForm';


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import UseStateDemo from './components/hook/UseStateDemo';

function App() {
  return (
    <div className="App">
      <header>Form register</header>
      <SignupForm />
      {/* <UseStateDemo /> */}
    </div>
  );
}

export default App;
