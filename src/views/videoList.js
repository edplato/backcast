var VideoListView = Backbone.View.extend({
  //el: '.video-list',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.videos = new Videos(window.exampleVideoData);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$el.children().append(
      this.collection.map(function(video) {
        // console.log(video);
        return new VideoListEntryView({model: video}).render().el;
        // var listVideo = new VideoListEntryView({ model: video });

        // this.$el.children().append(VideoListEntryView.render())
      })
    );
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
