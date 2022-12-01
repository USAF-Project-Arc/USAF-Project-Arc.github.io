// testing help
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// to test
import MemberSection from './MemberSection'

const testMembers = [
    {
        name: "Brandon Swenson",
        role: "Computer Scientist",
        afsc: "1N371G",
        unit: "34th IS",
        url: "https://www.linkedin.com/in/bmswens/",
        img: "swenson.jfif"
    },
    {
        name: "Jordon Jones",
        role: "Mechanical Engineer",
        afsc: "2A773",
        unit: "912nd ARS",
        img: "jones.jpg"
    }
]

describe('<ProjectsSection>', function() {
    it('should render even with no members', function() {
        render(
            <MemberSection />
        )
    })
    it("should open a member's social media when clicked", function() {
        window.open = jest.fn().mockReturnValue({focus: () => {}})
        render(
            <MemberSection
                members={testMembers}
            />
        )
        let avatar = screen.getByAltText(testMembers[0].name)
        userEvent.click(avatar)
        expect(window.open).toHaveBeenCalledWith(testMembers[0].url, "_blank")
    })
    it("should not do anything if a member doesn't have social media shared", function() {
        window.open = jest.fn().mockReturnValue({focus: () => {}})
        render(
            <MemberSection
                members={testMembers}
            />
        )
        let avatar = screen.getByAltText(testMembers[1].name)
        userEvent.click(avatar)
        expect(window.open).not.toHaveBeenCalled()
    })
})