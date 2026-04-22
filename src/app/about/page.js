
export const metadata = {
  title: "About Us | Shiv Ganga Travels",
  description: "Shiv Ganga Travels established in 2017 by retired army personnel Dhanesh Chandra. Trusted Uttarakhand travel service with transparent pricing and reliable tours."
}

export default function About() {
  return (
    <div style={{maxWidth:900,margin:'auto',padding:20,lineHeight:1.8}}>

      <h1>About Shiv Ganga Travels</h1>

      <p>
        Shiv Ganga Travels was established in 2017 by retired army personnel 
        <strong> Dhanesh Chandra</strong> with a mission to bring transparency, fair pricing, 
        and trust into the travel industry.
      </p>

      <div style={{display:'flex',justifyContent:'space-between',margin:'30px 0',flexWrap:'wrap',gap:20}}>
        <div style={{flex:1,minWidth:150,padding:15,background:'#f1f1f1',borderRadius:10,textAlign:'center'}}>
          <h2>8+ Years</h2>
          <p>Trusted Experience</p>
        </div>
        <div style={{flex:1,minWidth:150,padding:15,background:'#f1f1f1',borderRadius:10,textAlign:'center'}}>
          <h2>13 Vehicles</h2>
          <p>Fleet Strength</p>
        </div>
        <div style={{flex:1,minWidth:150,padding:15,background:'#f1f1f1',borderRadius:10,textAlign:'center'}}>
          <h2>1000+ Customers</h2>
          <p>Happy Travelers</p>
        </div>
      </div>

      <h2>Our Journey</h2>
      <p>
        Starting with just 2 vehicles, we have grown into a fleet of 13 well-maintained vehicles. 
        Our growth has been driven purely by customer trust and word-of-mouth recommendations.
      </p>

      <h2>Our Vision</h2>
      <p>
        To provide honest travel services without hidden charges and become the most trusted 
        travel partner for Uttarakhand journeys.
      </p>

      <h2>Why Choose Us</h2>
      <ul>
        <li>✔ No middleman – direct booking</li>
        <li>✔ Transparent pricing</li>
        <li>✔ Experienced drivers for hill travel</li>
        <li>✔ Trusted since 2017</li>
      </ul>

      <h2>Our Services</h2>
      <ul>
        <li>🚗 Cab Services</li>
        <li>🛕 Char Dham Yatra</li>
        <li>🚁 Kedarnath Travel Support</li>
        <li>🏔 Uttarakhand Tour Packages</li>
      </ul>

      <div style={{marginTop:30,padding:20,background:'#f5f5f5',borderRadius:10}}>
        <h3>Plan Your Trip Today</h3>
        <p>Get best price with direct booking support.</p>
        <a href="https://wa.me/917017082807" target="_blank">
          <button style={{padding:'10px 20px',background:'green',color:'#fff',border:'none',borderRadius:5}}>
            Contact on WhatsApp
          </button>
        </a>
      </div>

    </div>
  )
}
