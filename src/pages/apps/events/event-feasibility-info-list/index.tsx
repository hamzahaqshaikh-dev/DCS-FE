import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import "@fullcalendar/react";

// components
import PageTitle from "../../../../components/PageTitle";
import { Link } from "react-router-dom";

const EventFeasibilityInfoList = () => {
  return (
    <>
      <Row>
        {/* Left Section */}
        <Col lg={8}>
          <Card className="event-card">
            <Card.Header className="event-header bg-darkBlueShaded text-white pt-3 pb-3 px-4">
              <h3 className="mb-1 text-white">EVENT FEASIBILITY ASSESSMENT</h3>
              <p className="fs-5 mb-0">Key Event Information</p>
            </Card.Header>

            <Card.Body className="p-0">
              <ListGroup variant="flush">
                {[
                  "Overview",
                  "Bidding Landscape",
                  "Stakeholders",
                  "Infrastructure",
                  "Budget, profit & loss (QAR) (projected)",
                  "Economic impact projection data",
                ].map((item, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex align-items-center justify-content-between p-3"
                  >
                    <div className="d-flex align-items-center">
                      <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">{index + 1}</h3>
                      <div>
                        <h4 className="mb-0">{item}</h4>
                        <small className="text-black fs-5 fw-light">
                          Lorem ipsum dolor sit amet consectetur.
                        </small>
                      </div>
                    </div>
                    <i className="mdi mdi-chevron-right fs-2"></i>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Section */}
        <Col lg={4}>

          <div className="position-relative p-2 mb-5">
            <h3 className="text-black">Organization Name</h3>
            <h4 className="mb-4 text-muted">Application Sections</h4>
            <div className="position-relative ms-2">
              {[
                { title: "Key Event Information", date: "03/02/2025 10:30 PM", author: "By Khalid Al-Ansari" },
                { title: "Event Budget Details" },
                { title: "Event Impact" },
                { title: "Attachments" }
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
          <hr className="my-3" />
          <div className="d-flex justify-content-between mt-3">
            <Button variant="outline-primary" className="w-50 me-2 text-uppercase fw-bold">
              Save as a Draft
            </Button>
              <Link to="/apps/event-form" className="w-50 btn btn-primary border-0">Next</Link>
          </div>
          <hr className="my-3" />
        </Col>
      </Row>
    </>
  );
};

export default EventFeasibilityInfoList;
