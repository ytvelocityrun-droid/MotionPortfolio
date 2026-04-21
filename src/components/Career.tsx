import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>Self-Employed / Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started my journey in video production, mastering tools like Premiere Pro 
              to create engaging content with smooth pacing and professional storytelling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Motion Designer</h4>
                <h5>Advanced Graphics</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Specialized in After Effects to create advanced motion graphics. Developed 
              skills in 3D animations, clean transitions, and complex visual effects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Freelancer</h4>
                <h5>Motion Portfolio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working on high-quality 3D animations and professional video 
              projects using the full Adobe Creative Suite (After Effects, Photoshop, Illustrator).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;