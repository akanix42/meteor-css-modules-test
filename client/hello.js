import styles from './hello.mss';
import colors from './colors.mss';

console.dir(styles)
console.log('colors')
console.dir(colors)
if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);
    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        },
        styles: styles,
		colors: colors
    });

    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}
