import React, { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTU4NjM0YTEyMGM0YjAyNWM4OTg1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDU0ODU5NywiZXhwIjoxNjM0OTgwNTk3fQ.d2pjiu3hXARuB6f3mTq63Uoo2G-PSC3XElqovB_u-7s",
          },
        })
        .then((res) => {
          setUsers(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
        {users.map((e, i) => {
          return (
            <li className="widgetSmListItem">
              <img
                src={
                  e.profilePic !== ""
                    ? e.profilePic
                    : "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XA6KIXE6FBFM5EWSA25JI5YAU4.jpg"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{e.username}</span>
              </div>
              <button className="widgetSmBtn">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSm;
