import { render, screen } from '@testing-library/react';
import Home from 'pages/index';
import { RecoilRoot } from 'recoil';

describe('Home', () => {
  it('renders the splash text', () => {
    // arrange
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    // act
    const headingOne = screen.getByRole('heading', {
      name: /\(Un\)/i,
    });

    const headingTwo = screen.getByRole('heading', {
      name: /Redundant/i,
    });

    const headingThree = screen.getByRole('heading', {
      name: /Yet Another Portfolio Site/i,
    });

    // Assert
    expect(headingOne).toBeInTheDocument();
    expect(headingTwo).toBeInTheDocument();
    expect(headingThree).toBeInTheDocument();
  });
});
