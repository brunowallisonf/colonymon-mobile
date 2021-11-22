import React, { useEffect } from "react"
import { FlatList, Touchable, View, Text } from "react-native"
import { useState } from "react/cjs/react.development"
import Container from "../../components/Container"
import PageTitle from "../../components/PageTitle"
import api from "../../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage"
import ListItem from "../../components/ListItem"
import InspectionList from "../../components/InspectionList"
import { TouchableOpacity } from "../../components/LabeledButton/styles"
import AddButton from "../../components/AddButton"
import { TopBar } from "./styles"

export default function MyInspections({ navigation }) {
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        const getDataList = async () => {
            const { data } = await api.get("/inspections", {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem("@token_key")}`
                }
            })

            setDataList(data.inspections)
        }

        getDataList()
    }, [])

    return (<Container>
        <TopBar><PageTitle value={"Minhas Inspeções"}></PageTitle><AddButton value={"+"} onPress={() => navigation.navigate("BroodInfo")}></AddButton></TopBar>
        <InspectionList data={dataList} renderItem={({ item }) => (<ListItem item={item}></ListItem>)}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (<View style={{ margin: 10 }}></View>)}

        ></InspectionList>
    </Container >)
}