import { Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 10 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text style={{ textAlign: 'center' }}>1 Nucamp Way</Text>
                <Text style={{ textAlign: 'center' }}>Seattle, WA 98001</Text>
                <Text style={{ marginBottom: 10, textAlign: 'center' }}>U.S.A</Text>
                <Text style={{ textAlign: 'center' }}>Phone: 1-206-555-1234</Text>
                <Text style={{ textAlign: 'center' }}>Email: campsites@nucamp.co</Text>
            </Card>
        </ScrollView>
    )
}

export default ContactScreen;