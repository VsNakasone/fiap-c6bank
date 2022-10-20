import TypeDb from "../../types/TypeDb";

const db: Array<TypeDb> = [
    {
    id: 1,
    type: 'pix',
    amount: 100,
    date: '2020-10-19',
    description: 'Pizza galera',
    operation: 'credit'
},
{
    id: 2,
    type: 'pix',
    amount: 100,
    date: '2020-10-19',
    description: 'Pizza galera',
    operation: 'credit'
},
{
    id: 3,
    type: 'pix',
    amount: 140,
    date: '2020-10-19',
    description: 'Gasolina',
    operation: 'debit'
},
{
    id: 4,
    type: 'ted',
    amount: 25000,
    date: '2020-10-18',
    description: 'Salário',
    operation: 'credit'
},
]

export default db;