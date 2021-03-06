import { createSelector } from "reselect";

const collectionSelection = state => state.collection;

export const selectorShopData = createSelector(
  [collectionSelection],
  collection => collection.shopData
);

export const selectorShopDataForPreview = createSelector(
  [selectorShopData],
  collections => (collections ? Object.values(collections) : [])
);
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectorShopData],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [collectionSelection],
  collection => collection.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [collectionSelection],
  collection => !!collection.shopData
);
