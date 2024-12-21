import { render, screen } from "@testing-library/react";
import Findby from "./Findby"

test("testing the findBy query", async ()=>{
    render(<Findby />);
    const ele = await screen.findByText("Data is available",{}, { timeout: 3000 });
    expect(ele).toBeInTheDocument();
})