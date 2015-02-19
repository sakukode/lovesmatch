Meteor.publishComposite('lovematches', function(doc) {
    return {
        find: function() {
            return LoveMatches.find(doc);
        },
        children: [
        	{
				find: function(collection) {
					return Meteor.users.find({
                        $or: [
                            {_id: collection.firstUserId},
                            {_id: collection.secondUserId},
                        ]
                    });
				},
			},
        ],
    }
});


Meteor.methods({
    "LoveMatches.insert": function(doc) {
        var _id = LoveMatches.insert(doc);
        return {
            _id: _id,
        }
    },
});