/**
 * Implements Drupal.behaviors
 */
Drupal.behaviors.collapse = function() {
  jQuery.each(Drupal.settings.collapse, function(selector, options){
    $('.' + selector).collapse(options);
  });
};
