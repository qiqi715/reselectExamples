import { createSelector } from 'reselect'

const shopItemsSelector = state => state.reselect.items;

const taxPercentSelector = state => state.reselect.taxPercent;

export const subtotalSelector = createSelector(
  shopItemsSelector,
  items => {
    console.log("-------subtotal-----");
    return items.reduce((acc, item) => acc + item.value, 0);
  }
);

export const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => {
    console.log("-------tax-----");
    return subtotal * (taxPercent / 100)
  }
);

export const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => {
    console.log("-------total-----");
    return subtotal + tax;
  }
);
