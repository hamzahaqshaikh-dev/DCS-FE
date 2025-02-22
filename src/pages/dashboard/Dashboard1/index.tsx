import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

// components
import HyperDatepicker from "../../../components/Datepicker";

import Statistics from "./Statistics";
import RevenueChart from "./RevenueChart";
import SalesAnalyticsChart from "./SalesAnalyticsChart";
import UsersBalances from "./UsersBalances";
import RevenueHistory from "./RevenueHistory";

import { balances, revenueHistory } from "./data";
import { Link } from "react-router-dom"; // Ensure you're using React Router
import { FaRegBuilding } from "react-icons/fa"; // Import an icon for the organization
import addEventIcon from '@/assets/dsc-images/add-event-icon.png'

const Dashboard1 = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState([]); // Assuming events are an array

  /*
   * handle date change
   */
  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <>
      <Row>
        <Col className="ps-0">
          <div className="page-title-box">
            {/* <div className="page-title-right">
              <form className="d-flex align-items-center mb-3">
                <div className="input-group input-group-sm">
                  <HyperDatepicker
                    value={selectedDate.toDateString()}
                    inputClass="border"
                    onChange={(date) => {
                      onDateChange(date);
                    }}
                  />
                </div>
                <button className="btn btn-blue btn-sm ms-2">
                  <i className="mdi mdi-autorenew"></i>
                </button>
                <button className="btn btn-blue btn-sm ms-1">
                  <i className="mdi mdi-filter-variant"></i>
                </button>
              </form> 
            </div>*/}
            <div className="dashboard-topbar">
              {/* Greeting */}
              <h2 className="greeting">
                Good Afternoon, <span className="username">Khalid</span>
              </h2>

              {/* Organization Link */}
              <p className="organization fs-4">
                <FaRegBuilding className="icon text-black" />
                Qatar Olympic Committee
              </p>

              {/* Subtitle */}
              <p className="text-black fs-4">Let’s bring amazing events to life!</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Show empty state if there are no events */}
      {events.length === 0 && (
        <Row className="justify-content-center">
          <Col lg={10} className="text-center border p-5 me-auto">
            <div className="empty-state">
              <img
                src={addEventIcon} // Update the path accordingly
                alt="No Event"
                className="empty-state-img"
              />
              <h3 className="empty-state-title fw-bold mt-3 mb-2">No Event Added!</h3>
              <p className="empty-state-text col-md-6 col-xl-6 mx-auto">
                You haven’t submitted any event yet. To move forward with your hosting request,
                please fill in the event’s feasibility assessment form.
              </p>
              <Link to="/apps/event-feasibility-info" className="btn btn-primary border-0">Add New Event</Link>
            </div>
          </Col>
        </Row>
      )}

      {/* <Statistics /> */}

      {/* <Row>
        <Col lg={4}>
          <RevenueChart />
        </Col>
        <Col lg={8}>
          <SalesAnalyticsChart />
        </Col>
      </Row> */}

      {/* <Row>
        <Col xl={6}>
          <UsersBalances balances={balances} />
        </Col>
        <Col xl={6}>
          <RevenueHistory revenueHistory={revenueHistory} />
        </Col>
      </Row> */}
    </>
  );
};

export default Dashboard1;
