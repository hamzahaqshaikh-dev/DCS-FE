import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import StepWizard from "react-step-wizard";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

// Validation Schema
const validationSchema = yup.object().shape({
  name: yup.string().required("Event name is required"),
  year: yup
    .number()
    .typeError("Year must be a number")
    .required("Year is required"),
  date: yup.date().required("Event date is required"),
  edition: yup.string().required("Edition is required"),
  duration: yup.string().required("Duration is required"),
  competitions: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be a positive number")
    .integer("Must be an integer")
    .default(0), // Ensures it's recognized
  cadence: yup.string().required("Cadence is required"),
  scale: yup.string().required("Scale is required"),
  "event-overview": yup
    .string()
    .max(150, "Max length is 150 characters")
    .required("Event overview is required"),
  purpose: yup
    .string()
    .max(100, "Max length is 100 characters")
    .required("Purpose is required"),
  "target-audience": yup
    .string()
    .max(150, "Max length is 150 characters")
    .required("Target audience is required"),
  "organizing-committee": yup
    .string()
    .required("Please select if the event requires an organizing committee"),
  "organizing-committee-details": yup
    .string()
    .max(150, "Max length is 150 characters")
    .required("Target audience is required"),
  "event-location": yup
    .string()
    .max(150, "Max length is 150 characters")
    .required("Event location is required"),
  status: yup.string().required("Status is required"),
});




const STORAGE_KEY = "eventFormDraft";

const EventFormOne = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const [stepWizard, setStepWizard] = useState(null);
  console.log('getValues =>', getValues())
  // Load draft on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => setValue(key, parsedData[key]));
    }
  }, [setValue]);

  // Save draft
  const saveDraft = () => {
    const formData = getValues();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    alert("Draft saved successfully!");
  };

  // Validate before moving to the next step
  const handleValidation = handleSubmit(() => {
    saveDraft();
    stepWizard.nextStep();
  });

  return (
    <div>
      <StepWizard instance={setStepWizard}>
        <StepOne nextStep={() => stepWizard.nextStep()} control={control} errors={errors} saveDraft={saveDraft} handleValidation={handleValidation} />
        <StepTwo nextStep={() => stepWizard.nextStep()} control={control} errors={errors} saveDraft={saveDraft} handleValidation={handleValidation} />
      </StepWizard>
    </div>
  );
};

export default EventFormOne;
