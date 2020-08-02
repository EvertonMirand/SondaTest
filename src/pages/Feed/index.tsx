import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text } from 'react-native';

import Orientation from 'react-native-orientation';

import { Container } from './styles';
import api from '../../services/api';
import Photo from '../../models/Photo';
import { screenWidthPercentage } from '../../utils/DeviceDimension';
import LoadingFlatList from '../../components/LoadingFlatList';

interface ApiRequest {
  data: Photo[];
}

const Feed: React.FC = () => {
  const [photos, setPhoto] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Orientation.unlockAllOrientations();
    setIsLoading(true);

    api
      .get('/photos')
      .then(({ data }: ApiRequest) => {
        setPhoto(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container isLoading={isLoading}>
      <LoadingFlatList
        isLoading={isLoading}
        loadingSize={60}
        data={photos}
        numColumns={2}
        keyExtractor={({ id }) => `${id}`}
        columnWrapperStyle={{
          width: '100%',
          height: screenWidthPercentage(50),
        }}
        renderItem={({ item: { thumbnailUrl } }) => (
          <Image
            style={{ flex: 1 }}
            source={{
              uri: thumbnailUrl,
            }}
          />
        )}
        ListEmptyComponent={<Text>Nenhuma foto encontrada</Text>}
      />
    </Container>
  );
};

export default Feed;
