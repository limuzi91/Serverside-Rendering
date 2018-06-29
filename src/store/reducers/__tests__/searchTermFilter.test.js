import searchTermFilterReducer from "../searchTermFilter";

test("searchTermFilterReducer: handles actions of type SET_TEXT_FILTER", () => {
  let state;
  state = searchTermFilterReducer(
    { searchTerm: "q" },
    { type: "SET_TEXT_FILTER", payload: "qu" }
  );
  expect(state).toEqual({ searchTerm: "qu" });
});
