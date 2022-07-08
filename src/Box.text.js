import React from "react";
import {render} from "@testing-library/react";
import Box from "./Box"

test("does it render", function(){
    render(<Box />);
});

test("it matches snapshot", ()=>{
    const {asFragment} = render (<Box/>)
    expect(asFragment()).toMatchSnapshot();
})
