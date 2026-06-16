import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import mock_data from "../mock/resCardMock.json";
import "@testing-library/jest-dom";
//Import end

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={mock_data} />);

  const name = screen.getByText("Haldiram's");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label", () => {
  const PromotedCard = withPromotedLabel(RestaurantCard);
  render(<PromotedCard resData={mock_data} />);

  const promotedLabel = screen.getByText("Promoted");
  expect(promotedLabel).toBeInTheDocument();

  const name = screen.getByText("Haldiram's");
  expect(name).toBeInTheDocument();
});
