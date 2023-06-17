// testing help
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// to test
import TopNav from './TopNav'

describe('<TopNav>', function() {
    it("doesn't do much... yet", function() {
        render(
            <BrowserRouter>
                <TopNav />
            </BrowserRouter>
        )
    })
})