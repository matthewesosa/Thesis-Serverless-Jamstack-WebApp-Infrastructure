import React, { useState, useEffect } from 'react';
// import accessibilitiesData from './data/accessibilities.json'
// import servicesData from './data/services.json'

const HotelInfo = () => {
  const [accessibilitiesData, setAccessibilitiesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);

  const loadAccessibilitiesData = async() => {
    // send request to the API Gateway
    const resp = await fetch('https://b1p2l99821.execute-api.eu-central-1.amazonaws.com/Prod/Accessibilities');
    let jsonData = await resp.json();

    // Assign response of the request to the state variable
    setAccessibilitiesData(jsonData);
  }

  const loadServicesData = async() => {
    // send request to the API Gateway
    const resp = await fetch('https://b1p2l99821.execute-api.eu-central-1.amazonaws.com/Prod/services');
    let jsonData = await resp.json();

    // Assign response of the request to the state variable
    setServicesData(jsonData);
  }

  useEffect(() => {
    // Load the accessibilities data from dynamoDB via the API Gateway - AphesisHotelAPI /Prod/Accessibilities
    loadAccessibilitiesData();

    // Load the services data from dynamoDB via the API Gateway - AphesisHotelAPI /Prod/services
    loadServicesData();
  }, []);
  
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
            {
              servicesData.map((service) =>
                <li>{service.name}</li>
              )
            }
          </ul>
        </section>
        <section className="checklist" id="accessibility">
          <h2>Accessibility</h2>
          <p>We're committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:</p>
          <ul>
            {
              accessibilitiesData.map((accessibility) =>
                <li>{accessibility.name}</li>
              )
            }
          </ul>
        </section>
      </article>
      <article id="greenprogram">
        <h2>Aphesis Green Program</h2>
        <p><strong>The Aphesis Green Initiative</strong> involves comprehensive measures implemented during the recent renovation of the Aphesis Hotel, prioritizing environmental sustainability at every step. Incorporating eco-friendly building materials, harnessing solar energy, and outfitting the premises with energy-efficient lighting and appliances are among the strategies employed to minimize energy consumption. Furthermore, we've established a recycling and composting scheme aimed at alleviating the burden on nearby landfills. This program not only diverts waste from these sites but also supplies valuable resources for the production of new items. Additionally, the compost generated serves as enriching material for local gardens and landscapes, contributing to the community's green spaces.</p>
      </article>
    </div>

  );
}

export default HotelInfo;
