// testing help
import { render, screen } from '@testing-library/react'

// to test
import ProjectsSection from './ProjectsSection'

const testProjects = [
    {
        name: "F35 Software",
        description: "Does things on the F35"
    },
    {
        name: "F16 Finger Brace",
        description: "Fixes F16 things"
    }
]

describe('<ProjectsSection>', function() {
    it('should display the names of the projects', function() {
        render(
            <ProjectsSection
                projects={testProjects}
            />
        )
        for (let project of testProjects) {
            let title = screen.getByText(project.name)
            expect(title).not.toBeNull()
        }
    })
    it('should display descriptions of the projects', function() {
        render(
            <ProjectsSection
                projects={testProjects}
            />
        )
        for (let project of testProjects) {
            let description = screen.getByText(project.description)
            expect(description).not.toBeNull()
        }
    })
})