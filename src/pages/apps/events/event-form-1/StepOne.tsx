import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import StepWizard from "react-step-wizard";
import { Row, Col, Card, Button, Form, Accordion } from "react-bootstrap";
import HyperDatepicker from "@/components/Datepicker";
import EventFormGroup from "./EventFormGroup";

const StepOne = ({ control, errors, saveDraft, handleValidation }) => {
    return (
        <Row>
            <Col lg={8}>
                <Card className="event-card">
                    <Card.Header className="event-header bg-darkBlueShaded text-white pt-3 pb-3 px-4">
                        <h3 className="mb-1 text-white">EVENT FEASIBILITY ASSESSMENT</h3>
                        <p className="fs-5 mb-0">Key Event Information</p>
                    </Card.Header>
                    <Card.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">1</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Overview</h4>
                                            <small className="text-black fs-5 fw-light">
                                                Please Complete the Event Details
                                            </small>
                                        </div>
                                    </div>
                                    <i className="mdi mdi-chevron-right fs-2"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col lg={6}>
                                                <EventFormGroup label="Name" name="name" control={control} errors={errors} placeholder="Enter event name" as="input" />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup label="Year" name="year" control={control} errors={errors} placeholder="Enter event year" as="select" options={Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i)} />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup
                                                    label="Date"
                                                    name="date"
                                                    control={control}
                                                    errors={errors}
                                                    as="datepicker"
                                                    placeholder="Enter event date"
                                                    hideAddon={true}
                                                />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Edition" name="edition" control={control} errors={errors} placeholder="First / Second etc." as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Duration" name="duration" control={control} errors={errors} placeholder="Enter duration" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="No. of Competitions (Optional)" name="competitions" control={control} errors={errors} placeholder="Enter no. of competitions" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Cadence" name="cadence" control={control} errors={errors} placeholder="Single, Multi-year, Annual, Cyclical.." as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Scale" name="scale" control={control} errors={errors} placeholder="Mega (Olympics, World Cup and Expo)" as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup maxLength={150} label="Event Overview" name="eventOverview" control={control} errors={errors} placeholder="Provide a high-level description of the event..." as="textarea" />
                                            </Col>

                                            <Col lg={12}>
                                                <EventFormGroup maxLength={100} label="Purpose" name="purpose" control={control} errors={errors} placeholder="What are the ambitions and objectives for the event?" as="textarea" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup maxLength={150} label="Target audience" name="targetAudience" control={control} errors={errors} placeholder="Describe the target audience and provide a reason why this is your target audience" as="textarea" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Does the event require an organizing committee?" name="organizingCommittee" control={control} errors={errors} placeholder="" as="radio"
                                                    options={[
                                                        { label: "No", value: "no" },
                                                        { label: "Yes", value: "yes" }
                                                    ]}
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="Organizing Committee Details"
                                                    name="organizingCommitteeDetails"
                                                    control={control}
                                                    errors={errors}
                                                    placeholder="Provide details on who will be part of..."
                                                    maxLength={150}
                                                />                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup maxLength={150} label="Event location" name="eventLocation" control={control} errors={errors} placeholder="Provide details on the location of the event and why the location is / was planned / chosen" as="textarea" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Status" name="status" control={control} errors={errors} placeholder="Provide details on the location of the event and why the location is / was planned / chosen" as="input" />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">2</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Bidding Landscape</h4>
                                            <small className="text-black fs-5 fw-light">
                                                Lorem ipsum dolor sit amet consectetur. Id nisl ut non
                                            </small>
                                        </div>
                                    </div>
                                    <i className="mdi mdi-chevron-right fs-2"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col lg={12}>
                                                <EventFormGroup label="Was / is there a formal bidding process for the event?" name="formalBidding" control={control} errors={errors} placeholder="" as="radio"
                                                    options={[
                                                        { label: "No", value: "no" },
                                                        { label: "Yes", value: "yes" }
                                                    ]}
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label=""
                                                    name="supportingDocuments"
                                                    control={control}
                                                    errors={errors}
                                                    as="file"
                                                    uploadTitle="Documentation"
                                                    previewTitle="Document Preview"
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup maxLength={100} label="Briefly describe the bidding process" name="biddingProcess" control={control} errors={errors} placeholder="Include phases, timeframes, documents required, fees required, etc." as="textarea" />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">3</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Stakeholders</h4>
                                            <small className="text-black fs-5 fw-light">
                                                Lorem ipsum dolor sit amet consectetur. Id nisl ut non
                                            </small>
                                        </div>
                                    </div>
                                    <i className="mdi mdi-chevron-right fs-2"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col lg={6}>
                                                <EventFormGroup label="Qatar government event owner / oganizer" name="governmentEventOwner" control={control} errors={errors} placeholder="Name of government entity organizing the event" as="input" />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup label="Event rights holder" name="rightHolder" control={control} errors={errors} placeholder="Name of the entity that owns the event rights / IP" as="input" />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup label="Government stakeholders" name="governmentStakeholders" control={control} errors={errors} placeholder="Ministries, authorities, other government entities involved." as="input" />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup label="All other stakeholders" name="allOtherStakeholders" control={control} errors={errors} placeholder="Mention any stakeholders to be involved in the event" as="input" />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">4</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Infrastructure</h4>
                                            <small className="text-black fs-5 fw-light">
                                                Lorem ipsum dolor sit amet consectetur. Id nisl ut non
                                            </small>
                                        </div>
                                    </div>
                                    <i className="mdi mdi-chevron-right fs-2"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col lg={6}>
                                                <EventFormGroup label="Primary Venues" name="primaryVenues" control={control} errors={errors} placeholder="Name the venues necessary to host the event" as="input" />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup label="Secondary / Ancillary Venue(s) *Optional" name="secondaryVenues" control={control} errors={errors} placeholder="State the necessary secondary venues" as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup maxLength={100} label="New permanent infrastructure / facilities / improvements" name="permanentInfrastructure" control={control} errors={errors} placeholder="Provide information on new permanent infrastructure / facilities / improvements required for this event to be staged" as="textarea" />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">5</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Budget, profit & loss (QAR) (projected)</h4>
                                            <small className="text-black fs-5 fw-light">
                                                Lorem ipsum dolor sit amet consectetur. Id nisl ut non
                                            </small>
                                        </div>
                                    </div>
                                    <i className="mdi mdi-chevron-right fs-2"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col lg={4}>
                                                <EventFormGroup suffix="QAR" label="Total Tickets" name="totalTicket" control={control} errors={errors} placeholder="" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup suffix="QAR" label="Total Revenues" name="totalRevenue" control={control} errors={errors} placeholder="" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup suffix="QAR" label="Total Costs" name="totalCost" control={control} errors={errors} placeholder="" as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="New permanent infrastructure / facilities / improvements" name="totalRevenueRightHolder" control={control} errors={errors} placeholder="Total revenues (excluding Government funding) minus Total costs and Revenue share to the rights holder and other entities" as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Government funding required" name="governmentFunding" control={control} errors={errors} placeholder="Projected value of funding required to support the event cash-flows" as="input" />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">6</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Impact projection data</h4>
                                            <small className="text-black fs-5 fw-light">
                                                Lorem ipsum dolor sit amet consectetur. Id nisl ut non
                                            </small>
                                        </div>
                                    </div>
                                    <i className="mdi mdi-chevron-right fs-2"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col lg={6}>
                                                <EventFormGroup label="Total projected number of unique attendees / client groups" name="numberofUniqueAttendees" control={control} errors={errors} placeholder="E.g.athletes, officials, spectators, sponsors, guests..etc." as="input" />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup label="Estimated % of international visitors" name="estimatedVisitors" control={control} errors={errors} placeholder="" as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Projected Total Economic Impact (QAR)" name="totalEconomicImpact" control={control} errors={errors} placeholder="The economic activity stimulated by: organisers, visitors.. rtc." as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Spectators / participants / attendees spend (QAR) in host economy" name="spectatorsSpend" control={control} errors={errors} placeholder="(included in Projected Total Economic Impact)" as="input" />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4} className="position-sticky h-100" style={{top: 60}}>
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
                    <Button variant="outline-primary" className="w-50 me-2 text-uppercase fw-bold" onClick={saveDraft}>
                        Save as a Draft
                    </Button>
                    <Button variant="primary" className="w-50 btn btn-primary border-0" onClick={handleValidation}>
                        Next
                    </Button>
                </div>
            </Col>
        </Row>
    )
};


export default StepOne;