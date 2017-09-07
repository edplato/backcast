var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.firstVideo);
    this.videos.search('cat videos');
    this.render();
  },

  firstVideo: function() {
    this.videos.at(0).select();
  },

  render: function() {
    this.$el.html(this.template());

    new SearchView ({
      el: this.$('.search'),
      collection: this.videos
    }).render();

    new VideoPlayerView ({
      el: this.$('.player'),
      collection: this.videos
    }).render();

    new VideoListView ({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
