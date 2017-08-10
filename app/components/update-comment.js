import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment) {
      var params = {
        name: this.get('name'),
        word: this.get('word')
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    }
  }
});
