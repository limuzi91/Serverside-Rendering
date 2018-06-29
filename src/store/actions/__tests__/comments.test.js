import { saveComment, fetchCommentsSuccess, fetchComments } from "../comments";
import { SAVE_COMMENT } from "../actionTypes";
import moxios from "moxios";

// Below are two approachs to test action creators

describe("test saveComment", () => {
  it("has the correct type", () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = saveComment("New Comment");

    expect(action.payload).toEqual("New Comment");
  });
});

it("test fetchCommentsSuccess through the Snapshot approach", () => {
  expect(fetchCommentsSuccess(["comment 1", "comment 2"])).toMatchSnapshot();
});

it("test thunk (fetchComments) after testing action creator(fetchCommentsSuccess)", done => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    const thunk = fetchComments();
    thunk(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: ["Fetched #1", "Fetched #2"]
        })
        .then(() => {
          expect(request.url).toEqual(
            `http://jsonplaceholder.typicode.com/comments`
          );
          expect(dispatchMock).toBeCalledWith(
            fetchCommentsSuccess(["Fetched #1", "Fetched #2"])
          );
          done();
        });
    });
  });
});
