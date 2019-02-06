const ClubsAPI = {
    clubs: [
        {name: "Liverpool", position: 1, curWins: 19},
        {name: "Manchester City", position: 2, curWins: 19},
        {name: "Tottenham Hotspur", position: 3, curWins: 19},
        {name: "Chelsea", position: 4, curWins: 15},
        {name: "Manchester United", position: 5, curWins: 14},
        {name: "Arsenal", position: 6, curWins: 14},
    ],
    getAll: function () {
        return this.clubs;
    },
    get: function (num) {
        let tempClub = pos => pos.position === num;
        return this.clubs.find(tempClub);
    }
}

export default ClubsAPI;