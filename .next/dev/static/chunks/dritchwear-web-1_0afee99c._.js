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
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/Card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnnouncementModal({ id, title, message, messageContent, subtitle, highlight, bullets = [], ctaLabel = "Start your order now!", ctaHref = "/shop", imageSrc, imageAlt, promoCode, promoCodeLabel = "Use promo code at checkout", onCtaClick, repeatEveryMs = 60 * 60 * 1000 }) {
    _s();
    const storageKey = `dritchwear_announcement_last_closed_${id}`;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnnouncementModal.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const lastClosedRaw = localStorage.getItem(storageKey);
            const lastClosed = lastClosedRaw ? Number(lastClosedRaw) : 0;
            const now = Date.now();
            const canShowAgain = !lastClosed || now - lastClosed >= repeatEveryMs;
            if (canShowAgain) setOpen(true);
        }
    }["AnnouncementModal.useEffect"], [
        storageKey,
        repeatEveryMs
    ]);
    const close = ()=>{
        localStorage.setItem(storageKey, String(Date.now())); // store time closed
        setOpen(false);
    };
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-2xl p-5 md:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "aria-label": "Close",
                    className: "absolute right-4 top-4 rounded-lg p-2 hover:bg-black/[0.05]",
                    onClick: close,
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "pr-10 text-center text-lg font-extrabold text-[var(--purple)] md:text-2xl",
                    children: [
                        "🎉 ",
                        title
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-center text-sm leading-5 text-black/70",
                    children: subtitle
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 76,
                    columnNumber: 22
                }, this),
                imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 md:mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageSrc,
                        alt: imageAlt ?? "Promo image",
                        className: "h-[150px] w-full rounded-2xl object-cover md:h-[200px]"
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 81,
                    columnNumber: 30
                }, this),
                highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-center text-base font-extrabold text-black md:text-lg",
                    children: highlight
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 87,
                    columnNumber: 23
                }, this),
                bullets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 space-y-3",
                    children: bullets.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-600",
                                    children: "✅"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-black/80",
                                    children: item
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                            lineNumber: 93,
                            columnNumber: 41
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 92,
                    columnNumber: 32
                }, this),
                messageContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 md:mt-5",
                    children: messageContent
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 100,
                    columnNumber: 27
                }, this) : message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-5 text-center text-sm text-black/75 whitespace-pre-line",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 100,
                    columnNumber: 92
                }, this) : null,
                promoCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 text-center md:mt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-black/70",
                            children: promoCodeLabel
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 inline-flex items-center justify-center rounded-2xl border-2 border-dashed border-[var(--gold)] bg-[rgba(253,184,19,0.10)] px-8 py-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl md:text-2xl font-extrabold tracking-wider text-[var(--gold)]",
                                children: promoCode
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 105,
                    columnNumber: 31
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 flex flex-col justify-center gap-3 sm:mt-7 sm:flex-row",
                    children: [
                        onCtaClick ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                close();
                                onCtaClick();
                            },
                            className: "btn btn-purple w-full sm:w-auto",
                            children: [
                                "👉 ",
                                ctaLabel
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                            lineNumber: 118,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: ctaHref,
                            onClick: close,
                            className: "btn btn-purple w-full sm:w-auto",
                            children: [
                                "👉 ",
                                ctaLabel
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn w-full sm:w-auto border border-black/10",
                            onClick: close,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dritchwear-web-1/components/AnnouncementModal.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
_s(AnnouncementModal, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c = AnnouncementModal;
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
"[project]/dritchwear-web-1/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$AnnouncementModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/AnnouncementModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$ManualGoogleReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dritchwear-web-1/components/ManualGoogleReviews.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const WHATSAPP_URL = "https://wa.me/2349110163722?text=" + encodeURIComponent("Hi Dritchwear! I want to place an order. Please share how to proceed.");
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.dritchwear.app";
function SoftIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "09fc93c90d58db06b9b20b2990f6a714f5862233d2701bfbd5bb0ff5d6ea3731") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09fc93c90d58db06b9b20b2990f6a714f5862233d2701bfbd5bb0ff5d6ea3731";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            className: "text-[var(--brand-purple)] opacity-60",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3l2.2 6.7L21 12l-6.8 2.3L12 21l-2.2-6.7L3 12l6.8-2.3L12 3z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 21,
                columnNumber: 139
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = SoftIcon;
function HomePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(55);
    if ($[0] !== "09fc93c90d58db06b9b20b2990f6a714f5862233d2701bfbd5bb0ff5d6ea3731") {
        for(let $i = 0; $i < 55; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09fc93c90d58db06b9b20b2990f6a714f5862233d2701bfbd5bb0ff5d6ea3731";
    }
    const [isStoreModalOpen, setIsStoreModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGooglePlayClick = _HomePageHandleGooglePlayClick;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-black",
            children: "Earn reward points when you:"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base",
                    children: "🛍️"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Place an order"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 88
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base",
                    children: "⭐"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 54,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Drop a review"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 54,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-2 space-y-1.5 text-sm text-black/75",
                    children: [
                        t1,
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base",
                                    children: "👥"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 122
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Refer a friend"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 159
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 61,
                            columnNumber: 82
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 61,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-black",
            children: "Use your points to pay for utility bills like:"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base",
                    children: "⚡"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 75,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Electricity bills"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 75,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base",
                    children: "📶"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 82,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Data & airtime"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 82,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1 space-y-4 rounded-2xl bg-black/[0.03] px-4 py-3 text-left md:space-y-5 md:px-5 md:py-4",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-black/10 pt-3 md:pt-4",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-2 space-y-1.5 text-sm text-black/75",
                            children: [
                                t5,
                                t6,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base",
                                            children: "📺"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 285
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Cable TV"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 322
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 245
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 89,
                            columnNumber: 182
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 89,
                    columnNumber: 123
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$AnnouncementModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnnouncementModal"], {
            id: "promo_earn_points",
            title: "Earn Points. Pay Bills. Get Rewards.",
            subtitle: "Get points for every activity you complete on the Dritchwear app.",
            imageSrc: "/promo/utilities.png",
            imageAlt: "Dritchwear rewards points utilities promo",
            messageContent: t7,
            ctaLabel: "Earn Points Now",
            onCtaClick: {
                "HomePage[<AnnouncementModal>.onCtaClick]": ()=>setIsStoreModalOpen(true)
            }["HomePage[<AnnouncementModal>.onCtaClick]"],
            repeatEveryMs: 86400000
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--soft-purple)] blur-3xl"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--brand-purple)]/20 blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 109,
                    columnNumber: 65
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[var(--yellow)]/10 blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 109,
                    columnNumber: 170
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold tracking-[0.18em] uppercase text-black/60",
            children: "Premium custom streetwear & branded merch"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Wear it."
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    let t14;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "mt-4 text-[42px] font-extrabold",
            children: [
                t12,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "#FDB813"
                    },
                    children: "Brand it."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 131,
                    columnNumber: 69
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 133,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Gift it."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 133,
                    columnNumber: 32
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-base md:text-lg text-black/65",
            children: "Dritchwear helps individuals, brands, and organisations turn clothing into identity, visibility, and value."
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[14] = t13;
        $[15] = t14;
    } else {
        t13 = $[14];
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-7 flex flex-wrap gap-3 justify-center lg:justify-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "HomePage[<button>.onClick]": ()=>setIsStoreModalOpen(true)
                    }["HomePage[<button>.onClick]"],
                    className: "btn btn-purple",
                    children: "Shop on the App"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 143,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/shop",
                    className: "rounded-xl border border-black/15 px-6 py-3 font-semibold text-black hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple)] focus:ring-offset-2",
                    children: "View Collection"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 145,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-xl mx-auto lg:mx-0 text-center lg:text-left",
            children: [
                t11,
                t13,
                t14,
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 flex items-center gap-3 text-sm text-black/60 justify-center lg:justify-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            className: "inline-block h-[2px] w-8 bg-[#FDB813]"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 152,
                            columnNumber: 199
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Custom · Bulk · Events · Merch"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 152,
                            columnNumber: 276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 152,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto max-w-6xl px-6 pt-16 pb-10 grid lg:grid-cols-2 gap-12 items-center",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/25 via-transparent to-transparent z-10"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 159,
                            columnNumber: 143
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/hero.png",
                            alt: "Dritchwear premium streetwear",
                            width: 800,
                            height: 520,
                            priority: true,
                            className: "rounded-3xl object-cover w-full h-[420px] md:h-[520px] border border-black/10"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 159,
                            columnNumber: 259
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-4 -left-4 h-16 w-16 rounded-2xl bg-[var(--brand-purple)]/10 border border-black/10"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 159,
                            columnNumber: 458
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-4 -right-4 h-16 w-16 rounded-2xl bg-[var(--yellow)]/20 border border-black/10"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 159,
                            columnNumber: 577
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 159,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--brand-purple)]",
            children: "Why Choose"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    let t20;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-extrabold tracking-tight",
            children: [
                t18,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[#FDB813]",
                    children: "Dritchwear"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 174,
                    columnNumber: 88
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-base md:text-lg text-black/60 max-w-2xl mx-auto",
            children: "We're committed to delivering exceptional quality and service in every aspect of your shopping experience."
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[20] = t19;
        $[21] = t20;
    } else {
        t19 = $[20];
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        className: "text-[var(--brand-purple)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 3l2.2 6.7L21 12l-6.8 2.3L12 21l-2.2-6.7L3 12l6.8-2.3L12 3z",
                            fill: "currentColor"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 184,
                            columnNumber: 272
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 184,
                        columnNumber: 173
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 184,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-bold text-lg",
                    children: "Top Quality"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 184,
                    columnNumber: 379
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-black/60 max-w-xs",
                    children: "We use good fabrics and pay attention to every detail in every item."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 184,
                    columnNumber: 429
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        className: "text-[var(--brand-purple)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 7h11v8H3V7zm11 2h4l3 3v3h-7V9z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 191,
                            columnNumber: 272
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 191,
                        columnNumber: 173
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 191,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-bold text-lg",
                    children: "Fast Shipping"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 191,
                    columnNumber: 391
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-black/60 max-w-xs",
                    children: "We send out orders quickly, so you get your clothes on time."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 191,
                    columnNumber: 443
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        className: "text-[var(--brand-purple)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z",
                            stroke: "currentColor",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 198,
                            columnNumber: 272
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 198,
                        columnNumber: 173
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 198,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-bold text-lg",
                    children: "Secure Shopping"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 198,
                    columnNumber: 381
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-black/60 max-w-xs",
                    children: "Your information is kept safe with strong security."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 198,
                    columnNumber: 435
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-6xl px-6 py-20 text-center",
            children: [
                t19,
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
                    children: [
                        t21,
                        t22,
                        t23,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        className: "text-[var(--brand-purple)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 12a8 8 0 0116 0v5a2 2 0 01-2 2h-2v-6h4M4 12v5a2 2 0 002 2h2v-6H4",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 424
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 325
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 219
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg",
                                    children: "24/7 Support"
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 576
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-black/60 max-w-xs",
                                    children: "Our team is always ready to help you, day or night."
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 627
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 205,
                            columnNumber: 163
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 205,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold tracking-[0.18em] uppercase text-white/60",
            children: "Built for modern streetwear"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            color: "#FDB813"
        };
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    let t28;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mt-4 text-4xl font-extrabold leading-tight",
            style: t26,
            children: [
                "Built for identity.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 229,
                    columnNumber: 101
                }, this),
                "Designed for visibility."
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-5 text-white/70 max-w-lg",
            children: "We don't just print clothes. We help you show up with confidence - whether it's your personal style, your brand, or your next big event."
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[28] = t27;
        $[29] = t28;
    } else {
        t27 = $[28];
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = ({
            "HomePage[<button>.onClick]": ()=>setIsStoreModalOpen(true)
        })["HomePage[<button>.onClick]"];
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    let t30;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-xl text-center lg:text-left lg:mx-0",
            children: [
                t25,
                t27,
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex flex-wrap gap-3 justify-center lg:justify-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: t29,
                            className: "rounded-xl bg-white px-6 py-3 font-semibold transition hover:bg-white/95 hover:text-black",
                            style: {
                                color: "#5A2D82"
                            },
                            children: "Open the App"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 248,
                            columnNumber: 168
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/contact",
                            className: "rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10 hover:text-[#5A2D82]",
                            children: "Custom Orders"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 250,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 248,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[31] = t30;
    } else {
        t30 = $[31];
    }
    let t31;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-white/10 p-5 bg-white/[0.03]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white/90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7 8l5-4 5 4v3l-2 2v7H9v-7l-2-2V8z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 257,
                            columnNumber: 193
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 257,
                        columnNumber: 114
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 257,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mt-3 font-bold !text-white",
                    children: "Custom Streetwear"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 257,
                    columnNumber: 313
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-white/65",
                    children: "Oversized fits. Clean cuts. Premium feel."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 257,
                    columnNumber: 378
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[32] = t31;
    } else {
        t31 = $[32];
    }
    let t32;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-white/10 p-5 bg-white/[0.03]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white/90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M3 12l9 9 9-9-9-9H3v9z",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 264,
                                columnNumber: 193
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "7",
                                cy: "7",
                                r: "1.5",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 264,
                                columnNumber: 289
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 264,
                        columnNumber: 114
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 264,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mt-3 font-bold !text-white",
                    children: "Branded Merch"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 264,
                    columnNumber: 353
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-white/65",
                    children: "Tote bags, caps, bottles, boxes."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 264,
                    columnNumber: 414
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[33] = t32;
    } else {
        t32 = $[33];
    }
    let t33;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-white/10 p-5 bg-white/[0.03]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white/90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M3 7l9-4 9 4-9 4-9-4z",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 271,
                                columnNumber: 193
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M3 7v10l9 4 9-4V7",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 271,
                                columnNumber: 288
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 11v10",
                                stroke: "currentColor",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 271,
                                columnNumber: 379
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 271,
                        columnNumber: 114
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 271,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mt-3 font-bold !text-white",
                    children: "Bulk Orders"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 271,
                    columnNumber: 451
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-white/65",
                    children: "For teams, events, campaigns and gifting."
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 271,
                    columnNumber: 510
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[34] = t33;
    } else {
        t33 = $[34];
    }
    let t34;
    let t35;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-[var(--black)] text-white py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-start",
                children: [
                    t30,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            t31,
                            t32,
                            t33,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/10 p-5 bg-white/[0.03]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white/90",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "22",
                                            height: "22",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 388
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9.5 12.5l2 2 4-4",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 508
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 309
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 278
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-3 font-bold !text-white",
                                        children: "Durable Quality"
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 633
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-white/65",
                                        children: "Strong fabrics, solid stitching, and finishes built to last."
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 696
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 279,
                                columnNumber: 206
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 279,
                        columnNumber: 151
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 279,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$ManualGoogleReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManualGoogleReviews"], {}, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[35] = t34;
        $[36] = t35;
    } else {
        t34 = $[35];
        t35 = $[36];
    }
    let t36;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#FDB813]",
            children: "Our"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[37] = t36;
    } else {
        t36 = $[37];
    }
    let t37;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-extrabold tracking-tight",
            children: [
                t36,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--brand-purple)]",
                    children: "Offering"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 296,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[38] = t37;
    } else {
        t37 = $[38];
    }
    let t38;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z",
                                stroke: "currentColor",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 303,
                                columnNumber: 263
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.5 12.5l2 2 4-4",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 303,
                                columnNumber: 360
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 303,
                        columnNumber: 184
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 303,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-black",
                            children: "Quality that lasts"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 303,
                            columnNumber: 490
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-black/70",
                            children: "Strong fabrics, neat stitching, clean finishing."
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 303,
                            columnNumber: 552
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 303,
                    columnNumber: 485
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[39] = t38;
    } else {
        t38 = $[39];
    }
    let t39;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 12a8 8 0 0116 0v5a2 2 0 01-2 2h-2v-6h4M4 12v5a2 2 0 002 2h2v-6H4",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 310,
                            columnNumber: 263
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 184
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 310,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-black",
                            children: "Good customer service"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 310,
                            columnNumber: 420
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-black/70",
                            children: "Clear communication and fast updates."
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 310,
                            columnNumber: 485
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 310,
                    columnNumber: 415
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[40] = t39;
    } else {
        t39 = $[40];
    }
    let t40;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 12a4 4 0 100-8 4 4 0 000 8z",
                                stroke: "currentColor",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 317,
                                columnNumber: 263
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 21a8 8 0 0116 0",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 317,
                                columnNumber: 345
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 317,
                        columnNumber: 184
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 317,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-black",
                            children: "Built for identity"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 317,
                            columnNumber: 453
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-black/70",
                            children: "Wear it your way. Show who you are."
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 317,
                            columnNumber: 515
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 317,
                    columnNumber: 448
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[41] = t40;
    } else {
        t40 = $[41];
    }
    let t41;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 8l-9-4-9 4 9 4 9-4z",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 324,
                                columnNumber: 263
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M3 8v8l9 4 9-4V8",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 324,
                                columnNumber: 360
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 324,
                        columnNumber: 184
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 324,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-black",
                            children: "Bulk orders"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 324,
                            columnNumber: 467
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-black/70",
                            children: "For teams, events, brands, and gifting."
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 324,
                            columnNumber: 522
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 324,
                    columnNumber: 462
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[42] = t41;
    } else {
        t41 = $[42];
    }
    let t42;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 7h16M4 12h10M4 17h16",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 331,
                            columnNumber: 263
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 331,
                        columnNumber: 184
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 331,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-black",
                            children: "Custom orders"
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 331,
                            columnNumber: 376
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-black/70",
                            children: "Tell us what you want; we bring it to life."
                        }, void 0, false, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 331,
                            columnNumber: 433
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 331,
                    columnNumber: 371
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[43] = t42;
    } else {
        t42 = $[43];
    }
    let t43;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-7",
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-4",
                    children: [
                        t38,
                        t39,
                        t40,
                        t41,
                        t42,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 7h16M4 12h10M4 17h16",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 348
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 269
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 136
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-black",
                                            children: "Buy & resell"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 461
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-black/70",
                                            children: "Perfect for vendors who want to buy in bulk and resell."
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 521
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 456
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                            lineNumber: 338,
                            columnNumber: 96
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 338,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[44] = t43;
    } else {
        t43 = $[44];
    }
    let t44;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--brand-purple)]",
            children: "Order"
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[45] = t44;
    } else {
        t44 = $[45];
    }
    let t45;
    let t46;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-extrabold tracking-tight",
            children: [
                t44,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[#FDB813]",
                    children: "via the App"
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 353,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-black/70",
            children: "Browse the full catalogue, place orders, and track progress inside the Dritchwear mobile app."
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[46] = t45;
        $[47] = t46;
    } else {
        t45 = $[46];
        t46 = $[47];
    }
    let t47;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 rounded-2xl border border-black/10 bg-black/[0.02] overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/app-preview.jpeg",
                alt: "Dritchwear app preview",
                width: 600,
                height: 208,
                className: "h-52 w-full object-cover"
            }, void 0, false, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 363,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[48] = t47;
    } else {
        t47 = $[48];
    }
    let t48;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: WHATSAPP_URL,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center justify-center gap-2 rounded-xl\n                           bg-[var(--brand-purple)] px-6 py-3 font-semibold\n                           !text-white transition\n                           hover:bg-black hover:!text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16.365 1.43c0 1.14-.42 2.22-1.22 3.1-.82.9-2.17 1.6-3.29 1.5-.14-1.1.43-2.27 1.22-3.07.86-.88 2.32-1.55 3.29-1.53zM20.52 17.12c-.55 1.25-.8 1.8-1.5 2.9-.98 1.55-2.37 3.47-4.09 3.49-1.53.02-1.92-.99-3.99-.98-2.07.01-2.5 1-4.03.98-1.72-.02-3.03-1.77-4.01-3.32-2.24-3.54-2.47-7.69-1.09-9.82.98-1.52 2.52-2.41 3.95-2.41 1.56 0 2.54 1.01 3.83 1.01 1.25 0 2.02-1.02 3.82-1.02 1.27 0 2.62.69 3.6 1.88-3.17 1.74-2.66 6.26.71 7.31z"
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 370,
                        columnNumber: 414
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dritchwear-web-1/app/page.tsx",
                    lineNumber: 370,
                    columnNumber: 327
                }, this),
                "iOS - Order on WhatsApp"
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[49] = t48;
    } else {
        t48 = $[49];
    }
    let t49;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-6xl px-6 py-14",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                    t43,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-7",
                        children: [
                            t45,
                            t46,
                            t47,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex flex-col sm:flex-row gap-3",
                                children: [
                                    t48,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: PLAY_STORE_URL,
                                        onClick: handleGooglePlayClick,
                                        className: "inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--brand-purple)] px-6 py-3 font-semibold text-[var(--brand-purple)] hover:bg-[var(--brand-purple)]/5 transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                "aria-hidden": "true",
                                                className: "text-[var(--brand-purple)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 3.5v17c0 .6.7.9 1.2.6l10.4-8.5L5.2 2.9C4.7 2.6 4 2.9 4 3.5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 588
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16.6 12.6l2.7-2.2c.5-.4.5-1.1 0-1.5l-2.7-2.2-3.1 2.9 3.1 3z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 663
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M15.6 13.5L5.2 21.1c.4.3 1 .3 1.4 0l9-6.7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 736
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M15.6 10.5l-9-6.7c-.4-.3-1-.3-1.4 0l10.4 7.6z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 791
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 462
                                            }, this),
                                            "Google Play"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 205
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 377,
                                columnNumber: 146
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 377,
                        columnNumber: 109
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 377,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[50] = t49;
    } else {
        t49 = $[50];
    }
    let t50;
    if ($[51] !== isStoreModalOpen) {
        t50 = isStoreModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md rounded-2xl bg-white p-6 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-extrabold text-[var(--brand-purple)]",
                                children: "Get the Dritchwear App"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 384,
                                columnNumber: 236
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "HomePage[<button>.onClick]": ()=>setIsStoreModalOpen(false)
                                }["HomePage[<button>.onClick]"],
                                className: "text-black/50 hover:text-black text-xl",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 384,
                                columnNumber: 329
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 384,
                        columnNumber: 185
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-black/70",
                        children: "Choose your platform to start shopping."
                    }, void 0, false, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 386,
                        columnNumber: 111
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: WHATSAPP_URL,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "inline-flex items-center justify-center gap-2 rounded-xl\n                           bg-[var(--brand-purple)] px-6 py-3 font-semibold\n                           !text-white transition\n                           hover:bg-black hover:!text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M16.365 1.43c0 1.14-.42 2.22-1.22 3.1-.82.9-2.17 1.6-3.29 1.5-.14-1.1.43-2.27 1.22-3.07.86-.88 2.32-1.55 3.29-1.53zM20.52 17.12c-.55 1.25-.8 1.8-1.5 2.9-.98 1.55-2.37 3.47-4.09 3.49-1.53.02-1.92-.99-3.99-.98-2.07.01-2.5 1-4.03.98-1.72-.02-3.03-1.77-4.01-3.32-2.24-3.54-2.47-7.69-1.09-9.82.98-1.52 2.52-2.41 3.95-2.41 1.56 0 2.54 1.01 3.83 1.01 1.25 0 2.02-1.02 3.82-1.02 1.27 0 2.62.69 3.6 1.88-3.17 1.74-2.66 6.26.71 7.31z"
                                        }, void 0, false, {
                                            fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 641
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 554
                                    }, this),
                                    "iOS - Order on WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 386,
                                columnNumber: 238
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: PLAY_STORE_URL,
                                onClick: handleGooglePlayClick,
                                className: "inline-flex items-center justify-center gap-2 rounded-xl\n                           border border-[var(--brand-purple)]\n                           px-6 py-3 font-semibold\n                           text-[var(--brand-purple)]\n                           hover:bg-[var(--brand-purple)]/5 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 3.5v17c0 .6.7.9 1.2.6l10.4-8.5L5.2 2.9C4.7 2.6 4 2.9 4 3.5z"
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 1568
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16.6 12.6l2.7-2.2c.5-.4.5-1.1 0-1.5l-2.7-2.2-3.1 2.9 3.1 3z"
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 1643
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M15.6 13.5L5.2 21.1c.4.3 1 .3 1.4 0l9-6.7z"
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 1716
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M15.6 10.5l-9-6.7c-.4-.3-1-.3-1.4 0l10.4 7.6z"
                                            }, void 0, false, {
                                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 1771
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 1481
                                    }, this),
                                    "Google Play"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                                lineNumber: 386,
                                columnNumber: 1110
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dritchwear-web-1/app/page.tsx",
                        lineNumber: 386,
                        columnNumber: 196
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dritchwear-web-1/app/page.tsx",
                lineNumber: 384,
                columnNumber: 117
            }, this)
        }, void 0, false, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 384,
            columnNumber: 31
        }, this);
        $[51] = isStoreModalOpen;
        $[52] = t50;
    } else {
        t50 = $[52];
    }
    let t51;
    if ($[53] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dritchwear$2d$web$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                t9,
                t10,
                t17,
                t24,
                t34,
                t35,
                t49,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/dritchwear-web-1/app/page.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[53] = t50;
        $[54] = t51;
    } else {
        t51 = $[54];
    }
    return t51;
}
_s(HomePage, "u7BurLWQPl5aqI5r+jZ1n3+Yr8Y=");
_c1 = HomePage;
function _HomePageHandleGooglePlayClick() {
    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
            send_to: "AW-17944092598/rkXVCM76nvYbELa_tOxC"
        });
    }
}
var _c, _c1;
__turbopack_context__.k.register(_c, "SoftIcon");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dritchwear-web-1_0afee99c._.js.map