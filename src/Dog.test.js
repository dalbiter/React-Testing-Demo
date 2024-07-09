import { render, screen } from '@testing-library/react';
import Dog from './Dog';

it('should render', () => {
    render(<Dog name="Rusty" isAdopted={true} />)
});

it("should match snapshot", () => {
    const { asFragment } = render(<Dog name="Rusty" isAdopted={true} />)
    expect(asFragment()).toMatchSnapshot()
});

it("should match snapshot", () => {
    const { asFragment } = render(<Dog name="Rusty" isAdopted={false} />)
    expect(asFragment()).toMatchSnapshot()
});

it("should show is adopted", () => {
    const { getByText } = render(<Dog name="Harriet" isAdopted={true} />)
    expect(getByText('Harriet has been adopted!', {exact: false})).toBeInTheDocument()
})
it("should show is adopted", () => {
    const { getByText } = render(<Dog name="Harriet" isAdopted={false} />)
    expect(getByText('Adopt me!', {exact: false})).toBeInTheDocument()
})