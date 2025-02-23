import React from "react";
import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Controller } from "react-hook-form";
import HyperDatepicker from "@/components/Datepicker";

const EventFormGroup = ({
    label,
    name,
    control,
    errors,
    placeholder = '',
    as = "input",
    options = [],
    hideAddon = false,
    maxLength = undefined,
    suffix = '',
    rows = 4,
    addBtn = true,
    uploadTitle = "",
    previewTitle = ""
}) => {
    const [documents, setDocuments] = useState([{ id: Date.now(), file: null }]);

    // Handle file upload
    const handleFileChange = (event, docId, onChange) => {
        const file = event.target.files[0];
        if (!file) return;

        setDocuments((prevDocs) =>
            prevDocs.map((doc) =>
                doc.id === docId ? { ...doc, file } : doc
            )
        );

        onChange(file);
    };


    const addNewDocumentField = () => {
        setDocuments([...documents, { id: Date.now(), file: null }]);
    };
    return (
        <Form.Group className="mb-3">
            {uploadTitle === '' && <Form.Label className="text-black">{label}</Form.Label>}
            <Controller
                name={name}
                control={control}
                render={({ field }) => {
                    switch (as) {
                        case "input":
                            return (
                                <InputGroup>
                                    <Form.Control
                                        {...field}
                                        placeholder={placeholder}
                                        className="p-2 rounded-0"
                                        isInvalid={!!errors[name]}
                                    />
                                    {suffix && (
                                        <InputGroup.Text className="bg-white text-muted">{suffix}</InputGroup.Text>
                                    )}
                                </InputGroup>
                            );

                        case "select":
                            return (
                                <Form.Select {...field} className="p-2 rounded-0" isInvalid={!!errors[name]}>
                                    <option value="">{placeholder}</option>
                                    {options.map((option, index) => (
                                        <option key={index} value={option.value || option}>
                                            {option.label || option}
                                        </option>
                                    ))}
                                </Form.Select>
                            );

                        case "textarea":
                            return (
                                <div className="position-relative">
                                    <Form.Control
                                        {...field}
                                        as="textarea"
                                        rows={rows}
                                        placeholder={placeholder}
                                        className="p-2 rounded-0"
                                        style={{ resize: "none" }}
                                        maxLength={maxLength || undefined}
                                        isInvalid={!!errors[name]}
                                    />
                                    {maxLength && (
                                        <div className="text-end text-muted small position-absolute end-0 bottom-0 pb-1 pe-1">
                                            {field.value?.length || 0}/{maxLength} characters
                                        </div>
                                    )}
                                </div>
                            );

                        case "datepicker":
                            return (
                                <HyperDatepicker
                                    hideAddon={hideAddon}
                                    value={field.value ? new Date(field.value) : new Date()}
                                    onChange={(date) => field.onChange(date || new Date())}
                                    inputClass="form-control p-2 rounded-0"
                                />
                            );

                        case "radio":
                            return (
                                <div className="d-flex gap-3 align-items-center py-2">
                                    {options.map((option, index) => (
                                        <Form.Check
                                            key={index}
                                            type="radio"
                                            label={option.label || option}
                                            value={option.value || option}
                                            id={`${name}-radio-${index}`}
                                            name={field.name}
                                            checked={field.value === (option.value || option)}
                                            onChange={() => field.onChange(option.value || option)}
                                            className="form-check-inline ps-0"
                                        />
                                    ))}
                                </div>
                            );

                        case "file":
                            return (
                                <div>
                                    {documents.map((doc, index) => (
                                        <div key={doc.id} className="d-column d-md-flex gap-3 align-items-start mb-3">
                                            <div className="w-100 w-md-50 mb-3 mb-md-0">
                                                {uploadTitle !== '' && <Form.Label className="text-black">{uploadTitle}</Form.Label>}
                                                <div
                                                    className="border p-3 py-5 d-flex w-100 justify-content-center align-items-center"
                                                    style={{ borderRadius: "4px", cursor: "pointer", alignSelf: "normal" }}
                                                    onClick={() => document.getElementById(`file-input-${doc.id}`).click()}
                                                >
                                                    <input
                                                        type="file"
                                                        id={`file-input-${doc.id}`}
                                                        className="d-none"
                                                        onChange={(event) => handleFileChange(event, doc.id, field.onChange)}
                                                    />
                                                    <span className="text-muted">Drag here or click to upload a file</span>
                                                </div>
                                            </div>

                                            {/* Document Preview */}
                                            <div className="w-100 w-md-50">
                                                {previewTitle !== '' && <Form.Label className="text-black">{previewTitle}</Form.Label>}
                                                <div
                                                    className="border p-3 py-5 bg-light d-flex justify-content-center align-items-center"
                                                    style={{ borderRadius: "4px", alignSelf: "normal" }}
                                                >
                                                    {doc.file ? (
                                                        <img
                                                            src={URL.createObjectURL(doc.file)}
                                                            alt="Preview"
                                                            style={{ maxHeight: "100%", maxWidth: "100%" }}
                                                        />
                                                    ) : (
                                                        <span className="text-muted">Preview of document</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Add More Button */}
                                    {addBtn && <Button
                                        variant="outline-primary"
                                        onClick={addNewDocumentField}
                                        className="mt-2 d-flex justify-content-center align-items-center"
                                        style={{ width: "40px", height: "40px", borderRadius: "4px" }}
                                    >
                                        +
                                    </Button>}
                                </div>
                            );

                        default:
                            return null;
                    }
                }}
            />
            {errors[name] && (
                <Form.Control.Feedback type="invalid" className="d-block text-danger">
                    {errors[name]?.message}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    );
};

export default EventFormGroup;
