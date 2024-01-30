import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import TestComponent from "./TestComponent";

test("Checks if the prop was received and printed",() => {
    render(<TestComponent input="test" />)

    const element = screen.getByRole("heading")
    expect(element).toHaveTextContent('Your message is: "test".')
})