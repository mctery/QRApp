import * as React from 'react';
import { Linking } from "react-native";
import { Card, Title, Paragraph, Button } from 'react-native-paper';

export default function AttractionDetails({ route }) {
    const { id } = route.params;
    const [attraction, setAttraction] = React.useState(null);
    React.useEffect(() => {
        fetch("https://www.mecallapi.com/api/en/attractions/"+id)
        .then(res => res.json())
        .then(
            (result) => {
            console.log(result);
            setAttraction(result.attraction);
            },
            (error) => {
            console.log(error);
            }
        )
    })
    
    if (attraction) {
        return (
        <Card>
            <Card.Content>
            <Title>{attraction.name}</Title>
            </Card.Content>
            <Card.Cover source={{ uri: attraction.coverimage }} />
            <Card.Content>
            <Paragraph>{attraction.detail}</Paragraph>
            <Paragraph>Latitude: {attraction.latitude}</Paragraph>
            <Paragraph>Longitude: {attraction.longitude}</Paragraph>
            </Card.Content>
            <Card.Actions>
            <Button 
            onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query='+attraction.latitude+'%2C'+attraction.longitude)}
            >
            View on Map
            </Button>
        </Card.Actions>
        </Card>
        );
    } else {
        return (
        <Title>Loading</Title>
        )
    }
    
}