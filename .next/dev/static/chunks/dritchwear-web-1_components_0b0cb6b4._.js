(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dritchwear-web-1/components/MobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenu",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const WHATSAPP_URL = "https://wa.me/2349110163722?text=" + encodeURIComponent("Hi Dritchwear! I want to place an order. Please share how to proceed.");
function MobileMenu() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "10f070d79d84118f45096c78cfd496553da40d25f40e8849572a9f9a55e59bf7") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "10f070d79d84118f45096c78cfd496553da40d25f40e8849572a9f9a55e59bf7";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [comingSoonOpen, setComingSoonOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "MobileMenu[handleAppStoreClick]": (e)=>{
                e.preventDefault();
                setOpen(false);
                setComingSoonOpen(true);
            }
        })["MobileMenu[handleAppStoreClick]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleAppStoreClick = t0;
    let t1;
    let t2;
    if ($[2] !== open) {
        t1 = ({
            "MobileMenu[useEffect()]": ()=>{
                if (!open) {
                    return;
                }
                const scrollY = window.scrollY;
                document.body.style.position = "fixed";
                document.body.style.top = `-${scrollY}px`;
                document.body.style.left = "0";
                document.body.style.right = "0";
                document.body.style.width = "100%";
                document.body.style.overflow = "hidden";
                return ()=>{
                    document.body.style.position = "";
                    document.body.style.top = "";
                    document.body.style.left = "";
                    document.body.style.right = "";
                    document.body.style.width = "";
                    document.body.style.overflow = "";
                    window.scrollTo(0, scrollY);
                };
            }
        })["MobileMenu[useEffect()]"];
        t2 = [
            open
        ];
        $[2] = open;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "MobileMenu[useEffect()]": ()=>{
                const onKeyDown = function onKeyDown(e_0) {
                    if (e_0.key === "Escape") {
                        setOpen(false);
                        setComingSoonOpen(false);
                    }
                };
                document.addEventListener("keydown", onKeyDown);
                return ()=>document.removeEventListener("keydown", onKeyDown);
            }
        })["MobileMenu[useEffect()]"];
        t4 = [];
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "MobileMenu[<button>.onClick]": ()=>setOpen(true)
        })["MobileMenu[<button>.onClick]"];
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t5,
            className: "inline-flex items-center justify-center rounded-xl border border-black/10 bg-white p-2 hover:bg-black/[0.03] transition",
            "aria-label": "Open menu",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 7H20",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                        lineNumber: 100,
                        columnNumber: 246
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 12H20",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                        lineNumber: 100,
                        columnNumber: 326
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 17H20",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                        lineNumber: 100,
                        columnNumber: 407
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                lineNumber: 100,
                columnNumber: 186
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== open) {
        t7 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "MobileMenu[<button>.onClick]": ()=>setOpen(false)
                    }["MobileMenu[<button>.onClick]"],
                    className: "absolute inset-0 bg-black/50",
                    "aria-label": "Close menu overlay"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                    lineNumber: 107,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl border-l border-black/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-16 px-5 flex items-center justify-between border-b border-black/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-extrabold tracking-tight",
                                    children: "Menu"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                    lineNumber: 109,
                                    columnNumber: 312
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "MobileMenu[<button>.onClick]": ()=>setOpen(false)
                                    }["MobileMenu[<button>.onClick]"],
                                    className: "rounded-lg p-2 hover:bg-black/[0.04] transition",
                                    "aria-label": "Close menu",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                    lineNumber: 109,
                                    columnNumber: 373
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                            lineNumber: 109,
                            columnNumber: 226
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-1 text-base font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/shop",
                                            onClick: {
                                                "MobileMenu[<Link>.onClick]": ()=>setOpen(false)
                                            }["MobileMenu[<Link>.onClick]"],
                                            className: "rounded-xl px-3 py-3 hover:bg-black/[0.03] transition",
                                            children: "Shop"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                            lineNumber: 111,
                                            columnNumber: 225
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about",
                                            onClick: {
                                                "MobileMenu[<Link>.onClick]": ()=>setOpen(false)
                                            }["MobileMenu[<Link>.onClick]"],
                                            className: "rounded-xl px-3 py-3 hover:bg-black/[0.03] transition",
                                            children: "About"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                            lineNumber: 113,
                                            columnNumber: 123
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            onClick: {
                                                "MobileMenu[<Link>.onClick]": ()=>setOpen(false)
                                            }["MobileMenu[<Link>.onClick]"],
                                            className: "rounded-xl px-3 py-3 hover:bg-black/[0.03] transition",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                            lineNumber: 115,
                                            columnNumber: 124
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                    lineNumber: 111,
                                    columnNumber: 173
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-6 h-px bg-black/10"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                    lineNumber: 117,
                                    columnNumber: 132
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold tracking-[0.18em] uppercase text-black/50",
                                    children: "Support"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                    lineNumber: 117,
                                    columnNumber: 173
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/size-guide",
                                            onClick: {
                                                "MobileMenu[<Link>.onClick]": ()=>setOpen(false)
                                            }["MobileMenu[<Link>.onClick]"],
                                            className: "rounded-xl px-3 py-3 font-semibold text-[var(--purple)] bg-[var(--purple)]/10 hover:bg-[var(--purple)]/15 transition",
                                            children: "Size Guide"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                            lineNumber: 117,
                                            columnNumber: 296
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/returns",
                                            onClick: {
                                                "MobileMenu[<Link>.onClick]": ()=>setOpen(false)
                                            }["MobileMenu[<Link>.onClick]"],
                                            className: "rounded-xl px-3 py-3 font-semibold hover:bg-black/[0.03] transition",
                                            children: "Returns & Exchanges"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                            lineNumber: 119,
                                            columnNumber: 192
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/terms-of-service",
                                            onClick: {
                                                "MobileMenu[<Link>.onClick]": ()=>setOpen(false)
                                            }["MobileMenu[<Link>.onClick]"],
                                            className: "rounded-xl px-3 py-3 font-semibold hover:bg-black/[0.03] transition",
                                            children: "Terms & Conditions"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                            lineNumber: 121,
                                            columnNumber: 156
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/privacy-policy",
                                            onClick: {
                                                "MobileMenu[<Link>.onClick]": ()=>setOpen(false)
                                            }["MobileMenu[<Link>.onClick]"],
                                            className: "rounded-xl px-3 py-3 font-semibold hover:bg-black/[0.03] transition",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                            lineNumber: 123,
                                            columnNumber: 155
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                    lineNumber: 117,
                                    columnNumber: 263
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://play.google.com/store/apps/details?id=com.dritchwear.app",
                                            className: "btn btn-black w-full",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Google Play"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                            lineNumber: 125,
                                            columnNumber: 186
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://example.com/app-store",
                                            onClick: handleAppStoreClick,
                                            className: "btn btn-black w-full",
                                            children: "App Store"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                            lineNumber: 125,
                                            columnNumber: 342
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                    lineNumber: 125,
                                    columnNumber: 153
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-xs text-black/50",
                                    children: "Full catalogue is available in the mobile app."
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                    lineNumber: 125,
                                    columnNumber: 464
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                            lineNumber: 111,
                            columnNumber: 146
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                    lineNumber: 109,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
            lineNumber: 107,
            columnNumber: 18
        }, this);
        $[9] = open;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== comingSoonOpen) {
        t8 = comingSoonOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[110] flex items-center justify-center px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute inset-0 bg-black/60",
                    onClick: {
                        "MobileMenu[<button>.onClick]": ()=>setComingSoonOpen(false)
                    }["MobileMenu[<button>.onClick]"],
                    "aria-label": "Close coming soon overlay"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                    lineNumber: 133,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-md rounded-3xl bg-white p-6 shadow-xl border border-black/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "MobileMenu[<button>.onClick]": ()=>setComingSoonOpen(false)
                            }["MobileMenu[<button>.onClick]"],
                            className: "absolute right-4 top-4 text-sm font-bold",
                            style: {
                                color: "#5A2D82"
                            },
                            "aria-label": "Close",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                            lineNumber: 135,
                            columnNumber: 183
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-extrabold text-[var(--brand-purple)]",
                            children: "App Store; Coming Soon"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                            lineNumber: 139,
                            columnNumber: 41
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-black/70",
                            children: "The iOS app is launching soon. For now, you can place your order on WhatsApp."
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                            lineNumber: 139,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: WHATSAPP_URL,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "btn btn-purple w-full",
                                    children: "Order on WhatsApp"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                    lineNumber: 139,
                                    columnNumber: 290
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "MobileMenu[<button>.onClick]": ()=>setComingSoonOpen(false)
                                    }["MobileMenu[<button>.onClick]"],
                                    className: "rounded-xl border border-black/15 px-6 py-3 font-semibold text-black hover:bg-black/[0.03]",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                                    lineNumber: 139,
                                    columnNumber: 401
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                            lineNumber: 139,
                            columnNumber: 257
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
                    lineNumber: 135,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/components/MobileMenu.tsx",
            lineNumber: 133,
            columnNumber: 28
        }, this);
        $[11] = comingSoonOpen;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t7 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true);
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    return t9;
}
_s(MobileMenu, "+sP7N37v/eirLCsYSV/y3RsOTt4=");
_c = MobileMenu;
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dritchwear-web-1/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/lucide-react/dist/esm/icons/music-2.js [app-client] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Footer() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function handleSubscribe(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
            if (!res.ok) throw new Error();
            setSuccess(true);
            setEmail("");
        } catch  {
            setError("Something went wrong. Try again.");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[var(--black)] text-white mt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-extrabold tracking-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "DRITCH"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--brand-yellow)"
                                        },
                                        children: "WEAR"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm text-white/70 max-w-sm",
                                children: "Custom streetwear & branded merchandise; built for identity, visibility, and value."
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center gap-4 text-white/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/dritchwear",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "Instagram",
                                        className: "hover:text-[var(--brand-yellow)] transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 5
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 52,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.tiktok.com/@dritchwear",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "TikTok",
                                        className: "hover:text-[var(--brand-yellow)] transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 5
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://twitter.com/dritchwear",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "X (Twitter)",
                                        className: "hover:text-[var(--brand-yellow)] transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                            lineNumber: 61,
                                            columnNumber: 5
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 60,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/company/dritchwear",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "LinkedIn",
                                        className: "hover:text-[var(--brand-yellow)] transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                            lineNumber: 65,
                                            columnNumber: 5
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 64,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                lineNumber: 51,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-white",
                                children: "Support"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid gap-2 text-white/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "hover:text-[var(--brand-yellow)]",
                                        href: "/size-guide",
                                        children: "Size Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "hover:text-[var(--brand-yellow)]",
                                        href: "/returns",
                                        children: "Returns & Exchanges"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "hover:text-[var(--brand-yellow)]",
                                        href: "/terms-of-service",
                                        children: "Terms & Conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "hover:text-[var(--brand-yellow)]",
                                        href: "/privacy-policy",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-white",
                                children: "Stay in the loop"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-white/70",
                                children: "New drops, special offers, and updates; straight to your inbox."
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm",
                                style: {
                                    color: "var(--brand-yellow)"
                                },
                                children: "You’re subscribed 🎉"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                lineNumber: 97,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubscribe,
                                className: "mt-4 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        required: true,
                                        placeholder: "Enter your email",
                                        value: email,
                                        onChange: (e_0)=>setEmail(e_0.target.value),
                                        className: "w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[16px] md:text-sm text-black outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "rounded-xl px-4 py-3 font-semibold text-white",
                                        style: {
                                            backgroundColor: "var(--brand-purple)"
                                        },
                                        children: loading ? "Subscribing..." : "Subscribe"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-red-400",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                        lineNumber: 110,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                                lineNumber: 101,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 py-6 text-xs text-white/60",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Dritchwear. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dritchwear-web-1/components/Footer.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_s(Footer, "BphFA5RnpXlVprDLV2/aI8oXjN8=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dritchwear-web-1/components/NotificationBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationBar",
    ()=>NotificationBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function NotificationBar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "df19b3bd8b39ab09a49bd759d10c794ceceade7d7cbef0b93cd3c815e97a0a68") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df19b3bd8b39ab09a49bd759d10c794ceceade7d7cbef0b93cd3c815e97a0a68";
    }
    const { message } = t0;
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    if (!visible) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "NotificationBar[<button>.onClick]": ()=>setVisible(false)
            }["NotificationBar[<button>.onClick]"],
            "aria-label": "Close",
            className: "absolute right-4 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-[var(--brand-purple)]",
            children: "✕"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/NotificationBar.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== message) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 z-40 w-full border-b border-black/10 bg-[var(--brand-purple)]/5 backdrop-blur",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl px-4 py-3",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden pr-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-max animate-marquee gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm md:text-base font-semibold text-[var(--brand-purple)] whitespace-nowrap",
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/NotificationBar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 266
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm md:text-base font-semibold text-[var(--brand-purple)] whitespace-nowrap",
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/NotificationBar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 380
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/components/NotificationBar.tsx",
                            lineNumber: 31,
                            columnNumber: 215
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/components/NotificationBar.tsx",
                        lineNumber: 31,
                        columnNumber: 176
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/components/NotificationBar.tsx",
                lineNumber: 31,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/NotificationBar.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[2] = message;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(NotificationBar, "p/lRV+JGew4KJq1vCTMMXt6g6IM=");
