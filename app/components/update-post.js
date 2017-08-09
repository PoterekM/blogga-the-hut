import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        author: this.get('author'),
        subject: this.get('subject'),
        content: this.get('content'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
