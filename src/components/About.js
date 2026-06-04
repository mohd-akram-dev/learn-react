import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div className="container">
//       <div className="about">
//         <h1 className="pageTitle">About Us</h1>
//         <h4 className="desc">This is the React Learning Phase</h4>
//       </div>
//       <div className="user-container">
//         <User name={"Function component"} location={"Kanpur"} />
//         <UserClass name={"Class component"} location={"Kanpur Nagar"} />
//       </div>
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="about">
          <h1 className="pageTitle">About Us</h1>
          <h4 className="desc">This is the React Learning Phase</h4>
        </div>
        <div className="user-container">
          <User name={"Function component"} location={"Kanpur"} />
          <UserClass name={"Class component"} location={"Kanpur Nagar"} />
        </div>
      </div>
    );
  }
}

export default About;
