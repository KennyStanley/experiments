import { render } from '@testing-library/react';

import LogoutBtn from './logout-btn';

describe('LogoutBtn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogoutBtn />);
    expect(baseElement).toBeTruthy();
  });
});
