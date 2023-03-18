import {LEVELS} from '../models/level.enum'

export class Task {
    name = ''
    description = ''
    completed = false
    LEVELS = LEVELS.NORMAL

    constructor (name, description, completed, LEVELS){
        this.name = name
        this.description = description
        this.completed = completed
        this.LEVELS = LEVELS
    }
}