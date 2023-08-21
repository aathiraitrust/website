import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NavigationBar } from '../../../../components/header/nav/NavigationBar'

describe('NavigationBar', () => {

    it('renders NavigationBar with logo', async () => {
        render(
            <NavigationBar />
        )
        const logoImg = screen.queryByTestId('website-logo');
        expect(logoImg).toBeInTheDocument();
        expect(logoImg.getAttribute('src')).toBe('/img/logo/aathirai_logo.png');
    })

    it('renders NavigationBar with link items', async () => {
        render(
            <NavigationBar />
        )
        expect(screen.queryByTestId('home-link')).toHaveTextContent('Home');
        expect(screen.queryByTestId('about-us-link')).toHaveTextContent('About Us');
        expect(screen.queryByTestId('events-dropdown')).toHaveTextContent('Events');
        expect(screen.queryByTestId('our-events-link')).toHaveTextContent('Our Events');
        expect(screen.queryByTestId('rising-star-link')).toHaveTextContent('Rising Star Projects');
    })

    it('NavigationBar can toggle main menu', async () => {
        render(
            <NavigationBar />
        )
        expect(screen.queryByTestId('navbar-section')).toHaveClass('collapse');
        screen.queryByTestId('toggler-btn').click();
        await waitFor(() => expect(screen.queryByTestId('navbar-section')).not.toHaveClass('collapse'));
        screen.queryByTestId('toggler-btn').click();
        await waitFor(() => expect(screen.queryByTestId('navbar-section')).toHaveClass('collapse'));
    })


    it('NavigationBar can toggle dropdown menu', async () => {
        render(
            <NavigationBar />
        )
        expect(screen.queryByTestId('events-dropdown')).not.toHaveClass('show');
        expect(screen.queryByTestId('events-dropdown-list')).not.toHaveClass('show');
        screen.queryByTestId('events-dropdown').click();
        await waitFor(() => {
            expect(screen.queryByTestId('events-dropdown')).toHaveClass('show');
            expect(screen.queryByTestId('events-dropdown-list')).toHaveClass('show');
        });
        screen.queryByTestId('events-dropdown').click();
        await waitFor(() => {
            expect(screen.queryByTestId('events-dropdown')).not.toHaveClass('show');
            expect(screen.queryByTestId('events-dropdown-list')).not.toHaveClass('show');
        });
    })
})