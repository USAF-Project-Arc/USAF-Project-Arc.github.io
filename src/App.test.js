// testing help
import { render } from '@testing-library/react'

// custom
import App from './App'

describe('<App>', function() {
    it('should render without error', function() {
        render(<App />)
    })
})