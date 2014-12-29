/*! jquery-formChange - v0.0.1 (2013-12-14)
* -----------------
* Copyright(c) 2013 José Carlos Chávez <jcchavezs@gmail.com>
*/

(function($) {
    $.fn.formChange = function(options) {
        this.each(function() {
            var form = this;

            $(form).on('submit', function(){
                options.callback(false, form);
            }).find('input, select, textarea').each(function(i, e) {
                $(e).data('initial-value', $(e).val()).on('change', function() {
                    if ($(e).val() === $(e).data('initial-value')) {
                        if (options.hasOwnProperty('class')) {
                            $(e).removeClass(options.class);
                        }

                        $(e).removeAttr('data-form-change');
                    } else {
                        if (options.hasOwnProperty('class')) {
                            $(e).addClass(options.class);
                        }

                        $(e).attr('data-form-change', true);
                    }

                    if ($(form).find('[data-form-change]').length === 0) {
                        switch (typeof options.callback) {
                            case 'string':
                                window[options.callback](false, form);
                                break;
                            case 'function':
                                options.callback(false, form);
                                break;
                        }
                    } else {
                        switch (typeof options.callback) {
                            case 'string':
                                window[options.callback](true, form);
                                break;
                            case 'function':
                                options.callback(true, form);
                                break;
                        }
                    }
                });
            });
        });
    };
})(jQuery);
