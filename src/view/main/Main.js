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
import { DBget_getUserInformation } from '../../db/db_user_service'

export default function Main(props) {
    const [isLoading, setisLoading] = React.useState(true);

    React.useEffect(() => {
        initial()
    }, [])

    async function initial() {
        let info = await DBget_getUserInformation()
        console.log(info)
        setisLoading(false)
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
                    สวัสดีคุณ
                </Text>
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
        margin: 10,
    },
    avatar: {
        margin: 8,
        padding: 100,
        width: 150,
        height: 150,
    }
});