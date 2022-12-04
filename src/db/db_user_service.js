import Realm from "realm";

let realm
export function DB_initialConfig() {
    realm = new Realm({
        path: 'UserDatabase.realm',
        schema: [
            {
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
        ]
    });
    return {STATUS: 'SUCCESS', DES: 'CREATED_DB'}
}

export function DBset_NewUser(item) {
    realm = new Realm({ path: 'UserDatabase.realm' });
    realm.write(() => {
        let del = realm.objects("user_information")
        realm.delete(del)
    })
    realm.write(() => {realm.create('user_information', item)})
    return realm.objects('user_information')
}

export function DBset_setDeleteUserInformation() {
    realm = new Realm({ path: 'UserDatabase.realm' });
    realm.write(() => {
        let del = realm.objects("user_information")
        realm.delete(del)
    })
    return {STATUS: 'SUCCESS', DES: 'DELETED_DB'}
}

export function DBget_getUserInformation() {
    return realm.objects('user_information')
}