import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import StepWizard from "react-step-wizard";
import { Row, Col, Card, Button, Form, Accordion } from "react-bootstrap";
import HyperDatepicker from "@/components/Datepicker";
import EventFormGroup from "./EventFormGroup";

const StepTwo = ({ control, errors, saveDraft, handleValidation }) => {
    return (
        <Row>
            <Col lg={8}>
                <Card className="event-card">
                    <Card.Header className="event-header bg-darkBlueShaded text-white pt-3 pb-3 px-4">
                        <h3 className="mb-1 text-white">Event Budget Details</h3>
                        <p className="fs-5 mb-0">Event Feasibility Assessment</p>
                    </Card.Header>
                    <Card.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className="mb-3">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">1</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Budget Details</h4>
                                            <small className="text-black fs-5">
                                                Please Complete the Event Details
                                            </small>
                                        </div>
                                    </div>
                                    <i className="mdi mdi-chevron-right fs-2"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col lg={12}>
                                                <EventFormGroup label="Has an event budget been completed?" name="hasBudgetCompleted" control={control} errors={errors} placeholder="" as="radio"
                                                    options={[
                                                        { label: "No", value: "no" },
                                                        { label: "Yes", value: "yes" }
                                                    ]}
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup rows={6} label="Budget details" name="budgetDetails" control={control} errors={errors} placeholder="Attach details of required budget, allocated budget and budget enhancements" as="textarea" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label=""
                                                    name="attachment-1-1"
                                                    control={control}
                                                    errors={errors}
                                                    as="file"
                                                    uploadTitle="Attachment (1)"
                                                    previewTitle="Attachment (1) Preview"
                                                />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="mb-3">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">2</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Ticket / registration / participation fees details</h4>
                                            <small className="text-black fs-5">
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
                                                <EventFormGroup label="Has a full ticket / registration / participation fees revenue breakdown been completed?" name="registrationFeesBreakdown" control={control} errors={errors} placeholder="" as="radio"
                                                    options={[
                                                        { label: "No", value: "no" },
                                                        { label: "Yes", value: "yes" }
                                                    ]}
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup maxLength={100} label="Fee Details" name="feesDetails" control={control} errors={errors} placeholder="This should include detailed ticket / registration / participation fees revenue forecasts by tiered price category, price per tier" as="textarea" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup maxLength={100} label="Number of tickets / registrations / participation fees pricing categoriesOutline" name="numberOfTickets" control={control} errors={errors} placeholder="Outline the assumptions that drive the ticket / registration / participation revenue below" as="textarea" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Average ticket / registration / participation fee price net of any discounts (QAR)" name="averageTicketFee" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Proportion of tickets / registrations / participation places projected to be sold" name="proportionOfTickets" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Projected total number of seats / spaces available at the venue x Total no. of event sessions" name="totalNumberOfSeats" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup label="Tickets, registrations, participation places to be sold to spectators, visitors, general public" name="ticketSoldToSpectators" control={control} errors={errors} placeholder="Projected tickets, registrations, & participation places to be purchased by ticket holders" as="input" />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup label="Tickets / registrations / participation places to be assigned to non fee-paying attendees" name="ticketPlaceToAssignToNonFeePayAttendees" control={control} errors={errors} placeholder="E.g. VIPs, VVIPs, Sports teams, athletes, media, officials, guests, suppliers, exhibitors, conference speakers." as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Total projected tickets / registrations / participation places" name="totalProjectedTickets" control={control} errors={errors} placeholder="" as="input" />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="mb-3">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">3</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Event costs (QAR) (projected)</h4>
                                            <small className="text-black fs-5">
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
                                                <EventFormGroup label="Event rights" name="eventRights" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Cost of Revenue share of rights holder" name="costOfRightHolders" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Cost of Revenue - Others" name="costOfOthersRevenue" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Venue hire" name="venueHire" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Event Management Company" name="eventManagementCompany" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Cost of new infrastructure & improvements" name="costOfNewInfrastructure" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Operations and production" name="operationsAndProduction" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Venue set up costs" name="venueSetUpCosts" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Marketing, branding, comms, & PR costs" name="MarketingCost" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Event services costs" name="eventServiceCost" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Permits, visas, & insurances" name="permitsVisasInsurance" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Commercial costs" name="commercialCosts" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Security and safety" name="securityAndSafety" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Workforce costs - direct and indirect" name="workforceCostDirectAndIndirect" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Government services costs" name="governmentServiceCosts" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                            <Col lg={4}>
                                                <EventFormGroup label="Is there any other cost?" name="isThereAnyOtherCost" control={control} errors={errors} placeholder="" as="radio"
                                                    options={[
                                                        { label: "No", value: "no" },
                                                        { label: "Yes", value: "yes" }
                                                    ]}
                                                />
                                            </Col>
                                            <Col lg={8}>
                                                <EventFormGroup label="Other cost" name="otherCost" control={control} errors={errors} placeholder="QAR" as="input" />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className="mb-3">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">4</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Government support</h4>
                                            <small className="text-black fs-5">
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
                                                <EventFormGroup label="Government funding required" name="governmentFundingRequired" control={control} errors={errors} placeholder="Projected value of funding required to support the event cash-flows" as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Key support areas" name="keySupportAreas" control={control} errors={errors} placeholder="List specific areas of government support that will be provided that are not direct funding" as="input" />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className="mb-3">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">5</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Event suppliers (projected)</h4>
                                            <small className="text-black fs-5">
                                                List the event suppliers planned to be used for the event, listing the projected value of their contracts and the FTE number of staff to be engaged to supply the services over the contracted period.
                                            </small>
                                        </div>
                                    </div>
                                    <i className="mdi mdi-chevron-right fs-2"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col lg={12}>
                                                <EventFormGroup label="Venue owners" name="VenueOwner" control={control} errors={errors} placeholder="" as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Event Delivery (event management company, operations, security, hospitality, transportation, presentation, last mile etc.)" name="eventDelivery" control={control} errors={errors} placeholder="" as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Marketing and Promotion" name="marketingAndPromotion" control={control} errors={errors} placeholder="" as="input" />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Other" name="eventSuppliersOthers" control={control} errors={errors} placeholder="" as="input" />
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4} className="position-sticky h-100" style={{ top: 60 }}>
                <div className="position-relative p-2 mb-5">
                    <h3 className="text-black">Organization Name</h3>
                    <h4 className="mb-4 text-muted">Application Sections</h4>
                    <div className="position-relative ms-2">
                        {[
                            { title: "Key Event Information", date: "03/02/2025 10:30 PM", author: "By Khalid Al-Ansari" },
                            { title: "Event Budget Details", date: "03/02/2025 11:30 PM", author: "By Amna Al-Kuwari" },
                            { title: "Event Impact" },
                            { title: "Attachments" }
                        ].map((section, index, array) => {
                            const isCompleted = index <= 1; // Make index 0 & 1 active
                            return (
                                <div key={index} className="d-flex align-items-start position-relative bg-white pb-4" style={{ minHeight: "70px" }}>

                                    {/* Circle */}
                                    <div
                                        className={`rounded-circle border d-flex align-items-center justify-content-center 
                        ${isCompleted ? "bg-green text-white" : ""}`}
                                        style={{ width: "24px", height: "24px", zIndex: 1 }}
                                    >
                                        {isCompleted && "✓"}
                                    </div>

                                    {/* Vertical Line */}
                                    {index !== array.length - 1 && (
                                        <div className="position-absolute" style={{
                                            width: "2px",
                                            height: "100%", // Ensure full height between circles
                                            backgroundColor: "#ccc",
                                            left: "11px",
                                            top: "24px",
                                            zIndex: 0
                                        }}></div>
                                    )}

                                    {/* Text Container */}
                                    <div className="ms-3 d-flex flex-column justify-content-center">
                                        <h5 className="mt-0 mb-1">{section.title}</h5>
                                        {section.date && <small className="text-black">{section.date} <br /> {section.author}</small>}
                                    </div>
                                </div>
                            );
                        })}
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


export default StepTwo;