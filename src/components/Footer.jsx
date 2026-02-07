import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row text-center text-md-start">
          
          <div className="col-md-6 mb-3">
            <h5 className="fw-bold">Manage Users App</h5>
            <p className="small mb-0">
              React CRUD application using Bootstrap 5
            </p>
          </div>

          <div className="col-md-6 mb-3 text-md-end">
            <h6 className="fw-bold">Developed By</h6>
            <p className="small mb-0">Asif Siraj Khan</p>
            <p className="small mb-0">
              <a 
                href="mailto:ashifsirajkhan@gmail.com" 
                className="text-light text-decoration-none"
              >
                ashifsirajkhan@gmail.com
              </a>
            </p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center small">
          © {new Date().getFullYear()} Asif Siraj Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
