import React, { Component } from 'react';
import { Text, Left, Right, Icon, View, Body, CardItem, Card, Content, Button } from 'native-base';
import { connect } from 'react-redux';
import Dialog from "react-native-dialog";
import { tsImportEqualsDeclaration } from '@babel/types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { del } from '../actions/action';
import { Actions } from 'react-native-router-flux';

class ListItemSelectedExample extends Component {
    constructor() {
        super();
        this.state = {
            modle: false,
            isModalVisible: true,
            counter: 0,
            touchStart: true,
            model2: true
        }
    }

    touchStart = (i, e) => {
        // console.warn(e)
        let obj = this.props.state.users[i]
        this.setState({
            counter: 0,
            model: true,
            obj,
            isModalVisible: true,
            delete: false,
            deleteAlert: false
        })

        // if (this.state.touchStart) {
        //     setTimeout(() => {
        //         this.counter()
        //     }, 300)
        // }
    }

    // counter = () => {
    //     let counter = this.state.counter
    //     this.setState({
    //         counter: counter + 1
    //     }, () => {
    //         this.touchStart()
    //     })
    // }

    touchEnd = (i) => {
        // this.setState({
        //     touchStart: false,
        //     counter2: this.state.counter
        // }, () => {
        //     // console.warn(this.state.counter2)
        //     this.counter0(i)
        // })
    }

    // counter0 = (i) => {
    //     let obj = this.props.state.users[i]
    //     this.setState({
    //         counter: 0,
    //         model: true,
    //         obj,
    //         isModalVisible: true
    //     })
    // }

    closeModle = (name) => {
        if (name === "delete") {
            this.setState({
                delete: false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        deleteAlert: false
                    })
                }, 500)
            })
        }
        this.setState({
            isModalVisible: false
        }, () => {
            setTimeout(() => {
                this.setState({
                    model: false,
                    counter2: 0
                })
            }, 500)
        })
    };

    delete = (i) => {
        this.setState({
            model: false,
            deleteAlert: true,
            delete: true,
            index: i
        })
    }

    deleteFromUsers = () => {
        let i = this.state.index
        let users = this.props.state.users
        users.splice(i, 1)
        this.props.del(users, "delete")
        this.closeModle("delete")
    }

    edit = (i) => {
        this.setState({
            model: false,
        },()=>{
            Actions.edit({params: i})
        })
    }

    render() {
        // console.warn("aa")
        return (
            // <View style={{ width: "100%" }}>
            <>
                <Content style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                    {this.props.state.users.length ?
                        this.props.state.users.map((obj, index) => {
                            return (
                                <Card onTouchEnd={() => { this.touchEnd(index) }} onTouchStart={(ev) => this.touchStart(index, ev)} style={{ marginTop: 3, marginBottom: 0 }}>
                                    <CardItem style={{ backgroundColor: "rgba(0,0,0,0.3)", paddingBottom: 10, paddingTop: 10 }}>
                                        <Left><Text>{index + 1}).</Text><Text>{obj.fullName}</Text></Left>
                                        <Body></Body>
                                        <View style={{ width: 60, display: "flex", flexDirection: "row" }}>
                                            <View style={{ width: 25, marginRight: 5 }}>
                                                <Right>
                                                    <Button
                                                        onPress={() => this.delete(index)}
                                                        iconLeft
                                                        transparent
                                                        style={{ borderRadius: 50, backgroundColor: "rgba(0,0,0,0.5)", height: 25, width: 25, justifyContent: "center" }}
                                                    >
                                                        <FontAwesome5
                                                            color="white"
                                                            name={'trash-alt'}
                                                        />
                                                    </Button>
                                                </Right>
                                            </View>
                                            <View style={{ width: 25 }}>
                                                <Right>
                                                    <Button
                                                    onPress={()=>{this.edit(index)}}
                                                        iconLeft
                                                        transparent
                                                        style={{ borderRadius: 50, backgroundColor: "rgba(0,0,0,0.5)", height: 25, width: 25, justifyContent: "center" }}
                                                    >
                                                        <FontAwesome5
                                                            color="white"
                                                            name={'pencil-alt'}
                                                        />
                                                    </Button>
                                                </Right>
                                            </View>
                                        </View>
                                    </CardItem>
                                </Card>
                            )
                        })
                        : null}
                    {this.state.model ?
                        // <View style={{backgroundColor: "white", opacity: 1}}>
                        <Dialog.Container visible={this.state.isModalVisible}>
                            <Dialog.Title style={{ fontSize: 20, fontWeight: "bold" }}>User Info</Dialog.Title>
                            <Dialog.Description>{"\n"}
                                <Text style={{ fontSize: 14 }}>User's Full Name Is: {this.state.obj.fullName}</Text>{"\n"}{"\n"}
                                <Text style={{ fontSize: 14 }}>User's Email Is: {this.state.obj.email}</Text>{"\n"}{"\n"}
                                <Text style={{ fontSize: 14 }}>User's Mobile Number Is: {this.state.obj.mobileNo}</Text>{"\n"}{"\n"}
                                <Text style={{ fontSize: 14 }}>User's Address Is: {this.state.obj.address}</Text>
                            </Dialog.Description>
                            <Dialog.Button style={{ color: "black" }} label="Close" onPress={this.closeModle} />
                        </Dialog.Container>
                        // </View>
                        : null}

                    {this.state.deleteAlert ?
                        // <View style={{backgroundColor: "white", opacity: 1}}>
                        <Dialog.Container visible={this.state.delete}>
                            <Dialog.Title style={{ fontSize: 20, fontWeight: "bold" }}>User Info</Dialog.Title>
                            <Dialog.Description>{"\n"}
                                Are You Sure You Want To Delete This Entry
                            </Dialog.Description>
                            <Dialog.Button label="Close" onPress={() => this.closeModle("delete")} />
                            <Dialog.Button label="Delete" onPress={() => this.deleteFromUsers()} />
                        </Dialog.Container>
                        // </View>
                        : null}
                </Content>
            </>
            // </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
    }
}

const mapDispatchToProps = { del }

export default connect(mapStateToProps, mapDispatchToProps)(ListItemSelectedExample);