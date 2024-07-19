import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling  
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className="description">
            <p>
                Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered
                    </p>
                <button className="get-started-button">Get Started</button>
            
            </section>
            <section className="events_categories">
         <ul>
            <h2>Social Events :</h2>
            <li>Birthday parties</li>
            <li>Anniversary</li>
            <li>Wedding</li>
            <li>Baby showers</li>
            <li>Graduation parties</li>
            <li>Family reunions</li>
         </ul>
         <ul>

            <h2> Entertainment Events:</h2>
            <li>Concerts</li>
            <li>Music</li>
            <li>Film screenings</li>
            <li>Comedy shows</li>
            <li>Art exhibitions</li>
            <li>Cultural events</li>
         </ul>
       
       <ul>
       <h2>Community Events:</h2>
       <li>Fundraiing events</li>
       <li>Chartiy galas</li>
       <li>Volunteer</li>
       <li>Neighborhood block parties</li>
       <li>Community festivals</li>
       <li>Culural celebrations</li>
       </ul>
    
            </section>

            <section className="features">
         <h1>Features</h1>
         <ul>
          <li>Easy event creation and mangment</li>
          <li>Customizable event templates</li>
          <li>Guest list mangment</li>
          <li>Real-time collaboration</li>
          <li>Reminders and notifications</li>
         </ul>

            </section>

            <section className="testimonials">
            <h2>Testtimonials</h2>
            <div className="testimonial">
         <p>"Event Planner made organizing my wedding a breeze , highly recommended , very Good"</p>
            <p className="author">- Emily johnson</p>

            </div>
   <div className="testimonial">
     <p>"I use Event Planner for all my corperate event , It saves me so much time and effort!"</p>
     <p className="author">- john Smith</p>

   </div>
            </section>

            <section className="contact">

               <h2>Contact us</h2>
               <form>
         <input type="text" placeholder="Name" />
         <input type="email" placeholder="Email" />
         <textarea placeholder="Message"></textarea>
      <button className="submit-button">Send</button>

                </form>    
            </section>
<Footer>
       import Footer from'./Footer';
       </Footer>
        </div>
    );
};

export default EventPlanner;
