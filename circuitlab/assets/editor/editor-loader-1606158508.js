window['circuitlab_version'] = "302fbcde890e1df716549a1c7ee11bed1fd59cbd";





(function () {
    if (!this.gettext) {
        this.gettext = function (x) {
            return x;
        };
    }

    if (!this.ngettext) {
        this.ngettext = function (sing, plur, ct) {
            return (ct == 1) ? sing : plur;
        };
    }

    if (!this.gettext_noop) {
        this.gettext_noop = function (x) {
            return x;
        };
    }

    if (!this.pgettext) {
        this.pgettext = function (c, x) {
            return x;
        };
    }

    if (!this.npgettext) {
        this.npgettext = function (c, sing, plur, ct) {
            return (ct == 1) ? sing : plur;
        };
    }

    if (!this.interpolate) {
        this.interpolate = function (fmt, obj, named) {
            if (named) {
                return fmt.replace(/%\(\w+\)s/g, function (match) {
                    return String(obj[match.slice(2, -2)]);
                });
            } else {
                return fmt.replace(/%s/g, function (match) {
                    return String(obj.shift());
                });
            }
        };
    }
}).apply(this);
(function () {
    'use strict';
    var f, g, h, i, j, k;
    f = function () {
        function a() {
            this.d = $("<div id=\'startupsplashscreen\'></div>");
            this.b = $("<div id=\'splash_inner\'></div>");
            this.d.append(this.b);
            this.a = $("<h3 style=\'font-style: italic;\'></h3>");
            this.a.text(gettext("Starting..."));
            this.c = $("<div id=\'splash_progressbar\'></div>");
            this.e = $("<div id=\'splash_progressbar_inner\'></div>");
            this.c.append(this.e);
            this.b.append(this.a);
            this.b.append("<img src=\'https://www.circuitlab.com/assets/images/topbar_logo_60_2x.png\' width=\'196\' height=\'60\' alt=\'CircuitLab\' style=\'width:196px;height:60px;\'/>");
            this.b.append("<h3>" +
                gettext("sketch &middot; simulate &middot; share") + "</h3>");
            this.b.append(this.c)
        }
        a.prototype.show = function () {
            return this.d.show()
        };
        a.prototype.editor_loaded = function () {
            this.e.css("width", "100%");
            return this.a.text(gettext("Initializing..."))
        };
        a.prototype.error = function () {
            return this.a.text(gettext("Unexpected error! Please re-try."))
        };
        a.prototype.restarting = function () {
            return this.a.text(gettext("Updating..."))
        };
        a.prototype.hide = function () {
            this.a.text(gettext("Loading complete."));
            return this.d.fadeOut(500)
        };
        a.prototype.set_progress = function (a) {
            return null != a ? (this.c.show(), this.e.css("width", "" + 100 * a + "%")) : this.c.hide()
        };
        return a
    }();
    i = function (a) {
        var b;
        b = document.createElement("script");
        b.type = "text/javascript";
        b.src = a;
        a = document.getElementsByTagName("script")[0];
        return a.parentNode.insertBefore(b, a)
    };
    window._eval_post_load_cblist = [];
    window._eval_post_load_fired = !1;
    h = function () {
        var a, b, c, d;
        if (window._eval_post_load_fired) return !1;
        window._eval_post_load_fired = !0;
        d = window._eval_post_load_cblist;
        b = 0;
        for (c = d.length; b < c; b++) a = d[b], a();
        return !0
    };
    g = function (a) {
        window._eval_post_load_fired ? a() : window._eval_post_load_cblist.push(a);
        return !0
    };
    $(window).load(h);
    $(document).ready(function () {
        return setTimeout(h, 2500)
    });
    j = function (a, b) {
        var c, d;
        c = $("#" + a);
        d = new f;
        c.append(d.d);
        window.loader_startupsplashscreen = d;
        window.loader_init_sim_enabled = !0;
        window.loader_init_sim_cont = a;
        null != window.appcache_progress_handlers && window.appcache_progress_handlers.push(function (a) {
            return d.set_progress(a)
        });
        return g(function () {
            i(b);
            //return i("/accounts/_identifyjs/")
        })
    };
    window.loader_init_sim = j;
    window.circuit_load_url = "";
    window.circuit_save_url = "";
    window.circuit_id = "";
    window.circuit_revnum = "";
    window.circuit_name = "";
    window.circuit_absolute_url = "";
    window.circuit_user_username = "";
    window.circuit_user_absolute_url = "";
    window.circuitlab_preferences = {};
    k = function () {
        return $(document).ready(function () {
            j("editor_container", window.loader_editor_path || "/assets/editor/editor-compiled.js?v=");
            return $(".topbar .nav").dropdown()
        })
    };
    var l;
    l = window.location.href.split("#")[1] || "";
    if ("" === l || "?" !== l[0]) l = "?id=" + l;
    /*$.ajax({
        url: "/editor/_jsenv/" + l,
        dataType: "json",
        success: function (a) {
            var b, c;
            for (b in a) c = a[b], window[b] = c;
            return k()
        },
        error: function () {return k();
        }
    });
  */
 return k();
}).call(this);
window['loader_editor_path'] = '../assets/editor/editor-compiled-1606158508.js';
