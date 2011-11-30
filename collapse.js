/**
 * Implements Drupal.behaviors
 */
Drupal.behaviors.collapse = function() {
  jQuery.each(Drupal.settings.collapse, function(selector, options) {
    var effects = Drupal.behaviors.collapse.effects;

    // Set show as callback.
    if ( typeof options.show == 'string' && typeof effects[options.show] !== 'undefined' ) {
      options.show = effects[options.show];
    }

    // Set hide as a callback.
    if ( typeof options.hide == 'string' && typeof effects[options.hide] !== 'undefined' ) {
      options.hide = effects[options.hide];
    }

    $('.' + selector).collapse(options);
  });
};

Drupal.behaviors.collapse.effects = {
  slide: function() {
    this.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 250);
  }
};