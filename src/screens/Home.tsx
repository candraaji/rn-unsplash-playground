import {
  ActivityIndicator,
  Alert,
  Keyboard,
  SafeAreaView,
  View,
} from 'react-native';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import {useEffect, useState} from 'react';
import ListCard from '../components/ListCard';
import {IUnsplashPicture} from 'src/types/Unsplash';
import {APP_COLOR} from 'src/config/AppStyles';
import ApiManager from 'src/config/ApiManager';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataPicture, setDataPicture] = useState<IUnsplashPicture[]>([]);

  useEffect(() => {
    const onLoadFirstTime = async () => {
      setIsLoading(true);
      const response = await ApiManager.get<IUnsplashPicture[]>(
        '/photos?page=1',
      );
      setIsLoading(false);
      if (response.status === 200) {
        setDataPicture(response.data);
      }
    };
    if (dataPicture.length == 0) {
      onLoadFirstTime();
    }
    return () => {
      onLoadFirstTime();
    };
  }, []);

  const onSearchPress = () => {
    Keyboard.dismiss();
    if (!search) return Alert.alert('No Input', 'What do you want to search?');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    console.log(search);
  };

  return (
    <SafeAreaView className="flex flex-1 w-full">
      <View className="flex flex-col items-center">
        <SearchBar
          setSearch={setSearch}
          onButtonActionPress={onSearchPress}
          buttonActionLoading={isLoading}
        />
      </View>
      {isLoading && dataPicture ? (
        <View className="flex flex-1 justify-center items-center">
          <ActivityIndicator color={APP_COLOR.PRIMARY} size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <ListCard unsplashData={dataPicture} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
