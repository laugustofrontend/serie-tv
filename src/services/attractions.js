import DB from './db';

export const GET_ALL_ATTRACTIONS = () =>  DB.attractions.toArray();
export const GET_ATTRACTION = (id) => {
    return DB.attractions.where({ id: id }).toArray();
};
export const SAVE_ATTRACTION = ({ name, exhibition, type }) => {
    DB.attractions.put({ name, exhibition, type });
}
export const UPDATED_ATTRACTION = ({ id, atracao, hour }) => {
    const info = {
        name: atracao,
        exhibition: hour
    }
    DB.attractions.update(id, info);
}
export const DELETE_ATTRACTION = (pk) => {
    DB.attractions.delete(pk);
}

export const Test = ({ msg }) => {
    console.log(msg);
}
