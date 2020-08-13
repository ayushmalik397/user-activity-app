import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UsersList.css";
import spin from "./Spin.gif";
import UserModal from "../Modal/UserModal";

function UsersList() {
  const [members, changeMembers] = useState([]);
  const [show, setShow] = useState(false);
  const [user, changeUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [calenderView, setCalender] = useState(false);

  useEffect(() => {
    async function fetchMembers() {
      let res = await axios.get(
        "https://activity-backend-app.web.app/members",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );
      changeMembers(res.data.members);
      setLoading(false);
    }
    fetchMembers();
  }, []);

  async function openUser(id) {
    let res = await axios.get(
      "https://activity-backend-app.web.app/members/" + id
    );
    changeUser(res.data);
    setShow(true);
  }

  const handleClose = () => {
    setCalender(false);
    setShow(false);
  };

  const toggleCalView = () => {
    setCalender(!calenderView);
  };

  return (
    <div className="users-page">
      <h1>Users</h1>
      {loading ? (
        <div className="loader">
          <img src={spin} alt="loading" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="list-users">
          {members.map((item, index) => (
            <div className="user" onClick={() => openUser(item.id)} key={index}>
              <p className="id">
                <span className="head">ID: </span>
                <span className="value">{item.id}</span>
              </p>
              <hr />
              <div className="g-details">
                <p className="g-name">
                  <span>Name: </span>
                  <span className="g-name-value">{item.real_name}</span>
                </p>
                <p className="g-tz">
                  <span>Time Zone: </span>
                  <span className="g-tz-value">{item.tz}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <UserModal
        show={show}
        handleClose={handleClose}
        user={user}
        calenderView={calenderView}
        toggleCalView={toggleCalView}
      />
    </div>
  );
}

export default UsersList;
