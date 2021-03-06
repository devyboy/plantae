import React from 'react';
import { Typography } from 'antd';
import useMobile from '../hooks/useMobile';

const data = [
  {
    emoji: '🌵',
    species: 'Carnegiea gigantea',
    cred: '(Engelm.) Britton & Rose',
    summ: 'Also called Saguaro. Is a species of the Cactaceae family.',
    syn: 'Synonyms: Carnegia gigantea or Pilocereus giganteus'
  },
  {
    emoji: '🌳',
    species: 'Quercus rotundifolia',
    cred: 'Linnaeus',
    summ: 'Also called Evergreen oak. Is a species of the Fagaceae family.',
    syn:
      'Synonyms: Quercus rotundifolia var. macrocarpa or Quercus rotundifolia f. brevicupulata'
  },
  {
    emoji: '🌲',
    species: 'Huperzia selago',
    cred: '(L.) Bernh. ex Schrank & Mart.',
    summ: 'Also called Fir clubmoss. Is a species of the Lycopodiaceae family.',
    syn:
      'Synonyms: Lycopodium selago subsp. patens or Huperzia selago var. selago'
  },
  {
    emoji: '🌾',
    species: 'Elymus dahuricus',
    cred: 'Turcz. ex Griseb.',
    summ: 'Also called Dahurian wild rye. Is a species of the Poaceae family.',
    syn: 'Synonyms: Elymus dahuricus subsp. excelsus or Elymus excelsus'
  }
];

const PlantID = () => {
  const mobile = useMobile();
  const { Title, Text } = Typography;

  const classes = {
    container: {
      display: 'flex',
      flexDirection: mobile ? 'column' : 'row',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    emoji: { fontSize: '5rem', flex: 1, marginRight: '1rem' }
  };

  return (
    <>
      {data.map(({ emoji, species, cred, summ, syn }) => (
        <div style={classes.container}>
          <Typography style={classes.emoji}>{emoji}</Typography>
          <div style={{ flex: 5 }}>
            <Title level={4} style={{ marginBottom: 0 }}>
              <i>{species}</i>
            </Title>
            <Text strong>{cred}</Text>
            <br />
            <Text>{summ}</Text>
            <br />
            <Text type='secondary'>{syn}</Text>
          </div>
        </div>
      ))}
    </>
  );
};

export default PlantID;
