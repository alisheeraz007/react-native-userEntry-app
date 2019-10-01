import React, { Component } from 'react';
import { Button, Form, Item, Input, Label, Text, Icon, View } from 'native-base';
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

    add = () => {
        let obj = {
            fullName: this.state.fullName,
            email: this.state.email,
            mobileNo: this.state.mobileNo,
            address: this.state.address
        }
        this.props.add(obj, "add")
        this.setState({
            fullName: "",
            email: "",
            mobileNo: "",
            address: ""
        })
    }

    list = () => {
        this.setState({
            list: true
        })
    }

    update = () => {
        let users = this.props.state.users
        users[this.props.params].fullName = this.state.fullName
        users[this.props.params].email = this.state.email
        users[this.props.params].mobileNo = this.state.mobileNo
        users[this.props.params].address = this.state.address
        console.warn(users[this.props.params])
        this.props.add(users, "update")
        // this.setState({
        //     fullName: "",
        //     email: "",
        //     mobileNo: "",
        //     address: ""
        // })
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
                <Form style={{ width: "70%", alignItems: "center", borderWidth: 1, padding: 10, paddingRight: 25, borderColor: "rgba(0,0,0,0.5)", borderRadius: 5 }}>

                    <Item floatingLabel style={{ borderColor: "black" }}>
                        <Label style={{ fontSize: 12 }}>Full Name</Label>
                        <Input
                            style={{ fontSize: 12 }}
                            onChangeText={(e) => this.gettingValues("fullName", e)}
                            value={this.state.fullName}
                        />
                    </Item>

                    <Item floatingLabel style={{ borderColor: "black" }}>
                        <Label style={{ fontSize: 12 }}>Email</Label>
                        <Input
                            style={{ fontSize: 12 }}
                            onChangeText={(e) => this.gettingValues("email", e)}
                            value={this.state.email}
                        />
                    </Item>

                    <Item floatingLabel style={{ borderColor: "black" }}>
                        <Label style={{ fontSize: 12 }}>Mobile No</Label>
                        <Input
                            style={{ fontSize: 12 }}
                            onChangeText={(e) => this.gettingValues("mobileNo", e)}
                            value={this.state.mobileNo}
                        />
                    </Item>

                    <Item floatingLabel style={{ borderColor: "black" }}>
                        <Label style={{ fontSize: 12 }}>Address</Label>
                        <Input
                            style={{ fontSize: 12 }}
                            onChangeText={(e) => this.gettingValues("address", e)}
                            value={this.state.address}
                        />
                    </Item>

                    {this.props.params === undefined ?
                        <>
                            <Item>
                                <Button
                                    onPress={this.add}
                                    small
                                    block
                                    style={{ backgroundColor: "rgba(0,0,0,0.5)", marginTop: 40, width: "70%" }}
                                    disabled={this.state.fullName &&
                                        this.state.email &&
                                        this.state.mobileNo &&
                                        this.state.address ? false : true
                                    }
                                >
                                    <Text style={{ fontSize: 12 }}>Add User Info</Text>
                                </Button>
                            </Item>

                            {this.props.state.users.length ?
                                <Item>
                                    <Button
                                        onPress={() => { Actions.list() }}
                                        small block dark
                                        style={{ marginTop: 15, width: "70%", marginBottom: 20 }}>
                                        <Text style={{ fontSize: 12 }}>List Of Users</Text>
                                    </Button>
                                </Item>
                                : null}
                        </>
                        :
                        <Item>
                            <Button
                                onPress={this.update}
                                small
                                block
                                style={{ backgroundColor: "rgba(0,0,0,0.5)", marginTop: 40, width: "50%" }}
                                disabled={this.state.fullName &&
                                    this.state.email &&
                                    this.state.mobileNo &&
                                    this.state.address ? false : true
                                }
                            >
                                <Text style={{ fontSize: 12 }}>Update</Text>
                            </Button>
                        </Item>
                    }
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