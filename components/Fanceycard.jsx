import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BottomList from './BottomList';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    title: 'Porte du Non-Retour',
    location: 'Ouidah',
    locationOnMap: {latitude: 6.3645, longitude: 2.0886},
    description:
      "La Porte du Non-Retour à Ouidah est un monument historique symbolisant le point de départ des Africains réduits en esclavage lors de la traite transatlantique des esclaves. Explorez sa signification et apprenez l'histoire de l'esclavage.",
    image:
      'https://prod.cdn-medias.jeuneafrique.com/medias/2017/04/05/ouidah_porte_non_retour_benin.jpg',
    price: 5000.0,
  },
  {
    id: 2,
    title: 'Village Lacustre de Ganvié',
    location: 'Abomey-Calavi',
    locationOnMap: {latitude: 6.4969, longitude: 2.4183},
    description:
      'Ganvié est un village lacustre unique au Bénin, construit sur pilotis au milieu du lac Nokoué. Découvrez sa culture vibrante, ses maisons colorées et son mode de vie traditionnel.',
    image:
      'https://www.voyage-benin.com/cdn/bj-public/shutterstock_1150989716.jpg',
  },
  {
    id: 3,
    title: "Palais des Rois d'Allada",
    location: 'Allada',
    locationOnMap: {latitude: 6.6625, longitude: 2.1514},
    description:
      "Le Palais Royal d'Allada est un monument historique au Bénin, autrefois siège du Royaume d'Allada. Explorez son architecture, ses artefacts royaux et apprenez l'histoire du royaume.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Une_vue_des_embl%C3%A8mes_de_certains_rois_d%27Allada.jpg/1200px-Une_vue_des_embl%C3%A8mes_de_certains_rois_d%27Allada.jpg',
    price: 5300.0,
  },
  {
    id: 4,
    title: "Palais des Rois d'Abomey",
    location: 'Abomey',
    locationOnMap: {latitude: 7.1828, longitude: 1.9938},
    description:
      "Le Palais des Rois d'Abomey est un site du patrimoine mondial de l'UNESCO au Bénin, présentant l'histoire et la culture du Royaume du Dahomey. Explorez son architecture emblématique, ses reliques royales et ses expositions muséales.",
    image:
      'https://www.gobyava.com/wp-content/uploads/2020/12/couv-1632x816.jpg',
    price: 10000.0,
  },
  {
    id: 5,
    title: 'Musée ethnographique Alexandre-Sénou Adandé',
    location: 'Porto-Novo',
    locationOnMap: {latitude: 6.4972, longitude: 2.605},
    description:
      "Le Musée ethnographique Alexandre-Sénou Adandé à Porto-Novo présente la diversité culturelle du Bénin à travers ses expositions sur les arts traditionnels, l'artisanat et les rituels. Explorez sa collection de masques, de sculptures et d'objets cérémoniels.",
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/75/11/f3/porto-novo.jpg?w=900&h=600&s=1',
    price: 15000.0,
  },
  {
    id: 6,
    title: 'Musée Royal de Natitingou',
    location: 'Natitingou',
    locationOnMap: {latitude: 10.306, longitude: 1.3782},
    description:
      "Le Musée Royal de Natitingou présente le patrimoine culturel de la région de l'Atakora au Bénin. Explorez ses expositions sur l'artisanat traditionnel, les rituels et les artefacts historiques.",
    image:
      'https://oredolacultours.wordpress.com/wp-content/uploads/2021/01/fb_img_1611756700285168907946.jpg',
    price: 5100.0,
  },
  {
    id: 7,
    title: 'Plage de Possotomé',
    location: 'Possotomè',
    locationOnMap: {latitude: 6.8833, longitude: 1.9824},
    description:
      'La plage de Possotomé est une destination pittoresque sur le lac Ahémé, dans le sud du Bénin, offrant des opportunités de baignade, de bain de soleil et de détente. Explorez ses rives sablonneuses, ses cocotiers et ses vues pittoresques.',
    image:
      'https://www.ecobenin.org/wp-content/uploads/Possotome_cocotier_plage_chez_prefet_pilotis_lac_aheme_ecotourisme_ecobenin_benin.jpg',
  },
  {
    id: 8,
    title: 'Parc National de la Pendjari',
    location: 'Nord Bénin',
    locationOnMap: {latitude: 11.0564, longitude: 1.4046},
    description:
      "Le Parc National de la Pendjari est une zone protégée dans le nord du Bénin, réputée pour sa biodiversité riche et ses efforts de conservation de la faune sauvage. Partez pour un safari et observez des éléphants, des lions, des hippopotames et d'autres espèces.",
    image:
      'https://images.mnstatic.com/3c/92/3c924905bf5a8904cf0680734c9ab653.jpg',
    price: 19000.0,
  },
  {
    id: 9,
    title: 'La Pierre Fendue',
    location: 'Dassa-Zoumè',
    locationOnMap: {latitude: 7.7675, longitude: 2.1833},
    description:
      "La Pierre Fendue de Dassa-Zoumè, un trésor naturel et culturel niché au cœur du Bénin, évoque un récit aussi fascinant que mystérieux. Cette remarquable formation géologique, située dans la commune de Dassa-Zoumè, incarne l'essence même du temps et de la légende.",
    image:
      'https://beninexcursion.com/wp-content/uploads/2020/05/IMG_0945-1-1000x658.jpg',
    price: 7500.0,
  },
  {
    id: 10,
    title: 'La Grotte de la Vierge',
    location: 'Dassa-Zoumè',
    locationOnMap: {latitude: 7.7453, longitude: 2.1681},
    description:
      "A Dassa-Zoumé, la Grotte de la Vierge est une petite grotte, creusée en bas d’une colline, où serait apparue la Vierge. Elle est donc vite devenue un sanctuaire marial. Alors, tous les ans, vers le 15 août, un pèlerinage y draine des foules très nombreuses venant de tout le Bénin, mais même des pays voisins de la sous-région. Devant la grotte Arigbo, c’est son nom officiel, une basilique de style brut de décoffrage est également ouverte au culte depuis 2002. On peut y jeter un coup d'œil, uniquement si l'on passe dans le coin.",
    image:
      'https://www.gouv.bj/upload/thumbnails/articles//0055566001605990575.jpeg',
    price: 17000.0,
  },
  {
    id: 11,
    title: 'Cascade de Kota',
    location: 'Dassa-Zoumè',
    locationOnMap: {latitude: 7.7454, longitude: 2.1647},
    description:
      "La Cascade de Kota est une attraction naturelle pittoresque au Bénin, entourée d'une végétation luxuriante et de falaises rocheuses. Profitez des sentiers de randonnée, de la baignade dans les bassins et du pique-nique dans ce cadre pittoresque.",
    image:
      'https://img-4.linternaute.com/DMIkCvlFweJXCgYVLzTEbn7MU4o=/1240x/smart/a7528dbf76284082a05abd4feffa4271/ccmcms-linternaute/2117418.jpg',
    price: 15500.0,
  },
];

