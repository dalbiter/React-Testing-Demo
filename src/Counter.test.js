import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('it redners without crashing', () => {
    render(<Counter />)
  })