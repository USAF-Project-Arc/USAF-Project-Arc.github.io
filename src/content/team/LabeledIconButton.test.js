// testing helping
import { render, screen } from '@testing-library/react'
import GitHubIcon from '@mui/icons-material/GitHub';

import LabeledIconButton from './LabeledIconButton'

describe("<LabeledIconButton>", function() {
    it("is really just a link", function() {
        render(
            <LabeledIconButton
                label="Source Code"
                url="http://"
            >
                <GitHubIcon />
            </LabeledIconButton>
        )
        let button = screen.getByRole("button", { "name": "Source Code" })
        expect(button).not.toBeNull()
    })
    it("should render null if no link", function() {
        render(
            <LabeledIconButton
                label="Source Code"
                url={undefined}
            >
                <GitHubIcon />
            </LabeledIconButton>
        )
        let button = screen.queryByRole("button", { name: "Source Code" })
        expect(button).toBeNull()
    })
})