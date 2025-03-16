import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import EpisodeItem from "./EpisodeItem";

describe("EpisodeItem Component", () => {
  const mockEpisode = {
    id: 1,
    name: "Pilot",
    image: { medium: "https://example.com/image.jpg" },
    season: 1,
    number: 1,
    airdate: "2021-01-01",
    runtime: 30,
    rating: { average: 8.5 },
  };
  const mockOnPress = jest.fn();
  const mockOnFavoriteToggle = jest.fn();

  it("renders correctly", () => {
    const { getByText } = render(
      <EpisodeItem
        episode={mockEpisode}
        onPress={mockOnPress}
        onFavoriteToggle={mockOnFavoriteToggle}
        isFavorite={false}
      />
    );
    expect(getByText("Pilot")).toBeTruthy();
  });

  it("handles press event", () => {
    const { getByText } = render(
      <EpisodeItem
        episode={mockEpisode}
        onPress={mockOnPress}
        onFavoriteToggle={mockOnFavoriteToggle}
        isFavorite={false}
      />
    );
    fireEvent.press(getByText("Pilot"));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it("handles favorite toggle", () => {
    const { getByTestId } = render(
      <EpisodeItem
        episode={mockEpisode}
        onPress={mockOnPress}
        onFavoriteToggle={mockOnFavoriteToggle}
        isFavorite={false}
      />
    );
    fireEvent.press(getByTestId("favoriteButton"));
    expect(mockOnFavoriteToggle).toHaveBeenCalled();
  });
});
