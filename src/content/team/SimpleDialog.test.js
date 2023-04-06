// testing help
import { render, screen } from '@testing-library/react'

// to test
import SimpleDialog from './SimpleDialog'

const testTeam = {
    open: true,
    onClose: false,
    unit: "56th Fighter Wing",
    location: "Luke AFB, AZ",
    img: "56FW.gif",
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

describe('<SimpleDialog>', function() {
    it('should display the name of the unit the team supports', function() {
        render(<SimpleDialog {...testTeam} />)
        let unit = screen.getByText(testTeam.unit)
        expect(unit).not.toBeNull()
    })
    it('should display the location of the unit', function() {
        render(<SimpleDialog {...testTeam} />)
        let location = screen.getByText(testTeam.location)
        expect(location).not.toBeNull()
    })
    it('should display the logo for the unit', function() {
        render(<SimpleDialog {...testTeam} />)
        let img = screen.getByAltText(`${testTeam.unit} logo`)
        expect(img).not.toBeNull()
    })
    it('should render a team with no projects without fail', function() {
        let noProj = {...testTeam, projects: undefined}
        render(<SimpleDialog {...noProj} />)
    })
})