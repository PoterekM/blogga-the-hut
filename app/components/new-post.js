import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        author: this.get('author') ? this.get ('author') : "",
        subject: this.get('subject') ? this.get ('subject') : "",
        content: this.get('content') ? this.get ('content') : "",
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
