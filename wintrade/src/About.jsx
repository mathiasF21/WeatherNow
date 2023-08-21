function About() {
    return (
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Information</h1>
          <div className="email-container">
            <img src="/images/email.svg" alt="email symbol" />
            <h3>mathiasforster21@gmail.com</h3>
          </div>
          <img src="/images/github.svg" alt="email symbol" />
          <a href="https://github.com/mathiasF21/WinTrade.git" target="_blank" rel="noreferrer">GitHub repository link</a>
        </div>
        <div className="about-container">
          <h1>About this project</h1>
          <p>
            The "Weather Forecast Display" project aims to create a dynamic web 
            application that fetches and displays weather forecast information for a 
            specific location using an external OpenWeather API. The project leverages HTML, 
            CSS, and JavaScript (JSX) to create an interactive and informative user experience.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;