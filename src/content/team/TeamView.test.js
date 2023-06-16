// testing help
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

// to test
import TeamView from "./TeamView"

describe('<TeamView>', function() {
    it("should allow the user to view other teams", function() {
        render(<TeamView />)
        let cohortButton = screen.getByLabelText("Cohort")
        userEvent.click(cohortButton)
        let gamma = screen.getByRole("option", { name: "Cohort Gamma"})
        userEvent.click(gamma)
        let text = screen.getByText(/RQ-4/)
        expect(text).not.toBeNull()
    })
})