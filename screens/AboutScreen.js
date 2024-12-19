import { FlatList } from "react-native";
import { ScrollView, Text, View } from 'react-native'
import { Avatar, ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponent";

const Mission = () => {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text style={{ textAlign: 'center' }}>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</Text>
        </Card>
    )
}

const AboutScreen = () => {
    const partners = useSelector((state => state.partners));

    if (partners.isLoading) {
        return (
            <ScrollView>
                <Mission />
                <Card>
                    <Card.Title>Community partners</Card.Title>
                    <Card.Divider />
                    <Loading />
                </Card>
            </ScrollView>
        )
    }
    if (partners.errMess) {
        return (
            <ScrollView>
                <Mission />
                <Card>
                    <Card.Title>Community partners</Card.Title>
                    <Card.Divider />
                    <Text>{partners.errMess}</Text>
                </Card>
            </ScrollView>
        )
    }

    
}

export default AboutScreen;