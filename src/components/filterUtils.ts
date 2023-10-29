// filterUtils.ts
export const handleCheckedFilterItem = (
  filterItem: string[],
  setFilterItem: (filterItem: string[]) => void,
  itemList: { id: string; name: string }[],
  e: React.ChangeEvent<HTMLInputElement>,
  name: string
) => {
  if (name === 'all') {
    if (e.currentTarget.checked) {
      setFilterItem(itemList.map((el) => el.name));
    } else {
      setFilterItem([]);
    }
  } else {
    if (e.currentTarget.checked) {
      setFilterItem([...filterItem, name]);
    } else {
      setFilterItem(filterItem.filter((el) => el !== name));
    }
  }
};
