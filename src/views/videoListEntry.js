var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$('.video-list-entry-title').html(this.model.attributes.snippet.title);
    this.$('.video-list-entry-detail').html(this.model.attributes.snippet.description);
    this.$('.media-object').attr('src', this.model.attributes.snippet.thumbnails.default.url);

    // console.log(this.model.attributes);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
