import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';

const Search = ({searchQuery, setSearchQuery, onSearch}) => {
  return (
    <View style={addFriendsScreenStyle.search}>
      <View style={addFriendsScreenStyle.searchContainer}>
        <Icon name="search" style={addFriendsScreenStyle.searchIcon} />
        <TextInput
          style={addFriendsScreenStyle.searchInput}
          placeholder="친구 추가 또는 검색"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={onSearch}
        />
      </View>
    </View>
  );
};

export default Search;