import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        author: this.get('author') ? this.get ('author') : "Anonymous",
        subject: this.get('subject') ? this.get ('subject') : "Things Jon Snow Knows",
        content: this.get('content') ? this.get ('content') : "Nothing.",
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
