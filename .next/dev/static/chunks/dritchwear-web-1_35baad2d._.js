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
"[project]/dritchwear-web-1/app/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/Card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// app/about/page.tsx
"use client";
;
;
;
const APP_STORE_URL = "https://example.com/appstore";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.dritchwear.app";
function IconMedal() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2a7 7 0 100 14 7 7 0 000-14z",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 20,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 14l-1 8 5-3 5 3-1-8",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 20,
                    columnNumber: 172
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = IconMedal;
function IconLeaf() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 4c-7 0-14 4-14 12 0 2.5 1.2 4 3 4 8 0 12-7 11-16z",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 37,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 16c3-1 7-4 10-9",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 37,
                    columnNumber: 216
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = IconLeaf;
function IconUsers() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 11a4 4 0 10-8 0 4 4 0 008 0z",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 54,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 21c1.5-4 14.5-4 16 0",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 54,
                    columnNumber: 172
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 8a3 3 0 100 6",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 54,
                    columnNumber: 268
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c2 = IconUsers;
function AppleIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16.2 2.6c-1 .1-2.1.7-2.8 1.6-.7.8-1.2 2-1 3.1 1.1.1 2.2-.6 2.9-1.4.7-.9 1.2-2 1-3.3z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 71,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.6 17.2c-.4.9-.9 1.8-1.6 2.7-1 .9-1.9 1.3-2.5 1.3-.7 0-1.5-.3-2.5-.7-1-.4-1.7-.7-2.4-.7-.7 0-1.5.3-2.5.7-1 .4-1.8.7-2.5.7-.7 0-1.5-.4-2.5-1.3-1.2-1.1-2.2-2.8-2.9-4.9-.8-2.4-.9-4.6-.2-6.4.6-1.5 1.6-2.3 3-2.4.8 0 1.7.3 2.6.7.9.4 1.5.7 2 .7.4 0 1.1-.3 2.1-.7 1-.4 1.9-.7 2.7-.6 2 .2 3.4 1 4.2 2.4-1.8 1.1-2.7 2.7-2.6 4.7.1 1.6.8 3 2.1 3.9z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 71,
                    columnNumber: 207
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c3 = AppleIcon;
function PlayStoreIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 512 512",
            "aria-hidden": "true",
            fill: "currentColor",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M325.3 234.3L104.6 13.6c-6.3-6.3-16.6-1.8-16.6 7.1v470.6c0 8.9 10.3 13.4 16.6 7.1l220.7-220.7c4.4-4.4 4.4-11.6 0-16z"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 88,
                    columnNumber: 99
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M361.2 270.1l-40.6-40.6c-4.4-4.4-11.6-4.4-16 0l-40.6 40.6c-4.4 4.4-4.4 11.6 0 16l40.6 40.6c4.4 4.4 11.6 4.4 16 0l40.6-40.6c4.4-4.4 4.4-11.6 0-16z"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 88,
                    columnNumber: 228
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M412.1 256l-46.7-46.7c-4.4-4.4-11.6-4.4-16 0l-46.7 46.7c-4.4 4.4-4.4 11.6 0 16l46.7 46.7c4.4 4.4 11.6 4.4 16 0l46.7-46.7c4.4-4.4 4.4-11.6 0-16z"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 88,
                    columnNumber: 386
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c4 = PlayStoreIcon;
/* SIMPLE MODAL */ function Modal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27";
    }
    const { children, onClose } = t0;
    let t1;
    if ($[1] !== onClose) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "absolute inset-0 bg-black/60",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[1] = onClose;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            color: "var(--brand-purple)"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onClose) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute right-4 top-4 text-sm font-bold",
            style: t2,
            "aria-label": "Close",
            children: "✕"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[4] = onClose;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== children || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-md rounded-3xl bg-white p-6",
            children: [
                t3,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t1 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center px-4",
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_c5 = Modal;
function AboutPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f266606a932c15f2719e6cf8aea76f5ed62d914b59bf9318670f6f9968d27";
    }
    const [storeModal, setStoreModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl md:text-6xl font-extrabold tracking-tight text-black",
            children: [
                "About",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "var(--brand-yellow)"
                    },
                    children: "Dritchwear"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 166,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 max-w-2xl mx-auto text-base md:text-lg text-black/55 leading-relaxed",
            children: "We create premium streetwear and branded items that help you show up with confidence; for your personal style, your brand, or your next big event."
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 169,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AboutPage[<button>.onClick]": ()=>setStoreModal(true)
        })["AboutPage[<button>.onClick]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t2,
            className: "rounded-full px-8 py-4 font-semibold",
            style: {
                backgroundColor: "var(--brand-purple)",
                color: "#fff"
            },
            children: "Shop Our Collection"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 187,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-6 pt-10 pb-12 text-center",
                children: [
                    t0,
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-3",
                        children: [
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/contact",
                                className: "rounded-full px-8 py-4 font-semibold bg-white",
                                style: {
                                    border: "1px solid rgba(0,0,0,0.15)",
                                    color: "var(--brand-purple)"
                                },
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                lineNumber: 197,
                                columnNumber: 197
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                        lineNumber: 197,
                        columnNumber: 110
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                lineNumber: 197,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 197,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-extrabold tracking-tight text-black",
            children: "Our Story"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 207,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Dritchwear started with one simple idea:",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: "to help people wear their brand with pride."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 216,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 216,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "We saw how hard it was for individuals, event organisers, and business owners to get quality streetwear and branded items made the way they wanted. So, we decided to make it easy."
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 217,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "We began sewing t-shirts, hoodies, joggers, and more; custom-made and carefully crafted."
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 218,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
    } else {
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 grid gap-4 text-black/75",
                    children: [
                        t6,
                        t7,
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "We now also offer ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "gift items"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 99
                                }, this),
                                " like tote bags, mugs, flasks, and notebooks, perfect for branding, events, or personal use."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                            lineNumber: 229,
                            columnNumber: 78
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Today, Dritchwear is your go-to brand for quality, style, and custom wear."
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                            lineNumber: 229,
                            columnNumber: 244
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 229,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 229,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full py-14",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-start",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-0 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/about-image.png",
                            alt: "Dritchwear custom streetwear",
                            className: "h-[340px] w-full object-cover object-[50%_35%]"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                            lineNumber: 236,
                            columnNumber: 166
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                        lineNumber: 236,
                        columnNumber: 128
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                lineNumber: 236,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-extrabold tracking-tight text-black",
                    children: "Our Values"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 243,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-black/60 max-w-2xl mx-auto",
                    children: "These are the things that guide everything we do at Dritchwear:"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 243,
                    columnNumber: 133
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconMedal, {}, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                        lineNumber: 250,
                        columnNumber: 161
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 250,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mt-6 text-xl font-extrabold text-black",
                    children: "Top Quality"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 250,
                    columnNumber: 180
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-black/60",
                    children: "We use good fabrics and durable merch and pay attention to every detail, so each piece lasts long."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 250,
                    columnNumber: 251
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconLeaf, {}, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                        lineNumber: 257,
                        columnNumber: 161
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 257,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mt-6 text-xl font-extrabold text-black",
                    children: "Eco-friendly Fashion"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 257,
                    columnNumber: 179
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-black/60",
                    children: "We care about the planet. We use materials and methods that are better for the environment."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 257,
                    columnNumber: 259
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-6",
                children: [
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid gap-6 md:grid-cols-3",
                        children: [
                            t12,
                            t13,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {}, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 299
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 171
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-6 text-xl font-extrabold text-black",
                                        children: "Customer First"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 318
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm text-black/60",
                                        children: "We listen to our customers, take feedback seriously, and always try to do better."
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 392
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                lineNumber: 264,
                                columnNumber: 149
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                        lineNumber: 264,
                        columnNumber: 90
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                lineNumber: 264,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] !== storeModal) {
        t15 = storeModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
            onClose: {
                "AboutPage[<Modal>.onClose]": ()=>setStoreModal(false)
            }["AboutPage[<Modal>.onClose]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-semibold tracking-[0.18em] uppercase text-black/50",
                    children: "Full catalogue is in the app"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 273,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mt-2 text-2xl font-extrabold",
                    style: {
                        color: "var(--brand-purple)"
                    },
                    children: "Download the Dritchwear App"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 273,
                    columnNumber: 149
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-black/65",
                    children: "To view all products and place an order, use the mobile app."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 275,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: APP_STORE_URL,
                            className: "rounded-2xl px-6 py-4 font-semibold text-center inline-flex items-center justify-center gap-2",
                            style: {
                                backgroundColor: "var(--brand-purple)",
                                color: "#fff"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppleIcon, {}, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 101
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 12
                                }, this),
                                "Download on App Store"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                            lineNumber: 275,
                            columnNumber: 181
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: PLAY_STORE_URL,
                            className: "rounded-2xl px-6 py-4 font-semibold inline-flex items-center justify-center gap-2",
                            style: {
                                backgroundColor: "var(--brand-yellow)",
                                color: "#fff"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayStoreIcon, {}, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 101
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 12
                                }, this),
                                "Get it on Google Play"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                            lineNumber: 278,
                            columnNumber: 146
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
                    lineNumber: 275,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 271,
            columnNumber: 25
        }, this);
        $[16] = storeModal;
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    let t16;
    if ($[18] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: [
                t4,
                t10,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/about/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[18] = t15;
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    return t16;
}
_s(AboutPage, "r/BdwZzh7mFbPlcqMsSi4FZTSlU=");
_c6 = AboutPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "IconMedal");
__turbopack_context__.k.register(_c1, "IconLeaf");
__turbopack_context__.k.register(_c2, "IconUsers");
__turbopack_context__.k.register(_c3, "AppleIcon");
__turbopack_context__.k.register(_c4, "PlayStoreIcon");
__turbopack_context__.k.register(_c5, "Modal");
__turbopack_context__.k.register(_c6, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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

//# sourceMappingURL=dritchwear-web-1_35baad2d._.js.map