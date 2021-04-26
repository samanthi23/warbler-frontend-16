// stateless functional component
import React from "react";
import { Link } from "react-router-dom";
// style home-hero in index.css

const Homepage = () => {
  return (
    <div className="home-hero">
      <h1>What's Happening?</h1>
      <h4>New to Warbler?</h4>
      {/* we don't have any of these routes built yet */}
      <Link to="/signup" className="btn btn-primary">
        Sign up here
      </Link>
    </div>
  );
};

export default Homepage;
