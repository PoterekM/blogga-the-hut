import Ember from 'ember';

  var posts = [{
    id: 1,
    author: "Geoff Sorensen",
    subject: "Organic Bamboo Fixies",
    content: "Typewriter pork belly single-origin coffee shoreditch vice humblebrag keffiyeh you probably haven't heard of them church-key. Kitsch polaroid roof party pitchfork prism shaman, freegan flexitarian swag 3 wolf moon. Brunch tbh DIY hella pour-over. 90's bespoke cold-pressed selfies locavore, yuccie tumblr. Gastropub ramps salvia celiac freegan narwhal, paleo hexagon viral kitsch raclette four loko organic seitan. Normcore dreamcatcher street art taxidermy messenger bag you probably haven't heard of them cliche sustainable salvia semiotics. Ethical PBR&B normcore, irony iPhone iceland portland helvetica palo santo photo booth drinking vinegar migas green juice copper mug. Oh. You need a little dummy text for your mockup? How quaint.I bet you’re still using Bootstrap too…"
  }];

  export default Ember.Route.extend({
  model() {
    return posts;
  },
});
