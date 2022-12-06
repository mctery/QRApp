import * as React from 'react';
import { ScrollView, StyleSheet, View, Image, Alert, ToastAndroid } from 'react-native';
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
    Avatar,
    Spinner
} from '@ui-kitten/components';
import { F_setNewUser } from '../../service/user_service'

export default function Register(props) {
    const [info, setinfo] = React.useState(
        {
            user: '',
            pass: '',
            fullname: '',
            telphone: '',
            id_card: '',
            v_regis: '',
        });
    const [pass_confirm, set_pass_confirm] = React.useState(false)
    
    function Of_setinfo(v, feild){
        let update = info

        if(feild === 'pass_c') {
            if(v === info.pass) {
                set_pass_confirm(true)
            } else {
                set_pass_confirm(false)
            }
        } else {
            update[feild] = String(v)
            setinfo(update)
        }
    }

    async function Of_setNewUser() {
        // console.log(res)
        Alert.alert(
            "",
            "ต้องการสมัครใช้งานใช่หรือไม่ ?",
            [
                {
                    text: "ยกเลิก",
                    onPress: () => {},
                    style: "cancel",
                },
                {
                    text: "ตกลง",
                    onPress: async () => {
                        if(pass_confirm){
                            let res = await F_setNewUser(info)
                            if(res.STATUS === 'SUCCESS') {
                                props.navigation.navigate('หน้าแรก')
                                ToastAndroid.show('สมัครสมาชิกเรียบร้อย', ToastAndroid.SHORT)
                            } else {
                                ToastAndroid.show('เกิดข้อผิดพลาด', ToastAndroid.SHORT)
                            }
                        } else {
                            ToastAndroid.show('รหัสผ่านไม่ตรงกัน', ToastAndroid.SHORT)
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
                    onPress={() => props.navigation.navigate('จองที่จอดรถผู้พิการ')}
                >
                    กลับ
                </Button>
            </Layout>
            <Layout style={styles.layout} level='2'>
                <ScrollView>
                    <Text
                        category='h4'
                        style={{ margin: 30 }}
                    >
                        สมัครเข้าใช้งาน
                    </Text>
                    <Input
                        style={styles.input}
                        placeholder='* ชื่อผู้ใช้งาน (Username)'
                        accessoryLeft={<Icon {...props} name='people-outline'/>}
                        onChangeText={(v) => {Of_setinfo(v, 'user')}}
                    />
                    <Input
                        style={styles.input}
                        placeholder='* รหัสผ่าน (Password)'
                        onChangeText={(v) => { Of_setinfo(v, 'pass') }}
                        accessoryLeft={<Icon {...props} name='more-horizontal-outline'/>}
                        secureTextEntry={true}
                    />
                    <Input
                        style={styles.input}
                        placeholder='* ยืนยันรหัสผ่าน ( Password Confirm )'
                        accessoryLeft={<Icon {...props} name='more-horizontal-outline'/>}
                        onChangeText={(v) => { Of_setinfo(v, 'pass_c') }}
                        secureTextEntry={true}
                    />
                    <Input
                        style={styles.input}
                        placeholder='ชื่อ - นามสกุล ( Name - Surname )'
                        accessoryLeft={<Icon {...props} name='person-outline'/>}
                        onChangeText={(v) => {Of_setinfo(v, 'fullname')}}
                    />
                    <Input
                        style={styles.input}
                        placeholder='เบอร์โทรศัพท์ ( Telephone )'
                        accessoryLeft={<Icon {...props} name='smartphone-outline'/>}
                        onChangeText={(v) => {Of_setinfo(v, 'telphone')}}
                    />
                    <Input
                        style={styles.input}
                        placeholder='เลขบัตรผู้พิการ ( ID Card )'
                        accessoryLeft={<Icon {...props} name='credit-card-outline'/>}
                        onChangeText={(v) => {Of_setinfo(v, 'id_card')}}
                    />
                    <Input
                        style={styles.input}
                        placeholder='ทะเบียนรถ ( Vehicle Registration )'
                        accessoryLeft={<Icon {...props} name='square-outline'/>}
                        onChangeText={(v) => {Of_setinfo(v, 'v_regis')}}
                    />
                    <Button
                        size='small'
                        appearance='filled'
                        style={styles.button}
                        accessoryLeft={<Icon {...props} name='checkmark-square-outline'/>}
                        status='info'
                        onPress={() => { Of_setNewUser()}}
                    >
                        สมัครใช้งาน
                    </Button>
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
        maxWidth: 350,
        width: '100%'
    },
    button: {
        margin: 10,
    }
});