import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "@fullcalendar/react";
import { DateClickArg, Draggable } from "@fullcalendar/interaction";
import { EventClickArg, EventInput } from "@fullcalendar/core";
import classNames from "classnames";

// components
import PageTitle from "../../../components/PageTitle";

import Calendar from "./Calendar";
import AddEditEvent from "./AddEditEvent";

// dummy data
import { defaultEvents } from "./data";

const SidePanel = () => {
  // external events
  const externalEvents = [
    {
      id: 1,
      className: "bg-success",
      title: "New Theme Release",
    },
    {
      id: 2,
      className: "bg-info",
      title: "My Event",
    },
    {
      id: 3,
      className: "bg-warning",
      title: "Meet manager",
    },
    {
      id: 4,
      className: "bg-danger",
      title: "Create New theme",
    },
  ];

  return (
    <>
      <div id="external-events">
        <br />
        <p className="text-muted">
          Drag and drop your event or click in the calendar
        </p>
        {/* external events */}
        {(externalEvents || []).map((event, index) => {
          return (
            <div
              key={index}
              className={classNames("external-event", event.className)}
              title={event.title}
              data-class={event.className}
            >
              <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
              {event.title}
            </div>
          );
        })}
      </div>

      <div className="mt-5 d-none d-xl-block">
        <h5 className="text-center">How It Works ?</h5>

        <ul className="ps-3">
          <li className="text-muted mb-3">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </li>
          <li className="text-muted mb-3">
            Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage.
          </li>
          <li className="text-muted mb-3">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </li>
        </ul>
      </div>
    </>
  );
};

const CalendarApp = () => {

  return (
    <>
      <PageTitle title="Event Feasibility Assessment application" />
      <p className="fs-5 text-black">Submit your Event Feasibility Assessment Application</p>
      <Row>
        <Col>
          <Card>
            <Card.Body className="p-0">
              <Row className="justify-content-between">
                <Col lg={6}>
                  <Card className="border">
                    <Card.Body className="p-4">
                      <p className="text-black">
                        This application is designed to evaluate the feasibility of your event and assess its
                        potential economic and social impact. By providing accurate details, you help ensure
                        a smooth approval process and seamless event planning.
                      </p>

                      <h5>What this Form Covers</h5>
                      <ul>
                        <li className="text-black">Key Event Information – Basic details about your event, including name, type, and dates.</li>
                        <li className="text-black">Event Budget – Estimated costs, funding sources, and financial feasibility.</li>
                        <li className="text-black">Event Impact – Expected economic and social contributions to the country.</li>
                      </ul>

                      <h5 className="text-black">Collaboration & Draft Saving</h5>
                      <ul>
                        <li className="text-black">You can save your progress as a draft at any time and return later to complete it.</li>
                        <li className="text-black">Multiple team members can collaborate on filling out the form for efficiency.</li>
                      </ul>

                      <h5 className="text-black">Need Assistance?</h5>
                      <p className="text-black">
                        If you need any help during the application process, our support team is here to assist you.
                        Please reach out to us at <a href="mailto:startegy@sc.qa">startegy@sc.qa</a> during business hours.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={4}>
                  <h3 className="text-black">Estimated Time for Completion</h3>
                  <p className="d-flex align-items-center pt-3 ps-3 text-black">
                    <i className="mdi mdi-clock-outline me-2 fs-3"></i> 15 - 20 minutes
                  </p>

                  {/* Horizontal Line */}
                  <hr className="my-3" />

                  <h3 className="text-black mt-3">Documents Needed</h3>
                  <Row>
                    <Col xs={6}>
                      <p><p className="mb-0">📌</p>Registration Certificate</p>
                      <p><p className="mb-0">📌</p>Event Proposal Document</p>
                      <p><p className="mb-0">📌</p>Previous Event Reports (if applicable)</p>
                    </Col>
                    <Col xs={6}>
                      <p><p className="mb-0">📌</p>Budget Breakdown & Funding Sources</p>
                      <p><p className="mb-0">📌</p>Sponsorship Agreements</p>
                    </Col>
                  </Row>

                  {/* Horizontal Line */}
                  <hr className="my-3" />

                  <Button className="btn btn-lg font-16 btn-primary w-100">
                    Start Application
                  </Button>
                  <hr className="my-3" />
                </Col>


              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </>
  );
};

export default CalendarApp;
