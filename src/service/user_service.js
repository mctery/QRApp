import { db } from '../api/firebase/config'
import { ref, set, get, onValue } from "firebase/database";

export async function F_setUserLogin(item) {
    console.log(item)
    const read = await ref(db, 'Users');
        onValue(read, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
    });
}

export async function F_setNewUser(item) {
    console.log(item)
    let n_date = new Date()
    let id = 'US'+n_date.getTime()
    console.log(id)
    await set(ref(db, 'Users/' + id), item);
}