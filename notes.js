const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(note => {
  //   return note.title === title;
  // }); //discuss with Freddie
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title already taken'));
  }
};
//Challenge: add in the remove note function
const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => {
    return note.title !== title; //discuss with Freddie
  });

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note Removed!'));
  } else {
    console.log(chalk.red.inverse('That note does not exist!'));
  }
};

//Challenge: Wire up a List command

const listNotes = () => {
  console.log(chalk.blue('Your Notes!'));
  const notes = loadNotes();
  notes.forEach(note => {
    //forEach goes over each note in notes
    console.log(note.title + ': ' + note.body);
  });
};

//Challenge: Wire up a Read command

const readNote = title => {
  const notes = loadNotes();
  const noteRead = notes.find(note => note.title === title);

  if (!noteRead) {
    console.log(chalk.red('No Note Found, Sorry!'));
  } else {
    console.log(chalk.bold.yellow(noteRead.title));
    console.log(noteRead.body);
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
