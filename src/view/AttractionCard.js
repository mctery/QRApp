import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function AttractionCard(props) {
    return (
        <Card>
        <Card.Content>
            <Title>{props.attraction.name}</Title>
        </Card.Content>
        <Card.Cover source={{ uri: props.attraction.coverimage }} />
        <Card.Content>
            <Paragraph numberOfLines={2}>{props.attraction.detail}</Paragraph>
        </Card.Content>
        <Card.Actions>
            <Button 
            onPress={() => props.navigation.navigate('Attraction Details', {
                id: props.attraction.id
            })}
            >
            See More
            </Button>
        </Card.Actions>
        </Card>
    );
    }