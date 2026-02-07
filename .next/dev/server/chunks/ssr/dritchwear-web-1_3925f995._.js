module.exports = [
"[project]/dritchwear-web-1/components/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("rounded-2xl border border-black/10 bg-white shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dritchwear-web-1/components/Card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/dritchwear-web-1/components/AnnouncementModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnnouncementModal",
    ()=>AnnouncementModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/Card.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AnnouncementModal({ id, title, message, subtitle, highlight, bullets = [], ctaLabel = "Start your order now!", ctaHref = "/shop" }) {
    const storageKey = `dritchwear_announcement_dismissed_${id}`;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dismissed = ("TURBOPACK compile-time value", "undefined") !== "undefined" && localStorage.getItem(storageKey);
        if ("TURBOPACK compile-time truthy", 1) setOpen(true);
    }, [
        storageKey
    ]);
    const close = ()=>{
        localStorage.setItem(storageKey, "1");
        setOpen(false);
    };
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "relative w-full max-w-xl rounded-2xl p-6 md:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "aria-label": "Close",
                    className: "absolute right-4 top-4 rounded-lg p-2 hover:bg-black/[0.05]",
                    onClick: close,
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-center text-xl md:text-2xl font-extrabold text-[var(--purple)]",
                    children: [
                        "🎉 ",
                        title
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-center text-sm text-black/70",
                    children: subtitle
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this),
                highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-center text-lg font-extrabold text-black",
                    children: highlight
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this),
                bullets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 space-y-3",
                    children: bullets.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-600",
                                    children: "✅"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-black/80",
                                    children: item
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this),
                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-5 text-center text-sm text-black/75",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-7 flex flex-col sm:flex-row gap-3 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: ctaHref,
                            onClick: close,
                            className: "btn btn-purple w-full sm:w-auto",
                            children: [
                                "👉 ",
                                ctaLabel
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                            lineNumber: 100,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn w-full sm:w-auto border border-black/10",
                            onClick: close,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                            lineNumber: 108,
                            columnNumber: 3
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/dritchwear-web-1/components/ElfsightReviews.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElfsightReviews",
    ()=>ElfsightReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/script.js [app-ssr] (ecmascript)");
"use client";
;
;
function ElfsightReviews() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://elfsightcdn.com/platform.js",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/components/ElfsightReviews.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "elfsight-app-a52b5574-9890-4347-b798-5be2ebe1a087",
                "data-elfsight-app-lazy": true
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/components/ElfsightReviews.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/dritchwear-web-1/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$AnnouncementModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/AnnouncementModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$ElfsightReviews$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/ElfsightReviews.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function SoftIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        className: "text-[var(--brand-purple)] opacity-60",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3l2.2 6.7L21 12l-6.8 2.3L12 21l-2.2-6.7L3 12l6.8-2.3L12 3z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dritchwear-web-1/app/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
function HomePage() {
    const [isStoreModalOpen, setIsStoreModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$AnnouncementModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnnouncementModal"], {
                id: "promo_001",
                title: "Special Offer Just for You!",
                subtitle: "Planning a big order?",
                highlight: "Spend ₦300,000 or more and enjoy:",
                bullets: [
                    "Free delivery across Nigeria",
                    "50% off international shipping",
                    "Bonus branded gift pack added to your order"
                ],
                message: "Let’s bring your custom clothing and branded items to life; fast, clean, and stylish!",
                ctaLabel: "Start your order now!",
                ctaHref: "/shop"
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--soft-purple)] blur-3xl"
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--brand-purple)]/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[var(--yellow)]/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-6xl px-6 pt-16 pb-10 grid lg:grid-cols-2 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold tracking-[0.18em] uppercase text-black/60",
                                children: "Premium custom streetwear & branded merch"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-4 text-[42px] font-extrabold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Wear it."
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 3
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#FDB813"
                                        },
                                        children: "Brand it."
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Gift it."
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-base md:text-lg text-black/65",
                                children: "Dritchwear helps individuals, brands, and organisations turn clothing into identity, visibility, and value."
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-7 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsStoreModalOpen(true),
                                        className: "btn btn-purple",
                                        children: "Shop on the App"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/shop",
                                        className: "rounded-xl border border-black/15 px-6 py-3 font-semibold text-black hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple)] focus:ring-offset-2",
                                        children: "View Collection"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 flex items-center gap-3 text-sm text-black/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        className: "inline-block h-[2px] w-8 bg-[#FDB813]"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Custom · Bulk · Events · Merch"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/25 via-transparent to-transparent z-10"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/hero.png",
                                alt: "Dritchwear premium streetwear",
                                className: "rounded-3xl object-cover w-full h-[420px] md:h-[520px] border border-black/10"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-4 -left-4 h-16 w-16 rounded-2xl bg-[var(--brand-purple)]/10 border border-black/10"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 -right-4 h-16 w-16 rounded-2xl bg-[var(--yellow)]/20 border border-black/10"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-6xl px-6 py-20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-extrabold tracking-tight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--brand-purple)]",
                                children: "Why Choose"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 123,
                                columnNumber: 3
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#FDB813]",
                                children: "Dritchwear"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 122,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-base md:text-lg text-black/60 max-w-2xl mx-auto",
                        children: "We're committed to delivering exceptional quality and service in every aspect of your shopping experience."
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 127,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            className: "text-[var(--brand-purple)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 3l2.2 6.7L21 12l-6.8 2.3L12 21l-2.2-6.7L3 12l6.8-2.3L12 3z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg",
                                        children: "Top Quality"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-black/60 max-w-xs",
                                        children: "We use good fabrics and pay attention to every detail in every item."
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 134,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            className: "text-[var(--brand-purple)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 7h11v8H3V7zm11 2h4l3 3v3h-7V9z",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg",
                                        children: "Fast Shipping"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-black/60 max-w-xs",
                                        children: "We send out orders quickly, so you get your clothes on time."
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 157,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            className: "text-[var(--brand-purple)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z",
                                                stroke: "currentColor",
                                                strokeWidth: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg",
                                        children: "Secure Shopping"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-black/60 max-w-xs",
                                        children: "Your information is kept safe with strong security."
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 182,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            className: "text-[var(--brand-purple)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 12a8 8 0 0116 0v5a2 2 0 01-2 2h-2v-6h4M4 12v5a2 2 0 002 2h2v-6H4",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg",
                                        children: "24/7 Support"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-black/60 max-w-xs",
                                        children: "Our team is always ready to help you, day or night."
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 206,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 132,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 121,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[var(--black)] text-white py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold tracking-[0.18em] uppercase text-white/60",
                                    children: "Built for modern streetwear"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-4 text-4xl font-extrabold leading-tight",
                                    style: {
                                        color: "#FDB813"
                                    },
                                    children: [
                                        "Built for identity.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 9
                                        }, this),
                                        "Designed for visibility."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 text-white/70 max-w-lg",
                                    children: "We don’t just print clothes. We help you show up with confidence — whether it’s your personal style, your brand, or your next big event."
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsStoreModalOpen(true),
                                            className: "rounded-xl bg-white px-6 py-3 font-semibold transition hover:bg-white/95 hover:text-black",
                                            style: {
                                                color: "#5A2D82"
                                            },
                                            children: "Open the App"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact",
                                            className: "rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10 hover:text-[#5A2D82]",
                                            children: "Custom Orders"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 236,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-white/10 p-5 bg-white/[0.03]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white/90",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "22",
                                                height: "22",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7 8l5-4 5 4v3l-2 2v7H9v-7l-2-2V8z",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 284,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-3 font-bold !text-white",
                                            children: "Custom Streetwear"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-white/65",
                                            children: "Oversized fits. Clean cuts. Premium feel."
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-white/10 p-5 bg-white/[0.03]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white/90",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "22",
                                                height: "22",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 12l9 9 9-9-9-9H3v9z",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "7",
                                                        cy: "7",
                                                        r: "1.5",
                                                        fill: "currentColor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-3 font-bold !text-white",
                                            children: "Branded Merch"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-white/65",
                                            children: "Tote bags, caps, bottles, boxes."
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-white/10 p-5 bg-white/[0.03]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white/90",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "22",
                                                height: "22",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 7l9-4 9 4-9 4-9-4z",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 7v10l9 4 9-4V7",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 11v10",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-3 font-bold !text-white",
                                            children: "Bulk Orders"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-white/65",
                                            children: "For teams, events, campaigns and gifting."
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 323,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-white/10 p-5 bg-white/[0.03]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[#ffff",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "22",
                                                height: "22",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M9.5 12.5l2 2 4-4",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 7
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 5
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-3 font-bold !text-white",
                                            children: "Durable Quality"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-white/65",
                                            children: "Strong fabrics, solid stitching, and finishes built to last."
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 279,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 235,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 234,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-6xl px-6 py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-extrabold tracking-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--brand-purple)]",
                                        children: "What Our Customers"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 7
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#FDB813]",
                                        children: "Say"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 391,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 389,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-base md:text-lg text-black/60 max-w-2xl mx-auto",
                                children: "See what people are saying about Dritchwear on Google."
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 393,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 388,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$ElfsightReviews$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElfsightReviews"], {}, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 399,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 398,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 387,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-6xl px-6 py-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-extrabold tracking-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#FDB813]",
                                            children: "Our"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 411,
                                            columnNumber: 3
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--brand-purple)]",
                                            children: "Offering"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 3
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 410,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 grid gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 9
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M9.5 12.5l2 2 4-4",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 9
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 7
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-black",
                                                            children: "Quality that lasts"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-black/70",
                                                            children: "Strong fabrics, neat stitching, clean finishing."
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4 12a8 8 0 0116 0v5a2 2 0 01-2 2h-2v-6h4M4 12v5a2 2 0 002 2h2v-6H4",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 9
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 7
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-black",
                                                            children: "Good customer service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-black/70",
                                                            children: "Clear communication and fast updates."
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 431,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 12a4 4 0 100-8 4 4 0 000 8z",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 9
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M4 21a8 8 0 0116 0",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 9
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 7
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-black",
                                                            children: "Built for identity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-black/70",
                                                            children: "Wear it your way. Show who you are."
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 444,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M21 8l-9-4-9 4 9 4 9-4z",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 9
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3 8v8l9 4 9-4V8",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 9
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 7
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-black",
                                                            children: "Bulk orders"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-black/70",
                                                            children: "For teams, events, brands, and gifting."
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4 7h16M4 12h10M4 17h16",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 9
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 7
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-black",
                                                            children: "Custom orders"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-black/70",
                                                            children: "Tell us what you want; we bring it to life."
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 472,
                                            columnNumber: 3
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 7h16M4 12h10M4 17h16",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 7
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 5
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 487,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-black",
                                                    children: "Buy & resell"
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-black/70",
                                                    children: "Perfect for vendors who want to buy in bulk and resell."
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 498,
                                            columnNumber: 3
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 486,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 409,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-extrabold tracking-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--brand-purple)]",
                                            children: "Order"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 511,
                                            columnNumber: 3
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#FDB813]",
                                            children: "via the App"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 3
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-black/70",
                                    children: "Browse the full catalogue, place orders, and track progress inside the Dritchwear mobile app."
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 rounded-2xl border border-black/10 bg-black/[0.02] overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/app-preview.jpeg",
                                        alt: "Dritchwear app preview",
                                        className: "h-52 w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 520,
                                        columnNumber: 3
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex flex-col sm:flex-row gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://example.com/appstore",
                                            className: "inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--brand-purple)] px-6 py-3 font-semibold !text-white transition hover:bg-black hover:!text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16.365 1.43c0 1.14-.42 2.22-1.22 3.1-.82.9-2.17 1.6-3.29 1.5-.14-1.1.43-2.27 1.22-3.07.86-.88 2.32-1.55 3.29-1.53zM20.52 17.12c-.55 1.25-.8 1.8-1.5 2.9-.98 1.55-2.37 3.47-4.09 3.49-1.53.02-1.92-.99-3.99-.98-2.07.01-2.5 1-4.03.98-1.72-.02-3.03-1.77-4.01-3.32-2.24-3.54-2.47-7.69-1.09-9.82.98-1.52 2.52-2.41 3.95-2.41 1.56 0 2.54 1.01 3.83 1.01 1.25 0 2.02-1.02 3.82-1.02 1.27 0 2.62.69 3.6 1.88-3.17 1.74-2.66 6.26.71 7.31z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 5
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 3
                                                }, this),
                                                "App Store"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://play.google.com/store/apps/details?id=com.dritchwear.app",
                                            className: "inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--brand-purple)] px-6 py-3 font-semibold text-[var(--brand-purple)] hover:bg-[var(--brand-purple)]/5 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    "aria-hidden": "true",
                                                    className: "text-[var(--brand-purple)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4 3.5v17c0 .6.7.9 1.2.6l10.4-8.5L5.2 2.9C4.7 2.6 4 2.9 4 3.5z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M16.6 12.6l2.7-2.2c.5-.4.5-1.1 0-1.5l-2.7-2.2-3.1 2.9 3.1 3z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M15.6 13.5L5.2 21.1c.4.3 1 .3 1.4 0l9-6.7z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 7
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M15.6 10.5l-9-6.7c-.4-.3-1-.3-1.4 0l10.4 7.6z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 7
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 5
                                                }, this),
                                                "Google Play"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 550,
                                            columnNumber: 3
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 407,
                columnNumber: 7
            }, this),
            isStoreModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-2xl bg-white p-6 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-extrabold text-[var(--brand-purple)]",
                                    children: "Get the Dritchwear App"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 579,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsStoreModalOpen(false),
                                    className: "text-black/50 hover:text-black text-xl",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 578,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-black/70",
                            children: "Choose your platform to start shopping."
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 590,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://example.com/appstore",
                                    className: "inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--brand-purple)] px-6 py-3 font-semibold !text-white transition hover:bg-black hover:!text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16.365 1.43c0 1.14-.42 2.22-1.22 3.1-.82.9-2.17 1.6-3.29 1.5-.14-1.1.43-2.27 1.22-3.07.86-.88 2.32-1.55 3.29-1.53zM20.52 17.12c-.55 1.25-.8 1.8-1.5 2.9-.98 1.55-2.37 3.47-4.09 3.49-1.53.02-1.92-.99-3.99-.98-2.07.01-2.5 1-4.03.98-1.72-.02-3.03-1.77-4.01-3.32-2.24-3.54-2.47-7.69-1.09-9.82.98-1.52 2.52-2.41 3.95-2.41 1.56 0 2.54 1.01 3.83 1.01 1.25 0 2.02-1.02 3.82-1.02 1.27 0 2.62.69 3.6 1.88-3.17 1.74-2.66 6.26.71 7.31z"
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 612,
                                                columnNumber: 13
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 605,
                                            columnNumber: 11
                                        }, this),
                                        "App Store"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 597,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://play.google.com/store/apps/details?id=com.dritchwear.app",
                                    className: "inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--brand-purple)] px-6 py-3 font-semibold text-[var(--brand-purple)] hover:bg-[var(--brand-purple)]/5 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 3.5v17c0 .6.7.9 1.2.6l10.4-8.5L5.2 2.9C4.7 2.6 4 2.9 4 3.5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16.6 12.6l2.7-2.2c.5-.4.5-1.1 0-1.5l-2.7-2.2-3.1 2.9 3.1 3z"
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M15.6 13.5L5.2 21.1c.4.3 1 .3 1.4 0l9-6.7z"
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M15.6 10.5l-9-6.7c-.4-.3-1-.3-1.4 0l10.4 7.6z"
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 627,
                                            columnNumber: 11
                                        }, this),
                                        "Google Play"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 618,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 595,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 576,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 575,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dritchwear-web-1/app/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=dritchwear-web-1_3925f995._.js.map