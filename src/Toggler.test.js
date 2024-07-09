import { fireEvent, render, screen } from '@testing-library/react';
import Toggler from './Toggler';

it('Should toggle', () => {
    const { getByText } = render(<Toggler />)
    const heading = getByText('Hello World')
    expect(heading).toHaveClass('Toggler-text')
    expect(heading).toBeInTheDocument()
    fireEvent.click(getByText('Toggle'))
    expect(heading).not.toBeInTheDocument()
    
})