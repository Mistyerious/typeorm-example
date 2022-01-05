import {Items, User} from "./entities";

export function fetchItemsFromUser(user: User) {
    const u = User.findOne({ where: { id: user.id }, relations: ['items'] })
    console.log(u) // This will return all the user data + all the items they have so you never have to actually fetch from the Items table once
    // You only ever have to actually touch the Items class when making new items

    /*
    * Result from console.log
    *
    * {
    *   id: 'someID'
    *   items: [
    *       {
    *           id: 'someID',
    *           whateverOtherPropsYouGaveThisTable
    *       }
    *   ]
    * }
    *
    *
    *  */
}

export async function createItemForUser(user: User) {
    const i = new Items()
    i.id = '123123'
    i.user = user // you can fetch the user from the db and bind the user to the item this way
    await i.save()


    /*
    * Alternatively you can do this though I usually just bind the user directly unless it is easier to just push the items e.g you are making multiple
    * items in a loop or something you should probably do this method it is easier.
    *
    * const i = new Items()
    * i.id = '123123'
    * i.save()
    *
    * u.items.push(i)
    * await u.save()
    *  */
}