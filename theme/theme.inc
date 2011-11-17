<?php

/**
 * @file
 * Provides theme functions for collapse.module
 */


/**
 * Provides variables to collapse.tpl.php
 */
function template_preprocess_collapse(&$vars) {
  collapse_add($vars['type'], $vars['options']);
}
