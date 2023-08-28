import { render, screen } from '@testing-library/react'
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

    it.each([
        ["/", "home-link"],
        ["/about-us/", "about-us-link"],
        ["/our-beneficiaries/", "our-beneficiaries-link"],
        ["/our-events/", "our-events-link"],
        ["/rising-star-projects/", "rising-star-projects-link"],
        ["/to-donate/", "to-donate-link"],
        ["/contact-us/", "contact-us-link"],
      ])("renders NavigationBar with active link for pathname '%s'", async (inputPathname, expectedTestId) => {
        render(
            <NavigationBar pathname={inputPathname} />
        )
        const expectedElement = screen.queryByTestId(expectedTestId);
        expect(expectedElement).toBeInTheDocument();
        expect(expectedElement).toHaveClass('active');
      });
})