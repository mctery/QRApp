import { db } from '../api/firebase/config'
import { ref, set, get, onValue } from "firebase/database";
import { DBset_NewUser } from "../db/db_user_service"

export async function F_setUserLogin(item) {
    // console.log(item)
    let data = []
    const read = await ref(db, 'Users');
        onValue(read, (snapshot) => {
        let item = snapshot.val()
        for (var i in item) {
            let key = i
            let item_info = item[key]
            item_info['key'] = key
            data.push(item_info)
        }
    });

    let res = data.filter((i) => { return i.user === item.user && i.pass === item.pass })
    if(res.length > 0) {
        return {STATUS: 'SUCCESS', DES: res}
    } else {
        return {STATUS: 'ERROR', DES: false}
    }
}

export async function F_setNewUser(item) {
    // console.log(item)
    let n_date = new Date()
    let id = 'US'+n_date.getTime()
    // console.log(id)
    await set(ref(db, 'Users/' + id), item);
    let res = await DBset_NewUser({user: item.user, pass: item.pass})
    if(res.length > 0) {
        return {STATUS: 'SUCCESS', DES: res}
    } else {
        return {STATUS: 'ERROR', DES: false}
    }
}