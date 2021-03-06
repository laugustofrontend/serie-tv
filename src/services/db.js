import Dexie from 'dexie';

const DB = new Dexie('attraction');

DB.version(1).stores({
    attractions: '++id, name, exhibition, type'
});

export default DB;
