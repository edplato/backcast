var SearchView = Backbone.View.extend({

  events: {
    'click button': 'searchVideo',
    'keyup': 'keyAction'
  },

  searchVideo: function() {
    this.collection.search(this.$('input').val());
    this.$('input').val('');
  },

  keyAction: function(e) {
    if (e.keyCode === 13) {
      this.searchVideo();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
