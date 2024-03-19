import { useEffect, useState } from 'react';
import '../../../assets/css/Home.css';
import Navbar from '../../Utils/Navbar';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';


const Home = () => {

  const [, setVisibleSections] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
     window.onscroll = () => {
      const newVisibleSections = [];

      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
          sec.classList.add('show-animate');
        }
        else{
          sec.classList.remove('show-animate');
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', onscroll);

    return () => {
      window.removeEventListener('scroll', onscroll);
    };
  }, []);
  
  return (
    <div>
      <Navbar/>
      <div className='home-wrapper'>
      <div>
            <div  className="nav-bar2">
                <div className="title-text">FIESTA</div>
                <Link style={{textDecoration: "none"}} to="/"><div style={{marginLeft:"450px"}} className="nav-text">HOME</div></Link>
                <Link style={{textDecoration: "none"}} to="/event"><div className="nav-text">EVENTS</div></Link>
                <Link style={{textDecoration: "none"}} to="/sell"><div className="nav-text">GALLERY</div></Link>
                {/* <Link style={{textDecoration: "none"}} to="/signup"><div className="nav-text">SIGN UP</div></Link> */}
                <Link style={{textDecoration: "none"}} to="/contactUs"><div className="nav-text">CONTACT US</div></Link>
                <Link style={{textDecoration: "none"}} to="/login"><div className="nav-text">LOGIN</div></Link>
                <Link to="/profile" style={{marginLeft: "300px", marginTop: "20px", color: "#1c3b70"}}><AiOutlineUser size={25}/></Link>
            </div>
        </div>

        <div className='home-header'>
          <img className='home-background' src='img3.jpg' alt="" />
          <div className='home-title'>Celebrating Milestones in Style
          </div>
        </div>
      </div>
      


       <section className='animation-section sec1 show-animate'>
        <div className='home-aboutus'>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "40px"}} className='animate'>
        <div className='home-head'>about <br/>us</div>
            <div className='home-aboutus-box'>
            We specialize in crafting extraordinary events that leave a lasting impression. With a dedication to creativity, precision, and client satisfaction, we arre here to transform your vision into reality.
            With years of experience in the industry, our team brings a wealth of knowledge and expertise to every event we undertake. From intimate gatherings to grand celebrations, we have the skills and creativity to bring your vision to life.
            We understand that every event is unique, which is why we take a personalized approach to event planning. From the initial consultation to the final execution, we work closely with our clients to ensure that their vision is realized.
            </div>
          </div>
        </div>
      </section>

      <div className='container-home'>
      <div className='photo-gallery'>
      <div className='column'>
        <div className='photo'><img className='images' src='https://img.freepik.com/premium-photo/table-setup-blue-light-ready-event_355018-707.jpg?w=360' /></div>
      </div>
      <div className='column'>
        <div className='photo'><img className='images' src='https://img.freepik.com/premium-photo/large-square-wedding-cake-with-three-floors-against-backdrop-led-lighting-premium-wedding-ukraine_216821-1968.jpg?w=360' /></div>
      </div>
      <div className='column'>
        <div className='photo'><img className='images' src='https://img.freepik.com/premium-photo/stylish-fashionable-wedding-arch-ceremony-decorated-with-blue-white-different-flowersfloral-design-summer-restaurant-outdoors-by-preparation-wedding-background-river-sea_653979-117.jpg?w=360' /></div>
      </div>
      </div>
      </div>


       <section className='animation-section sec2 show-animate'>
        <div className='home-aboutus'>
          <div className='animate'>
            <div className='home-head'>
              Our services
            </div>
          </div>
        </div>
      </section>

      <div className='container-home'>
      <div className='photo-gallery'>
        
      
      <div className='column'>
        <div className='gallery'><img className='images1' src='https://img.freepik.com/premium-photo/sky-blue-shoes-dress-bride-wedding-photo-shoot-high-quality-photo_371428-359.jpg?w=360' /></div>
        <div className='gallery'><img className='images1' src='https://img.freepik.com/free-photo/candles-floating-glass-flasks_1304-4253.jpg?t=st=1710822397~exp=1710825997~hmac=530d590a77c43479c00b4e657d6d895704f10be11670f300b15b78a1aca75081&w=360' /></div>
        <div className='gallery'><div className='home-gallery-font'>Birthday</div></div>
      </div>
      <div className='column'>
      <div className='gallery'><div className='home-gallery-font'>Wedding</div></div>
        <div className='gallery'><img className='images1' src='https://img.freepik.com/premium-photo/wedding-decor-with-natural-elements_419896-4715.jpg?w=360' /></div>
        <div className='gallery'><img className='images1' src='https://img.freepik.com/free-photo/beautiful-optical-fiber-detail_23-2149182560.jpg?t=st=1710822675~exp=1710826275~hmac=86fa5c81a8fd152f267189cf663b284160633b551f8c8f36fe39464ca32d5734&w=360' /></div>
      </div>
      <div className='column'>
        <div className='gallery'><img className='images1' src='https://img.freepik.com/free-photo/decorated-wedding-table-violet-shades_8353-9874.jpg?t=st=1710822709~exp=1710826309~hmac=9c47c0c609b6a4f2cd889a8c22890ccf30f1cc77de2e30dd7f3f4662055b081c&w=360' /></div>
      <div className='gallery'><div className='home-gallery-font'>Sucess Party</div></div>
        <div className='gallery'><img className='images1' src='https://img.freepik.com/free-photo/tender-hydrangea-centerpiece-wine-glasses-blurred-background_8353-10060.jpg?t=st=1710822751~exp=1710826351~hmac=d908365208428926ca5c3f2a897dac84f2a00621de1b014995c23acfb487c8d0&w=360' /></div>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Home
