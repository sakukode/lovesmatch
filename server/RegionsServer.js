Meteor.publishComposite('regions', function(doc, sort) {
    doc.appId = App.id;
    console.log("subscribing some Regions with it's relation in App Id = " + App.id);
    return{
        find: function() {
            return Regions.find(doc, sort);
        },
        children: [
            /* return all related Users */
            {
                find: function(collection) {
                    return Meteor.users.find({
                        $or: [
                            {_id: collection.createdUserId},
                            {_id: collection.updatedUserId},
                        ]
                    });
                }
            },
            
        ],
    }
});


Meteor.methods({
    "Regions.insert": function(doc) {
        var _id = Regions.insert(doc);
        return {
            _id: _id,
        }
    },
});

/* observing collection */
/* uncomment to use
 var query = Regions.find({});
 var handle = query.observe({
 removed: function(model) {
 //removing related image, when post removed
 Images.remove(model.imageId);
 }
 });
 */