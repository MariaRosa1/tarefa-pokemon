import React, { useState } from 'react';
import { Alert, View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import Button from './componentes/Button';
import Display from './componentes/Display';

export default function App() {
  const [pokemonEscolhido, setPokemonEscolhido] = useState(null);
  const [pokemonEscolhido2, setPokemonEscolhido2] = useState(null);
  
  const getPokemonData = (idPokemon) => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`;
    fetch(endpoint)
      .then(resposta => resposta.json())
      .then(json => {
        const pokemon = {
          nome: json.name,
          imga: json.sprites.other["home"].front_default,
          img: json.sprites.other["official-artwork"].front_default,
          peso: json.weight,
          hp: json.stats[0].base_stat,
          attack: json.stats[1].base_stat,
          defense: json.stats[2].base_stat,
          speed: json.stats[3].base_stat
        };
        setPokemonEscolhido(pokemon);
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
      });

  }

  const getPokemonData2 = (idPokemon) => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`;
    fetch(endpoint)
      .then(resposta => resposta.json())
      .then(json => {
        const pokemon = {
          nome: json.name,
          imga: json.sprites.other["home"].front_default,
          img: json.sprites.other["official-artwork"].front_default,
          peso: json.weight,
          hp: json.stats[0].base_stat,
          attack: json.stats[1].base_stat,
          defense: json.stats[2].base_stat,
          speed: json.stats[3].base_stat
        };
        setPokemonEscolhido2(pokemon);
        
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
      });

  }

  const media = () =>{
    m1 = (pokemonEscolhido.hp + pokemonEscolhido.attack + pokemonEscolhido.defense + pokemonEscolhido.speed)/5
    m2 = (pokemonEscolhido2.hp + pokemonEscolhido2.attack + pokemonEscolhido2.defense + pokemonEscolhido2.speed)/5
    
    if (m1 > m2) {
      return `${pokemonEscolhido.nome} ganhou`
    }else{
      return `${pokemonEscolhido2.nome} ganhou`
    }
  }

  const sortearIdPokemon = () => {
    const nsorteado = Math.floor(Math.random() * 1010) + 1;
    return nsorteado;
  }

  const sortearIdPokemon2 = () => {
    const nsorteado2 = Math.floor(Math.random() * 1010) + 1;
    return nsorteado2;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>Sorteio de Pokemon</Text>
        </View>
        
        {pokemonEscolhido != null && (
          <View style={styles.pokemonBox}>
            <Image resizeMode="stretch" source={{ uri: pokemonEscolhido.img }} style={styles.pokemonImg} />
            <Text style={styles.pokemonNome}>Nome: {pokemonEscolhido.nome}</Text>
            <Text style={styles.pokemonPeso}>Peso: {pokemonEscolhido.peso}</Text>
            <Text style={styles.pokemonPeso}>HP: {pokemonEscolhido.hp}</Text>
            <Text style={styles.pokemonPeso}>Ataque: {pokemonEscolhido.attack}</Text>
            <Text style={styles.pokemonPeso}>Defesa: {pokemonEscolhido.defense}</Text>
            <Text style={styles.pokemonPeso}>Speed: {pokemonEscolhido.speed}</Text>
          </View>
        )}
        
        <View>
          <Button double label='Sortear Pokemon' onClick={() => getPokemonData(sortearIdPokemon())}/>
        </View>
        
        {pokemonEscolhido != null && (
         <View>
          <Text style={styles.pokemonMedia}> {media()} </Text>
         </View>
        )}

        
        {pokemonEscolhido2 != null && (
          <View style={styles.pokemonBox}>
            <Image resizeMode="stretch" source={{ uri: pokemonEscolhido2.img }} style={styles.pokemonImg} />
            <Text style={styles.pokemonNome}>Nome: {pokemonEscolhido2.nome}</Text>
            <Text style={styles.pokemonPeso}>Peso: {pokemonEscolhido2.peso}</Text>
            <Text style={styles.pokemonPeso}>HP: {pokemonEscolhido2.hp}</Text>
            <Text style={styles.pokemonPeso}>Ataque: {pokemonEscolhido2.attack}</Text>
            <Text style={styles.pokemonPeso}>Defesa: {pokemonEscolhido2.defense}</Text>
            <Text style={styles.pokemonPeso}>Speed: {pokemonEscolhido2.speed}</Text>
          </View>
        )}
        <View>
          <Button double label='Sortear Pokemon' onClick={() => getPokemonData2(sortearIdPokemon2())}/>
        </View>    
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topo: { height: 40, padding: 5, marginBottom: 5, backgroundColor: '#e73e33' },
  topoTitulo: { fontSize: 20, color: '#fff', textAlign: 'center' },
  cardContainer: { borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 4, marginBottom: 10, marginHorizontal: 20, padding: 10 },
  cardTitle: { fontSize: 22, marginBottom: 20, textAlign: 'center', color: '#656565' },
  pokemonBox: { alignItems: 'center' },
  pokemonNome: { fontSize: 18 },
  pokemonPeso: { fontSize: 18 },
  pokemonImg: { width: 100, height: 100, },
  pokemonMedia: {fontSize: 24, textAlign: 'center', color: `#ff0000`, backgroundColor: `#000`, marginTop: 15}
});
