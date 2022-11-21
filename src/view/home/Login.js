import * as React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
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
// import AttractionCard from './AttractionCard';

export default function Attractions() {
    const [isLoading, setisLoading] = React.useState(true);
    const [info, setinfo] = React.useState({user: '', pass: ''});

    React.useEffect(() => {
        initial()
    }, [])

    function initial() {
        setisLoading(false)
    }
    
    function Of_setinfo(v, feild){
        let update = info
        update[feild] = v

        setinfo(update)
        // console.log(info)
    }

    async function Of_setLogin() {
        
    }
    
    if(isLoading) {
        return (
            <Layout style={styles.layout} level='1'>
                <Text>กำลังโหลด...</Text>
            </Layout>
        );
    } else {
        return (
            <Layout style={styles.layout} level='1'>
                <Text
                    category='h4'
                    style={{ margin: 30 }}
                >
                    จองที่จอดรถผู้พิการ
                </Text>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/wh.png')}
                />
                <Text
                    category='h6'
                    style={{ margin: 10 }}
                >
                    กรุณาเข้าสู่ระบบ
                </Text>
                <Input
                    style={styles.input}
                    placeholder='ชื่อผู้ใช้งาน'
                    onChangeText={(v) => {Of_setinfo(v, 'user')}}
                />
                <Input
                    style={styles.input}
                    placeholder='รหัสผ่าน'
                    onChangeText={(v) => {Of_setinfo(v, 'pass')}}
                    secureTextEntry={true}
                />
                <Button
                    size='small'
                    appearance='filled'
                    style={styles.button}
                    status='primary'
                    onPress={() => {Of_setLogin()}}
                >
                    เข้าสู่ระบบ
                </Button>
            </Layout>
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
        margin: 2,
    },
    avatar: {
        margin: 8,
        padding: 100,
        width: 150,
        height: 150,
    }
});