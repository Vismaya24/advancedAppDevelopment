import { useState } from "react";
import Navbar from "../../Utils/Navbar";
import { BiSearch } from 'react-icons/bi';
import '../../../assets/css/Event.css';


const Events = () => {

    const [searchArt, setSearchArt] = useState('');
    const [items,] = useState([
        { id: '1', type: 'Wedding', venue: 'Double Tree Venue', catering: 'Mr Chef',  entertainment: 'Party Pulse Entertainment', decoration: 'Festive Finesse Decor', price: "7854212", imgUrl: 'https://img.freepik.com/free-photo/bride-bridesmaids-with-wedding-bouquets-sunny-wedding-reception-joyful-moment_8353-5872.jpg?t=st=1710830602~exp=1710834202~hmac=21f976df0503d73775153c335d573bad5f3e1a46feda02c686c40894c7248cf0&w=996' },
        { id: '2', type: 'Success Party', venue: 'Unitech Club', catering: 'Flavorful Feast Catering', entertainment: 'Dance Dynamix Entertainment', decoration: 'Party Perfection Decor' , price: '17525', imgUrl: 'https://img.freepik.com/free-photo/wonderful-holiday-destination_1160-160.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais' },
        { id: '3', type: 'Product Launch', venue: 'GNH Convention', catering: 'Elite Epicure Catering', entertainment: 'Rhythm Revelry Entertainment', decoration: 'Enchanted Elegance Decor', price: '18752' , imgUrl: 'https://img.freepik.com/premium-photo/painting-landscape-with-castle-horse-drawn-carriage-generative-ai_900814-1436.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais' },
        { id: '4', type: 'Birthday', venue: 'Royal Banquet', catering: 'Blissful Bites Catering', entertainment: 'Melody Mania Entertainment', decoration: 'Radiant Revelry Decor', price: '18451' , imgUrl: 'https://img.freepik.com/free-vector/watercolor-impressionist-landscape_23-2147543830.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.1.359951465.1694546557&semt=ais' },
        { id: '5', type: 'Wedding', venue: 'Club Florence', catering: 'Bon Appétit Banquets', entertainment: 'Harmony Haven Entertainment', decoration: 'Blissful Bash Decor' , price: '12435', imgUrl: 'https://img.freepik.com/premium-photo/artwork-sketch-natural-peaceful-illustration-fabulous-watercolor-landscape-mountains-flowers_713766-490.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.1.359951465.1694546557&semt=sph' },
        { id: '6', type: 'Wedding', venue: 'Melody Farm',catering: 'Feast & Fête Catering', entertainment: 'Fiesta Fusion Entertainment', decoration: 'Glamorous Gala Decor', price: '18457' , imgUrl: 'https://img.freepik.com/premium-photo/sunset-camcorder-effect-style-creative-digital-painting_743855-1888.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=sph' },
      ]);
    
      const [filteredItems, setFilteredItems] = useState(items);
      const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchArt(searchArt);
    
        const filteredItems = items.filter((item) =>
          Object.values(item).some(
            (value) =>
              value &&
              value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setFilteredItems(filteredItems);
      };

  return (
    <div>
        <Navbar/><br/>
        <div style={{marginTop: "90px"}}>
        <select className="select-filter">
        <option className="option-filter">ArtWork Type</option>
        <option className="option-filter">Prints</option>
        <option className="option-filter">Paintings</option>
        <option className="option-filter">Drawings</option>
        <option className="option-filter">Sculptures</option>
        <option className="option-filter">Photographs</option>
       </select>

        <select className="select-filter">
        <option className="option-filter">Year</option>
        <option className="option-filter">1900 - 1950</option>
        <option className="option-filter">1950 - 2000</option>
        <option className="option-filter">2000 - 2023</option>
       </select>

       <div style={{display: 'inline-flex'}}>
       <input className="search-bar" type="text" placeholder="Search Art Works" id="search-art" name="search-art" onChange={handleSearch} />
       <button className="search-btn"><BiSearch size={25} color="black"/></button>
       </div>

       <div>
        {filteredItems.map((item) => (
            <div key={item.id}>
                <div style={{display: "inline-flex"}}>
                    <img className="event-image" src={item.imgUrl} height="300px" width="400px" alt=""></img><br />
                    <div className="event-card">
                        <div className="event-font">
                    {item.type}
                    {item.venue}
                    {item.entertainment}
                    {item.decoration}
                    {item.food}
                    {item.price}
                    </div>
                    </div>
                    </div>
            </div>

        ))}
       </div>
        </div>


        
      
    </div>
  )
}

export default Events;
