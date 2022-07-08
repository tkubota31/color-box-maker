import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function() {
    render(<BoxList />);
  });

it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("can add new box", function(){
    const{getByLabelText, queryByText} = render(<BoxList/>);
    // const boxList = render(<BoxList />)
    expect(queryByText("Remove!")).not.toBeInTheDocument();

    const heightInput = getByLabelText("Height");
    const widthInput = getByLabelText("Width");
    const backgroundInput = getByLabelText("Color");
    const button = queryByText("Add New Box!");

    fireEvent.change(backgroundInput, { target: { value: "red" } });
    fireEvent.change(widthInput, { target: { value: "2" } });
    fireEvent.change(heightInput, { target: { value: "2" } });

    fireEvent.click(button);

    expect(queryByText("Remove!")).toBeInTheDocument();
  });
