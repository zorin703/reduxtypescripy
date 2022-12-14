import * as UserActionCreators from './userAC'
import * as TodoActionCreators from './todo'

export default {
    ...TodoActionCreators,
    ...UserActionCreators
}