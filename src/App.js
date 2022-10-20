import Header from './components/header/header';
import Main from './components/main/main';
import AfterMain from './components/afterMain/afterMain';
import Footer from './components/footer/footer';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <AfterMain/>
      <Footer/>
    </div>
  );
}

export default App;
