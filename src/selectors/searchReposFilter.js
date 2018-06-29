export default (array, searchTerm = "") => {
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
