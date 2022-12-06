import Realm from "realm";

let Path = 'UserDatabase.realm'
let Schema = {
    name: 'user_information',
    properties: {
        key: 'string',
        fullname: 'string',
        user: 'string',
        pass: 'string',
        telphone: 'string',
        id_card: 'string',
        v_regis: 'string',
    }
}
export function DBset_NewUser(item) {
    let realm = new Realm({ path: Path, schema: [Schema] });
    realm.write(() => {
        let del = realm.objects("user_information")
        realm.delete(del)
    })
    realm.write(() => {realm.create('user_information', item)})
    return realm.objects('user_information')
}

export function DBset_setDeleteUserInformation() {
    let realm = new Realm({ path: Path, schema: [Schema] });
    realm.write(() => {
        let del = realm.objects("user_information")
        realm.delete(del)
    })
    return {STATUS: 'SUCCESS', DES: 'DELETED_DB'}
}

export function DBget_getUserInformation() {
    let realm = new Realm({ path: Path, schema: [Schema] });
    return realm.objects('user_information')
}