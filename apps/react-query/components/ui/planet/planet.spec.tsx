import { render } from '@testing-library/react';

import Planet from './planet';

describe('Planet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Planet />);
    expect(baseElement).toBeTruthy();
  });
});
