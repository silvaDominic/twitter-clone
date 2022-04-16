import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import React from "react";


describe('App', () => {
  it('Will reroute to News Feed page when a search is made.', async () => {
    const user = userEvent.setup();
    render(<App/>);

    expect(screen.getByText("Twitter Clone")).toBeInTheDocument();

    const searchTextField = screen.getByLabelText("Search");
    const searchButton = screen.getByRole('button', {name: "Search"});

    await user.type(searchTextField, "posts");
    await user.click(searchButton);

    expect(screen.getByText("News Feed")).toBeInTheDocument();
  });
});
