import React from "react";
import "../UsersList/UsersList.css";
import { Modal, Button } from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import DateCalender from "../Calender/DateCalender.js";

function UserModal(props) {
  return (
    <div>
      <Modal
        className="modal-pos"
        show={props.show}
        onHide={props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>ID: {props.user?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            <PersonIcon />
            {props.user?.real_name}
          </h5>
          <h5>
            <PersonPinCircleIcon />
            {props.user?.tz}
          </h5>
          <ul>
            {props.user.activity_periods?.map((item, index) => (
              <li key={index}>
                {item["start_time"]} - {item["end_time"]}
              </li>
            ))}
          </ul>
          <Button
            className="cal-btn"
            variant="success"
            onClick={props.toggleCalView}
          >
            Calender View
            {props.calenderView ? (
              <span className="arrow">-</span>
            ) : (
              <span className="arrow">+</span>
            )}
          </Button>
          {props.calenderView && (
            <div className="date-calender">
              <DateCalender periods={props.user.activity_periods} />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserModal;
