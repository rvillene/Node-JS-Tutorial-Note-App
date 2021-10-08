const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version

// yargs.version('1.1.0');

// Create an add Command - yargs

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    //can be an Object or a function
    title: {
      describe: 'Note title', //description of the title
      demandOption: true, //true = required
      type: 'string', //recognized as a string
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    //using arrow function. really like these :)
    notes.addNote(argv.title, argv.body);
  },
});
//Create a remove Command - yargs

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create a list command - yargs

yargs.command({
  command: 'list',
  describe: 'List the notes',

  handler() {
    notes.listNotes();
  },
});

// Create a read command - yargs

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// const msg = getNotes();

// console.log(msg);

// console.log(chalk.green.bold.inverse('Success!'));

// const command = process.argv[2];

// if (command === 'add') {
//   console.log('Adding note!');
// } else if (command === 'remove') {
//   console.log('Removed Note!');
// }
// console.log(process.argv);

yargs.parse();
// console.log(yargs.argv);
