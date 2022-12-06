import { db } from '../api/firebase/config'
import { ref, set, get, onValue } from "firebase/database";
import { DBset_NewUser, DBget_getUserInformation } from "../db/db_user_service"

export async function F_setUserLogin(item) {
    // console.log(item)
    let data = []
    const read = await ref(db, 'Users');
        await onValue(read, (snapshot) => {
            console.log(snapshot)
            let item = snapshot.val()
            for (var i in item) {
                let key = i
                let item_info = item[key]
                item_info['key'] = key
                data.push(item_info)
        }
    });

    let res = await data.filter((i) => { return i.user === item.user && i.pass === item.pass })
    console.log(res)
    if(res.length > 0) {
        // console.log(res[0])
        let login_user = await DBset_NewUser(res[0])
        if(login_user){
            // console.log(await DBget_getUserInformation())
            return {STATUS: 'SUCCESS', DES: res}
        } else {
            return {STATUS: 'ERROR', DES: false}
        }
    } else {
        return {STATUS: 'ERROR', DES: false}
    }
}

export async function F_setNewUser(item) {
    let n_date = new Date()
    let id = 'US'+n_date.getTime()
    item['key'] = id
    console.log(item)
    await set(ref(db, 'Users/' + id), item);
    let res = await DBset_NewUser(item)
    if(res.length > 0) {
        return {STATUS: 'SUCCESS', DES: res}
    } else {
        return {STATUS: 'ERROR', DES: false}
    }
}

export async function F_setUpdateUser(item) {
    await set(ref(db, 'Users/' + item.key), item);
    let res = await DBset_NewUser(item)
    if(res.length > 0) {
        return {STATUS: 'SUCCESS', DES: res[0]}
    } else {
        return {STATUS: 'ERROR', DES: false}
    }
}