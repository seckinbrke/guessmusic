import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // You'll need to install this
import styles from './styles';

interface CategoryCardProps {
  title: string;
  image: string;
  winner: string;
  isCarousel?: boolean;
  onPress?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  winner,
  isCarousel,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['rgba(17, 0, 32, 0.5)', '#282c34']}
        style={[
          styles.container,
          isCarousel ? styles.carouselCard : styles.gridCard,
        ]}>
        <Image source={{uri: image}} style={styles.image} />

        <View style={styles.bottomContainer}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.winnerContainer}>
            <Image
              source={require('../../assets/images/home/cup-icon.png')}
              style={styles.cupIcon}
            />
            <Text style={styles.winnerText}>{winner}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
