var arr = [1,2,3,4,5];

var familyClass = {
    members: {},
    addFamily: function(age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },

    getHeadCount: function() {
        return Object.keys(this.members).length;
    }
};