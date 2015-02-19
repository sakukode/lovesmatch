Meteor.publishComposite('countries', function(doc, sort) {
    doc.appId = App.id;
    console.log("subscribing some Countries with it's relation in App Id = " + App.id);
    return{
        find: function() {
            return Countries.find(doc, sort);
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
    "Countries.insert": function(doc) {
        var _id = Countries.insert(doc);
        return {
            _id: _id,
        }
    },
});

/* observing collection */
/* uncomment to use
 var query = Countries.find({});
 var handle = query.observe({
 removed: function(model) {
 //removing related image, when post removed
 Images.remove(model.imageId);
 }
 });
 */