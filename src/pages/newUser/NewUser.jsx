import React from "react";
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Joey" />
        </div>

        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Joey Tribbiani" />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="password" />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="jo@sandwitch.com" />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input type="number" placeholder="+1 123 456 78" />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York City" />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="male">Female</label>

            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="male">Other</label>
          </div>
        </div>

        <div className="newUserItem">
          <label>Active</label>
          <select name="active" className="newUserSelect" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserBtn">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
