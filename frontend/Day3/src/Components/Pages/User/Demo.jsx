import { useEffect, useState } from 'react';
import '../../../assets/css/Demo.css';

const Demo = () => {

  // const section = document.querySelectorAll('section');
  // window.onScroll = () => {
  //   section.forEach(sec => {
  //     const top = window.scrollY;
  //     const offset = sec.offsetTop - 150;
  //     const height = sec.offsetHeight;

  //     if(top >= offset && top < offset + height){
  //       sec.classList.add('show-animate');
  //     }
  //     else{
  //       sec.classList.remove('show-animate');
  //     }
  //   })
  // }

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
      {/* <div className='wrapper'>
        <header>
          <img src='Mountain.png' className='background'></img>
          <img src='Trees.png' className='foreground'></img>
          <h1 className="title">Welcome !</h1>
        </header>
            <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis unde illo neque at hic quisquam, nulla consectetur, itaque maxime sit iusto aliquam culpa reiciendis eaque recusandae vitae modi, animi expedita perferendis inventore. Culpa incidunt odit dicta quibusdam ullam facilis eum magnam, consectetur voluptates praesentium, pariatur eos nihil! Natus in, autem aut facere repellat eveniet commodi illo ullam hic fugit deserunt explicabo esse atque reprehenderit optio, dicta suscipit sed! Porro fugiat numquam vel magni, iure provident consequuntur velit ut quia itaque repudiandae molestiae, nobis sequi incidunt autem! Cum impedit accusamus laboriosam eaque necessitatibus consectetur incidunt a exercitationem molestias doloribus tenetur amet, ullam at repudiandae, quos reprehenderit adipisci assumenda dolor enim voluptas natus! Assumenda praesentium voluptate culpa quidem quasi impedit unde incidunt odit velit, dolore officiis distinctio, fugit, optio sed. Quos nesciunt eius reprehenderit ipsa consectetur tempora, fugiat provident corporis perspiciatis veritatis totam temporibus voluptates soluta vitae mollitia molestias reiciendis expedita doloribus est. Maxime et fugit expedita id sed cumque harum dignissimos aperiam voluptatum quos obcaecati illo tempore consectetur, sunt perferendis eius aliquid soluta praesentium voluptatem assumenda ex fuga. Iusto, possimus? Dolores deleniti eaque, aperiam consequuntur odit culpa, architecto, quas veniam provident inventore eius. Laboriosam in reprehenderit quidem? Officiis illum molestiae, praesentium velit, illo debitis quasi fuga laborum veritatis necessitatibus fugiat cupiditate! Quia animi provident maxime numquam porro itaque! Provident, rerum. Aliquid cum quo ducimus ad? Repellat nihil, saepe beatae rerum sint eveniet voluptate officiis velit autem officia tempore deserunt sequi quod quae culpa sed. Reprehenderit eveniet ipsum nihil ipsam quam facilis, possimus modi placeat ratione soluta voluptate obcaecati error minima enim, fugiat quaerat architecto, iure dignissimos a eum quidem eos at fuga. Consectetur, quisquam at reprehenderit in exercitationem inventore incidunt dolorum quos adipisci labore? Fugiat facilis ipsum minus, officiis eos modi sequi distinctio pariatur reprehenderit accusantium labore obcaecati, recusandae saepe?</section>
      </div> */}
      <section className='animation-section sec1 show-animate'>
        <h1 className='animate'>Hi I am vismaya</h1><br/>
        <div><p className='animate'>I am a full stack developer</p></div>
        
      </section>

      <section className='animation-section sec2 show-animate'>
        <h1 className='animate'>Keep scrolling</h1><br/>
        <p className='animate'>Scroll down</p>
      </section>

      <section className=' animation-section sec3'>
        <h1 className='animate'>Scroll down</h1><br/>
        <p className='animate'>Scroll down keep scrolling</p>
      </section>

      <section className='animation-section sec4'>
        <h1><span className='showRight-animate'></span>Scroll down</h1><br/>
        <p >Keep scrolling
          <span className='showRight-animate'></span>
        </p>
      </section>

      <section className='sec5'>
        <div className='images'>
          <img src="img1.svg" className='animate' ></img>
          <img src="img2.svg" className='animate' ></img>
        </div>
      </section>

      {/* image responsive */}
      <div className='container-home'>
      <div className='photo-gallery'>
        
      
      <div className='column'>
        <div className='photo'><img className='images' src='https://img.freepik.com/free-photo/tender-hydrangea-centerpiece-round-table-with-candles_8353-10056.jpg?t=st=1710671519~exp=1710675119~hmac=99099001e6b5dc7c1b36b71c38279c025330fbc8a90ae3b1be31f75f962b8556&w=360' /></div>
        <div className='photo'><img className='images' src='https://img.freepik.com/free-photo/candles-floating-glass-flasks_1304-4253.jpg?t=st=1710671480~exp=1710675080~hmac=32849f330fc376cd19049f8bd97e9ec6a344c2506144c271e7d4ff7267bcb94f&w=360' /></div>
        <div className='photo'><div style={{fontSize: "10px", height: "100px", width: "300px", backgroundColor: "blue"}}>Helloooo</div></div>
      </div>
      <div className='column'>
      <div className='photo'><div style={{fontSize: "10px", height: "100px", width: "300px", backgroundColor: "blue"}}>Helloooo</div></div>
        <div className='photo'><img className='images' src='https://img.freepik.com/free-photo/tender-hydrangea-centerpiece-round-table-with-candles_8353-10056.jpg?t=st=1710671519~exp=1710675119~hmac=99099001e6b5dc7c1b36b71c38279c025330fbc8a90ae3b1be31f75f962b8556&w=360' /></div>
        <div className='photo'><img className='images' src='https://img.freepik.com/free-photo/candles-floating-glass-flasks_1304-4253.jpg?t=st=1710671480~exp=1710675080~hmac=32849f330fc376cd19049f8bd97e9ec6a344c2506144c271e7d4ff7267bcb94f&w=360' /></div>
      </div>
      <div className='column'>
        <div className='photo'><img className='images' src='https://img.freepik.com/free-photo/tender-hydrangea-centerpiece-round-table-with-candles_8353-10056.jpg?t=st=1710671519~exp=1710675119~hmac=99099001e6b5dc7c1b36b71c38279c025330fbc8a90ae3b1be31f75f962b8556&w=360' /></div>
      <div className='photo'><div style={{fontSize: "10px", height: "100px", width: "300px", backgroundColor: "blue"}}>Helloooo</div></div>
        <div className='photo'><img className='images' src='https://img.freepik.com/free-photo/candles-shine-wooden-floor-darkness_1304-3768.jpg?t=st=1710671395~exp=1710674995~hmac=1ba53753f412156ee3abb16dfb302baaf1298a28f47151494f0a7efeac396beb&w=360' /></div>
      </div>
      </div>
      </div>

      <div className='flex-box'>
        <div className='card'>
          Card 1
        </div>
        <div className='card'>
          Card 2
        </div>
        <div className='card'>
          Card 3
        </div>
        <div className='card'>
          Card 3
        </div>
        <div className='card'>
          Card 3
        </div><div className='card'>
          Card 3
        </div>
      </div>

      
      <script src="script.jsx"></script>
    </div>

    
  )
}

export default Demo
