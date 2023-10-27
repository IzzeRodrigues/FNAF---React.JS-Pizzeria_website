import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Content from '../components/Content';
import Footer from '../components/Footer';
// import '../index.css';

const Home = () => {
  return (
    <div className='bg-red-50'>
      <div >
        <header className='conteudo sombra'>
            <Navbar/>
        </header>
        <main>
          <Banner/>
            <Content/> 
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
 
  );
};

export default Home
