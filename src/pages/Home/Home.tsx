import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {CategoryCard} from '../../components/CategoryCard/CategoryCard';
import Video from 'react-native-video';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const categories = [
  {
    id: '1',
    title: 'Rap',
    image:
      'https://images.unsplash.com/photo-1601643157091-ce5c665179ab?q=80&w=1000',
    winner: 'JustForMySelf',
  },
  {
    id: '2',
    title: 'Pop',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000',
    winner: 'BilliE261',
  },
  {
    id: '3',
    title: 'Rock',
    image:
      'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=1000',
    winner: 'RockRuckPuck',
  },
  {
    id: '4',
    title: 'R&B',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000',
    winner: 'SoulfulVoice',
  },
  {
    id: '5',
    title: 'Electronic',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000',
    winner: 'BeatMaker',
  },
  // Add more categories as needed
];

const HomeScreen = () => {
  const width = Dimensions.get('window').width;

  const renderCarouselItem = ({item}: any) => (
    <CategoryCard
      title={item.title}
      image={item.image}
      winner={item.winner}
      isCarousel={true}
    />
  );

  const renderGridItem = ({item}: any) => (
    <CategoryCard title={item.title} image={item.image} winner={item.winner} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={require('../../assets/videos/billie_eilish.mp4')}
        style={styles.backgroundVideo}
        repeat
        muted
        resizeMode="cover"
      />

      <Carousel
        loop
        width={width}
        height={width * 0.6}
        data={categories.slice(0, 3)}
        renderItem={renderCarouselItem}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        autoPlay={true}
        style={styles.carousel}
      />

      <FlatList
        data={categories}
        renderItem={renderGridItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.grid}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
