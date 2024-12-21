import { render, screen, within } from "@testing-library/react"
import Withinelement from "./Withinelement"

test("testing within element", ()=> {
    render(<Withinelement />)
    const ele = screen.getByText("Withinelement");
    const subEle = within(ele).getByText("hi");
    expect(ele).toBeInTheDocument();
    expect(subEle).toBeInTheDocument();

})