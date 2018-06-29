import { setSearchTermFilter, restFilters } from "../index";

it("test setSearchTermFilter through the Snapshot approach", () => {
  expect(setSearchTermFilter("New York")).toMatchSnapshot();
});

it("test restFilters through the Snapshot approach", () => {
  expect(restFilters()).toMatchSnapshot();
});
