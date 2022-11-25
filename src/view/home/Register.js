import * as React from 'react';
import { ScrollView, StyleSheet, View, Image, Alert, } from 'react-native';
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
    Avatar
} from '@ui-kitten/components';
import { F_setNewUser } from '../../service/user_service'

export default function Register(props) {
    const [isLoading, setisLoading] = React.useState(true);
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

    React.useEffect(() => {
        initial()
    }, [])

    function initial() {
        setisLoading(false)
    }
    
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
        let res = await F_setNewUser(info)
        // console.log(res)
        // Alert.alert(
        //     "",
        //     "คุณต้องการสมัครเข้าใช้งานใช่หรือไม่ ?",
        //     [
        //         {
        //             text: "ยกเลิก",
        //             onPress: () => {},
        //             style: "cancel",
        //         },
        //         {
        //             text: "ตกลง",
        //             onPress: () => {
        //                 if(pass_confirm){
        //                     Of_setToDB()
        //                 } else {

        //                 }
        //             },
        //             style: "cancel",
        //         },
        //     ],
        // )
    }
    
    if(isLoading) {
        return (
            <Layout style={styles.layout} level='1'>
                <Text>กำลังโหลด...</Text>
            </Layout>
        );
    } else {
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
                            onChangeText={(v) => {Of_setinfo(v, 'user')}}
                        />
                        <Input
                            style={styles.input}
                            placeholder='* รหัสผ่าน (Password)'
                            onChangeText={(v) => { Of_setinfo(v, 'pass') }}
                            secureTextEntry={true}
                        />
                        <Input
                            style={styles.input}
                            placeholder='* ยืนยันรหัสผ่าน ( Password Confirm )'
                            onChangeText={(v) => { Of_setinfo(v, 'pass_c') }}
                            secureTextEntry={true}
                        />
                        <Input
                            style={styles.input}
                            placeholder='ชื่อ - นามสกุล ( Name - Surname )'
                            onChangeText={(v) => {Of_setinfo(v, 'fullname')}}
                        />
                        <Input
                            style={styles.input}
                            placeholder='เบอร์โทรศัพท์ ( Telephone )'
                            onChangeText={(v) => {Of_setinfo(v, 'telphone')}}
                        />
                        <Input
                            style={styles.input}
                            placeholder='เลขบัตรผู้พิการ ( ID Card ) '
                            onChangeText={(v) => {Of_setinfo(v, 'id_card')}}
                        />
                        <Input
                            style={styles.input}
                            placeholder='ทะเบียนรถ ( Vehicle Registration ) '
                            onChangeText={(v) => {Of_setinfo(v, 'v_regis')}}
                        />
                        <Button
                            size='small'
                            appearance='filled'
                            style={styles.button}
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