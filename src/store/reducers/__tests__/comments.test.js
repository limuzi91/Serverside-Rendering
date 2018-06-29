import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/actionTypes";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it("commentsReducer: handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});

it("handles action with unknown type", () => {
  const newState = commentsReducer([], { type: "LKAFDSJLKAFD" });

  expect(newState).toEqual([]);
});