_c = NotificationBar;
var _c;
__turbopack_context__.k.register(_c, "NotificationBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dritchwear-web-1/components/PurpleBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PurpleBackground",
    ()=>PurpleBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function PurpleBackground() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "bb31dee7eab2d09ace7d28f85c6a4c3f459adf06c5b213d0940c485bfa716c12") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb31dee7eab2d09ace7d28f85c6a4c3f459adf06c5b213d0940c485bfa716c12";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 overflow-hidden -z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--brand-purple)]/25 blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/PurpleBackground.tsx",
                    lineNumber: 12,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-[var(--brand-purple)]/15 blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/PurpleBackground.tsx",
                    lineNumber: 12,
                    columnNumber: 201
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/components/PurpleBackground.tsx",
            lineNumber: 12,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = PurpleBackground;
var _c;
__turbopack_context__.k.register(_c, "PurpleBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dritchwear-web-1/components/ConditionalBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConditionalBackground",
    ()=>ConditionalBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$PurpleBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/PurpleBackground.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ConditionalBackground() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "9b1aaf3e24b290a0836b93a862da8257a339e98e6c7f4dedd2e4ad9d6536b749") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b1aaf3e24b290a0836b93a862da8257a339e98e6c7f4dedd2e4ad9d6536b749";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (pathname === "/") {
        return null;
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$PurpleBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PurpleBackground"], {}, void 0, false, {
            fileName: "[project]/dritchwear-web-1/components/ConditionalBackground.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_s(ConditionalBackground, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ConditionalBackground;
var _c;
__turbopack_context__.k.register(_c, "ConditionalBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dritchwear-web-1_components_0b0cb6b4._.js.map