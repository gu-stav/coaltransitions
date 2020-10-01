/* eslint-disable import/prefer-default-export */

export const sortBySecondName = ({ title: aName }, { title: bName }) => {
  let aSecondName = aName.trim().split(' ');
  let bSecondName = bName.trim().split(' ');

  aSecondName = aSecondName[aSecondName.length - 1];
  bSecondName = bSecondName[bSecondName.length - 1];

  return aSecondName.localeCompare(bSecondName);
};
