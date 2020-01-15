import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Colors from '../constants/Colors';
import AsyncImage from '../components/AsyncImage';

export default class Pet extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props, context) {
        super(props, context);

        this.animal = props.animal;

        this.url = '/gifs/not_found.gif';
        this.tg_url = 'tg://resolve?domain=daily_dog';
        this.title = 'Dog 🐶';
        if (this.animal === 'cats') {
            this.tg_url = 'tg://resolve?domain=daily_cat_gif';
            this.title = 'Cat 🐱';
        }

        if (['dogs', 'cats'].indexOf(this.animal) !== -1) {
            var utc = new Date().getTime();
            // 00:00 in PST timezone - is a time for new animal (it's UTC-7)
            var pst = new Date(utc - (3600000 * 7)).toJSON();
            var date = pst.slice(0,10);
            this.url = '/gifs/' + this.animal + '/' + date + '.gif';
        }
        this.url = 'https://daily-pet.ru' + this.url;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerContainerText}>Here is your Daily {this.title}!</Text>
                    </View>

                    <Touchable onPress={this._handleLinkPress}>
                        <View style={styles.petContainer}>
                            <AsyncImage
                                source={this.url}
                                placeholderColor={Colors.defaultTextColor}
                            />
                        </View>
                    </Touchable>

                    <View style={styles.footerContainer}>
                        <TouchableOpacity onPress={this._handleLinkPress} style={styles.footerContainerLink}>
                            <Text style={styles.footerContainerLinkText}>I need more {this.animal}!</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }

    _handleLinkPress = () => {
        Linking.openURL(this.tg_url);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColorDefault
    },
    contentContainer: {
        paddingTop: 30,
    },
    petContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        minHeight: 360,
    },
    headerContainer: {
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 50,
        marginBottom: 20,
    },
    headerContainerText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: Colors.defaultTextColor,
        lineHeight: 24,
        textAlign: 'center',
    },
    footerContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    footerContainerLink: {
        paddingVertical: 15,
    },
    footerContainerLinkText: {
        fontSize: 24,
        color: Colors.defaultLinkTextColor,
    },
});
