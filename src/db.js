import PouchDB from "pouchdb";

export default class DB {
  constructor() {
    this.db = new PouchDB('react-notes');
  }

  async getAllNotes() {
    let allNotes = await this.db.allDocs({ include_docs: true });
    let notes = [];

    allNotes.rows.forEach(note => notes[note.id] = note.doc);

    return notes;
  }

  async createNote(note) {
    note.createdAt = new Date();
    note.updatedAt = new Date();

    const res = await this.db.post({ ...note });
    return res;
  }
}
