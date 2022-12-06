import * as React from 'react';
import { ScrollView, StyleSheet, View, Image, BackHandler } from 'react-native';
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
import { DBget_getUserInformation } from '../../db/db_user_service'

export default function Main(props) {
    const [isLoading, setisLoading] = React.useState(true);
    const [UserInfo, set_UserInfo] = React.useState(null);
    let Color = ['primary','success','info','warning','danger','basic']

    React.useEffect(() => {
        initial()
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
    },)

    async function initial() {
        let info = await DBget_getUserInformation()
        set_UserInfo(info[0])
        setisLoading(false)
    }

    function setRandomColor() {
        let random = Math.floor((Math.random()*Color.length))
        return Color[random]
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
                        accessoryLeft={<Icon {...props} name='settings-2-outline'/>}
                        onPress={() => props.navigation.navigate('ตั้งค่า')}
                    >
                        ตั้งค่า
                    </Button>
                </Layout>
                <Layout style={styles.layout} level='1'>
                    <Text
                        category='h6'
                        style={{ margin: 30 }}
                    >
                        สวัสดีคุณ {UserInfo.fullname}
                    </Text>
                    <Image
                        style={styles.avatar}
                        source={require('../../assets/device_qr_01.jpg')}
                    />
                    <Text
                        category='h6'
                        style={{ marginTop: 30, marginBottom: 10 }}
                    >
                        ทะเบียนรถ
                    </Text>
                    <Card style={styles.card} status={setRandomColor()}>
                        <Text style={{ fontSize: 18 }}>{UserInfo.v_regis}</Text>
                    </Card>
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
    avatar: {
        margin: 8,
        padding: 100,
        width: 150,
        height: 150,
    },
    card: {
        width: 150,
    }
});