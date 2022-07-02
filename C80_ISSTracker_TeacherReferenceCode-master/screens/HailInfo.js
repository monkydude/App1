import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native";
import axios from "axios";

export default class Hail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            information: {}
        };
    }

    render() {
        if (Object.keys(this.state.information).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text> 
                    Hailstones start as water vapour condensing into tiny water droplets that exist inside the updraught. Temperatures in the middle and upper parts of thunderstorm clouds can be very cold, even during the summer months. As the droplets are swept upwards into, or form inside, this very cold environment, they become 'super-cooled'. This means they're colder than 0 °C, but still liquid. They freeze into small ice balls (called 'hail embryos') if they come into contact with tiny particles in the air, such as a speck of dust or dirt, or a salt crystal. 

                    But as well as creating an acoustic and visual spectacle, severe hailstorms have the potential to damage homes and cars, and cause life-threatening injuries. So how does hail form, and should you run for cover if it is forecast?
                    </Text>
                </View>
            )
        } 
        }
    }


const styles = StyleSheet.create({
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 10,
        color: "black",
        fontWeight: "bold"
    }
});