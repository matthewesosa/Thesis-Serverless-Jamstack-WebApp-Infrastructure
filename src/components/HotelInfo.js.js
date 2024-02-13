import React from 'react';

const HotelInfo = () => {
  return (
    <div className="scene" id="hotelinfo">
      <article className="heading">
        <h1>Essential Info</h1>
      </article>
      <article id="usefulinfo">
        <section id="arrivalinfo">
          <h2>Arrival Information</h2>
          <ul>
            <li><strong>Check-in:</strong> 3:00 PM</li>
            <li><strong>Check-out:</strong> 11:00 AM</li>
            <li><strong>Parking:</strong> Self-parking in the underground garage is €15 per day and valet-parking is €50 per day.</li>
            <li><strong>Airport Shuttle:</strong> Our complimentary airport shuttles leave every hour on the hour.</li>
            <li><strong>Trains:</strong> An Underground station is located nearby.</li>
            <li><strong>Pet Policy:</strong> Pets of all sizes and types are allowed in designated pet rooms, and the specified common areas. Service animals are allowed everywhere.</li>
          </ul>
        </section>
        <section className="checklist" id="services">
          <h2>Services and Amenities</h2>
          <p>Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience one-of-a-kind.</p>
          <ul>
            <li>Indoor pool</li>
            <li>24-hour fitness center</li>
            <li>Massage therapy</li>
            <li>Full service spa</li>
            <li>In-room jacuzzi tubs</li>
            <li>Rooftop café  &amp; smoothie bar</li>
            <li>Coffee bar  &amp; pastry shop</li>
            <li>Traditional continental breakfast</li>
            <li>24-hour concierge service</li>
            <li>Business center</li>
            <li>Complimentary wireless service</li>
            <li>Laundry &amp; dry cleaning service</li>
            <li>Daily paper</li>
            <li>Certified "green" hotel</li>
            <li>Pet-friendly rooms  &amp; common areas</li>
          </ul>
        </section>
        <section className="checklist" id="accessibility">
          <h2>Accessibility</h2>
          <p>We're committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:</p>
          <ul>
            <li>Grab bars on tub walls</li>
            <li>Shower chairs</li>
            <li>Hand held shower sprayers</li>
            <li>Higher toilets &amp; toilet modifiers</li>
            <li>Lower sink faucet handles</li>
            <li>Wheelchair clearance under sinks &amp; vanity</li>
            <li>Lower racks in closet</li>
            <li>TDD machines</li>
            <li>Telephone light signalers  &amp; smoke alarms</li>
            <li>Telephone amplification handsets</li>
            <li>Closed captioned television converters</li>
            <li>Vibrating alarm clocks</li>
            <li>Telephones with volume control</li>
          </ul>
        </section>
      </article>
      <article id="greenprogram">
        <h2>Aphesis Green Program</h2>
        <p><strong>The Aphesis Hotel</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
      </article>
    </div>

  );
}

export default HotelInfo;
