import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Feedback Form", () => {
  test("Fields are updating and storing data ", () => {
    const fName = "aj";
    const lName = "marci";
    const email = "aj@mail.com";
    const password = "compuware";
    const handleSubmit = jest.fn();
    render(<App onSubmit={handleSubmit} />);

    const nameInput = screen.getByLabelText(/First name/);
    fireEvent.change(nameInput, {target: {value:fName}});

    const lNameInput = screen.getByLabelText(/Last name/);
    fireEvent.change(lNameInput, {target: {value:lName}});

    const emailInput = screen.getByLabelText(/Email address/);
    fireEvent.change(emailInput, {target: {value:email}});

    const passInput = screen.getByLabelText(/Password/);
    fireEvent.change(passInput, {target: {value:password}});

    const roleDropdown = screen.getByLabelText(/Password/);
    fireEvent.change(roleDropdown, {target: {value:role}});

    expect(fName).toEqual("aj");
    expect(lName).toEqual("marci");
    expect(email).toEqual("aj@mail.com");
    expect(password).toEqual("compuware");
  });
});
