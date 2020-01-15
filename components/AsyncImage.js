import React from 'react';

import {
    ActivityIndicator,
    Image,
    View,
    StyleSheet
 } from 'react-native';

export default class AsyncImage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loaded: false
        };
    }

    render() {
        const {
            placeholderColor,
            style,
            source
        } = this.props;

        return (
            <View style={asyncImageStyles.container}>
                {!this.state.loaded &&
                    <ActivityIndicator size="large"
                                       color={placeholderColor}
                                       style={asyncImageStyles.activiteIndicator} />
                }
                <Image source={{uri: source}}
                       style={asyncImageStyles.petImage}
                       resizeMode={'contain'}
                       onLoad={this._onLoad}
                />
            </View>
        );
    }

    _onLoad = () => {
        this.setState(() => ({ loaded: true }))
    }
}

const asyncImageStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    activiteIndicator: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    petImage: {
        flex: 1,
        alignItems: 'stretch',
        borderRadius: 10,
    }
});