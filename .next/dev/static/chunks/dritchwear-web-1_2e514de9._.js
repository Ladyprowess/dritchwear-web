(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dritchwear-web-1/lib/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featuredProducts",
    ()=>featuredProducts
]);
const featuredProducts = [
    {
        id: "1",
        name: "Introvert Zip Hoodie",
        priceNote: "From ₦28,000",
        category: "Hoodies",
        short: "Heavyweight feel. Clean fit.",
        image: "https://github.com/Ladyprowess/store-image/blob/main/images/introvert-zip-hoodie-1.png?raw=true"
    },
    {
        id: "2",
        name: "Plain Polo",
        priceNote: "From ₦…",
        category: "Corporate",
        short: "Premium stitch + clean branding.",
        image: "https://github.com/Ladyprowess/store-image/blob/main/images/polo-1.jpeg?raw=true"
    },
    {
        id: "3",
        name: "Plain T-shirts",
        priceNote: "From ₦…",
        category: "Hoodies",
        short: "Relaxed fit. Built for daily wear.",
        image: "https://github.com/Ladyprowess/store-image/blob/main/images/tshirt-3.jpeg?raw=true"
    },
    {
        id: "4",
        name: "Jogger Pants",
        priceNote: "From ₦…",
        category: "Bottoms",
        short: "Structured, soft, and durable.",
        image: "https://github.com/Ladyprowess/store-image/blob/main/images/jogger-pants-1.jpeg?raw=true"
    },
    {
        id: "5",
        name: "Sleeveless Sweatshirt",
        priceNote: "Bulk pricing",
        category: "Bulk",
        short: "Fast turnaround for teams/events.",
        image: "https://github.com/Ladyprowess/store-image/blob/main/images/Sleeveless%20Sweatshirt-3.PNG?raw=true"
    },
    {
        id: "6",
        name: "Tote Bag",
        priceNote: "From ₦…",
        category: "Merch",
        short: "Clean print. Strong fabric.",
        image: "https://github.com/Ladyprowess/store-image/blob/main/images/tote-bag-3.png?raw=true"
    },
    {
        id: "7",
        name: "Caps",
        priceNote: "From ₦…",
        category: "Merch",
        short: "Minimal embroidery options.",
        image: "/images/products/cap.jpg"
    },
    {
        id: "8",
        name: "Branded Water Bottle",
        priceNote: "From ₦…",
        category: "Merch",
        short: "Premium look for gifting.",
        image: "/images/products/water-bottle.jpg"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dritchwear-web-1/app/shop/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/lib/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const APP_STORE_URL = "https://example.com/appstore";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.dritchwear.app";
const WHATSAPP_URL = "https://wa.me/2349110163722";
/* ✅ Correct icons */ function AppleIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "1d5fbd6bb8d1566d9bc0a4a4fb9277c57960c73ff2d41bf97cb031c2dbf258e4") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1d5fbd6bb8d1566d9bc0a4a4fb9277c57960c73ff2d41bf97cb031c2dbf258e4";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            className: "shrink-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "currentColor",
                    d: "M16.2 2.6c-1 .1-2.1.7-2.8 1.6-.7.8-1.2 2-1 3.1 1.1.1 2.2-.6 2.9-1.4.7-.9 1.2-2 1-3.3z"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 23,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "currentColor",
                    d: "M20.6 17.2c-.4.9-.9 1.8-1.6 2.7-1 .9-1.9 1.3-2.5 1.3-.7 0-1.5-.3-2.5-.7-1-.4-1.7-.7-2.4-.7-.7 0-1.5.3-2.5.7-1 .4-1.8.7-2.5.7-.7 0-1.5-.4-2.5-1.3-1.2-1.1-2.2-2.8-2.9-4.9-.8-2.4-.9-4.6-.2-6.4.6-1.5 1.6-2.3 3-2.4.8 0 1.7.3 2.6.7.9.4 1.5.7 2 .7.4 0 1.1-.3 2.1-.7 1-.4 1.9-.7 2.7-.6 2 .2 3.4 1 4.2 2.4-1.8 1.1-2.7 2.7-2.6 4.7.1 1.6.8 3 2.1 3.9z"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 23,
                    columnNumber: 216
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = AppleIcon;
/* ✅ Correct Google Play icon (triangle) */ function GooglePlayIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "1d5fbd6bb8d1566d9bc0a4a4fb9277c57960c73ff2d41bf97cb031c2dbf258e4") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1d5fbd6bb8d1566d9bc0a4a4fb9277c57960c73ff2d41bf97cb031c2dbf258e4";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            className: "shrink-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "currentColor",
                    d: "M3.5 2.6v18.8c0 .5.6.9 1.1.6l10.6-9.4L4.6 2c-.5-.3-1.1.1-1.1.6z"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 42,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "currentColor",
                    d: "M16.7 12.6l2.7-2.4c.6-.5.5-1.4-.2-1.8L7.6 2.1l9.1 10.5z"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 42,
                    columnNumber: 194
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "currentColor",
                    d: "M16.7 11.4L7.6 21.9l11.6-6.3c.7-.4.8-1.3.2-1.8l-2.7-2.4z"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 42,
                    columnNumber: 282
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = GooglePlayIcon;
function WhatsAppIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "1d5fbd6bb8d1566d9bc0a4a4fb9277c57960c73ff2d41bf97cb031c2dbf258e4") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1d5fbd6bb8d1566d9bc0a4a4fb9277c57960c73ff2d41bf97cb031c2dbf258e4";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            className: "shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.74.46 3.42 1.34 4.9L2 22l5.3-1.39c1.42.77 3.03 1.18 4.74 1.18h.01c5.48 0 9.94-4.46 9.94-9.94C21.99 6.46 17.53 2 12.04 2zm5.8 14.45c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.12-1.84-.12-.43-.14-.98-.32-1.68-.62-2.95-1.27-4.87-4.19-5.02-4.38-.14-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.02-2.46.27-.3.6-.38.8-.38h.58c.18 0 .42-.07.66.5.24.57.82 2 .9 2.14.08.14.13.32.02.51-.11.19-.17.32-.33.5-.16.19-.35.41-.49.55-.16.16-.33.34-.14.65.19.3.86 1.42 1.86 2.3 1.28 1.14 2.36 1.49 2.68 1.66.32.16.5.14.68-.08.19-.22.78-.9.99-1.22.21-.32.42-.27.7-.16.29.11 1.82.86 2.13 1.02.32.16.53.24.61.38.08.14.08.8-.16 1.48z"
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                lineNumber: 59,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c2 = WhatsAppIcon;
function ShopPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "1d5fbd6bb8d1566d9bc0a4a4fb9277c57960c73ff2d41bf97cb031c2dbf258e4") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1d5fbd6bb8d1566d9bc0a4a4fb9277c57960c73ff2d41bf97cb031c2dbf258e4";
    }
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [storeModal, setStoreModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [productModal, setProductModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== search) {
        t0 = __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featuredProducts"].filter({
            "ShopPage[featuredProducts.filter()]": (p)=>p.name?.toLowerCase().includes(search.toLowerCase())
        }["ShopPage[featuredProducts.filter()]"]).slice(0, 6);
        $[1] = search;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const products = t0;
    let t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl md:text-5xl font-extrabold tracking-tight text-black",
            children: [
                "Shop",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "var(--brand-yellow)"
                    },
                    children: "Our Collection"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 91,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "max-w-2xl text-base md:text-lg text-black/60",
            children: "At Dritchwear, we create premium streetwear and branded items that let you express your identity."
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ShopPage[<input>.onChange]": (e)=>setSearch(e.target.value)
        })["ShopPage[<input>.onChange]"];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== search) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex flex-col items-center text-center gap-4",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 w-full max-w-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search products...",
                        value: search,
                        onChange: t3,
                        className: "w-full rounded-xl border border-black/15 px-4 py-3 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                        lineNumber: 112,
                        columnNumber: 123
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 112,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[6] = search;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== products) {
        let t6;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = ({
                "ShopPage[products.map()]": (product, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ShopPage[products.map() > <button>.onClick]": ()=>setProductModal(product)
                        }["ShopPage[products.map() > <button>.onClick]"],
                        className: "text-left rounded-3xl border border-black/10 bg-white overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: product.image ?? "/images/placeholder-product.png",
                                alt: product.name,
                                className: "h-48 w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                                lineNumber: 125,
                                columnNumber: 141
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-[var(--brand-purple)]",
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 282
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-black/60",
                                        children: "Tap to order"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 354
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                                lineNumber: 125,
                                columnNumber: 261
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                        lineNumber: 123,
                        columnNumber: 55
                    }, this)
            })["ShopPage[products.map()]"];
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        t5 = products.map(t6);
        $[8] = products;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
            children: t5
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "ShopPage[<button>.onClick]": ()=>setStoreModal(true)
        })["ShopPage[<button>.onClick]"];
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-12 flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t7,
                className: "rounded-2xl px-8 py-4 font-semibold",
                style: {
                    backgroundColor: "#5A2D82",
                    color: "#FFFFFF"
                },
                children: "View all products"
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                lineNumber: 156,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== productModal) {
        t9 = productModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
            onClose: {
                "ShopPage[<Modal>.onClose]": ()=>setProductModal(null)
            }["ShopPage[<Modal>.onClose]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-extrabold text-[var(--brand-purple)]",
                    children: "Order this product"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 168,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: APP_STORE_URL,
                            className: "rounded-xl px-6 py-4 text-center font-semibold inline-flex items-center justify-center gap-2",
                            style: {
                                backgroundColor: "#5A2D82",
                                color: "#FFFFFF"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppleIcon, {}, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 12
                                }, this),
                                "Open on App Store"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                            lineNumber: 168,
                            columnNumber: 159
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: PLAY_STORE_URL,
                            className: "rounded-xl px-6 py-4 text-center font-semibold inline-flex items-center justify-center gap-2",
                            style: {
                                backgroundColor: "#FDB813",
                                color: "#FFFFFF"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GooglePlayIcon, {}, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 12
                                }, this),
                                "Open on Google Play"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                            lineNumber: 171,
                            columnNumber: 46
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: WHATSAPP_URL,
                            className: "rounded-xl px-6 py-4 text-center font-semibold inline-flex items-center justify-center gap-2",
                            style: {
                                backgroundColor: "#FFFFFF",
                                color: "#5A2D82",
                                border: "1px solid rgba(0,0,0,0.15)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {}, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 12
                                }, this),
                                "Contact us on WhatsApp"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                            lineNumber: 174,
                            columnNumber: 53
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 168,
                    columnNumber: 126
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 166,
            columnNumber: 26
        }, this);
        $[15] = productModal;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== storeModal) {
        t10 = storeModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
            onClose: {
                "ShopPage[<Modal>.onClose]": ()=>setStoreModal(false)
            }["ShopPage[<Modal>.onClose]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-extrabold text-[var(--brand-purple)]",
                    children: "Full catalogue is in the app"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 188,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: APP_STORE_URL,
                            className: "rounded-xl px-6 py-4 text-center font-semibold inline-flex items-center justify-center gap-2",
                            style: {
                                backgroundColor: "#5A2D82",
                                color: "#FFFFFF"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppleIcon, {}, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 12
                                }, this),
                                "Download on App Store"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                            lineNumber: 188,
                            columnNumber: 169
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: PLAY_STORE_URL,
                            className: "rounded-xl px-6 py-4 text-center font-semibold inline-flex items-center justify-center gap-2",
                            style: {
                                backgroundColor: "#FDB813",
                                color: "#FFFFFF"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GooglePlayIcon, {}, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 12
                                }, this),
                                "Get it on Google Play"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                            lineNumber: 191,
                            columnNumber: 50
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
                    lineNumber: 188,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 186,
            columnNumber: 25
        }, this);
        $[17] = storeModal;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t4 || $[21] !== t6 || $[22] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-10",
            children: [
                t4,
                t6,
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t4;
        $[21] = t6;
        $[22] = t9;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    return t11;
}
_s(ShopPage, "IDNq3pIbFYD703mjz821eQFXe70=");
_c3 = ShopPage;
/* SIMPLE MODAL */ function Modal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "1d5fbd6bb8d1566d9bc0a4a4fb9277c57960c73ff2d41bf97cb031c2dbf258e4") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1d5fbd6bb8d1566d9bc0a4a4fb9277c57960c73ff2d41bf97cb031c2dbf258e4";
    }
    const { children, onClose } = t0;
    let t1;
    if ($[1] !== onClose) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "absolute inset-0 bg-black/60",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 229,
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
            color: "#5A2D82"
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
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 246,
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
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 254,
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
            fileName: "[project]/dritchwear-web-1/app/shop/page.tsx",
            lineNumber: 263,
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
_c4 = Modal;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "AppleIcon");
__turbopack_context__.k.register(_c1, "GooglePlayIcon");
__turbopack_context__.k.register(_c2, "WhatsAppIcon");
__turbopack_context__.k.register(_c3, "ShopPage");
__turbopack_context__.k.register(_c4, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dritchwear-web-1_2e514de9._.js.map