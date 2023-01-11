import { createSlice } from "@reduxjs/toolkit";
import { BaseCommentModel } from "./models/Comments.model";

interface CommentState {
  currentComment: BaseCommentModel | null;
  postCommentList: BaseCommentModel[];
}

const testCommentList: BaseCommentModel[] = [
  {
    id: 1,
    postId: 1,
    userId: 1,
    content: "Comment 1",
    media: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    postId: 1,
    userId: 1,
    content: "Comment 2",
    media: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    postId: 1,
    userId: 1,
    content: "Comment 3",
    media: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const testComment: BaseCommentModel = {
  id: 3,
  postId: 1,
  userId: 1,
  content: "Comment 3",
  media: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

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

export const { updateComment, deleteComment, postComment, getCommentsForPost } =
  commentSlice.actions;
export default commentSlice.reducer;

export const getCurrentPostComments = (state: any) =>
  state.comments.postCommentList;
export const getCommentView = (state: any) => state.comments.currentComment;
