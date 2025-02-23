import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import StepWizard from "react-step-wizard";
import { Row, Col, Card, Button, Form, Accordion } from "react-bootstrap";
import HyperDatepicker from "@/components/Datepicker";
import EventFormGroup from "./EventFormGroup";

const StepFour = ({ control, errors, saveDraft, handleValidation }) => {
    return (
        <Row>
            <Col lg={8}>
                <Card className="event-card">
                    <Card.Header className="event-header bg-darkBlueShaded text-white pt-3 pb-3 px-4">
                        <h3 className="mb-1 text-white">Attachments</h3>
                        <p className="fs-5 mb-0">Event Feasibility Assessment</p>
                    </Card.Header>
                    <Card.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="d-flex align-items-center justify-content-between mt-0 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <h3 className="badge bg-darkBlueShaded me-3 py-2 px-2 fw-light rounded-0 fs-5">✱</h3>
                                        <div>
                                            <h4 className="mb-1 mt-0">Note</h4>
                                            <small className="text-black fs-5 fw-light">
                                                Please use the following file name structure:
                                                Event Owner_Event Name [Year of Event]_Name of Document Please write the name of the attached file in the relevant line of your completed RFI
                                            </small>
                                        </div>
                                    </div>
                                    <i className="mdi mdi-chevron-right fs-2"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <h4 className="mb-3">Document Name</h4>
                                    <Form>
                                        <Row>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Post-event reports (if previously held)"
                                                    name="postEventReport"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Event feasibility, planning and strategy documentation (If Available)"
                                                    name="eventPlanningAndStrategyDocument"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Host bidding documentation"
                                                    name="hostBidingDocument"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Event Budget / Profit and Loss (P&L) (If Available)"
                                                    name="eventBudgetProfitAndLoss"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="- Event revenue forecasts by category with assumptions"
                                                    name="eventRevenueForecastByCategory"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="- Event cost forecasts by category with assumptions (If Available)"
                                                    name="eventCostForecastByCategory"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Contracts / agreements with venues / broadcasters / sponsors / partners / suppliers"
                                                    name="contractAggreementBroadcastSponsorsPartnerSupplier"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Economic impact projections"
                                                    name="economicImpactProjectections"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Media coverage / social media impact projections"
                                                    name="socialMediaImpact"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Environmental impact projections"
                                                    name="environmentImpactProjections"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Legacy plan and implementation"
                                                    name="legacyPlanImplementation"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Benchmark comparisons to other global / regional editions or competitor events"
                                                    name="benchmarkComparisons"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Other, please specify"
                                                    name="otherSpecify"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Economic impact projections"
                                                    name="economicImpactProjections"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Media coverage / social media impact projections"
                                                    name="socialMediaImpactProjections"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Environmental impact projections"
                                                    name="environmentalImpactProjections"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Legacy plan and implementation 2"
                                                    name="legacyPlanImplementation2"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Benchmark comparisons to other global / regional editions or competitor events 2"
                                                    name="benchmarkComparisons 2"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Other, please specify"
                                                    name="otherDetails"
                                                    control={control}
                                                    errors={errors}
                                                    as="input"
                                                    placeholder=""
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <EventFormGroup
                                                    label="* Economic impact projections 2"
                                                    name="economicImpactProjections 2"
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
                            const isCompleted = index <= 3; // Make index 0 & 1 active
                            return (
                                <div key={index} className="d-flex align-items-start position-relative bg-white pb-4" style={{ minHeight: "70px" }}>

                                    {/* Circle */}
                                    <div
                                        className={`rounded-circle border d-flex align-items-center justify-content-center border-green border-2 
                        ${isCompleted ? "bg-green text-white" : ""}`}
                                        style={{ width: "24px", height: "24px", zIndex: 1 }}
                                    >
                                        {isCompleted && "✓"}
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
                        Submit
                    </Button>
                </div>
            </Col>
        </Row>
    )
};


export default StepFour;