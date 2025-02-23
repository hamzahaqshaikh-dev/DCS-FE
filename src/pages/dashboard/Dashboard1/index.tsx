import React, { useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

// components
import HyperDatepicker from "../../../components/Datepicker";

import { Link } from "react-router-dom";
import { FaRegBuilding, FaUserCircle } from "react-icons/fa";
import addEventIcon from "@/assets/dsc-images/add-event-icon.png";
import Table from "@/components/Table";
import data from "@/pages/apps/SocialFeed/data";
import profileImg from "@/assets/dsc-images/sidebar-profile-image.png";

const columns = [
  {
    Header: "ID",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Event Name",
    accessor: "eventName",
    sort: true,
  },
  {
    Header: "Sector",
    accessor: "sector",
    sort: false,
  },
  {
    Header: "Filled by",
    accessor: "filledBy",
    sort: true,
    Cell: ({ value }) => (
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        {value.map((person, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <img
              key={index}
              src={person.image}
              alt={person.name}
              title={person.name}
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: index !== 0 ? "-10px" : "0",
                border: "2px solid white",
              }}
            />
            {index === value.length - 1 && (
              <span style={{ marginLeft: "10px" }}>
                {value.map((p) => p.name).join(", ")}
              </span>
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    Header: "Submission Date",
    accessor: "submissionDate",
    sort: false,
  },
  {
    Header: "Location",
    accessor: "location",
    sort: false,
  },
  {
    Header: "Status",
    accessor: "status",
    sort: false,
    Cell: ({ value }) => (
      <span
        style={{
          display: "inline-block",
          backgroundColor: "#FEEFC3", // Light background (adjust if needed)
          color: "#D97706", // Orange text color
          padding: "5px 12px",
          borderRadius: "50px",
        }}
      >
        {value}
      </span>
    ),
  },
];



const posts = [
  {
    id: "ID #4654",
    eventName: 'Event Name',
    sector: 'Entertainment',
    filledBy: [
      { name: "Amna", image: profileImg },
      { name: "Khalid", image: profileImg }
    ],
    submissionDate: "05/02/2025",
    location: "Doha, Qatar",
    status: "Submitted",
  },
  {
    id: "ID #4655",
    eventName: 'Event Name',
    sector: 'Entertainment',
    filledBy: [
      { name: "Amna", image: profileImg },
      { name: "Khalid", image: profileImg }
    ],
    submissionDate: "05/02/2025",
    location: "Doha, Qatar",
    status: "Submitted",
  },
  {
    id: "ID #4656",
    eventName: 'Event Name',
    sector: 'Entertainment',
    filledBy: [
      { name: "Amna", image: profileImg },
      { name: "Khalid", image: profileImg }
    ],
    submissionDate: "05/02/2025",
    location: "Doha, Qatar",
    status: "Submitted",
  },
];



const Dashboard1 = () => {
  const [events, setEvents] = useState([{}]);

  return (
    <>
      <Row>
        <Col className="ps-0">
          <div className="page-title-box">
            <div className="dashboard-topbar">
              <h2 className="greeting">
                Good Afternoon, <span className="username">Khalid</span>
              </h2>
              <p className="organization fs-4">
                <FaRegBuilding className="icon text-black" /> Qatar Olympic Committee
              </p>
              <p className="text-black fs-4">Let’s bring amazing events to life!</p>
            </div>
          </div>
        </Col>
      </Row>

      {events.length === 0 ? (
        <Row className="justify-content-center">
          <Col lg={10} className="text-center border p-5 me-auto">
            <div className="empty-state">
              <img src={addEventIcon} alt="No Event" className="empty-state-img" />
              <h3 className="empty-state-title fw-bold mt-3 mb-2">No Event Added!</h3>
              <p className="empty-state-text col-md-6 col-xl-6 mx-auto">
                You haven’t submitted any event yet. To move forward with your hosting request,
                please fill in the event’s feasibility assessment form.
              </p>
              <Link to="/apps/event-feasibility-info" className="btn btn-primary border-0">
                Add New Event
              </Link>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col lg={8} md={12} className="recent_event_container px-0 mb-3 mb-lg-0">
            <Table
              theadClass="event-list-table-head"
              tableClass="event-table"
              columns={columns}
              data={posts}
              pageSize={10}
              isSortable={true}
              pagination={false}
              isSearchable={false}
            />
          </Col>

          <Col lg={4} md={12} className="px-0 px-lg-3">
            <div className="position-relative px-2 py-2 px-xl-4 py-xl-3 recent_event_container">
              <h3 className="text-black">Recent Event Status</h3>
              <hr className="my-4" />
              <div className="position-relative ms-2">
                {[
                  { title: "Stakeholder Registeration", date: "03/02/2025 10:30 PM" },
                  { title: "Event X Form Submission", date: "03/02/2025 10:30 PM", author: "By Khalid Al-Ansari" },
                  { title: "Evaluation" },
                  { title: "Acceptance" }
                ].map((section, index, array) => (
                  <div key={index} className="d-flex align-items-start position-relative bg-white pb-4" style={{ minHeight: "70px" }}>

                    {/* Circle */}
                    <div
                      className={`rounded-circle border d-flex align-items-center justify-content-center border-green border-2 ${index === 0 ? "bg-green text-white" : ""}`}
                      style={{ width: "24px", height: "24px", zIndex: 1 }}
                    >
                      {index === 0 && "✓"}
                    </div>

                    {/* Vertical Line */}
                    {index !== array.length - 1 && (
                      <div className="position-absolute bg-green" style={{
                        width: "2px",
                        height: "100%",
                        left: "11px",
                        top: "24px",
                        zIndex: 0
                      }}></div>
                    )}

                    {/* Text Container - Keeps text aligned */}
                    <div className="ms-3 d-flex flex-column justify-content-center">
                      <h5 className="mt-0 mb-1">{section.title}</h5>
                      {section.date && <small className="text-black">{section.date} <br /> {section.author}</small>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Dashboard1;
