import React from "react";
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from "./Header";
import { render } from "@testing-library/react";

describe('The Header component', () => {
  it('should be:', async () => {
    render(<Header />)
    
    const title = screen.getByRole('heading', {
      name: /ip address tracker/i
    })

    expect(title).toBeInTheDocument();
  })
})