import { createSelector } from "reselect";

const selectResource = (state) => state.resources.response;

export const selectResources = createSelector(
    [selectResource],
    (resource) =>  resource
);