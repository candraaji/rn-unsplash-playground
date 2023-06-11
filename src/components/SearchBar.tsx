import {TextInput, View} from 'react-native';
import Button from './Button';

interface ISearchBarProps {
  buttonActionDisabled?: boolean;
  buttonActionLoading?: boolean;
  onButtonActionPress: () => void;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  buttonActionDisabled,
  onButtonActionPress,
  buttonActionLoading,
  setSearch,
}) => {
  return (
    <View className="flex justify-center items-center w-3/5 mt-10 mb-6">
      <View className="border border-slate-300 bg-slate-300 rounded flex-row">
        <TextInput
          placeholder="Search..."
          onChangeText={value => setSearch(value.replace(/[^a-z]/gi, ''))}
          className="block w-full px-4 py-2 text-slate-700 border-slate-300 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
        />
        <Button
          className="max-w-[100px] bg-primary"
          disabled={buttonActionDisabled}
          onPress={onButtonActionPress}
          isLoading={buttonActionLoading}>
          Search
        </Button>
      </View>
    </View>
  );
};

export default SearchBar;
