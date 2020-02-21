import React, { Component } from 'react';
import { Button, Form, Item, Input, Label, Text, Icon, View, DatePicker } from 'native-base';
import { connect } from 'react-redux';
import { add } from "../actions/action"
import ListDividerExample from "./list"
import { Actions } from 'react-native-router-flux';

class FloatingLabelExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            mobileNo: "",
            address: "",
            list: false
        }
    }

    gettingValues = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    list = () => {
        this.setState({
            list: true
        })
    }

    add = () => {

    }

    UNSAFE_componentWillMount() {
        let obj = this.props.state.users[this.props.params]
        if (obj) {
            // console.warn(obj)
            this.setState({
                fullName: obj.fullName,
                email: obj.email,
                mobileNo: obj.mobileNo,
                address: obj.address
            })
        }
    }

    render() {
        // console.warn(this.props.params)
        return (
            <View style={{ width: "100%", alignItems: "center", marginTop: 30 }}>

                <View style={{ textAlign: "center", marginTop: 0 }}>
                    <Text style={{ color: "rgba(0,0,0,0.8)", marginTop: -10 }}>DETALHES DO ABASTESIMENTO</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "lightgrey", width: "95%", marginLeft: "auto", marginRight: "auto", marginTop: 0, marginBottom: 10 }}></View>

                <Form
                    style={{ width: "100%" }}
                // style={{ width: "70%", alignItems: "center", borderWidth: 1, padding: 10, paddingRight: 25, borderColor: "rgba(0,0,0,0.5)", borderRadius: 5 }}
                >
                    <Label style={{ fontSize: 12, marginLeft: 10, color: "gray" }}>Data do abastecimento</Label>
                    <DatePicker
                        defaultDate={new Date(2013, 6, 28)}
                        // minimumDate={new Date(2018, 1, 1)}
                        // maximumDate={new Date(2018, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "rgba(0,0,0,0.8)", fontSize: 25 }}
                        placeHolderTextStyle={{ color: "gray", fontSize: 25 }}
                        onDateChange={this.setDate}
                        disabled={false}
                        // onChangeText={(e) => this.gettingValues("date", e)}
                    />

                    <View style={{ height: 1, backgroundColor: "lightgrey", width: "95%", marginLeft: "auto", marginRight: "auto", marginTop: 15 }}></View>

                    <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-evenly" }}>
                        <Item stackedLabel style={{ borderColor: "lightgrey",height: 40, paddingLeft: 10, width: "30%" }}>
                            <Label style={{ fontSize: 12 }}>Custo total</Label>
                            <Input
                                style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}
                                // onChangeText={(e) => this.gettingValues("email", e)}
                                // value={this.state.email}
                            />
                        </Item>

                        <Item stackedLabel style={{ borderColor: "lightgrey",height: 40, paddingLeft: 10, width: "30%" }}>
                            <Label style={{ fontSize: 12 }}>Preco</Label>
                            <Input
                                style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}
                                // onChangeText={(e) => this.gettingValues("mobileNo", e)}
                                // value={this.state.mobileNo}
                            />
                        </Item>

                        <Item stackedLabel style={{ borderColor: "lightgrey",height: 40, paddingLeft: 10, width: "30%" }}>
                            <Label style={{ fontSize: 12 }}>Litros</Label>
                            <Input
                                style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}
                                // onChangeText={(e) => this.gettingValues("address", e)}
                                // value={this.state.address}
                            />
                        </Item>
                    </View>

                    <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-evenly" }}>
                        <Item stackedLabel style={{ borderColor: "lightgrey",height: 40, paddingLeft: 10, width: "30%" }}>
                            <Label style={{ fontSize: 12 }}>Odometro</Label>
                            <Input
                                style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}
                                // onChangeText={(e) => this.gettingValues("email", e)}
                                // value={this.state.email}
                            />
                        </Item>

                        <Item stackedLabel style={{ borderColor: "lightgrey",height: 40, paddingLeft: 10, width: "30%" }}>
                            <Label style={{ fontSize: 12 }}>Tanque cheio</Label>
                            <Input
                                style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}
                                // onChangeText={(e) => this.gettingValues("mobileNo", e)}
                                // value={this.state.mobileNo}
                            />
                        </Item>

                        <Item stackedLabel style={{ borderColor: "lightgrey",height: 40, paddingLeft: 10, width: "30%" }}>
                            <Label style={{ fontSize: 12 }}>KM/L</Label>
                            <Input
                                style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}
                                // onChangeText={(e) => this.gettingValues("address", e)}
                                // value={this.state.address}
                            />
                        </Item>
                    </View>

                    <View style={{ height: 1, backgroundColor: "lightgrey", width: "95%", marginLeft: "auto", marginRight: "auto", marginTop: 15 }}></View>

                    <View style={{ width: "100%", flexDirection: "row", marginTop: 10, paddingLeft: 10 }}>
                        <Item stackedLabel style={{ borderColor: "lightgrey",height: 40, paddingLeft: 10, width: "40%" }}>
                            <Label style={{ fontSize: 12 }}>Combustivel</Label>
                            <Input
                                style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}
                                // onChangeText={(e) => this.gettingValues("email", e)}
                                // value={this.state.email}
                            />
                        </Item>

                        <Item stackedLabel style={{ borderColor: "lightgrey",height: 40, paddingLeft: 10, width: "40%" }}>
                            <Label style={{ fontSize: 12 }}>Posto</Label>
                            <Input
                                style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}
                                // onChangeText={(e) => this.gettingValues("mobileNo", e)}
                                // value={this.state.mobileNo}
                            />
                        </Item>
                    </View>

                    <View style={{ height: 1, backgroundColor: "lightgrey", width: "95%", marginLeft: "auto", marginRight: "auto", marginTop: 15 }}></View>

                    <Item stackedLabel style={{ borderColor: "lightgrey",height: 40, paddingLeft: 10, width: "40%", marginLeft: 10 }}>
                        <Label style={{ fontSize: 12 }}>Anotacoes</Label>
                        <Input
                            style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}
                            // onChangeText={(e) => this.gettingValues("mobileNo", e)}
                            // value={this.state.mobileNo}
                        />
                    </Item>

                    <Button
                        onPress={this.add}
                        small
                        block
                        style={{ backgroundColor: "rgba(0,0,0,0.5)", marginTop: 15, width: "50%", marginLeft: "auto", marginRight: "auto" }}
                        disabled={this.state.fullName &&
                            this.state.email &&
                            this.state.mobileNo &&
                            this.state.address ? false : true
                        }
                    >
                        <Text style={{ fontSize: 12 }}>Add</Text>
                    </Button>

                </Form>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
    }
}

const mapDispatchToProps = { add }

export default connect(mapStateToProps, mapDispatchToProps)(FloatingLabelExample);