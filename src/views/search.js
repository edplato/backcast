var SearchView = Backbone.View.extend({

  events: {
    'click button': 'clickAction',
    'keyup': 'keyAction'
  },

  delayedSearchVideo: _.debounce(function() {
    if (this.$('input').val()) {
      this.collection.search(this.$('input').val());
      this.$('input').val('');
    }
  }, 500),

  searchVideo: function() {
    this.collection.search(this.$('input').val());
  },

  clickAction: function(e) {
    this.searchVideo();
    this.$('input').val('');
  },

  keyAction: function(e) {
    if (e.keyCode === 13) {
      this.searchVideo();
      this.$('input').val('');
    } else if (this.$('input').val().length > 0) {
      this.delayedSearchVideo();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
