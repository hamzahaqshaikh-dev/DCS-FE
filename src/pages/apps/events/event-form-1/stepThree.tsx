import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import StepWizard from "react-step-wizard";
import { Row, Col, Card, Button, Form, Accordion } from "react-bootstrap";
import HyperDatepicker from "@/components/Datepicker";
import EventFormGroup from "./EventFormGroup";

const StepThree = ({ control, errors, saveDraft, handleValidation }) => {
    return (
        <Row>
            <Col lg={8}>
                <Card className="event-card">
                    <Card.Header className="event-header bg-darkBlueShaded text-white pt-3 pb-3 px-4">
                        <h3 className="mb-1 text-white">Event Impact</h3>
                        <p className="fs-5 mb-0">Event Feasibility Assessment</p>
                    </Card.Header>
                    <Card.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className="mb-3">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">1</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Economic impact projection data</h4>
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
                                                <EventFormGroup label="Has a projected economic impact study been completed?" name="hasProjectEconomicImpact" control={control} errors={errors} placeholder="" as="radio"
                                                    options={[
                                                        { label: "No", value: "no" },
                                                        { label: "Yes", value: "yes" }
                                                    ]}
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label=""
                                                    name="attachment1"
                                                    control={control}
                                                    errors={errors}
                                                    as="file"
                                                    addBtn={false}
                                                    uploadTitle="Attach a copy of the projected economic impact report"
                                                    previewTitle="Attachment (1) Preview"
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="Projected Total Economic Impact (QAR)"
                                                    name="projectTotalEconmicImpact"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder="The economic activity stimulated by: the organiser, spectatrs, public attendees and participants as a result of their visit to the event or wider impact programs."
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
                                            <h4 className="mb-1 mt-0">Organizer spend (Projected)</h4>
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
                                                <EventFormGroup
                                                    label="Direct workforce prior to event - number of FTEs (FullTimeEquivalent employees)"
                                                    name="directWorkforceEventAndNumberOfETFS"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder="Total number of FTEs expected to be employed by the LOC / event delivery agency required to plan the event"
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="Direct workforce prior to event - number of FTEs (FullTimeEquivalent employees) 2"
                                                    name="directWorkforceEventAndNumberOfETFS2"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder="Total number of FTEs expected to be employed by the LOC / event delivery agency required to plan the event 2"
                                                />
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
                                            <Col lg={6}>
                                                <EventFormGroup
                                                    label="Direct workforce prior to event - number of FTEs (FullTimeEquivalent employees) 3"
                                                    name="directWorkforceEventAndNumberOfETFS3"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder="Total number of FTEs expected to be employed by the LOC / event delivery agency required to plan the event 3"
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup
                                                    label="Direct workforce prior to event - number of FTEs (FullTimeEquivalent employees) 4"
                                                    name="directWorkforceEventAndNumberOfETFS4"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder="Total number of FTEs expected to be employed by the LOC / event delivery agency required to plan the event 4"
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup
                                                    label="Direct workforce prior to event - number of FTEs (FullTimeEquivalent employees) 5"
                                                    name="directWorkforceEventAndNumberOfETFS5"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder="Total number of FTEs expected to be employed by the LOC / event delivery agency required to plan the event 5"
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup
                                                    label="Direct workforce prior to event - number of FTEs (FullTimeEquivalent employees) 6"
                                                    name="directWorkforceEventAndNumberOfETFS6"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder="Total number of FTEs expected to be employed by the LOC / event delivery agency required to plan the event 6"
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup
                                                    label="Direct workforce prior to event - number of FTEs (FullTimeEquivalent employees) 7"
                                                    name="directWorkforceEventAndNumberOfETFS7"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder="Total number of FTEs expected to be employed by the LOC / event delivery agency required to plan the event 7"
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup
                                                    label="Direct workforce prior to event - number of FTEs (FullTimeEquivalent employees) 8"
                                                    name="directWorkforceEventAndNumberOfETFS8"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder="Total number of FTEs expected to be employed by the LOC / event delivery agency required to plan the event 8"
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="Total workforce"
                                                    name="totalWorkforce"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
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
                                            <h4 className="mb-1 mt-0">Destination promotion impact</h4>
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
                                            <Col lg={6}>
                                                <EventFormGroup
                                                    label="Broadcast reach: Total TV / streaming / digital audience viewing figures - Qatar only"
                                                    name="broadcastReachQatarOnly"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup
                                                    label="Broadcast reach: Total TV / streaming / digital audience viewing figures - globally"
                                                    name="broadcastReachGlobally"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup
                                                    label="Target broadcast countries"
                                                    name="targetBroadcastCountries"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <EventFormGroup
                                                    label="Event social media following - Facebook, Instagram, X, TikTok"
                                                    name="socialMediaEventsFollowing"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="Advertising equivalent value (AVE) for Qatar as a destination"
                                                    name="advertisingEquivalentValueQatarDestination"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
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
                                            <h4 className="mb-1 mt-0">Social and other impact</h4>
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
                                                <EventFormGroup
                                                    label="Please provide an overview of relevant initiatives and outcomes planned for this event to help drive Qatar's national strategic objectives (i.e. sustainable economic growth, fiscal sustainability, future-ready workforce, cohesive society, quality of life, environmental sustainability, government excellence)"
                                                    name="relevantInitiativesOutcomePlannedForEvents"
                                                    control={control}
                                                    errors={errors}
                                                    placeholder="Participation programs, schools programs, education programs, sustainability programs, etc."
                                                    as="textarea"
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="Provide data on human capital development programs planned"
                                                    name="humanCapitalDevelopmentProgram"
                                                    control={control}
                                                    errors={errors}
                                                    placeholder="Training sessions to be delivered, training hours, materials to be developed etc."
                                                    as="textarea"
                                                    maxLength={100}
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="Total number of volunteers"
                                                    name="numberOfVolunteers"
                                                    control={control}
                                                    errors={errors}
                                                    placeholder=""
                                                    as="input"
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="Others"
                                                    name="SocialImpactOthersField"
                                                    control={control}
                                                    errors={errors}
                                                    placeholder=""
                                                    as="input"
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup label="Has a projected environmental impact study been completed?" name="projectedEnvironmentalImpact" control={control} errors={errors} placeholder="" as="radio"
                                                    options={[
                                                        { label: "No", value: "no" },
                                                        { label: "Yes", value: "yes" }
                                                    ]}
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label=""
                                                    name="repotCopyAttachment"
                                                    control={control}
                                                    errors={errors}
                                                    as="file"
                                                    uploadTitle="Attach a copy of the report (1)"
                                                    previewTitle="Report (1) Preview"
                                                    addBtn={false}
                                                />
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
                            const isCompleted = index <= 2; // Make index 0 & 1 active
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


export default StepThree;