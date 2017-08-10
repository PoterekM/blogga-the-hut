import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    },
    update(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
      //I am confused as to why the line below is unnecessary. 
      // this.transitionTo('post');
    }
  }
});
