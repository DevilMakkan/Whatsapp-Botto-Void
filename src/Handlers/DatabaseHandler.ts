import { IDBModels } from '../typings'
import UserModel from '../lib/Mongo/Models/User'
import GroupModel from '../lib/Mongo/Models/Group'
import SessionModel from '../lib/Mongo/Models/Session'

export default class DatabaseHandler implements IDBModels {
    user = UserModel
    group = GroupModel
    session = SessionModel
}