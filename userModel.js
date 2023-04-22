// // Require Mongoose
// const mongoose = require("mongoose");
//
// // Define a schema
// const Schema = mongoose.Schema;
//
// const UserSchema = new Schema({
//     title: String,
//     description: String,
//     derde: String,
// }, {
//     toJSON: {virtuals: true}
// });
//
// // add virtual property to note
// UserSchema.virtual('_links').get(
//     function () {
//         return {
//             self: {
//                 href: `${process.env.BASE_URI}users/${this._id}`
//             },
//             collection: {
//                 href: `${process.env.BASE_URI}users/`
//             }
//         }
//     }
// )
//
// // Export function to create "SomeModel" model class
// module.exports = mongoose.model("User", UserSchema);