const HistoryList = [
    {
        id: 1,
        user: [
            {
                name: 'John Doe',
                gender: 'M',
                age: 45,
            },
            {
                name: 'John Doe Jr.',
                gender: 'M',
                age: 3
            },
        ],
        nama: 'John Doe',
        orderDate: '2019-03-03',
        destination: 'Paket 1 Rp: 21.000.000/paket',
        isCanceled: 'false',
        status: 'Berhasil',
    },
    {
        id: 2,
        user: [
            {
                name: 'Jena Doe',
                gender: 'L',
                age: 25,
            },
        ],
        nama: 'Jena Doe',
        orderDate: '2019-03-03',
        destination: 'Paket 2 Rp: 21.000.000/paket',
        isCanceled: 'true',
        status: 'Gagal',
    },
];

export default HistoryList;
