import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,

      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const getUserInfo = await fetch("https://api.github.com/users/Akshay");
    const json = await getUserInfo.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Class Component</h1>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <img className="avatar" src={avatar_url} alt={name} />
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
