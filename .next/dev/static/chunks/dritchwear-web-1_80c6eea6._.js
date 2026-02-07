(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dritchwear-web-1/components/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a21067a79944ee498cd154247807514c2a6e94bb5ffcd2b4eb0c64c9effdf2d7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a21067a79944ee498cd154247807514c2a6e94bb5ffcd2b4eb0c64c9effdf2d7";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rounded-2xl border border-black/10 bg-white shadow-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/Card.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dritchwear-web-1/components/AnnouncementModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnnouncementModal",
    ()=>AnnouncementModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/Card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AnnouncementModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "9ff4e3d1e41c41db9698a1751c44f7c9b005db174afcd44f59007b12d9b82f41") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9ff4e3d1e41c41db9698a1751c44f7c9b005db174afcd44f59007b12d9b82f41";
    }
    const { id, title, message, subtitle, highlight, bullets: t1, ctaLabel: t2, ctaHref: t3 } = t0;
    let t4;
    if ($[1] !== t1) {
        t4 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    const bullets = t4;
    const ctaLabel = t2 === undefined ? "Start your order now!" : t2;
    const ctaHref = t3 === undefined ? "/shop" : t3;
    const storageKey = `dritchwear_announcement_dismissed_${id}`;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t5;
    let t6;
    if ($[3] !== storageKey) {
        t5 = ({
            "AnnouncementModal[useEffect()]": ()=>{
                const dismissed = ("TURBOPACK compile-time value", "object") !== "undefined" && localStorage.getItem(storageKey);
                if (!dismissed) {
                    setOpen(true);
                }
            }
        })["AnnouncementModal[useEffect()]"];
        t6 = [
            storageKey
        ];
        $[3] = storageKey;
        $[4] = t5;
        $[5] = t6;
    } else {
        t5 = $[4];
        t6 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[6] !== storageKey) {
        t7 = ({
            "AnnouncementModal[close]": ()=>{
                localStorage.setItem(storageKey, "1");
                setOpen(false);
            }
        })["AnnouncementModal[close]"];
        $[6] = storageKey;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const close = t7;
    if (!open) {
        return null;
    }
    let t8;
    if ($[8] !== close) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "aria-label": "Close",
            className: "absolute right-4 top-4 rounded-lg p-2 hover:bg-black/[0.05]",
            onClick: close,
            children: "✕"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[8] = close;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-center text-xl md:text-2xl font-extrabold text-[var(--purple)]",
            children: [
                "🎉 ",
                title
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[10] = title;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== subtitle) {
        t10 = subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-center text-sm text-black/70",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 106,
            columnNumber: 23
        }, this);
        $[12] = subtitle;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== highlight) {
        t11 = highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-center text-lg font-extrabold text-black",
            children: highlight
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 114,
            columnNumber: 24
        }, this);
        $[14] = highlight;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== bullets) {
        t12 = bullets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 space-y-3",
            children: bullets.map(_AnnouncementModalBulletsMap)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 122,
            columnNumber: 33
        }, this);
        $[16] = bullets;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== message) {
        t13 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-5 text-center text-sm text-black/75",
            children: message
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 130,
            columnNumber: 22
        }, this);
        $[18] = message;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== close || $[21] !== ctaHref || $[22] !== ctaLabel) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: ctaHref,
            onClick: close,
            className: "btn btn-purple w-full sm:w-auto",
            children: [
                "👉 ",
                ctaLabel
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[20] = close;
        $[21] = ctaHref;
        $[22] = ctaLabel;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== close) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "btn w-full sm:w-auto border border-black/10",
            onClick: close,
            children: "Close"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[24] = close;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== t14 || $[27] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-7 flex flex-col sm:flex-row gap-3 justify-center",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t15;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== t10 || $[30] !== t11 || $[31] !== t12 || $[32] !== t13 || $[33] !== t16 || $[34] !== t8 || $[35] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "relative w-full max-w-xl rounded-2xl p-6 md:p-8",
                children: [
                    t8,
                    t9,
                    t10,
                    t11,
                    t12,
                    t13,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                lineNumber: 165,
                columnNumber: 109
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[29] = t10;
        $[30] = t11;
        $[31] = t12;
        $[32] = t13;
        $[33] = t16;
        $[34] = t8;
        $[35] = t9;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    return t17;
}
_s(AnnouncementModal, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c = AnnouncementModal;
function _AnnouncementModalBulletsMap(item, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-green-600",
                children: "✅"
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                lineNumber: 180,
                columnNumber: 60
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-black/80",
                children: item
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                lineNumber: 180,
                columnNumber: 101
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
        lineNumber: 180,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AnnouncementModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManualGoogleReviews",
    ()=>ManualGoogleReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function Stars(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "00cb126e19e416fc13c13db36ae6bea5f66646af3d643da4e7f9d0d7d53c0285") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "00cb126e19e416fc13c13db36ae6bea5f66646af3d643da4e7f9d0d7d53c0285";
    }
    const { rating } = t0;
    const t1 = `${rating} out of 5 stars`;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = Array.from({
            length: 5
        });
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== rating) {
        t3 = t2.map({
            "Stars[(anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: i < rating ? "text-[#FDB813]" : "text-black/15",
                    children: "★"
                }, i, false, {
                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                    lineNumber: 35,
                    columnNumber: 41
                }, this)
        }["Stars[(anonymous)()]"]);
        $[2] = rating;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t1 || $[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            "aria-label": t1,
            children: t3
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
}
_c = Stars;
function GoogleMark() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "00cb126e19e416fc13c13db36ae6bea5f66646af3d643da4e7f9d0d7d53c0285") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "00cb126e19e416fc13c13db36ae6bea5f66646af3d643da4e7f9d0d7d53c0285";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-10 w-10 items-center justify-center rounded-full bg-white border border-black/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-extrabold text-black",
                children: "G"
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                lineNumber: 63,
                columnNumber: 115
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = GoogleMark;
function ManualGoogleReviews() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "00cb126e19e416fc13c13db36ae6bea5f66646af3d643da4e7f9d0d7d53c0285") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "00cb126e19e416fc13c13db36ae6bea5f66646af3d643da4e7f9d0d7d53c0285";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        const reviews = [
            {
                name: "RAJI OLATUNJI",
                monthsAgo: 1,
                rating: 5,
                text: "I ordered for Joggers for my family online, also ordered for two sweatshirts. It was delivered the next day. To my surprise the quality was top-notch."
            },
            {
                name: "Eunice Toluwalope",
                monthsAgo: 3,
                rating: 5,
                text: "I give you 5 stars for making and delivering quality wear to me. I love my hoodie and the material is screaming quality. Thanks so much!"
            },
            {
                name: "Okafor Esther",
                monthsAgo: 5,
                rating: 5,
                text: "Thank you so much for the branding of Testers connect swags and delivery to all participants. You really made the process seamless and stress-free."
            }
        ];
        const avg = (reviews.reduce(_ManualGoogleReviewsReviewsReduce, 0) / reviews.length).toFixed(1);
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-6xl px-6 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-5xl font-extrabold tracking-tight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--brand-purple)]",
                                    children: "What Our Customers"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                    lineNumber: 97,
                                    columnNumber: 156
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#FDB813]",
                                    children: "Say"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                    lineNumber: 97,
                                    columnNumber: 231
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                            lineNumber: 97,
                            columnNumber: 89
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-base md:text-lg text-black/60",
                            children: "See what people are saying about Dritchwear on Google."
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                            lineNumber: 97,
                            columnNumber: 279
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                    lineNumber: 97,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 rounded-2xl border border-black/10 bg-black/[0.03] p-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleMark, {}, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                    lineNumber: 97,
                                    columnNumber: 584
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-lg text-black",
                                            children: [
                                                "Google ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold",
                                                    children: "Reviews"
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 654
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                            lineNumber: 97,
                                            columnNumber: 603
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-extrabold text-black",
                                                    children: avg
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 751
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stars, {
                                                    rating: Math.round(Number(avg))
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 816
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-black/50",
                                                    children: [
                                                        "(",
                                                        reviews.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 858
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                            lineNumber: 97,
                                            columnNumber: 705
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                    lineNumber: 97,
                                    columnNumber: 598
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                            lineNumber: 97,
                            columnNumber: 543
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://g.page/r/CQgjZSZ1AKtVEBI/review",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "btn btn-purple rounded-full px-6 py-3",
                            children: "Review us on Google"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                            lineNumber: 97,
                            columnNumber: 941
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                    lineNumber: 97,
                    columnNumber: 398
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid gap-6 md:grid-cols-3",
                    children: reviews.map(_ManualGoogleReviewsReviewsMap)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                    lineNumber: 97,
                    columnNumber: 1103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c2 = ManualGoogleReviews;
function _ManualGoogleReviewsReviewsMap(r_0, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-black/10 bg-white p-6 shadow-[var(--shadow-sm)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-12 overflow-hidden rounded-full border border-black/10 bg-black/[0.03] grid place-items-center",
                        children: r_0.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: r_0.avatarUrl,
                            alt: r_0.name,
                            className: "h-full w-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                            lineNumber: 105,
                            columnNumber: 287
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-[var(--brand-purple)]",
                            children: r_0.name.slice(0, 1).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                            lineNumber: 105,
                            columnNumber: 371
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                        lineNumber: 105,
                        columnNumber: 151
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-extrabold text-black truncate",
                                        children: r_0.name
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                        lineNumber: 105,
                                        columnNumber: 565
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-black/40",
                                        children: [
                                            r_0.monthsAgo,
                                            " months ago"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                        lineNumber: 105,
                                        columnNumber: 629
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                lineNumber: 105,
                                columnNumber: 508
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stars, {
                                    rating: r_0.rating
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                    lineNumber: 105,
                                    columnNumber: 730
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                                lineNumber: 105,
                                columnNumber: 708
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                        lineNumber: 105,
                        columnNumber: 476
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                lineNumber: 105,
                columnNumber: 111
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm leading-6 text-black/75",
                children: r_0.text
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                lineNumber: 105,
                columnNumber: 777
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://www.google.com/maps/place/Dritchwear/@9.0338725,8.6707713,6z/data=!4m8!3m7!1s0xa807a2f609262b57:0x55ab007526652308!8m2!3d9.0338725!4d8.6707713!9m1!1b1!16s%2Fg%2F11xlz2zb64?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                rel: "noreferrer",
                className: "mt-4 inline-block text-sm font-semibold text-[#1A73E8] hover:underline",
                children: "Read more"
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
                lineNumber: 105,
                columnNumber: 843
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
function _ManualGoogleReviewsReviewsReduce(sum, r) {
    return sum + r.rating;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Stars");
__turbopack_context__.k.register(_c1, "GoogleMark");
__turbopack_context__.k.register(_c2, "ManualGoogleReviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dritchwear-web-1/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/dritchwear-web-1/app/page.tsx'\n\nExpected '</', got 'jsx text'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/dritchwear-web-1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
]);

//# sourceMappingURL=dritchwear-web-1_80c6eea6._.js.map