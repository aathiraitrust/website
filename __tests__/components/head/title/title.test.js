import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { usePathname } from "next/navigation";
import { Title } from '../../../../components/head/title/title';

jest.mock('next/navigation', () => {
    return {
        usePathname: jest.fn()
    }
})

describe('Title', () => {

    beforeEach(() => {
        usePathname.mockReturnValue('/');
    });

    it('renders default title', async () => {
        render(
            <Title />
        )
        const title = screen.queryByTestId('title');
        expect(title).toBeInTheDocument();
        expect(title.textContent).toBe('Aathirai Trust');
    })

    it.each([
        ["/about-us/", "About Us"],
        ["/our-beneficiaries/", "Our Beneficiaries"],
        ["/our-events/", "Our Events"],
        ["/rising-star-projects/", "Rising Star"],
        ["/to-donate/", "To Donate"],
        ["/contact-us/", "Contact Us"],
      ])("renders NavigationBar with active link for pathname '%s' and test id '%s' ", async (inputPathname, expectedTitle) => {
        usePathname.mockReturnValue(inputPathname);

        render(
            <Title />
        )
        const title = screen.queryByTestId('title');
        expect(title).toBeInTheDocument();
        expect(title.textContent).toBe(expectedTitle + " - Aathirai Trust");
      });
})