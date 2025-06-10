import React from 'react';
import { render, screen } from '@testing-library/react';
import SkipCard from './SkipCard';

describe('SkipCard', () => {
  it('renders the correct title', () => {
    render(
      <SkipCard
        title="8"
        price={100}
        hirePeriod="7 days"
        allowedOnRoad={true}
        isSelected={false}
      />
    );
    // The Title component appends " Yard" to the title prop
    expect(screen.getByText('8 Yard')).toBeInTheDocument();
  });
});