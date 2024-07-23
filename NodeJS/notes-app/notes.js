import fs from "fs";
import chalk from "chalk";
let somen = "";

const getNotes = () => {
  try {
    const notes = fs.readFileSync("notes.json");
    somen = JSON.parse(notes.toString());
    return JSON.parse(notes.toString());
  } catch (e) {
    return [];
  }
};

const addNotes = (title, body) => {
  const notes = getNotes();
  const isTitleUsed = notes.filter((note) => note.title === title);
  if (isTitleUsed.length === 0) {
    notes.push({ title, body });
    fs.writeFileSync("notes.json", JSON.stringify(notes));
    console.log(`Note added with title: ${title}`);
  } else {
    console.log(`title: "${title}" is already in use`);
  }
};

const readNote = (title) => {
  const notes = getNotes();
  const chosenNote = notes.filter((note) => note.title === title);
  if (chosenNote.length > 0) {
    console.log(chosenNote[0].body);
  } else {
    console.log(`couldn't find a note with the title: "${title}"`);
  }
};

const removeNote = (title) => {
  let notes = getNotes();
  const chosenNote = notes.filter((note)=>note.title !== title)
//   notes = notes.filter((note) => note.title !== title);
  if (notes.length>chosenNote.length){
      fs.writeFileSync("notes.json", JSON.stringify(chosenNote));
      console.log(`deleted note with title: ${chalk.bgGreen(`title`)}`);
  } else {
    console.log(`${chalk.bgRed(`no notes found`)}`)
  }
  // console.log(`can't delete note because title: "${title}" couldn't be found`)
};

const listNotes = () => {
    const notes = getNotes()
    console.log(notes)
}

export { getNotes, addNotes, readNote, removeNote, listNotes };
