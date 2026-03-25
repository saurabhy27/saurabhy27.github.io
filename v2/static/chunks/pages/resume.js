(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[134], {
    5115: function(e, s, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/news", function() {
            return t(4729)
        }
        ])
    },
    97: function(e, s, t) {
        "use strict";
        var a = t(5893)
          , i = t(9008)
          , n = t.n(i);
        let o = e=>{
            let {pageTitle: s} = e;
            return (0,
            a.jsx)(n(), {
                children: (0,
                a.jsx)("title", {
                    children: s && "".concat(s, " || Tokyo - Personal Portfolio React Nextjs Template}")
                })
            })
        }
        ;
        s.Z = o
    },
    4669: function(e, s, t) {
        "use strict";
        t.d(s, {
            Z: function() {
                return p
            }
        });
        var a = t(5893)
          , i = t(5675)
          , n = t.n(i)
          , o = t(1664)
          , r = t.n(o)
          , l = t(6e3)
          , h = t.n(l)
          , d = t(7294);
        let c = ()=>(0,
        a.jsx)("div", {
            className: "copyright",
            children: (0,
            a.jsxs)("p", {
                children: ["\xa9 ", new Date().getFullYear(), " Tokyo ", (0,
                a.jsx)("br", {}), " Created by", (0,
                a.jsx)("a", {
                    href: "https://themeforest.net/user/ib-themes",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Ib-Themes"
                })]
            })
        })
          , m = (e,s)=>{
            if (e && s)
                return e.replace(/\/\d+/, "") === s.replace(/\/\d+/, "")
        }
        ;
        var u = t(1163);
        let g = ()=>{
            let e = (0,
            u.useRouter)()
              , [s,t] = (0,
            d.useState)(!1)
              , i = ()=>t(!s);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    className: "header",
                    children: (0,
                    a.jsxs)("div", {
                        className: "header-inner",
                        children: [(0,
                        a.jsx)("div", {
                            className: "logo",
                            children: (0,
                            a.jsx)(r(), {
                                className: "navbar-brand",
                                href: "/",
                                children: (0,
                                a.jsx)(n(), {
                                    width: 140,
                                    height: 20,
                                    src: "/img/logo/dark.png",
                                    alt: "brand"
                                })
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "my_trigger",
                            onClick: i,
                            children: (0,
                            a.jsx)("div", {
                                className: s ? "hamburger hamburger--collapse-r is-active" : "hamburger",
                                children: (0,
                                a.jsx)("div", {
                                    className: "hamburger-box",
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "hamburger-inner"
                                    })
                                })
                            })
                        })]
                    })
                }), (0,
                a.jsx)("div", {
                    className: s ? "leftpart active" : "leftpart",
                    children: (0,
                    a.jsxs)("div", {
                        className: "leftpart_inner",
                        children: [(0,
                        a.jsx)("div", {
                            className: "logo",
                            children: (0,
                            a.jsx)(r(), {
                                className: "navbar-brand",
                                href: "/",
                                children: (0,
                                a.jsx)(n(), {
                                    width: 135,
                                    height: 20,
                                    src: "/img/logo/dark.png",
                                    alt: "brand"
                                })
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "menu",
                            children: (0,
                            a.jsx)("ul", {
                                children: h().map(s=>(0,
                                a.jsx)("li", {
                                    onClick: i,
                                    children: (0,
                                    a.jsxs)(r(), {
                                        className: "".concat(m(s.routePath, e.asPath) ? "active " : ""),
                                        href: s.routePath,
                                        children: [(0,
                                        a.jsx)(n(), {
                                            width: 15,
                                            height: 15,
                                            className: "svg",
                                            src: s.icon,
                                            alt: "homerun"
                                        }), (0,
                                        a.jsx)("span", {
                                            className: "menu_content",
                                            children: s.menuName
                                        })]
                                    })
                                }, s.id))
                            })
                        }), (0,
                        a.jsx)(c, {})]
                    })
                })]
            })
        }
        ;
        var p = g
    },
    2729: function(e, s, t) {
        "use strict";
        var a = t(5893)
          , i = t(1818);
        let n = ()=>(0,
        a.jsxs)("div", {
            className: "social-share",
            children: [(0,
            a.jsx)(i.Dk, {
                url: "https://www.facebook.com/ibthemes/",
                quote: "We are ib-themes, a quality and dedicated group of individuals who love modern trend like React, Vue and Angular JS Web Templates. We are growing with Modern Web Technologies.",
                hashtag: "#ibthemes",
                children: (0,
                a.jsx)(i.Vq, {
                    size: 32,
                    round: !0
                })
            }), (0,
            a.jsx)(i.MC, {
                url: "https://www.pinterest.com/",
                media: "We are ib-themes, a quality and dedicated group of individuals who love modern trend like React, Vue and Angular JS Web Templates. We are growing with Modern Web Technologies.",
                children: (0,
                a.jsx)(i.cH, {
                    size: 32,
                    round: !0
                })
            }), (0,
            a.jsx)(i.B, {
                url: "https://twitter.com/ib_themes",
                title: "We are ib-themes, a quality and dedicated group of individuals who love modern trend like React, Vue and Angular JS Web Templates. We are growing with Modern Web Technologies.",
                children: (0,
                a.jsx)(i.Zm, {
                    size: 32,
                    round: !0
                })
            }), (0,
            a.jsx)(i.r2, {
                url: "https://www.linkedin.com/in/ib-themes-company-469408207/",
                children: (0,
                a.jsx)(i.pA, {
                    size: 32,
                    round: !0
                })
            }), (0,
            a.jsx)(i.SZ, {
                url: "https://www.tumblr.com/",
                title: "We are ib-themes, a quality and dedicated group of individuals who love modern trend like React, Vue and Angular JS Web Templates. We are growing with Modern Web Technologies.",
                children: (0,
                a.jsx)(i.OA, {
                    size: 32,
                    round: !0
                })
            })]
        });
        s.Z = n
    },
    3039: function(e, s, t) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        let a = t(5893)
          , {default: i} = t(5675);
        e.exports = [{
            id: 1,
            title: "Format releases a new tool that enables direct video hosting",
            img: "/img/news/1.jpg",
            poster: "ALEX WATSON",
            date: "07 APRIL 2021",
            descriptions: (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)("div", {
                    className: "descriptions",
                    children: [(0,
                    a.jsx)("p", {
                        className: "bigger",
                        children: "Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                    }), (0,
                    a.jsx)("p", {
                        children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                    }), (0,
                    a.jsxs)("div", {
                        className: "quotebox",
                        children: [(0,
                        a.jsx)("div", {
                            className: "icon",
                            children: (0,
                            a.jsx)(i, {
                                width: 56,
                                height: 50,
                                className: "svg",
                                src: "/img/svg/quote.svg",
                                alt: "tumb"
                            })
                        }), (0,
                        a.jsx)("p", {
                            children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                        })]
                    }), (0,
                    a.jsx)("p", {
                        children: "The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again."
                    })]
                })
            })
        }, {
            id: 2,
            title: "Sony announced two new full frame cameras with zero fanfare",
            img: "/img/news/2.jpg",
            poster: "TAHINA AMAI",
            date: "05 APRIL 2021",
            descriptions: (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)("div", {
                    className: "descriptions",
                    children: [(0,
                    a.jsx)("p", {
                        className: "bigger",
                        children: "Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                    }), (0,
                    a.jsx)("p", {
                        children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                    }), (0,
                    a.jsxs)("div", {
                        className: "quotebox",
                        children: [(0,
                        a.jsx)("div", {
                            className: "icon",
                            children: (0,
                            a.jsx)(i, {
                                width: 56,
                                height: 50,
                                className: "svg",
                                src: "/img/svg/quote.svg",
                                alt: "tumb"
                            })
                        }), (0,
                        a.jsx)("p", {
                            children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                        })]
                    }), (0,
                    a.jsx)("p", {
                        children: "The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again."
                    })]
                })
            })
        }, {
            id: 3,
            title: "Why every photographer should shoot film, even in 2022",
            img: "/img/news/3.jpg",
            poster: "NIRO AKTA",
            date: "15 APRIL 2021",
            descriptions: (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)("div", {
                    className: "descriptions",
                    children: [(0,
                    a.jsx)("p", {
                        className: "bigger",
                        children: "Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                    }), (0,
                    a.jsx)("p", {
                        children: "Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over."
                    }), (0,
                    a.jsxs)("div", {
                        className: "quotebox",
                        children: [(0,
                        a.jsx)("div", {
                            className: "icon",
                            children: (0,
                            a.jsx)(i, {
                                width: 56,
                                height: 50,
                                className: "svg",
                                src: "/img/svg/quote.svg",
                                alt: "tumb"
                            })
                        }), (0,
                        a.jsx)("p", {
                            children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                        })]
                    }), (0,
                    a.jsx)("p", {
                        children: "The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again."
                    })]
                })
            })
        }, {
            id: 4,
            title: "Stay creative in lockdown with these fun photo projects",
            img: "/img/news/4.jpg",
            poster: "SHIKA VAIL",
            date: "12 APRIL 2021",
            descriptions: (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)("div", {
                    className: "descriptions",
                    children: [(0,
                    a.jsx)("p", {
                        className: "bigger",
                        children: "Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                    }), (0,
                    a.jsx)("p", {
                        children: "Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over."
                    }), (0,
                    a.jsx)("p", {
                        children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                    }), (0,
                    a.jsxs)("div", {
                        className: "quotebox",
                        children: [(0,
                        a.jsx)("div", {
                            className: "icon",
                            children: (0,
                            a.jsx)(i, {
                                width: 56,
                                height: 50,
                                className: "svg",
                                src: "/img/svg/quote.svg",
                                alt: "tumb"
                            })
                        }), (0,
                        a.jsx)("p", {
                            children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                        })]
                    }), (0,
                    a.jsx)("p", {
                        children: "Pretend everything is new and that you haven’t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off."
                    }), (0,
                    a.jsx)("p", {
                        children: "The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again."
                    })]
                })
            })
        }]
    },
    6e3: function(e) {
        "use strict";
        e.exports = [{
            id: 1,
            icon: "/img/svg/home-run.svg",
            menuName: "Home",
            routePath: "/home"
        }, {
            id: 2,
            icon: "/img/svg/avatar.svg",
            menuName: "About",
            routePath: "/about"
        }, {
            id: 3,
            icon: "/img/svg/setting.svg",
            menuName: "Service",
            routePath: "/service"
        }, {
            id: 4,
            icon: "/img/svg/briefcase.svg",
            menuName: "Portfolio",
            routePath: "/portfolio"
        }, {
            id: 5,
            icon: "/img/svg/paper.svg",
            menuName: "News",
            routePath: "/news"
        }, {
            id: 6,
            icon: "/img/svg/mail.svg",
            menuName: "Contact",
            routePath: "/contact"
        }]
    },
    4729: function(e, s, t) {
        "use strict";
        t.r(s),
        t.d(s, {
            default: function() {
                return v
            }
        });
        var a = t(5893)
          , i = t(97)
          , n = t(5675)
          , o = t.n(n)
          , r = t(7294)
          , l = t(3253)
          , h = t.n(l)
          , d = t(3039)
          , c = t.n(d)
          , m = t(2729);
        h().setAppElement("#__next");
        let u = ()=>{
            let[e,s] = (0,
            r.useState)({})
              , [t,i] = (0,
            r.useState)(!1)
              , n = e=>{
                let t = c().find(s=>(null == s ? void 0 : s.id) === e);
                s(t),
                i(!0)
            }
              , l = e=>{
                n(e)
            }
            ;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("ul", {
                    children: c().map(e=>(0,
                    a.jsx)("li", {
                        children: (0,
                        a.jsxs)("div", {
                            className: "list_inner",
                            onClick: ()=>l(null == e ? void 0 : e.id),
                            children: [(0,
                            a.jsx)("div", {
                                className: "image",
                                children: (0,
                                a.jsx)("div", {
                                    className: "main ",
                                    style: {
                                        backgroundImage: "url(".concat(e.img, ")")
                                    }
                                })
                            }), (0,
                            a.jsxs)("div", {
                                className: "details",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "extra",
                                    children: (0,
                                    a.jsxs)("p", {
                                        className: "date",
                                        children: ["By ", (0,
                                        a.jsx)("a", {
                                            href: "#",
                                            children: e.poster
                                        }), (0,
                                        a.jsx)("span", {
                                            children: e.date
                                        })]
                                    })
                                }), (0,
                                a.jsx)("h3", {
                                    className: "title",
                                    children: e.title
                                }), (0,
                                a.jsx)("div", {
                                    className: "tokyo_tm_read_more",
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "read-more",
                                        children: (0,
                                        a.jsx)("span", {
                                            children: "Read More"
                                        })
                                    })
                                })]
                            })]
                        })
                    }, e.id))
                }), (0,
                a.jsx)(h(), {
                    isOpen: t,
                    onRequestClose: ()=>i(!1),
                    contentLabel: "My dialog",
                    className: "mymodal",
                    overlayClassName: "myoverlay",
                    closeTimeoutMS: 500,
                    children: (0,
                    a.jsxs)("div", {
                        className: "tokyo_tm_modalbox_news",
                        children: [(0,
                        a.jsx)("button", {
                            className: "close-modal",
                            onClick: ()=>i(!1),
                            children: (0,
                            a.jsx)(o(), {
                                width: 45,
                                height: 45,
                                src: "/img/svg/cancel.svg",
                                alt: "close icon"
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "box_inner",
                            children: (0,
                            a.jsxs)("div", {
                                className: "description_wrap scrollable",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "image",
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "main",
                                        style: {
                                            backgroundImage: "url(".concat(null == e ? void 0 : e.img, ")")
                                        }
                                    })
                                }), (0,
                                a.jsxs)("div", {
                                    className: "details",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "extra",
                                        children: (0,
                                        a.jsxs)("p", {
                                            className: "date",
                                            children: ["By ", (0,
                                            a.jsx)("a", {
                                                href: "#",
                                                children: null == e ? void 0 : e.poster
                                            }), (0,
                                            a.jsx)("span", {
                                                children: null == e ? void 0 : e.date
                                            })]
                                        })
                                    }), (0,
                                    a.jsx)("h3", {
                                        className: "title",
                                        children: null == e ? void 0 : e.title
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "main_content ",
                                    children: [null == e ? void 0 : e.descriptions, (0,
                                    a.jsxs)("div", {
                                        className: "news_share",
                                        children: [(0,
                                        a.jsx)("span", {
                                            children: "Share:"
                                        }), (0,
                                        a.jsx)(m.Z, {})]
                                    })]
                                })]
                            })
                        })]
                    })
                })]
            })
        }
        ;
        var g = t(4669);
        let p = ()=>(0,
        a.jsxs)(a.Fragment, {
            children: [(0,
            a.jsx)(i.Z, {
                pageTitle: "Blog"
            }), (0,
            a.jsx)(g.Z, {}), (0,
            a.jsx)("div", {
                className: "rightpart",
                children: (0,
                a.jsx)("div", {
                    className: "rightpart_in",
                    children: (0,
                    a.jsx)("div", {
                        className: "tokyo_tm_section",
                        children: (0,
                        a.jsx)("div", {
                            "data-aos": "fade-right",
                            "data-aos-duration": "1200",
                            children: (0,
                            a.jsx)("div", {
                                className: "container",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "tokyo_tm_news",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "tokyo_tm_title",
                                        children: (0,
                                        a.jsx)("div", {
                                            className: "title_flex",
                                            children: (0,
                                            a.jsxs)("div", {
                                                className: "left",
                                                children: [(0,
                                                a.jsx)("span", {
                                                    children: "News"
                                                }), (0,
                                                a.jsx)("h3", {
                                                    children: "Latest News"
                                                })]
                                            })
                                        })
                                    }), (0,
                                    a.jsx)(u, {})]
                                })
                            })
                        })
                    })
                })
            })]
        });
        var v = p
    }
}, function(e) {
    e.O(0, [996, 675, 253, 818, 774, 888, 179], function() {
        return e(e.s = 5115)
    }),
    _N_E = e.O()
}
]);
