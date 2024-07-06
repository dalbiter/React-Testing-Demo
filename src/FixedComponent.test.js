import { render, screen } from '@testing-library/react';
import FixedComponent from './FixedComponent';

test('it redners without crashing', () => {
    render(<FixedComponent />)
});

test('it matches snapshot', () => {
    const { asFragment } = render(<FixedComponent />);
    expect(asFragment()).toMatchSnapshot();    
});