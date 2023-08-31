import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '../../app/page'

describe('home page', () => {
    it('renders carousel images', async () => {
        render(
            <Page />
        )
        expect(screen.queryAllByTestId('carousel-img')).toHaveLength(4);
    })
})