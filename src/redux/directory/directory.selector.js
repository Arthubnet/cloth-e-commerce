import { createSelector } from "reselect";

let selectDirectory = (state) => state.directory;

export const selectDirectorySection = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
