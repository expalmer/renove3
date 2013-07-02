/*
Plugin: jQuery Simples Scroll Parallax do expalmer
Version 1.0
Author: Palmer Oliveira
Twitter: @expalmer
Author URL: http://www.o.com.br/
Plugin URL: http://www.r.com.br/
Make With: URL: http://jqueryboilerplate.com/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
;(function ( $, window, document, undefined ) {

    var pluginName = "expScrollParallax",
        defaults = {
            position: 'top',
            hidden: false,
            inertia: 1,
            speed: 1,
            xPosition: 50,
            xAdjuster: 0,
            yPosition: 50,
            yAdjuster: 0,
            stop: false,
            _show: false, //mostrar o debug

        };

    // O verdadeiro construtor do plugin
    function Plugin( element, options ) {

        this.element = element;

        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;

        this._name = pluginName;

        this._debug_name = 'expDebug';
        this._debug_div = '<div id="'+this._debug_name+'" style="position:fixed;bottom:0;background:#000;opacity:0.6;color:#fff;z-index:99999;width:100%;font:normal 2em/2.5em arial"></div>';


        this.init();
    }

    Plugin.prototype = {

        init: function() {
            //this.element e this.options
            var that = this;
            this.update()
            $(window).bind('scroll',function(){
                that.update();
            });
        },
        update: function() {

            var $elem = $(this.element),
            pos = $(window).scrollTop(),
            bgp;

            switch(this.options.position) {

                case 'top':
                    bgp = this.options.xPosition + "% " + ( -(pos * this.options.inertia) - this.options.yAdjuster )  + "px";
                    break;

                case 'bottom':
                    bgp = this.options.xPosition + "% " + ( (pos * this.options.inertia) - this.options.yAdjuster  ) + "px";
                    break;

                case 'left':
                    bgp = ( (-(pos * this.options.inertia)) - this.options.xAdjuster) + "px " + this.options.yPosition  + "%";
                    break;

                case 'right':
                    bgp = ( ((pos * this.options.inertia)) - this.options.xAdjuster) + "px " + this.options.yPosition  + "%";
                    break;

                case 'top-right':
                    bgp = ( (pos * this.options.inertia) - this.options.xAdjuster ) + "px " + ( -(pos * this.options.inertia) - this.options.yAdjuster) + "px";
                    break;

                case 'top-left':
                    bgp = ( (-(pos * this.options.inertia)) - this.options.xAdjuster ) + "px " + ( -(pos * this.options.inertia) - this.options.yAdjuster)  + "px";
                    break;

               case 'bottom-right':
                    bgp = ( ( (pos * this.options.speed) * this.options.inertia) - this.options.xAdjuster) + "px " + ( (pos * this.options.inertia) - this.options.yAdjuster)  + "px";
                    break;

                case 'bottom-left':
                    bgp = ( (-(pos * this.options.inertia)) - this.options.xAdjuster )  + "px " + ( (pos * this.options.inertia) - this.options.yAdjuster)  + "px";
                    break;

                case 'block-bottom':
                    bgp = ( (pos * this.options.inertia) - this.options.yAdjuster );
                    break;
            }

            if(this.options.position != 'block-bottom') {
                this.return_position($elem,bgp);
            } else {
                this.return_block($elem,pos,bgp);
            }

            // Show Adjuster
            if(this.options._show  === true) {
                $('body').append(this._debug_div);
                $('#'+this._debug_name).html('Ajuste o yAdjuster do #' + $elem.attr('id') + ' para ' +  this.options.xPosition + "% " + ( -(pos * this.options.inertia) - this.options.yAdjuster )  + "px" + '->:'+pos);
            }

            return;
        },
        return_position: function(elem,bgp){
            elem.css({'backgroundPosition': bgp});
            return;
        },
        return_block:function(elem,pos,bgp){

            if(this.options.stop !== false && pos >= this.options.stop) {
                return false;
            }
            elem.css({'display':'block','position':'relative','z-index':13,'top': bgp });
            return;

        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );