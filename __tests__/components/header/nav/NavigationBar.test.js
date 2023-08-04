import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NavigationBar } from '../../../../components/header/nav/NavigationBar'

describe('NavigationBar', () => {

    it('renders NavigationBar', async () => {
        render(
            <NavigationBar />
        )

        const logoImg = screen.queryByTestId('website-logo');
        expect(logoImg).toBeInTheDocument();
        expect(logoImg.getAttribute('src')).toBe('/img/logo/aathirai_logo.png');
    })
})