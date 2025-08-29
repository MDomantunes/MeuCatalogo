import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import catalogo from './catalogo.json';

type Item = {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
};

export default function CatalogoScreen() {
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.card}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.subtitulo}>{item.subtitulo}</Text>
      <Text style={styles.ano}>{item.ano}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Melhores filmes de romance</Text>
      <FlatList
        data={catalogo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c90303ff',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitulo: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 4,
  },
  ano: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 2,
  },
});
