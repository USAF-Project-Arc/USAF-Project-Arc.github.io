// testing help
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CloseIcon from '@mui/icons-material/Close'

// to test
import TeamCard from './TeamCard'

const testTeam = {
    unit: "56th Fighter Wing",
    location: "Luke AFB, AZ",
    img: "56FW.gif",
    emails: [
        "bmswens@gmail.com",
        "otherdude@gmail.com"
    ],
    projects: [
        {
            name: "F35 Software",
            description: "Does things on the F35"
        },
        {
            name: "F16 Finger Brace",
            description: "Fixes F16 things"
        }
    ]
}

describe('<TeamCard>', function() {
    it('should display the name of the unit the team supports', function() {
        render(<TeamCard {...testTeam} />)
        let unit = screen.getByText(testTeam.unit)
        expect(unit).not.toBeNull()
    })
    it('should display the location of the unit', function() {
        render(<TeamCard {...testTeam} />)
        let location = screen.getByText(testTeam.location)
        expect(location).not.toBeNull()
    })
    it('should display the logo for the unit', function() {
        render(<TeamCard {...testTeam} />)
        let img = screen.getByAltText(`${testTeam.unit} logo`)
        expect(img).not.toBeNull()
    })
    it('should have a contact us button', function() {
        render(<TeamCard {...testTeam} />)
        let button = screen.getByRole("link", { name: "Contact Us" })
        expect(button.href).toEqual(`mailto:${testTeam.emails.join(';')}`)
    })
    it('should render a team with no projects without fail', function() {
        let noProj = {...testTeam, projects: undefined}
        render(<TeamCard {...noProj} />)
    })
    it('should render a team with no emails without fail', function() {
        let noEmail = {...testTeam, emails: undefined}
        render(<TeamCard {...noEmail} />)
    })
    it('should open and close the dialog', function() {
        render(<TeamCard {...testTeam} />)
        let openButton = screen.getByRole("button", { name: "See All Projects"})
        userEvent.click(openButton)
        let dialog = screen.getByRole("dialog")
        expect(dialog).not.toBeNull()
        let closeButton = screen.getByRole("button", <CloseIcon/>)
        userEvent.click(closeButton)
        let dialogAgain = screen.queryByRole("dialog")
        expect(dialogAgain).toBeFalsy
    })
})