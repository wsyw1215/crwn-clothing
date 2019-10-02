import React from "react";
import { CollectionContainer, Title, ItemContainer } from "./Collection.styles";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/collection/collection.selectors";
const Category = ({ collection }) => {
  console.log(collection);
  const { items } = collection;
  return (
    <CollectionContainer>
      <Title>{collection.title}</Title>
      <ItemContainer>
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </ItemContainer>
    </CollectionContainer>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});
export default connect(mapStateToProps)(Category);
