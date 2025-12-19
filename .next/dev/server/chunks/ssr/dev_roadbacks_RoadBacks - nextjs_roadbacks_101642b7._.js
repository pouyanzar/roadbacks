module.exports = [
"[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pageLinks",
    ()=>pageLinks,
    "services",
    ()=>services,
    "socialLinks",
    ()=>socialLinks,
    "tours",
    ()=>tours
]);
const pageLinks = [
    {
        id: 1,
        href: "#home",
        text: "home"
    },
    {
        id: 2,
        href: "#about",
        text: "about"
    },
    {
        id: 3,
        href: "#services",
        text: "services"
    },
    {
        id: 4,
        href: "#tours",
        text: "tours"
    }
];
const socialLinks = [
    {
        id: 1,
        href: "https://www.twitter.com",
        icon: "fab fa-facebook"
    },
    {
        id: 2,
        href: "https://www.twitter.com",
        icon: "fab fa-twitter"
    },
    {
        id: 3,
        href: "https://www.twitter.com",
        icon: "fab fa-squarespace"
    }
];
const services = [
    {
        id: 1,
        icon: "fas fa-wallet fa-fw",
        title: "saving money",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    },
    {
        id: 2,
        icon: "fas fa-tree fa-fw",
        title: "endless hiking",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    },
    {
        id: 3,
        icon: "fas fa-socks fa-fw",
        title: "amazing comfort",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    }
];
const tours = [
    {
        id: 1,
        img: "/images/tour-1.jpeg",
        date: "august 26th, 2020",
        title: "Tibet Adventure",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "china",
        duration: 6,
        price: 2100
    },
    {
        id: 2,
        img: "/images/tour-2.jpeg",
        date: "october 1th, 2020",
        title: "best of java",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "indonesia",
        duration: 11,
        price: 1400
    },
    {
        id: 3,
        img: "/images/tour-3.jpeg",
        date: "september 15th, 2020",
        title: "explore hong kong",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "hong kong",
        duration: 8,
        price: 5000
    },
    {
        id: 4,
        img: "/images/tour-4.jpeg",
        date: "december 5th, 2019",
        title: "kenya highlights",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "kenya",
        duration: 20,
        price: 3300
    }
];
}),
"[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/PageLink.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const PageLink = ({ itemClass, href, text })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: itemClass,
            children: text
        }, void 0, false, {
            fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/PageLink.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/PageLink.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PageLink;
}),
"[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/PageLinks.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$PageLink$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/PageLink.tsx [app-rsc] (ecmascript)");
;
;
;
const PageLinks = ({ parentClass, itemClass })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: parentClass,
        id: "nav-links",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$PageLink$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                itemClass: itemClass,
                ...link
            }, link.id, false, {
                fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/PageLinks.tsx",
                lineNumber: 11,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/PageLinks.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PageLinks;
}),
"[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/SocialLink.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const SocialLink = ({ href, icon, itemClass })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: "_blank",
            rel: "noreferrer",
            className: itemClass,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: icon
            }, void 0, false, {
                fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/SocialLink.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/SocialLink.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/SocialLink.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SocialLink;
}),
"[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/SocialLinks.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$SocialLink$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/SocialLink.tsx [app-rsc] (ecmascript)");
;
;
;
const SocialLinks = ({ parentClass, itemClass })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: parentClass,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["socialLinks"].map((link)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$SocialLink$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                itemClass: itemClass,
                ...link
            }, link.id, false, {
                fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/SocialLinks.tsx",
                lineNumber: 12,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/SocialLinks.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SocialLinks;
}),
"[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Navbar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$PageLinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/PageLinks.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$SocialLinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/SocialLinks.tsx [app-rsc] (ecmascript)");
;
;
;
const Navbar = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "navbar",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: logo,
                            className: "nav-logo",
                            alt: "backroads"
                        }, void 0, false, {
                            fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Navbar.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "nav-toggle",
                            id: "nav-toggle",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-bars"
                            }, void 0, false, {
                                fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Navbar.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Navbar.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Navbar.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$PageLinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    parentClass: "nav-links",
                    itemClass: "nav-link"
                }, void 0, false, {
                    fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Navbar.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$SocialLinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    parentClass: "nav-icons",
                    itemClass: "nav-icon"
                }, void 0, false, {
                    fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Navbar.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Navbar.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Navbar.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$PageLinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/PageLinks.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$SocialLinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/SocialLinks.tsx [app-rsc] (ecmascript)");
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "section footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$PageLinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                parentClass: "footer-links",
                itemClass: "footer-link"
            }, void 0, false, {
                fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Footer.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$SocialLinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                parentClass: "footer-icons",
                itemClass: "footer-icon"
            }, void 0, false, {
                fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Footer.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "copyright",
                children: [
                    "copyright © Backroads travel tours company",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        id: "date",
                        children: new Date().getFullYear()
                    }, void 0, false, {
                        fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Footer.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " all rights reserved"
                ]
            }, void 0, true, {
                fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Footer.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Navbar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/components/Footer.tsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "RoadBacks",
    description: "Explore the world with RoadBacks"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/app/layout.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$roadbacks$2f$RoadBacks__$2d$__nextjs$2f$roadbacks$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/app/layout.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/app/layout.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/app/layout.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/dev/roadbacks/RoadBacks - nextjs/roadbacks/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=dev_roadbacks_RoadBacks%20-%20nextjs_roadbacks_101642b7._.js.map