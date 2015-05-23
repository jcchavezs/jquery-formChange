/*! jquery-formChange - v1.0.0 (2015-05-23)
* -----------------
* Copyright(c) 2013 José Carlos Chávez <jcchavezs@gmail.com>
*/

(function($) {
    $.fn.formChange = function(options) {
        options = $.extend({}, $.fn.formChange.defaults, options);

        this.each(function() {
            var $form = $(this);

            $form.on('submit', function(){

                $form.trigger('form-change', [ false ]);

            }).find('input, select, textarea').each(function(i, e) {

                $(e).data('initial-value', $(e).val()).on('change', function() {
                    if ($(e).val() === $(e).data('initial-value')) {
                        if (options.hasOwnProperty('hasChangedClass')) {
                            $(e).removeClass(options.hasChangedClass);
                        }

                        $(e).removeAttr('data-form-change');
                    } else {
                        if (options.hasOwnProperty('hasChangedClass')) {
                            $(e).addClass(options.hasChangedClass);
                        }

                        $(e).attr('data-form-change', true);
                    }

                    $form.trigger('form-change', [ ($form.find('[data-form-change]').length !== 0) ]);
                });

            });
        });
    };

    $.fn.formChange.defaults = {
        hasChangedClass: 'has-changed'
    };

})(jQuery);
