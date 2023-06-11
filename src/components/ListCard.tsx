import {View} from 'react-native';
import Card from './Card';
import {IUnsplashPicture} from 'src/types/Unsplash';
import React from 'react';

const ListCard = React.memo(function ListCard({
  unsplashData,
}: {
  unsplashData: IUnsplashPicture[];
}) {
  return (
    <View className="flex mt-2 flex-row w-auto flex-wrap items-center justify-center">
      {unsplashData.length > 0 &&
        unsplashData.map(data => <Card key={data.id} unsplashData={data} />)}
    </View>
  );
});

export default ListCard;