export default function Fanceycard() {
  const navigation = useNavigation();

  const handleLocation = locationOnMap => {
    navigation.navigate('Map', {location: locationOnMap});
  };

  const handleBooking = () => {
    navigation.navigate('Mes Réservations');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.headingText}>Découvrez avec nous</Text>
        {data.map((item, index) => (
          <View key={index}>
            <View
              style={[styles.card, styles.cardElevated, styles.alignCenter]}>
              <Image source={{uri: item.image}} style={styles.cardImage} />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardLabel}>{item.location}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <View style={styles.cardFooterContainer}>
                <Pressable
                  style={styles.cardFooterContainer}
                  onPress={() => handleLocation(item.locationOnMap)}>
                  <Image
                    source={require('../assets/location1.jpg')}
                    alt="alt"
                    style={styles.locationImage}
                  />
                  <Text style={styles.locationText}>Localisation</Text>
                </Pressable>
                <Text>{item.price} FCFA</Text>
                <Pressable
                  style={styles.cardFooterContainer}
                  onPress={handleBooking}>
                  <Image
                    source={require('../assets/book.png')}
                    alt="alt"
                    style={styles.locationImage}
                  />
                  <Text style={styles.locationText}>Réserver</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
        <BottomList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  alignCenter: {
    alignItems: 'center',
  },
  card: {},
  cardElevated: {
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    width: 330,
    height: 290,
    marginBottom: 0,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 20,
    marginHorizontal: 15,
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'auto',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#111',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#333333',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 10,
    marginTop: 5,
  },
  cardFooterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
  },
  locationImage: {
    width: 30,
    height: 30,
  },
});
