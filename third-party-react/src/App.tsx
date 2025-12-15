import Hero from './component/hero/Hero';
import Status from './component/status/Status';
import Description from './component/description/Description';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <div className='wrapper'>
      <Hero />
      <Status />
      <Description/>
      <Footer/>
    </div>
  )
}
export default App