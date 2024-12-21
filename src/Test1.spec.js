import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing the first component",()=>{
    render(<App />)
    const text = screen.getByText("Test1");
    expect(text).toBeInTheDocument();
})