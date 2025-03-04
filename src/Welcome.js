import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Welcome = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-4">
      <div className="container text-center">
        <h1 className="display-4 fw-bold text-primary mb-4">
          Save weeks building internal tools and automating workflows
        </h1>
        <p className="lead text-secondary">
          <strong>EngineXpress</strong> is a Pratt & Whitney NCLC platform that
          saves engineers time and energy building apps that integrate with any
          data source and speed up any process.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
