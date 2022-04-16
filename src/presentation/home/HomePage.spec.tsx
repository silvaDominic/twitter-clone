import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../__testing__/testing.util";

import { HomePage } from "./HomePage";


describe('Home Page', () => {
  it('Will initialize the HomePage component', () => {
    renderWithRouter(<HomePage/>);

    const searchTextField = screen.getByLabelText("Search");
    const searchButton = screen.getByRole('button', {name: "Search"});

    expect(screen.getByText("Twitter Clone")).toBeInTheDocument();
    expect(searchTextField).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('Will do nothing when searching with an empty query', async () => {
    const {user} = renderWithRouter(<HomePage/>);

    const searchButton = screen.getByRole('button', {name: "Search"});
    await user.click(searchButton);

    expect(screen.getByText("Twitter Clone")).toBeInTheDocument();
  })
});
