import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import EventComponent from "./EventComponent";

test("Checks the initial text and the changed text",() => {
    render(<EventComponent />)

    const button = screen.getByRole("button", { name: /Change Text/i})

    const text = screen.getByTestId("text")

    expect(text).toHaveTextContent("Changeable text")

    fireEvent.click(button)

    expect(text).toHaveTextContent("It changed!")
})