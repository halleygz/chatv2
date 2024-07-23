import { argv } from 'process'
// import getNotes from './notes.js'
import validator from 'validator'
import {addNotes, listNotes, readNote, removeNote} from './notes.js'

import yargs from 'yargs'

yargs.version('1.1.0')
yargs.command({
    command: "add",
    describe: "Adds a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body', 
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
        // console.log(`adding new note with title: ${argv.title} and body ${argv.body}`)
        addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true
        },
    },
    handler: function(argv){
        console.log(`removing note with title: ${argv.title}`)
        removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'this will read a note with the provided title',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true
        },
    },
    handler: function (argv){
        console.log(`reading a note with title: ${argv.title}`)
        readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'this will list all notes title',
    handler: function (){
        console.log('listing all notes')
        listNotes()
    }
})
yargs.parse()