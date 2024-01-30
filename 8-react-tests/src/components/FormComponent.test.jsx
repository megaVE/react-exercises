import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import FormComponent from "./FormComponent";

test("Checks the submit",() => {
    const handleSubmit = jest.fn()
    
    render(<FormComponent onSubmit={handleSubmit} />)

    const text = screen.getByTestId("text")
    fireEvent.change(text, { target: { value: "any input" } })

    const form = screen.getByTestId("form")
    fireEvent.submit(form)

    const output = screen.getByTestId("output")
    expect(output).toBeInTheDocument
})