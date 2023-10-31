// filterUtils.ts
export const handleCheckedFilterItem = (
  filterItem: string[],
  setFilterItem: (filterItem: string[]) => void,
  itemList: { id: string; name: string }[],
  e: React.ChangeEvent<HTMLInputElement>,
  name: string
) => {
  if (e.currentTarget.checked) {
    setFilterItem([...filterItem, name]);
  } else {
    setFilterItem(filterItem.filter((el) => el !== name));
  }
};