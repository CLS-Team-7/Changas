import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage  from './views/Landing/LandingPage';
import ActForm from './views/ActForm/ActForm';

//=========================Landing Page Tests=====================================
test('Should have Search Countries! phrase', () => {
    render(<LandingPage />, { wrapper: MemoryRouter })

    expect(screen.getByText('Search Countries!')).toBeInTheDocument();
})

test('Should have a button', () => {
    render(<LandingPage />, { wrapper: MemoryRouter })

    expect(screen.getByRole('button')).toBeInTheDocument();
})
//===============================================================================