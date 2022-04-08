export default () =>({
    isLoding: true,
    entries: [{
        id: new Date().getTime(),
        date: new Date().toDateString(),
        test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id voluptate placeat perferendis in esse quis optio delectus libero! Nobis ut velit ullam perspiciatis. Quibusdam nam eligendi architecto nisi exercitationem.',
        picture: null,
    },
    {
        id: new Date().getTime()+1000,
        date: new Date().toDateString(),
        test: 'asfasfsafasf ectetur adipisicing elit. Nesciunt id voluptate placeat perferendis in esse quis optio delectus libero! Nobis ut velit ullam perspiciatis. Quibusdam nam eligendi architecto nisi exercitationem.',
        picture: null,
    },
    {
        id: new Date().getTime()+2000,
        date: new Date().toDateString(),
        test: '23532632626 ectetur adipisicing elit. Nesciunt id voluptate placeat perferendis in esse quis optio delectus libero! Nobis ut velit ullam perspiciatis. Quibusdam nam eligendi architecto nisi exercitationem.',
        picture: null,
    },
]
})