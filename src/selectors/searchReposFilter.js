import { createSelector } from "reselect";

export const searchReposFilter = (array, searchTerm = "") => {
  let reposArray = [];
  if (array) {
    reposArray = array;
  }
  return reposArray.filter(
    item =>
      `${item.name ? item.name : item} ${item.owner ? item.owner.login : " "} `
        .toUpperCase()
        .indexOf(searchTerm.trim().toUpperCase()) >= 0
  );
};

export const searchReposFilterWithCache = (getList, getSearchTerm) => {
  return createSelector([getList, getSearchTerm], searchReposFilter);
};
