import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import PostCardComponent from '../components/PostCardComponent';
import {dummyRestaurantsData} from '../assets/data/dummyPostData';
import {Post} from '../../types';

const HomeScreen = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader />

      <FlatList
        data={dummyRestaurantsData}
        keyExtractor={item => item.id}
        renderItem={({item}: {item: Post}) => (
          <PostCardComponent
            userProfileImage={item.userProfileImage}
            redditUsername={item.redditUsername}
            title={item.title}
            body={item.body}
            imageUrl={item.imageUrl}
            likesCount={item.likesCount}
            commentsCount={item.commentsCount}
          />
        )}
      />
    </>
  );
};

export default HomeScreen;
