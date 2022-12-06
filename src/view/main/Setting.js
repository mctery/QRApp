import * as React from 'react';
import { ScrollView, StyleSheet, View, Image, BackHandler, ToastAndroid, Alert } from 'react-native';
import {
    Button,
    Icon,
    Layout,
    MenuItem,
    OverflowMenu,
    Select,
    SelectItem,
    Tooltip,
    Text,
    Input,
    Card,
    Avatar
} from '@ui-kitten/components';
import { DBget_getUserInformation, DBset_setDeleteUserInformation, DBset_NewUser } from '../../db/db_user_service'
import { F_setUpdateUser } from '../../service/user_service'

export default function Setting(props) {
    
    //input state
    const [input_key, set_input_key] = React.useState()
    const [input_user, set_input_user] = React.useState()
    const [input_pass, set_input_pass] = React.useState()
    const [input_fullname, set_input_fullname] = React.useState()
    const [input_telphone, set_input_telphone] = React.useState()
    const [input_id_card, set_input_id_card] = React.useState()
    const [input_v_regis, set_input_v_regis] = React.useState()

    React.useEffect(() => {
        initial()
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
    }, [])

    async function initial() {
        let info = await DBget_getUserInformation()
        console.log(info)
        set_input_key(info[0].key)
        set_input_user(info[0].user)
        set_input_pass(info[0].pass)
        set_input_fullname(info[0].fullname)
        set_input_telphone(info[0].telphone)
        set_input_id_card(info[0].id_card)
        set_input_v_regis(info[0].v_regis)
    }

    async function Of_setLogout() {
        Alert.alert(
            "",
            "ต้องการออกจากระบบใช่หรือไม่ ?",
            [
                {
                    text: "ยกเลิก",
                    onPress: () => {},
                    style: "cancel",
                },
                {
                    text: "ตกลง",
                    onPress: async () => {
                        let res = await DBset_setDeleteUserInformation()
                        console.log(res)
                        if(res) {
                            ToastAndroid.show('กำลังออกจากระบบ', ToastAndroid.SHORT)
                            props.navigation.navigate('จองที่จอดรถผู้พิการ')
                        } else {
                            ToastAndroid.show('เกิดข้อผิดพลาด', ToastAndroid.SHORT)
                        }
                    },
                    style: "cancel",
                },
            ],
        )
    }

    async function Of_setUserInfo() {
        let info = {
                        key: input_key,
                        user: input_user,
                        pass: input_pass,
                        fullname: input_fullname,
                        telphone: input_telphone,
                        id_card: input_id_card,
                        v_regis: input_v_regis,
                    }
        Alert.alert(
            "",
            "ต้องการแก้ไขโปรไฟล์ใช่หรือไม่ ?",
            [
                {
                    text: "ยกเลิก",
                    onPress: () => {},
                    style: "cancel",
                },
                {
                    text: "ตกลง",
                    onPress: async () => {
                        let res = await F_setUpdateUser(info)
                        console.log(res)
                        if(res.STATUS === 'SUCCESS') {
                            ToastAndroid.show('แก้ไขโปรไฟล์เรียบร้อย', ToastAndroid.SHORT)
                        } else {
                            ToastAndroid.show('เกิดข้อผิดพลาด', ToastAndroid.SHORT)
                        }
                    },
                    style: "cancel",
                },
            ],
        )
    }
    
    return (
        <View style={{flex: 1, flexDirection:'column'}}>
            <Layout style={{justifyContent: 'flex-start', alignItems: 'flex-start'}} level='1'>
                <Button
                    size='medium'
                    appearance='ghost'
                    status='info'
                    accessoryLeft={<Icon {...props} name='arrow-ios-back-outline'/>}
                    onPress={() => props.navigation.navigate('หน้าแรก')}
                >
                    กลับ
                </Button>
            </Layout>
            <Layout style={styles.layout} level='1'>
                <ScrollView>
                    <Text
                        category='h6'
                    >
                        ตั้งค่าโปรไฟล์
                    </Text>
                    <Input
                        style={styles.input}
                        placeholder='* Key ID'
                        value={input_key}
                        accessoryLeft={<Icon {...props} name='award-outline'/>}
                        disabled
                    />
                    <Input
                        style={styles.input}
                        placeholder='* ชื่อผู้ใช้งาน (Username)'
                        value={input_user}
                        accessoryLeft={<Icon {...props} name='people-outline'/>}
                        disabled
                    />
                    <Input
                        style={styles.input}
                        placeholder='* รหัสผ่าน (Password)'
                        value={input_pass}
                        onChangeText={(v) => { set_input_pass(v); }}
                        accessoryLeft={<Icon {...props} name='more-horizontal-outline'/>}
                        secureTextEntry={true}
                    />
                    <Input
                        style={styles.input}
                        value={input_fullname}
                        placeholder='ชื่อ - นามสกุล ( Name - Surname )'
                        accessoryLeft={<Icon {...props} name='person-outline'/>}
                        onChangeText={(v) => { set_input_fullname(v); }}
                    />
                    <Input
                        style={styles.input}
                        placeholder='เบอร์โทรศัพท์ ( Telephone )'
                        value={input_telphone}
                        accessoryLeft={<Icon {...props} name='smartphone-outline'/>}
                        onChangeText={(v) => { set_input_telphone(v); }}
                    />
                    <Input
                        style={styles.input}
                        placeholder='เลขบัตรผู้พิการ ( ID Card )'
                        value={input_id_card}
                        accessoryLeft={<Icon {...props} name='credit-card-outline'/>}
                        onChangeText={(v) => { set_input_id_card(v); }}
                    />
                    <Input
                        style={styles.input}
                        placeholder='ทะเบียนรถ ( Vehicle Registration )'
                        value={input_v_regis}
                        accessoryLeft={<Icon {...props} name='square-outline'/>}
                        onChangeText={(v) => { set_input_v_regis(v); }}
                    />
                    <Button
                        size='small'
                        appearance='filled'
                        style={styles.button}
                        accessoryLeft={<Icon {...props} name='checkmark-square-outline'/>}
                        status='info'
                        onPress={() => { Of_setUserInfo()}}
                    >
                        แก้ไขโปรไฟล์
                    </Button>
                    <Button
                        size='medium'
                        appearance='ghost'
                        status='danger'
                        accessoryLeft={<Icon {...props} name='log-out-outline'/>}
                        onPress={() => {Of_setLogout()}}
                    >
                        ออกจากระบบ
                    </Button>
                    <Text style={{marginTop: 20}}>
                        app version : 1.0.0
                    </Text>
                </ScrollView>
            </Layout>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        margin: 10,
        maxWidth: 300,
        width: '100%'
    },
    button: {
        margin: 10,
    }
});