$(function ($) {

    $.fn.triSelect = function (settings) {

        $.extend($.ui.slider.prototype.options.classes,
        {
            "ui-slider": "custom-corner-all",
            "ui-slider-handle": "custom-corner-all",
            "ui-slider-range": "custom-corner-all custom-widget-header",
            "ui-state-focus": "custom-focust",
            "ui-state-active": "custom-active",
            "ui-state-default": "custom-default"
        });

        var parent = $(this).parent();
        var itemId = "#" + this[0].id;
        var container = $(itemId);
        var initialValue = $(this).val();
        var numericValue = convertToNumericValue(initialValue);

        if (settings == undefined) {
            settings = {
                positiveIcon: "glyphicon glyphicon-ok-sign",
                neutralIcon: "glyphicon glyphicon-question-sign",
                negativeIcon: "glyphicon glyphicon-remove-sign"
            }
        }

        function convertToValue(val) {
            var value = null;
            if (val == 0) {
                value = false;
            } else if (val == 1) {
                value = null;
            } else if (val == 2) {
                value = true;
            }
            return value;
        }

        function convertToNumericValue(val) {
            if (val == "") {
                return 1;
            } else if (val == "true" || val == "True") {
                return 2;
            } else if (val == "false" || val == "False") {
                return 0;
            }
        }

        function changeIcon(a) {
            var item = container.closest('.tricatch-parent').find('.ui-slider-handle');
            $(item).empty();
            item.addClass("betterSliderCircle");
            if (a == "true" || a == "True") {
                item.addClass("positiveSlider");
                item.removeClass("negativeSlider");
                item.removeClass("neutralSlider");
                var itemChild = "<span class = 'handleIcon " + settings.positiveIcon + "'></span>";
                $(item).html(itemChild);
            } else if (a == "false" || a == "False") {
                item.addClass("negativeSlider");
                item.removeClass("positiveSlider");
                item.removeClass("neutralSlider");
                var itemChild = "<span class = 'handleIcon " + settings.negativeIcon + "'></span>";
                $(item).html(itemChild);
            } else if (a === "") {
                item.addClass("neutralSlider");
                item.removeClass("negativeSlider");
                item.removeClass("positiveSlider");
                var itemChild = "<span class = 'handleIcon " + settings.neutralIcon + "'></span>";
                $(item).html(itemChild);
            }
        }

        parent.slider({
            value: numericValue,
            min: 0,
            max: 2,
            animate: "slow",
            slide: function (event, ui) {
                var value = convertToValue(ui.value);
                container.val(value);
                var target = container.data('changetarget');
                $('#' + target).val("True");
                $(document).trigger('triselect-change', value);
            }
        });

        $(document).on('triselect-change', function (event, a) {
            var value = container.val();
            changeIcon(value);
        });

        $(document).trigger('triselect-change');

        function addTheMissingClass() {
            $('.ui-slider-handle').each(function () {
                $(this).addClass('ui-state-hover');
            });
        }

    }


}(jQuery));