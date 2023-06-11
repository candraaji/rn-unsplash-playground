import {Text, View} from 'react-native';
import Image from './Image';
import PersonalIcon from 'src/assets/icons/Personal';
import LoveIcon from 'src/assets/icons/Love';
import {UnsplashData} from 'src/types/Unsplash';

const Card: React.FC<UnsplashData> = ({unsplashData}) => {
  return (
    <View className="pl-1 pr-1 m-1 w-[180px] relative h-[300px] pb-2 border bg-slate-50 border-slate-300 shadow-sm rounded-lg items-center">
      <Text className="text-center ml-2 mr-2 mt-2 text-md font-semibold text-slate-600 text-md">
        {unsplashData.alt_description}
      </Text>
      <Image
        uri={unsplashData.urls.thumb}
        className="w-40 h-32 rounded-lg mt-4 shadow-lg"
        resizeMode="cover"
      />

      <View className="ml-2 flex flex-row text-center mt-3 flex-wrap ">
        {unsplashData.description ? (
          <Text className="text-slate-500 text-xs font-light">
            {unsplashData.description.length > 100
              ? unsplashData.description.slice(0, 50) + '...'
              : unsplashData.description}
          </Text>
        ) : null}
      </View>

      <View className="w-full absolute bottom-0">
        <View className="flex p-2 flex-row mt-2 justify-between self-end w-full">
          <View className="flex-row items-center">
            <PersonalIcon />
            <Text className="text-slate-500 text-xs font-light">
              {unsplashData.user.name.length > 10
                ? unsplashData.user.name.slice(0, 10) + '...'
                : unsplashData.user.name}
            </Text>
          </View>
          <View className="flex-row items-center">
            <LoveIcon />
            <Text className="text-slate-500 text-xs font-light">
              {unsplashData.likes || 0}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;