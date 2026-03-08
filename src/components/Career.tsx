import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Venturemond</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a full-stack Lead Management System using React, Node.js,
              Express.js, and MongoDB. Redesigned and enhanced the Venturemond
              website by improving UI/UX, adding new pages, and implementing
              additional sections.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Venturemond — Stacli</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and developed the Stacli company website from scratch
              with a responsive UI and modern layout. Managed production updates
              by connecting to AWS EC2 via SSH and deploying changes using Git
              pull and frontend build updates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Venturemond — NOW</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Integrated external website inquiry pipelines by connecting
              multiple MongoDB databases to display incoming leads from
              Venturemond and Stacli websites. Implemented automated email
              workflows and backend API integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
