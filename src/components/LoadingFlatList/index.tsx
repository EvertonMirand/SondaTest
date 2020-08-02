import React from 'react';
import { FlatList, FlatListProps, ActivityIndicator } from 'react-native';
import { PRIMARY_COLOR } from '../../utils/Colors';

interface Props extends FlatListProps<any> {
  isLoading?: boolean;
  loadingSize?: number;
  loadingColor?: string;
}

const LoadingFlatList = (props: Props) => {
  const { isLoading, loadingSize = 20, loadingColor = PRIMARY_COLOR } = props;

  return isLoading ? (
    <ActivityIndicator size={loadingSize} color={loadingColor} />
  ) : (
    <FlatList {...props} />
  );
};

export default LoadingFlatList;
