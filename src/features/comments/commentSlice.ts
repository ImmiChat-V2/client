import { createSlice } from "@reduxjs/toolkit";
import { BaseCommentModel } from "./models/Comments.model";

interface CommentState {
  currentComment: BaseCommentModel | null;
  postCommentList: BaseCommentModel[];
}

const initialState: CommentState = {
  currentComment: null,
  postCommentList: [],
};

const commentSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    updateComment: (state, action) => {
      state.postCommentList[action.payload.id] = action.payload;
    },
    deleteComment: (state, _action) => {
      if (state.currentComment) {
        const stateIndex: number = state.postCommentList.indexOf(
          state.currentComment
        );
        state.postCommentList.splice(stateIndex, 1);
      }
    },
    postComment: (state, action) => {
      state.currentComment = action.payload;
      if (state.currentComment) {
        state.postCommentList.push(state.currentComment);
      }
    },
    getCommentsForPost: (state, action) => {
      state.postCommentList = action.payload;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
