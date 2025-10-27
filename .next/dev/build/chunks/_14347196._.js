module.exports = [
"[project]/Documents/VSC Proyectos/Practica/node_modules/picocolors/picocolors.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

let p = process || {}, argv = p.argv || [], env = p.env || {};
let isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
let formatter = (open, close, replace = open)=>(input)=>{
        let string = "" + input, index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
let replaceClose = (string, close, replace, index)=>{
    let result = "", cursor = 0;
    do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
    }while (~index)
    return result + string.substring(cursor);
};
let createColors = (enabled = isColorSupported)=>{
    let f = enabled ? formatter : ()=>String;
    return {
        isColorSupported: enabled,
        reset: f("\x1b[0m", "\x1b[0m"),
        bold: f("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m"),
        dim: f("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m"),
        italic: f("\x1b[3m", "\x1b[23m"),
        underline: f("\x1b[4m", "\x1b[24m"),
        inverse: f("\x1b[7m", "\x1b[27m"),
        hidden: f("\x1b[8m", "\x1b[28m"),
        strikethrough: f("\x1b[9m", "\x1b[29m"),
        black: f("\x1b[30m", "\x1b[39m"),
        red: f("\x1b[31m", "\x1b[39m"),
        green: f("\x1b[32m", "\x1b[39m"),
        yellow: f("\x1b[33m", "\x1b[39m"),
        blue: f("\x1b[34m", "\x1b[39m"),
        magenta: f("\x1b[35m", "\x1b[39m"),
        cyan: f("\x1b[36m", "\x1b[39m"),
        white: f("\x1b[37m", "\x1b[39m"),
        gray: f("\x1b[90m", "\x1b[39m"),
        bgBlack: f("\x1b[40m", "\x1b[49m"),
        bgRed: f("\x1b[41m", "\x1b[49m"),
        bgGreen: f("\x1b[42m", "\x1b[49m"),
        bgYellow: f("\x1b[43m", "\x1b[49m"),
        bgBlue: f("\x1b[44m", "\x1b[49m"),
        bgMagenta: f("\x1b[45m", "\x1b[49m"),
        bgCyan: f("\x1b[46m", "\x1b[49m"),
        bgWhite: f("\x1b[47m", "\x1b[49m"),
        blackBright: f("\x1b[90m", "\x1b[39m"),
        redBright: f("\x1b[91m", "\x1b[39m"),
        greenBright: f("\x1b[92m", "\x1b[39m"),
        yellowBright: f("\x1b[93m", "\x1b[39m"),
        blueBright: f("\x1b[94m", "\x1b[39m"),
        magentaBright: f("\x1b[95m", "\x1b[39m"),
        cyanBright: f("\x1b[96m", "\x1b[39m"),
        whiteBright: f("\x1b[97m", "\x1b[39m"),
        bgBlackBright: f("\x1b[100m", "\x1b[49m"),
        bgRedBright: f("\x1b[101m", "\x1b[49m"),
        bgGreenBright: f("\x1b[102m", "\x1b[49m"),
        bgYellowBright: f("\x1b[103m", "\x1b[49m"),
        bgBlueBright: f("\x1b[104m", "\x1b[49m"),
        bgMagentaBright: f("\x1b[105m", "\x1b[49m"),
        bgCyanBright: f("\x1b[106m", "\x1b[49m"),
        bgWhiteBright: f("\x1b[107m", "\x1b[49m")
    };
};
module.exports = createColors();
module.exports.createColors = createColors;
}),
"[project]/node_modules/picocolors/picocolors.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

let p = process || {}, argv = p.argv || [], env = p.env || {};
let isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
let formatter = (open, close, replace = open)=>(input)=>{
        let string = "" + input, index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
let replaceClose = (string, close, replace, index)=>{
    let result = "", cursor = 0;
    do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
    }while (~index)
    return result + string.substring(cursor);
};
let createColors = (enabled = isColorSupported)=>{
    let f = enabled ? formatter : ()=>String;
    return {
        isColorSupported: enabled,
        reset: f("\x1b[0m", "\x1b[0m"),
        bold: f("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m"),
        dim: f("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m"),
        italic: f("\x1b[3m", "\x1b[23m"),
        underline: f("\x1b[4m", "\x1b[24m"),
        inverse: f("\x1b[7m", "\x1b[27m"),
        hidden: f("\x1b[8m", "\x1b[28m"),
        strikethrough: f("\x1b[9m", "\x1b[29m"),
        black: f("\x1b[30m", "\x1b[39m"),
        red: f("\x1b[31m", "\x1b[39m"),
        green: f("\x1b[32m", "\x1b[39m"),
        yellow: f("\x1b[33m", "\x1b[39m"),
        blue: f("\x1b[34m", "\x1b[39m"),
        magenta: f("\x1b[35m", "\x1b[39m"),
        cyan: f("\x1b[36m", "\x1b[39m"),
        white: f("\x1b[37m", "\x1b[39m"),
        gray: f("\x1b[90m", "\x1b[39m"),
        bgBlack: f("\x1b[40m", "\x1b[49m"),
        bgRed: f("\x1b[41m", "\x1b[49m"),
        bgGreen: f("\x1b[42m", "\x1b[49m"),
        bgYellow: f("\x1b[43m", "\x1b[49m"),
        bgBlue: f("\x1b[44m", "\x1b[49m"),
        bgMagenta: f("\x1b[45m", "\x1b[49m"),
        bgCyan: f("\x1b[46m", "\x1b[49m"),
        bgWhite: f("\x1b[47m", "\x1b[49m"),
        blackBright: f("\x1b[90m", "\x1b[39m"),
        redBright: f("\x1b[91m", "\x1b[39m"),
        greenBright: f("\x1b[92m", "\x1b[39m"),
        yellowBright: f("\x1b[93m", "\x1b[39m"),
        blueBright: f("\x1b[94m", "\x1b[39m"),
        magentaBright: f("\x1b[95m", "\x1b[39m"),
        cyanBright: f("\x1b[96m", "\x1b[39m"),
        whiteBright: f("\x1b[97m", "\x1b[39m"),
        bgBlackBright: f("\x1b[100m", "\x1b[49m"),
        bgRedBright: f("\x1b[101m", "\x1b[49m"),
        bgGreenBright: f("\x1b[102m", "\x1b[49m"),
        bgYellowBright: f("\x1b[103m", "\x1b[49m"),
        bgBlueBright: f("\x1b[104m", "\x1b[49m"),
        bgMagentaBright: f("\x1b[105m", "\x1b[49m"),
        bgCyanBright: f("\x1b[106m", "\x1b[49m"),
        bgWhiteBright: f("\x1b[107m", "\x1b[49m")
    };
};
module.exports = createColors();
module.exports.createColors = createColors;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/nanoid/non-secure/index.cjs [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

// This alphabet uses `A-Za-z0-9_-` symbols.
// The order of characters is optimized for better gzip and brotli compression.
// References to the same file (works both for gzip and brotli):
// `'use`, `andom`, and `rict'`
// References to the brotli default dictionary:
// `-26T`, `1983`, `40px`, `75px`, `bush`, `jack`, `mind`, `very`, and `wolf`
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = '';
        // A compact alternative for `for (var i = 0; i < step; i++)`.
        let i = size | 0;
        while(i--){
            // `| 0` is more compact and faster than `Math.floor()`.
            id += alphabet[Math.random() * alphabet.length | 0];
        }
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = '';
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    let i = size | 0;
    while(i--){
        // `| 0` is more compact and faster than `Math.floor()`.
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
module.exports = {
    nanoid,
    customAlphabet
};
}),
"[project]/node_modules/nanoid/non-secure/index.cjs [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

// This alphabet uses `A-Za-z0-9_-` symbols.
// The order of characters is optimized for better gzip and brotli compression.
// References to the same file (works both for gzip and brotli):
// `'use`, `andom`, and `rict'`
// References to the brotli default dictionary:
// `-26T`, `1983`, `40px`, `75px`, `bush`, `jack`, `mind`, `very`, and `wolf`
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = '';
        // A compact alternative for `for (var i = 0; i < step; i++)`.
        let i = size | 0;
        while(i--){
            // `| 0` is more compact and faster than `Math.floor()`.
            id += alphabet[Math.random() * alphabet.length | 0];
        }
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = '';
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    let i = size | 0;
    while(i--){
        // `| 0` is more compact and faster than `Math.floor()`.
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
module.exports = {
    nanoid,
    customAlphabet
};
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@alloc/quick-lru/index.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

class QuickLRU {
    constructor(options = {}){
        if (!(options.maxSize && options.maxSize > 0)) {
            throw new TypeError('`maxSize` must be a number greater than 0');
        }
        if (typeof options.maxAge === 'number' && options.maxAge === 0) {
            throw new TypeError('`maxAge` must be a number greater than 0');
        }
        this.maxSize = options.maxSize;
        this.maxAge = options.maxAge || Infinity;
        this.onEviction = options.onEviction;
        this.cache = new Map();
        this.oldCache = new Map();
        this._size = 0;
    }
    _emitEvictions(cache) {
        if (typeof this.onEviction !== 'function') {
            return;
        }
        for (const [key, item] of cache){
            this.onEviction(key, item.value);
        }
    }
    _deleteIfExpired(key, item) {
        if (typeof item.expiry === 'number' && item.expiry <= Date.now()) {
            if (typeof this.onEviction === 'function') {
                this.onEviction(key, item.value);
            }
            return this.delete(key);
        }
        return false;
    }
    _getOrDeleteIfExpired(key, item) {
        const deleted = this._deleteIfExpired(key, item);
        if (deleted === false) {
            return item.value;
        }
    }
    _getItemValue(key, item) {
        return item.expiry ? this._getOrDeleteIfExpired(key, item) : item.value;
    }
    _peek(key, cache) {
        const item = cache.get(key);
        return this._getItemValue(key, item);
    }
    _set(key, value) {
        this.cache.set(key, value);
        this._size++;
        if (this._size >= this.maxSize) {
            this._size = 0;
            this._emitEvictions(this.oldCache);
            this.oldCache = this.cache;
            this.cache = new Map();
        }
    }
    _moveToRecent(key, item) {
        this.oldCache.delete(key);
        this._set(key, item);
    }
    *_entriesAscending() {
        for (const item of this.oldCache){
            const [key, value] = item;
            if (!this.cache.has(key)) {
                const deleted = this._deleteIfExpired(key, value);
                if (deleted === false) {
                    yield item;
                }
            }
        }
        for (const item of this.cache){
            const [key, value] = item;
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) {
                yield item;
            }
        }
    }
    get(key) {
        if (this.cache.has(key)) {
            const item = this.cache.get(key);
            return this._getItemValue(key, item);
        }
        if (this.oldCache.has(key)) {
            const item = this.oldCache.get(key);
            if (this._deleteIfExpired(key, item) === false) {
                this._moveToRecent(key, item);
                return item.value;
            }
        }
    }
    set(key, value, { maxAge = this.maxAge === Infinity ? undefined : Date.now() + this.maxAge } = {}) {
        if (this.cache.has(key)) {
            this.cache.set(key, {
                value,
                maxAge
            });
        } else {
            this._set(key, {
                value,
                expiry: maxAge
            });
        }
    }
    has(key) {
        if (this.cache.has(key)) {
            return !this._deleteIfExpired(key, this.cache.get(key));
        }
        if (this.oldCache.has(key)) {
            return !this._deleteIfExpired(key, this.oldCache.get(key));
        }
        return false;
    }
    peek(key) {
        if (this.cache.has(key)) {
            return this._peek(key, this.cache);
        }
        if (this.oldCache.has(key)) {
            return this._peek(key, this.oldCache);
        }
    }
    delete(key) {
        const deleted = this.cache.delete(key);
        if (deleted) {
            this._size--;
        }
        return this.oldCache.delete(key) || deleted;
    }
    clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
    }
    resize(newSize) {
        if (!(newSize && newSize > 0)) {
            throw new TypeError('`maxSize` must be a number greater than 0');
        }
        const items = [
            ...this._entriesAscending()
        ];
        const removeCount = items.length - newSize;
        if (removeCount < 0) {
            this.cache = new Map(items);
            this.oldCache = new Map();
            this._size = items.length;
        } else {
            if (removeCount > 0) {
                this._emitEvictions(items.slice(0, removeCount));
            }
            this.oldCache = new Map(items.slice(removeCount));
            this.cache = new Map();
            this._size = 0;
        }
        this.maxSize = newSize;
    }
    *keys() {
        for (const [key] of this){
            yield key;
        }
    }
    *values() {
        for (const [, value] of this){
            yield value;
        }
    }
    *[Symbol.iterator]() {
        for (const item of this.cache){
            const [key, value] = item;
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) {
                yield [
                    key,
                    value.value
                ];
            }
        }
        for (const item of this.oldCache){
            const [key, value] = item;
            if (!this.cache.has(key)) {
                const deleted = this._deleteIfExpired(key, value);
                if (deleted === false) {
                    yield [
                        key,
                        value.value
                    ];
                }
            }
        }
    }
    *entriesDescending() {
        let items = [
            ...this.cache
        ];
        for(let i = items.length - 1; i >= 0; --i){
            const item = items[i];
            const [key, value] = item;
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) {
                yield [
                    key,
                    value.value
                ];
            }
        }
        items = [
            ...this.oldCache
        ];
        for(let i = items.length - 1; i >= 0; --i){
            const item = items[i];
            const [key, value] = item;
            if (!this.cache.has(key)) {
                const deleted = this._deleteIfExpired(key, value);
                if (deleted === false) {
                    yield [
                        key,
                        value.value
                    ];
                }
            }
        }
    }
    *entriesAscending() {
        for (const [key, value] of this._entriesAscending()){
            yield [
                key,
                value.value
            ];
        }
    }
    get size() {
        if (!this._size) {
            return this.oldCache.size;
        }
        let oldCacheSize = 0;
        for (const key of this.oldCache.keys()){
            if (!this.cache.has(key)) {
                oldCacheSize++;
            }
        }
        return Math.min(this._size + oldCacheSize, this.maxSize);
    }
}
module.exports = QuickLRU;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/node/dist/esm-cache.loader.mjs [postcss] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolve",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/module [external] (module, cjs)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/node/dist/esm-cache.loader.mjs")}`;
    }
};
;
var o = async (a, e, u)=>{
    let r = await u(a, e);
    if (r.url === __TURBOPACK__import$2e$meta__.url || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__["isBuiltin"])(r.url) || !e.parentURL) return r;
    let t = new URL(e.parentURL).searchParams.get("id");
    if (t === null) return r;
    let l = new URL(r.url);
    return l.searchParams.set("id", t), {
        ...r,
        url: `${l}`
    };
};
;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/node/dist/index.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var Pt = Object.create;
var ie = Object.defineProperty;
var _t = Object.getOwnPropertyDescriptor;
var It = Object.getOwnPropertyNames;
var Dt = Object.getPrototypeOf, Ut = Object.prototype.hasOwnProperty;
var De = (e, r)=>{
    for(var t in r)ie(e, t, {
        get: r[t],
        enumerable: !0
    });
}, Ue = (e, r, t, i)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let o of It(r))!Ut.call(e, o) && o !== t && ie(e, o, {
        get: ()=>r[o],
        enumerable: !(i = _t(r, o)) || i.enumerable
    });
    return e;
};
var T = (e, r, t)=>(t = e != null ? Pt(Dt(e)) : {}, Ue(r || !e || !e.__esModule ? ie(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e)), Lt = (e)=>Ue(ie({}, "__esModule", {
        value: !0
    }), e);
var si = {};
De(si, {
    Features: ()=>R.Features,
    Instrumentation: ()=>Ie,
    Polyfills: ()=>R.Polyfills,
    __unstable__loadDesignSystem: ()=>Jr,
    compile: ()=>Qr,
    compileAst: ()=>Zr,
    env: ()=>ne,
    loadModule: ()=>Pe,
    normalizePath: ()=>de,
    optimize: ()=>ni,
    toSourceMap: ()=>li
});
module.exports = Lt(si);
var Rt = T(__turbopack_context__.r("[externals]/module [external] (module, cjs)")), Ot = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var ne = {};
De(ne, {
    DEBUG: ()=>he
});
var he = Kt(process.env.DEBUG);
function Kt(e) {
    if (typeof e == "boolean") return e;
    if (e === void 0) return !1;
    if (e === "true" || e === "1") return !0;
    if (e === "false" || e === "0") return !1;
    if (e === "*") return !0;
    let r = e.split(",").map((t)=>t.split(":")[0]);
    return r.includes("-tailwindcss") ? !1 : !!r.includes("tailwindcss");
}
var F = T(__turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/enhanced-resolve/lib/index.js [postcss] (ecmascript)")), At = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/jiti/lib/jiti.cjs [postcss] (ecmascript)"), me = T(__turbopack_context__.r("[externals]/fs [external] (fs, cjs)")), Oe = T(__turbopack_context__.r("[externals]/fs/promises [external] (fs/promises, cjs)")), Y = T(__turbopack_context__.r("[externals]/path [external] (path, cjs)")), Ve = __turbopack_context__.r("[externals]/url [external] (url, cjs)"), R = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tailwindcss/dist/lib.js [postcss] (ecmascript)");
var oe = T(__turbopack_context__.r("[externals]/fs/promises [external] (fs/promises, cjs)")), W = T(__turbopack_context__.r("[externals]/path [external] (path, cjs)")), zt = [
    /import[\s\S]*?['"](.{3,}?)['"]/gi,
    /import[\s\S]*from[\s\S]*?['"](.{3,}?)['"]/gi,
    /export[\s\S]*from[\s\S]*?['"](.{3,}?)['"]/gi,
    /require\(['"`](.+)['"`]\)/gi
], Mt = [
    ".js",
    ".cjs",
    ".mjs"
], Ft = [
    "",
    ".js",
    ".cjs",
    ".mjs",
    ".ts",
    ".cts",
    ".mts",
    ".jsx",
    ".tsx"
], jt = [
    "",
    ".ts",
    ".cts",
    ".mts",
    ".tsx",
    ".js",
    ".cjs",
    ".mjs",
    ".jsx"
];
async function Wt(e, r) {
    for (let t of r){
        let i = `${e}${t}`;
        if ((await oe.default.stat(i).catch(()=>null))?.isFile()) return i;
    }
    for (let t of r){
        let i = `${e}/index${t}`;
        if (await oe.default.access(i).then(()=>!0, ()=>!1)) return i;
    }
    return null;
}
async function Le(e, r, t, i) {
    let o = Mt.includes(i) ? Ft : jt, a = await Wt(W.default.resolve(t, r), o);
    if (a === null || e.has(a)) return;
    e.add(a), t = W.default.dirname(a), i = W.default.extname(a);
    let n = await oe.default.readFile(a, "utf-8"), s = [];
    for (let l of zt)for (let u of n.matchAll(l))u[1].startsWith(".") && s.push(Le(e, u[1], t, i));
    await Promise.all(s);
}
async function Ke(e) {
    let r = new Set;
    return await Le(r, e, W.default.dirname(e), W.default.extname(e)), Array.from(r);
}
var Ee = T(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
function B(e) {
    return {
        kind: "word",
        value: e
    };
}
function Bt(e, r) {
    return {
        kind: "function",
        value: e,
        nodes: r
    };
}
function Yt(e) {
    return {
        kind: "separator",
        value: e
    };
}
function S(e) {
    let r = "";
    for (let t of e)switch(t.kind){
        case "word":
        case "separator":
            {
                r += t.value;
                break;
            }
        case "function":
            r += t.value + "(" + S(t.nodes) + ")";
    }
    return r;
}
var ze = 92, Gt = 41, Me = 58, Fe = 44, qt = 34, je = 61, We = 62, Be = 60, Ye = 10, Ht = 40, Zt = 39, Qt = 47, Ge = 32, qe = 9;
function A(e) {
    e = e.replaceAll(`\r
`, `
`);
    let r = [], t = [], i = null, o = "", a;
    for(let n = 0; n < e.length; n++){
        let s = e.charCodeAt(n);
        switch(s){
            case ze:
                {
                    o += e[n] + e[n + 1], n++;
                    break;
                }
            case Qt:
                {
                    if (o.length > 0) {
                        let u = B(o);
                        i ? i.nodes.push(u) : r.push(u), o = "";
                    }
                    let l = B(e[n]);
                    i ? i.nodes.push(l) : r.push(l);
                    break;
                }
            case Me:
            case Fe:
            case je:
            case We:
            case Be:
            case Ye:
            case Ge:
            case qe:
                {
                    if (o.length > 0) {
                        let c = B(o);
                        i ? i.nodes.push(c) : r.push(c), o = "";
                    }
                    let l = n, u = n + 1;
                    for(; u < e.length && (a = e.charCodeAt(u), !(a !== Me && a !== Fe && a !== je && a !== We && a !== Be && a !== Ye && a !== Ge && a !== qe)); u++);
                    n = u - 1;
                    let p = Yt(e.slice(l, u));
                    i ? i.nodes.push(p) : r.push(p);
                    break;
                }
            case Zt:
            case qt:
                {
                    let l = n;
                    for(let u = n + 1; u < e.length; u++)if (a = e.charCodeAt(u), a === ze) u += 1;
                    else if (a === s) {
                        n = u;
                        break;
                    }
                    o += e.slice(l, n + 1);
                    break;
                }
            case Ht:
                {
                    let l = Bt(o, []);
                    o = "", i ? i.nodes.push(l) : r.push(l), t.push(l), i = l;
                    break;
                }
            case Gt:
                {
                    let l = t.pop();
                    if (o.length > 0) {
                        let u = B(o);
                        l?.nodes.push(u), o = "";
                    }
                    t.length > 0 ? i = t[t.length - 1] : i = null;
                    break;
                }
            default:
                o += String.fromCharCode(s);
        }
    }
    return o.length > 0 && r.push(B(o)), r;
}
var g = class extends Map {
    constructor(t){
        super();
        this.factory = t;
    }
    get(t) {
        let i = super.get(t);
        return i === void 0 && (i = this.factory(t, this), this.set(t, i)), i;
    }
};
var hi = new Uint8Array(256);
var ae = new Uint8Array(256);
function y(e, r) {
    let t = 0, i = [], o = 0, a = e.length, n = r.charCodeAt(0);
    for(let s = 0; s < a; s++){
        let l = e.charCodeAt(s);
        if (t === 0 && l === n) {
            i.push(e.slice(o, s)), o = s + 1;
            continue;
        }
        switch(l){
            case 92:
                s += 1;
                break;
            case 39:
            case 34:
                for(; ++s < a;){
                    let u = e.charCodeAt(s);
                    if (u === 92) {
                        s += 1;
                        continue;
                    }
                    if (u === l) break;
                }
                break;
            case 40:
                ae[t] = 41, t++;
                break;
            case 91:
                ae[t] = 93, t++;
                break;
            case 123:
                ae[t] = 125, t++;
                break;
            case 93:
            case 125:
            case 41:
                t > 0 && l === ae[t - 1] && t--;
                break;
        }
    }
    return i.push(e.slice(o)), i;
}
var ve = ((n)=>(n[n.Continue = 0] = "Continue", n[n.Skip = 1] = "Skip", n[n.Stop = 2] = "Stop", n[n.Replace = 3] = "Replace", n[n.ReplaceSkip = 4] = "ReplaceSkip", n[n.ReplaceStop = 5] = "ReplaceStop", n))(ve || {}), w = {
    Continue: {
        kind: 0
    },
    Skip: {
        kind: 1
    },
    Stop: {
        kind: 2
    },
    Replace: (e)=>({
            kind: 3,
            nodes: Array.isArray(e) ? e : [
                e
            ]
        }),
    ReplaceSkip: (e)=>({
            kind: 4,
            nodes: Array.isArray(e) ? e : [
                e
            ]
        }),
    ReplaceStop: (e)=>({
            kind: 5,
            nodes: Array.isArray(e) ? e : [
                e
            ]
        })
};
function v(e, r) {
    typeof r == "function" ? He(e, r) : He(e, r.enter, r.exit);
}
function He(e, r = ()=>w.Continue, t = ()=>w.Continue) {
    let i = [
        [
            e,
            0,
            null
        ]
    ], o = {
        parent: null,
        depth: 0,
        path () {
            let a = [];
            for(let n = 1; n < i.length; n++){
                let s = i[n][2];
                s && a.push(s);
            }
            return a;
        }
    };
    for(; i.length > 0;){
        let a = i.length - 1, n = i[a], s = n[0], l = n[1], u = n[2];
        if (l >= s.length) {
            i.pop();
            continue;
        }
        if (o.parent = u, o.depth = a, l >= 0) {
            let m = s[l], d = r(m, o) ?? w.Continue;
            switch(d.kind){
                case 0:
                    {
                        m.nodes && m.nodes.length > 0 && i.push([
                            m.nodes,
                            0,
                            m
                        ]), n[1] = ~l;
                        continue;
                    }
                case 2:
                    return;
                case 1:
                    {
                        n[1] = ~l;
                        continue;
                    }
                case 3:
                    {
                        s.splice(l, 1, ...d.nodes);
                        continue;
                    }
                case 5:
                    {
                        s.splice(l, 1, ...d.nodes);
                        return;
                    }
                case 4:
                    {
                        s.splice(l, 1, ...d.nodes), n[1] += d.nodes.length;
                        continue;
                    }
                default:
                    throw new Error(`Invalid \`WalkAction.${ve[d.kind] ?? `Unknown(${d.kind})`}\` in enter.`);
            }
        }
        let p = ~l, c = s[p], f = t(c, o) ?? w.Continue;
        switch(f.kind){
            case 0:
                n[1] = p + 1;
                continue;
            case 2:
                return;
            case 3:
                {
                    s.splice(p, 1, ...f.nodes), n[1] = p + f.nodes.length;
                    continue;
                }
            case 5:
                {
                    s.splice(p, 1, ...f.nodes);
                    return;
                }
            case 4:
                {
                    s.splice(p, 1, ...f.nodes), n[1] = p + f.nodes.length;
                    continue;
                }
            default:
                throw new Error(`Invalid \`WalkAction.${ve[f.kind] ?? `Unknown(${f.kind})`}\` in exit.`);
        }
    }
}
var Ti = new g((e)=>{
    let r = A(e), t = new Set;
    return v(r, (i, o)=>{
        let a = o.parent === null ? r : o.parent.nodes ?? [];
        if (i.kind === "word" && (i.value === "+" || i.value === "-" || i.value === "*" || i.value === "/")) {
            let n = a.indexOf(i) ?? -1;
            if (n === -1) return;
            let s = a[n - 1];
            if (s?.kind !== "separator" || s.value !== " ") return;
            let l = a[n + 1];
            if (l?.kind !== "separator" || l.value !== " ") return;
            t.add(s), t.add(l);
        } else i.kind === "separator" && i.value.length > 0 && i.value.trim() === "" ? (a[0] === i || a[a.length - 1] === i) && t.add(i) : i.kind === "separator" && i.value.trim() === "," && (i.value = ",");
    }), t.size > 0 && v(r, (i)=>{
        if (t.has(i)) return t.delete(i), w.ReplaceSkip([]);
    }), we(r), S(r);
});
var Ei = new g((e)=>{
    let r = A(e);
    return r.length === 3 && r[0].kind === "word" && r[0].value === "&" && r[1].kind === "separator" && r[1].value === ":" && r[2].kind === "function" && r[2].value === "is" ? S(r[2].nodes) : e;
});
function we(e) {
    for (let r of e)switch(r.kind){
        case "function":
            {
                if (r.value === "url" || r.value.endsWith("_url")) {
                    r.value = G(r.value);
                    break;
                }
                if (r.value === "var" || r.value.endsWith("_var") || r.value === "theme" || r.value.endsWith("_theme")) {
                    r.value = G(r.value);
                    for(let t = 0; t < r.nodes.length; t++)we([
                        r.nodes[t]
                    ]);
                    break;
                }
                r.value = G(r.value), we(r.nodes);
                break;
            }
        case "separator":
            r.value = G(r.value);
            break;
        case "word":
            {
                (r.value[0] !== "-" || r.value[1] !== "-") && (r.value = G(r.value));
                break;
            }
        default:
            Jt(r);
    }
}
var Ni = new g((e)=>{
    let r = A(e);
    return r.length === 1 && r[0].kind === "function" && r[0].value === "var";
});
function Jt(e) {
    throw new Error(`Unexpected value: ${e}`);
}
function G(e) {
    return e.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
}
var Xt = process.env.FEATURES_ENV !== "stable";
var P = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, Ki = new RegExp(`^${P.source}$`);
var zi = new RegExp(`^${P.source}%$`);
var Mi = new RegExp(`^${P.source}s*/s*${P.source}$`);
var er = [
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "px",
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
], Fi = new RegExp(`^${P.source}(${er.join("|")})$`);
var tr = [
    "deg",
    "rad",
    "grad",
    "turn"
], ji = new RegExp(`^${P.source}(${tr.join("|")})$`);
var Wi = new RegExp(`^${P.source} +${P.source} +${P.source}$`);
function C(e) {
    let r = Number(e);
    return Number.isInteger(r) && r >= 0 && String(r) === String(e);
}
function q(e, r) {
    if (r === null) return e;
    let t = Number(r);
    return Number.isNaN(t) || (r = `${t * 100}%`), r === "100%" ? e : `color-mix(in oklab, ${e} ${r}, transparent)`;
}
var nr = {
    "--alpha": or,
    "--spacing": ar,
    "--theme": lr,
    theme: sr
};
function or(e, r, t, ...i) {
    let [o, a] = y(t, "/").map((n)=>n.trim());
    if (!o || !a) throw new Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${o || "var(--my-color)"} / ${a || "50%"})\``);
    if (i.length > 0) throw new Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${o || "var(--my-color)"} / ${a || "50%"})\``);
    return q(o, a);
}
function ar(e, r, t, ...i) {
    if (!t) throw new Error("The --spacing(\u2026) function requires an argument, but received none.");
    if (i.length > 0) throw new Error(`The --spacing(\u2026) function only accepts a single argument, but received ${i.length + 1}.`);
    let o = e.theme.resolve(null, [
        "--spacing"
    ]);
    if (!o) throw new Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
    return `calc(${o} * ${t})`;
}
function lr(e, r, t, ...i) {
    if (!t.startsWith("--")) throw new Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");
    let o = !1;
    t.endsWith(" inline") && (o = !0, t = t.slice(0, -7)), r.kind === "at-rule" && (o = !0);
    let a = e.resolveThemeValue(t, o);
    if (!a) {
        if (i.length > 0) return i.join(", ");
        throw new Error(`Could not resolve value for theme function: \`theme(${t})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
    }
    if (i.length === 0) return a;
    let n = i.join(", ");
    if (n === "initial") return a;
    if (a === "initial") return n;
    if (a.startsWith("var(") || a.startsWith("theme(") || a.startsWith("--theme(")) {
        let s = A(a);
        return fr(s, n), S(s);
    }
    return a;
}
function sr(e, r, t, ...i) {
    t = ur(t);
    let o = e.resolveThemeValue(t);
    if (!o && i.length > 0) return i.join(", ");
    if (!o) throw new Error(`Could not resolve value for theme function: \`theme(${t})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
    return o;
}
var pn = new RegExp(Object.keys(nr).map((e)=>`${e}\\(`).join("|"));
function ur(e) {
    if (e[0] !== "'" && e[0] !== '"') return e;
    let r = "", t = e[0];
    for(let i = 1; i < e.length - 1; i++){
        let o = e[i], a = e[i + 1];
        o === "\\" && (a === t || a === "\\") ? (r += a, i++) : r += o;
    }
    return r;
}
function fr(e, r) {
    v(e, (t)=>{
        if (t.kind === "function" && !(t.value !== "var" && t.value !== "theme" && t.value !== "--theme")) if (t.nodes.length === 1) t.nodes.push({
            kind: "word",
            value: `, ${r}`
        });
        else {
            let i = t.nodes[t.nodes.length - 1];
            i.kind === "word" && i.value === "initial" && (i.value = r);
        }
    });
}
var pr = /^(?<value>[-+]?(?:\d*\.)?\d+)(?<unit>[a-z]+|%)?$/i, Xe = new g((e)=>{
    let r = pr.exec(e);
    if (!r) return null;
    let t = r.groups?.value;
    if (t === void 0) return null;
    let i = Number(t);
    if (Number.isNaN(i)) return null;
    let o = r.groups?.unit;
    return o === void 0 ? [
        i,
        null
    ] : [
        i,
        o
    ];
});
function et(e, r = "top", t = "right", i = "bottom", o = "left") {
    return tt(`${e}-${r}`, `${e}-${t}`, `${e}-${i}`, `${e}-${o}`);
}
function tt(e = "top", r = "right", t = "bottom", i = "left") {
    return {
        1: [
            [
                e,
                0
            ],
            [
                r,
                0
            ],
            [
                t,
                0
            ],
            [
                i,
                0
            ]
        ],
        2: [
            [
                e,
                0
            ],
            [
                r,
                1
            ],
            [
                t,
                0
            ],
            [
                i,
                1
            ]
        ],
        3: [
            [
                e,
                0
            ],
            [
                r,
                1
            ],
            [
                t,
                2
            ],
            [
                i,
                1
            ]
        ],
        4: [
            [
                e,
                0
            ],
            [
                r,
                1
            ],
            [
                t,
                2
            ],
            [
                i,
                3
            ]
        ]
    };
}
function K(e, r) {
    return {
        1: [
            [
                e,
                0
            ],
            [
                r,
                0
            ]
        ],
        2: [
            [
                e,
                0
            ],
            [
                r,
                1
            ]
        ]
    };
}
var Rn = {
    inset: tt(),
    margin: et("margin"),
    padding: et("padding"),
    gap: K("row-gap", "column-gap")
}, On = {
    "inset-block": K("top", "bottom"),
    "inset-inline": K("left", "right"),
    "margin-block": K("margin-top", "margin-bottom"),
    "margin-inline": K("margin-left", "margin-right"),
    "padding-block": K("padding-top", "padding-bottom"),
    "padding-inline": K("padding-left", "padding-right")
};
var lo = Symbol();
var so = Symbol();
var uo = Symbol();
var fo = Symbol();
var co = Symbol();
var po = Symbol();
var mo = Symbol();
var go = Symbol();
var ho = Symbol();
var vo = Symbol();
var wo = Symbol();
var yo = Symbol();
var ko = Symbol();
var Q = 92, se = 47, ue = 42, at = 34, lt = 39, Ar = 58, fe = 59, E = 10, ce = 13, J = 32, X = 9, st = 123, be = 125, Ce = 40, ut = 41, Cr = 91, Sr = 93, ft = 45, xe = 64, $r = 33;
function te(e, r) {
    let t = r?.from ? {
        file: r.from,
        code: e
    } : null;
    e[0] === "\uFEFF" && (e = " " + e.slice(1));
    let i = [], o = [], a = [], n = null, s = null, l = "", u = "", p = 0, c;
    for(let f = 0; f < e.length; f++){
        let m = e.charCodeAt(f);
        if (!(m === ce && (c = e.charCodeAt(f + 1), c === E))) if (m === Q) l === "" && (p = f), l += e.slice(f, f + 2), f += 1;
        else if (m === se && e.charCodeAt(f + 1) === ue) {
            let d = f;
            for(let h = f + 2; h < e.length; h++)if (c = e.charCodeAt(h), c === Q) h += 1;
            else if (c === ue && e.charCodeAt(h + 1) === se) {
                f = h + 1;
                break;
            }
            let x = e.slice(d, f + 1);
            if (x.charCodeAt(2) === $r) {
                let h = $e(x.slice(2, -2));
                o.push(h), t && (h.src = [
                    t,
                    d,
                    f + 1
                ], h.dst = [
                    t,
                    d,
                    f + 1
                ]);
            }
        } else if (m === lt || m === at) {
            let d = ct(e, f, m);
            l += e.slice(f, d + 1), f = d;
        } else {
            if ((m === J || m === E || m === X) && (c = e.charCodeAt(f + 1)) && (c === J || c === E || c === X || c === ce && (c = e.charCodeAt(f + 2)) && c == E)) continue;
            if (m === E) {
                if (l.length === 0) continue;
                c = l.charCodeAt(l.length - 1), c !== J && c !== E && c !== X && (l += " ");
            } else if (m === ft && e.charCodeAt(f + 1) === ft && l.length === 0) {
                let d = "", x = f, h = -1;
                for(let k = f + 2; k < e.length; k++)if (c = e.charCodeAt(k), c === Q) k += 1;
                else if (c === lt || c === at) k = ct(e, k, c);
                else if (c === se && e.charCodeAt(k + 1) === ue) {
                    for(let j = k + 2; j < e.length; j++)if (c = e.charCodeAt(j), c === Q) j += 1;
                    else if (c === ue && e.charCodeAt(j + 1) === se) {
                        k = j + 1;
                        break;
                    }
                } else if (h === -1 && c === Ar) h = l.length + k - x;
                else if (c === fe && d.length === 0) {
                    l += e.slice(x, k), f = k;
                    break;
                } else if (c === Ce) d += ")";
                else if (c === Cr) d += "]";
                else if (c === st) d += "}";
                else if ((c === be || e.length - 1 === k) && d.length === 0) {
                    f = k - 1, l += e.slice(x, k);
                    break;
                } else (c === ut || c === Sr || c === be) && d.length > 0 && e[k] === d[d.length - 1] && (d = d.slice(0, -1));
                let U = Ae(l, h);
                if (!U) throw new Error("Invalid custom property, expected a value");
                t && (U.src = [
                    t,
                    x,
                    f
                ], U.dst = [
                    t,
                    x,
                    f
                ]), n ? n.nodes.push(U) : i.push(U), l = "";
            } else if (m === fe && l.charCodeAt(0) === xe) s = ee(l), t && (s.src = [
                t,
                p,
                f
            ], s.dst = [
                t,
                p,
                f
            ]), n ? n.nodes.push(s) : i.push(s), l = "", s = null;
            else if (m === fe && u[u.length - 1] !== ")") {
                let d = Ae(l);
                if (!d) {
                    if (l.length === 0) continue;
                    throw new Error(`Invalid declaration: \`${l.trim()}\``);
                }
                t && (d.src = [
                    t,
                    p,
                    f
                ], d.dst = [
                    t,
                    p,
                    f
                ]), n ? n.nodes.push(d) : i.push(d), l = "";
            } else if (m === st && u[u.length - 1] !== ")") u += "}", s = _(l.trim()), t && (s.src = [
                t,
                p,
                f
            ], s.dst = [
                t,
                p,
                f
            ]), n && n.nodes.push(s), a.push(n), n = s, l = "", s = null;
            else if (m === be && u[u.length - 1] !== ")") {
                if (u === "") throw new Error("Missing opening {");
                if (u = u.slice(0, -1), l.length > 0) if (l.charCodeAt(0) === xe) s = ee(l), t && (s.src = [
                    t,
                    p,
                    f
                ], s.dst = [
                    t,
                    p,
                    f
                ]), n ? n.nodes.push(s) : i.push(s), l = "", s = null;
                else {
                    let x = l.indexOf(":");
                    if (n) {
                        let h = Ae(l, x);
                        if (!h) throw new Error(`Invalid declaration: \`${l.trim()}\``);
                        t && (h.src = [
                            t,
                            p,
                            f
                        ], h.dst = [
                            t,
                            p,
                            f
                        ]), n.nodes.push(h);
                    }
                }
                let d = a.pop() ?? null;
                d === null && n && i.push(n), n = d, l = "", s = null;
            } else if (m === Ce) u += ")", l += "(";
            else if (m === ut) {
                if (u[u.length - 1] !== ")") throw new Error("Missing opening (");
                u = u.slice(0, -1), l += ")";
            } else {
                if (l.length === 0 && (m === J || m === E || m === X)) continue;
                l === "" && (p = f), l += String.fromCharCode(m);
            }
        }
    }
    if (l.charCodeAt(0) === xe) {
        let f = ee(l);
        t && (f.src = [
            t,
            p,
            e.length
        ], f.dst = [
            t,
            p,
            e.length
        ]), i.push(f);
    }
    if (u.length > 0 && n) {
        if (n.kind === "rule") throw new Error(`Missing closing } at ${n.selector}`);
        if (n.kind === "at-rule") throw new Error(`Missing closing } at ${n.name} ${n.params}`);
    }
    return o.length > 0 ? o.concat(i) : i;
}
function ee(e, r = []) {
    let t = e, i = "";
    for(let o = 5; o < e.length; o++){
        let a = e.charCodeAt(o);
        if (a === J || a === X || a === Ce) {
            t = e.slice(0, o), i = e.slice(o);
            break;
        }
    }
    return $(t.trim(), i.trim(), r);
}
function Ae(e, r = e.indexOf(":")) {
    if (r === -1) return null;
    let t = e.indexOf("!important", r + 1);
    return V(e.slice(0, r).trim(), e.slice(r + 1, t === -1 ? e.length : t).trim(), t !== -1);
}
function ct(e, r, t) {
    let i;
    for(let o = r + 1; o < e.length; o++)if (i = e.charCodeAt(o), i === Q) o += 1;
    else {
        if (i === t) return o;
        if (i === fe && (e.charCodeAt(o + 1) === E || e.charCodeAt(o + 1) === ce && e.charCodeAt(o + 2) === E)) throw new Error(`Unterminated string: ${e.slice(r, o + 1) + String.fromCharCode(t)}`);
        if (i === E || i === ce && e.charCodeAt(o + 1) === E) throw new Error(`Unterminated string: ${e.slice(r, o) + String.fromCharCode(t)}`);
    }
    return r;
}
var Te = {
    inherit: "inherit",
    current: "currentcolor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "oklch(98.4% 0.003 247.858)",
        100: "oklch(96.8% 0.007 247.896)",
        200: "oklch(92.9% 0.013 255.508)",
        300: "oklch(86.9% 0.022 252.894)",
        400: "oklch(70.4% 0.04 256.788)",
        500: "oklch(55.4% 0.046 257.417)",
        600: "oklch(44.6% 0.043 257.281)",
        700: "oklch(37.2% 0.044 257.287)",
        800: "oklch(27.9% 0.041 260.031)",
        900: "oklch(20.8% 0.042 265.755)",
        950: "oklch(12.9% 0.042 264.695)"
    },
    gray: {
        50: "oklch(98.5% 0.002 247.839)",
        100: "oklch(96.7% 0.003 264.542)",
        200: "oklch(92.8% 0.006 264.531)",
        300: "oklch(87.2% 0.01 258.338)",
        400: "oklch(70.7% 0.022 261.325)",
        500: "oklch(55.1% 0.027 264.364)",
        600: "oklch(44.6% 0.03 256.802)",
        700: "oklch(37.3% 0.034 259.733)",
        800: "oklch(27.8% 0.033 256.848)",
        900: "oklch(21% 0.034 264.665)",
        950: "oklch(13% 0.028 261.692)"
    },
    zinc: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(96.7% 0.001 286.375)",
        200: "oklch(92% 0.004 286.32)",
        300: "oklch(87.1% 0.006 286.286)",
        400: "oklch(70.5% 0.015 286.067)",
        500: "oklch(55.2% 0.016 285.938)",
        600: "oklch(44.2% 0.017 285.786)",
        700: "oklch(37% 0.013 285.805)",
        800: "oklch(27.4% 0.006 286.033)",
        900: "oklch(21% 0.006 285.885)",
        950: "oklch(14.1% 0.005 285.823)"
    },
    neutral: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(97% 0 0)",
        200: "oklch(92.2% 0 0)",
        300: "oklch(87% 0 0)",
        400: "oklch(70.8% 0 0)",
        500: "oklch(55.6% 0 0)",
        600: "oklch(43.9% 0 0)",
        700: "oklch(37.1% 0 0)",
        800: "oklch(26.9% 0 0)",
        900: "oklch(20.5% 0 0)",
        950: "oklch(14.5% 0 0)"
    },
    stone: {
        50: "oklch(98.5% 0.001 106.423)",
        100: "oklch(97% 0.001 106.424)",
        200: "oklch(92.3% 0.003 48.717)",
        300: "oklch(86.9% 0.005 56.366)",
        400: "oklch(70.9% 0.01 56.259)",
        500: "oklch(55.3% 0.013 58.071)",
        600: "oklch(44.4% 0.011 73.639)",
        700: "oklch(37.4% 0.01 67.558)",
        800: "oklch(26.8% 0.007 34.298)",
        900: "oklch(21.6% 0.006 56.043)",
        950: "oklch(14.7% 0.004 49.25)"
    },
    red: {
        50: "oklch(97.1% 0.013 17.38)",
        100: "oklch(93.6% 0.032 17.717)",
        200: "oklch(88.5% 0.062 18.334)",
        300: "oklch(80.8% 0.114 19.571)",
        400: "oklch(70.4% 0.191 22.216)",
        500: "oklch(63.7% 0.237 25.331)",
        600: "oklch(57.7% 0.245 27.325)",
        700: "oklch(50.5% 0.213 27.518)",
        800: "oklch(44.4% 0.177 26.899)",
        900: "oklch(39.6% 0.141 25.723)",
        950: "oklch(25.8% 0.092 26.042)"
    },
    orange: {
        50: "oklch(98% 0.016 73.684)",
        100: "oklch(95.4% 0.038 75.164)",
        200: "oklch(90.1% 0.076 70.697)",
        300: "oklch(83.7% 0.128 66.29)",
        400: "oklch(75% 0.183 55.934)",
        500: "oklch(70.5% 0.213 47.604)",
        600: "oklch(64.6% 0.222 41.116)",
        700: "oklch(55.3% 0.195 38.402)",
        800: "oklch(47% 0.157 37.304)",
        900: "oklch(40.8% 0.123 38.172)",
        950: "oklch(26.6% 0.079 36.259)"
    },
    amber: {
        50: "oklch(98.7% 0.022 95.277)",
        100: "oklch(96.2% 0.059 95.617)",
        200: "oklch(92.4% 0.12 95.746)",
        300: "oklch(87.9% 0.169 91.605)",
        400: "oklch(82.8% 0.189 84.429)",
        500: "oklch(76.9% 0.188 70.08)",
        600: "oklch(66.6% 0.179 58.318)",
        700: "oklch(55.5% 0.163 48.998)",
        800: "oklch(47.3% 0.137 46.201)",
        900: "oklch(41.4% 0.112 45.904)",
        950: "oklch(27.9% 0.077 45.635)"
    },
    yellow: {
        50: "oklch(98.7% 0.026 102.212)",
        100: "oklch(97.3% 0.071 103.193)",
        200: "oklch(94.5% 0.129 101.54)",
        300: "oklch(90.5% 0.182 98.111)",
        400: "oklch(85.2% 0.199 91.936)",
        500: "oklch(79.5% 0.184 86.047)",
        600: "oklch(68.1% 0.162 75.834)",
        700: "oklch(55.4% 0.135 66.442)",
        800: "oklch(47.6% 0.114 61.907)",
        900: "oklch(42.1% 0.095 57.708)",
        950: "oklch(28.6% 0.066 53.813)"
    },
    lime: {
        50: "oklch(98.6% 0.031 120.757)",
        100: "oklch(96.7% 0.067 122.328)",
        200: "oklch(93.8% 0.127 124.321)",
        300: "oklch(89.7% 0.196 126.665)",
        400: "oklch(84.1% 0.238 128.85)",
        500: "oklch(76.8% 0.233 130.85)",
        600: "oklch(64.8% 0.2 131.684)",
        700: "oklch(53.2% 0.157 131.589)",
        800: "oklch(45.3% 0.124 130.933)",
        900: "oklch(40.5% 0.101 131.063)",
        950: "oklch(27.4% 0.072 132.109)"
    },
    green: {
        50: "oklch(98.2% 0.018 155.826)",
        100: "oklch(96.2% 0.044 156.743)",
        200: "oklch(92.5% 0.084 155.995)",
        300: "oklch(87.1% 0.15 154.449)",
        400: "oklch(79.2% 0.209 151.711)",
        500: "oklch(72.3% 0.219 149.579)",
        600: "oklch(62.7% 0.194 149.214)",
        700: "oklch(52.7% 0.154 150.069)",
        800: "oklch(44.8% 0.119 151.328)",
        900: "oklch(39.3% 0.095 152.535)",
        950: "oklch(26.6% 0.065 152.934)"
    },
    emerald: {
        50: "oklch(97.9% 0.021 166.113)",
        100: "oklch(95% 0.052 163.051)",
        200: "oklch(90.5% 0.093 164.15)",
        300: "oklch(84.5% 0.143 164.978)",
        400: "oklch(76.5% 0.177 163.223)",
        500: "oklch(69.6% 0.17 162.48)",
        600: "oklch(59.6% 0.145 163.225)",
        700: "oklch(50.8% 0.118 165.612)",
        800: "oklch(43.2% 0.095 166.913)",
        900: "oklch(37.8% 0.077 168.94)",
        950: "oklch(26.2% 0.051 172.552)"
    },
    teal: {
        50: "oklch(98.4% 0.014 180.72)",
        100: "oklch(95.3% 0.051 180.801)",
        200: "oklch(91% 0.096 180.426)",
        300: "oklch(85.5% 0.138 181.071)",
        400: "oklch(77.7% 0.152 181.912)",
        500: "oklch(70.4% 0.14 182.503)",
        600: "oklch(60% 0.118 184.704)",
        700: "oklch(51.1% 0.096 186.391)",
        800: "oklch(43.7% 0.078 188.216)",
        900: "oklch(38.6% 0.063 188.416)",
        950: "oklch(27.7% 0.046 192.524)"
    },
    cyan: {
        50: "oklch(98.4% 0.019 200.873)",
        100: "oklch(95.6% 0.045 203.388)",
        200: "oklch(91.7% 0.08 205.041)",
        300: "oklch(86.5% 0.127 207.078)",
        400: "oklch(78.9% 0.154 211.53)",
        500: "oklch(71.5% 0.143 215.221)",
        600: "oklch(60.9% 0.126 221.723)",
        700: "oklch(52% 0.105 223.128)",
        800: "oklch(45% 0.085 224.283)",
        900: "oklch(39.8% 0.07 227.392)",
        950: "oklch(30.2% 0.056 229.695)"
    },
    sky: {
        50: "oklch(97.7% 0.013 236.62)",
        100: "oklch(95.1% 0.026 236.824)",
        200: "oklch(90.1% 0.058 230.902)",
        300: "oklch(82.8% 0.111 230.318)",
        400: "oklch(74.6% 0.16 232.661)",
        500: "oklch(68.5% 0.169 237.323)",
        600: "oklch(58.8% 0.158 241.966)",
        700: "oklch(50% 0.134 242.749)",
        800: "oklch(44.3% 0.11 240.79)",
        900: "oklch(39.1% 0.09 240.876)",
        950: "oklch(29.3% 0.066 243.157)"
    },
    blue: {
        50: "oklch(97% 0.014 254.604)",
        100: "oklch(93.2% 0.032 255.585)",
        200: "oklch(88.2% 0.059 254.128)",
        300: "oklch(80.9% 0.105 251.813)",
        400: "oklch(70.7% 0.165 254.624)",
        500: "oklch(62.3% 0.214 259.815)",
        600: "oklch(54.6% 0.245 262.881)",
        700: "oklch(48.8% 0.243 264.376)",
        800: "oklch(42.4% 0.199 265.638)",
        900: "oklch(37.9% 0.146 265.522)",
        950: "oklch(28.2% 0.091 267.935)"
    },
    indigo: {
        50: "oklch(96.2% 0.018 272.314)",
        100: "oklch(93% 0.034 272.788)",
        200: "oklch(87% 0.065 274.039)",
        300: "oklch(78.5% 0.115 274.713)",
        400: "oklch(67.3% 0.182 276.935)",
        500: "oklch(58.5% 0.233 277.117)",
        600: "oklch(51.1% 0.262 276.966)",
        700: "oklch(45.7% 0.24 277.023)",
        800: "oklch(39.8% 0.195 277.366)",
        900: "oklch(35.9% 0.144 278.697)",
        950: "oklch(25.7% 0.09 281.288)"
    },
    violet: {
        50: "oklch(96.9% 0.016 293.756)",
        100: "oklch(94.3% 0.029 294.588)",
        200: "oklch(89.4% 0.057 293.283)",
        300: "oklch(81.1% 0.111 293.571)",
        400: "oklch(70.2% 0.183 293.541)",
        500: "oklch(60.6% 0.25 292.717)",
        600: "oklch(54.1% 0.281 293.009)",
        700: "oklch(49.1% 0.27 292.581)",
        800: "oklch(43.2% 0.232 292.759)",
        900: "oklch(38% 0.189 293.745)",
        950: "oklch(28.3% 0.141 291.089)"
    },
    purple: {
        50: "oklch(97.7% 0.014 308.299)",
        100: "oklch(94.6% 0.033 307.174)",
        200: "oklch(90.2% 0.063 306.703)",
        300: "oklch(82.7% 0.119 306.383)",
        400: "oklch(71.4% 0.203 305.504)",
        500: "oklch(62.7% 0.265 303.9)",
        600: "oklch(55.8% 0.288 302.321)",
        700: "oklch(49.6% 0.265 301.924)",
        800: "oklch(43.8% 0.218 303.724)",
        900: "oklch(38.1% 0.176 304.987)",
        950: "oklch(29.1% 0.149 302.717)"
    },
    fuchsia: {
        50: "oklch(97.7% 0.017 320.058)",
        100: "oklch(95.2% 0.037 318.852)",
        200: "oklch(90.3% 0.076 319.62)",
        300: "oklch(83.3% 0.145 321.434)",
        400: "oklch(74% 0.238 322.16)",
        500: "oklch(66.7% 0.295 322.15)",
        600: "oklch(59.1% 0.293 322.896)",
        700: "oklch(51.8% 0.253 323.949)",
        800: "oklch(45.2% 0.211 324.591)",
        900: "oklch(40.1% 0.17 325.612)",
        950: "oklch(29.3% 0.136 325.661)"
    },
    pink: {
        50: "oklch(97.1% 0.014 343.198)",
        100: "oklch(94.8% 0.028 342.258)",
        200: "oklch(89.9% 0.061 343.231)",
        300: "oklch(82.3% 0.12 346.018)",
        400: "oklch(71.8% 0.202 349.761)",
        500: "oklch(65.6% 0.241 354.308)",
        600: "oklch(59.2% 0.249 0.584)",
        700: "oklch(52.5% 0.223 3.958)",
        800: "oklch(45.9% 0.187 3.815)",
        900: "oklch(40.8% 0.153 2.432)",
        950: "oklch(28.4% 0.109 3.907)"
    },
    rose: {
        50: "oklch(96.9% 0.015 12.422)",
        100: "oklch(94.1% 0.03 12.58)",
        200: "oklch(89.2% 0.058 10.001)",
        300: "oklch(81% 0.117 11.638)",
        400: "oklch(71.2% 0.194 13.428)",
        500: "oklch(64.5% 0.246 16.439)",
        600: "oklch(58.6% 0.253 17.585)",
        700: "oklch(51.4% 0.222 16.935)",
        800: "oklch(45.5% 0.188 13.697)",
        900: "oklch(41% 0.159 10.272)",
        950: "oklch(27.1% 0.105 12.094)"
    }
};
function M(e) {
    return {
        __BARE_VALUE__: e
    };
}
var N = M((e)=>{
    if (C(e.value)) return e.value;
}), b = M((e)=>{
    if (C(e.value)) return `${e.value}%`;
}), I = M((e)=>{
    if (C(e.value)) return `${e.value}px`;
}), dt = M((e)=>{
    if (C(e.value)) return `${e.value}ms`;
}), pe = M((e)=>{
    if (C(e.value)) return `${e.value}deg`;
}), Rr = M((e)=>{
    if (e.fraction === null) return;
    let [r, t] = y(e.fraction, "/");
    if (!(!C(r) || !C(t))) return e.fraction;
}), mt = M((e)=>{
    if (C(Number(e.value))) return `repeat(${e.value}, minmax(0, 1fr))`;
}), Or = {
    accentColor: ({ theme: e })=>e("colors"),
    animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite"
    },
    aria: {
        busy: 'busy="true"',
        checked: 'checked="true"',
        disabled: 'disabled="true"',
        expanded: 'expanded="true"',
        hidden: 'hidden="true"',
        pressed: 'pressed="true"',
        readonly: 'readonly="true"',
        required: 'required="true"',
        selected: 'selected="true"'
    },
    aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        ...Rr
    },
    backdropBlur: ({ theme: e })=>e("blur"),
    backdropBrightness: ({ theme: e })=>({
            ...e("brightness"),
            ...b
        }),
    backdropContrast: ({ theme: e })=>({
            ...e("contrast"),
            ...b
        }),
    backdropGrayscale: ({ theme: e })=>({
            ...e("grayscale"),
            ...b
        }),
    backdropHueRotate: ({ theme: e })=>({
            ...e("hueRotate"),
            ...pe
        }),
    backdropInvert: ({ theme: e })=>({
            ...e("invert"),
            ...b
        }),
    backdropOpacity: ({ theme: e })=>({
            ...e("opacity"),
            ...b
        }),
    backdropSaturate: ({ theme: e })=>({
            ...e("saturate"),
            ...b
        }),
    backdropSepia: ({ theme: e })=>({
            ...e("sepia"),
            ...b
        }),
    backgroundColor: ({ theme: e })=>e("colors"),
    backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: ({ theme: e })=>e("opacity"),
    backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
    },
    backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain"
    },
    blur: {
        0: "0",
        none: "",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px"
    },
    borderColor: ({ theme: e })=>({
            DEFAULT: "currentcolor",
            ...e("colors")
        }),
    borderOpacity: ({ theme: e })=>e("opacity"),
    borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px"
    },
    borderSpacing: ({ theme: e })=>e("spacing"),
    borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...I
    },
    boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none"
    },
    boxShadowColor: ({ theme: e })=>e("colors"),
    brightness: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...b
    },
    caretColor: ({ theme: e })=>e("colors"),
    colors: ()=>({
            ...Te
        }),
    columns: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        "3xs": "16rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        ...N
    },
    container: {},
    content: {
        none: "none"
    },
    contrast: {
        0: "0",
        50: ".5",
        75: ".75",
        100: "1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...b
    },
    cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        help: "help",
        "not-allowed": "not-allowed",
        none: "none",
        "context-menu": "context-menu",
        progress: "progress",
        cell: "cell",
        crosshair: "crosshair",
        "vertical-text": "vertical-text",
        alias: "alias",
        copy: "copy",
        "no-drop": "no-drop",
        grab: "grab",
        grabbing: "grabbing",
        "all-scroll": "all-scroll",
        "col-resize": "col-resize",
        "row-resize": "row-resize",
        "n-resize": "n-resize",
        "e-resize": "e-resize",
        "s-resize": "s-resize",
        "w-resize": "w-resize",
        "ne-resize": "ne-resize",
        "nw-resize": "nw-resize",
        "se-resize": "se-resize",
        "sw-resize": "sw-resize",
        "ew-resize": "ew-resize",
        "ns-resize": "ns-resize",
        "nesw-resize": "nesw-resize",
        "nwse-resize": "nwse-resize",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out"
    },
    divideColor: ({ theme: e })=>e("borderColor"),
    divideOpacity: ({ theme: e })=>e("borderOpacity"),
    divideWidth: ({ theme: e })=>({
            ...e("borderWidth"),
            ...I
        }),
    dropShadow: {
        sm: "0 1px 1px rgb(0 0 0 / 0.05)",
        DEFAULT: [
            "0 1px 2px rgb(0 0 0 / 0.1)",
            "0 1px 1px rgb(0 0 0 / 0.06)"
        ],
        md: [
            "0 4px 3px rgb(0 0 0 / 0.07)",
            "0 2px 2px rgb(0 0 0 / 0.06)"
        ],
        lg: [
            "0 10px 8px rgb(0 0 0 / 0.04)",
            "0 4px 3px rgb(0 0 0 / 0.1)"
        ],
        xl: [
            "0 20px 13px rgb(0 0 0 / 0.03)",
            "0 8px 5px rgb(0 0 0 / 0.08)"
        ],
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        none: "0 0 #0000"
    },
    fill: ({ theme: e })=>e("colors"),
    flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none"
    },
    flexBasis: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            ...e("spacing")
        }),
    flexGrow: {
        0: "0",
        DEFAULT: "1",
        ...N
    },
    flexShrink: {
        0: "0",
        DEFAULT: "1",
        ...N
    },
    fontFamily: {
        sans: [
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
        ],
        serif: [
            "ui-serif",
            "Georgia",
            "Cambria",
            '"Times New Roman"',
            "Times",
            "serif"
        ],
        mono: [
            "ui-monospace",
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            '"Liberation Mono"',
            '"Courier New"',
            "monospace"
        ]
    },
    fontSize: {
        xs: [
            "0.75rem",
            {
                lineHeight: "1rem"
            }
        ],
        sm: [
            "0.875rem",
            {
                lineHeight: "1.25rem"
            }
        ],
        base: [
            "1rem",
            {
                lineHeight: "1.5rem"
            }
        ],
        lg: [
            "1.125rem",
            {
                lineHeight: "1.75rem"
            }
        ],
        xl: [
            "1.25rem",
            {
                lineHeight: "1.75rem"
            }
        ],
        "2xl": [
            "1.5rem",
            {
                lineHeight: "2rem"
            }
        ],
        "3xl": [
            "1.875rem",
            {
                lineHeight: "2.25rem"
            }
        ],
        "4xl": [
            "2.25rem",
            {
                lineHeight: "2.5rem"
            }
        ],
        "5xl": [
            "3rem",
            {
                lineHeight: "1"
            }
        ],
        "6xl": [
            "3.75rem",
            {
                lineHeight: "1"
            }
        ],
        "7xl": [
            "4.5rem",
            {
                lineHeight: "1"
            }
        ],
        "8xl": [
            "6rem",
            {
                lineHeight: "1"
            }
        ],
        "9xl": [
            "8rem",
            {
                lineHeight: "1"
            }
        ]
    },
    fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
    },
    gap: ({ theme: e })=>e("spacing"),
    gradientColorStops: ({ theme: e })=>e("colors"),
    gradientColorStopPositions: {
        "0%": "0%",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        "100%": "100%",
        ...b
    },
    grayscale: {
        0: "0",
        DEFAULT: "100%",
        ...b
    },
    gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)"
    },
    gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1"
    },
    gridColumnEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...N
    },
    gridColumnStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...N
    },
    gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1"
    },
    gridRowEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...N
    },
    gridRowStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...N
    },
    gridTemplateColumns: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...mt
    },
    gridTemplateRows: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...mt
    },
    height: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
        ...pe
    },
    inset: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            ...e("spacing")
        }),
    invert: {
        0: "0",
        DEFAULT: "100%",
        ...b
    },
    keyframes: {
        spin: {
            to: {
                transform: "rotate(360deg)"
            }
        },
        ping: {
            "75%, 100%": {
                transform: "scale(2)",
                opacity: "0"
            }
        },
        pulse: {
            "50%": {
                opacity: ".5"
            }
        },
        bounce: {
            "0%, 100%": {
                transform: "translateY(-25%)",
                animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
            },
            "50%": {
                transform: "none",
                animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
            }
        }
    },
    letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em"
    },
    lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem"
    },
    listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal"
    },
    listStyleImage: {
        none: "none"
    },
    margin: ({ theme: e })=>({
            auto: "auto",
            ...e("spacing")
        }),
    lineClamp: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        ...N
    },
    maxHeight: ({ theme: e })=>({
            none: "none",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    maxWidth: ({ theme: e })=>({
            none: "none",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            prose: "65ch",
            ...e("spacing")
        }),
    minHeight: ({ theme: e })=>({
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    minWidth: ({ theme: e })=>({
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
    },
    opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1",
        ...b
    },
    order: {
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        ...N
    },
    outlineColor: ({ theme: e })=>e("colors"),
    outlineOffset: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...I
    },
    outlineWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...I
    },
    padding: ({ theme: e })=>e("spacing"),
    placeholderColor: ({ theme: e })=>e("colors"),
    placeholderOpacity: ({ theme: e })=>e("opacity"),
    ringColor: ({ theme: e })=>({
            DEFAULT: "currentcolor",
            ...e("colors")
        }),
    ringOffsetColor: ({ theme: e })=>e("colors"),
    ringOffsetWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...I
    },
    ringOpacity: ({ theme: e })=>({
            DEFAULT: "0.5",
            ...e("opacity")
        }),
    ringWidth: {
        DEFAULT: "3px",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...I
    },
    rotate: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
        ...pe
    },
    saturate: {
        0: "0",
        50: ".5",
        100: "1",
        150: "1.5",
        200: "2",
        ...b
    },
    scale: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        ...b
    },
    screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem"
    },
    scrollMargin: ({ theme: e })=>e("spacing"),
    scrollPadding: ({ theme: e })=>e("spacing"),
    sepia: {
        0: "0",
        DEFAULT: "100%",
        ...b
    },
    skew: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        ...pe
    },
    space: ({ theme: e })=>e("spacing"),
    spacing: {
        px: "1px",
        0: "0px",
        .5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem"
    },
    stroke: ({ theme: e })=>({
            none: "none",
            ...e("colors")
        }),
    strokeWidth: {
        0: "0",
        1: "1",
        2: "2",
        ...N
    },
    supports: {},
    data: {},
    textColor: ({ theme: e })=>e("colors"),
    textDecorationColor: ({ theme: e })=>e("colors"),
    textDecorationThickness: {
        auto: "auto",
        "from-font": "from-font",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...I
    },
    textIndent: ({ theme: e })=>e("spacing"),
    textOpacity: ({ theme: e })=>e("opacity"),
    textUnderlineOffset: {
        auto: "auto",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...I
    },
    transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left"
    },
    transitionDelay: {
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...dt
    },
    transitionDuration: {
        DEFAULT: "150ms",
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...dt
    },
    transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform"
    },
    transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: ({ theme: e })=>({
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            ...e("spacing")
        }),
    size: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    width: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw",
            svw: "100svw",
            lvw: "100lvw",
            dvw: "100dvw",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    willChange: {
        auto: "auto",
        scroll: "scroll-position",
        contents: "contents",
        transform: "transform"
    },
    zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        ...N
    }
};
var _r = 64;
function L(e, r = []) {
    return {
        kind: "rule",
        selector: e,
        nodes: r
    };
}
function $(e, r = "", t = []) {
    return {
        kind: "at-rule",
        name: e,
        params: r,
        nodes: t
    };
}
function _(e, r = []) {
    return e.charCodeAt(0) === _r ? ee(e, r) : L(e, r);
}
function V(e, r, t = !1) {
    return {
        kind: "declaration",
        property: e,
        value: r,
        important: t
    };
}
function $e(e) {
    return {
        kind: "comment",
        value: e
    };
}
function z(e, r) {
    let t = 0, i = {
        file: null,
        code: ""
    };
    function o(n, s = 0) {
        let l = "", u = "  ".repeat(s);
        if (n.kind === "declaration") {
            if (l += `${u}${n.property}: ${n.value}${n.important ? " !important" : ""};
`, r) {
                t += u.length;
                let p = t;
                t += n.property.length, t += 2, t += n.value?.length ?? 0, n.important && (t += 11);
                let c = t;
                t += 2, n.dst = [
                    i,
                    p,
                    c
                ];
            }
        } else if (n.kind === "rule") {
            if (l += `${u}${n.selector} {
`, r) {
                t += u.length;
                let p = t;
                t += n.selector.length, t += 1;
                let c = t;
                n.dst = [
                    i,
                    p,
                    c
                ], t += 2;
            }
            for (let p of n.nodes)l += o(p, s + 1);
            l += `${u}}
`, r && (t += u.length, t += 2);
        } else if (n.kind === "at-rule") {
            if (n.nodes.length === 0) {
                let p = `${u}${n.name} ${n.params};
`;
                if (r) {
                    t += u.length;
                    let c = t;
                    t += n.name.length, t += 1, t += n.params.length;
                    let f = t;
                    t += 2, n.dst = [
                        i,
                        c,
                        f
                    ];
                }
                return p;
            }
            if (l += `${u}${n.name}${n.params ? ` ${n.params} ` : " "}{
`, r) {
                t += u.length;
                let p = t;
                t += n.name.length, n.params && (t += 1, t += n.params.length), t += 1;
                let c = t;
                n.dst = [
                    i,
                    p,
                    c
                ], t += 2;
            }
            for (let p of n.nodes)l += o(p, s + 1);
            l += `${u}}
`, r && (t += u.length, t += 2);
        } else if (n.kind === "comment") {
            if (l += `${u}/*${n.value}*/
`, r) {
                t += u.length;
                let p = t;
                t += 2 + n.value.length + 2;
                let c = t;
                n.dst = [
                    i,
                    p,
                    c
                ], t += 1;
            }
        } else if (n.kind === "context" || n.kind === "at-root") return "";
        return l;
    }
    let a = "";
    for (let n of e)a += o(n, 0);
    return i.code = a, a;
}
function Ir(e, r) {
    if (typeof e != "string") throw new TypeError("expected path to be a string");
    if (e === "\\" || e === "/") return "/";
    var t = e.length;
    if (t <= 1) return e;
    var i = "";
    if (t > 4 && e[3] === "\\") {
        var o = e[2];
        (o === "?" || o === ".") && e.slice(0, 2) === "\\\\" && (e = e.slice(2), i = "//");
    }
    var a = e.split(/[/\\]+/);
    return r !== !1 && a[a.length - 1] === "" && a.pop(), i + a.join("/");
}
function de(e) {
    let r = Ir(e);
    return e.startsWith("\\\\") && r.startsWith("/") && !r.startsWith("//") ? `/${r}` : r;
}
var Ne = /(?<!@import\s+)(?<=^|[^\w\-\u0080-\uffff])url\((\s*('[^']+'|"[^"]+")\s*|[^'")]+)\)/, gt = /(?<=image-set\()((?:[\w-]{1,256}\([^)]*\)|[^)])*)(?=\))/, Dr = /(?:gradient|element|cross-fade|image)\(/, Ur = /^\s*data:/i, Lr = /^([a-z]+:)?\/\//, Kr = /^[A-Z_][.\w-]*\(/i, zr = /(?:^|\s)(?<url>[\w-]+\([^)]*\)|"[^"]*"|'[^']*'|[^,]\S*[^,])\s*(?:\s(?<descriptor>\w[^,]+))?(?:,|$)/g, Mr = /(?<!\\)"/g, Fr = /(?: |\\t|\\n|\\f|\\r)+/g, jr = (e)=>Ur.test(e), Wr = (e)=>Lr.test(e);
async function ht({ css: e, base: r, root: t }) {
    if (!e.includes("url(") && !e.includes("image-set(")) return e;
    let i = te(e), o = [];
    function a(n) {
        if (n[0] === "/") return n;
        let s = Ee.posix.join(de(r), n), l = Ee.posix.relative(de(t), s);
        return l.startsWith(".") || (l = "./" + l), l;
    }
    return v(i, (n)=>{
        if (n.kind !== "declaration" || !n.value) return;
        let s = Ne.test(n.value), l = gt.test(n.value);
        if (s || l) {
            let u = l ? Br : vt;
            o.push(u(n.value, a).then((p)=>{
                n.value = p;
            }));
        }
    }), o.length && await Promise.all(o), z(i);
}
function vt(e, r) {
    return yt(e, Ne, async (t)=>{
        let [i, o] = t;
        return await wt(o.trim(), i, r);
    });
}
async function Br(e, r) {
    return await yt(e, gt, async (t)=>{
        let [, i] = t;
        return await Gr(i, async ({ url: a })=>Ne.test(a) ? await vt(a, r) : Dr.test(a) ? a : await wt(a, a, r));
    });
}
async function wt(e, r, t, i = "url") {
    let o = "", a = e[0];
    if ((a === '"' || a === "'") && (o = a, e = e.slice(1, -1)), Yr(e)) return r;
    let n = await t(e);
    return o === "" && n !== encodeURI(n) && (o = '"'), o === "'" && n.includes("'") && (o = '"'), o === '"' && n.includes('"') && (n = n.replace(Mr, '\\"')), `${i}(${o}${n}${o})`;
}
function Yr(e, r) {
    return Wr(e) || jr(e) || !e[0].match(/[\.a-zA-Z0-9_]/) || Kr.test(e);
}
function Gr(e, r) {
    return Promise.all(qr(e).map(async ({ url: t, descriptor: i })=>({
            url: await r({
                url: t,
                descriptor: i
            }),
            descriptor: i
        }))).then(Hr);
}
function qr(e) {
    let r = e.trim().replace(Fr, " ").replace(/\r?\n/, "").replace(/,\s+/, ", ").replaceAll(/\s+/g, " ").matchAll(zr);
    return Array.from(r, ({ groups: t })=>({
            url: t?.url?.trim() ?? "",
            descriptor: t?.descriptor?.trim() ?? ""
        })).filter(({ url: t })=>!!t);
}
function Hr(e) {
    return e.map(({ url: r, descriptor: t })=>r + (t ? ` ${t}` : "")).join(", ");
}
async function yt(e, r, t) {
    let i, o = e, a = "";
    for(; i = r.exec(o);)a += o.slice(0, i.index), a += await t(i), o = o.slice(i.index + i[0].length);
    return a += o, a;
}
var ii = {};
function Ct({ base: e, from: r, polyfills: t, onDependency: i, shouldRewriteUrls: o, customCssResolver: a, customJsResolver: n }) {
    return {
        base: e,
        polyfills: t,
        from: r,
        async loadModule (s, l) {
            return Pe(s, l, i, n);
        },
        async loadStylesheet (s, l) {
            let u = await $t(s, l, i, a);
            return o && (u.content = await ht({
                css: u.content,
                root: e,
                base: u.base
            })), u;
        }
    };
}
async function St(e, r) {
    if (e.root && e.root !== "none") {
        let t = /[*{]/, i = [];
        for (let a of e.root.pattern.split("/")){
            if (t.test(a)) break;
            i.push(a);
        }
        if (!await Oe.default.stat(Y.default.resolve(r, i.join("/"))).then((a)=>a.isDirectory()).catch(()=>!1)) throw new Error(`The \`source(${e.root.pattern})\` does not exist`);
    }
}
async function Zr(e, r) {
    let t = await (0, R.compileAst)(e, Ct(r));
    return await St(t, r.base), t;
}
async function Qr(e, r) {
    let t = await (0, R.compile)(e, Ct(r));
    return await St(t, r.base), t;
}
async function Jr(e, { base: r }) {
    return (0, R.__unstable__loadDesignSystem)(e, {
        base: r,
        async loadModule (t, i) {
            return Pe(t, i, ()=>{});
        },
        async loadStylesheet (t, i) {
            return $t(t, i, ()=>{});
        }
    });
}
async function Pe(e, r, t, i) {
    if (e[0] !== ".") {
        let s = await xt(e, r, i);
        if (!s) throw new Error(`Could not resolve '${e}' from '${r}'`);
        let l = await bt((0, Ve.pathToFileURL)(s).href);
        return {
            path: s,
            base: Y.default.dirname(s),
            module: l.default ?? l
        };
    }
    let o = await xt(e, r, i);
    if (!o) throw new Error(`Could not resolve '${e}' from '${r}'`);
    let [a, n] = await Promise.all([
        bt((0, Ve.pathToFileURL)(o).href + "?id=" + Date.now()),
        Ke(o)
    ]);
    for (let s of n)t(s);
    return {
        path: o,
        base: Y.default.dirname(o),
        module: a.default ?? a
    };
}
async function $t(e, r, t, i) {
    let o = await ei(e, r, i);
    if (!o) throw new Error(`Could not resolve '${e}' from '${r}'`);
    if (t(o), typeof globalThis.__tw_readFile == "function") {
        let n = await globalThis.__tw_readFile(o, "utf-8");
        if (n) return {
            path: o,
            base: Y.default.dirname(o),
            content: n
        };
    }
    let a = await Oe.default.readFile(o, "utf-8");
    return {
        path: o,
        base: Y.default.dirname(o),
        content: a
    };
}
var kt = null;
async function bt(e) {
    if (typeof globalThis.__tw_load == "function") {
        let r = await globalThis.__tw_load(e);
        if (r) return r;
    }
    try {
        return await Promise.resolve().then(()=>{
            const e = new Error("Cannot find module as expression is too dynamic");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        });
    } catch  {
        return kt ??= (0, At.createJiti)(ii.url, {
            moduleCache: !1,
            fsCache: !1
        }), await kt.import(e);
    }
}
var _e = [
    "node_modules",
    ...process.env.NODE_PATH ? [
        process.env.NODE_PATH
    ] : []
], Xr = F.default.ResolverFactory.createResolver({
    fileSystem: new F.default.CachedInputFileSystem(me.default, 4e3),
    useSyncFileSystemCalls: !0,
    extensions: [
        ".css"
    ],
    mainFields: [
        "style"
    ],
    conditionNames: [
        "style"
    ],
    modules: _e
});
async function ei(e, r, t) {
    if (typeof globalThis.__tw_resolve == "function") {
        let i = globalThis.__tw_resolve(e, r);
        if (i) return Promise.resolve(i);
    }
    if (t) {
        let i = await t(e, r);
        if (i) return i;
    }
    return Re(Xr, e, r);
}
var ti = F.default.ResolverFactory.createResolver({
    fileSystem: new F.default.CachedInputFileSystem(me.default, 4e3),
    useSyncFileSystemCalls: !0,
    extensions: [
        ".js",
        ".json",
        ".node",
        ".ts"
    ],
    conditionNames: [
        "node",
        "import"
    ],
    modules: _e
}), ri = F.default.ResolverFactory.createResolver({
    fileSystem: new F.default.CachedInputFileSystem(me.default, 4e3),
    useSyncFileSystemCalls: !0,
    extensions: [
        ".js",
        ".json",
        ".node",
        ".ts"
    ],
    conditionNames: [
        "node",
        "require"
    ],
    modules: _e
});
async function xt(e, r, t) {
    if (typeof globalThis.__tw_resolve == "function") {
        let i = globalThis.__tw_resolve(e, r);
        if (i) return Promise.resolve(i);
    }
    if (t) {
        let i = await t(e, r);
        if (i) return i;
    }
    return Re(ti, e, r).catch(()=>Re(ri, e, r));
}
function Re(e, r, t) {
    return new Promise((i, o)=>e.resolve({}, t, r, {}, (a, n)=>{
            if (a) return o(a);
            i(n);
        }));
}
Symbol.dispose ??= Symbol("Symbol.dispose");
Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose");
var Ie = class {
    constructor(r = (t)=>void process.stderr.write(`${t}
`)){
        this.defaultFlush = r;
    }
    #r = new g(()=>({
            value: 0
        }));
    #t = new g(()=>({
            value: 0n
        }));
    #e = [];
    hit(r) {
        this.#r.get(r).value++;
    }
    start(r) {
        let t = this.#e.map((o)=>o.label).join("//"), i = `${t}${t.length === 0 ? "" : "//"}${r}`;
        this.#r.get(i).value++, this.#t.get(i), this.#e.push({
            id: i,
            label: r,
            namespace: t,
            value: process.hrtime.bigint()
        });
    }
    end(r) {
        let t = process.hrtime.bigint();
        if (this.#e[this.#e.length - 1].label !== r) throw new Error(`Mismatched timer label: \`${r}\`, expected \`${this.#e[this.#e.length - 1].label}\``);
        let i = this.#e.pop(), o = t - i.value;
        this.#t.get(i.id).value += o;
    }
    reset() {
        this.#r.clear(), this.#t.clear(), this.#e.splice(0);
    }
    report(r = this.defaultFlush) {
        let t = [], i = !1;
        for(let n = this.#e.length - 1; n >= 0; n--)this.end(this.#e[n].label);
        for (let [n, { value: s }] of this.#r.entries()){
            if (this.#t.has(n)) continue;
            t.length === 0 && (i = !0, t.push("Hits:"));
            let l = n.split("//").length;
            t.push(`${"  ".repeat(l)}${n} ${ge(Tt(`\xD7 ${s}`))}`);
        }
        this.#t.size > 0 && i && t.push(`
Timers:`);
        let o = -1 / 0, a = new Map;
        for (let [n, { value: s }] of this.#t){
            let l = `${(Number(s) / 1e6).toFixed(2)}ms`;
            a.set(n, l), o = Math.max(o, l.length);
        }
        for (let n of this.#t.keys()){
            let s = n.split("//").length;
            t.push(`${ge(`[${a.get(n).padStart(o, " ")}]`)}${"  ".repeat(s - 1)}${s === 1 ? " " : ge(" \u21B3 ")}${n.split("//").pop()} ${this.#r.get(n).value === 1 ? "" : ge(Tt(`\xD7 ${this.#r.get(n).value}`))}`.trimEnd());
        }
        r(`
${t.join(`
`)}
`), this.reset();
    }
    [Symbol.dispose]() {
        he && this.report();
    }
};
function ge(e) {
    return `\x1B[2m${e}\x1B[22m`;
}
function Tt(e) {
    return `\x1B[34m${e}\x1B[39m`;
}
var Et = T(__turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/remapping/dist/remapping.umd.js [postcss] (ecmascript)")), D = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/lightningcss/node/index.js [postcss] (ecmascript)"), Nt = T(__turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/magic-string/dist/magic-string.cjs.js [postcss] (ecmascript)"));
function ni(e, { file: r = "input.css", minify: t = !1, map: i } = {}) {
    function o(l, u) {
        return (0, D.transform)({
            filename: r,
            code: l,
            minify: t,
            sourceMap: typeof u < "u",
            inputSourceMap: u,
            drafts: {
                customMedia: !0
            },
            nonStandard: {
                deepSelectorCombinator: !0
            },
            include: D.Features.Nesting | D.Features.MediaQueries,
            exclude: D.Features.LogicalProperties | D.Features.DirSelector | D.Features.LightDark,
            targets: {
                safari: 16 << 16 | 1024,
                ios_saf: 16 << 16 | 1024,
                firefox: 8388608,
                chrome: 7274496
            },
            errorRecovery: !0
        });
    }
    let a = o(Buffer.from(e), i);
    if (i = a.map?.toString(), a.warnings = a.warnings.filter((l)=>!/'(deep|slotted|global)' is not recognized as a valid pseudo-/.test(l.message)), a.warnings.length > 0) {
        let l = e.split(`
`), u = [
            `Found ${a.warnings.length} ${a.warnings.length === 1 ? "warning" : "warnings"} while optimizing generated CSS:`
        ];
        for (let [p, c] of a.warnings.entries()){
            u.push(""), a.warnings.length > 1 && u.push(`Issue #${p + 1}:`);
            let f = 2, m = Math.max(0, c.loc.line - f - 1), d = Math.min(l.length, c.loc.line + f), x = l.slice(m, d).map((h, U)=>m + U + 1 === c.loc.line ? `${re("\u2502")} ${h}` : re(`\u2502 ${h}`));
            x.splice(c.loc.line - m, 0, `${re("\u2506")}${" ".repeat(c.loc.column - 1)} ${oi(`${re("^--")} ${c.message}`)}`, `${re("\u2506")}`), u.push(...x);
        }
        u.push(""), console.warn(u.join(`
`));
    }
    a = o(a.code, i), i = a.map?.toString();
    let n = a.code.toString(), s = new Nt.default(n);
    if (s.replaceAll("@media not (", "@media not all and ("), i !== void 0 && s.hasChanged()) {
        let l = s.generateMap({
            source: "original",
            hires: "boundary"
        }).toString();
        i = (0, Et.default)([
            l,
            i
        ], ()=>null).toString();
    }
    return n = s.toString(), {
        code: n,
        map: i
    };
}
function re(e) {
    return `\x1B[2m${e}\x1B[22m`;
}
function oi(e) {
    return `\x1B[33m${e}\x1B[39m`;
}
var Vt = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/source-map-js/source-map.js [postcss] (ecmascript)");
function ai(e) {
    let r = new Vt.SourceMapGenerator, t = 1, i = new g((o)=>({
            url: o?.url ?? `<unknown ${t++}>`,
            content: o?.content ?? "<none>"
        }));
    for (let o of e.mappings){
        let a = i.get(o.originalPosition?.source ?? null);
        r.addMapping({
            generated: o.generatedPosition,
            original: o.originalPosition,
            source: a.url,
            name: o.name
        }), r.setSourceContent(a.url, a.content);
    }
    return r.toString();
}
function li(e) {
    let r = typeof e == "string" ? e : ai(e);
    return {
        raw: r,
        get inline () {
            let t = "";
            return t += "/*# sourceMappingURL=data:application/json;base64,", t += Buffer.from(r, "utf-8").toString("base64"), t += ` */
`, t;
        }
    };
}
process.versions.bun || Rt.register?.((0, Ot.pathToFileURL)("[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/node/dist/esm-cache.loader.mjs [postcss] (ecmascript)"));
0 && (module.exports = {
    Features,
    Instrumentation,
    Polyfills,
    __unstable__loadDesignSystem,
    compile,
    compileAst,
    env,
    loadModule,
    normalizePath,
    optimize,
    toSourceMap
});
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/node/dist/require-cache.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var i = Object.defineProperty;
var a = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var l = Object.prototype.hasOwnProperty;
var n = (r, e)=>{
    for(var t in e)i(r, t, {
        get: e[t],
        enumerable: !0
    });
}, u = (r, e, t, o)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let c of f(e))!l.call(r, c) && c !== t && i(r, c, {
        get: ()=>e[c],
        enumerable: !(o = a(e, c)) || o.enumerable
    });
    return r;
};
var h = (r)=>u(i({}, "__esModule", {
        value: !0
    }), r);
var d = {};
n(d, {
    clearRequireCache: ()=>q
});
module.exports = h(d);
function q(r) {
    for (let e of r)delete __turbopack_context__.c[e];
}
0 && (module.exports = {
    clearRequireCache
});
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/graceful-fs/polyfills.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

var constants = __turbopack_context__.r("[externals]/constants [external] (constants, cjs)");
var origCwd = process.cwd;
var cwd = null;
var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
    if (!cwd) cwd = origCwd.call(process);
    return cwd;
};
try {
    process.cwd();
} catch (er) {}
// This check is needed until node.js 12 is required
if (typeof process.chdir === 'function') {
    var chdir = process.chdir;
    process.chdir = function(d) {
        cwd = null;
        chdir.call(process, d);
    };
    if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
}
module.exports = patch;
function patch(fs) {
    // (re-)implement some things that are known busted or missing.
    // lchmod, broken prior to 0.6.2
    // back-port the fix here.
    if (constants.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
        patchLchmod(fs);
    }
    // lutimes implementation, or no-op
    if (!fs.lutimes) {
        patchLutimes(fs);
    }
    // https://github.com/isaacs/node-graceful-fs/issues/4
    // Chown should not fail on einval or eperm if non-root.
    // It should not fail on enosys ever, as this just indicates
    // that a fs doesn't support the intended operation.
    fs.chown = chownFix(fs.chown);
    fs.fchown = chownFix(fs.fchown);
    fs.lchown = chownFix(fs.lchown);
    fs.chmod = chmodFix(fs.chmod);
    fs.fchmod = chmodFix(fs.fchmod);
    fs.lchmod = chmodFix(fs.lchmod);
    fs.chownSync = chownFixSync(fs.chownSync);
    fs.fchownSync = chownFixSync(fs.fchownSync);
    fs.lchownSync = chownFixSync(fs.lchownSync);
    fs.chmodSync = chmodFixSync(fs.chmodSync);
    fs.fchmodSync = chmodFixSync(fs.fchmodSync);
    fs.lchmodSync = chmodFixSync(fs.lchmodSync);
    fs.stat = statFix(fs.stat);
    fs.fstat = statFix(fs.fstat);
    fs.lstat = statFix(fs.lstat);
    fs.statSync = statFixSync(fs.statSync);
    fs.fstatSync = statFixSync(fs.fstatSync);
    fs.lstatSync = statFixSync(fs.lstatSync);
    // if lchmod/lchown do not exist, then make them no-ops
    if (fs.chmod && !fs.lchmod) {
        fs.lchmod = function(path, mode, cb) {
            if (cb) process.nextTick(cb);
        };
        fs.lchmodSync = function() {};
    }
    if (fs.chown && !fs.lchown) {
        fs.lchown = function(path, uid, gid, cb) {
            if (cb) process.nextTick(cb);
        };
        fs.lchownSync = function() {};
    }
    // on Windows, A/V software can lock the directory, causing this
    // to fail with an EACCES or EPERM if the directory contains newly
    // created files.  Try again on failure, for up to 60 seconds.
    // Set the timeout this long because some Windows Anti-Virus, such as Parity
    // bit9, may lock files for up to a minute, causing npm package install
    // failures. Also, take care to yield the scheduler. Windows scheduling gives
    // CPU to a busy looping process, which can cause the program causing the lock
    // contention to be starved of CPU by node, so the contention doesn't resolve.
    if (platform === "win32") {
        fs.rename = typeof fs.rename !== 'function' ? fs.rename : function(fs$rename) {
            function rename(from, to, cb) {
                var start = Date.now();
                var backoff = 0;
                fs$rename(from, to, function CB(er) {
                    if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 60000) {
                        setTimeout(function() {
                            fs.stat(to, function(stater, st) {
                                if (stater && stater.code === "ENOENT") fs$rename(from, to, CB);
                                else cb(er);
                            });
                        }, backoff);
                        if (backoff < 100) backoff += 10;
                        return;
                    }
                    if (cb) cb(er);
                });
            }
            if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
            return rename;
        }(fs.rename);
    }
    // if read() returns EAGAIN, then just try it again.
    fs.read = typeof fs.read !== 'function' ? fs.read : function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
            var callback;
            if (callback_ && typeof callback_ === 'function') {
                var eagCounter = 0;
                callback = function(er, _, __) {
                    if (er && er.code === 'EAGAIN' && eagCounter < 10) {
                        eagCounter++;
                        return fs$read.call(fs, fd, buffer, offset, length, position, callback);
                    }
                    callback_.apply(this, arguments);
                };
            }
            return fs$read.call(fs, fd, buffer, offset, length, position, callback);
        }
        // This ensures `util.promisify` works as it does for native `fs.read`.
        if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
        return read;
    }(fs.read);
    fs.readSync = typeof fs.readSync !== 'function' ? fs.readSync : function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
            var eagCounter = 0;
            while(true){
                try {
                    return fs$readSync.call(fs, fd, buffer, offset, length, position);
                } catch (er) {
                    if (er.code === 'EAGAIN' && eagCounter < 10) {
                        eagCounter++;
                        continue;
                    }
                    throw er;
                }
            }
        };
    }(fs.readSync);
    function patchLchmod(fs) {
        fs.lchmod = function(path, mode, callback) {
            fs.open(path, constants.O_WRONLY | constants.O_SYMLINK, mode, function(err, fd) {
                if (err) {
                    if (callback) callback(err);
                    return;
                }
                // prefer to return the chmod error, if one occurs,
                // but still try to close, and report closing errors if they occur.
                fs.fchmod(fd, mode, function(err) {
                    fs.close(fd, function(err2) {
                        if (callback) callback(err || err2);
                    });
                });
            });
        };
        fs.lchmodSync = function(path, mode) {
            var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
            // prefer to return the chmod error, if one occurs,
            // but still try to close, and report closing errors if they occur.
            var threw = true;
            var ret;
            try {
                ret = fs.fchmodSync(fd, mode);
                threw = false;
            } finally{
                if (threw) {
                    try {
                        fs.closeSync(fd);
                    } catch (er) {}
                } else {
                    fs.closeSync(fd);
                }
            }
            return ret;
        };
    }
    function patchLutimes(fs) {
        if (constants.hasOwnProperty("O_SYMLINK") && fs.futimes) {
            fs.lutimes = function(path, at, mt, cb) {
                fs.open(path, constants.O_SYMLINK, function(er, fd) {
                    if (er) {
                        if (cb) cb(er);
                        return;
                    }
                    fs.futimes(fd, at, mt, function(er) {
                        fs.close(fd, function(er2) {
                            if (cb) cb(er || er2);
                        });
                    });
                });
            };
            fs.lutimesSync = function(path, at, mt) {
                var fd = fs.openSync(path, constants.O_SYMLINK);
                var ret;
                var threw = true;
                try {
                    ret = fs.futimesSync(fd, at, mt);
                    threw = false;
                } finally{
                    if (threw) {
                        try {
                            fs.closeSync(fd);
                        } catch (er) {}
                    } else {
                        fs.closeSync(fd);
                    }
                }
                return ret;
            };
        } else if (fs.futimes) {
            fs.lutimes = function(_a, _b, _c, cb) {
                if (cb) process.nextTick(cb);
            };
            fs.lutimesSync = function() {};
        }
    }
    function chmodFix(orig) {
        if (!orig) return orig;
        return function(target, mode, cb) {
            return orig.call(fs, target, mode, function(er) {
                if (chownErOk(er)) er = null;
                if (cb) cb.apply(this, arguments);
            });
        };
    }
    function chmodFixSync(orig) {
        if (!orig) return orig;
        return function(target, mode) {
            try {
                return orig.call(fs, target, mode);
            } catch (er) {
                if (!chownErOk(er)) throw er;
            }
        };
    }
    function chownFix(orig) {
        if (!orig) return orig;
        return function(target, uid, gid, cb) {
            return orig.call(fs, target, uid, gid, function(er) {
                if (chownErOk(er)) er = null;
                if (cb) cb.apply(this, arguments);
            });
        };
    }
    function chownFixSync(orig) {
        if (!orig) return orig;
        return function(target, uid, gid) {
            try {
                return orig.call(fs, target, uid, gid);
            } catch (er) {
                if (!chownErOk(er)) throw er;
            }
        };
    }
    function statFix(orig) {
        if (!orig) return orig;
        // Older versions of Node erroneously returned signed integers for
        // uid + gid.
        return function(target, options, cb) {
            if (typeof options === 'function') {
                cb = options;
                options = null;
            }
            function callback(er, stats) {
                if (stats) {
                    if (stats.uid < 0) stats.uid += 0x100000000;
                    if (stats.gid < 0) stats.gid += 0x100000000;
                }
                if (cb) cb.apply(this, arguments);
            }
            return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
        };
    }
    function statFixSync(orig) {
        if (!orig) return orig;
        // Older versions of Node erroneously returned signed integers for
        // uid + gid.
        return function(target, options) {
            var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
            if (stats) {
                if (stats.uid < 0) stats.uid += 0x100000000;
                if (stats.gid < 0) stats.gid += 0x100000000;
            }
            return stats;
        };
    }
    // ENOSYS means that the fs doesn't support the op. Just ignore
    // that, because it doesn't matter.
    //
    // if there's no getuid, or if getuid() is something other
    // than 0, and the error is EINVAL or EPERM, then just ignore
    // it.
    //
    // This specific case is a silent failure in cp, install, tar,
    // and most other unix tools that manage permissions.
    //
    // When running as root, or if other types of errors are
    // encountered, then it's strict.
    function chownErOk(er) {
        if (!er) return true;
        if (er.code === "ENOSYS") return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
            if (er.code === "EINVAL" || er.code === "EPERM") return true;
        }
        return false;
    }
}
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/graceful-fs/legacy-streams.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
module.exports = legacy;
function legacy(fs) {
    return {
        ReadStream: ReadStream,
        WriteStream: WriteStream
    };
    //TURBOPACK unreachable
    ;
    function ReadStream(path, options) {
        if (!(this instanceof ReadStream)) return new ReadStream(path, options);
        Stream.call(this);
        var self = this;
        this.path = path;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = 'r';
        this.mode = 438; /*=0666*/ 
        this.bufferSize = 64 * 1024;
        options = options || {};
        // Mixin options into this
        var keys = Object.keys(options);
        for(var index = 0, length = keys.length; index < length; index++){
            var key = keys[index];
            this[key] = options[key];
        }
        if (this.encoding) this.setEncoding(this.encoding);
        if (this.start !== undefined) {
            if ('number' !== typeof this.start) {
                throw TypeError('start must be a Number');
            }
            if (this.end === undefined) {
                this.end = Infinity;
            } else if ('number' !== typeof this.end) {
                throw TypeError('end must be a Number');
            }
            if (this.start > this.end) {
                throw new Error('start must be <= end');
            }
            this.pos = this.start;
        }
        if (this.fd !== null) {
            process.nextTick(function() {
                self._read();
            });
            return;
        }
        fs.open(this.path, this.flags, this.mode, function(err, fd) {
            if (err) {
                self.emit('error', err);
                self.readable = false;
                return;
            }
            self.fd = fd;
            self.emit('open', fd);
            self._read();
        });
    }
    function WriteStream(path, options) {
        if (!(this instanceof WriteStream)) return new WriteStream(path, options);
        Stream.call(this);
        this.path = path;
        this.fd = null;
        this.writable = true;
        this.flags = 'w';
        this.encoding = 'binary';
        this.mode = 438; /*=0666*/ 
        this.bytesWritten = 0;
        options = options || {};
        // Mixin options into this
        var keys = Object.keys(options);
        for(var index = 0, length = keys.length; index < length; index++){
            var key = keys[index];
            this[key] = options[key];
        }
        if (this.start !== undefined) {
            if ('number' !== typeof this.start) {
                throw TypeError('start must be a Number');
            }
            if (this.start < 0) {
                throw new Error('start must be >= zero');
            }
            this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
            this._open = fs.open;
            this._queue.push([
                this._open,
                this.path,
                this.flags,
                this.mode,
                undefined
            ]);
            this.flush();
        }
    }
}
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/graceful-fs/clone.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = clone;
var getPrototypeOf = Object.getPrototypeOf || function(obj) {
    return obj.__proto__;
};
function clone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Object) var copy = {
        __proto__: getPrototypeOf(obj)
    };
    else var copy = Object.create(null);
    Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
    });
    return copy;
}
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/graceful-fs/graceful-fs.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var polyfills = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/graceful-fs/polyfills.js [postcss] (ecmascript)");
var legacy = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/graceful-fs/legacy-streams.js [postcss] (ecmascript)");
var clone = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/graceful-fs/clone.js [postcss] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/* istanbul ignore next - node 0.x polyfill */ var gracefulQueue;
var previousSymbol;
/* istanbul ignore else - node 0.x polyfill */ if (typeof Symbol === 'function' && typeof Symbol.for === 'function') {
    gracefulQueue = Symbol.for('graceful-fs.queue');
    // This is used in testing by future versions
    previousSymbol = Symbol.for('graceful-fs.previous');
} else {
    gracefulQueue = '___graceful-fs.queue';
    previousSymbol = '___graceful-fs.previous';
}
function noop() {}
function publishQueue(context, queue) {
    Object.defineProperty(context, gracefulQueue, {
        get: function() {
            return queue;
        }
    });
}
var debug = noop;
if (util.debuglog) debug = util.debuglog('gfs4');
else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) debug = function() {
    var m = util.format.apply(util, arguments);
    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ');
    console.error(m);
};
// Once time initialization
if (!fs[gracefulQueue]) {
    // This queue can be shared by multiple loaded instances
    var queue = /*TURBOPACK member replacement*/ __turbopack_context__.g[gracefulQueue] || [];
    publishQueue(fs, queue);
    // Patch fs.close/closeSync to shared queue version, because we need
    // to retry() whenever a close happens *anywhere* in the program.
    // This is essential when multiple graceful-fs instances are
    // in play at the same time.
    fs.close = function(fs$close) {
        function close(fd, cb) {
            return fs$close.call(fs, fd, function(err) {
                // This function uses the graceful-fs shared queue
                if (!err) {
                    resetQueue();
                }
                if (typeof cb === 'function') cb.apply(this, arguments);
            });
        }
        Object.defineProperty(close, previousSymbol, {
            value: fs$close
        });
        return close;
    }(fs.close);
    fs.closeSync = function(fs$closeSync) {
        function closeSync(fd) {
            // This function uses the graceful-fs shared queue
            fs$closeSync.apply(fs, arguments);
            resetQueue();
        }
        Object.defineProperty(closeSync, previousSymbol, {
            value: fs$closeSync
        });
        return closeSync;
    }(fs.closeSync);
    if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
        process.on('exit', function() {
            debug(fs[gracefulQueue]);
            __turbopack_context__.r("[externals]/assert [external] (assert, cjs)").equal(fs[gracefulQueue].length, 0);
        });
    }
}
if (!/*TURBOPACK member replacement*/ __turbopack_context__.g[gracefulQueue]) {
    publishQueue(/*TURBOPACK member replacement*/ __turbopack_context__.g, fs[gracefulQueue]);
}
module.exports = patch(clone(fs));
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
    module.exports = patch(fs);
    fs.__patched = true;
}
function patch(fs) {
    // Everything that references the open() function needs to be in here
    polyfills(fs);
    fs.gracefulify = patch;
    fs.createReadStream = createReadStream;
    fs.createWriteStream = createWriteStream;
    var fs$readFile = fs.readFile;
    fs.readFile = readFile;
    function readFile(path, options, cb) {
        if (typeof options === 'function') cb = options, options = null;
        return go$readFile(path, options, cb);
        //TURBOPACK unreachable
        ;
        function go$readFile(path, options, cb, startTime) {
            return fs$readFile(path, options, function(err) {
                if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([
                    go$readFile,
                    [
                        path,
                        options,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else {
                    if (typeof cb === 'function') cb.apply(this, arguments);
                }
            });
        }
    }
    var fs$writeFile = fs.writeFile;
    fs.writeFile = writeFile;
    function writeFile(path, data, options, cb) {
        if (typeof options === 'function') cb = options, options = null;
        return go$writeFile(path, data, options, cb);
        //TURBOPACK unreachable
        ;
        function go$writeFile(path, data, options, cb, startTime) {
            return fs$writeFile(path, data, options, function(err) {
                if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([
                    go$writeFile,
                    [
                        path,
                        data,
                        options,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else {
                    if (typeof cb === 'function') cb.apply(this, arguments);
                }
            });
        }
    }
    var fs$appendFile = fs.appendFile;
    if (fs$appendFile) fs.appendFile = appendFile;
    function appendFile(path, data, options, cb) {
        if (typeof options === 'function') cb = options, options = null;
        return go$appendFile(path, data, options, cb);
        //TURBOPACK unreachable
        ;
        function go$appendFile(path, data, options, cb, startTime) {
            return fs$appendFile(path, data, options, function(err) {
                if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([
                    go$appendFile,
                    [
                        path,
                        data,
                        options,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else {
                    if (typeof cb === 'function') cb.apply(this, arguments);
                }
            });
        }
    }
    var fs$copyFile = fs.copyFile;
    if (fs$copyFile) fs.copyFile = copyFile;
    function copyFile(src, dest, flags, cb) {
        if (typeof flags === 'function') {
            cb = flags;
            flags = 0;
        }
        return go$copyFile(src, dest, flags, cb);
        //TURBOPACK unreachable
        ;
        function go$copyFile(src, dest, flags, cb, startTime) {
            return fs$copyFile(src, dest, flags, function(err) {
                if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([
                    go$copyFile,
                    [
                        src,
                        dest,
                        flags,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else {
                    if (typeof cb === 'function') cb.apply(this, arguments);
                }
            });
        }
    }
    var fs$readdir = fs.readdir;
    fs.readdir = readdir;
    var noReaddirOptionVersions = /^v[0-5]\./;
    function readdir(path, options, cb) {
        if (typeof options === 'function') cb = options, options = null;
        var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir(path, options, cb, startTime) {
            return fs$readdir(path, fs$readdirCallback(path, options, cb, startTime));
        } : function go$readdir(path, options, cb, startTime) {
            return fs$readdir(path, options, fs$readdirCallback(path, options, cb, startTime));
        };
        return go$readdir(path, options, cb);
        //TURBOPACK unreachable
        ;
        function fs$readdirCallback(path, options, cb, startTime) {
            return function(err, files) {
                if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([
                    go$readdir,
                    [
                        path,
                        options,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else {
                    if (files && files.sort) files.sort();
                    if (typeof cb === 'function') cb.call(this, err, files);
                }
            };
        }
    }
    if (process.version.substr(0, 4) === 'v0.8') {
        var legStreams = legacy(fs);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
    }
    var fs$ReadStream = fs.ReadStream;
    if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
    }
    var fs$WriteStream = fs.WriteStream;
    if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
    }
    Object.defineProperty(fs, 'ReadStream', {
        get: function() {
            return ReadStream;
        },
        set: function(val) {
            ReadStream = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fs, 'WriteStream', {
        get: function() {
            return WriteStream;
        },
        set: function(val) {
            WriteStream = val;
        },
        enumerable: true,
        configurable: true
    });
    // legacy names
    var FileReadStream = ReadStream;
    Object.defineProperty(fs, 'FileReadStream', {
        get: function() {
            return FileReadStream;
        },
        set: function(val) {
            FileReadStream = val;
        },
        enumerable: true,
        configurable: true
    });
    var FileWriteStream = WriteStream;
    Object.defineProperty(fs, 'FileWriteStream', {
        get: function() {
            return FileWriteStream;
        },
        set: function(val) {
            FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
    });
    function ReadStream(path, options) {
        if (this instanceof ReadStream) return fs$ReadStream.apply(this, arguments), this;
        else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
    }
    function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
                if (that.autoClose) that.destroy();
                that.emit('error', err);
            } else {
                that.fd = fd;
                that.emit('open', fd);
                that.read();
            }
        });
    }
    function WriteStream(path, options) {
        if (this instanceof WriteStream) return fs$WriteStream.apply(this, arguments), this;
        else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
    }
    function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
                that.destroy();
                that.emit('error', err);
            } else {
                that.fd = fd;
                that.emit('open', fd);
            }
        });
    }
    function createReadStream(path, options) {
        return new fs.ReadStream(path, options);
    }
    function createWriteStream(path, options) {
        return new fs.WriteStream(path, options);
    }
    var fs$open = fs.open;
    fs.open = open;
    function open(path, flags, mode, cb) {
        if (typeof mode === 'function') cb = mode, mode = null;
        return go$open(path, flags, mode, cb);
        //TURBOPACK unreachable
        ;
        function go$open(path, flags, mode, cb, startTime) {
            return fs$open(path, flags, mode, function(err, fd) {
                if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([
                    go$open,
                    [
                        path,
                        flags,
                        mode,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else {
                    if (typeof cb === 'function') cb.apply(this, arguments);
                }
            });
        }
    }
    return fs;
}
function enqueue(elem) {
    debug('ENQUEUE', elem[0].name, elem[1]);
    fs[gracefulQueue].push(elem);
    retry();
}
// keep track of the timeout between retry() calls
var retryTimer;
// reset the startTime and lastTime to now
// this resets the start of the 60 second overall timeout as well as the
// delay between attempts so that we'll retry these jobs sooner
function resetQueue() {
    var now = Date.now();
    for(var i = 0; i < fs[gracefulQueue].length; ++i){
        // entries that are only a length of 2 are from an older version, don't
        // bother modifying those since they'll be retried anyway.
        if (fs[gracefulQueue][i].length > 2) {
            fs[gracefulQueue][i][3] = now; // startTime
            fs[gracefulQueue][i][4] = now; // lastTime
        }
    }
    // call retry to make sure we're actively processing the queue
    retry();
}
function retry() {
    // clear the timer and remove it to help prevent unintended concurrency
    clearTimeout(retryTimer);
    retryTimer = undefined;
    if (fs[gracefulQueue].length === 0) return;
    var elem = fs[gracefulQueue].shift();
    var fn = elem[0];
    var args = elem[1];
    // these items may be unset if they were added by an older graceful-fs
    var err = elem[2];
    var startTime = elem[3];
    var lastTime = elem[4];
    // if we don't have a startTime we have no way of knowing if we've waited
    // long enough, so go ahead and retry this item now
    if (startTime === undefined) {
        debug('RETRY', fn.name, args);
        fn.apply(null, args);
    } else if (Date.now() - startTime >= 60000) {
        // it's been more than 60 seconds total, bail now
        debug('TIMEOUT', fn.name, args);
        var cb = args.pop();
        if (typeof cb === 'function') cb.call(null, err);
    } else {
        // the amount of time between the last attempt and right now
        var sinceAttempt = Date.now() - lastTime;
        // the amount of time between when we first tried, and when we last tried
        // rounded up to at least 1
        var sinceStart = Math.max(lastTime - startTime, 1);
        // backoff. wait longer than the total time we've been retrying, but only
        // up to a maximum of 100ms
        var desiredDelay = Math.min(sinceStart * 1.2, 100);
        // it's been long enough since the last retry, do it again
        if (sinceAttempt >= desiredDelay) {
            debug('RETRY', fn.name, args);
            fn.apply(null, args.concat([
                startTime
            ]));
        } else {
            // if we can't do this job yet, push it to the end of the queue
            // and let the next iteration check again
            fs[gracefulQueue].push(elem);
        }
    }
    // schedule our next run if one isn't already scheduled
    if (retryTimer === undefined) {
        retryTimer = setTimeout(retry, 0);
    }
}
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const deprecateContext = util.deprecate(()=>{}, "Hook.context is deprecated and will be removed");
function CALL_DELEGATE(...args) {
    this.call = this._createCall("sync");
    return this.call(...args);
}
function CALL_ASYNC_DELEGATE(...args) {
    this.callAsync = this._createCall("async");
    return this.callAsync(...args);
}
function PROMISE_DELEGATE(...args) {
    this.promise = this._createCall("promise");
    return this.promise(...args);
}
class Hook {
    constructor(args = [], name = undefined){
        this._args = args;
        this.name = name;
        this.taps = [];
        this.interceptors = [];
        this._call = CALL_DELEGATE;
        this.call = CALL_DELEGATE;
        this._callAsync = CALL_ASYNC_DELEGATE;
        this.callAsync = CALL_ASYNC_DELEGATE;
        this._promise = PROMISE_DELEGATE;
        this.promise = PROMISE_DELEGATE;
        this._x = undefined;
        // eslint-disable-next-line no-self-assign
        this.compile = this.compile;
        // eslint-disable-next-line no-self-assign
        this.tap = this.tap;
        // eslint-disable-next-line no-self-assign
        this.tapAsync = this.tapAsync;
        // eslint-disable-next-line no-self-assign
        this.tapPromise = this.tapPromise;
    }
    compile(_options) {
        throw new Error("Abstract: should be overridden");
    }
    _createCall(type) {
        return this.compile({
            taps: this.taps,
            interceptors: this.interceptors,
            args: this._args,
            type
        });
    }
    _tap(type, options, fn) {
        if (typeof options === "string") {
            options = {
                name: options.trim()
            };
        } else if (typeof options !== "object" || options === null) {
            throw new Error("Invalid tap options");
        }
        if (typeof options.name !== "string" || options.name === "") {
            throw new Error("Missing name for tap");
        }
        if (typeof options.context !== "undefined") {
            deprecateContext();
        }
        options = Object.assign({
            type,
            fn
        }, options);
        options = this._runRegisterInterceptors(options);
        this._insert(options);
    }
    tap(options, fn) {
        this._tap("sync", options, fn);
    }
    tapAsync(options, fn) {
        this._tap("async", options, fn);
    }
    tapPromise(options, fn) {
        this._tap("promise", options, fn);
    }
    _runRegisterInterceptors(options) {
        for (const interceptor of this.interceptors){
            if (interceptor.register) {
                const newOptions = interceptor.register(options);
                if (newOptions !== undefined) {
                    options = newOptions;
                }
            }
        }
        return options;
    }
    withOptions(options) {
        const mergeOptions = (opt)=>Object.assign({}, options, typeof opt === "string" ? {
                name: opt
            } : opt);
        return {
            name: this.name,
            tap: (opt, fn)=>this.tap(mergeOptions(opt), fn),
            tapAsync: (opt, fn)=>this.tapAsync(mergeOptions(opt), fn),
            tapPromise: (opt, fn)=>this.tapPromise(mergeOptions(opt), fn),
            intercept: (interceptor)=>this.intercept(interceptor),
            isUsed: ()=>this.isUsed(),
            withOptions: (opt)=>this.withOptions(mergeOptions(opt))
        };
    }
    isUsed() {
        return this.taps.length > 0 || this.interceptors.length > 0;
    }
    intercept(interceptor) {
        this._resetCompilation();
        this.interceptors.push(Object.assign({}, interceptor));
        if (interceptor.register) {
            for(let i = 0; i < this.taps.length; i++){
                this.taps[i] = interceptor.register(this.taps[i]);
            }
        }
    }
    _resetCompilation() {
        this.call = this._call;
        this.callAsync = this._callAsync;
        this.promise = this._promise;
    }
    _insert(item) {
        this._resetCompilation();
        let before;
        if (typeof item.before === "string") {
            before = new Set([
                item.before
            ]);
        } else if (Array.isArray(item.before)) {
            before = new Set(item.before);
        }
        let stage = 0;
        if (typeof item.stage === "number") {
            stage = item.stage;
        }
        let i = this.taps.length;
        while(i > 0){
            i--;
            const tap = this.taps[i];
            this.taps[i + 1] = tap;
            const xStage = tap.stage || 0;
            if (before) {
                if (before.has(tap.name)) {
                    before.delete(tap.name);
                    continue;
                }
                if (before.size > 0) {
                    continue;
                }
            }
            if (xStage > stage) {
                continue;
            }
            i++;
            break;
        }
        this.taps[i] = item;
    }
}
Object.setPrototypeOf(Hook.prototype, null);
module.exports = Hook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ class HookCodeFactory {
    constructor(config){
        this.config = config;
        this.options = undefined;
        this._args = undefined;
    }
    create(options) {
        this.init(options);
        let fn;
        switch(this.options.type){
            case "sync":
                fn = new Function(this.args(), `"use strict";\n${this.header()}${this.contentWithInterceptors({
                    onError: (err)=>`throw ${err};\n`,
                    onResult: (result)=>`return ${result};\n`,
                    resultReturns: true,
                    onDone: ()=>"",
                    rethrowIfPossible: true
                })}`);
                break;
            case "async":
                fn = new Function(this.args({
                    after: "_callback"
                }), `"use strict";\n${this.header()}${this.contentWithInterceptors({
                    onError: (err)=>`_callback(${err});\n`,
                    onResult: (result)=>`_callback(null, ${result});\n`,
                    onDone: ()=>"_callback();\n"
                })}`);
                break;
            case "promise":
                {
                    let errorHelperUsed = false;
                    const content = this.contentWithInterceptors({
                        onError: (err)=>{
                            errorHelperUsed = true;
                            return `_error(${err});\n`;
                        },
                        onResult: (result)=>`_resolve(${result});\n`,
                        onDone: ()=>"_resolve();\n"
                    });
                    let code = "";
                    code += '"use strict";\n';
                    code += this.header();
                    code += "return new Promise((function(_resolve, _reject) {\n";
                    if (errorHelperUsed) {
                        code += "var _sync = true;\n";
                        code += "function _error(_err) {\n";
                        code += "if(_sync)\n";
                        code += "_resolve(Promise.resolve().then((function() { throw _err; })));\n";
                        code += "else\n";
                        code += "_reject(_err);\n";
                        code += "};\n";
                    }
                    code += content;
                    if (errorHelperUsed) {
                        code += "_sync = false;\n";
                    }
                    code += "}));\n";
                    fn = new Function(this.args(), code);
                    break;
                }
        }
        this.deinit();
        return fn;
    }
    setup(instance, options) {
        instance._x = options.taps.map((t)=>t.fn);
    }
    /**
	 * @param {{ type: "sync" | "promise" | "async", taps: Array<Tap>, interceptors: Array<Interceptor> }} options
	 */ init(options) {
        this.options = options;
        this._args = [
            ...options.args
        ];
    }
    deinit() {
        this.options = undefined;
        this._args = undefined;
    }
    contentWithInterceptors(options) {
        if (this.options.interceptors.length > 0) {
            const { onError, onResult, onDone } = options;
            let code = "";
            for(let i = 0; i < this.options.interceptors.length; i++){
                const interceptor = this.options.interceptors[i];
                if (interceptor.call) {
                    code += `${this.getInterceptor(i)}.call(${this.args({
                        before: interceptor.context ? "_context" : undefined
                    })});\n`;
                }
            }
            code += this.content(Object.assign(options, {
                onError: onError && ((err)=>{
                    let code = "";
                    for(let i = 0; i < this.options.interceptors.length; i++){
                        const interceptor = this.options.interceptors[i];
                        if (interceptor.error) {
                            code += `${this.getInterceptor(i)}.error(${err});\n`;
                        }
                    }
                    code += onError(err);
                    return code;
                }),
                onResult: onResult && ((result)=>{
                    let code = "";
                    for(let i = 0; i < this.options.interceptors.length; i++){
                        const interceptor = this.options.interceptors[i];
                        if (interceptor.result) {
                            code += `${this.getInterceptor(i)}.result(${result});\n`;
                        }
                    }
                    code += onResult(result);
                    return code;
                }),
                onDone: onDone && (()=>{
                    let code = "";
                    for(let i = 0; i < this.options.interceptors.length; i++){
                        const interceptor = this.options.interceptors[i];
                        if (interceptor.done) {
                            code += `${this.getInterceptor(i)}.done();\n`;
                        }
                    }
                    code += onDone();
                    return code;
                })
            }));
            return code;
        }
        return this.content(options);
    }
    header() {
        let code = "";
        code += this.needContext() ? "var _context = {};\n" : "var _context;\n";
        code += "var _x = this._x;\n";
        if (this.options.interceptors.length > 0) {
            code += "var _taps = this.taps;\n";
            code += "var _interceptors = this.interceptors;\n";
        }
        return code;
    }
    needContext() {
        for (const tap of this.options.taps)if (tap.context) return true;
        return false;
    }
    callTap(tapIndex, { onError, onResult, onDone, rethrowIfPossible }) {
        let code = "";
        let hasTapCached = false;
        for(let i = 0; i < this.options.interceptors.length; i++){
            const interceptor = this.options.interceptors[i];
            if (interceptor.tap) {
                if (!hasTapCached) {
                    code += `var _tap${tapIndex} = ${this.getTap(tapIndex)};\n`;
                    hasTapCached = true;
                }
                code += `${this.getInterceptor(i)}.tap(${interceptor.context ? "_context, " : ""}_tap${tapIndex});\n`;
            }
        }
        code += `var _fn${tapIndex} = ${this.getTapFn(tapIndex)};\n`;
        const tap = this.options.taps[tapIndex];
        switch(tap.type){
            case "sync":
                if (!rethrowIfPossible) {
                    code += `var _hasError${tapIndex} = false;\n`;
                    code += "try {\n";
                }
                if (onResult) {
                    code += `var _result${tapIndex} = _fn${tapIndex}(${this.args({
                        before: tap.context ? "_context" : undefined
                    })});\n`;
                } else {
                    code += `_fn${tapIndex}(${this.args({
                        before: tap.context ? "_context" : undefined
                    })});\n`;
                }
                if (!rethrowIfPossible) {
                    code += "} catch(_err) {\n";
                    code += `_hasError${tapIndex} = true;\n`;
                    code += onError("_err");
                    code += "}\n";
                    code += `if(!_hasError${tapIndex}) {\n`;
                }
                if (onResult) {
                    code += onResult(`_result${tapIndex}`);
                }
                if (onDone) {
                    code += onDone();
                }
                if (!rethrowIfPossible) {
                    code += "}\n";
                }
                break;
            case "async":
                {
                    let cbCode = "";
                    cbCode += onResult ? `(function(_err${tapIndex}, _result${tapIndex}) {\n` : `(function(_err${tapIndex}) {\n`;
                    cbCode += `if(_err${tapIndex}) {\n`;
                    cbCode += onError(`_err${tapIndex}`);
                    cbCode += "} else {\n";
                    if (onResult) {
                        cbCode += onResult(`_result${tapIndex}`);
                    }
                    if (onDone) {
                        cbCode += onDone();
                    }
                    cbCode += "}\n";
                    cbCode += "})";
                    code += `_fn${tapIndex}(${this.args({
                        before: tap.context ? "_context" : undefined,
                        after: cbCode
                    })});\n`;
                    break;
                }
            case "promise":
                code += `var _hasResult${tapIndex} = false;\n`;
                code += `var _promise${tapIndex} = _fn${tapIndex}(${this.args({
                    before: tap.context ? "_context" : undefined
                })});\n`;
                code += `if (!_promise${tapIndex} || !_promise${tapIndex}.then)\n`;
                code += `  throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise${tapIndex} + ')');\n`;
                code += `_promise${tapIndex}.then((function(_result${tapIndex}) {\n`;
                code += `_hasResult${tapIndex} = true;\n`;
                if (onResult) {
                    code += onResult(`_result${tapIndex}`);
                }
                if (onDone) {
                    code += onDone();
                }
                code += `}), function(_err${tapIndex}) {\n`;
                code += `if(_hasResult${tapIndex}) throw _err${tapIndex};\n`;
                code += onError(`!_err${tapIndex} ? new Error('Tap function (tapPromise) rejects "' + _err${tapIndex} + '" value') : _err${tapIndex}`);
                code += "});\n";
                break;
        }
        return code;
    }
    callTapsSeries({ onError, onResult, resultReturns, onDone, doneReturns, rethrowIfPossible }) {
        if (this.options.taps.length === 0) return onDone();
        const firstAsync = this.options.taps.findIndex((t)=>t.type !== "sync");
        const somethingReturns = resultReturns || doneReturns;
        let code = "";
        let current = onDone;
        let unrollCounter = 0;
        for(let j = this.options.taps.length - 1; j >= 0; j--){
            const i = j;
            const unroll = current !== onDone && (this.options.taps[i].type !== "sync" || unrollCounter++ > 20);
            if (unroll) {
                unrollCounter = 0;
                code += `function _next${i}() {\n`;
                code += current();
                code += "}\n";
                current = ()=>`${somethingReturns ? "return " : ""}_next${i}();\n`;
            }
            const done = current;
            const doneBreak = (skipDone)=>{
                if (skipDone) return "";
                return onDone();
            };
            const content = this.callTap(i, {
                onError: (error)=>onError(i, error, done, doneBreak),
                onResult: onResult && ((result)=>onResult(i, result, done, doneBreak)),
                onDone: !onResult && done,
                rethrowIfPossible: rethrowIfPossible && (firstAsync < 0 || i < firstAsync)
            });
            current = ()=>content;
        }
        code += current();
        return code;
    }
    callTapsLooping({ onError, onDone, rethrowIfPossible }) {
        if (this.options.taps.length === 0) return onDone();
        const syncOnly = this.options.taps.every((t)=>t.type === "sync");
        let code = "";
        if (!syncOnly) {
            code += "var _looper = (function() {\n";
            code += "var _loopAsync = false;\n";
        }
        code += "var _loop;\n";
        code += "do {\n";
        code += "_loop = false;\n";
        for(let i = 0; i < this.options.interceptors.length; i++){
            const interceptor = this.options.interceptors[i];
            if (interceptor.loop) {
                code += `${this.getInterceptor(i)}.loop(${this.args({
                    before: interceptor.context ? "_context" : undefined
                })});\n`;
            }
        }
        code += this.callTapsSeries({
            onError,
            onResult: (i, result, next, doneBreak)=>{
                let code = "";
                code += `if(${result} !== undefined) {\n`;
                code += "_loop = true;\n";
                if (!syncOnly) code += "if(_loopAsync) _looper();\n";
                code += doneBreak(true);
                code += "} else {\n";
                code += next();
                code += "}\n";
                return code;
            },
            onDone: onDone && (()=>{
                let code = "";
                code += "if(!_loop) {\n";
                code += onDone();
                code += "}\n";
                return code;
            }),
            rethrowIfPossible: rethrowIfPossible && syncOnly
        });
        code += "} while(_loop);\n";
        if (!syncOnly) {
            code += "_loopAsync = true;\n";
            code += "});\n";
            code += "_looper();\n";
        }
        return code;
    }
    callTapsParallel({ onError, onResult, onDone, rethrowIfPossible, onTap = (i, run)=>run() }) {
        if (this.options.taps.length <= 1) {
            return this.callTapsSeries({
                onError,
                onResult,
                onDone,
                rethrowIfPossible
            });
        }
        let code = "";
        code += "do {\n";
        code += `var _counter = ${this.options.taps.length};\n`;
        if (onDone) {
            code += "var _done = (function() {\n";
            code += onDone();
            code += "});\n";
        }
        for(let i = 0; i < this.options.taps.length; i++){
            const done = ()=>{
                if (onDone) return "if(--_counter === 0) _done();\n";
                return "--_counter;";
            };
            const doneBreak = (skipDone)=>{
                if (skipDone || !onDone) return "_counter = 0;\n";
                return "_counter = 0;\n_done();\n";
            };
            code += "if(_counter <= 0) break;\n";
            code += onTap(i, ()=>this.callTap(i, {
                    onError: (error)=>{
                        let code = "";
                        code += "if(_counter > 0) {\n";
                        code += onError(i, error, done, doneBreak);
                        code += "}\n";
                        return code;
                    },
                    onResult: onResult && ((result)=>{
                        let code = "";
                        code += "if(_counter > 0) {\n";
                        code += onResult(i, result, done, doneBreak);
                        code += "}\n";
                        return code;
                    }),
                    onDone: !onResult && (()=>done()),
                    rethrowIfPossible
                }), done, doneBreak);
        }
        code += "} while(false);\n";
        return code;
    }
    args({ before, after } = {}) {
        let allArgs = this._args;
        if (before) allArgs = [
            before,
            ...allArgs
        ];
        if (after) allArgs = [
            ...allArgs,
            after
        ];
        if (allArgs.length === 0) {
            return "";
        }
        return allArgs.join(", ");
    }
    getTapFn(idx) {
        return `_x[${idx}]`;
    }
    getTap(idx) {
        return `_taps[${idx}]`;
    }
    getInterceptor(idx) {
        return `_interceptors[${idx}]`;
    }
}
module.exports = HookCodeFactory;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncParallelBailHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const Hook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)");
const HookCodeFactory = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)");
class AsyncParallelBailHookCodeFactory extends HookCodeFactory {
    content({ onError, onResult, onDone }) {
        let code = "";
        code += `var _results = new Array(${this.options.taps.length});\n`;
        code += "var _checkDone = function() {\n";
        code += "for(var i = 0; i < _results.length; i++) {\n";
        code += "var item = _results[i];\n";
        code += "if(item === undefined) return false;\n";
        code += "if(item.result !== undefined) {\n";
        code += onResult("item.result");
        code += "return true;\n";
        code += "}\n";
        code += "if(item.error) {\n";
        code += onError("item.error");
        code += "return true;\n";
        code += "}\n";
        code += "}\n";
        code += "return false;\n";
        code += "}\n";
        code += this.callTapsParallel({
            onError: (i, err, done, doneBreak)=>{
                let code = "";
                code += `if(${i} < _results.length && ((_results.length = ${i + 1}), (_results[${i}] = { error: ${err} }), _checkDone())) {\n`;
                code += doneBreak(true);
                code += "} else {\n";
                code += done();
                code += "}\n";
                return code;
            },
            onResult: (i, result, done, doneBreak)=>{
                let code = "";
                code += `if(${i} < _results.length && (${result} !== undefined && (_results.length = ${i + 1}), (_results[${i}] = { result: ${result} }), _checkDone())) {\n`;
                code += doneBreak(true);
                code += "} else {\n";
                code += done();
                code += "}\n";
                return code;
            },
            onTap: (i, run, done, _doneBreak)=>{
                let code = "";
                if (i > 0) {
                    code += `if(${i} >= _results.length) {\n`;
                    code += done();
                    code += "} else {\n";
                }
                code += run();
                if (i > 0) code += "}\n";
                return code;
            },
            onDone
        });
        return code;
    }
}
const factory = new AsyncParallelBailHookCodeFactory();
function COMPILE(options) {
    factory.setup(this, options);
    return factory.create(options);
}
function AsyncParallelBailHook(args = [], name = undefined) {
    const hook = new Hook(args, name);
    hook.constructor = AsyncParallelBailHook;
    hook.compile = COMPILE;
    hook._call = undefined;
    hook.call = undefined;
    return hook;
}
AsyncParallelBailHook.prototype = null;
module.exports = AsyncParallelBailHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncParallelHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const Hook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)");
const HookCodeFactory = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)");
class AsyncParallelHookCodeFactory extends HookCodeFactory {
    content({ onError, onDone }) {
        return this.callTapsParallel({
            onError: (i, err, done, doneBreak)=>onError(err) + doneBreak(true),
            onDone
        });
    }
}
const factory = new AsyncParallelHookCodeFactory();
function COMPILE(options) {
    factory.setup(this, options);
    return factory.create(options);
}
function AsyncParallelHook(args = [], name = undefined) {
    const hook = new Hook(args, name);
    hook.constructor = AsyncParallelHook;
    hook.compile = COMPILE;
    hook._call = undefined;
    hook.call = undefined;
    return hook;
}
AsyncParallelHook.prototype = null;
module.exports = AsyncParallelHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncSeriesBailHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const Hook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)");
const HookCodeFactory = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)");
class AsyncSeriesBailHookCodeFactory extends HookCodeFactory {
    content({ onError, onResult, resultReturns, onDone }) {
        return this.callTapsSeries({
            onError: (i, err, next, doneBreak)=>onError(err) + doneBreak(true),
            onResult: (i, result, next)=>`if(${result} !== undefined) {\n${onResult(result)}\n} else {\n${next()}}\n`,
            resultReturns,
            onDone
        });
    }
}
const factory = new AsyncSeriesBailHookCodeFactory();
function COMPILE(options) {
    factory.setup(this, options);
    return factory.create(options);
}
function AsyncSeriesBailHook(args = [], name = undefined) {
    const hook = new Hook(args, name);
    hook.constructor = AsyncSeriesBailHook;
    hook.compile = COMPILE;
    hook._call = undefined;
    hook.call = undefined;
    return hook;
}
AsyncSeriesBailHook.prototype = null;
module.exports = AsyncSeriesBailHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncSeriesHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const Hook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)");
const HookCodeFactory = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)");
class AsyncSeriesHookCodeFactory extends HookCodeFactory {
    content({ onError, onDone }) {
        return this.callTapsSeries({
            onError: (i, err, next, doneBreak)=>onError(err) + doneBreak(true),
            onDone
        });
    }
}
const factory = new AsyncSeriesHookCodeFactory();
function COMPILE(options) {
    factory.setup(this, options);
    return factory.create(options);
}
function AsyncSeriesHook(args = [], name = undefined) {
    const hook = new Hook(args, name);
    hook.constructor = AsyncSeriesHook;
    hook.compile = COMPILE;
    hook._call = undefined;
    hook.call = undefined;
    return hook;
}
AsyncSeriesHook.prototype = null;
module.exports = AsyncSeriesHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncSeriesLoopHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const Hook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)");
const HookCodeFactory = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)");
class AsyncSeriesLoopHookCodeFactory extends HookCodeFactory {
    content({ onError, onDone }) {
        return this.callTapsLooping({
            onError: (i, err, next, doneBreak)=>onError(err) + doneBreak(true),
            onDone
        });
    }
}
const factory = new AsyncSeriesLoopHookCodeFactory();
function COMPILE(options) {
    factory.setup(this, options);
    return factory.create(options);
}
function AsyncSeriesLoopHook(args = [], name = undefined) {
    const hook = new Hook(args, name);
    hook.constructor = AsyncSeriesLoopHook;
    hook.compile = COMPILE;
    hook._call = undefined;
    hook.call = undefined;
    return hook;
}
AsyncSeriesLoopHook.prototype = null;
module.exports = AsyncSeriesLoopHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncSeriesWaterfallHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const Hook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)");
const HookCodeFactory = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)");
class AsyncSeriesWaterfallHookCodeFactory extends HookCodeFactory {
    content({ onError, onResult, _onDone }) {
        return this.callTapsSeries({
            onError: (i, err, next, doneBreak)=>onError(err) + doneBreak(true),
            onResult: (i, result, next)=>{
                let code = "";
                code += `if(${result} !== undefined) {\n`;
                code += `${this._args[0]} = ${result};\n`;
                code += "}\n";
                code += next();
                return code;
            },
            onDone: ()=>onResult(this._args[0])
        });
    }
}
const factory = new AsyncSeriesWaterfallHookCodeFactory();
function COMPILE(options) {
    factory.setup(this, options);
    return factory.create(options);
}
function AsyncSeriesWaterfallHook(args = [], name = undefined) {
    if (args.length < 1) {
        throw new Error("Waterfall hooks must have at least one argument");
    }
    const hook = new Hook(args, name);
    hook.constructor = AsyncSeriesWaterfallHook;
    hook.compile = COMPILE;
    hook._call = undefined;
    hook.call = undefined;
    return hook;
}
AsyncSeriesWaterfallHook.prototype = null;
module.exports = AsyncSeriesWaterfallHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookMap.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const defaultFactory = (key, hook)=>hook;
class HookMap {
    constructor(factory, name = undefined){
        this._map = new Map();
        this.name = name;
        this._factory = factory;
        this._interceptors = [];
    }
    get(key) {
        return this._map.get(key);
    }
    for(key) {
        const hook = this.get(key);
        if (hook !== undefined) {
            return hook;
        }
        let newHook = this._factory(key);
        const interceptors = this._interceptors;
        for(let i = 0; i < interceptors.length; i++){
            newHook = interceptors[i].factory(key, newHook);
        }
        this._map.set(key, newHook);
        return newHook;
    }
    intercept(interceptor) {
        this._interceptors.push(Object.assign({
            factory: defaultFactory
        }, interceptor));
    }
}
HookMap.prototype.tap = util.deprecate(function tap(key, options, fn) {
    return this.for(key).tap(options, fn);
}, "HookMap#tap(key,…) is deprecated. Use HookMap#for(key).tap(…) instead.");
HookMap.prototype.tapAsync = util.deprecate(function tapAsync(key, options, fn) {
    return this.for(key).tapAsync(options, fn);
}, "HookMap#tapAsync(key,…) is deprecated. Use HookMap#for(key).tapAsync(…) instead.");
HookMap.prototype.tapPromise = util.deprecate(function tapPromise(key, options, fn) {
    return this.for(key).tapPromise(options, fn);
}, "HookMap#tapPromise(key,…) is deprecated. Use HookMap#for(key).tapPromise(…) instead.");
module.exports = HookMap;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/MultiHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ class MultiHook {
    constructor(hooks, name = undefined){
        this.hooks = hooks;
        this.name = name;
    }
    tap(options, fn) {
        for (const hook of this.hooks){
            hook.tap(options, fn);
        }
    }
    tapAsync(options, fn) {
        for (const hook of this.hooks){
            hook.tapAsync(options, fn);
        }
    }
    tapPromise(options, fn) {
        for (const hook of this.hooks){
            hook.tapPromise(options, fn);
        }
    }
    isUsed() {
        for (const hook of this.hooks){
            if (hook.isUsed()) return true;
        }
        return false;
    }
    intercept(interceptor) {
        for (const hook of this.hooks){
            hook.intercept(interceptor);
        }
    }
    withOptions(options) {
        return new MultiHook(this.hooks.map((hook)=>hook.withOptions(options)), this.name);
    }
}
module.exports = MultiHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/SyncBailHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const Hook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)");
const HookCodeFactory = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)");
class SyncBailHookCodeFactory extends HookCodeFactory {
    content({ onError, onResult, resultReturns, onDone, rethrowIfPossible }) {
        return this.callTapsSeries({
            onError: (i, err)=>onError(err),
            onResult: (i, result, next)=>`if(${result} !== undefined) {\n${onResult(result)};\n} else {\n${next()}}\n`,
            resultReturns,
            onDone,
            rethrowIfPossible
        });
    }
}
const factory = new SyncBailHookCodeFactory();
const TAP_ASYNC = ()=>{
    throw new Error("tapAsync is not supported on a SyncBailHook");
};
const TAP_PROMISE = ()=>{
    throw new Error("tapPromise is not supported on a SyncBailHook");
};
function COMPILE(options) {
    factory.setup(this, options);
    return factory.create(options);
}
function SyncBailHook(args = [], name = undefined) {
    const hook = new Hook(args, name);
    hook.constructor = SyncBailHook;
    hook.tapAsync = TAP_ASYNC;
    hook.tapPromise = TAP_PROMISE;
    hook.compile = COMPILE;
    return hook;
}
SyncBailHook.prototype = null;
module.exports = SyncBailHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/SyncHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const Hook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)");
const HookCodeFactory = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)");
class SyncHookCodeFactory extends HookCodeFactory {
    content({ onError, onDone, rethrowIfPossible }) {
        return this.callTapsSeries({
            onError: (i, err)=>onError(err),
            onDone,
            rethrowIfPossible
        });
    }
}
const factory = new SyncHookCodeFactory();
const TAP_ASYNC = ()=>{
    throw new Error("tapAsync is not supported on a SyncHook");
};
const TAP_PROMISE = ()=>{
    throw new Error("tapPromise is not supported on a SyncHook");
};
function COMPILE(options) {
    factory.setup(this, options);
    return factory.create(options);
}
function SyncHook(args = [], name = undefined) {
    const hook = new Hook(args, name);
    hook.constructor = SyncHook;
    hook.tapAsync = TAP_ASYNC;
    hook.tapPromise = TAP_PROMISE;
    hook.compile = COMPILE;
    return hook;
}
SyncHook.prototype = null;
module.exports = SyncHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/SyncLoopHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const Hook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)");
const HookCodeFactory = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)");
class SyncLoopHookCodeFactory extends HookCodeFactory {
    content({ onError, onDone, rethrowIfPossible }) {
        return this.callTapsLooping({
            onError: (i, err)=>onError(err),
            onDone,
            rethrowIfPossible
        });
    }
}
const factory = new SyncLoopHookCodeFactory();
const TAP_ASYNC = ()=>{
    throw new Error("tapAsync is not supported on a SyncLoopHook");
};
const TAP_PROMISE = ()=>{
    throw new Error("tapPromise is not supported on a SyncLoopHook");
};
function COMPILE(options) {
    factory.setup(this, options);
    return factory.create(options);
}
function SyncLoopHook(args = [], name = undefined) {
    const hook = new Hook(args, name);
    hook.constructor = SyncLoopHook;
    hook.tapAsync = TAP_ASYNC;
    hook.tapPromise = TAP_PROMISE;
    hook.compile = COMPILE;
    return hook;
}
SyncLoopHook.prototype = null;
module.exports = SyncLoopHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/SyncWaterfallHook.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ const Hook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/Hook.js [postcss] (ecmascript)");
const HookCodeFactory = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookCodeFactory.js [postcss] (ecmascript)");
class SyncWaterfallHookCodeFactory extends HookCodeFactory {
    content({ onError, onResult, resultReturns, rethrowIfPossible }) {
        return this.callTapsSeries({
            onError: (i, err)=>onError(err),
            onResult: (i, result, next)=>{
                let code = "";
                code += `if(${result} !== undefined) {\n`;
                code += `${this._args[0]} = ${result};\n`;
                code += "}\n";
                code += next();
                return code;
            },
            onDone: ()=>onResult(this._args[0]),
            doneReturns: resultReturns,
            rethrowIfPossible
        });
    }
}
const factory = new SyncWaterfallHookCodeFactory();
const TAP_ASYNC = ()=>{
    throw new Error("tapAsync is not supported on a SyncWaterfallHook");
};
const TAP_PROMISE = ()=>{
    throw new Error("tapPromise is not supported on a SyncWaterfallHook");
};
function COMPILE(options) {
    factory.setup(this, options);
    return factory.create(options);
}
function SyncWaterfallHook(args = [], name = undefined) {
    if (args.length < 1) {
        throw new Error("Waterfall hooks must have at least one argument");
    }
    const hook = new Hook(args, name);
    hook.constructor = SyncWaterfallHook;
    hook.tapAsync = TAP_ASYNC;
    hook.tapPromise = TAP_PROMISE;
    hook.compile = COMPILE;
    return hook;
}
SyncWaterfallHook.prototype = null;
module.exports = SyncWaterfallHook;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/index.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ module.exports.AsyncParallelBailHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncParallelBailHook.js [postcss] (ecmascript)");
module.exports.AsyncParallelHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncParallelHook.js [postcss] (ecmascript)");
module.exports.AsyncSeriesBailHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncSeriesBailHook.js [postcss] (ecmascript)");
module.exports.AsyncSeriesHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncSeriesHook.js [postcss] (ecmascript)");
module.exports.AsyncSeriesLoopHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncSeriesLoopHook.js [postcss] (ecmascript)");
module.exports.AsyncSeriesWaterfallHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/AsyncSeriesWaterfallHook.js [postcss] (ecmascript)");
module.exports.HookMap = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/HookMap.js [postcss] (ecmascript)");
module.exports.MultiHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/MultiHook.js [postcss] (ecmascript)");
module.exports.SyncBailHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/SyncBailHook.js [postcss] (ecmascript)");
module.exports.SyncHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/SyncHook.js [postcss] (ecmascript)");
module.exports.SyncLoopHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/SyncLoopHook.js [postcss] (ecmascript)");
module.exports.SyncWaterfallHook = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/tapable/lib/SyncWaterfallHook.js [postcss] (ecmascript)");
module.exports.__esModule = true;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.umd.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(global, factory) {
    if ("TURBOPACK compile-time truthy", 1) {
        factory(module);
        module.exports = def(module);
    } else //TURBOPACK unreachable
    ;
    function def(m) {
        return 'default' in m.exports ? m.exports.default : m.exports;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(module1) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all)=>{
        for(var name in all)__defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var __copyProps = (to, from, except, desc)=>{
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                get: ()=>from[key],
                enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
            });
        }
        return to;
    };
    var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    // src/sourcemap-codec.ts
    var sourcemap_codec_exports = {};
    __export(sourcemap_codec_exports, {
        decode: ()=>decode,
        decodeGeneratedRanges: ()=>decodeGeneratedRanges,
        decodeOriginalScopes: ()=>decodeOriginalScopes,
        encode: ()=>encode,
        encodeGeneratedRanges: ()=>encodeGeneratedRanges,
        encodeOriginalScopes: ()=>encodeOriginalScopes
    });
    module1.exports = __toCommonJS(sourcemap_codec_exports);
    // src/vlq.ts
    var comma = ",".charCodeAt(0);
    var semicolon = ";".charCodeAt(0);
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var intToChar = new Uint8Array(64);
    var charToInt = new Uint8Array(128);
    for(let i = 0; i < chars.length; i++){
        const c = chars.charCodeAt(i);
        intToChar[i] = c;
        charToInt[c] = i;
    }
    function decodeInteger(reader, relative) {
        let value = 0;
        let shift = 0;
        let integer = 0;
        do {
            const c = reader.next();
            integer = charToInt[c];
            value |= (integer & 31) << shift;
            shift += 5;
        }while (integer & 32)
        const shouldNegate = value & 1;
        value >>>= 1;
        if (shouldNegate) {
            value = -2147483648 | -value;
        }
        return relative + value;
    }
    function encodeInteger(builder, num, relative) {
        let delta = num - relative;
        delta = delta < 0 ? -delta << 1 | 1 : delta << 1;
        do {
            let clamped = delta & 31;
            delta >>>= 5;
            if (delta > 0) clamped |= 32;
            builder.write(intToChar[clamped]);
        }while (delta > 0)
        return num;
    }
    function hasMoreVlq(reader, max) {
        if (reader.pos >= max) return false;
        return reader.peek() !== comma;
    }
    // src/strings.ts
    var bufLength = 1024 * 16;
    var td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer !== "undefined" ? {
        decode (buf) {
            const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
            return out.toString();
        }
    } : {
        decode (buf) {
            let out = "";
            for(let i = 0; i < buf.length; i++){
                out += String.fromCharCode(buf[i]);
            }
            return out;
        }
    };
    var StringWriter = class {
        constructor(){
            this.pos = 0;
            this.out = "";
            this.buffer = new Uint8Array(bufLength);
        }
        write(v) {
            const { buffer } = this;
            buffer[this.pos++] = v;
            if (this.pos === bufLength) {
                this.out += td.decode(buffer);
                this.pos = 0;
            }
        }
        flush() {
            const { buffer, out, pos } = this;
            return pos > 0 ? out + td.decode(buffer.subarray(0, pos)) : out;
        }
    };
    var StringReader = class {
        constructor(buffer){
            this.pos = 0;
            this.buffer = buffer;
        }
        next() {
            return this.buffer.charCodeAt(this.pos++);
        }
        peek() {
            return this.buffer.charCodeAt(this.pos);
        }
        indexOf(char) {
            const { buffer, pos } = this;
            const idx = buffer.indexOf(char, pos);
            return idx === -1 ? buffer.length : idx;
        }
    };
    // src/scopes.ts
    var EMPTY = [];
    function decodeOriginalScopes(input) {
        const { length } = input;
        const reader = new StringReader(input);
        const scopes = [];
        const stack = [];
        let line = 0;
        for(; reader.pos < length; reader.pos++){
            line = decodeInteger(reader, line);
            const column = decodeInteger(reader, 0);
            if (!hasMoreVlq(reader, length)) {
                const last = stack.pop();
                last[2] = line;
                last[3] = column;
                continue;
            }
            const kind = decodeInteger(reader, 0);
            const fields = decodeInteger(reader, 0);
            const hasName = fields & 1;
            const scope = hasName ? [
                line,
                column,
                0,
                0,
                kind,
                decodeInteger(reader, 0)
            ] : [
                line,
                column,
                0,
                0,
                kind
            ];
            let vars = EMPTY;
            if (hasMoreVlq(reader, length)) {
                vars = [];
                do {
                    const varsIndex = decodeInteger(reader, 0);
                    vars.push(varsIndex);
                }while (hasMoreVlq(reader, length))
            }
            scope.vars = vars;
            scopes.push(scope);
            stack.push(scope);
        }
        return scopes;
    }
    function encodeOriginalScopes(scopes) {
        const writer = new StringWriter();
        for(let i = 0; i < scopes.length;){
            i = _encodeOriginalScopes(scopes, i, writer, [
                0
            ]);
        }
        return writer.flush();
    }
    function _encodeOriginalScopes(scopes, index, writer, state) {
        const scope = scopes[index];
        const { 0: startLine, 1: startColumn, 2: endLine, 3: endColumn, 4: kind, vars } = scope;
        if (index > 0) writer.write(comma);
        state[0] = encodeInteger(writer, startLine, state[0]);
        encodeInteger(writer, startColumn, 0);
        encodeInteger(writer, kind, 0);
        const fields = scope.length === 6 ? 1 : 0;
        encodeInteger(writer, fields, 0);
        if (scope.length === 6) encodeInteger(writer, scope[5], 0);
        for (const v of vars){
            encodeInteger(writer, v, 0);
        }
        for(index++; index < scopes.length;){
            const next = scopes[index];
            const { 0: l, 1: c } = next;
            if (l > endLine || l === endLine && c >= endColumn) {
                break;
            }
            index = _encodeOriginalScopes(scopes, index, writer, state);
        }
        writer.write(comma);
        state[0] = encodeInteger(writer, endLine, state[0]);
        encodeInteger(writer, endColumn, 0);
        return index;
    }
    function decodeGeneratedRanges(input) {
        const { length } = input;
        const reader = new StringReader(input);
        const ranges = [];
        const stack = [];
        let genLine = 0;
        let definitionSourcesIndex = 0;
        let definitionScopeIndex = 0;
        let callsiteSourcesIndex = 0;
        let callsiteLine = 0;
        let callsiteColumn = 0;
        let bindingLine = 0;
        let bindingColumn = 0;
        do {
            const semi = reader.indexOf(";");
            let genColumn = 0;
            for(; reader.pos < semi; reader.pos++){
                genColumn = decodeInteger(reader, genColumn);
                if (!hasMoreVlq(reader, semi)) {
                    const last = stack.pop();
                    last[2] = genLine;
                    last[3] = genColumn;
                    continue;
                }
                const fields = decodeInteger(reader, 0);
                const hasDefinition = fields & 1;
                const hasCallsite = fields & 2;
                const hasScope = fields & 4;
                let callsite = null;
                let bindings = EMPTY;
                let range;
                if (hasDefinition) {
                    const defSourcesIndex = decodeInteger(reader, definitionSourcesIndex);
                    definitionScopeIndex = decodeInteger(reader, definitionSourcesIndex === defSourcesIndex ? definitionScopeIndex : 0);
                    definitionSourcesIndex = defSourcesIndex;
                    range = [
                        genLine,
                        genColumn,
                        0,
                        0,
                        defSourcesIndex,
                        definitionScopeIndex
                    ];
                } else {
                    range = [
                        genLine,
                        genColumn,
                        0,
                        0
                    ];
                }
                range.isScope = !!hasScope;
                if (hasCallsite) {
                    const prevCsi = callsiteSourcesIndex;
                    const prevLine = callsiteLine;
                    callsiteSourcesIndex = decodeInteger(reader, callsiteSourcesIndex);
                    const sameSource = prevCsi === callsiteSourcesIndex;
                    callsiteLine = decodeInteger(reader, sameSource ? callsiteLine : 0);
                    callsiteColumn = decodeInteger(reader, sameSource && prevLine === callsiteLine ? callsiteColumn : 0);
                    callsite = [
                        callsiteSourcesIndex,
                        callsiteLine,
                        callsiteColumn
                    ];
                }
                range.callsite = callsite;
                if (hasMoreVlq(reader, semi)) {
                    bindings = [];
                    do {
                        bindingLine = genLine;
                        bindingColumn = genColumn;
                        const expressionsCount = decodeInteger(reader, 0);
                        let expressionRanges;
                        if (expressionsCount < -1) {
                            expressionRanges = [
                                [
                                    decodeInteger(reader, 0)
                                ]
                            ];
                            for(let i = -1; i > expressionsCount; i--){
                                const prevBl = bindingLine;
                                bindingLine = decodeInteger(reader, bindingLine);
                                bindingColumn = decodeInteger(reader, bindingLine === prevBl ? bindingColumn : 0);
                                const expression = decodeInteger(reader, 0);
                                expressionRanges.push([
                                    expression,
                                    bindingLine,
                                    bindingColumn
                                ]);
                            }
                        } else {
                            expressionRanges = [
                                [
                                    expressionsCount
                                ]
                            ];
                        }
                        bindings.push(expressionRanges);
                    }while (hasMoreVlq(reader, semi))
                }
                range.bindings = bindings;
                ranges.push(range);
                stack.push(range);
            }
            genLine++;
            reader.pos = semi + 1;
        }while (reader.pos < length)
        return ranges;
    }
    function encodeGeneratedRanges(ranges) {
        if (ranges.length === 0) return "";
        const writer = new StringWriter();
        for(let i = 0; i < ranges.length;){
            i = _encodeGeneratedRanges(ranges, i, writer, [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]);
        }
        return writer.flush();
    }
    function _encodeGeneratedRanges(ranges, index, writer, state) {
        const range = ranges[index];
        const { 0: startLine, 1: startColumn, 2: endLine, 3: endColumn, isScope, callsite, bindings } = range;
        if (state[0] < startLine) {
            catchupLine(writer, state[0], startLine);
            state[0] = startLine;
            state[1] = 0;
        } else if (index > 0) {
            writer.write(comma);
        }
        state[1] = encodeInteger(writer, range[1], state[1]);
        const fields = (range.length === 6 ? 1 : 0) | (callsite ? 2 : 0) | (isScope ? 4 : 0);
        encodeInteger(writer, fields, 0);
        if (range.length === 6) {
            const { 4: sourcesIndex, 5: scopesIndex } = range;
            if (sourcesIndex !== state[2]) {
                state[3] = 0;
            }
            state[2] = encodeInteger(writer, sourcesIndex, state[2]);
            state[3] = encodeInteger(writer, scopesIndex, state[3]);
        }
        if (callsite) {
            const { 0: sourcesIndex, 1: callLine, 2: callColumn } = range.callsite;
            if (sourcesIndex !== state[4]) {
                state[5] = 0;
                state[6] = 0;
            } else if (callLine !== state[5]) {
                state[6] = 0;
            }
            state[4] = encodeInteger(writer, sourcesIndex, state[4]);
            state[5] = encodeInteger(writer, callLine, state[5]);
            state[6] = encodeInteger(writer, callColumn, state[6]);
        }
        if (bindings) {
            for (const binding of bindings){
                if (binding.length > 1) encodeInteger(writer, -binding.length, 0);
                const expression = binding[0][0];
                encodeInteger(writer, expression, 0);
                let bindingStartLine = startLine;
                let bindingStartColumn = startColumn;
                for(let i = 1; i < binding.length; i++){
                    const expRange = binding[i];
                    bindingStartLine = encodeInteger(writer, expRange[1], bindingStartLine);
                    bindingStartColumn = encodeInteger(writer, expRange[2], bindingStartColumn);
                    encodeInteger(writer, expRange[0], 0);
                }
            }
        }
        for(index++; index < ranges.length;){
            const next = ranges[index];
            const { 0: l, 1: c } = next;
            if (l > endLine || l === endLine && c >= endColumn) {
                break;
            }
            index = _encodeGeneratedRanges(ranges, index, writer, state);
        }
        if (state[0] < endLine) {
            catchupLine(writer, state[0], endLine);
            state[0] = endLine;
            state[1] = 0;
        } else {
            writer.write(comma);
        }
        state[1] = encodeInteger(writer, endColumn, state[1]);
        return index;
    }
    function catchupLine(writer, lastLine, line) {
        do {
            writer.write(semicolon);
        }while (++lastLine < line)
    }
    // src/sourcemap-codec.ts
    function decode(mappings) {
        const { length } = mappings;
        const reader = new StringReader(mappings);
        const decoded = [];
        let genColumn = 0;
        let sourcesIndex = 0;
        let sourceLine = 0;
        let sourceColumn = 0;
        let namesIndex = 0;
        do {
            const semi = reader.indexOf(";");
            const line = [];
            let sorted = true;
            let lastCol = 0;
            genColumn = 0;
            while(reader.pos < semi){
                let seg;
                genColumn = decodeInteger(reader, genColumn);
                if (genColumn < lastCol) sorted = false;
                lastCol = genColumn;
                if (hasMoreVlq(reader, semi)) {
                    sourcesIndex = decodeInteger(reader, sourcesIndex);
                    sourceLine = decodeInteger(reader, sourceLine);
                    sourceColumn = decodeInteger(reader, sourceColumn);
                    if (hasMoreVlq(reader, semi)) {
                        namesIndex = decodeInteger(reader, namesIndex);
                        seg = [
                            genColumn,
                            sourcesIndex,
                            sourceLine,
                            sourceColumn,
                            namesIndex
                        ];
                    } else {
                        seg = [
                            genColumn,
                            sourcesIndex,
                            sourceLine,
                            sourceColumn
                        ];
                    }
                } else {
                    seg = [
                        genColumn
                    ];
                }
                line.push(seg);
                reader.pos++;
            }
            if (!sorted) sort(line);
            decoded.push(line);
            reader.pos = semi + 1;
        }while (reader.pos <= length)
        return decoded;
    }
    function sort(line) {
        line.sort(sortComparator);
    }
    function sortComparator(a, b) {
        return a[0] - b[0];
    }
    function encode(decoded) {
        const writer = new StringWriter();
        let sourcesIndex = 0;
        let sourceLine = 0;
        let sourceColumn = 0;
        let namesIndex = 0;
        for(let i = 0; i < decoded.length; i++){
            const line = decoded[i];
            if (i > 0) writer.write(semicolon);
            if (line.length === 0) continue;
            let genColumn = 0;
            for(let j = 0; j < line.length; j++){
                const segment = line[j];
                if (j > 0) writer.write(comma);
                genColumn = encodeInteger(writer, segment[0], genColumn);
                if (segment.length === 1) continue;
                sourcesIndex = encodeInteger(writer, segment[1], sourcesIndex);
                sourceLine = encodeInteger(writer, segment[2], sourceLine);
                sourceColumn = encodeInteger(writer, segment[3], sourceColumn);
                if (segment.length === 4) continue;
                namesIndex = encodeInteger(writer, segment[4], namesIndex);
            }
        }
        return writer.flush();
    }
}); //# sourceMappingURL=sourcemap-codec.umd.js.map
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.umd.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = factory() : "TURBOPACK unreachable";
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    'use strict';
    // Matches the scheme of a URL, eg "http://"
    const schemeRegex = /^[\w+.-]+:\/\//;
    /**
     * Matches the parts of a URL:
     * 1. Scheme, including ":", guaranteed.
     * 2. User/password, including "@", optional.
     * 3. Host, guaranteed.
     * 4. Port, including ":", optional.
     * 5. Path, including "/", optional.
     * 6. Query, including "?", optional.
     * 7. Hash, including "#", optional.
     */ const urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
    /**
     * File URLs are weird. They dont' need the regular `//` in the scheme, they may or may not start
     * with a leading `/`, they can have a domain (but only if they don't start with a Windows drive).
     *
     * 1. Host, optional.
     * 2. Path, which may include "/", guaranteed.
     * 3. Query, including "?", optional.
     * 4. Hash, including "#", optional.
     */ const fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
    function isAbsoluteUrl(input) {
        return schemeRegex.test(input);
    }
    function isSchemeRelativeUrl(input) {
        return input.startsWith('//');
    }
    function isAbsolutePath(input) {
        return input.startsWith('/');
    }
    function isFileUrl(input) {
        return input.startsWith('file:');
    }
    function isRelative(input) {
        return /^[.?#]/.test(input);
    }
    function parseAbsoluteUrl(input) {
        const match = urlRegex.exec(input);
        return makeUrl(match[1], match[2] || '', match[3], match[4] || '', match[5] || '/', match[6] || '', match[7] || '');
    }
    function parseFileUrl(input) {
        const match = fileRegex.exec(input);
        const path = match[2];
        return makeUrl('file:', '', match[1] || '', '', isAbsolutePath(path) ? path : '/' + path, match[3] || '', match[4] || '');
    }
    function makeUrl(scheme, user, host, port, path, query, hash) {
        return {
            scheme,
            user,
            host,
            port,
            path,
            query,
            hash,
            type: 7 /* Absolute */ 
        };
    }
    function parseUrl(input) {
        if (isSchemeRelativeUrl(input)) {
            const url = parseAbsoluteUrl('http:' + input);
            url.scheme = '';
            url.type = 6 /* SchemeRelative */ ;
            return url;
        }
        if (isAbsolutePath(input)) {
            const url = parseAbsoluteUrl('http://foo.com' + input);
            url.scheme = '';
            url.host = '';
            url.type = 5 /* AbsolutePath */ ;
            return url;
        }
        if (isFileUrl(input)) return parseFileUrl(input);
        if (isAbsoluteUrl(input)) return parseAbsoluteUrl(input);
        const url = parseAbsoluteUrl('http://foo.com/' + input);
        url.scheme = '';
        url.host = '';
        url.type = input ? input.startsWith('?') ? 3 /* Query */  : input.startsWith('#') ? 2 /* Hash */  : 4 /* RelativePath */  : 1 /* Empty */ ;
        return url;
    }
    function stripPathFilename(path) {
        // If a path ends with a parent directory "..", then it's a relative path with excess parent
        // paths. It's not a file, so we can't strip it.
        if (path.endsWith('/..')) return path;
        const index = path.lastIndexOf('/');
        return path.slice(0, index + 1);
    }
    function mergePaths(url, base) {
        normalizePath(base, base.type);
        // If the path is just a "/", then it was an empty path to begin with (remember, we're a relative
        // path).
        if (url.path === '/') {
            url.path = base.path;
        } else {
            // Resolution happens relative to the base path's directory, not the file.
            url.path = stripPathFilename(base.path) + url.path;
        }
    }
    /**
     * The path can have empty directories "//", unneeded parents "foo/..", or current directory
     * "foo/.". We need to normalize to a standard representation.
     */ function normalizePath(url, type) {
        const rel = type <= 4 /* RelativePath */ ;
        const pieces = url.path.split('/');
        // We need to preserve the first piece always, so that we output a leading slash. The item at
        // pieces[0] is an empty string.
        let pointer = 1;
        // Positive is the number of real directories we've output, used for popping a parent directory.
        // Eg, "foo/bar/.." will have a positive 2, and we can decrement to be left with just "foo".
        let positive = 0;
        // We need to keep a trailing slash if we encounter an empty directory (eg, splitting "foo/" will
        // generate `["foo", ""]` pieces). And, if we pop a parent directory. But once we encounter a
        // real directory, we won't need to append, unless the other conditions happen again.
        let addTrailingSlash = false;
        for(let i = 1; i < pieces.length; i++){
            const piece = pieces[i];
            // An empty directory, could be a trailing slash, or just a double "//" in the path.
            if (!piece) {
                addTrailingSlash = true;
                continue;
            }
            // If we encounter a real directory, then we don't need to append anymore.
            addTrailingSlash = false;
            // A current directory, which we can always drop.
            if (piece === '.') continue;
            // A parent directory, we need to see if there are any real directories we can pop. Else, we
            // have an excess of parents, and we'll need to keep the "..".
            if (piece === '..') {
                if (positive) {
                    addTrailingSlash = true;
                    positive--;
                    pointer--;
                } else if (rel) {
                    // If we're in a relativePath, then we need to keep the excess parents. Else, in an absolute
                    // URL, protocol relative URL, or an absolute path, we don't need to keep excess.
                    pieces[pointer++] = piece;
                }
                continue;
            }
            // We've encountered a real directory. Move it to the next insertion pointer, which accounts for
            // any popped or dropped directories.
            pieces[pointer++] = piece;
            positive++;
        }
        let path = '';
        for(let i = 1; i < pointer; i++){
            path += '/' + pieces[i];
        }
        if (!path || addTrailingSlash && !path.endsWith('/..')) {
            path += '/';
        }
        url.path = path;
    }
    /**
     * Attempts to resolve `input` URL/path relative to `base`.
     */ function resolve(input, base) {
        if (!input && !base) return '';
        const url = parseUrl(input);
        let inputType = url.type;
        if (base && inputType !== 7 /* Absolute */ ) {
            const baseUrl = parseUrl(base);
            const baseType = baseUrl.type;
            switch(inputType){
                case 1 /* Empty */ :
                    url.hash = baseUrl.hash;
                // fall through
                case 2 /* Hash */ :
                    url.query = baseUrl.query;
                // fall through
                case 3 /* Query */ :
                case 4 /* RelativePath */ :
                    mergePaths(url, baseUrl);
                // fall through
                case 5 /* AbsolutePath */ :
                    // The host, user, and port are joined, you can't copy one without the others.
                    url.user = baseUrl.user;
                    url.host = baseUrl.host;
                    url.port = baseUrl.port;
                // fall through
                case 6 /* SchemeRelative */ :
                    // The input doesn't have a schema at least, so we need to copy at least that over.
                    url.scheme = baseUrl.scheme;
            }
            if (baseType > inputType) inputType = baseType;
        }
        normalizePath(url, inputType);
        const queryHash = url.query + url.hash;
        switch(inputType){
            // This is impossible, because of the empty checks at the start of the function.
            // case UrlType.Empty:
            case 2 /* Hash */ :
            case 3 /* Query */ :
                return queryHash;
            case 4 /* RelativePath */ :
                {
                    // The first char is always a "/", and we need it to be relative.
                    const path = url.path.slice(1);
                    if (!path) return queryHash || '.';
                    if (isRelative(base || input) && !isRelative(path)) {
                        // If base started with a leading ".", or there is no base and input started with a ".",
                        // then we need to ensure that the relative path starts with a ".". We don't know if
                        // relative starts with a "..", though, so check before prepending.
                        return './' + path + queryHash;
                    }
                    return path + queryHash;
                }
            case 5 /* AbsolutePath */ :
                return url.path + queryHash;
            default:
                return url.scheme + '//' + url.user + url.host + url.port + url.path + queryHash;
        }
    }
    return resolve;
}); //# sourceMappingURL=resolve-uri.umd.js.map
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.umd.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(global, factory) {
    if ("TURBOPACK compile-time truthy", 1) {
        factory(module, __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.umd.js [postcss] (ecmascript)"), __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.umd.js [postcss] (ecmascript)"));
        module.exports = def(module);
    } else //TURBOPACK unreachable
    ;
    function def(m) {
        return 'default' in m.exports ? m.exports.default : m.exports;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(module1, require_resolveURI, require_sourcemapCodec) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = (cb, mod)=>function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod), mod.exports;
        };
    var __export = (target, all)=>{
        for(var name in all)__defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var __copyProps = (to, from, except, desc)=>{
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                get: ()=>from[key],
                enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
            });
        }
        return to;
    };
    var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
            value: mod,
            enumerable: true
        }) : target, mod));
    var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    // umd:@jridgewell/sourcemap-codec
    var require_sourcemap_codec = __commonJS({
        "umd:@jridgewell/sourcemap-codec" (exports, module2) {
            module2.exports = require_sourcemapCodec;
        }
    });
    // umd:@jridgewell/resolve-uri
    var require_resolve_uri = __commonJS({
        "umd:@jridgewell/resolve-uri" (exports, module2) {
            module2.exports = require_resolveURI;
        }
    });
    // src/trace-mapping.ts
    var trace_mapping_exports = {};
    __export(trace_mapping_exports, {
        AnyMap: ()=>FlattenMap,
        FlattenMap: ()=>FlattenMap,
        GREATEST_LOWER_BOUND: ()=>GREATEST_LOWER_BOUND,
        LEAST_UPPER_BOUND: ()=>LEAST_UPPER_BOUND,
        TraceMap: ()=>TraceMap,
        allGeneratedPositionsFor: ()=>allGeneratedPositionsFor,
        decodedMap: ()=>decodedMap,
        decodedMappings: ()=>decodedMappings,
        eachMapping: ()=>eachMapping,
        encodedMap: ()=>encodedMap,
        encodedMappings: ()=>encodedMappings,
        generatedPositionFor: ()=>generatedPositionFor,
        isIgnored: ()=>isIgnored,
        originalPositionFor: ()=>originalPositionFor,
        presortedDecodedMap: ()=>presortedDecodedMap,
        sourceContentFor: ()=>sourceContentFor,
        traceSegment: ()=>traceSegment
    });
    module1.exports = __toCommonJS(trace_mapping_exports);
    var import_sourcemap_codec = __toESM(require_sourcemap_codec());
    // src/resolve.ts
    var import_resolve_uri = __toESM(require_resolve_uri());
    // src/strip-filename.ts
    function stripFilename(path) {
        if (!path) return "";
        const index = path.lastIndexOf("/");
        return path.slice(0, index + 1);
    }
    // src/resolve.ts
    function resolver(mapUrl, sourceRoot) {
        const from = stripFilename(mapUrl);
        const prefix = sourceRoot ? sourceRoot + "/" : "";
        return (source)=>(0, import_resolve_uri.default)(prefix + (source || ""), from);
    }
    // src/sourcemap-segment.ts
    var COLUMN = 0;
    var SOURCES_INDEX = 1;
    var SOURCE_LINE = 2;
    var SOURCE_COLUMN = 3;
    var NAMES_INDEX = 4;
    var REV_GENERATED_LINE = 1;
    var REV_GENERATED_COLUMN = 2;
    // src/sort.ts
    function maybeSort(mappings, owned) {
        const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
        if (unsortedIndex === mappings.length) return mappings;
        if (!owned) mappings = mappings.slice();
        for(let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1)){
            mappings[i] = sortSegments(mappings[i], owned);
        }
        return mappings;
    }
    function nextUnsortedSegmentLine(mappings, start) {
        for(let i = start; i < mappings.length; i++){
            if (!isSorted(mappings[i])) return i;
        }
        return mappings.length;
    }
    function isSorted(line) {
        for(let j = 1; j < line.length; j++){
            if (line[j][COLUMN] < line[j - 1][COLUMN]) {
                return false;
            }
        }
        return true;
    }
    function sortSegments(line, owned) {
        if (!owned) line = line.slice();
        return line.sort(sortComparator);
    }
    function sortComparator(a, b) {
        return a[COLUMN] - b[COLUMN];
    }
    // src/by-source.ts
    function buildBySources(decoded, memos) {
        const sources = memos.map(()=>[]);
        for(let i = 0; i < decoded.length; i++){
            const line = decoded[i];
            for(let j = 0; j < line.length; j++){
                const seg = line[j];
                if (seg.length === 1) continue;
                const sourceIndex2 = seg[SOURCES_INDEX];
                const sourceLine = seg[SOURCE_LINE];
                const sourceColumn = seg[SOURCE_COLUMN];
                const source = sources[sourceIndex2];
                const segs = source[sourceLine] || (source[sourceLine] = []);
                segs.push([
                    sourceColumn,
                    i,
                    seg[COLUMN]
                ]);
            }
        }
        for(let i = 0; i < sources.length; i++){
            const source = sources[i];
            for(let j = 0; j < source.length; j++){
                const line = source[j];
                if (line) line.sort(sortComparator);
            }
        }
        return sources;
    }
    // src/binary-search.ts
    var found = false;
    function binarySearch(haystack, needle, low, high) {
        while(low <= high){
            const mid = low + (high - low >> 1);
            const cmp = haystack[mid][COLUMN] - needle;
            if (cmp === 0) {
                found = true;
                return mid;
            }
            if (cmp < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        found = false;
        return low - 1;
    }
    function upperBound(haystack, needle, index) {
        for(let i = index + 1; i < haystack.length; index = i++){
            if (haystack[i][COLUMN] !== needle) break;
        }
        return index;
    }
    function lowerBound(haystack, needle, index) {
        for(let i = index - 1; i >= 0; index = i--){
            if (haystack[i][COLUMN] !== needle) break;
        }
        return index;
    }
    function memoizedState() {
        return {
            lastKey: -1,
            lastNeedle: -1,
            lastIndex: -1
        };
    }
    function memoizedBinarySearch(haystack, needle, state, key) {
        const { lastKey, lastNeedle, lastIndex } = state;
        let low = 0;
        let high = haystack.length - 1;
        if (key === lastKey) {
            if (needle === lastNeedle) {
                found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle;
                return lastIndex;
            }
            if (needle >= lastNeedle) {
                low = lastIndex === -1 ? 0 : lastIndex;
            } else {
                high = lastIndex;
            }
        }
        state.lastKey = key;
        state.lastNeedle = needle;
        return state.lastIndex = binarySearch(haystack, needle, low, high);
    }
    // src/types.ts
    function parse(map) {
        return typeof map === "string" ? JSON.parse(map) : map;
    }
    // src/flatten-map.ts
    var FlattenMap = function(map, mapUrl) {
        const parsed = parse(map);
        if (!("sections" in parsed)) {
            return new TraceMap(parsed, mapUrl);
        }
        const mappings = [];
        const sources = [];
        const sourcesContent = [];
        const names = [];
        const ignoreList = [];
        recurse(parsed, mapUrl, mappings, sources, sourcesContent, names, ignoreList, 0, 0, Infinity, Infinity);
        const joined = {
            version: 3,
            file: parsed.file,
            names,
            sources,
            sourcesContent,
            mappings,
            ignoreList
        };
        return presortedDecodedMap(joined);
    };
    function recurse(input, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset, columnOffset, stopLine, stopColumn) {
        const { sections } = input;
        for(let i = 0; i < sections.length; i++){
            const { map, offset } = sections[i];
            let sl = stopLine;
            let sc = stopColumn;
            if (i + 1 < sections.length) {
                const nextOffset = sections[i + 1].offset;
                sl = Math.min(stopLine, lineOffset + nextOffset.line);
                if (sl === stopLine) {
                    sc = Math.min(stopColumn, columnOffset + nextOffset.column);
                } else if (sl < stopLine) {
                    sc = columnOffset + nextOffset.column;
                }
            }
            addSection(map, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset + offset.line, columnOffset + offset.column, sl, sc);
        }
    }
    function addSection(input, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset, columnOffset, stopLine, stopColumn) {
        const parsed = parse(input);
        if ("sections" in parsed) return recurse(...arguments);
        const map = new TraceMap(parsed, mapUrl);
        const sourcesOffset = sources.length;
        const namesOffset = names.length;
        const decoded = decodedMappings(map);
        const { resolvedSources, sourcesContent: contents, ignoreList: ignores } = map;
        append(sources, resolvedSources);
        append(names, map.names);
        if (contents) append(sourcesContent, contents);
        else for(let i = 0; i < resolvedSources.length; i++)sourcesContent.push(null);
        if (ignores) for(let i = 0; i < ignores.length; i++)ignoreList.push(ignores[i] + sourcesOffset);
        for(let i = 0; i < decoded.length; i++){
            const lineI = lineOffset + i;
            if (lineI > stopLine) return;
            const out = getLine(mappings, lineI);
            const cOffset = i === 0 ? columnOffset : 0;
            const line = decoded[i];
            for(let j = 0; j < line.length; j++){
                const seg = line[j];
                const column = cOffset + seg[COLUMN];
                if (lineI === stopLine && column >= stopColumn) return;
                if (seg.length === 1) {
                    out.push([
                        column
                    ]);
                    continue;
                }
                const sourcesIndex = sourcesOffset + seg[SOURCES_INDEX];
                const sourceLine = seg[SOURCE_LINE];
                const sourceColumn = seg[SOURCE_COLUMN];
                out.push(seg.length === 4 ? [
                    column,
                    sourcesIndex,
                    sourceLine,
                    sourceColumn
                ] : [
                    column,
                    sourcesIndex,
                    sourceLine,
                    sourceColumn,
                    namesOffset + seg[NAMES_INDEX]
                ]);
            }
        }
    }
    function append(arr, other) {
        for(let i = 0; i < other.length; i++)arr.push(other[i]);
    }
    function getLine(arr, index) {
        for(let i = arr.length; i <= index; i++)arr[i] = [];
        return arr[index];
    }
    // src/trace-mapping.ts
    var LINE_GTR_ZERO = "`line` must be greater than 0 (lines start at line 1)";
    var COL_GTR_EQ_ZERO = "`column` must be greater than or equal to 0 (columns start at column 0)";
    var LEAST_UPPER_BOUND = -1;
    var GREATEST_LOWER_BOUND = 1;
    var TraceMap = class {
        constructor(map, mapUrl){
            const isString = typeof map === "string";
            if (!isString && map._decodedMemo) return map;
            const parsed = parse(map);
            const { version, file, names, sourceRoot, sources, sourcesContent } = parsed;
            this.version = version;
            this.file = file;
            this.names = names || [];
            this.sourceRoot = sourceRoot;
            this.sources = sources;
            this.sourcesContent = sourcesContent;
            this.ignoreList = parsed.ignoreList || parsed.x_google_ignoreList || void 0;
            const resolve = resolver(mapUrl, sourceRoot);
            this.resolvedSources = sources.map(resolve);
            const { mappings } = parsed;
            if (typeof mappings === "string") {
                this._encoded = mappings;
                this._decoded = void 0;
            } else if (Array.isArray(mappings)) {
                this._encoded = void 0;
                this._decoded = maybeSort(mappings, isString);
            } else if (parsed.sections) {
                throw new Error(`TraceMap passed sectioned source map, please use FlattenMap export instead`);
            } else {
                throw new Error(`invalid source map: ${JSON.stringify(parsed)}`);
            }
            this._decodedMemo = memoizedState();
            this._bySources = void 0;
            this._bySourceMemos = void 0;
        }
    };
    function cast(map) {
        return map;
    }
    function encodedMappings(map) {
        var _a, _b;
        return (_b = (_a = cast(map))._encoded) != null ? _b : _a._encoded = (0, import_sourcemap_codec.encode)(cast(map)._decoded);
    }
    function decodedMappings(map) {
        var _a;
        return (_a = cast(map))._decoded || (_a._decoded = (0, import_sourcemap_codec.decode)(cast(map)._encoded));
    }
    function traceSegment(map, line, column) {
        const decoded = decodedMappings(map);
        if (line >= decoded.length) return null;
        const segments = decoded[line];
        const index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, GREATEST_LOWER_BOUND);
        return index === -1 ? null : segments[index];
    }
    function originalPositionFor(map, needle) {
        let { line, column, bias } = needle;
        line--;
        if (line < 0) throw new Error(LINE_GTR_ZERO);
        if (column < 0) throw new Error(COL_GTR_EQ_ZERO);
        const decoded = decodedMappings(map);
        if (line >= decoded.length) return OMapping(null, null, null, null);
        const segments = decoded[line];
        const index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND);
        if (index === -1) return OMapping(null, null, null, null);
        const segment = segments[index];
        if (segment.length === 1) return OMapping(null, null, null, null);
        const { names, resolvedSources } = map;
        return OMapping(resolvedSources[segment[SOURCES_INDEX]], segment[SOURCE_LINE] + 1, segment[SOURCE_COLUMN], segment.length === 5 ? names[segment[NAMES_INDEX]] : null);
    }
    function generatedPositionFor(map, needle) {
        const { source, line, column, bias } = needle;
        return generatedPosition(map, source, line, column, bias || GREATEST_LOWER_BOUND, false);
    }
    function allGeneratedPositionsFor(map, needle) {
        const { source, line, column, bias } = needle;
        return generatedPosition(map, source, line, column, bias || LEAST_UPPER_BOUND, true);
    }
    function eachMapping(map, cb) {
        const decoded = decodedMappings(map);
        const { names, resolvedSources } = map;
        for(let i = 0; i < decoded.length; i++){
            const line = decoded[i];
            for(let j = 0; j < line.length; j++){
                const seg = line[j];
                const generatedLine = i + 1;
                const generatedColumn = seg[0];
                let source = null;
                let originalLine = null;
                let originalColumn = null;
                let name = null;
                if (seg.length !== 1) {
                    source = resolvedSources[seg[1]];
                    originalLine = seg[2] + 1;
                    originalColumn = seg[3];
                }
                if (seg.length === 5) name = names[seg[4]];
                cb({
                    generatedLine,
                    generatedColumn,
                    source,
                    originalLine,
                    originalColumn,
                    name
                });
            }
        }
    }
    function sourceIndex(map, source) {
        const { sources, resolvedSources } = map;
        let index = sources.indexOf(source);
        if (index === -1) index = resolvedSources.indexOf(source);
        return index;
    }
    function sourceContentFor(map, source) {
        const { sourcesContent } = map;
        if (sourcesContent == null) return null;
        const index = sourceIndex(map, source);
        return index === -1 ? null : sourcesContent[index];
    }
    function isIgnored(map, source) {
        const { ignoreList } = map;
        if (ignoreList == null) return false;
        const index = sourceIndex(map, source);
        return index === -1 ? false : ignoreList.includes(index);
    }
    function presortedDecodedMap(map, mapUrl) {
        const tracer = new TraceMap(clone(map, []), mapUrl);
        cast(tracer)._decoded = map.mappings;
        return tracer;
    }
    function decodedMap(map) {
        return clone(map, decodedMappings(map));
    }
    function encodedMap(map) {
        return clone(map, encodedMappings(map));
    }
    function clone(map, mappings) {
        return {
            version: map.version,
            file: map.file,
            names: map.names,
            sourceRoot: map.sourceRoot,
            sources: map.sources,
            sourcesContent: map.sourcesContent,
            mappings,
            ignoreList: map.ignoreList || map.x_google_ignoreList
        };
    }
    function OMapping(source, line, column, name) {
        return {
            source,
            line,
            column,
            name
        };
    }
    function GMapping(line, column) {
        return {
            line,
            column
        };
    }
    function traceSegmentInternal(segments, memo, line, column, bias) {
        let index = memoizedBinarySearch(segments, column, memo, line);
        if (found) {
            index = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index);
        } else if (bias === LEAST_UPPER_BOUND) index++;
        if (index === -1 || index === segments.length) return -1;
        return index;
    }
    function sliceGeneratedPositions(segments, memo, line, column, bias) {
        let min = traceSegmentInternal(segments, memo, line, column, GREATEST_LOWER_BOUND);
        if (!found && bias === LEAST_UPPER_BOUND) min++;
        if (min === -1 || min === segments.length) return [];
        const matchedColumn = found ? column : segments[min][COLUMN];
        if (!found) min = lowerBound(segments, matchedColumn, min);
        const max = upperBound(segments, matchedColumn, min);
        const result = [];
        for(; min <= max; min++){
            const segment = segments[min];
            result.push(GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]));
        }
        return result;
    }
    function generatedPosition(map, source, line, column, bias, all) {
        var _a, _b;
        line--;
        if (line < 0) throw new Error(LINE_GTR_ZERO);
        if (column < 0) throw new Error(COL_GTR_EQ_ZERO);
        const { sources, resolvedSources } = map;
        let sourceIndex2 = sources.indexOf(source);
        if (sourceIndex2 === -1) sourceIndex2 = resolvedSources.indexOf(source);
        if (sourceIndex2 === -1) return all ? [] : GMapping(null, null);
        const bySourceMemos = (_a = cast(map))._bySourceMemos || (_a._bySourceMemos = sources.map(memoizedState));
        const generated = (_b = cast(map))._bySources || (_b._bySources = buildBySources(decodedMappings(map), bySourceMemos));
        const segments = generated[sourceIndex2][line];
        if (segments == null) return all ? [] : GMapping(null, null);
        const memo = bySourceMemos[sourceIndex2];
        if (all) return sliceGeneratedPositions(segments, memo, line, column, bias);
        const index = traceSegmentInternal(segments, memo, line, column, bias);
        if (index === -1) return GMapping(null, null);
        const segment = segments[index];
        return GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]);
    }
}); //# sourceMappingURL=trace-mapping.umd.js.map
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/gen-mapping/dist/gen-mapping.umd.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(global, factory) {
    if ("TURBOPACK compile-time truthy", 1) {
        factory(module, __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.umd.js [postcss] (ecmascript)"), __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.umd.js [postcss] (ecmascript)"));
        module.exports = def(module);
    } else //TURBOPACK unreachable
    ;
    function def(m) {
        return 'default' in m.exports ? m.exports.default : m.exports;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(module1, require_sourcemapCodec, require_traceMapping) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = (cb, mod)=>function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod), mod.exports;
        };
    var __export = (target, all)=>{
        for(var name in all)__defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var __copyProps = (to, from, except, desc)=>{
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                get: ()=>from[key],
                enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
            });
        }
        return to;
    };
    var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
            value: mod,
            enumerable: true
        }) : target, mod));
    var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    // umd:@jridgewell/sourcemap-codec
    var require_sourcemap_codec = __commonJS({
        "umd:@jridgewell/sourcemap-codec" (exports, module2) {
            module2.exports = require_sourcemapCodec;
        }
    });
    // umd:@jridgewell/trace-mapping
    var require_trace_mapping = __commonJS({
        "umd:@jridgewell/trace-mapping" (exports, module2) {
            module2.exports = require_traceMapping;
        }
    });
    // src/gen-mapping.ts
    var gen_mapping_exports = {};
    __export(gen_mapping_exports, {
        GenMapping: ()=>GenMapping,
        addMapping: ()=>addMapping,
        addSegment: ()=>addSegment,
        allMappings: ()=>allMappings,
        fromMap: ()=>fromMap,
        maybeAddMapping: ()=>maybeAddMapping,
        maybeAddSegment: ()=>maybeAddSegment,
        setIgnore: ()=>setIgnore,
        setSourceContent: ()=>setSourceContent,
        toDecodedMap: ()=>toDecodedMap,
        toEncodedMap: ()=>toEncodedMap
    });
    module1.exports = __toCommonJS(gen_mapping_exports);
    // src/set-array.ts
    var SetArray = class {
        constructor(){
            this._indexes = {
                __proto__: null
            };
            this.array = [];
        }
    };
    function cast(set) {
        return set;
    }
    function get(setarr, key) {
        return cast(setarr)._indexes[key];
    }
    function put(setarr, key) {
        const index = get(setarr, key);
        if (index !== void 0) return index;
        const { array, _indexes: indexes } = cast(setarr);
        const length = array.push(key);
        return indexes[key] = length - 1;
    }
    function remove(setarr, key) {
        const index = get(setarr, key);
        if (index === void 0) return;
        const { array, _indexes: indexes } = cast(setarr);
        for(let i = index + 1; i < array.length; i++){
            const k = array[i];
            array[i - 1] = k;
            indexes[k]--;
        }
        indexes[key] = void 0;
        array.pop();
    }
    // src/gen-mapping.ts
    var import_sourcemap_codec = __toESM(require_sourcemap_codec());
    var import_trace_mapping = __toESM(require_trace_mapping());
    // src/sourcemap-segment.ts
    var COLUMN = 0;
    var SOURCES_INDEX = 1;
    var SOURCE_LINE = 2;
    var SOURCE_COLUMN = 3;
    var NAMES_INDEX = 4;
    // src/gen-mapping.ts
    var NO_NAME = -1;
    var GenMapping = class {
        constructor({ file, sourceRoot } = {}){
            this._names = new SetArray();
            this._sources = new SetArray();
            this._sourcesContent = [];
            this._mappings = [];
            this.file = file;
            this.sourceRoot = sourceRoot;
            this._ignoreList = new SetArray();
        }
    };
    function cast2(map) {
        return map;
    }
    function addSegment(map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
        return addSegmentInternal(false, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
    }
    function addMapping(map, mapping) {
        return addMappingInternal(false, map, mapping);
    }
    var maybeAddSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name, content)=>{
        return addSegmentInternal(true, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
    };
    var maybeAddMapping = (map, mapping)=>{
        return addMappingInternal(true, map, mapping);
    };
    function setSourceContent(map, source, content) {
        const { _sources: sources, _sourcesContent: sourcesContent } = cast2(map);
        const index = put(sources, source);
        sourcesContent[index] = content;
    }
    function setIgnore(map, source, ignore = true) {
        const { _sources: sources, _sourcesContent: sourcesContent, _ignoreList: ignoreList } = cast2(map);
        const index = put(sources, source);
        if (index === sourcesContent.length) sourcesContent[index] = null;
        if (ignore) put(ignoreList, index);
        else remove(ignoreList, index);
    }
    function toDecodedMap(map) {
        const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names, _ignoreList: ignoreList } = cast2(map);
        removeEmptyFinalLines(mappings);
        return {
            version: 3,
            file: map.file || void 0,
            names: names.array,
            sourceRoot: map.sourceRoot || void 0,
            sources: sources.array,
            sourcesContent,
            mappings,
            // originalScopes,
            // generatedRanges,
            ignoreList: ignoreList.array
        };
    }
    function toEncodedMap(map) {
        const decoded = toDecodedMap(map);
        return Object.assign({}, decoded, {
            // originalScopes: decoded.originalScopes.map((os) => encodeOriginalScopes(os)),
            // generatedRanges: encodeGeneratedRanges(decoded.generatedRanges as GeneratedRange[]),
            mappings: (0, import_sourcemap_codec.encode)(decoded.mappings)
        });
    }
    function fromMap(input) {
        const map = new import_trace_mapping.TraceMap(input);
        const gen = new GenMapping({
            file: map.file,
            sourceRoot: map.sourceRoot
        });
        putAll(cast2(gen)._names, map.names);
        putAll(cast2(gen)._sources, map.sources);
        cast2(gen)._sourcesContent = map.sourcesContent || map.sources.map(()=>null);
        cast2(gen)._mappings = (0, import_trace_mapping.decodedMappings)(map);
        if (map.ignoreList) putAll(cast2(gen)._ignoreList, map.ignoreList);
        return gen;
    }
    function allMappings(map) {
        const out = [];
        const { _mappings: mappings, _sources: sources, _names: names } = cast2(map);
        for(let i = 0; i < mappings.length; i++){
            const line = mappings[i];
            for(let j = 0; j < line.length; j++){
                const seg = line[j];
                const generated = {
                    line: i + 1,
                    column: seg[COLUMN]
                };
                let source = void 0;
                let original = void 0;
                let name = void 0;
                if (seg.length !== 1) {
                    source = sources.array[seg[SOURCES_INDEX]];
                    original = {
                        line: seg[SOURCE_LINE] + 1,
                        column: seg[SOURCE_COLUMN]
                    };
                    if (seg.length === 5) name = names.array[seg[NAMES_INDEX]];
                }
                out.push({
                    generated,
                    source,
                    original,
                    name
                });
            }
        }
        return out;
    }
    function addSegmentInternal(skipable, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
        const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names } = cast2(map);
        const line = getIndex(mappings, genLine);
        const index = getColumnIndex(line, genColumn);
        if (!source) {
            if (skipable && skipSourceless(line, index)) return;
            return insert(line, index, [
                genColumn
            ]);
        }
        assert(sourceLine);
        assert(sourceColumn);
        const sourcesIndex = put(sources, source);
        const namesIndex = name ? put(names, name) : NO_NAME;
        if (sourcesIndex === sourcesContent.length) sourcesContent[sourcesIndex] = content != null ? content : null;
        if (skipable && skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex)) {
            return;
        }
        return insert(line, index, name ? [
            genColumn,
            sourcesIndex,
            sourceLine,
            sourceColumn,
            namesIndex
        ] : [
            genColumn,
            sourcesIndex,
            sourceLine,
            sourceColumn
        ]);
    }
    function assert(_val) {}
    function getIndex(arr, index) {
        for(let i = arr.length; i <= index; i++){
            arr[i] = [];
        }
        return arr[index];
    }
    function getColumnIndex(line, genColumn) {
        let index = line.length;
        for(let i = index - 1; i >= 0; index = i--){
            const current = line[i];
            if (genColumn >= current[COLUMN]) break;
        }
        return index;
    }
    function insert(array, index, value) {
        for(let i = array.length; i > index; i--){
            array[i] = array[i - 1];
        }
        array[index] = value;
    }
    function removeEmptyFinalLines(mappings) {
        const { length } = mappings;
        let len = length;
        for(let i = len - 1; i >= 0; len = i, i--){
            if (mappings[i].length > 0) break;
        }
        if (len < length) mappings.length = len;
    }
    function putAll(setarr, array) {
        for(let i = 0; i < array.length; i++)put(setarr, array[i]);
    }
    function skipSourceless(line, index) {
        if (index === 0) return true;
        const prev = line[index - 1];
        return prev.length === 1;
    }
    function skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex) {
        if (index === 0) return false;
        const prev = line[index - 1];
        if (prev.length === 1) return false;
        return sourcesIndex === prev[SOURCES_INDEX] && sourceLine === prev[SOURCE_LINE] && sourceColumn === prev[SOURCE_COLUMN] && namesIndex === (prev.length === 5 ? prev[NAMES_INDEX] : NO_NAME);
    }
    function addMappingInternal(skipable, map, mapping) {
        const { generated, source, original, name, content } = mapping;
        if (!source) {
            return addSegmentInternal(skipable, map, generated.line - 1, generated.column, null, null, null, null, null);
        }
        assert(original);
        return addSegmentInternal(skipable, map, generated.line - 1, generated.column, source, original.line - 1, original.column, name, content);
    }
}); //# sourceMappingURL=gen-mapping.umd.js.map
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/remapping/dist/remapping.umd.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(global, factory) {
    if ("TURBOPACK compile-time truthy", 1) {
        factory(module, __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/gen-mapping/dist/gen-mapping.umd.js [postcss] (ecmascript)"), __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.umd.js [postcss] (ecmascript)"));
        module.exports = def(module);
    } else //TURBOPACK unreachable
    ;
    function def(m) {
        return 'default' in m.exports ? m.exports.default : m.exports;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(module1, require_genMapping, require_traceMapping) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = (cb, mod)=>function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod), mod.exports;
        };
    var __export = (target, all)=>{
        for(var name in all)__defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var __copyProps = (to, from, except, desc)=>{
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                get: ()=>from[key],
                enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
            });
        }
        return to;
    };
    var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
            value: mod,
            enumerable: true
        }) : target, mod));
    var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    // umd:@jridgewell/trace-mapping
    var require_trace_mapping = __commonJS({
        "umd:@jridgewell/trace-mapping" (exports, module2) {
            module2.exports = require_traceMapping;
        }
    });
    // umd:@jridgewell/gen-mapping
    var require_gen_mapping = __commonJS({
        "umd:@jridgewell/gen-mapping" (exports, module2) {
            module2.exports = require_genMapping;
        }
    });
    // src/remapping.ts
    var remapping_exports = {};
    __export(remapping_exports, {
        default: ()=>remapping
    });
    module1.exports = __toCommonJS(remapping_exports);
    // src/build-source-map-tree.ts
    var import_trace_mapping2 = __toESM(require_trace_mapping());
    // src/source-map-tree.ts
    var import_gen_mapping = __toESM(require_gen_mapping());
    var import_trace_mapping = __toESM(require_trace_mapping());
    var SOURCELESS_MAPPING = /* @__PURE__ */ SegmentObject("", -1, -1, "", null, false);
    var EMPTY_SOURCES = [];
    function SegmentObject(source, line, column, name, content, ignore) {
        return {
            source,
            line,
            column,
            name,
            content,
            ignore
        };
    }
    function Source(map, sources, source, content, ignore) {
        return {
            map,
            sources,
            source,
            content,
            ignore
        };
    }
    function MapSource(map, sources) {
        return Source(map, sources, "", null, false);
    }
    function OriginalSource(source, content, ignore) {
        return Source(null, EMPTY_SOURCES, source, content, ignore);
    }
    function traceMappings(tree) {
        const gen = new import_gen_mapping.GenMapping({
            file: tree.map.file
        });
        const { sources: rootSources, map } = tree;
        const rootNames = map.names;
        const rootMappings = (0, import_trace_mapping.decodedMappings)(map);
        for(let i = 0; i < rootMappings.length; i++){
            const segments = rootMappings[i];
            for(let j = 0; j < segments.length; j++){
                const segment = segments[j];
                const genCol = segment[0];
                let traced = SOURCELESS_MAPPING;
                if (segment.length !== 1) {
                    const source2 = rootSources[segment[1]];
                    traced = originalPositionFor(source2, segment[2], segment[3], segment.length === 5 ? rootNames[segment[4]] : "");
                    if (traced == null) continue;
                }
                const { column, line, name, content, source, ignore } = traced;
                (0, import_gen_mapping.maybeAddSegment)(gen, i, genCol, source, line, column, name);
                if (source && content != null) (0, import_gen_mapping.setSourceContent)(gen, source, content);
                if (ignore) (0, import_gen_mapping.setIgnore)(gen, source, true);
            }
        }
        return gen;
    }
    function originalPositionFor(source, line, column, name) {
        if (!source.map) {
            return SegmentObject(source.source, line, column, name, source.content, source.ignore);
        }
        const segment = (0, import_trace_mapping.traceSegment)(source.map, line, column);
        if (segment == null) return null;
        if (segment.length === 1) return SOURCELESS_MAPPING;
        return originalPositionFor(source.sources[segment[1]], segment[2], segment[3], segment.length === 5 ? source.map.names[segment[4]] : name);
    }
    // src/build-source-map-tree.ts
    function asArray(value) {
        if (Array.isArray(value)) return value;
        return [
            value
        ];
    }
    function buildSourceMapTree(input, loader) {
        const maps = asArray(input).map((m)=>new import_trace_mapping2.TraceMap(m, ""));
        const map = maps.pop();
        for(let i = 0; i < maps.length; i++){
            if (maps[i].sources.length > 1) {
                throw new Error(`Transformation map ${i} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);
            }
        }
        let tree = build(map, loader, "", 0);
        for(let i = maps.length - 1; i >= 0; i--){
            tree = MapSource(maps[i], [
                tree
            ]);
        }
        return tree;
    }
    function build(map, loader, importer, importerDepth) {
        const { resolvedSources, sourcesContent, ignoreList } = map;
        const depth = importerDepth + 1;
        const children = resolvedSources.map((sourceFile, i)=>{
            const ctx = {
                importer,
                depth,
                source: sourceFile || "",
                content: void 0,
                ignore: void 0
            };
            const sourceMap = loader(ctx.source, ctx);
            const { source, content, ignore } = ctx;
            if (sourceMap) return build(new import_trace_mapping2.TraceMap(sourceMap, source), loader, source, depth);
            const sourceContent = content !== void 0 ? content : sourcesContent ? sourcesContent[i] : null;
            const ignored = ignore !== void 0 ? ignore : ignoreList ? ignoreList.includes(i) : false;
            return OriginalSource(source, sourceContent, ignored);
        });
        return MapSource(map, children);
    }
    // src/source-map.ts
    var import_gen_mapping2 = __toESM(require_gen_mapping());
    var SourceMap = class {
        constructor(map, options){
            const out = options.decodedMappings ? (0, import_gen_mapping2.toDecodedMap)(map) : (0, import_gen_mapping2.toEncodedMap)(map);
            this.version = out.version;
            this.file = out.file;
            this.mappings = out.mappings;
            this.names = out.names;
            this.ignoreList = out.ignoreList;
            this.sourceRoot = out.sourceRoot;
            this.sources = out.sources;
            if (!options.excludeContent) {
                this.sourcesContent = out.sourcesContent;
            }
        }
        toString() {
            return JSON.stringify(this);
        }
    };
    // src/remapping.ts
    function remapping(input, loader, options) {
        const opts = typeof options === "object" ? options : {
            excludeContent: !!options,
            decodedMappings: false
        };
        const tree = buildSourceMapTree(input, loader);
        return new SourceMap(traceMappings(tree), opts);
    }
}); //# sourceMappingURL=remapping.umd.js.map
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/lightningcss/node/browserslistToTargets.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

const BROWSER_MAPPING = {
    and_chr: 'chrome',
    and_ff: 'firefox',
    ie_mob: 'ie',
    op_mob: 'opera',
    and_qq: null,
    and_uc: null,
    baidu: null,
    bb: null,
    kaios: null,
    op_mini: null
};
function browserslistToTargets(browserslist) {
    let targets = {};
    for (let browser of browserslist){
        let [name, v] = browser.split(' ');
        if (BROWSER_MAPPING[name] === null) {
            continue;
        }
        let version = parseVersion(v);
        if (version == null) {
            continue;
        }
        if (targets[name] == null || version < targets[name]) {
            targets[name] = version;
        }
    }
    return targets;
}
function parseVersion(version) {
    let [major, minor = 0, patch = 0] = version.split('-')[0].split('.').map((v)=>parseInt(v, 10));
    if (isNaN(major) || isNaN(minor) || isNaN(patch)) {
        return null;
    }
    return major << 16 | minor << 8 | patch;
}
module.exports = browserslistToTargets;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/lightningcss/node/composeVisitors.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

// @ts-check
/** @typedef {import('./index').Visitor} Visitor */ /**
 * Composes multiple visitor objects into a single one.
 * @param {Visitor[]} visitors 
 * @return {Visitor}
 */ function composeVisitors(visitors) {
    if (visitors.length === 1) {
        return visitors[0];
    }
    /** @type Visitor */ let res = {};
    composeSimpleVisitors(res, visitors, 'StyleSheet');
    composeSimpleVisitors(res, visitors, 'StyleSheetExit');
    composeObjectVisitors(res, visitors, 'Rule', ruleVisitor, wrapCustomAndUnknownAtRule);
    composeObjectVisitors(res, visitors, 'RuleExit', ruleVisitor, wrapCustomAndUnknownAtRule);
    composeObjectVisitors(res, visitors, 'Declaration', declarationVisitor, wrapCustomProperty);
    composeObjectVisitors(res, visitors, 'DeclarationExit', declarationVisitor, wrapCustomProperty);
    composeSimpleVisitors(res, visitors, 'Url');
    composeSimpleVisitors(res, visitors, 'Color');
    composeSimpleVisitors(res, visitors, 'Image');
    composeSimpleVisitors(res, visitors, 'ImageExit');
    composeSimpleVisitors(res, visitors, 'Length');
    composeSimpleVisitors(res, visitors, 'Angle');
    composeSimpleVisitors(res, visitors, 'Ratio');
    composeSimpleVisitors(res, visitors, 'Resolution');
    composeSimpleVisitors(res, visitors, 'Time');
    composeSimpleVisitors(res, visitors, 'CustomIdent');
    composeSimpleVisitors(res, visitors, 'DashedIdent');
    composeArrayFunctions(res, visitors, 'MediaQuery');
    composeArrayFunctions(res, visitors, 'MediaQueryExit');
    composeSimpleVisitors(res, visitors, 'SupportsCondition');
    composeSimpleVisitors(res, visitors, 'SupportsConditionExit');
    composeArrayFunctions(res, visitors, 'Selector');
    composeTokenVisitors(res, visitors, 'Token', 'token', false);
    composeTokenVisitors(res, visitors, 'Function', 'function', false);
    composeTokenVisitors(res, visitors, 'FunctionExit', 'function', true);
    composeTokenVisitors(res, visitors, 'Variable', 'var', false);
    composeTokenVisitors(res, visitors, 'VariableExit', 'var', true);
    composeTokenVisitors(res, visitors, 'EnvironmentVariable', 'env', false);
    composeTokenVisitors(res, visitors, 'EnvironmentVariableExit', 'env', true);
    return res;
}
module.exports = composeVisitors;
function wrapCustomAndUnknownAtRule(k, f) {
    if (k === 'unknown') {
        return (value)=>f({
                type: 'unknown',
                value
            });
    }
    if (k === 'custom') {
        return (value)=>f({
                type: 'custom',
                value
            });
    }
    return f;
}
function wrapCustomProperty(k, f) {
    return k === 'custom' ? (value)=>f({
            property: 'custom',
            value
        }) : f;
}
/**
 * @param {import('./index').Visitor['Rule']} f 
 * @param {import('./ast').Rule} item 
 */ function ruleVisitor(f, item) {
    if (typeof f === 'object') {
        if (item.type === 'unknown') {
            let v = f.unknown;
            if (typeof v === 'object') {
                v = v[item.value.name];
            }
            return v?.(item.value);
        }
        if (item.type === 'custom') {
            let v = f.custom;
            if (typeof v === 'object') {
                v = v[item.value.name];
            }
            return v?.(item.value);
        }
        return f[item.type]?.(item);
    }
    return f?.(item);
}
/**
 * @param {import('./index').Visitor['Declaration']} f 
 * @param {import('./ast').Declaration} item 
 */ function declarationVisitor(f, item) {
    if (typeof f === 'object') {
        /** @type {string} */ let name = item.property;
        if (item.property === 'unparsed') {
            name = item.value.propertyId.property;
        } else if (item.property === 'custom') {
            let v = f.custom;
            if (typeof v === 'object') {
                v = v[item.value.name];
            }
            return v?.(item.value);
        }
        return f[name]?.(item);
    }
    return f?.(item);
}
/**
 * 
 * @param {Visitor[]} visitors 
 * @param {string} key 
 * @returns {[any[], boolean, Set<string>]}
 */ function extractObjectsOrFunctions(visitors, key) {
    let values = [];
    let hasFunction = false;
    let allKeys = new Set();
    for (let visitor of visitors){
        let v = visitor[key];
        if (v) {
            if (typeof v === 'function') {
                hasFunction = true;
            } else {
                for(let key in v){
                    allKeys.add(key);
                }
            }
            values.push(v);
        }
    }
    return [
        values,
        hasFunction,
        allKeys
    ];
}
/**
 * @template {keyof Visitor} K
 * @param {Visitor} res
 * @param {Visitor[]} visitors
 * @param {K} key
 * @param {(visitor: Visitor[K], item: any) => any | any[] | void} apply 
 * @param {(k: string, f: any) => any} wrapKey 
 */ function composeObjectVisitors(res, visitors, key, apply, wrapKey) {
    let [values, hasFunction, allKeys] = extractObjectsOrFunctions(visitors, key);
    if (values.length === 0) {
        return;
    }
    if (values.length === 1) {
        res[key] = values[0];
        return;
    }
    let f = createArrayVisitor(visitors, (visitor, item)=>apply(visitor[key], item));
    if (hasFunction) {
        res[key] = f;
    } else {
        /** @type {any} */ let v = {};
        for (let k of allKeys){
            v[k] = wrapKey(k, f);
        }
        res[key] = v;
    }
}
/**
 * @param {Visitor} res 
 * @param {Visitor[]} visitors 
 * @param {string} key 
 * @param {import('./ast').TokenOrValue['type']} type 
 * @param {boolean} isExit 
 */ function composeTokenVisitors(res, visitors, key, type, isExit) {
    let [values, hasFunction, allKeys] = extractObjectsOrFunctions(visitors, key);
    if (values.length === 0) {
        return;
    }
    if (values.length === 1) {
        res[key] = values[0];
        return;
    }
    let f = createTokenVisitor(visitors, type, isExit);
    if (hasFunction) {
        res[key] = f;
    } else {
        let v = {};
        for (let key of allKeys){
            v[key] = f;
        }
        res[key] = v;
    }
}
/**
 * @param {Visitor[]} visitors 
 * @param {import('./ast').TokenOrValue['type']} type 
 */ function createTokenVisitor(visitors, type, isExit) {
    let v = createArrayVisitor(visitors, (visitor, /** @type {import('./ast').TokenOrValue} */ item)=>{
        let f;
        switch(item.type){
            case 'token':
                f = visitor.Token;
                if (typeof f === 'object') {
                    f = f[item.value.type];
                }
                break;
            case 'function':
                f = isExit ? visitor.FunctionExit : visitor.Function;
                if (typeof f === 'object') {
                    f = f[item.value.name];
                }
                break;
            case 'var':
                f = isExit ? visitor.VariableExit : visitor.Variable;
                break;
            case 'env':
                f = isExit ? visitor.EnvironmentVariableExit : visitor.EnvironmentVariable;
                if (typeof f === 'object') {
                    let name;
                    switch(item.value.name.type){
                        case 'ua':
                        case 'unknown':
                            name = item.value.name.value;
                            break;
                        case 'custom':
                            name = item.value.name.ident;
                            break;
                    }
                    f = f[name];
                }
                break;
            case 'color':
                f = visitor.Color;
                break;
            case 'url':
                f = visitor.Url;
                break;
            case 'length':
                f = visitor.Length;
                break;
            case 'angle':
                f = visitor.Angle;
                break;
            case 'time':
                f = visitor.Time;
                break;
            case 'resolution':
                f = visitor.Resolution;
                break;
            case 'dashed-ident':
                f = visitor.DashedIdent;
                break;
        }
        if (!f) {
            return;
        }
        let res = f(item.value);
        switch(item.type){
            case 'color':
            case 'url':
            case 'length':
            case 'angle':
            case 'time':
            case 'resolution':
            case 'dashed-ident':
                if (Array.isArray(res)) {
                    res = res.map((value)=>({
                            type: item.type,
                            value
                        }));
                } else if (res) {
                    res = {
                        type: item.type,
                        value: res
                    };
                }
                break;
        }
        return res;
    });
    return (value)=>v({
            type,
            value
        });
}
/**
 * @param {Visitor[]} visitors 
 * @param {string} key 
 */ function extractFunctions(visitors, key) {
    let functions = [];
    for (let visitor of visitors){
        let f = visitor[key];
        if (f) {
            functions.push(f);
        }
    }
    return functions;
}
/**
 * @param {Visitor} res 
 * @param {Visitor[]} visitors 
 * @param {string} key 
 */ function composeSimpleVisitors(res, visitors, key) {
    let functions = extractFunctions(visitors, key);
    if (functions.length === 0) {
        return;
    }
    if (functions.length === 1) {
        res[key] = functions[0];
        return;
    }
    res[key] = (arg)=>{
        let mutated = false;
        for (let f of functions){
            let res = f(arg);
            if (res) {
                arg = res;
                mutated = true;
            }
        }
        return mutated ? arg : undefined;
    };
}
/**
 * @param {Visitor} res 
 * @param {Visitor[]} visitors 
 * @param {string} key 
 */ function composeArrayFunctions(res, visitors, key) {
    let functions = extractFunctions(visitors, key);
    if (functions.length === 0) {
        return;
    }
    if (functions.length === 1) {
        res[key] = functions[0];
        return;
    }
    res[key] = createArrayVisitor(functions, (f, item)=>f(item));
}
/**
 * @template T
 * @template V
 * @param {T[]} visitors 
 * @param {(visitor: T, item: V) => V | V[] | void} apply 
 * @returns {(item: V) => V | V[] | void}
 */ function createArrayVisitor(visitors, apply) {
    let seen = new Bitset(visitors.length);
    return (arg)=>{
        let arr = [
            arg
        ];
        let mutated = false;
        seen.clear();
        for(let i = 0; i < arr.length; i++){
            // For each value, call all visitors. If a visitor returns a new value,
            // we start over, but skip the visitor that generated the value or saw
            // it before (to avoid cycles). This way, visitors can be composed in any order. 
            for(let v = 0; v < visitors.length;){
                if (seen.get(v)) {
                    v++;
                    continue;
                }
                let item = arr[i];
                let visitor = visitors[v];
                let res = apply(visitor, item);
                if (Array.isArray(res)) {
                    if (res.length === 0) {
                        arr.splice(i, 1);
                    } else if (res.length === 1) {
                        arr[i] = res[0];
                    } else {
                        arr.splice(i, 1, ...res);
                    }
                    mutated = true;
                    seen.set(v);
                    v = 0;
                } else if (res) {
                    arr[i] = res;
                    mutated = true;
                    seen.set(v);
                    v = 0;
                } else {
                    v++;
                }
            }
        }
        if (!mutated) {
            return;
        }
        return arr.length === 1 ? arr[0] : arr;
    };
}
class Bitset {
    constructor(maxBits = 32){
        this.bits = 0;
        this.more = maxBits > 32 ? new Uint32Array(Math.ceil((maxBits - 32) / 32)) : null;
    }
    /** @param {number} bit */ get(bit) {
        if (bit >= 32 && this.more) {
            let i = Math.floor((bit - 32) / 32);
            let b = bit % 32;
            return Boolean(this.more[i] & 1 << b);
        } else {
            return Boolean(this.bits & 1 << bit);
        }
    }
    /** @param {number} bit */ set(bit) {
        if (bit >= 32 && this.more) {
            let i = Math.floor((bit - 32) / 32);
            let b = bit % 32;
            this.more[i] |= 1 << b;
        } else {
            this.bits |= 1 << bit;
        }
    }
    clear() {
        this.bits = 0;
        if (this.more) {
            this.more.fill(0);
        }
    }
}
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/lightningcss/node/flags.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

// This file is autogenerated by build-prefixes.js. DO NOT EDIT!
exports.Features = {
    Nesting: 1,
    NotSelectorList: 2,
    DirSelector: 4,
    LangSelectorList: 8,
    IsSelector: 16,
    TextDecorationThicknessPercent: 32,
    MediaIntervalSyntax: 64,
    MediaRangeSyntax: 128,
    CustomMediaQueries: 256,
    ClampFunction: 512,
    ColorFunction: 1024,
    OklabColors: 2048,
    LabColors: 4096,
    P3Colors: 8192,
    HexAlphaColors: 16384,
    SpaceSeparatedColorNotation: 32768,
    FontFamilySystemUi: 65536,
    DoublePositionGradients: 131072,
    VendorPrefixes: 262144,
    LogicalProperties: 524288,
    LightDark: 1048576,
    Selectors: 31,
    MediaQueries: 448,
    Colors: 1113088
};
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/lightningcss/node/index.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

let parts = [
    process.platform,
    process.arch
];
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else if ("TURBOPACK compile-time truthy", 1) {
    parts.push('msvc');
}
if (process.env.CSS_TRANSFORMER_WASM) {
    module.exports = (()=>{
        const e = new Error("Cannot find module '../pkg'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
} else {
    try {
        module.exports = __turbopack_context__.f({
            "lightningcss-win32-x64-msvc": {
                id: ()=>(()=>{
                        throw new Error('could not resolve "' + `lightningcss-${parts.join('-')}` + '" into a module');
                    })(),
                module: ()=>(()=>{
                        throw new Error('could not resolve "' + `lightningcss-${parts.join('-')}` + '" into a module');
                    })()
            }
        })(`lightningcss-${parts.join('-')}`);
    } catch (err) {
        module.exports = (()=>{
            const e = new Error("Cannot find module 'unknown'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
    }
}
module.exports.browserslistToTargets = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/lightningcss/node/browserslistToTargets.js [postcss] (ecmascript)");
module.exports.composeVisitors = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/lightningcss/node/composeVisitors.js [postcss] (ecmascript)");
module.exports.Features = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/lightningcss/node/flags.js [postcss] (ecmascript)").Features;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/magic-string/dist/magic-string.cjs.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var sourcemapCodec = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.umd.js [postcss] (ecmascript)");
class BitSet {
    constructor(arg){
        this.bits = arg instanceof BitSet ? arg.bits.slice() : [];
    }
    add(n) {
        this.bits[n >> 5] |= 1 << (n & 31);
    }
    has(n) {
        return !!(this.bits[n >> 5] & 1 << (n & 31));
    }
}
class Chunk {
    constructor(start, end, content){
        this.start = start;
        this.end = end;
        this.original = content;
        this.intro = '';
        this.outro = '';
        this.content = content;
        this.storeName = false;
        this.edited = false;
        {
            this.previous = null;
            this.next = null;
        }
    }
    appendLeft(content) {
        this.outro += content;
    }
    appendRight(content) {
        this.intro = this.intro + content;
    }
    clone() {
        const chunk = new Chunk(this.start, this.end, this.original);
        chunk.intro = this.intro;
        chunk.outro = this.outro;
        chunk.content = this.content;
        chunk.storeName = this.storeName;
        chunk.edited = this.edited;
        return chunk;
    }
    contains(index) {
        return this.start < index && index < this.end;
    }
    eachNext(fn) {
        let chunk = this;
        while(chunk){
            fn(chunk);
            chunk = chunk.next;
        }
    }
    eachPrevious(fn) {
        let chunk = this;
        while(chunk){
            fn(chunk);
            chunk = chunk.previous;
        }
    }
    edit(content, storeName, contentOnly) {
        this.content = content;
        if (!contentOnly) {
            this.intro = '';
            this.outro = '';
        }
        this.storeName = storeName;
        this.edited = true;
        return this;
    }
    prependLeft(content) {
        this.outro = content + this.outro;
    }
    prependRight(content) {
        this.intro = content + this.intro;
    }
    reset() {
        this.intro = '';
        this.outro = '';
        if (this.edited) {
            this.content = this.original;
            this.storeName = false;
            this.edited = false;
        }
    }
    split(index) {
        const sliceIndex = index - this.start;
        const originalBefore = this.original.slice(0, sliceIndex);
        const originalAfter = this.original.slice(sliceIndex);
        this.original = originalBefore;
        const newChunk = new Chunk(index, this.end, originalAfter);
        newChunk.outro = this.outro;
        this.outro = '';
        this.end = index;
        if (this.edited) {
            // after split we should save the edit content record into the correct chunk
            // to make sure sourcemap correct
            // For example:
            // '  test'.trim()
            //     split   -> '  ' + 'test'
            //   ✔️ edit    -> '' + 'test'
            //   ✖️ edit    -> 'test' + ''
            // TODO is this block necessary?...
            newChunk.edit('', false);
            this.content = '';
        } else {
            this.content = originalBefore;
        }
        newChunk.next = this.next;
        if (newChunk.next) newChunk.next.previous = newChunk;
        newChunk.previous = this;
        this.next = newChunk;
        return newChunk;
    }
    toString() {
        return this.intro + this.content + this.outro;
    }
    trimEnd(rx) {
        this.outro = this.outro.replace(rx, '');
        if (this.outro.length) return true;
        const trimmed = this.content.replace(rx, '');
        if (trimmed.length) {
            if (trimmed !== this.content) {
                this.split(this.start + trimmed.length).edit('', undefined, true);
                if (this.edited) {
                    // save the change, if it has been edited
                    this.edit(trimmed, this.storeName, true);
                }
            }
            return true;
        } else {
            this.edit('', undefined, true);
            this.intro = this.intro.replace(rx, '');
            if (this.intro.length) return true;
        }
    }
    trimStart(rx) {
        this.intro = this.intro.replace(rx, '');
        if (this.intro.length) return true;
        const trimmed = this.content.replace(rx, '');
        if (trimmed.length) {
            if (trimmed !== this.content) {
                const newChunk = this.split(this.end - trimmed.length);
                if (this.edited) {
                    // save the change, if it has been edited
                    newChunk.edit(trimmed, this.storeName, true);
                }
                this.edit('', undefined, true);
            }
            return true;
        } else {
            this.edit('', undefined, true);
            this.outro = this.outro.replace(rx, '');
            if (this.outro.length) return true;
        }
    }
}
function getBtoa() {
    if (typeof globalThis !== 'undefined' && typeof globalThis.btoa === 'function') {
        return (str)=>globalThis.btoa(unescape(encodeURIComponent(str)));
    } else if (typeof Buffer === 'function') {
        return (str)=>Buffer.from(str, 'utf-8').toString('base64');
    } else {
        return ()=>{
            throw new Error('Unsupported environment: `window.btoa` or `Buffer` should be supported.');
        };
    }
}
const btoa = /*#__PURE__*/ getBtoa();
class SourceMap {
    constructor(properties){
        this.version = 3;
        this.file = properties.file;
        this.sources = properties.sources;
        this.sourcesContent = properties.sourcesContent;
        this.names = properties.names;
        this.mappings = sourcemapCodec.encode(properties.mappings);
        if (typeof properties.x_google_ignoreList !== 'undefined') {
            this.x_google_ignoreList = properties.x_google_ignoreList;
        }
        if (typeof properties.debugId !== 'undefined') {
            this.debugId = properties.debugId;
        }
    }
    toString() {
        return JSON.stringify(this);
    }
    toUrl() {
        return 'data:application/json;charset=utf-8;base64,' + btoa(this.toString());
    }
}
function guessIndent(code) {
    const lines = code.split('\n');
    const tabbed = lines.filter((line)=>/^\t+/.test(line));
    const spaced = lines.filter((line)=>/^ {2,}/.test(line));
    if (tabbed.length === 0 && spaced.length === 0) {
        return null;
    }
    // More lines tabbed than spaced? Assume tabs, and
    // default to tabs in the case of a tie (or nothing
    // to go on)
    if (tabbed.length >= spaced.length) {
        return '\t';
    }
    // Otherwise, we need to guess the multiple
    const min = spaced.reduce((previous, current)=>{
        const numSpaces = /^ +/.exec(current)[0].length;
        return Math.min(numSpaces, previous);
    }, Infinity);
    return new Array(min + 1).join(' ');
}
function getRelativePath(from, to) {
    const fromParts = from.split(/[/\\]/);
    const toParts = to.split(/[/\\]/);
    fromParts.pop(); // get dirname
    while(fromParts[0] === toParts[0]){
        fromParts.shift();
        toParts.shift();
    }
    if (fromParts.length) {
        let i = fromParts.length;
        while(i--)fromParts[i] = '..';
    }
    return fromParts.concat(toParts).join('/');
}
const toString = Object.prototype.toString;
function isObject(thing) {
    return toString.call(thing) === '[object Object]';
}
function getLocator(source) {
    const originalLines = source.split('\n');
    const lineOffsets = [];
    for(let i = 0, pos = 0; i < originalLines.length; i++){
        lineOffsets.push(pos);
        pos += originalLines[i].length + 1;
    }
    return function locate(index) {
        let i = 0;
        let j = lineOffsets.length;
        while(i < j){
            const m = i + j >> 1;
            if (index < lineOffsets[m]) {
                j = m;
            } else {
                i = m + 1;
            }
        }
        const line = i - 1;
        const column = index - lineOffsets[line];
        return {
            line,
            column
        };
    };
}
const wordRegex = /\w/;
class Mappings {
    constructor(hires){
        this.hires = hires;
        this.generatedCodeLine = 0;
        this.generatedCodeColumn = 0;
        this.raw = [];
        this.rawSegments = this.raw[this.generatedCodeLine] = [];
        this.pending = null;
    }
    addEdit(sourceIndex, content, loc, nameIndex) {
        if (content.length) {
            const contentLengthMinusOne = content.length - 1;
            let contentLineEnd = content.indexOf('\n', 0);
            let previousContentLineEnd = -1;
            // Loop through each line in the content and add a segment, but stop if the last line is empty,
            // else code afterwards would fill one line too many
            while(contentLineEnd >= 0 && contentLengthMinusOne > contentLineEnd){
                const segment = [
                    this.generatedCodeColumn,
                    sourceIndex,
                    loc.line,
                    loc.column
                ];
                if (nameIndex >= 0) {
                    segment.push(nameIndex);
                }
                this.rawSegments.push(segment);
                this.generatedCodeLine += 1;
                this.raw[this.generatedCodeLine] = this.rawSegments = [];
                this.generatedCodeColumn = 0;
                previousContentLineEnd = contentLineEnd;
                contentLineEnd = content.indexOf('\n', contentLineEnd + 1);
            }
            const segment = [
                this.generatedCodeColumn,
                sourceIndex,
                loc.line,
                loc.column
            ];
            if (nameIndex >= 0) {
                segment.push(nameIndex);
            }
            this.rawSegments.push(segment);
            this.advance(content.slice(previousContentLineEnd + 1));
        } else if (this.pending) {
            this.rawSegments.push(this.pending);
            this.advance(content);
        }
        this.pending = null;
    }
    addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
        let originalCharIndex = chunk.start;
        let first = true;
        // when iterating each char, check if it's in a word boundary
        let charInHiresBoundary = false;
        while(originalCharIndex < chunk.end){
            if (original[originalCharIndex] === '\n') {
                loc.line += 1;
                loc.column = 0;
                this.generatedCodeLine += 1;
                this.raw[this.generatedCodeLine] = this.rawSegments = [];
                this.generatedCodeColumn = 0;
                first = true;
                charInHiresBoundary = false;
            } else {
                if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
                    const segment = [
                        this.generatedCodeColumn,
                        sourceIndex,
                        loc.line,
                        loc.column
                    ];
                    if (this.hires === 'boundary') {
                        // in hires "boundary", group segments per word boundary than per char
                        if (wordRegex.test(original[originalCharIndex])) {
                            // for first char in the boundary found, start the boundary by pushing a segment
                            if (!charInHiresBoundary) {
                                this.rawSegments.push(segment);
                                charInHiresBoundary = true;
                            }
                        } else {
                            // for non-word char, end the boundary by pushing a segment
                            this.rawSegments.push(segment);
                            charInHiresBoundary = false;
                        }
                    } else {
                        this.rawSegments.push(segment);
                    }
                }
                loc.column += 1;
                this.generatedCodeColumn += 1;
                first = false;
            }
            originalCharIndex += 1;
        }
        this.pending = null;
    }
    advance(str) {
        if (!str) return;
        const lines = str.split('\n');
        if (lines.length > 1) {
            for(let i = 0; i < lines.length - 1; i++){
                this.generatedCodeLine++;
                this.raw[this.generatedCodeLine] = this.rawSegments = [];
            }
            this.generatedCodeColumn = 0;
        }
        this.generatedCodeColumn += lines[lines.length - 1].length;
    }
}
const n = '\n';
const warned = {
    insertLeft: false,
    insertRight: false,
    storeName: false
};
class MagicString {
    constructor(string, options = {}){
        const chunk = new Chunk(0, string.length, string);
        Object.defineProperties(this, {
            original: {
                writable: true,
                value: string
            },
            outro: {
                writable: true,
                value: ''
            },
            intro: {
                writable: true,
                value: ''
            },
            firstChunk: {
                writable: true,
                value: chunk
            },
            lastChunk: {
                writable: true,
                value: chunk
            },
            lastSearchedChunk: {
                writable: true,
                value: chunk
            },
            byStart: {
                writable: true,
                value: {}
            },
            byEnd: {
                writable: true,
                value: {}
            },
            filename: {
                writable: true,
                value: options.filename
            },
            indentExclusionRanges: {
                writable: true,
                value: options.indentExclusionRanges
            },
            sourcemapLocations: {
                writable: true,
                value: new BitSet()
            },
            storedNames: {
                writable: true,
                value: {}
            },
            indentStr: {
                writable: true,
                value: undefined
            },
            ignoreList: {
                writable: true,
                value: options.ignoreList
            },
            offset: {
                writable: true,
                value: options.offset || 0
            }
        });
        this.byStart[0] = chunk;
        this.byEnd[string.length] = chunk;
    }
    addSourcemapLocation(char) {
        this.sourcemapLocations.add(char);
    }
    append(content) {
        if (typeof content !== 'string') throw new TypeError('outro content must be a string');
        this.outro += content;
        return this;
    }
    appendLeft(index, content) {
        index = index + this.offset;
        if (typeof content !== 'string') throw new TypeError('inserted content must be a string');
        this._split(index);
        const chunk = this.byEnd[index];
        if (chunk) {
            chunk.appendLeft(content);
        } else {
            this.intro += content;
        }
        return this;
    }
    appendRight(index, content) {
        index = index + this.offset;
        if (typeof content !== 'string') throw new TypeError('inserted content must be a string');
        this._split(index);
        const chunk = this.byStart[index];
        if (chunk) {
            chunk.appendRight(content);
        } else {
            this.outro += content;
        }
        return this;
    }
    clone() {
        const cloned = new MagicString(this.original, {
            filename: this.filename,
            offset: this.offset
        });
        let originalChunk = this.firstChunk;
        let clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
        while(originalChunk){
            cloned.byStart[clonedChunk.start] = clonedChunk;
            cloned.byEnd[clonedChunk.end] = clonedChunk;
            const nextOriginalChunk = originalChunk.next;
            const nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
            if (nextClonedChunk) {
                clonedChunk.next = nextClonedChunk;
                nextClonedChunk.previous = clonedChunk;
                clonedChunk = nextClonedChunk;
            }
            originalChunk = nextOriginalChunk;
        }
        cloned.lastChunk = clonedChunk;
        if (this.indentExclusionRanges) {
            cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
        }
        cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);
        cloned.intro = this.intro;
        cloned.outro = this.outro;
        return cloned;
    }
    generateDecodedMap(options) {
        options = options || {};
        const sourceIndex = 0;
        const names = Object.keys(this.storedNames);
        const mappings = new Mappings(options.hires);
        const locate = getLocator(this.original);
        if (this.intro) {
            mappings.advance(this.intro);
        }
        this.firstChunk.eachNext((chunk)=>{
            const loc = locate(chunk.start);
            if (chunk.intro.length) mappings.advance(chunk.intro);
            if (chunk.edited) {
                mappings.addEdit(sourceIndex, chunk.content, loc, chunk.storeName ? names.indexOf(chunk.original) : -1);
            } else {
                mappings.addUneditedChunk(sourceIndex, chunk, this.original, loc, this.sourcemapLocations);
            }
            if (chunk.outro.length) mappings.advance(chunk.outro);
        });
        if (this.outro) {
            mappings.advance(this.outro);
        }
        return {
            file: options.file ? options.file.split(/[/\\]/).pop() : undefined,
            sources: [
                options.source ? getRelativePath(options.file || '', options.source) : options.file || ''
            ],
            sourcesContent: options.includeContent ? [
                this.original
            ] : undefined,
            names,
            mappings: mappings.raw,
            x_google_ignoreList: this.ignoreList ? [
                sourceIndex
            ] : undefined
        };
    }
    generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
    }
    _ensureindentStr() {
        if (this.indentStr === undefined) {
            this.indentStr = guessIndent(this.original);
        }
    }
    _getRawIndentString() {
        this._ensureindentStr();
        return this.indentStr;
    }
    getIndentString() {
        this._ensureindentStr();
        return this.indentStr === null ? '\t' : this.indentStr;
    }
    indent(indentStr, options) {
        const pattern = /^[^\r\n]/gm;
        if (isObject(indentStr)) {
            options = indentStr;
            indentStr = undefined;
        }
        if (indentStr === undefined) {
            this._ensureindentStr();
            indentStr = this.indentStr || '\t';
        }
        if (indentStr === '') return this; // noop
        options = options || {};
        // Process exclusion ranges
        const isExcluded = {};
        if (options.exclude) {
            const exclusions = typeof options.exclude[0] === 'number' ? [
                options.exclude
            ] : options.exclude;
            exclusions.forEach((exclusion)=>{
                for(let i = exclusion[0]; i < exclusion[1]; i += 1){
                    isExcluded[i] = true;
                }
            });
        }
        let shouldIndentNextCharacter = options.indentStart !== false;
        const replacer = (match)=>{
            if (shouldIndentNextCharacter) return `${indentStr}${match}`;
            shouldIndentNextCharacter = true;
            return match;
        };
        this.intro = this.intro.replace(pattern, replacer);
        let charIndex = 0;
        let chunk = this.firstChunk;
        while(chunk){
            const end = chunk.end;
            if (chunk.edited) {
                if (!isExcluded[charIndex]) {
                    chunk.content = chunk.content.replace(pattern, replacer);
                    if (chunk.content.length) {
                        shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === '\n';
                    }
                }
            } else {
                charIndex = chunk.start;
                while(charIndex < end){
                    if (!isExcluded[charIndex]) {
                        const char = this.original[charIndex];
                        if (char === '\n') {
                            shouldIndentNextCharacter = true;
                        } else if (char !== '\r' && shouldIndentNextCharacter) {
                            shouldIndentNextCharacter = false;
                            if (charIndex === chunk.start) {
                                chunk.prependRight(indentStr);
                            } else {
                                this._splitChunk(chunk, charIndex);
                                chunk = chunk.next;
                                chunk.prependRight(indentStr);
                            }
                        }
                    }
                    charIndex += 1;
                }
            }
            charIndex = chunk.end;
            chunk = chunk.next;
        }
        this.outro = this.outro.replace(pattern, replacer);
        return this;
    }
    insert() {
        throw new Error('magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)');
    }
    insertLeft(index, content) {
        if (!warned.insertLeft) {
            console.warn('magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead');
            warned.insertLeft = true;
        }
        return this.appendLeft(index, content);
    }
    insertRight(index, content) {
        if (!warned.insertRight) {
            console.warn('magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead');
            warned.insertRight = true;
        }
        return this.prependRight(index, content);
    }
    move(start, end, index) {
        start = start + this.offset;
        end = end + this.offset;
        index = index + this.offset;
        if (index >= start && index <= end) throw new Error('Cannot move a selection inside itself');
        this._split(start);
        this._split(end);
        this._split(index);
        const first = this.byStart[start];
        const last = this.byEnd[end];
        const oldLeft = first.previous;
        const oldRight = last.next;
        const newRight = this.byStart[index];
        if (!newRight && last === this.lastChunk) return this;
        const newLeft = newRight ? newRight.previous : this.lastChunk;
        if (oldLeft) oldLeft.next = oldRight;
        if (oldRight) oldRight.previous = oldLeft;
        if (newLeft) newLeft.next = first;
        if (newRight) newRight.previous = last;
        if (!first.previous) this.firstChunk = last.next;
        if (!last.next) {
            this.lastChunk = first.previous;
            this.lastChunk.next = null;
        }
        first.previous = newLeft;
        last.next = newRight || null;
        if (!newLeft) this.firstChunk = first;
        if (!newRight) this.lastChunk = last;
        return this;
    }
    overwrite(start, end, content, options) {
        options = options || {};
        return this.update(start, end, content, {
            ...options,
            overwrite: !options.contentOnly
        });
    }
    update(start, end, content, options) {
        start = start + this.offset;
        end = end + this.offset;
        if (typeof content !== 'string') throw new TypeError('replacement content must be a string');
        if (this.original.length !== 0) {
            while(start < 0)start += this.original.length;
            while(end < 0)end += this.original.length;
        }
        if (end > this.original.length) throw new Error('end is out of bounds');
        if (start === end) throw new Error('Cannot overwrite a zero-length range – use appendLeft or prependRight instead');
        this._split(start);
        this._split(end);
        if (options === true) {
            if (!warned.storeName) {
                console.warn('The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string');
                warned.storeName = true;
            }
            options = {
                storeName: true
            };
        }
        const storeName = options !== undefined ? options.storeName : false;
        const overwrite = options !== undefined ? options.overwrite : false;
        if (storeName) {
            const original = this.original.slice(start, end);
            Object.defineProperty(this.storedNames, original, {
                writable: true,
                value: true,
                enumerable: true
            });
        }
        const first = this.byStart[start];
        const last = this.byEnd[end];
        if (first) {
            let chunk = first;
            while(chunk !== last){
                if (chunk.next !== this.byStart[chunk.end]) {
                    throw new Error('Cannot overwrite across a split point');
                }
                chunk = chunk.next;
                chunk.edit('', false);
            }
            first.edit(content, storeName, !overwrite);
        } else {
            // must be inserting at the end
            const newChunk = new Chunk(start, end, '').edit(content, storeName);
            // TODO last chunk in the array may not be the last chunk, if it's moved...
            last.next = newChunk;
            newChunk.previous = last;
        }
        return this;
    }
    prepend(content) {
        if (typeof content !== 'string') throw new TypeError('outro content must be a string');
        this.intro = content + this.intro;
        return this;
    }
    prependLeft(index, content) {
        index = index + this.offset;
        if (typeof content !== 'string') throw new TypeError('inserted content must be a string');
        this._split(index);
        const chunk = this.byEnd[index];
        if (chunk) {
            chunk.prependLeft(content);
        } else {
            this.intro = content + this.intro;
        }
        return this;
    }
    prependRight(index, content) {
        index = index + this.offset;
        if (typeof content !== 'string') throw new TypeError('inserted content must be a string');
        this._split(index);
        const chunk = this.byStart[index];
        if (chunk) {
            chunk.prependRight(content);
        } else {
            this.outro = content + this.outro;
        }
        return this;
    }
    remove(start, end) {
        start = start + this.offset;
        end = end + this.offset;
        if (this.original.length !== 0) {
            while(start < 0)start += this.original.length;
            while(end < 0)end += this.original.length;
        }
        if (start === end) return this;
        if (start < 0 || end > this.original.length) throw new Error('Character is out of bounds');
        if (start > end) throw new Error('end must be greater than start');
        this._split(start);
        this._split(end);
        let chunk = this.byStart[start];
        while(chunk){
            chunk.intro = '';
            chunk.outro = '';
            chunk.edit('');
            chunk = end > chunk.end ? this.byStart[chunk.end] : null;
        }
        return this;
    }
    reset(start, end) {
        start = start + this.offset;
        end = end + this.offset;
        if (this.original.length !== 0) {
            while(start < 0)start += this.original.length;
            while(end < 0)end += this.original.length;
        }
        if (start === end) return this;
        if (start < 0 || end > this.original.length) throw new Error('Character is out of bounds');
        if (start > end) throw new Error('end must be greater than start');
        this._split(start);
        this._split(end);
        let chunk = this.byStart[start];
        while(chunk){
            chunk.reset();
            chunk = end > chunk.end ? this.byStart[chunk.end] : null;
        }
        return this;
    }
    lastChar() {
        if (this.outro.length) return this.outro[this.outro.length - 1];
        let chunk = this.lastChunk;
        do {
            if (chunk.outro.length) return chunk.outro[chunk.outro.length - 1];
            if (chunk.content.length) return chunk.content[chunk.content.length - 1];
            if (chunk.intro.length) return chunk.intro[chunk.intro.length - 1];
        }while (chunk = chunk.previous)
        if (this.intro.length) return this.intro[this.intro.length - 1];
        return '';
    }
    lastLine() {
        let lineIndex = this.outro.lastIndexOf(n);
        if (lineIndex !== -1) return this.outro.substr(lineIndex + 1);
        let lineStr = this.outro;
        let chunk = this.lastChunk;
        do {
            if (chunk.outro.length > 0) {
                lineIndex = chunk.outro.lastIndexOf(n);
                if (lineIndex !== -1) return chunk.outro.substr(lineIndex + 1) + lineStr;
                lineStr = chunk.outro + lineStr;
            }
            if (chunk.content.length > 0) {
                lineIndex = chunk.content.lastIndexOf(n);
                if (lineIndex !== -1) return chunk.content.substr(lineIndex + 1) + lineStr;
                lineStr = chunk.content + lineStr;
            }
            if (chunk.intro.length > 0) {
                lineIndex = chunk.intro.lastIndexOf(n);
                if (lineIndex !== -1) return chunk.intro.substr(lineIndex + 1) + lineStr;
                lineStr = chunk.intro + lineStr;
            }
        }while (chunk = chunk.previous)
        lineIndex = this.intro.lastIndexOf(n);
        if (lineIndex !== -1) return this.intro.substr(lineIndex + 1) + lineStr;
        return this.intro + lineStr;
    }
    slice(start = 0, end = this.original.length - this.offset) {
        start = start + this.offset;
        end = end + this.offset;
        if (this.original.length !== 0) {
            while(start < 0)start += this.original.length;
            while(end < 0)end += this.original.length;
        }
        let result = '';
        // find start chunk
        let chunk = this.firstChunk;
        while(chunk && (chunk.start > start || chunk.end <= start)){
            // found end chunk before start
            if (chunk.start < end && chunk.end >= end) {
                return result;
            }
            chunk = chunk.next;
        }
        if (chunk && chunk.edited && chunk.start !== start) throw new Error(`Cannot use replaced character ${start} as slice start anchor.`);
        const startChunk = chunk;
        while(chunk){
            if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
                result += chunk.intro;
            }
            const containsEnd = chunk.start < end && chunk.end >= end;
            if (containsEnd && chunk.edited && chunk.end !== end) throw new Error(`Cannot use replaced character ${end} as slice end anchor.`);
            const sliceStart = startChunk === chunk ? start - chunk.start : 0;
            const sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
            result += chunk.content.slice(sliceStart, sliceEnd);
            if (chunk.outro && (!containsEnd || chunk.end === end)) {
                result += chunk.outro;
            }
            if (containsEnd) {
                break;
            }
            chunk = chunk.next;
        }
        return result;
    }
    // TODO deprecate this? not really very useful
    snip(start, end) {
        const clone = this.clone();
        clone.remove(0, start);
        clone.remove(end, clone.original.length);
        return clone;
    }
    _split(index) {
        if (this.byStart[index] || this.byEnd[index]) return;
        let chunk = this.lastSearchedChunk;
        let previousChunk = chunk;
        const searchForward = index > chunk.end;
        while(chunk){
            if (chunk.contains(index)) return this._splitChunk(chunk, index);
            chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
            // Prevent infinite loop (e.g. via empty chunks, where start === end)
            if (chunk === previousChunk) return;
            previousChunk = chunk;
        }
    }
    _splitChunk(chunk, index) {
        if (chunk.edited && chunk.content.length) {
            // zero-length edited chunks are a special case (overlapping replacements)
            const loc = getLocator(this.original)(index);
            throw new Error(`Cannot split a chunk that has already been edited (${loc.line}:${loc.column} – "${chunk.original}")`);
        }
        const newChunk = chunk.split(index);
        this.byEnd[index] = chunk;
        this.byStart[index] = newChunk;
        this.byEnd[newChunk.end] = newChunk;
        if (chunk === this.lastChunk) this.lastChunk = newChunk;
        this.lastSearchedChunk = chunk;
        return true;
    }
    toString() {
        let str = this.intro;
        let chunk = this.firstChunk;
        while(chunk){
            str += chunk.toString();
            chunk = chunk.next;
        }
        return str + this.outro;
    }
    isEmpty() {
        let chunk = this.firstChunk;
        do {
            if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim()) return false;
        }while (chunk = chunk.next)
        return true;
    }
    length() {
        let chunk = this.firstChunk;
        let length = 0;
        do {
            length += chunk.intro.length + chunk.content.length + chunk.outro.length;
        }while (chunk = chunk.next)
        return length;
    }
    trimLines() {
        return this.trim('[\\r\\n]');
    }
    trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
    }
    trimEndAborted(charType) {
        const rx = new RegExp((charType || '\\s') + '+$');
        this.outro = this.outro.replace(rx, '');
        if (this.outro.length) return true;
        let chunk = this.lastChunk;
        do {
            const end = chunk.end;
            const aborted = chunk.trimEnd(rx);
            // if chunk was trimmed, we have a new lastChunk
            if (chunk.end !== end) {
                if (this.lastChunk === chunk) {
                    this.lastChunk = chunk.next;
                }
                this.byEnd[chunk.end] = chunk;
                this.byStart[chunk.next.start] = chunk.next;
                this.byEnd[chunk.next.end] = chunk.next;
            }
            if (aborted) return true;
            chunk = chunk.previous;
        }while (chunk)
        return false;
    }
    trimEnd(charType) {
        this.trimEndAborted(charType);
        return this;
    }
    trimStartAborted(charType) {
        const rx = new RegExp('^' + (charType || '\\s') + '+');
        this.intro = this.intro.replace(rx, '');
        if (this.intro.length) return true;
        let chunk = this.firstChunk;
        do {
            const end = chunk.end;
            const aborted = chunk.trimStart(rx);
            if (chunk.end !== end) {
                // special case...
                if (chunk === this.lastChunk) this.lastChunk = chunk.next;
                this.byEnd[chunk.end] = chunk;
                this.byStart[chunk.next.start] = chunk.next;
                this.byEnd[chunk.next.end] = chunk.next;
            }
            if (aborted) return true;
            chunk = chunk.next;
        }while (chunk)
        return false;
    }
    trimStart(charType) {
        this.trimStartAborted(charType);
        return this;
    }
    hasChanged() {
        return this.original !== this.toString();
    }
    _replaceRegexp(searchValue, replacement) {
        function getReplacement(match, str) {
            if (typeof replacement === 'string') {
                return replacement.replace(/\$(\$|&|\d+)/g, (_, i)=>{
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_a_parameter
                    if (i === '$') return '$';
                    if (i === '&') return match[0];
                    const num = +i;
                    if (num < match.length) return match[+i];
                    return `$${i}`;
                });
            } else {
                return replacement(...match, match.index, str, match.groups);
            }
        }
        function matchAll(re, str) {
            let match;
            const matches = [];
            while(match = re.exec(str)){
                matches.push(match);
            }
            return matches;
        }
        if (searchValue.global) {
            const matches = matchAll(searchValue, this.original);
            matches.forEach((match)=>{
                if (match.index != null) {
                    const replacement = getReplacement(match, this.original);
                    if (replacement !== match[0]) {
                        this.overwrite(match.index, match.index + match[0].length, replacement);
                    }
                }
            });
        } else {
            const match = this.original.match(searchValue);
            if (match && match.index != null) {
                const replacement = getReplacement(match, this.original);
                if (replacement !== match[0]) {
                    this.overwrite(match.index, match.index + match[0].length, replacement);
                }
            }
        }
        return this;
    }
    _replaceString(string, replacement) {
        const { original } = this;
        const index = original.indexOf(string);
        if (index !== -1) {
            if (typeof replacement === 'function') {
                replacement = replacement(string, index, original);
            }
            if (string !== replacement) {
                this.overwrite(index, index + string.length, replacement);
            }
        }
        return this;
    }
    replace(searchValue, replacement) {
        if (typeof searchValue === 'string') {
            return this._replaceString(searchValue, replacement);
        }
        return this._replaceRegexp(searchValue, replacement);
    }
    _replaceAllString(string, replacement) {
        const { original } = this;
        const stringLength = string.length;
        for(let index = original.indexOf(string); index !== -1; index = original.indexOf(string, index + stringLength)){
            const previous = original.slice(index, index + stringLength);
            let _replacement = replacement;
            if (typeof replacement === 'function') {
                _replacement = replacement(previous, index, original);
            }
            if (previous !== _replacement) this.overwrite(index, index + stringLength, _replacement);
        }
        return this;
    }
    replaceAll(searchValue, replacement) {
        if (typeof searchValue === 'string') {
            return this._replaceAllString(searchValue, replacement);
        }
        if (!searchValue.global) {
            throw new TypeError('MagicString.prototype.replaceAll called with a non-global RegExp argument');
        }
        return this._replaceRegexp(searchValue, replacement);
    }
}
const hasOwnProp = Object.prototype.hasOwnProperty;
class Bundle {
    constructor(options = {}){
        this.intro = options.intro || '';
        this.separator = options.separator !== undefined ? options.separator : '\n';
        this.sources = [];
        this.uniqueSources = [];
        this.uniqueSourceIndexByFilename = {};
    }
    addSource(source) {
        if (source instanceof MagicString) {
            return this.addSource({
                content: source,
                filename: source.filename,
                separator: this.separator
            });
        }
        if (!isObject(source) || !source.content) {
            throw new Error('bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`');
        }
        [
            'filename',
            'ignoreList',
            'indentExclusionRanges',
            'separator'
        ].forEach((option)=>{
            if (!hasOwnProp.call(source, option)) source[option] = source.content[option];
        });
        if (source.separator === undefined) {
            // TODO there's a bunch of this sort of thing, needs cleaning up
            source.separator = this.separator;
        }
        if (source.filename) {
            if (!hasOwnProp.call(this.uniqueSourceIndexByFilename, source.filename)) {
                this.uniqueSourceIndexByFilename[source.filename] = this.uniqueSources.length;
                this.uniqueSources.push({
                    filename: source.filename,
                    content: source.content.original
                });
            } else {
                const uniqueSource = this.uniqueSources[this.uniqueSourceIndexByFilename[source.filename]];
                if (source.content.original !== uniqueSource.content) {
                    throw new Error(`Illegal source: same filename (${source.filename}), different contents`);
                }
            }
        }
        this.sources.push(source);
        return this;
    }
    append(str, options) {
        this.addSource({
            content: new MagicString(str),
            separator: options && options.separator || ''
        });
        return this;
    }
    clone() {
        const bundle = new Bundle({
            intro: this.intro,
            separator: this.separator
        });
        this.sources.forEach((source)=>{
            bundle.addSource({
                filename: source.filename,
                content: source.content.clone(),
                separator: source.separator
            });
        });
        return bundle;
    }
    generateDecodedMap(options = {}) {
        const names = [];
        let x_google_ignoreList = undefined;
        this.sources.forEach((source)=>{
            Object.keys(source.content.storedNames).forEach((name)=>{
                if (!~names.indexOf(name)) names.push(name);
            });
        });
        const mappings = new Mappings(options.hires);
        if (this.intro) {
            mappings.advance(this.intro);
        }
        this.sources.forEach((source, i)=>{
            if (i > 0) {
                mappings.advance(this.separator);
            }
            const sourceIndex = source.filename ? this.uniqueSourceIndexByFilename[source.filename] : -1;
            const magicString = source.content;
            const locate = getLocator(magicString.original);
            if (magicString.intro) {
                mappings.advance(magicString.intro);
            }
            magicString.firstChunk.eachNext((chunk)=>{
                const loc = locate(chunk.start);
                if (chunk.intro.length) mappings.advance(chunk.intro);
                if (source.filename) {
                    if (chunk.edited) {
                        mappings.addEdit(sourceIndex, chunk.content, loc, chunk.storeName ? names.indexOf(chunk.original) : -1);
                    } else {
                        mappings.addUneditedChunk(sourceIndex, chunk, magicString.original, loc, magicString.sourcemapLocations);
                    }
                } else {
                    mappings.advance(chunk.content);
                }
                if (chunk.outro.length) mappings.advance(chunk.outro);
            });
            if (magicString.outro) {
                mappings.advance(magicString.outro);
            }
            if (source.ignoreList && sourceIndex !== -1) {
                if (x_google_ignoreList === undefined) {
                    x_google_ignoreList = [];
                }
                x_google_ignoreList.push(sourceIndex);
            }
        });
        return {
            file: options.file ? options.file.split(/[/\\]/).pop() : undefined,
            sources: this.uniqueSources.map((source)=>{
                return options.file ? getRelativePath(options.file, source.filename) : source.filename;
            }),
            sourcesContent: this.uniqueSources.map((source)=>{
                return options.includeContent ? source.content : null;
            }),
            names,
            mappings: mappings.raw,
            x_google_ignoreList
        };
    }
    generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
    }
    getIndentString() {
        const indentStringCounts = {};
        this.sources.forEach((source)=>{
            const indentStr = source.content._getRawIndentString();
            if (indentStr === null) return;
            if (!indentStringCounts[indentStr]) indentStringCounts[indentStr] = 0;
            indentStringCounts[indentStr] += 1;
        });
        return Object.keys(indentStringCounts).sort((a, b)=>{
            return indentStringCounts[a] - indentStringCounts[b];
        })[0] || '\t';
    }
    indent(indentStr) {
        if (!arguments.length) {
            indentStr = this.getIndentString();
        }
        if (indentStr === '') return this; // noop
        let trailingNewline = !this.intro || this.intro.slice(-1) === '\n';
        this.sources.forEach((source, i)=>{
            const separator = source.separator !== undefined ? source.separator : this.separator;
            const indentStart = trailingNewline || i > 0 && /\r?\n$/.test(separator);
            source.content.indent(indentStr, {
                exclude: source.indentExclusionRanges,
                indentStart
            });
            trailingNewline = source.content.lastChar() === '\n';
        });
        if (this.intro) {
            this.intro = indentStr + this.intro.replace(/^[^\n]/gm, (match, index)=>{
                return index > 0 ? indentStr + match : match;
            });
        }
        return this;
    }
    prepend(str) {
        this.intro = str + this.intro;
        return this;
    }
    toString() {
        const body = this.sources.map((source, i)=>{
            const separator = source.separator !== undefined ? source.separator : this.separator;
            const str = (i > 0 ? separator : '') + source.content.toString();
            return str;
        }).join('');
        return this.intro + body;
    }
    isEmpty() {
        if (this.intro.length && this.intro.trim()) return false;
        if (this.sources.some((source)=>!source.content.isEmpty())) return false;
        return true;
    }
    length() {
        return this.sources.reduce((length, source)=>length + source.content.length(), this.intro.length);
    }
    trimLines() {
        return this.trim('[\\r\\n]');
    }
    trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
    }
    trimStart(charType) {
        const rx = new RegExp('^' + (charType || '\\s') + '+');
        this.intro = this.intro.replace(rx, '');
        if (!this.intro) {
            let source;
            let i = 0;
            do {
                source = this.sources[i++];
                if (!source) {
                    break;
                }
            }while (!source.content.trimStartAborted(charType))
        }
        return this;
    }
    trimEnd(charType) {
        const rx = new RegExp((charType || '\\s') + '+$');
        let source;
        let i = this.sources.length - 1;
        do {
            source = this.sources[i--];
            if (!source) {
                this.intro = this.intro.replace(rx, '');
                break;
            }
        }while (!source.content.trimEndAborted(charType))
        return this;
    }
}
MagicString.Bundle = Bundle;
MagicString.SourceMap = SourceMap;
MagicString.default = MagicString; // work around TypeScript bug https://github.com/Rich-Harris/magic-string/pull/121
module.exports = MagicString; //# sourceMappingURL=magic-string.cjs.js.map
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/oxide-win32-x64-msvc/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"@tailwindcss/oxide-win32-x64-msvc","version":"4.1.16","repository":{"type":"git","url":"git+https://github.com/tailwindlabs/tailwindcss.git","directory":"crates/node/npm/win32-x64-msvc"},"os":["win32"],"cpu":["x64"],"main":"tailwindcss-oxide.win32-x64-msvc.node","files":["tailwindcss-oxide.win32-x64-msvc.node"],"publishConfig":{"provenance":true,"access":"public"},"license":"MIT","engines":{"node":">= 10"}});}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/oxide/index.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

// prettier-ignore
/* eslint-disable */ // @ts-nocheck
/* auto-generated by NAPI-RS */ const { createRequire } = __turbopack_context__.r("[externals]/node:module [external] (node:module, cjs)");
require = createRequire(("TURBOPACK compile-time value", "/ROOT/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/oxide/index.js"));
const { readFileSync } = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
let nativeBinding = null;
const loadErrors = [];
const isMusl = ()=>{
    let musl = false;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return musl;
};
const isFileMusl = (f)=>f.includes('libc.musl-') || f.includes('ld-musl-');
const isMuslFromFilesystem = ()=>{
    try {
        return readFileSync('/usr/bin/ldd', 'utf-8').includes('musl');
    } catch  {
        return null;
    }
};
const isMuslFromReport = ()=>{
    let report = null;
    if (typeof process.report?.getReport === 'function') {
        process.report.excludeNetwork = true;
        report = process.report.getReport();
    }
    if (!report) {
        return null;
    }
    if (report.header && report.header.glibcVersionRuntime) {
        return false;
    }
    if (Array.isArray(report.sharedObjects)) {
        if (report.sharedObjects.some(isFileMusl)) {
            return true;
        }
    }
    return false;
};
const isMuslFromChildProcess = ()=>{
    try {
        return __turbopack_context__.r("[externals]/child_process [external] (child_process, cjs)").execSync('ldd --version', {
            encoding: 'utf8'
        }).includes('musl');
    } catch (e) {
        // If we reach this case, we don't know if the system is musl or not, so is better to just fallback to false
        return false;
    }
};
function requireNative() {
    if (process.env.NAPI_RS_NATIVE_LIBRARY_PATH) {
        try {
            return (()=>{
                const e = new Error("Cannot find module as expression is too dynamic");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
        } catch (err) {
            loadErrors.push(err);
        }
    } else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (process.report?.getReport?.()?.header?.osName?.startsWith?.('MINGW')) {
                try {
                    return (()=>{
                        const e = new Error("Cannot find module './tailwindcss-oxide.win32-x64-gnu.node'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })();
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = (()=>{
                        const e = new Error("Cannot find module '@tailwindcss/oxide-win32-x64-gnu'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })();
                    const bindingPackageVersion = (()=>{
                        const e = new Error("Cannot find module '@tailwindcss/oxide-win32-x64-gnu/package.json'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })().version;
                    if (bindingPackageVersion !== '4.1.16' && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== '0') {
                        throw new Error(`Native binding package version mismatch, expected 4.1.16 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            } else {
                try {
                    return (()=>{
                        const e = new Error("Cannot find module './tailwindcss-oxide.win32-x64-msvc.node'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })();
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = (()=>{
                        throw new Error('could not resolve "' + '@tailwindcss/oxide-win32-x64-msvc' + '" into a module');
                    })();
                    const bindingPackageVersion = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/oxide-win32-x64-msvc/package.json (json)").version;
                    if (bindingPackageVersion !== '4.1.16' && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== '0') {
                        throw new Error(`Native binding package version mismatch, expected 4.1.16 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            }
        } else //TURBOPACK unreachable
        ;
    } else //TURBOPACK unreachable
    ;
}
nativeBinding = requireNative();
if (!nativeBinding || process.env.NAPI_RS_FORCE_WASI) {
    let wasiBinding = null;
    let wasiBindingError = null;
    try {
        wasiBinding = (()=>{
            const e = new Error("Cannot find module './tailwindcss-oxide.wasi.cjs'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        nativeBinding = wasiBinding;
    } catch (err) {
        if (process.env.NAPI_RS_FORCE_WASI) {
            wasiBindingError = err;
        }
    }
    if (!nativeBinding) {
        try {
            wasiBinding = (()=>{
                const e = new Error("Cannot find module '@tailwindcss/oxide-wasm32-wasi'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            nativeBinding = wasiBinding;
        } catch (err) {
            if (process.env.NAPI_RS_FORCE_WASI) {
                wasiBindingError.cause = err;
                loadErrors.push(err);
            }
        }
    }
    if (process.env.NAPI_RS_FORCE_WASI === 'error' && !wasiBinding) {
        const error = new Error('WASI binding not found and NAPI_RS_FORCE_WASI is set to error');
        error.cause = wasiBindingError;
        throw error;
    }
}
if (!nativeBinding) {
    if (loadErrors.length > 0) {
        throw new Error(`Cannot find native binding. ` + `npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). ` + 'Please try `npm i` again after removing both package-lock.json and node_modules directory.', {
            cause: loadErrors.reduce((err, cur)=>{
                cur.cause = err;
                return cur;
            })
        });
    }
    throw new Error(`Failed to load native binding`);
}
module.exports = nativeBinding;
module.exports.Scanner = nativeBinding.Scanner;
}),
"[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/postcss/dist/index.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var Xe = Object.create;
var ge = Object.defineProperty;
var et = Object.getOwnPropertyDescriptor;
var tt = Object.getOwnPropertyNames;
var rt = Object.getPrototypeOf, it = Object.prototype.hasOwnProperty;
var de = (e, r)=>(r = Symbol[e]) ? r : Symbol.for("Symbol." + e), me = (e)=>{
    throw TypeError(e);
};
var nt = (e, r, t, n)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let a of tt(r))!it.call(e, a) && a !== t && ge(e, a, {
        get: ()=>r[a],
        enumerable: !(n = et(r, a)) || n.enumerable
    });
    return e;
};
var H = (e, r, t)=>(t = e != null ? Xe(rt(e)) : {}, nt(r || !e || !e.__esModule ? ge(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
var he = (e, r, t)=>{
    if (r != null) {
        typeof r != "object" && typeof r != "function" && me("Object expected");
        var n, a;
        t && (n = r[de("asyncDispose")]), n === void 0 && (n = r[de("dispose")], t && (a = n)), typeof n != "function" && me("Object not disposable"), a && (n = function() {
            try {
                a.call(this);
            } catch (o) {
                return Promise.reject(o);
            }
        }), e.push([
            t,
            n,
            r
        ]);
    } else t && e.push([
        t
    ]);
    return r;
}, ve = (e, r, t)=>{
    var n = typeof SuppressedError == "function" ? SuppressedError : function(i, l, u, s) {
        return s = Error(u), s.name = "SuppressedError", s.error = i, s.suppressed = l, s;
    }, a = (i)=>r = t ? new n(i, r, "An error was suppressed during disposal") : (t = !0, i), o = (i)=>{
        for(; i = e.pop();)try {
            var l = i[1] && i[1].call(i[2]);
            if (i[0]) return Promise.resolve(l).then(o, (u)=>(a(u), o()));
        } catch (u) {
            a(u);
        }
        if (t) throw r;
    };
    return o();
};
var Be = H(__turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@alloc/quick-lru/index.js [postcss] (ecmascript)")), x = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/node/dist/index.js [postcss] (ecmascript)"), Ye = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/node/dist/require-cache.js [postcss] (ecmascript)"), Ge = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/oxide/index.js [postcss] (ecmascript)"), qe = H(__turbopack_context__.r("[externals]/fs [external] (fs, cjs)")), $ = H(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
function F(e) {
    return {
        kind: "word",
        value: e
    };
}
function ot(e, r) {
    return {
        kind: "function",
        value: e,
        nodes: r
    };
}
function at(e) {
    return {
        kind: "separator",
        value: e
    };
}
function T(e) {
    let r = "";
    for (let t of e)switch(t.kind){
        case "word":
        case "separator":
            {
                r += t.value;
                break;
            }
        case "function":
            r += t.value + "(" + T(t.nodes) + ")";
    }
    return r;
}
var ke = 92, lt = 41, we = 58, ye = 44, st = 34, be = 61, xe = 62, Ae = 60, Ce = 10, ut = 40, ft = 39, ct = 47, Se = 32, Te = 9;
function C(e) {
    e = e.replaceAll(`\r
`, `
`);
    let r = [], t = [], n = null, a = "", o;
    for(let i = 0; i < e.length; i++){
        let l = e.charCodeAt(i);
        switch(l){
            case ke:
                {
                    a += e[i] + e[i + 1], i++;
                    break;
                }
            case ct:
                {
                    if (a.length > 0) {
                        let s = F(a);
                        n ? n.nodes.push(s) : r.push(s), a = "";
                    }
                    let u = F(e[i]);
                    n ? n.nodes.push(u) : r.push(u);
                    break;
                }
            case we:
            case ye:
            case be:
            case xe:
            case Ae:
            case Ce:
            case Se:
            case Te:
                {
                    if (a.length > 0) {
                        let c = F(a);
                        n ? n.nodes.push(c) : r.push(c), a = "";
                    }
                    let u = i, s = i + 1;
                    for(; s < e.length && (o = e.charCodeAt(s), !(o !== we && o !== ye && o !== be && o !== xe && o !== Ae && o !== Ce && o !== Se && o !== Te)); s++);
                    i = s - 1;
                    let f = at(e.slice(u, s));
                    n ? n.nodes.push(f) : r.push(f);
                    break;
                }
            case ft:
            case st:
                {
                    let u = i;
                    for(let s = i + 1; s < e.length; s++)if (o = e.charCodeAt(s), o === ke) s += 1;
                    else if (o === l) {
                        i = s;
                        break;
                    }
                    a += e.slice(u, i + 1);
                    break;
                }
            case ut:
                {
                    let u = ot(a, []);
                    a = "", n ? n.nodes.push(u) : r.push(u), t.push(u), n = u;
                    break;
                }
            case lt:
                {
                    let u = t.pop();
                    if (a.length > 0) {
                        let s = F(a);
                        u?.nodes.push(s), a = "";
                    }
                    t.length > 0 ? n = t[t.length - 1] : n = null;
                    break;
                }
            default:
                a += String.fromCharCode(l);
        }
    }
    return a.length > 0 && r.push(F(a)), r;
}
var d = class extends Map {
    constructor(t){
        super();
        this.factory = t;
    }
    get(t) {
        let n = super.get(t);
        return n === void 0 && (n = this.factory(t, this), this.set(t, n)), n;
    }
};
var nr = new Uint8Array(256);
var Z = new Uint8Array(256);
function w(e, r) {
    let t = 0, n = [], a = 0, o = e.length, i = r.charCodeAt(0);
    for(let l = 0; l < o; l++){
        let u = e.charCodeAt(l);
        if (t === 0 && u === i) {
            n.push(e.slice(a, l)), a = l + 1;
            continue;
        }
        switch(u){
            case 92:
                l += 1;
                break;
            case 39:
            case 34:
                for(; ++l < o;){
                    let s = e.charCodeAt(l);
                    if (s === 92) {
                        l += 1;
                        continue;
                    }
                    if (s === u) break;
                }
                break;
            case 40:
                Z[t] = 41, t++;
                break;
            case 91:
                Z[t] = 93, t++;
                break;
            case 123:
                Z[t] = 125, t++;
                break;
            case 93:
            case 125:
            case 41:
                t > 0 && u === Z[t - 1] && t--;
                break;
        }
    }
    return n.push(e.slice(a)), n;
}
var te = ((i)=>(i[i.Continue = 0] = "Continue", i[i.Skip = 1] = "Skip", i[i.Stop = 2] = "Stop", i[i.Replace = 3] = "Replace", i[i.ReplaceSkip = 4] = "ReplaceSkip", i[i.ReplaceStop = 5] = "ReplaceStop", i))(te || {}), h = {
    Continue: {
        kind: 0
    },
    Skip: {
        kind: 1
    },
    Stop: {
        kind: 2
    },
    Replace: (e)=>({
            kind: 3,
            nodes: Array.isArray(e) ? e : [
                e
            ]
        }),
    ReplaceSkip: (e)=>({
            kind: 4,
            nodes: Array.isArray(e) ? e : [
                e
            ]
        }),
    ReplaceStop: (e)=>({
            kind: 5,
            nodes: Array.isArray(e) ? e : [
                e
            ]
        })
};
function v(e, r) {
    typeof r == "function" ? $e(e, r) : $e(e, r.enter, r.exit);
}
function $e(e, r = ()=>h.Continue, t = ()=>h.Continue) {
    let n = [
        [
            e,
            0,
            null
        ]
    ], a = {
        parent: null,
        depth: 0,
        path () {
            let o = [];
            for(let i = 1; i < n.length; i++){
                let l = n[i][2];
                l && o.push(l);
            }
            return o;
        }
    };
    for(; n.length > 0;){
        let o = n.length - 1, i = n[o], l = i[0], u = i[1], s = i[2];
        if (u >= l.length) {
            n.pop();
            continue;
        }
        if (a.parent = s, a.depth = o, u >= 0) {
            let I = l[u], N = r(I, a) ?? h.Continue;
            switch(N.kind){
                case 0:
                    {
                        I.nodes && I.nodes.length > 0 && n.push([
                            I.nodes,
                            0,
                            I
                        ]), i[1] = ~u;
                        continue;
                    }
                case 2:
                    return;
                case 1:
                    {
                        i[1] = ~u;
                        continue;
                    }
                case 3:
                    {
                        l.splice(u, 1, ...N.nodes);
                        continue;
                    }
                case 5:
                    {
                        l.splice(u, 1, ...N.nodes);
                        return;
                    }
                case 4:
                    {
                        l.splice(u, 1, ...N.nodes), i[1] += N.nodes.length;
                        continue;
                    }
                default:
                    throw new Error(`Invalid \`WalkAction.${te[N.kind] ?? `Unknown(${N.kind})`}\` in enter.`);
            }
        }
        let f = ~u, c = l[f], m = t(c, a) ?? h.Continue;
        switch(m.kind){
            case 0:
                i[1] = f + 1;
                continue;
            case 2:
                return;
            case 3:
                {
                    l.splice(f, 1, ...m.nodes), i[1] = f + m.nodes.length;
                    continue;
                }
            case 5:
                {
                    l.splice(f, 1, ...m.nodes);
                    return;
                }
            case 4:
                {
                    l.splice(f, 1, ...m.nodes), i[1] = f + m.nodes.length;
                    continue;
                }
            default:
                throw new Error(`Invalid \`WalkAction.${te[m.kind] ?? `Unknown(${m.kind})`}\` in exit.`);
        }
    }
}
var gr = new d((e)=>{
    let r = C(e), t = new Set;
    return v(r, (n, a)=>{
        let o = a.parent === null ? r : a.parent.nodes ?? [];
        if (n.kind === "word" && (n.value === "+" || n.value === "-" || n.value === "*" || n.value === "/")) {
            let i = o.indexOf(n) ?? -1;
            if (i === -1) return;
            let l = o[i - 1];
            if (l?.kind !== "separator" || l.value !== " ") return;
            let u = o[i + 1];
            if (u?.kind !== "separator" || u.value !== " ") return;
            t.add(l), t.add(u);
        } else n.kind === "separator" && n.value.length > 0 && n.value.trim() === "" ? (o[0] === n || o[o.length - 1] === n) && t.add(n) : n.kind === "separator" && n.value.trim() === "," && (n.value = ",");
    }), t.size > 0 && v(r, (n)=>{
        if (t.has(n)) return t.delete(n), h.ReplaceSkip([]);
    }), re(r), T(r);
});
var hr = new d((e)=>{
    let r = C(e);
    return r.length === 3 && r[0].kind === "word" && r[0].value === "&" && r[1].kind === "separator" && r[1].value === ":" && r[2].kind === "function" && r[2].value === "is" ? T(r[2].nodes) : e;
});
function re(e) {
    for (let r of e)switch(r.kind){
        case "function":
            {
                if (r.value === "url" || r.value.endsWith("_url")) {
                    r.value = j(r.value);
                    break;
                }
                if (r.value === "var" || r.value.endsWith("_var") || r.value === "theme" || r.value.endsWith("_theme")) {
                    r.value = j(r.value);
                    for(let t = 0; t < r.nodes.length; t++)re([
                        r.nodes[t]
                    ]);
                    break;
                }
                r.value = j(r.value), re(r.nodes);
                break;
            }
        case "separator":
            r.value = j(r.value);
            break;
        case "word":
            {
                (r.value[0] !== "-" || r.value[1] !== "-") && (r.value = j(r.value));
                break;
            }
        default:
            pt(r);
    }
}
var vr = new d((e)=>{
    let r = C(e);
    return r.length === 1 && r[0].kind === "function" && r[0].value === "var";
});
function pt(e) {
    throw new Error(`Unexpected value: ${e}`);
}
function j(e) {
    return e.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
}
var dt = process.env.FEATURES_ENV !== "stable";
var O = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, $r = new RegExp(`^${O.source}$`);
var Nr = new RegExp(`^${O.source}%$`);
var Er = new RegExp(`^${O.source}s*/s*${O.source}$`);
var mt = [
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "px",
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
], Vr = new RegExp(`^${O.source}(${mt.join("|")})$`);
var gt = [
    "deg",
    "rad",
    "grad",
    "turn"
], Rr = new RegExp(`^${O.source}(${gt.join("|")})$`);
var Pr = new RegExp(`^${O.source} +${O.source} +${O.source}$`);
function S(e) {
    let r = Number(e);
    return Number.isInteger(r) && r >= 0 && String(r) === String(e);
}
function W(e, r) {
    if (r === null) return e;
    let t = Number(r);
    return Number.isNaN(t) || (r = `${t * 100}%`), r === "100%" ? e : `color-mix(in oklab, ${e} ${r}, transparent)`;
}
var kt = {
    "--alpha": wt,
    "--spacing": yt,
    "--theme": bt,
    theme: xt
};
function wt(e, r, t, ...n) {
    let [a, o] = w(t, "/").map((i)=>i.trim());
    if (!a || !o) throw new Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${a || "var(--my-color)"} / ${o || "50%"})\``);
    if (n.length > 0) throw new Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${a || "var(--my-color)"} / ${o || "50%"})\``);
    return W(a, o);
}
function yt(e, r, t, ...n) {
    if (!t) throw new Error("The --spacing(\u2026) function requires an argument, but received none.");
    if (n.length > 0) throw new Error(`The --spacing(\u2026) function only accepts a single argument, but received ${n.length + 1}.`);
    let a = e.theme.resolve(null, [
        "--spacing"
    ]);
    if (!a) throw new Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
    return `calc(${a} * ${t})`;
}
function bt(e, r, t, ...n) {
    if (!t.startsWith("--")) throw new Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");
    let a = !1;
    t.endsWith(" inline") && (a = !0, t = t.slice(0, -7)), r.kind === "at-rule" && (a = !0);
    let o = e.resolveThemeValue(t, a);
    if (!o) {
        if (n.length > 0) return n.join(", ");
        throw new Error(`Could not resolve value for theme function: \`theme(${t})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
    }
    if (n.length === 0) return o;
    let i = n.join(", ");
    if (i === "initial") return o;
    if (o === "initial") return i;
    if (o.startsWith("var(") || o.startsWith("theme(") || o.startsWith("--theme(")) {
        let l = C(o);
        return Ct(l, i), T(l);
    }
    return o;
}
function xt(e, r, t, ...n) {
    t = At(t);
    let a = e.resolveThemeValue(t);
    if (!a && n.length > 0) return n.join(", ");
    if (!a) throw new Error(`Could not resolve value for theme function: \`theme(${t})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
    return a;
}
var Xr = new RegExp(Object.keys(kt).map((e)=>`${e}\\(`).join("|"));
function At(e) {
    if (e[0] !== "'" && e[0] !== '"') return e;
    let r = "", t = e[0];
    for(let n = 1; n < e.length - 1; n++){
        let a = e[n], o = e[n + 1];
        a === "\\" && (o === t || o === "\\") ? (r += o, n++) : r += a;
    }
    return r;
}
function Ct(e, r) {
    v(e, (t)=>{
        if (t.kind === "function" && !(t.value !== "var" && t.value !== "theme" && t.value !== "--theme")) if (t.nodes.length === 1) t.nodes.push({
            kind: "word",
            value: `, ${r}`
        });
        else {
            let n = t.nodes[t.nodes.length - 1];
            n.kind === "word" && n.value === "initial" && (n.value = r);
        }
    });
}
var Tt = /^(?<value>[-+]?(?:\d*\.)?\d+)(?<unit>[a-z]+|%)?$/i, Re = new d((e)=>{
    let r = Tt.exec(e);
    if (!r) return null;
    let t = r.groups?.value;
    if (t === void 0) return null;
    let n = Number(t);
    if (Number.isNaN(n)) return null;
    let a = r.groups?.unit;
    return a === void 0 ? [
        n,
        null
    ] : [
        n,
        a
    ];
});
function Pe(e, r = "top", t = "right", n = "bottom", a = "left") {
    return Oe(`${e}-${r}`, `${e}-${t}`, `${e}-${n}`, `${e}-${a}`);
}
function Oe(e = "top", r = "right", t = "bottom", n = "left") {
    return {
        1: [
            [
                e,
                0
            ],
            [
                r,
                0
            ],
            [
                t,
                0
            ],
            [
                n,
                0
            ]
        ],
        2: [
            [
                e,
                0
            ],
            [
                r,
                1
            ],
            [
                t,
                0
            ],
            [
                n,
                1
            ]
        ],
        3: [
            [
                e,
                0
            ],
            [
                r,
                1
            ],
            [
                t,
                2
            ],
            [
                n,
                1
            ]
        ],
        4: [
            [
                e,
                0
            ],
            [
                r,
                1
            ],
            [
                t,
                2
            ],
            [
                n,
                3
            ]
        ]
    };
}
function K(e, r) {
    return {
        1: [
            [
                e,
                0
            ],
            [
                r,
                0
            ]
        ],
        2: [
            [
                e,
                0
            ],
            [
                r,
                1
            ]
        ]
    };
}
var ki = {
    inset: Oe(),
    margin: Pe("margin"),
    padding: Pe("padding"),
    gap: K("row-gap", "column-gap")
}, wi = {
    "inset-block": K("top", "bottom"),
    "inset-inline": K("left", "right"),
    "margin-block": K("margin-top", "margin-bottom"),
    "margin-inline": K("margin-left", "margin-right"),
    "padding-block": K("padding-top", "padding-bottom"),
    "padding-inline": K("padding-left", "padding-right")
};
var qi = Symbol();
var Hi = Symbol();
var Zi = Symbol();
var Qi = Symbol();
var Ji = Symbol();
var Xi = Symbol();
var en = Symbol();
var tn = Symbol();
var rn = Symbol();
var nn = Symbol();
var on = Symbol();
var an = Symbol();
var ln = Symbol();
var Ut = 32, Lt = 9;
var Kt = 40;
function Le(e, r = []) {
    let t = e, n = "";
    for(let a = 5; a < e.length; a++){
        let o = e.charCodeAt(a);
        if (o === Ut || o === Lt || o === Kt) {
            t = e.slice(0, a), n = e.slice(a);
            break;
        }
    }
    return A(t.trim(), n.trim(), r);
}
var ae = {
    inherit: "inherit",
    current: "currentcolor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "oklch(98.4% 0.003 247.858)",
        100: "oklch(96.8% 0.007 247.896)",
        200: "oklch(92.9% 0.013 255.508)",
        300: "oklch(86.9% 0.022 252.894)",
        400: "oklch(70.4% 0.04 256.788)",
        500: "oklch(55.4% 0.046 257.417)",
        600: "oklch(44.6% 0.043 257.281)",
        700: "oklch(37.2% 0.044 257.287)",
        800: "oklch(27.9% 0.041 260.031)",
        900: "oklch(20.8% 0.042 265.755)",
        950: "oklch(12.9% 0.042 264.695)"
    },
    gray: {
        50: "oklch(98.5% 0.002 247.839)",
        100: "oklch(96.7% 0.003 264.542)",
        200: "oklch(92.8% 0.006 264.531)",
        300: "oklch(87.2% 0.01 258.338)",
        400: "oklch(70.7% 0.022 261.325)",
        500: "oklch(55.1% 0.027 264.364)",
        600: "oklch(44.6% 0.03 256.802)",
        700: "oklch(37.3% 0.034 259.733)",
        800: "oklch(27.8% 0.033 256.848)",
        900: "oklch(21% 0.034 264.665)",
        950: "oklch(13% 0.028 261.692)"
    },
    zinc: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(96.7% 0.001 286.375)",
        200: "oklch(92% 0.004 286.32)",
        300: "oklch(87.1% 0.006 286.286)",
        400: "oklch(70.5% 0.015 286.067)",
        500: "oklch(55.2% 0.016 285.938)",
        600: "oklch(44.2% 0.017 285.786)",
        700: "oklch(37% 0.013 285.805)",
        800: "oklch(27.4% 0.006 286.033)",
        900: "oklch(21% 0.006 285.885)",
        950: "oklch(14.1% 0.005 285.823)"
    },
    neutral: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(97% 0 0)",
        200: "oklch(92.2% 0 0)",
        300: "oklch(87% 0 0)",
        400: "oklch(70.8% 0 0)",
        500: "oklch(55.6% 0 0)",
        600: "oklch(43.9% 0 0)",
        700: "oklch(37.1% 0 0)",
        800: "oklch(26.9% 0 0)",
        900: "oklch(20.5% 0 0)",
        950: "oklch(14.5% 0 0)"
    },
    stone: {
        50: "oklch(98.5% 0.001 106.423)",
        100: "oklch(97% 0.001 106.424)",
        200: "oklch(92.3% 0.003 48.717)",
        300: "oklch(86.9% 0.005 56.366)",
        400: "oklch(70.9% 0.01 56.259)",
        500: "oklch(55.3% 0.013 58.071)",
        600: "oklch(44.4% 0.011 73.639)",
        700: "oklch(37.4% 0.01 67.558)",
        800: "oklch(26.8% 0.007 34.298)",
        900: "oklch(21.6% 0.006 56.043)",
        950: "oklch(14.7% 0.004 49.25)"
    },
    red: {
        50: "oklch(97.1% 0.013 17.38)",
        100: "oklch(93.6% 0.032 17.717)",
        200: "oklch(88.5% 0.062 18.334)",
        300: "oklch(80.8% 0.114 19.571)",
        400: "oklch(70.4% 0.191 22.216)",
        500: "oklch(63.7% 0.237 25.331)",
        600: "oklch(57.7% 0.245 27.325)",
        700: "oklch(50.5% 0.213 27.518)",
        800: "oklch(44.4% 0.177 26.899)",
        900: "oklch(39.6% 0.141 25.723)",
        950: "oklch(25.8% 0.092 26.042)"
    },
    orange: {
        50: "oklch(98% 0.016 73.684)",
        100: "oklch(95.4% 0.038 75.164)",
        200: "oklch(90.1% 0.076 70.697)",
        300: "oklch(83.7% 0.128 66.29)",
        400: "oklch(75% 0.183 55.934)",
        500: "oklch(70.5% 0.213 47.604)",
        600: "oklch(64.6% 0.222 41.116)",
        700: "oklch(55.3% 0.195 38.402)",
        800: "oklch(47% 0.157 37.304)",
        900: "oklch(40.8% 0.123 38.172)",
        950: "oklch(26.6% 0.079 36.259)"
    },
    amber: {
        50: "oklch(98.7% 0.022 95.277)",
        100: "oklch(96.2% 0.059 95.617)",
        200: "oklch(92.4% 0.12 95.746)",
        300: "oklch(87.9% 0.169 91.605)",
        400: "oklch(82.8% 0.189 84.429)",
        500: "oklch(76.9% 0.188 70.08)",
        600: "oklch(66.6% 0.179 58.318)",
        700: "oklch(55.5% 0.163 48.998)",
        800: "oklch(47.3% 0.137 46.201)",
        900: "oklch(41.4% 0.112 45.904)",
        950: "oklch(27.9% 0.077 45.635)"
    },
    yellow: {
        50: "oklch(98.7% 0.026 102.212)",
        100: "oklch(97.3% 0.071 103.193)",
        200: "oklch(94.5% 0.129 101.54)",
        300: "oklch(90.5% 0.182 98.111)",
        400: "oklch(85.2% 0.199 91.936)",
        500: "oklch(79.5% 0.184 86.047)",
        600: "oklch(68.1% 0.162 75.834)",
        700: "oklch(55.4% 0.135 66.442)",
        800: "oklch(47.6% 0.114 61.907)",
        900: "oklch(42.1% 0.095 57.708)",
        950: "oklch(28.6% 0.066 53.813)"
    },
    lime: {
        50: "oklch(98.6% 0.031 120.757)",
        100: "oklch(96.7% 0.067 122.328)",
        200: "oklch(93.8% 0.127 124.321)",
        300: "oklch(89.7% 0.196 126.665)",
        400: "oklch(84.1% 0.238 128.85)",
        500: "oklch(76.8% 0.233 130.85)",
        600: "oklch(64.8% 0.2 131.684)",
        700: "oklch(53.2% 0.157 131.589)",
        800: "oklch(45.3% 0.124 130.933)",
        900: "oklch(40.5% 0.101 131.063)",
        950: "oklch(27.4% 0.072 132.109)"
    },
    green: {
        50: "oklch(98.2% 0.018 155.826)",
        100: "oklch(96.2% 0.044 156.743)",
        200: "oklch(92.5% 0.084 155.995)",
        300: "oklch(87.1% 0.15 154.449)",
        400: "oklch(79.2% 0.209 151.711)",
        500: "oklch(72.3% 0.219 149.579)",
        600: "oklch(62.7% 0.194 149.214)",
        700: "oklch(52.7% 0.154 150.069)",
        800: "oklch(44.8% 0.119 151.328)",
        900: "oklch(39.3% 0.095 152.535)",
        950: "oklch(26.6% 0.065 152.934)"
    },
    emerald: {
        50: "oklch(97.9% 0.021 166.113)",
        100: "oklch(95% 0.052 163.051)",
        200: "oklch(90.5% 0.093 164.15)",
        300: "oklch(84.5% 0.143 164.978)",
        400: "oklch(76.5% 0.177 163.223)",
        500: "oklch(69.6% 0.17 162.48)",
        600: "oklch(59.6% 0.145 163.225)",
        700: "oklch(50.8% 0.118 165.612)",
        800: "oklch(43.2% 0.095 166.913)",
        900: "oklch(37.8% 0.077 168.94)",
        950: "oklch(26.2% 0.051 172.552)"
    },
    teal: {
        50: "oklch(98.4% 0.014 180.72)",
        100: "oklch(95.3% 0.051 180.801)",
        200: "oklch(91% 0.096 180.426)",
        300: "oklch(85.5% 0.138 181.071)",
        400: "oklch(77.7% 0.152 181.912)",
        500: "oklch(70.4% 0.14 182.503)",
        600: "oklch(60% 0.118 184.704)",
        700: "oklch(51.1% 0.096 186.391)",
        800: "oklch(43.7% 0.078 188.216)",
        900: "oklch(38.6% 0.063 188.416)",
        950: "oklch(27.7% 0.046 192.524)"
    },
    cyan: {
        50: "oklch(98.4% 0.019 200.873)",
        100: "oklch(95.6% 0.045 203.388)",
        200: "oklch(91.7% 0.08 205.041)",
        300: "oklch(86.5% 0.127 207.078)",
        400: "oklch(78.9% 0.154 211.53)",
        500: "oklch(71.5% 0.143 215.221)",
        600: "oklch(60.9% 0.126 221.723)",
        700: "oklch(52% 0.105 223.128)",
        800: "oklch(45% 0.085 224.283)",
        900: "oklch(39.8% 0.07 227.392)",
        950: "oklch(30.2% 0.056 229.695)"
    },
    sky: {
        50: "oklch(97.7% 0.013 236.62)",
        100: "oklch(95.1% 0.026 236.824)",
        200: "oklch(90.1% 0.058 230.902)",
        300: "oklch(82.8% 0.111 230.318)",
        400: "oklch(74.6% 0.16 232.661)",
        500: "oklch(68.5% 0.169 237.323)",
        600: "oklch(58.8% 0.158 241.966)",
        700: "oklch(50% 0.134 242.749)",
        800: "oklch(44.3% 0.11 240.79)",
        900: "oklch(39.1% 0.09 240.876)",
        950: "oklch(29.3% 0.066 243.157)"
    },
    blue: {
        50: "oklch(97% 0.014 254.604)",
        100: "oklch(93.2% 0.032 255.585)",
        200: "oklch(88.2% 0.059 254.128)",
        300: "oklch(80.9% 0.105 251.813)",
        400: "oklch(70.7% 0.165 254.624)",
        500: "oklch(62.3% 0.214 259.815)",
        600: "oklch(54.6% 0.245 262.881)",
        700: "oklch(48.8% 0.243 264.376)",
        800: "oklch(42.4% 0.199 265.638)",
        900: "oklch(37.9% 0.146 265.522)",
        950: "oklch(28.2% 0.091 267.935)"
    },
    indigo: {
        50: "oklch(96.2% 0.018 272.314)",
        100: "oklch(93% 0.034 272.788)",
        200: "oklch(87% 0.065 274.039)",
        300: "oklch(78.5% 0.115 274.713)",
        400: "oklch(67.3% 0.182 276.935)",
        500: "oklch(58.5% 0.233 277.117)",
        600: "oklch(51.1% 0.262 276.966)",
        700: "oklch(45.7% 0.24 277.023)",
        800: "oklch(39.8% 0.195 277.366)",
        900: "oklch(35.9% 0.144 278.697)",
        950: "oklch(25.7% 0.09 281.288)"
    },
    violet: {
        50: "oklch(96.9% 0.016 293.756)",
        100: "oklch(94.3% 0.029 294.588)",
        200: "oklch(89.4% 0.057 293.283)",
        300: "oklch(81.1% 0.111 293.571)",
        400: "oklch(70.2% 0.183 293.541)",
        500: "oklch(60.6% 0.25 292.717)",
        600: "oklch(54.1% 0.281 293.009)",
        700: "oklch(49.1% 0.27 292.581)",
        800: "oklch(43.2% 0.232 292.759)",
        900: "oklch(38% 0.189 293.745)",
        950: "oklch(28.3% 0.141 291.089)"
    },
    purple: {
        50: "oklch(97.7% 0.014 308.299)",
        100: "oklch(94.6% 0.033 307.174)",
        200: "oklch(90.2% 0.063 306.703)",
        300: "oklch(82.7% 0.119 306.383)",
        400: "oklch(71.4% 0.203 305.504)",
        500: "oklch(62.7% 0.265 303.9)",
        600: "oklch(55.8% 0.288 302.321)",
        700: "oklch(49.6% 0.265 301.924)",
        800: "oklch(43.8% 0.218 303.724)",
        900: "oklch(38.1% 0.176 304.987)",
        950: "oklch(29.1% 0.149 302.717)"
    },
    fuchsia: {
        50: "oklch(97.7% 0.017 320.058)",
        100: "oklch(95.2% 0.037 318.852)",
        200: "oklch(90.3% 0.076 319.62)",
        300: "oklch(83.3% 0.145 321.434)",
        400: "oklch(74% 0.238 322.16)",
        500: "oklch(66.7% 0.295 322.15)",
        600: "oklch(59.1% 0.293 322.896)",
        700: "oklch(51.8% 0.253 323.949)",
        800: "oklch(45.2% 0.211 324.591)",
        900: "oklch(40.1% 0.17 325.612)",
        950: "oklch(29.3% 0.136 325.661)"
    },
    pink: {
        50: "oklch(97.1% 0.014 343.198)",
        100: "oklch(94.8% 0.028 342.258)",
        200: "oklch(89.9% 0.061 343.231)",
        300: "oklch(82.3% 0.12 346.018)",
        400: "oklch(71.8% 0.202 349.761)",
        500: "oklch(65.6% 0.241 354.308)",
        600: "oklch(59.2% 0.249 0.584)",
        700: "oklch(52.5% 0.223 3.958)",
        800: "oklch(45.9% 0.187 3.815)",
        900: "oklch(40.8% 0.153 2.432)",
        950: "oklch(28.4% 0.109 3.907)"
    },
    rose: {
        50: "oklch(96.9% 0.015 12.422)",
        100: "oklch(94.1% 0.03 12.58)",
        200: "oklch(89.2% 0.058 10.001)",
        300: "oklch(81% 0.117 11.638)",
        400: "oklch(71.2% 0.194 13.428)",
        500: "oklch(64.5% 0.246 16.439)",
        600: "oklch(58.6% 0.253 17.585)",
        700: "oklch(51.4% 0.222 16.935)",
        800: "oklch(45.5% 0.188 13.697)",
        900: "oklch(41% 0.159 10.272)",
        950: "oklch(27.1% 0.105 12.094)"
    }
};
function M(e) {
    return {
        __BARE_VALUE__: e
    };
}
var V = M((e)=>{
    if (S(e.value)) return e.value;
}), b = M((e)=>{
    if (S(e.value)) return `${e.value}%`;
}), U = M((e)=>{
    if (S(e.value)) return `${e.value}px`;
}), Me = M((e)=>{
    if (S(e.value)) return `${e.value}ms`;
}), X = M((e)=>{
    if (S(e.value)) return `${e.value}deg`;
}), Wt = M((e)=>{
    if (e.fraction === null) return;
    let [r, t] = w(e.fraction, "/");
    if (!(!S(r) || !S(t))) return e.fraction;
}), Fe = M((e)=>{
    if (S(Number(e.value))) return `repeat(${e.value}, minmax(0, 1fr))`;
}), Bt = {
    accentColor: ({ theme: e })=>e("colors"),
    animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite"
    },
    aria: {
        busy: 'busy="true"',
        checked: 'checked="true"',
        disabled: 'disabled="true"',
        expanded: 'expanded="true"',
        hidden: 'hidden="true"',
        pressed: 'pressed="true"',
        readonly: 'readonly="true"',
        required: 'required="true"',
        selected: 'selected="true"'
    },
    aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        ...Wt
    },
    backdropBlur: ({ theme: e })=>e("blur"),
    backdropBrightness: ({ theme: e })=>({
            ...e("brightness"),
            ...b
        }),
    backdropContrast: ({ theme: e })=>({
            ...e("contrast"),
            ...b
        }),
    backdropGrayscale: ({ theme: e })=>({
            ...e("grayscale"),
            ...b
        }),
    backdropHueRotate: ({ theme: e })=>({
            ...e("hueRotate"),
            ...X
        }),
    backdropInvert: ({ theme: e })=>({
            ...e("invert"),
            ...b
        }),
    backdropOpacity: ({ theme: e })=>({
            ...e("opacity"),
            ...b
        }),
    backdropSaturate: ({ theme: e })=>({
            ...e("saturate"),
            ...b
        }),
    backdropSepia: ({ theme: e })=>({
            ...e("sepia"),
            ...b
        }),
    backgroundColor: ({ theme: e })=>e("colors"),
    backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: ({ theme: e })=>e("opacity"),
    backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
    },
    backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain"
    },
    blur: {
        0: "0",
        none: "",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px"
    },
    borderColor: ({ theme: e })=>({
            DEFAULT: "currentcolor",
            ...e("colors")
        }),
    borderOpacity: ({ theme: e })=>e("opacity"),
    borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px"
    },
    borderSpacing: ({ theme: e })=>e("spacing"),
    borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...U
    },
    boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none"
    },
    boxShadowColor: ({ theme: e })=>e("colors"),
    brightness: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...b
    },
    caretColor: ({ theme: e })=>e("colors"),
    colors: ()=>({
            ...ae
        }),
    columns: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        "3xs": "16rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        ...V
    },
    container: {},
    content: {
        none: "none"
    },
    contrast: {
        0: "0",
        50: ".5",
        75: ".75",
        100: "1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...b
    },
    cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        help: "help",
        "not-allowed": "not-allowed",
        none: "none",
        "context-menu": "context-menu",
        progress: "progress",
        cell: "cell",
        crosshair: "crosshair",
        "vertical-text": "vertical-text",
        alias: "alias",
        copy: "copy",
        "no-drop": "no-drop",
        grab: "grab",
        grabbing: "grabbing",
        "all-scroll": "all-scroll",
        "col-resize": "col-resize",
        "row-resize": "row-resize",
        "n-resize": "n-resize",
        "e-resize": "e-resize",
        "s-resize": "s-resize",
        "w-resize": "w-resize",
        "ne-resize": "ne-resize",
        "nw-resize": "nw-resize",
        "se-resize": "se-resize",
        "sw-resize": "sw-resize",
        "ew-resize": "ew-resize",
        "ns-resize": "ns-resize",
        "nesw-resize": "nesw-resize",
        "nwse-resize": "nwse-resize",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out"
    },
    divideColor: ({ theme: e })=>e("borderColor"),
    divideOpacity: ({ theme: e })=>e("borderOpacity"),
    divideWidth: ({ theme: e })=>({
            ...e("borderWidth"),
            ...U
        }),
    dropShadow: {
        sm: "0 1px 1px rgb(0 0 0 / 0.05)",
        DEFAULT: [
            "0 1px 2px rgb(0 0 0 / 0.1)",
            "0 1px 1px rgb(0 0 0 / 0.06)"
        ],
        md: [
            "0 4px 3px rgb(0 0 0 / 0.07)",
            "0 2px 2px rgb(0 0 0 / 0.06)"
        ],
        lg: [
            "0 10px 8px rgb(0 0 0 / 0.04)",
            "0 4px 3px rgb(0 0 0 / 0.1)"
        ],
        xl: [
            "0 20px 13px rgb(0 0 0 / 0.03)",
            "0 8px 5px rgb(0 0 0 / 0.08)"
        ],
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        none: "0 0 #0000"
    },
    fill: ({ theme: e })=>e("colors"),
    flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none"
    },
    flexBasis: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            ...e("spacing")
        }),
    flexGrow: {
        0: "0",
        DEFAULT: "1",
        ...V
    },
    flexShrink: {
        0: "0",
        DEFAULT: "1",
        ...V
    },
    fontFamily: {
        sans: [
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
        ],
        serif: [
            "ui-serif",
            "Georgia",
            "Cambria",
            '"Times New Roman"',
            "Times",
            "serif"
        ],
        mono: [
            "ui-monospace",
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            '"Liberation Mono"',
            '"Courier New"',
            "monospace"
        ]
    },
    fontSize: {
        xs: [
            "0.75rem",
            {
                lineHeight: "1rem"
            }
        ],
        sm: [
            "0.875rem",
            {
                lineHeight: "1.25rem"
            }
        ],
        base: [
            "1rem",
            {
                lineHeight: "1.5rem"
            }
        ],
        lg: [
            "1.125rem",
            {
                lineHeight: "1.75rem"
            }
        ],
        xl: [
            "1.25rem",
            {
                lineHeight: "1.75rem"
            }
        ],
        "2xl": [
            "1.5rem",
            {
                lineHeight: "2rem"
            }
        ],
        "3xl": [
            "1.875rem",
            {
                lineHeight: "2.25rem"
            }
        ],
        "4xl": [
            "2.25rem",
            {
                lineHeight: "2.5rem"
            }
        ],
        "5xl": [
            "3rem",
            {
                lineHeight: "1"
            }
        ],
        "6xl": [
            "3.75rem",
            {
                lineHeight: "1"
            }
        ],
        "7xl": [
            "4.5rem",
            {
                lineHeight: "1"
            }
        ],
        "8xl": [
            "6rem",
            {
                lineHeight: "1"
            }
        ],
        "9xl": [
            "8rem",
            {
                lineHeight: "1"
            }
        ]
    },
    fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
    },
    gap: ({ theme: e })=>e("spacing"),
    gradientColorStops: ({ theme: e })=>e("colors"),
    gradientColorStopPositions: {
        "0%": "0%",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        "100%": "100%",
        ...b
    },
    grayscale: {
        0: "0",
        DEFAULT: "100%",
        ...b
    },
    gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)"
    },
    gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1"
    },
    gridColumnEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...V
    },
    gridColumnStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...V
    },
    gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1"
    },
    gridRowEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...V
    },
    gridRowStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...V
    },
    gridTemplateColumns: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...Fe
    },
    gridTemplateRows: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...Fe
    },
    height: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
        ...X
    },
    inset: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            ...e("spacing")
        }),
    invert: {
        0: "0",
        DEFAULT: "100%",
        ...b
    },
    keyframes: {
        spin: {
            to: {
                transform: "rotate(360deg)"
            }
        },
        ping: {
            "75%, 100%": {
                transform: "scale(2)",
                opacity: "0"
            }
        },
        pulse: {
            "50%": {
                opacity: ".5"
            }
        },
        bounce: {
            "0%, 100%": {
                transform: "translateY(-25%)",
                animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
            },
            "50%": {
                transform: "none",
                animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
            }
        }
    },
    letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em"
    },
    lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem"
    },
    listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal"
    },
    listStyleImage: {
        none: "none"
    },
    margin: ({ theme: e })=>({
            auto: "auto",
            ...e("spacing")
        }),
    lineClamp: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        ...V
    },
    maxHeight: ({ theme: e })=>({
            none: "none",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    maxWidth: ({ theme: e })=>({
            none: "none",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            prose: "65ch",
            ...e("spacing")
        }),
    minHeight: ({ theme: e })=>({
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    minWidth: ({ theme: e })=>({
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
    },
    opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1",
        ...b
    },
    order: {
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        ...V
    },
    outlineColor: ({ theme: e })=>e("colors"),
    outlineOffset: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...U
    },
    outlineWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...U
    },
    padding: ({ theme: e })=>e("spacing"),
    placeholderColor: ({ theme: e })=>e("colors"),
    placeholderOpacity: ({ theme: e })=>e("opacity"),
    ringColor: ({ theme: e })=>({
            DEFAULT: "currentcolor",
            ...e("colors")
        }),
    ringOffsetColor: ({ theme: e })=>e("colors"),
    ringOffsetWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...U
    },
    ringOpacity: ({ theme: e })=>({
            DEFAULT: "0.5",
            ...e("opacity")
        }),
    ringWidth: {
        DEFAULT: "3px",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...U
    },
    rotate: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
        ...X
    },
    saturate: {
        0: "0",
        50: ".5",
        100: "1",
        150: "1.5",
        200: "2",
        ...b
    },
    scale: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        ...b
    },
    screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem"
    },
    scrollMargin: ({ theme: e })=>e("spacing"),
    scrollPadding: ({ theme: e })=>e("spacing"),
    sepia: {
        0: "0",
        DEFAULT: "100%",
        ...b
    },
    skew: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        ...X
    },
    space: ({ theme: e })=>e("spacing"),
    spacing: {
        px: "1px",
        0: "0px",
        .5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem"
    },
    stroke: ({ theme: e })=>({
            none: "none",
            ...e("colors")
        }),
    strokeWidth: {
        0: "0",
        1: "1",
        2: "2",
        ...V
    },
    supports: {},
    data: {},
    textColor: ({ theme: e })=>e("colors"),
    textDecorationColor: ({ theme: e })=>e("colors"),
    textDecorationThickness: {
        auto: "auto",
        "from-font": "from-font",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...U
    },
    textIndent: ({ theme: e })=>e("spacing"),
    textOpacity: ({ theme: e })=>e("opacity"),
    textUnderlineOffset: {
        auto: "auto",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...U
    },
    transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left"
    },
    transitionDelay: {
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...Me
    },
    transitionDuration: {
        DEFAULT: "150ms",
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...Me
    },
    transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform"
    },
    transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: ({ theme: e })=>({
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            ...e("spacing")
        }),
    size: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    width: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw",
            svw: "100svw",
            lvw: "100lvw",
            dvw: "100dvw",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    willChange: {
        auto: "auto",
        scroll: "scroll-position",
        contents: "contents",
        transform: "transform"
    },
    zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        ...V
    }
};
function le(e) {
    let r = [
        0
    ];
    for(let a = 0; a < e.length; a++)e.charCodeAt(a) === 10 && r.push(a + 1);
    function t(a) {
        let o = 0, i = r.length;
        for(; i > 0;){
            let u = (i | 0) >> 1, s = o + u;
            r[s] <= a ? (o = s + 1, i = i - u - 1) : i = u;
        }
        o -= 1;
        let l = a - r[o];
        return {
            line: o + 1,
            column: l
        };
    }
    function n({ line: a, column: o }) {
        a -= 1, a = Math.min(Math.max(a, 0), r.length - 1);
        let i = r[a], l = r[a + 1] ?? i;
        return Math.min(Math.max(i + o, 0), l);
    }
    return {
        find: t,
        findOffset: n
    };
}
var Gt = 64;
function L(e, r = []) {
    return {
        kind: "rule",
        selector: e,
        nodes: r
    };
}
function A(e, r = "", t = []) {
    return {
        kind: "at-rule",
        name: e,
        params: r,
        nodes: t
    };
}
function _(e, r = []) {
    return e.charCodeAt(0) === Gt ? Le(e, r) : L(e, r);
}
function E(e, r, t = !1) {
    return {
        kind: "declaration",
        property: e,
        value: r,
        important: t
    };
}
function J(e) {
    return {
        kind: "comment",
        value: e
    };
}
function z(e, r) {
    let t = 0, n = {
        file: null,
        code: ""
    };
    function a(i, l = 0) {
        let u = "", s = "  ".repeat(l);
        if (i.kind === "declaration") {
            if (u += `${s}${i.property}: ${i.value}${i.important ? " !important" : ""};
`, r) {
                t += s.length;
                let f = t;
                t += i.property.length, t += 2, t += i.value?.length ?? 0, i.important && (t += 11);
                let c = t;
                t += 2, i.dst = [
                    n,
                    f,
                    c
                ];
            }
        } else if (i.kind === "rule") {
            if (u += `${s}${i.selector} {
`, r) {
                t += s.length;
                let f = t;
                t += i.selector.length, t += 1;
                let c = t;
                i.dst = [
                    n,
                    f,
                    c
                ], t += 2;
            }
            for (let f of i.nodes)u += a(f, l + 1);
            u += `${s}}
`, r && (t += s.length, t += 2);
        } else if (i.kind === "at-rule") {
            if (i.nodes.length === 0) {
                let f = `${s}${i.name} ${i.params};
`;
                if (r) {
                    t += s.length;
                    let c = t;
                    t += i.name.length, t += 1, t += i.params.length;
                    let m = t;
                    t += 2, i.dst = [
                        n,
                        c,
                        m
                    ];
                }
                return f;
            }
            if (u += `${s}${i.name}${i.params ? ` ${i.params} ` : " "}{
`, r) {
                t += s.length;
                let f = t;
                t += i.name.length, i.params && (t += 1, t += i.params.length), t += 1;
                let c = t;
                i.dst = [
                    n,
                    f,
                    c
                ], t += 2;
            }
            for (let f of i.nodes)u += a(f, l + 1);
            u += `${s}}
`, r && (t += s.length, t += 2);
        } else if (i.kind === "comment") {
            if (u += `${s}/*${i.value}*/
`, r) {
                t += s.length;
                let f = t;
                t += 2 + i.value.length + 2;
                let c = t;
                i.dst = [
                    n,
                    f,
                    c
                ], t += 1;
            }
        } else if (i.kind === "context" || i.kind === "at-root") return "";
        return u;
    }
    let o = "";
    for (let i of e)o += a(i, 0);
    return n.code = o, o;
}
var qt = 33;
function je(e, r, t) {
    let n = new d((s)=>new e.Input(s.code, {
            map: t?.input.map,
            from: s.file ?? void 0
        })), a = new d((s)=>le(s.code)), o = e.root();
    o.source = t;
    function i(s) {
        if (!s || !s[0]) return;
        let f = a.get(s[0]), c = f.find(s[1]), m = f.find(s[2]);
        return {
            input: n.get(s[0]),
            start: {
                line: c.line,
                column: c.column + 1,
                offset: s[1]
            },
            end: {
                line: m.line,
                column: m.column + 1,
                offset: s[2]
            }
        };
    }
    function l(s, f) {
        let c = i(f);
        c ? s.source = c : delete s.source;
    }
    function u(s, f) {
        if (s.kind === "declaration") {
            let c = e.decl({
                prop: s.property,
                value: s.value ?? "",
                important: s.important
            });
            l(c, s.src), f.append(c);
        } else if (s.kind === "rule") {
            let c = e.rule({
                selector: s.selector
            });
            l(c, s.src), c.raws.semicolon = !0, f.append(c);
            for (let m of s.nodes)u(m, c);
        } else if (s.kind === "at-rule") {
            let c = e.atRule({
                name: s.name.slice(1),
                params: s.params
            });
            l(c, s.src), c.raws.semicolon = !0, f.append(c);
            for (let m of s.nodes)u(m, c);
        } else if (s.kind === "comment") {
            let c = e.comment({
                text: s.value
            });
            c.raws.left = "", c.raws.right = "", l(c, s.src), f.append(c);
        } else s.kind === "at-root" || s.kind;
    }
    for (let s of r)u(s, o);
    return o;
}
function We(e) {
    let r = new d((o)=>({
            file: o.file ?? o.id ?? null,
            code: o.css
        }));
    function t(o) {
        let i = o.source;
        if (!i) return;
        let l = i.input;
        if (l && i.start !== void 0 && i.end !== void 0) return [
            r.get(l),
            i.start.offset,
            i.end.offset
        ];
    }
    function n(o, i) {
        if (o.type === "decl") {
            let l = E(o.prop, o.value, o.important);
            l.src = t(o), i.push(l);
        } else if (o.type === "rule") {
            let l = _(o.selector);
            l.src = t(o), o.each((u)=>n(u, l.nodes)), i.push(l);
        } else if (o.type === "atrule") {
            let l = A(`@${o.name}`, o.params);
            l.src = t(o), o.each((u)=>n(u, l.nodes)), i.push(l);
        } else if (o.type === "comment") {
            if (o.text.charCodeAt(0) !== qt) return;
            let l = J(o.text);
            l.src = t(o), i.push(l);
        }
    }
    let a = [];
    return e.each((o)=>n(o, a)), a;
}
var fe = __turbopack_context__.r("[project]/Documents/VSC Proyectos/Practica/node_modules/@tailwindcss/node/dist/index.js [postcss] (ecmascript)"), G = H(__turbopack_context__.r("[externals]/path [external] (path, cjs)")), se = "'", ue = '"';
function ce() {
    let e = new WeakSet;
    function r(t) {
        let n = t.root().source?.input.file;
        if (!n) return;
        let a = t.source?.input.file;
        if (!a || e.has(t)) return;
        let o = t.params[0], i = o[0] === ue && o[o.length - 1] === ue ? ue : o[0] === se && o[o.length - 1] === se ? se : null;
        if (!i) return;
        let l = t.params.slice(1, -1), u = "";
        if (l.startsWith("!") && (l = l.slice(1), u = "!"), !l.startsWith("./") && !l.startsWith("../")) return;
        let s = G.default.posix.join((0, fe.normalizePath)(G.default.dirname(a)), l), f = G.default.posix.dirname((0, fe.normalizePath)(n)), c = G.default.posix.relative(f, s);
        c.startsWith(".") || (c = "./" + c), t.params = i + u + c + i, e.add(t);
    }
    return {
        postcssPlugin: "tailwindcss-postcss-fix-relative-paths",
        Once (t) {
            t.walkAtRules(/source|plugin|config/, r);
        }
    };
}
var p = x.env.DEBUG, pe = new Be.default({
    maxSize: 50
});
function Ht(e, r, t) {
    let n = `${r}:${t.base ?? ""}:${JSON.stringify(t.optimize)}`;
    if (pe.has(n)) return pe.get(n);
    let a = {
        mtimes: new Map,
        compiler: null,
        scanner: null,
        tailwindCssAst: [],
        cachedPostCssAst: e.root(),
        optimizedPostCssAst: e.root(),
        fullRebuildPaths: []
    };
    return pe.set(n, a), a;
}
function Zt(e = {}) {
    let r = e.base ?? process.cwd(), t = e.optimize ?? process.env.NODE_ENV === "production", n = e.transformAssetUrls ?? !0;
    return {
        postcssPlugin: "@tailwindcss/postcss",
        plugins: [
            ce(),
            {
                postcssPlugin: "tailwindcss",
                async Once (a, { result: o, postcss: i }) {
                    var N = [];
                    try {
                        let l = he(N, new x.Instrumentation);
                        let u = o.opts.from ?? "";
                        let s = u.endsWith(".module.css");
                        p && l.start(`[@tailwindcss/postcss] ${(0, $.relative)(r, u)}`);
                        {
                            p && l.start("Quick bail check");
                            let y = !0;
                            if (a.walkAtRules((g)=>{
                                if (g.name === "import" || g.name === "reference" || g.name === "theme" || g.name === "variant" || g.name === "config" || g.name === "plugin" || g.name === "apply" || g.name === "tailwind") return y = !1, !1;
                            }), y) return;
                            p && l.end("Quick bail check");
                        }
                        let f = Ht(i, u, e);
                        let c = $.default.dirname($.default.resolve(u));
                        let m = f.compiler === null;
                        async function I() {
                            p && l.start("Setup compiler"), f.fullRebuildPaths.length > 0 && !m && (0, Ye.clearRequireCache)(f.fullRebuildPaths), f.fullRebuildPaths = [], p && l.start("PostCSS AST -> Tailwind CSS AST");
                            let y = We(a);
                            p && l.end("PostCSS AST -> Tailwind CSS AST"), p && l.start("Create compiler");
                            let g = await (0, x.compileAst)(y, {
                                from: o.opts.from,
                                base: c,
                                shouldRewriteUrls: n,
                                onDependency: (ee)=>f.fullRebuildPaths.push(ee),
                                polyfills: s ? x.Polyfills.All ^ x.Polyfills.AtProperty : x.Polyfills.All
                            });
                            return p && l.end("Create compiler"), p && l.end("Setup compiler"), g;
                        }
                        try {
                            if (f.compiler ??= I(), (await f.compiler).features === x.Features.None) return;
                            let y = "incremental";
                            p && l.start("Register full rebuild paths");
                            {
                                for (let k of f.fullRebuildPaths)o.messages.push({
                                    type: "dependency",
                                    plugin: "@tailwindcss/postcss",
                                    file: $.default.resolve(k),
                                    parent: o.opts.from
                                });
                                let D = o.messages.flatMap((k)=>k.type !== "dependency" ? [] : k.file);
                                D.push(u);
                                for (let k of D){
                                    let R = qe.default.statSync(k, {
                                        throwIfNoEntry: !1
                                    })?.mtimeMs ?? null;
                                    if (R === null) {
                                        k === u && (y = "full");
                                        continue;
                                    }
                                    f.mtimes.get(k) !== R && (y = "full", f.mtimes.set(k, R));
                                }
                            }
                            p && l.end("Register full rebuild paths"), y === "full" && !m && (f.compiler = I());
                            let g = await f.compiler;
                            if (f.scanner === null || y === "full") {
                                p && l.start("Setup scanner");
                                let D = (g.root === "none" ? [] : g.root === null ? [
                                    {
                                        base: r,
                                        pattern: "**/*",
                                        negated: !1
                                    }
                                ] : [
                                    {
                                        ...g.root,
                                        negated: !1
                                    }
                                ]).concat(g.sources);
                                f.scanner = new Ge.Scanner({
                                    sources: D
                                }), p && l.end("Setup scanner");
                            }
                            p && l.start("Scan for candidates");
                            let ee = g.features & x.Features.Utilities ? f.scanner.scan() : [];
                            if (p && l.end("Scan for candidates"), g.features & x.Features.Utilities) {
                                p && l.start("Register dependency messages");
                                let D = $.default.resolve(r, u);
                                for (let k of f.scanner.files){
                                    let R = $.default.resolve(k);
                                    R !== D && o.messages.push({
                                        type: "dependency",
                                        plugin: "@tailwindcss/postcss",
                                        file: R,
                                        parent: o.opts.from
                                    });
                                }
                                for (let { base: k, pattern: R } of f.scanner.globs)R === "*" && r === k || (R === "" ? o.messages.push({
                                    type: "dependency",
                                    plugin: "@tailwindcss/postcss",
                                    file: $.default.resolve(k),
                                    parent: o.opts.from
                                }) : o.messages.push({
                                    type: "dir-dependency",
                                    plugin: "@tailwindcss/postcss",
                                    dir: $.default.resolve(k),
                                    glob: R,
                                    parent: o.opts.from
                                }));
                                p && l.end("Register dependency messages");
                            }
                            p && l.start("Build utilities");
                            let q = g.build(ee);
                            if (p && l.end("Build utilities"), f.tailwindCssAst !== q) if (t) {
                                p && l.start("Optimization"), p && l.start("AST -> CSS");
                                let D = z(q);
                                p && l.end("AST -> CSS"), p && l.start("Lightning CSS");
                                let k = (0, x.optimize)(D, {
                                    minify: typeof t == "object" ? t.minify : !0
                                });
                                p && l.end("Lightning CSS"), p && l.start("CSS -> PostCSS AST"), f.optimizedPostCssAst = i.parse(k.code, o.opts), p && l.end("CSS -> PostCSS AST"), p && l.end("Optimization");
                            } else p && l.start("Transform Tailwind CSS AST into PostCSS AST"), f.cachedPostCssAst = je(i, q, a.source), p && l.end("Transform Tailwind CSS AST into PostCSS AST");
                            f.tailwindCssAst = q, p && l.start("Update PostCSS AST"), a.removeAll(), a.append(t ? f.optimizedPostCssAst.clone().nodes : f.cachedPostCssAst.clone().nodes), a.raws.indent = "  ", p && l.end("Update PostCSS AST"), p && l.end(`[@tailwindcss/postcss] ${(0, $.relative)(r, u)}`);
                        } catch (y) {
                            f.compiler = null;
                            for (let g of f.fullRebuildPaths)o.messages.push({
                                type: "dependency",
                                plugin: "@tailwindcss/postcss",
                                file: $.default.resolve(g),
                                parent: o.opts.from
                            });
                            throw console.error(y), y && typeof y == "object" && "message" in y ? a.error(`${y.message}`) : a.error(`${y}`);
                        }
                    } catch (Ze) {
                        var Qe = Ze, Je = !0;
                    } finally{
                        ve(N, Qe, Je);
                    }
                }
            }
        ]
    };
}
var He = Object.assign(Zt, {
    postcss: !0
});
module.exports = He;
}),
"[project]/node_modules/node-releases/data/processed/envs.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"name\":\"nodejs\",\"version\":\"0.2.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false,\"v8\":\"2.3.8.0\"},{\"name\":\"nodejs\",\"version\":\"0.3.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false,\"v8\":\"2.5.1.0\"},{\"name\":\"nodejs\",\"version\":\"0.4.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false,\"v8\":\"3.1.2.0\"},{\"name\":\"nodejs\",\"version\":\"0.5.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false,\"v8\":\"3.1.8.25\"},{\"name\":\"nodejs\",\"version\":\"0.6.0\",\"date\":\"2011-11-04\",\"lts\":false,\"security\":false,\"v8\":\"3.6.6.6\"},{\"name\":\"nodejs\",\"version\":\"0.7.0\",\"date\":\"2012-01-17\",\"lts\":false,\"security\":false,\"v8\":\"3.8.6.0\"},{\"name\":\"nodejs\",\"version\":\"0.8.0\",\"date\":\"2012-06-22\",\"lts\":false,\"security\":false,\"v8\":\"3.11.10.10\"},{\"name\":\"nodejs\",\"version\":\"0.9.0\",\"date\":\"2012-07-20\",\"lts\":false,\"security\":false,\"v8\":\"3.11.10.15\"},{\"name\":\"nodejs\",\"version\":\"0.10.0\",\"date\":\"2013-03-11\",\"lts\":false,\"security\":false,\"v8\":\"3.14.5.8\"},{\"name\":\"nodejs\",\"version\":\"0.11.0\",\"date\":\"2013-03-28\",\"lts\":false,\"security\":false,\"v8\":\"3.17.13.0\"},{\"name\":\"nodejs\",\"version\":\"0.12.0\",\"date\":\"2015-02-06\",\"lts\":false,\"security\":false,\"v8\":\"3.28.73.0\"},{\"name\":\"nodejs\",\"version\":\"4.0.0\",\"date\":\"2015-09-08\",\"lts\":false,\"security\":false,\"v8\":\"4.5.103.30\"},{\"name\":\"nodejs\",\"version\":\"4.1.0\",\"date\":\"2015-09-17\",\"lts\":false,\"security\":false,\"v8\":\"4.5.103.33\"},{\"name\":\"nodejs\",\"version\":\"4.2.0\",\"date\":\"2015-10-12\",\"lts\":\"Argon\",\"security\":false,\"v8\":\"4.5.103.35\"},{\"name\":\"nodejs\",\"version\":\"4.3.0\",\"date\":\"2016-02-09\",\"lts\":\"Argon\",\"security\":false,\"v8\":\"4.5.103.35\"},{\"name\":\"nodejs\",\"version\":\"4.4.0\",\"date\":\"2016-03-08\",\"lts\":\"Argon\",\"security\":false,\"v8\":\"4.5.103.35\"},{\"name\":\"nodejs\",\"version\":\"4.5.0\",\"date\":\"2016-08-16\",\"lts\":\"Argon\",\"security\":false,\"v8\":\"4.5.103.37\"},{\"name\":\"nodejs\",\"version\":\"4.6.0\",\"date\":\"2016-09-27\",\"lts\":\"Argon\",\"security\":true,\"v8\":\"4.5.103.37\"},{\"name\":\"nodejs\",\"version\":\"4.7.0\",\"date\":\"2016-12-06\",\"lts\":\"Argon\",\"security\":false,\"v8\":\"4.5.103.43\"},{\"name\":\"nodejs\",\"version\":\"4.8.0\",\"date\":\"2017-02-21\",\"lts\":\"Argon\",\"security\":false,\"v8\":\"4.5.103.45\"},{\"name\":\"nodejs\",\"version\":\"4.9.0\",\"date\":\"2018-03-28\",\"lts\":\"Argon\",\"security\":true,\"v8\":\"4.5.103.53\"},{\"name\":\"nodejs\",\"version\":\"5.0.0\",\"date\":\"2015-10-29\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.28\"},{\"name\":\"nodejs\",\"version\":\"5.1.0\",\"date\":\"2015-11-17\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.2.0\",\"date\":\"2015-12-09\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.3.0\",\"date\":\"2015-12-15\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.4.0\",\"date\":\"2016-01-06\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.5.0\",\"date\":\"2016-01-21\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.6.0\",\"date\":\"2016-02-09\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.7.0\",\"date\":\"2016-02-23\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.8.0\",\"date\":\"2016-03-09\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.9.0\",\"date\":\"2016-03-16\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.10.0\",\"date\":\"2016-04-01\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.11.0\",\"date\":\"2016-04-21\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.31\"},{\"name\":\"nodejs\",\"version\":\"5.12.0\",\"date\":\"2016-06-23\",\"lts\":false,\"security\":false,\"v8\":\"4.6.85.32\"},{\"name\":\"nodejs\",\"version\":\"6.0.0\",\"date\":\"2016-04-26\",\"lts\":false,\"security\":false,\"v8\":\"5.0.71.35\"},{\"name\":\"nodejs\",\"version\":\"6.1.0\",\"date\":\"2016-05-05\",\"lts\":false,\"security\":false,\"v8\":\"5.0.71.35\"},{\"name\":\"nodejs\",\"version\":\"6.2.0\",\"date\":\"2016-05-17\",\"lts\":false,\"security\":false,\"v8\":\"5.0.71.47\"},{\"name\":\"nodejs\",\"version\":\"6.3.0\",\"date\":\"2016-07-06\",\"lts\":false,\"security\":false,\"v8\":\"5.0.71.52\"},{\"name\":\"nodejs\",\"version\":\"6.4.0\",\"date\":\"2016-08-12\",\"lts\":false,\"security\":false,\"v8\":\"5.0.71.60\"},{\"name\":\"nodejs\",\"version\":\"6.5.0\",\"date\":\"2016-08-26\",\"lts\":false,\"security\":false,\"v8\":\"5.1.281.81\"},{\"name\":\"nodejs\",\"version\":\"6.6.0\",\"date\":\"2016-09-14\",\"lts\":false,\"security\":false,\"v8\":\"5.1.281.83\"},{\"name\":\"nodejs\",\"version\":\"6.7.0\",\"date\":\"2016-09-27\",\"lts\":false,\"security\":true,\"v8\":\"5.1.281.83\"},{\"name\":\"nodejs\",\"version\":\"6.8.0\",\"date\":\"2016-10-12\",\"lts\":false,\"security\":false,\"v8\":\"5.1.281.84\"},{\"name\":\"nodejs\",\"version\":\"6.9.0\",\"date\":\"2016-10-18\",\"lts\":\"Boron\",\"security\":false,\"v8\":\"5.1.281.84\"},{\"name\":\"nodejs\",\"version\":\"6.10.0\",\"date\":\"2017-02-21\",\"lts\":\"Boron\",\"security\":false,\"v8\":\"5.1.281.93\"},{\"name\":\"nodejs\",\"version\":\"6.11.0\",\"date\":\"2017-06-06\",\"lts\":\"Boron\",\"security\":false,\"v8\":\"5.1.281.102\"},{\"name\":\"nodejs\",\"version\":\"6.12.0\",\"date\":\"2017-11-06\",\"lts\":\"Boron\",\"security\":false,\"v8\":\"5.1.281.108\"},{\"name\":\"nodejs\",\"version\":\"6.13.0\",\"date\":\"2018-02-10\",\"lts\":\"Boron\",\"security\":false,\"v8\":\"5.1.281.111\"},{\"name\":\"nodejs\",\"version\":\"6.14.0\",\"date\":\"2018-03-28\",\"lts\":\"Boron\",\"security\":true,\"v8\":\"5.1.281.111\"},{\"name\":\"nodejs\",\"version\":\"6.15.0\",\"date\":\"2018-11-27\",\"lts\":\"Boron\",\"security\":true,\"v8\":\"5.1.281.111\"},{\"name\":\"nodejs\",\"version\":\"6.16.0\",\"date\":\"2018-12-26\",\"lts\":\"Boron\",\"security\":false,\"v8\":\"5.1.281.111\"},{\"name\":\"nodejs\",\"version\":\"6.17.0\",\"date\":\"2019-02-28\",\"lts\":\"Boron\",\"security\":true,\"v8\":\"5.1.281.111\"},{\"name\":\"nodejs\",\"version\":\"7.0.0\",\"date\":\"2016-10-25\",\"lts\":false,\"security\":false,\"v8\":\"5.4.500.36\"},{\"name\":\"nodejs\",\"version\":\"7.1.0\",\"date\":\"2016-11-08\",\"lts\":false,\"security\":false,\"v8\":\"5.4.500.36\"},{\"name\":\"nodejs\",\"version\":\"7.2.0\",\"date\":\"2016-11-22\",\"lts\":false,\"security\":false,\"v8\":\"5.4.500.43\"},{\"name\":\"nodejs\",\"version\":\"7.3.0\",\"date\":\"2016-12-20\",\"lts\":false,\"security\":false,\"v8\":\"5.4.500.45\"},{\"name\":\"nodejs\",\"version\":\"7.4.0\",\"date\":\"2017-01-04\",\"lts\":false,\"security\":false,\"v8\":\"5.4.500.45\"},{\"name\":\"nodejs\",\"version\":\"7.5.0\",\"date\":\"2017-01-31\",\"lts\":false,\"security\":false,\"v8\":\"5.4.500.48\"},{\"name\":\"nodejs\",\"version\":\"7.6.0\",\"date\":\"2017-02-21\",\"lts\":false,\"security\":false,\"v8\":\"5.5.372.40\"},{\"name\":\"nodejs\",\"version\":\"7.7.0\",\"date\":\"2017-02-28\",\"lts\":false,\"security\":false,\"v8\":\"5.5.372.41\"},{\"name\":\"nodejs\",\"version\":\"7.8.0\",\"date\":\"2017-03-29\",\"lts\":false,\"security\":false,\"v8\":\"5.5.372.43\"},{\"name\":\"nodejs\",\"version\":\"7.9.0\",\"date\":\"2017-04-11\",\"lts\":false,\"security\":false,\"v8\":\"5.5.372.43\"},{\"name\":\"nodejs\",\"version\":\"7.10.0\",\"date\":\"2017-05-02\",\"lts\":false,\"security\":false,\"v8\":\"5.5.372.43\"},{\"name\":\"nodejs\",\"version\":\"8.0.0\",\"date\":\"2017-05-30\",\"lts\":false,\"security\":false,\"v8\":\"5.8.283.41\"},{\"name\":\"nodejs\",\"version\":\"8.1.0\",\"date\":\"2017-06-08\",\"lts\":false,\"security\":false,\"v8\":\"5.8.283.41\"},{\"name\":\"nodejs\",\"version\":\"8.2.0\",\"date\":\"2017-07-19\",\"lts\":false,\"security\":false,\"v8\":\"5.8.283.41\"},{\"name\":\"nodejs\",\"version\":\"8.3.0\",\"date\":\"2017-08-08\",\"lts\":false,\"security\":false,\"v8\":\"6.0.286.52\"},{\"name\":\"nodejs\",\"version\":\"8.4.0\",\"date\":\"2017-08-15\",\"lts\":false,\"security\":false,\"v8\":\"6.0.286.52\"},{\"name\":\"nodejs\",\"version\":\"8.5.0\",\"date\":\"2017-09-12\",\"lts\":false,\"security\":false,\"v8\":\"6.0.287.53\"},{\"name\":\"nodejs\",\"version\":\"8.6.0\",\"date\":\"2017-09-26\",\"lts\":false,\"security\":false,\"v8\":\"6.0.287.53\"},{\"name\":\"nodejs\",\"version\":\"8.7.0\",\"date\":\"2017-10-11\",\"lts\":false,\"security\":false,\"v8\":\"6.1.534.42\"},{\"name\":\"nodejs\",\"version\":\"8.8.0\",\"date\":\"2017-10-24\",\"lts\":false,\"security\":false,\"v8\":\"6.1.534.42\"},{\"name\":\"nodejs\",\"version\":\"8.9.0\",\"date\":\"2017-10-31\",\"lts\":\"Carbon\",\"security\":false,\"v8\":\"6.1.534.46\"},{\"name\":\"nodejs\",\"version\":\"8.10.0\",\"date\":\"2018-03-06\",\"lts\":\"Carbon\",\"security\":false,\"v8\":\"6.2.414.50\"},{\"name\":\"nodejs\",\"version\":\"8.11.0\",\"date\":\"2018-03-28\",\"lts\":\"Carbon\",\"security\":true,\"v8\":\"6.2.414.50\"},{\"name\":\"nodejs\",\"version\":\"8.12.0\",\"date\":\"2018-09-10\",\"lts\":\"Carbon\",\"security\":false,\"v8\":\"6.2.414.66\"},{\"name\":\"nodejs\",\"version\":\"8.13.0\",\"date\":\"2018-11-20\",\"lts\":\"Carbon\",\"security\":false,\"v8\":\"6.2.414.72\"},{\"name\":\"nodejs\",\"version\":\"8.14.0\",\"date\":\"2018-11-27\",\"lts\":\"Carbon\",\"security\":true,\"v8\":\"6.2.414.72\"},{\"name\":\"nodejs\",\"version\":\"8.15.0\",\"date\":\"2018-12-26\",\"lts\":\"Carbon\",\"security\":false,\"v8\":\"6.2.414.75\"},{\"name\":\"nodejs\",\"version\":\"8.16.0\",\"date\":\"2019-04-16\",\"lts\":\"Carbon\",\"security\":false,\"v8\":\"6.2.414.77\"},{\"name\":\"nodejs\",\"version\":\"8.17.0\",\"date\":\"2019-12-17\",\"lts\":\"Carbon\",\"security\":true,\"v8\":\"6.2.414.78\"},{\"name\":\"nodejs\",\"version\":\"9.0.0\",\"date\":\"2017-10-31\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.32\"},{\"name\":\"nodejs\",\"version\":\"9.1.0\",\"date\":\"2017-11-07\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.32\"},{\"name\":\"nodejs\",\"version\":\"9.2.0\",\"date\":\"2017-11-14\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.44\"},{\"name\":\"nodejs\",\"version\":\"9.3.0\",\"date\":\"2017-12-12\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.46\"},{\"name\":\"nodejs\",\"version\":\"9.4.0\",\"date\":\"2018-01-10\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.46\"},{\"name\":\"nodejs\",\"version\":\"9.5.0\",\"date\":\"2018-01-31\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.46\"},{\"name\":\"nodejs\",\"version\":\"9.6.0\",\"date\":\"2018-02-21\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.46\"},{\"name\":\"nodejs\",\"version\":\"9.7.0\",\"date\":\"2018-03-01\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.46\"},{\"name\":\"nodejs\",\"version\":\"9.8.0\",\"date\":\"2018-03-07\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.46\"},{\"name\":\"nodejs\",\"version\":\"9.9.0\",\"date\":\"2018-03-21\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.46\"},{\"name\":\"nodejs\",\"version\":\"9.10.0\",\"date\":\"2018-03-28\",\"lts\":false,\"security\":true,\"v8\":\"6.2.414.46\"},{\"name\":\"nodejs\",\"version\":\"9.11.0\",\"date\":\"2018-04-04\",\"lts\":false,\"security\":false,\"v8\":\"6.2.414.46\"},{\"name\":\"nodejs\",\"version\":\"10.0.0\",\"date\":\"2018-04-24\",\"lts\":false,\"security\":false,\"v8\":\"6.6.346.24\"},{\"name\":\"nodejs\",\"version\":\"10.1.0\",\"date\":\"2018-05-08\",\"lts\":false,\"security\":false,\"v8\":\"6.6.346.27\"},{\"name\":\"nodejs\",\"version\":\"10.2.0\",\"date\":\"2018-05-23\",\"lts\":false,\"security\":false,\"v8\":\"6.6.346.32\"},{\"name\":\"nodejs\",\"version\":\"10.3.0\",\"date\":\"2018-05-29\",\"lts\":false,\"security\":false,\"v8\":\"6.6.346.32\"},{\"name\":\"nodejs\",\"version\":\"10.4.0\",\"date\":\"2018-06-06\",\"lts\":false,\"security\":false,\"v8\":\"6.7.288.43\"},{\"name\":\"nodejs\",\"version\":\"10.5.0\",\"date\":\"2018-06-20\",\"lts\":false,\"security\":false,\"v8\":\"6.7.288.46\"},{\"name\":\"nodejs\",\"version\":\"10.6.0\",\"date\":\"2018-07-04\",\"lts\":false,\"security\":false,\"v8\":\"6.7.288.46\"},{\"name\":\"nodejs\",\"version\":\"10.7.0\",\"date\":\"2018-07-18\",\"lts\":false,\"security\":false,\"v8\":\"6.7.288.49\"},{\"name\":\"nodejs\",\"version\":\"10.8.0\",\"date\":\"2018-08-01\",\"lts\":false,\"security\":false,\"v8\":\"6.7.288.49\"},{\"name\":\"nodejs\",\"version\":\"10.9.0\",\"date\":\"2018-08-15\",\"lts\":false,\"security\":false,\"v8\":\"6.8.275.24\"},{\"name\":\"nodejs\",\"version\":\"10.10.0\",\"date\":\"2018-09-06\",\"lts\":false,\"security\":false,\"v8\":\"6.8.275.30\"},{\"name\":\"nodejs\",\"version\":\"10.11.0\",\"date\":\"2018-09-19\",\"lts\":false,\"security\":false,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.12.0\",\"date\":\"2018-10-10\",\"lts\":false,\"security\":false,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.13.0\",\"date\":\"2018-10-30\",\"lts\":\"Dubnium\",\"security\":false,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.14.0\",\"date\":\"2018-11-27\",\"lts\":\"Dubnium\",\"security\":true,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.15.0\",\"date\":\"2018-12-26\",\"lts\":\"Dubnium\",\"security\":false,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.16.0\",\"date\":\"2019-05-28\",\"lts\":\"Dubnium\",\"security\":false,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.17.0\",\"date\":\"2019-10-22\",\"lts\":\"Dubnium\",\"security\":false,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.18.0\",\"date\":\"2019-12-17\",\"lts\":\"Dubnium\",\"security\":true,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.19.0\",\"date\":\"2020-02-05\",\"lts\":\"Dubnium\",\"security\":true,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.20.0\",\"date\":\"2020-03-26\",\"lts\":\"Dubnium\",\"security\":false,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.21.0\",\"date\":\"2020-06-02\",\"lts\":\"Dubnium\",\"security\":true,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.22.0\",\"date\":\"2020-07-21\",\"lts\":\"Dubnium\",\"security\":false,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.23.0\",\"date\":\"2020-10-27\",\"lts\":\"Dubnium\",\"security\":false,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"10.24.0\",\"date\":\"2021-02-23\",\"lts\":\"Dubnium\",\"security\":true,\"v8\":\"6.8.275.32\"},{\"name\":\"nodejs\",\"version\":\"11.0.0\",\"date\":\"2018-10-23\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.28\"},{\"name\":\"nodejs\",\"version\":\"11.1.0\",\"date\":\"2018-10-30\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.32\"},{\"name\":\"nodejs\",\"version\":\"11.2.0\",\"date\":\"2018-11-15\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.3.0\",\"date\":\"2018-11-27\",\"lts\":false,\"security\":true,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.4.0\",\"date\":\"2018-12-07\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.5.0\",\"date\":\"2018-12-18\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.6.0\",\"date\":\"2018-12-26\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.7.0\",\"date\":\"2019-01-17\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.8.0\",\"date\":\"2019-01-24\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.9.0\",\"date\":\"2019-01-30\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.10.0\",\"date\":\"2019-02-14\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.11.0\",\"date\":\"2019-03-05\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.12.0\",\"date\":\"2019-03-14\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.13.0\",\"date\":\"2019-03-28\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.14.0\",\"date\":\"2019-04-10\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"11.15.0\",\"date\":\"2019-04-30\",\"lts\":false,\"security\":false,\"v8\":\"7.0.276.38\"},{\"name\":\"nodejs\",\"version\":\"12.0.0\",\"date\":\"2019-04-23\",\"lts\":false,\"security\":false,\"v8\":\"7.4.288.21\"},{\"name\":\"nodejs\",\"version\":\"12.1.0\",\"date\":\"2019-04-29\",\"lts\":false,\"security\":false,\"v8\":\"7.4.288.21\"},{\"name\":\"nodejs\",\"version\":\"12.2.0\",\"date\":\"2019-05-07\",\"lts\":false,\"security\":false,\"v8\":\"7.4.288.21\"},{\"name\":\"nodejs\",\"version\":\"12.3.0\",\"date\":\"2019-05-21\",\"lts\":false,\"security\":false,\"v8\":\"7.4.288.27\"},{\"name\":\"nodejs\",\"version\":\"12.4.0\",\"date\":\"2019-06-04\",\"lts\":false,\"security\":false,\"v8\":\"7.4.288.27\"},{\"name\":\"nodejs\",\"version\":\"12.5.0\",\"date\":\"2019-06-26\",\"lts\":false,\"security\":false,\"v8\":\"7.5.288.22\"},{\"name\":\"nodejs\",\"version\":\"12.6.0\",\"date\":\"2019-07-03\",\"lts\":false,\"security\":false,\"v8\":\"7.5.288.22\"},{\"name\":\"nodejs\",\"version\":\"12.7.0\",\"date\":\"2019-07-23\",\"lts\":false,\"security\":false,\"v8\":\"7.5.288.22\"},{\"name\":\"nodejs\",\"version\":\"12.8.0\",\"date\":\"2019-08-06\",\"lts\":false,\"security\":false,\"v8\":\"7.5.288.22\"},{\"name\":\"nodejs\",\"version\":\"12.9.0\",\"date\":\"2019-08-20\",\"lts\":false,\"security\":false,\"v8\":\"7.6.303.29\"},{\"name\":\"nodejs\",\"version\":\"12.10.0\",\"date\":\"2019-09-04\",\"lts\":false,\"security\":false,\"v8\":\"7.6.303.29\"},{\"name\":\"nodejs\",\"version\":\"12.11.0\",\"date\":\"2019-09-25\",\"lts\":false,\"security\":false,\"v8\":\"7.7.299.11\"},{\"name\":\"nodejs\",\"version\":\"12.12.0\",\"date\":\"2019-10-11\",\"lts\":false,\"security\":false,\"v8\":\"7.7.299.13\"},{\"name\":\"nodejs\",\"version\":\"12.13.0\",\"date\":\"2019-10-21\",\"lts\":\"Erbium\",\"security\":false,\"v8\":\"7.7.299.13\"},{\"name\":\"nodejs\",\"version\":\"12.14.0\",\"date\":\"2019-12-17\",\"lts\":\"Erbium\",\"security\":true,\"v8\":\"7.7.299.13\"},{\"name\":\"nodejs\",\"version\":\"12.15.0\",\"date\":\"2020-02-05\",\"lts\":\"Erbium\",\"security\":true,\"v8\":\"7.7.299.13\"},{\"name\":\"nodejs\",\"version\":\"12.16.0\",\"date\":\"2020-02-11\",\"lts\":\"Erbium\",\"security\":false,\"v8\":\"7.8.279.23\"},{\"name\":\"nodejs\",\"version\":\"12.17.0\",\"date\":\"2020-05-26\",\"lts\":\"Erbium\",\"security\":false,\"v8\":\"7.8.279.23\"},{\"name\":\"nodejs\",\"version\":\"12.18.0\",\"date\":\"2020-06-02\",\"lts\":\"Erbium\",\"security\":true,\"v8\":\"7.8.279.23\"},{\"name\":\"nodejs\",\"version\":\"12.19.0\",\"date\":\"2020-10-06\",\"lts\":\"Erbium\",\"security\":false,\"v8\":\"7.8.279.23\"},{\"name\":\"nodejs\",\"version\":\"12.20.0\",\"date\":\"2020-11-24\",\"lts\":\"Erbium\",\"security\":false,\"v8\":\"7.8.279.23\"},{\"name\":\"nodejs\",\"version\":\"12.21.0\",\"date\":\"2021-02-23\",\"lts\":\"Erbium\",\"security\":true,\"v8\":\"7.8.279.23\"},{\"name\":\"nodejs\",\"version\":\"12.22.0\",\"date\":\"2021-03-30\",\"lts\":\"Erbium\",\"security\":false,\"v8\":\"7.8.279.23\"},{\"name\":\"nodejs\",\"version\":\"13.0.0\",\"date\":\"2019-10-22\",\"lts\":false,\"security\":false,\"v8\":\"7.8.279.17\"},{\"name\":\"nodejs\",\"version\":\"13.1.0\",\"date\":\"2019-11-05\",\"lts\":false,\"security\":false,\"v8\":\"7.8.279.17\"},{\"name\":\"nodejs\",\"version\":\"13.2.0\",\"date\":\"2019-11-21\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.23\"},{\"name\":\"nodejs\",\"version\":\"13.3.0\",\"date\":\"2019-12-03\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.4.0\",\"date\":\"2019-12-17\",\"lts\":false,\"security\":true,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.5.0\",\"date\":\"2019-12-18\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.6.0\",\"date\":\"2020-01-07\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.7.0\",\"date\":\"2020-01-21\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.8.0\",\"date\":\"2020-02-05\",\"lts\":false,\"security\":true,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.9.0\",\"date\":\"2020-02-18\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.10.0\",\"date\":\"2020-03-04\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.11.0\",\"date\":\"2020-03-12\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.12.0\",\"date\":\"2020-03-26\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.13.0\",\"date\":\"2020-04-14\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"13.14.0\",\"date\":\"2020-04-29\",\"lts\":false,\"security\":false,\"v8\":\"7.9.317.25\"},{\"name\":\"nodejs\",\"version\":\"14.0.0\",\"date\":\"2020-04-21\",\"lts\":false,\"security\":false,\"v8\":\"8.1.307.30\"},{\"name\":\"nodejs\",\"version\":\"14.1.0\",\"date\":\"2020-04-29\",\"lts\":false,\"security\":false,\"v8\":\"8.1.307.31\"},{\"name\":\"nodejs\",\"version\":\"14.2.0\",\"date\":\"2020-05-05\",\"lts\":false,\"security\":false,\"v8\":\"8.1.307.31\"},{\"name\":\"nodejs\",\"version\":\"14.3.0\",\"date\":\"2020-05-19\",\"lts\":false,\"security\":false,\"v8\":\"8.1.307.31\"},{\"name\":\"nodejs\",\"version\":\"14.4.0\",\"date\":\"2020-06-02\",\"lts\":false,\"security\":true,\"v8\":\"8.1.307.31\"},{\"name\":\"nodejs\",\"version\":\"14.5.0\",\"date\":\"2020-06-30\",\"lts\":false,\"security\":false,\"v8\":\"8.3.110.9\"},{\"name\":\"nodejs\",\"version\":\"14.6.0\",\"date\":\"2020-07-20\",\"lts\":false,\"security\":false,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.7.0\",\"date\":\"2020-07-29\",\"lts\":false,\"security\":false,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.8.0\",\"date\":\"2020-08-11\",\"lts\":false,\"security\":false,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.9.0\",\"date\":\"2020-08-27\",\"lts\":false,\"security\":false,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.10.0\",\"date\":\"2020-09-08\",\"lts\":false,\"security\":false,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.11.0\",\"date\":\"2020-09-15\",\"lts\":false,\"security\":true,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.12.0\",\"date\":\"2020-09-22\",\"lts\":false,\"security\":false,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.13.0\",\"date\":\"2020-09-29\",\"lts\":false,\"security\":false,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.14.0\",\"date\":\"2020-10-15\",\"lts\":false,\"security\":false,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.15.0\",\"date\":\"2020-10-27\",\"lts\":\"Fermium\",\"security\":false,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.16.0\",\"date\":\"2021-02-23\",\"lts\":\"Fermium\",\"security\":true,\"v8\":\"8.4.371.19\"},{\"name\":\"nodejs\",\"version\":\"14.17.0\",\"date\":\"2021-05-11\",\"lts\":\"Fermium\",\"security\":false,\"v8\":\"8.4.371.23\"},{\"name\":\"nodejs\",\"version\":\"14.18.0\",\"date\":\"2021-09-28\",\"lts\":\"Fermium\",\"security\":false,\"v8\":\"8.4.371.23\"},{\"name\":\"nodejs\",\"version\":\"14.19.0\",\"date\":\"2022-02-01\",\"lts\":\"Fermium\",\"security\":false,\"v8\":\"8.4.371.23\"},{\"name\":\"nodejs\",\"version\":\"14.20.0\",\"date\":\"2022-07-07\",\"lts\":\"Fermium\",\"security\":true,\"v8\":\"8.4.371.23\"},{\"name\":\"nodejs\",\"version\":\"14.21.0\",\"date\":\"2022-11-01\",\"lts\":\"Fermium\",\"security\":false,\"v8\":\"8.4.371.23\"},{\"name\":\"nodejs\",\"version\":\"15.0.0\",\"date\":\"2020-10-20\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.16\"},{\"name\":\"nodejs\",\"version\":\"15.1.0\",\"date\":\"2020-11-04\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.2.0\",\"date\":\"2020-11-10\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.3.0\",\"date\":\"2020-11-24\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.4.0\",\"date\":\"2020-12-09\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.5.0\",\"date\":\"2020-12-22\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.6.0\",\"date\":\"2021-01-14\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.7.0\",\"date\":\"2021-01-25\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.8.0\",\"date\":\"2021-02-02\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.9.0\",\"date\":\"2021-02-18\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.10.0\",\"date\":\"2021-02-23\",\"lts\":false,\"security\":true,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.11.0\",\"date\":\"2021-03-03\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.12.0\",\"date\":\"2021-03-17\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.13.0\",\"date\":\"2021-03-31\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"15.14.0\",\"date\":\"2021-04-06\",\"lts\":false,\"security\":false,\"v8\":\"8.6.395.17\"},{\"name\":\"nodejs\",\"version\":\"16.0.0\",\"date\":\"2021-04-20\",\"lts\":false,\"security\":false,\"v8\":\"9.0.257.17\"},{\"name\":\"nodejs\",\"version\":\"16.1.0\",\"date\":\"2021-05-04\",\"lts\":false,\"security\":false,\"v8\":\"9.0.257.24\"},{\"name\":\"nodejs\",\"version\":\"16.2.0\",\"date\":\"2021-05-19\",\"lts\":false,\"security\":false,\"v8\":\"9.0.257.25\"},{\"name\":\"nodejs\",\"version\":\"16.3.0\",\"date\":\"2021-06-03\",\"lts\":false,\"security\":false,\"v8\":\"9.0.257.25\"},{\"name\":\"nodejs\",\"version\":\"16.4.0\",\"date\":\"2021-06-23\",\"lts\":false,\"security\":false,\"v8\":\"9.1.269.36\"},{\"name\":\"nodejs\",\"version\":\"16.5.0\",\"date\":\"2021-07-14\",\"lts\":false,\"security\":false,\"v8\":\"9.1.269.38\"},{\"name\":\"nodejs\",\"version\":\"16.6.0\",\"date\":\"2021-07-29\",\"lts\":false,\"security\":true,\"v8\":\"9.2.230.21\"},{\"name\":\"nodejs\",\"version\":\"16.7.0\",\"date\":\"2021-08-18\",\"lts\":false,\"security\":false,\"v8\":\"9.2.230.21\"},{\"name\":\"nodejs\",\"version\":\"16.8.0\",\"date\":\"2021-08-25\",\"lts\":false,\"security\":false,\"v8\":\"9.2.230.21\"},{\"name\":\"nodejs\",\"version\":\"16.9.0\",\"date\":\"2021-09-07\",\"lts\":false,\"security\":false,\"v8\":\"9.3.345.16\"},{\"name\":\"nodejs\",\"version\":\"16.10.0\",\"date\":\"2021-09-22\",\"lts\":false,\"security\":false,\"v8\":\"9.3.345.19\"},{\"name\":\"nodejs\",\"version\":\"16.11.0\",\"date\":\"2021-10-08\",\"lts\":false,\"security\":false,\"v8\":\"9.4.146.19\"},{\"name\":\"nodejs\",\"version\":\"16.12.0\",\"date\":\"2021-10-20\",\"lts\":false,\"security\":false,\"v8\":\"9.4.146.19\"},{\"name\":\"nodejs\",\"version\":\"16.13.0\",\"date\":\"2021-10-26\",\"lts\":\"Gallium\",\"security\":false,\"v8\":\"9.4.146.19\"},{\"name\":\"nodejs\",\"version\":\"16.14.0\",\"date\":\"2022-02-08\",\"lts\":\"Gallium\",\"security\":false,\"v8\":\"9.4.146.24\"},{\"name\":\"nodejs\",\"version\":\"16.15.0\",\"date\":\"2022-04-26\",\"lts\":\"Gallium\",\"security\":false,\"v8\":\"9.4.146.24\"},{\"name\":\"nodejs\",\"version\":\"16.16.0\",\"date\":\"2022-07-07\",\"lts\":\"Gallium\",\"security\":true,\"v8\":\"9.4.146.24\"},{\"name\":\"nodejs\",\"version\":\"16.17.0\",\"date\":\"2022-08-16\",\"lts\":\"Gallium\",\"security\":false,\"v8\":\"9.4.146.26\"},{\"name\":\"nodejs\",\"version\":\"16.18.0\",\"date\":\"2022-10-12\",\"lts\":\"Gallium\",\"security\":false,\"v8\":\"9.4.146.26\"},{\"name\":\"nodejs\",\"version\":\"16.19.0\",\"date\":\"2022-12-13\",\"lts\":\"Gallium\",\"security\":false,\"v8\":\"9.4.146.26\"},{\"name\":\"nodejs\",\"version\":\"16.20.0\",\"date\":\"2023-03-28\",\"lts\":\"Gallium\",\"security\":false,\"v8\":\"9.4.146.26\"},{\"name\":\"nodejs\",\"version\":\"17.0.0\",\"date\":\"2021-10-19\",\"lts\":false,\"security\":false,\"v8\":\"9.5.172.21\"},{\"name\":\"nodejs\",\"version\":\"17.1.0\",\"date\":\"2021-11-09\",\"lts\":false,\"security\":false,\"v8\":\"9.5.172.25\"},{\"name\":\"nodejs\",\"version\":\"17.2.0\",\"date\":\"2021-11-30\",\"lts\":false,\"security\":false,\"v8\":\"9.6.180.14\"},{\"name\":\"nodejs\",\"version\":\"17.3.0\",\"date\":\"2021-12-17\",\"lts\":false,\"security\":false,\"v8\":\"9.6.180.15\"},{\"name\":\"nodejs\",\"version\":\"17.4.0\",\"date\":\"2022-01-18\",\"lts\":false,\"security\":false,\"v8\":\"9.6.180.15\"},{\"name\":\"nodejs\",\"version\":\"17.5.0\",\"date\":\"2022-02-10\",\"lts\":false,\"security\":false,\"v8\":\"9.6.180.15\"},{\"name\":\"nodejs\",\"version\":\"17.6.0\",\"date\":\"2022-02-22\",\"lts\":false,\"security\":false,\"v8\":\"9.6.180.15\"},{\"name\":\"nodejs\",\"version\":\"17.7.0\",\"date\":\"2022-03-09\",\"lts\":false,\"security\":false,\"v8\":\"9.6.180.15\"},{\"name\":\"nodejs\",\"version\":\"17.8.0\",\"date\":\"2022-03-22\",\"lts\":false,\"security\":false,\"v8\":\"9.6.180.15\"},{\"name\":\"nodejs\",\"version\":\"17.9.0\",\"date\":\"2022-04-07\",\"lts\":false,\"security\":false,\"v8\":\"9.6.180.15\"},{\"name\":\"nodejs\",\"version\":\"18.0.0\",\"date\":\"2022-04-18\",\"lts\":false,\"security\":false,\"v8\":\"10.1.124.8\"},{\"name\":\"nodejs\",\"version\":\"18.1.0\",\"date\":\"2022-05-03\",\"lts\":false,\"security\":false,\"v8\":\"10.1.124.8\"},{\"name\":\"nodejs\",\"version\":\"18.2.0\",\"date\":\"2022-05-17\",\"lts\":false,\"security\":false,\"v8\":\"10.1.124.8\"},{\"name\":\"nodejs\",\"version\":\"18.3.0\",\"date\":\"2022-06-02\",\"lts\":false,\"security\":false,\"v8\":\"10.2.154.4\"},{\"name\":\"nodejs\",\"version\":\"18.4.0\",\"date\":\"2022-06-16\",\"lts\":false,\"security\":false,\"v8\":\"10.2.154.4\"},{\"name\":\"nodejs\",\"version\":\"18.5.0\",\"date\":\"2022-07-06\",\"lts\":false,\"security\":true,\"v8\":\"10.2.154.4\"},{\"name\":\"nodejs\",\"version\":\"18.6.0\",\"date\":\"2022-07-13\",\"lts\":false,\"security\":false,\"v8\":\"10.2.154.13\"},{\"name\":\"nodejs\",\"version\":\"18.7.0\",\"date\":\"2022-07-26\",\"lts\":false,\"security\":false,\"v8\":\"10.2.154.13\"},{\"name\":\"nodejs\",\"version\":\"18.8.0\",\"date\":\"2022-08-24\",\"lts\":false,\"security\":false,\"v8\":\"10.2.154.13\"},{\"name\":\"nodejs\",\"version\":\"18.9.0\",\"date\":\"2022-09-07\",\"lts\":false,\"security\":false,\"v8\":\"10.2.154.15\"},{\"name\":\"nodejs\",\"version\":\"18.10.0\",\"date\":\"2022-09-28\",\"lts\":false,\"security\":false,\"v8\":\"10.2.154.15\"},{\"name\":\"nodejs\",\"version\":\"18.11.0\",\"date\":\"2022-10-13\",\"lts\":false,\"security\":false,\"v8\":\"10.2.154.15\"},{\"name\":\"nodejs\",\"version\":\"18.12.0\",\"date\":\"2022-10-25\",\"lts\":\"Hydrogen\",\"security\":false,\"v8\":\"10.2.154.15\"},{\"name\":\"nodejs\",\"version\":\"18.13.0\",\"date\":\"2023-01-05\",\"lts\":\"Hydrogen\",\"security\":false,\"v8\":\"10.2.154.23\"},{\"name\":\"nodejs\",\"version\":\"18.14.0\",\"date\":\"2023-02-01\",\"lts\":\"Hydrogen\",\"security\":false,\"v8\":\"10.2.154.23\"},{\"name\":\"nodejs\",\"version\":\"18.15.0\",\"date\":\"2023-03-05\",\"lts\":\"Hydrogen\",\"security\":false,\"v8\":\"10.2.154.26\"},{\"name\":\"nodejs\",\"version\":\"18.16.0\",\"date\":\"2023-04-12\",\"lts\":\"Hydrogen\",\"security\":false,\"v8\":\"10.2.154.26\"},{\"name\":\"nodejs\",\"version\":\"18.17.0\",\"date\":\"2023-07-18\",\"lts\":\"Hydrogen\",\"security\":false,\"v8\":\"10.2.154.26\"},{\"name\":\"nodejs\",\"version\":\"18.18.0\",\"date\":\"2023-09-18\",\"lts\":\"Hydrogen\",\"security\":false,\"v8\":\"10.2.154.26\"},{\"name\":\"nodejs\",\"version\":\"18.19.0\",\"date\":\"2023-11-29\",\"lts\":\"Hydrogen\",\"security\":false,\"v8\":\"10.2.154.26\"},{\"name\":\"nodejs\",\"version\":\"18.20.0\",\"date\":\"2024-03-26\",\"lts\":\"Hydrogen\",\"security\":false,\"v8\":\"10.2.154.26\"},{\"name\":\"nodejs\",\"version\":\"19.0.0\",\"date\":\"2022-10-17\",\"lts\":false,\"security\":false,\"v8\":\"10.7.193.13\"},{\"name\":\"nodejs\",\"version\":\"19.1.0\",\"date\":\"2022-11-14\",\"lts\":false,\"security\":false,\"v8\":\"10.7.193.20\"},{\"name\":\"nodejs\",\"version\":\"19.2.0\",\"date\":\"2022-11-29\",\"lts\":false,\"security\":false,\"v8\":\"10.8.168.20\"},{\"name\":\"nodejs\",\"version\":\"19.3.0\",\"date\":\"2022-12-14\",\"lts\":false,\"security\":false,\"v8\":\"10.8.168.21\"},{\"name\":\"nodejs\",\"version\":\"19.4.0\",\"date\":\"2023-01-05\",\"lts\":false,\"security\":false,\"v8\":\"10.8.168.25\"},{\"name\":\"nodejs\",\"version\":\"19.5.0\",\"date\":\"2023-01-24\",\"lts\":false,\"security\":false,\"v8\":\"10.8.168.25\"},{\"name\":\"nodejs\",\"version\":\"19.6.0\",\"date\":\"2023-02-01\",\"lts\":false,\"security\":false,\"v8\":\"10.8.168.25\"},{\"name\":\"nodejs\",\"version\":\"19.7.0\",\"date\":\"2023-02-21\",\"lts\":false,\"security\":false,\"v8\":\"10.8.168.25\"},{\"name\":\"nodejs\",\"version\":\"19.8.0\",\"date\":\"2023-03-14\",\"lts\":false,\"security\":false,\"v8\":\"10.8.168.25\"},{\"name\":\"nodejs\",\"version\":\"19.9.0\",\"date\":\"2023-04-10\",\"lts\":false,\"security\":false,\"v8\":\"10.8.168.25\"},{\"name\":\"nodejs\",\"version\":\"20.0.0\",\"date\":\"2023-04-17\",\"lts\":false,\"security\":false,\"v8\":\"11.3.244.4\"},{\"name\":\"nodejs\",\"version\":\"20.1.0\",\"date\":\"2023-05-03\",\"lts\":false,\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.2.0\",\"date\":\"2023-05-16\",\"lts\":false,\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.3.0\",\"date\":\"2023-06-08\",\"lts\":false,\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.4.0\",\"date\":\"2023-07-04\",\"lts\":false,\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.5.0\",\"date\":\"2023-07-19\",\"lts\":false,\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.6.0\",\"date\":\"2023-08-23\",\"lts\":false,\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.7.0\",\"date\":\"2023-09-18\",\"lts\":false,\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.8.0\",\"date\":\"2023-09-28\",\"lts\":false,\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.9.0\",\"date\":\"2023-10-24\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.10.0\",\"date\":\"2023-11-22\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.11.0\",\"date\":\"2024-01-09\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.12.0\",\"date\":\"2024-03-26\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.13.0\",\"date\":\"2024-05-07\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.14.0\",\"date\":\"2024-05-28\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.15.0\",\"date\":\"2024-06-20\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.16.0\",\"date\":\"2024-07-24\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.17.0\",\"date\":\"2024-08-21\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.18.0\",\"date\":\"2024-10-03\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"20.19.0\",\"date\":\"2025-03-13\",\"lts\":\"Iron\",\"security\":false,\"v8\":\"11.3.244.8\"},{\"name\":\"nodejs\",\"version\":\"21.0.0\",\"date\":\"2023-10-17\",\"lts\":false,\"security\":false,\"v8\":\"11.8.172.13\"},{\"name\":\"nodejs\",\"version\":\"21.1.0\",\"date\":\"2023-10-24\",\"lts\":false,\"security\":false,\"v8\":\"11.8.172.15\"},{\"name\":\"nodejs\",\"version\":\"21.2.0\",\"date\":\"2023-11-14\",\"lts\":false,\"security\":false,\"v8\":\"11.8.172.17\"},{\"name\":\"nodejs\",\"version\":\"21.3.0\",\"date\":\"2023-11-30\",\"lts\":false,\"security\":false,\"v8\":\"11.8.172.17\"},{\"name\":\"nodejs\",\"version\":\"21.4.0\",\"date\":\"2023-12-05\",\"lts\":false,\"security\":false,\"v8\":\"11.8.172.17\"},{\"name\":\"nodejs\",\"version\":\"21.5.0\",\"date\":\"2023-12-19\",\"lts\":false,\"security\":false,\"v8\":\"11.8.172.17\"},{\"name\":\"nodejs\",\"version\":\"21.6.0\",\"date\":\"2024-01-14\",\"lts\":false,\"security\":false,\"v8\":\"11.8.172.17\"},{\"name\":\"nodejs\",\"version\":\"21.7.0\",\"date\":\"2024-03-06\",\"lts\":false,\"security\":false,\"v8\":\"11.8.172.17\"},{\"name\":\"nodejs\",\"version\":\"22.0.0\",\"date\":\"2024-04-24\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.14\"},{\"name\":\"nodejs\",\"version\":\"22.1.0\",\"date\":\"2024-05-02\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.14\"},{\"name\":\"nodejs\",\"version\":\"22.2.0\",\"date\":\"2024-05-15\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.14\"},{\"name\":\"nodejs\",\"version\":\"22.3.0\",\"date\":\"2024-06-11\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.20\"},{\"name\":\"nodejs\",\"version\":\"22.4.0\",\"date\":\"2024-07-02\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.5.0\",\"date\":\"2024-07-17\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.6.0\",\"date\":\"2024-08-06\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.7.0\",\"date\":\"2024-08-21\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.8.0\",\"date\":\"2024-09-03\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.9.0\",\"date\":\"2024-09-17\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.10.0\",\"date\":\"2024-10-16\",\"lts\":false,\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.11.0\",\"date\":\"2024-10-29\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.12.0\",\"date\":\"2024-12-02\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.13.0\",\"date\":\"2025-01-06\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.14.0\",\"date\":\"2025-02-11\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.15.0\",\"date\":\"2025-04-22\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.16.0\",\"date\":\"2025-05-20\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.17.0\",\"date\":\"2025-06-24\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.18.0\",\"date\":\"2025-07-31\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.19.0\",\"date\":\"2025-08-28\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.20.0\",\"date\":\"2025-09-24\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"22.21.0\",\"date\":\"2025-10-20\",\"lts\":\"Jod\",\"security\":false,\"v8\":\"12.4.254.21\"},{\"name\":\"nodejs\",\"version\":\"23.0.0\",\"date\":\"2024-10-16\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.26\"},{\"name\":\"nodejs\",\"version\":\"23.1.0\",\"date\":\"2024-10-24\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"23.2.0\",\"date\":\"2024-11-11\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"23.3.0\",\"date\":\"2024-11-20\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"23.4.0\",\"date\":\"2024-12-10\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"23.5.0\",\"date\":\"2024-12-19\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"23.6.0\",\"date\":\"2025-01-07\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"23.7.0\",\"date\":\"2025-01-30\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"23.8.0\",\"date\":\"2025-02-13\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"23.9.0\",\"date\":\"2025-02-26\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"23.10.0\",\"date\":\"2025-03-13\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"23.11.0\",\"date\":\"2025-04-01\",\"lts\":false,\"security\":false,\"v8\":\"12.9.202.28\"},{\"name\":\"nodejs\",\"version\":\"24.0.0\",\"date\":\"2025-05-06\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.8\"},{\"name\":\"nodejs\",\"version\":\"24.1.0\",\"date\":\"2025-05-20\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.10\"},{\"name\":\"nodejs\",\"version\":\"24.2.0\",\"date\":\"2025-06-09\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.10\"},{\"name\":\"nodejs\",\"version\":\"24.3.0\",\"date\":\"2025-06-24\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.10\"},{\"name\":\"nodejs\",\"version\":\"24.4.0\",\"date\":\"2025-07-09\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.10\"},{\"name\":\"nodejs\",\"version\":\"24.5.0\",\"date\":\"2025-07-31\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.10\"},{\"name\":\"nodejs\",\"version\":\"24.6.0\",\"date\":\"2025-08-14\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.10\"},{\"name\":\"nodejs\",\"version\":\"24.7.0\",\"date\":\"2025-08-27\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.10\"},{\"name\":\"nodejs\",\"version\":\"24.8.0\",\"date\":\"2025-09-10\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.10\"},{\"name\":\"nodejs\",\"version\":\"24.9.0\",\"date\":\"2025-09-25\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.10\"},{\"name\":\"nodejs\",\"version\":\"24.10.0\",\"date\":\"2025-10-08\",\"lts\":false,\"security\":false,\"v8\":\"13.6.233.10\"},{\"name\":\"nodejs\",\"version\":\"25.0.0\",\"date\":\"2025-10-15\",\"lts\":false,\"security\":false,\"v8\":\"14.1.146.11\"}]"));}),
"[project]/node_modules/node-releases/data/release-schedule/release-schedule.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"v0.8":{"start":"2012-06-25","end":"2014-07-31"},"v0.10":{"start":"2013-03-11","end":"2016-10-31"},"v0.12":{"start":"2015-02-06","end":"2016-12-31"},"v4":{"start":"2015-09-08","lts":"2015-10-12","maintenance":"2017-04-01","end":"2018-04-30","codename":"Argon"},"v5":{"start":"2015-10-29","maintenance":"2016-04-30","end":"2016-06-30"},"v6":{"start":"2016-04-26","lts":"2016-10-18","maintenance":"2018-04-30","end":"2019-04-30","codename":"Boron"},"v7":{"start":"2016-10-25","maintenance":"2017-04-30","end":"2017-06-30"},"v8":{"start":"2017-05-30","lts":"2017-10-31","maintenance":"2019-01-01","end":"2019-12-31","codename":"Carbon"},"v9":{"start":"2017-10-01","maintenance":"2018-04-01","end":"2018-06-30"},"v10":{"start":"2018-04-24","lts":"2018-10-30","maintenance":"2020-05-19","end":"2021-04-30","codename":"Dubnium"},"v11":{"start":"2018-10-23","maintenance":"2019-04-22","end":"2019-06-01"},"v12":{"start":"2019-04-23","lts":"2019-10-21","maintenance":"2020-11-30","end":"2022-04-30","codename":"Erbium"},"v13":{"start":"2019-10-22","maintenance":"2020-04-01","end":"2020-06-01"},"v14":{"start":"2020-04-21","lts":"2020-10-27","maintenance":"2021-10-19","end":"2023-04-30","codename":"Fermium"},"v15":{"start":"2020-10-20","maintenance":"2021-04-01","end":"2021-06-01"},"v16":{"start":"2021-04-20","lts":"2021-10-26","maintenance":"2022-10-18","end":"2023-09-11","codename":"Gallium"},"v17":{"start":"2021-10-19","maintenance":"2022-04-01","end":"2022-06-01"},"v18":{"start":"2022-04-19","lts":"2022-10-25","maintenance":"2023-10-18","end":"2025-04-30","codename":"Hydrogen"},"v19":{"start":"2022-10-18","maintenance":"2023-04-01","end":"2023-06-01"},"v20":{"start":"2023-04-18","lts":"2023-10-24","maintenance":"2024-10-22","end":"2026-04-30","codename":"Iron"},"v21":{"start":"2023-10-17","maintenance":"2024-04-01","end":"2024-06-01"},"v22":{"start":"2024-04-24","lts":"2024-10-29","maintenance":"2025-10-21","end":"2027-04-30","codename":"Jod"},"v23":{"start":"2024-10-16","maintenance":"2025-04-01","end":"2025-06-01"},"v24":{"start":"2025-05-06","lts":"2025-10-28","maintenance":"2026-10-20","end":"2028-04-30","codename":""},"v25":{"start":"2025-10-15","maintenance":"2026-04-01","end":"2026-06-01"},"v26":{"start":"2026-04-22","lts":"2026-10-28","maintenance":"2027-10-20","end":"2029-04-30","codename":""}});}),
"[project]/node_modules/electron-to-chromium/versions.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "0.20": "39",
    "0.21": "41",
    "0.22": "41",
    "0.23": "41",
    "0.24": "41",
    "0.25": "42",
    "0.26": "42",
    "0.27": "43",
    "0.28": "43",
    "0.29": "43",
    "0.30": "44",
    "0.31": "45",
    "0.32": "45",
    "0.33": "45",
    "0.34": "45",
    "0.35": "45",
    "0.36": "47",
    "0.37": "49",
    "1.0": "49",
    "1.1": "50",
    "1.2": "51",
    "1.3": "52",
    "1.4": "53",
    "1.5": "54",
    "1.6": "56",
    "1.7": "58",
    "1.8": "59",
    "2.0": "61",
    "2.1": "61",
    "3.0": "66",
    "3.1": "66",
    "4.0": "69",
    "4.1": "69",
    "4.2": "69",
    "5.0": "73",
    "6.0": "76",
    "6.1": "76",
    "7.0": "78",
    "7.1": "78",
    "7.2": "78",
    "7.3": "78",
    "8.0": "80",
    "8.1": "80",
    "8.2": "80",
    "8.3": "80",
    "8.4": "80",
    "8.5": "80",
    "9.0": "83",
    "9.1": "83",
    "9.2": "83",
    "9.3": "83",
    "9.4": "83",
    "10.0": "85",
    "10.1": "85",
    "10.2": "85",
    "10.3": "85",
    "10.4": "85",
    "11.0": "87",
    "11.1": "87",
    "11.2": "87",
    "11.3": "87",
    "11.4": "87",
    "11.5": "87",
    "12.0": "89",
    "12.1": "89",
    "12.2": "89",
    "13.0": "91",
    "13.1": "91",
    "13.2": "91",
    "13.3": "91",
    "13.4": "91",
    "13.5": "91",
    "13.6": "91",
    "14.0": "93",
    "14.1": "93",
    "14.2": "93",
    "15.0": "94",
    "15.1": "94",
    "15.2": "94",
    "15.3": "94",
    "15.4": "94",
    "15.5": "94",
    "16.0": "96",
    "16.1": "96",
    "16.2": "96",
    "17.0": "98",
    "17.1": "98",
    "17.2": "98",
    "17.3": "98",
    "17.4": "98",
    "18.0": "100",
    "18.1": "100",
    "18.2": "100",
    "18.3": "100",
    "19.0": "102",
    "19.1": "102",
    "20.0": "104",
    "20.1": "104",
    "20.2": "104",
    "20.3": "104",
    "21.0": "106",
    "21.1": "106",
    "21.2": "106",
    "21.3": "106",
    "21.4": "106",
    "22.0": "108",
    "22.1": "108",
    "22.2": "108",
    "22.3": "108",
    "23.0": "110",
    "23.1": "110",
    "23.2": "110",
    "23.3": "110",
    "24.0": "112",
    "24.1": "112",
    "24.2": "112",
    "24.3": "112",
    "24.4": "112",
    "24.5": "112",
    "24.6": "112",
    "24.7": "112",
    "24.8": "112",
    "25.0": "114",
    "25.1": "114",
    "25.2": "114",
    "25.3": "114",
    "25.4": "114",
    "25.5": "114",
    "25.6": "114",
    "25.7": "114",
    "25.8": "114",
    "25.9": "114",
    "26.0": "116",
    "26.1": "116",
    "26.2": "116",
    "26.3": "116",
    "26.4": "116",
    "26.5": "116",
    "26.6": "116",
    "27.0": "118",
    "27.1": "118",
    "27.2": "118",
    "27.3": "118",
    "28.0": "120",
    "28.1": "120",
    "28.2": "120",
    "28.3": "120",
    "29.0": "122",
    "29.1": "122",
    "29.2": "122",
    "29.3": "122",
    "29.4": "122",
    "30.0": "124",
    "30.1": "124",
    "30.2": "124",
    "30.3": "124",
    "30.4": "124",
    "30.5": "124",
    "31.0": "126",
    "31.1": "126",
    "31.2": "126",
    "31.3": "126",
    "31.4": "126",
    "31.5": "126",
    "31.6": "126",
    "31.7": "126",
    "32.0": "128",
    "32.1": "128",
    "32.2": "128",
    "32.3": "128",
    "33.0": "130",
    "33.1": "130",
    "33.2": "130",
    "33.3": "130",
    "33.4": "130",
    "34.0": "132",
    "34.1": "132",
    "34.2": "132",
    "34.3": "132",
    "34.4": "132",
    "34.5": "132",
    "35.0": "134",
    "35.1": "134",
    "35.2": "134",
    "35.3": "134",
    "35.4": "134",
    "35.5": "134",
    "35.6": "134",
    "35.7": "134",
    "36.0": "136",
    "36.1": "136",
    "36.2": "136",
    "36.3": "136",
    "36.4": "136",
    "36.5": "136",
    "36.6": "136",
    "36.7": "136",
    "36.8": "136",
    "36.9": "136",
    "37.0": "138",
    "37.1": "138",
    "37.2": "138",
    "37.3": "138",
    "37.4": "138",
    "37.5": "138",
    "37.6": "138",
    "37.7": "138",
    "38.0": "140",
    "38.1": "140",
    "38.2": "140",
    "38.3": "140",
    "38.4": "140",
    "39.0": "142"
};
}),
"[project]/node_modules/normalize-range/index.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    wrap: wrapRange,
    limit: limitRange,
    validate: validateRange,
    test: testRange,
    curry: curry,
    name: name
};
function wrapRange(min, max, value) {
    var maxLessMin = max - min;
    return ((value - min) % maxLessMin + maxLessMin) % maxLessMin + min;
}
function limitRange(min, max, value) {
    return Math.max(min, Math.min(max, value));
}
function validateRange(min, max, value, minExclusive, maxExclusive) {
    if (!testRange(min, max, value, minExclusive, maxExclusive)) {
        throw new Error(value + ' is outside of range [' + min + ',' + max + ')');
    }
    return value;
}
function testRange(min, max, value, minExclusive, maxExclusive) {
    return !(value < min || value > max || maxExclusive && value === max || minExclusive && value === min);
}
function name(min, max, minExcl, maxExcl) {
    return (minExcl ? '(' : '[') + min + ',' + max + (maxExcl ? ')' : ']');
}
function curry(min, max, minExclusive, maxExclusive) {
    var boundNameFn = name.bind(null, min, max, minExclusive, maxExclusive);
    return {
        wrap: wrapRange.bind(null, min, max),
        limit: limitRange.bind(null, min, max),
        validate: function(value) {
            return validateRange(min, max, value, minExclusive, maxExclusive);
        },
        test: function(value) {
            return testRange(min, max, value, minExclusive, maxExclusive);
        },
        toString: boundNameFn,
        name: boundNameFn
    };
}
}),
"[project]/node_modules/postcss-value-parser/lib/unit.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

var minus = "-".charCodeAt(0);
var plus = "+".charCodeAt(0);
var dot = ".".charCodeAt(0);
var exp = "e".charCodeAt(0);
var EXP = "E".charCodeAt(0);
// Check if three code points would start a number
// https://www.w3.org/TR/css-syntax-3/#starts-with-a-number
function likeNumber(value) {
    var code = value.charCodeAt(0);
    var nextCode;
    if (code === plus || code === minus) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
            return true;
        }
        var nextNextCode = value.charCodeAt(2);
        if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
            return true;
        }
        return false;
    }
    if (code === dot) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
            return true;
        }
        return false;
    }
    if (code >= 48 && code <= 57) {
        return true;
    }
    return false;
}
// Consume a number
// https://www.w3.org/TR/css-syntax-3/#consume-number
module.exports = function(value) {
    var pos = 0;
    var length = value.length;
    var code;
    var nextCode;
    var nextNextCode;
    if (length === 0 || !likeNumber(value)) {
        return false;
    }
    code = value.charCodeAt(pos);
    if (code === plus || code === minus) {
        pos++;
    }
    while(pos < length){
        code = value.charCodeAt(pos);
        if (code < 48 || code > 57) {
            break;
        }
        pos += 1;
    }
    code = value.charCodeAt(pos);
    nextCode = value.charCodeAt(pos + 1);
    if (code === dot && nextCode >= 48 && nextCode <= 57) {
        pos += 2;
        while(pos < length){
            code = value.charCodeAt(pos);
            if (code < 48 || code > 57) {
                break;
            }
            pos += 1;
        }
    }
    code = value.charCodeAt(pos);
    nextCode = value.charCodeAt(pos + 1);
    nextNextCode = value.charCodeAt(pos + 2);
    if ((code === exp || code === EXP) && (nextCode >= 48 && nextCode <= 57 || (nextCode === plus || nextCode === minus) && nextNextCode >= 48 && nextNextCode <= 57)) {
        pos += nextCode === plus || nextCode === minus ? 3 : 2;
        while(pos < length){
            code = value.charCodeAt(pos);
            if (code < 48 || code > 57) {
                break;
            }
            pos += 1;
        }
    }
    return {
        number: value.slice(0, pos),
        unit: value.slice(pos)
    };
};
}),
"[project]/node_modules/postcss-value-parser/lib/parse.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

var openParentheses = "(".charCodeAt(0);
var closeParentheses = ")".charCodeAt(0);
var singleQuote = "'".charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = "\\".charCodeAt(0);
var slash = "/".charCodeAt(0);
var comma = ",".charCodeAt(0);
var colon = ":".charCodeAt(0);
var star = "*".charCodeAt(0);
var uLower = "u".charCodeAt(0);
var uUpper = "U".charCodeAt(0);
var plus = "+".charCodeAt(0);
var isUnicodeRange = /^[a-f0-9?-]+$/i;
module.exports = function(input) {
    var tokens = [];
    var value = input;
    var next, quote, prev, token, escape, escapePos, whitespacePos, parenthesesOpenPos;
    var pos = 0;
    var code = value.charCodeAt(pos);
    var max = value.length;
    var stack = [
        {
            nodes: tokens
        }
    ];
    var balanced = 0;
    var parent;
    var name = "";
    var before = "";
    var after = "";
    while(pos < max){
        // Whitespaces
        if (code <= 32) {
            next = pos;
            do {
                next += 1;
                code = value.charCodeAt(next);
            }while (code <= 32)
            token = value.slice(pos, next);
            prev = tokens[tokens.length - 1];
            if (code === closeParentheses && balanced) {
                after = token;
            } else if (prev && prev.type === "div") {
                prev.after = token;
                prev.sourceEndIndex += token.length;
            } else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star && (!parent || parent && parent.type === "function" && parent.value !== "calc")) {
                before = token;
            } else {
                tokens.push({
                    type: "space",
                    sourceIndex: pos,
                    sourceEndIndex: next,
                    value: token
                });
            }
            pos = next;
        // Quotes
        } else if (code === singleQuote || code === doubleQuote) {
            next = pos;
            quote = code === singleQuote ? "'" : '"';
            token = {
                type: "string",
                sourceIndex: pos,
                quote: quote
            };
            do {
                escape = false;
                next = value.indexOf(quote, next + 1);
                if (~next) {
                    escapePos = next;
                    while(value.charCodeAt(escapePos - 1) === backslash){
                        escapePos -= 1;
                        escape = !escape;
                    }
                } else {
                    value += quote;
                    next = value.length - 1;
                    token.unclosed = true;
                }
            }while (escape)
            token.value = value.slice(pos + 1, next);
            token.sourceEndIndex = token.unclosed ? next : next + 1;
            tokens.push(token);
            pos = next + 1;
            code = value.charCodeAt(pos);
        // Comments
        } else if (code === slash && value.charCodeAt(pos + 1) === star) {
            next = value.indexOf("*/", pos);
            token = {
                type: "comment",
                sourceIndex: pos,
                sourceEndIndex: next + 2
            };
            if (next === -1) {
                token.unclosed = true;
                next = value.length;
                token.sourceEndIndex = next;
            }
            token.value = value.slice(pos + 2, next);
            tokens.push(token);
            pos = next + 2;
            code = value.charCodeAt(pos);
        // Operation within calc
        } else if ((code === slash || code === star) && parent && parent.type === "function" && parent.value === "calc") {
            token = value[pos];
            tokens.push({
                type: "word",
                sourceIndex: pos - before.length,
                sourceEndIndex: pos + token.length,
                value: token
            });
            pos += 1;
            code = value.charCodeAt(pos);
        // Dividers
        } else if (code === slash || code === comma || code === colon) {
            token = value[pos];
            tokens.push({
                type: "div",
                sourceIndex: pos - before.length,
                sourceEndIndex: pos + token.length,
                value: token,
                before: before,
                after: ""
            });
            before = "";
            pos += 1;
            code = value.charCodeAt(pos);
        // Open parentheses
        } else if (openParentheses === code) {
            // Whitespaces after open parentheses
            next = pos;
            do {
                next += 1;
                code = value.charCodeAt(next);
            }while (code <= 32)
            parenthesesOpenPos = pos;
            token = {
                type: "function",
                sourceIndex: pos - name.length,
                value: name,
                before: value.slice(parenthesesOpenPos + 1, next)
            };
            pos = next;
            if (name === "url" && code !== singleQuote && code !== doubleQuote) {
                next -= 1;
                do {
                    escape = false;
                    next = value.indexOf(")", next + 1);
                    if (~next) {
                        escapePos = next;
                        while(value.charCodeAt(escapePos - 1) === backslash){
                            escapePos -= 1;
                            escape = !escape;
                        }
                    } else {
                        value += ")";
                        next = value.length - 1;
                        token.unclosed = true;
                    }
                }while (escape)
                // Whitespaces before closed
                whitespacePos = next;
                do {
                    whitespacePos -= 1;
                    code = value.charCodeAt(whitespacePos);
                }while (code <= 32)
                if (parenthesesOpenPos < whitespacePos) {
                    if (pos !== whitespacePos + 1) {
                        token.nodes = [
                            {
                                type: "word",
                                sourceIndex: pos,
                                sourceEndIndex: whitespacePos + 1,
                                value: value.slice(pos, whitespacePos + 1)
                            }
                        ];
                    } else {
                        token.nodes = [];
                    }
                    if (token.unclosed && whitespacePos + 1 !== next) {
                        token.after = "";
                        token.nodes.push({
                            type: "space",
                            sourceIndex: whitespacePos + 1,
                            sourceEndIndex: next,
                            value: value.slice(whitespacePos + 1, next)
                        });
                    } else {
                        token.after = value.slice(whitespacePos + 1, next);
                        token.sourceEndIndex = next;
                    }
                } else {
                    token.after = "";
                    token.nodes = [];
                }
                pos = next + 1;
                token.sourceEndIndex = token.unclosed ? next : pos;
                code = value.charCodeAt(pos);
                tokens.push(token);
            } else {
                balanced += 1;
                token.after = "";
                token.sourceEndIndex = pos + 1;
                tokens.push(token);
                stack.push(token);
                tokens = token.nodes = [];
                parent = token;
            }
            name = "";
        // Close parentheses
        } else if (closeParentheses === code && balanced) {
            pos += 1;
            code = value.charCodeAt(pos);
            parent.after = after;
            parent.sourceEndIndex += after.length;
            after = "";
            balanced -= 1;
            stack[stack.length - 1].sourceEndIndex = pos;
            stack.pop();
            parent = stack[balanced];
            tokens = parent.nodes;
        // Words
        } else {
            next = pos;
            do {
                if (code === backslash) {
                    next += 1;
                }
                next += 1;
                code = value.charCodeAt(next);
            }while (next < max && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === star && parent && parent.type === "function" && parent.value === "calc" || code === slash && parent.type === "function" && parent.value === "calc" || code === closeParentheses && balanced))
            token = value.slice(pos, next);
            if (openParentheses === code) {
                name = token;
            } else if ((uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) && plus === token.charCodeAt(1) && isUnicodeRange.test(token.slice(2))) {
                tokens.push({
                    type: "unicode-range",
                    sourceIndex: pos,
                    sourceEndIndex: next,
                    value: token
                });
            } else {
                tokens.push({
                    type: "word",
                    sourceIndex: pos,
                    sourceEndIndex: next,
                    value: token
                });
            }
            pos = next;
        }
    }
    for(pos = stack.length - 1; pos; pos -= 1){
        stack[pos].unclosed = true;
        stack[pos].sourceEndIndex = value.length;
    }
    return stack[0].nodes;
};
}),
"[project]/node_modules/postcss-value-parser/lib/walk.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function walk(nodes, cb, bubble) {
    var i, max, node, result;
    for(i = 0, max = nodes.length; i < max; i += 1){
        node = nodes[i];
        if (!bubble) {
            result = cb(node, i, nodes);
        }
        if (result !== false && node.type === "function" && Array.isArray(node.nodes)) {
            walk(node.nodes, cb, bubble);
        }
        if (bubble) {
            cb(node, i, nodes);
        }
    }
};
}),
"[project]/node_modules/postcss-value-parser/lib/stringify.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

function stringifyNode(node, custom) {
    var type = node.type;
    var value = node.value;
    var buf;
    var customResult;
    if (custom && (customResult = custom(node)) !== undefined) {
        return customResult;
    } else if (type === "word" || type === "space") {
        return value;
    } else if (type === "string") {
        buf = node.quote || "";
        return buf + value + (node.unclosed ? "" : buf);
    } else if (type === "comment") {
        return "/*" + value + (node.unclosed ? "" : "*/");
    } else if (type === "div") {
        return (node.before || "") + value + (node.after || "");
    } else if (Array.isArray(node.nodes)) {
        buf = stringify(node.nodes, custom);
        if (type !== "function") {
            return buf;
        }
        return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
    }
    return value;
}
function stringify(nodes, custom) {
    var result, i;
    if (Array.isArray(nodes)) {
        result = "";
        for(i = nodes.length - 1; ~i; i -= 1){
            result = stringifyNode(nodes[i], custom) + result;
        }
        return result;
    }
    return stringifyNode(nodes, custom);
}
module.exports = stringify;
}),
"[project]/node_modules/postcss-value-parser/lib/index.js [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

var parse = __turbopack_context__.r("[project]/node_modules/postcss-value-parser/lib/parse.js [postcss] (ecmascript)");
var walk = __turbopack_context__.r("[project]/node_modules/postcss-value-parser/lib/walk.js [postcss] (ecmascript)");
var stringify = __turbopack_context__.r("[project]/node_modules/postcss-value-parser/lib/stringify.js [postcss] (ecmascript)");
function ValueParser(value) {
    if (this instanceof ValueParser) {
        this.nodes = parse(value);
        return this;
    }
    return new ValueParser(value);
}
ValueParser.prototype.toString = function() {
    return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
};
ValueParser.prototype.walk = function(cb, bubble) {
    walk(this.nodes, cb, bubble);
    return this;
};
ValueParser.unit = __turbopack_context__.r("[project]/node_modules/postcss-value-parser/lib/unit.js [postcss] (ecmascript)");
ValueParser.walk = walk;
ValueParser.stringify = stringify;
module.exports = ValueParser;
}),
"[project]/node_modules/fraction.js/fraction.cjs [postcss] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * @license Fraction.js v4.3.7 31/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/ /**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <numerator>, 1 => <denominator> ]
 * [ n => <numerator>, d => <denominator> ]
 *
 * Integer form
 * - Single integer value
 *
 * Double form
 * - Single double value
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 *
 * var f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */ (function(root) {
    "use strict";
    // Maximum search depth for cyclic rational numbers. 2000 should be more than enough.
    // Example: 1/7 = 0.(142857) has 6 repeating decimal places.
    // If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
    var MAX_CYCLE_LEN = 2000;
    // Parsed data to avoid calling "new" all the time
    var P = {
        "s": 1,
        "n": 0,
        "d": 1
    };
    function assign(n, s) {
        if (isNaN(n = parseInt(n, 10))) {
            throw InvalidParameter();
        }
        return n * s;
    }
    // Creates a new Fraction internally without the need of the bulky constructor
    function newFraction(n, d) {
        if (d === 0) {
            throw DivisionByZero();
        }
        var f = Object.create(Fraction.prototype);
        f["s"] = n < 0 ? -1 : 1;
        n = n < 0 ? -n : n;
        var a = gcd(n, d);
        f["n"] = n / a;
        f["d"] = d / a;
        return f;
    }
    function factorize(num) {
        var factors = {};
        var n = num;
        var i = 2;
        var s = 4;
        while(s <= n){
            while(n % i === 0){
                n /= i;
                factors[i] = (factors[i] || 0) + 1;
            }
            s += 1 + 2 * i++;
        }
        if (n !== num) {
            if (n > 1) factors[n] = (factors[n] || 0) + 1;
        } else {
            factors[num] = (factors[num] || 0) + 1;
        }
        return factors;
    }
    var parse = function(p1, p2) {
        var n = 0, d = 1, s = 1;
        var v = 0, w = 0, x = 0, y = 1, z = 1;
        var A = 0, B = 1;
        var C = 1, D = 1;
        var N = 10000000;
        var M;
        if (p1 === undefined || p1 === null) {
        /* void */ } else if (p2 !== undefined) {
            n = p1;
            d = p2;
            s = n * d;
            if (n % 1 !== 0 || d % 1 !== 0) {
                throw NonIntegerParameter();
            }
        } else switch(typeof p1){
            case "object":
                {
                    if ("d" in p1 && "n" in p1) {
                        n = p1["n"];
                        d = p1["d"];
                        if ("s" in p1) n *= p1["s"];
                    } else if (0 in p1) {
                        n = p1[0];
                        if (1 in p1) d = p1[1];
                    } else {
                        throw InvalidParameter();
                    }
                    s = n * d;
                    break;
                }
            case "number":
                {
                    if (p1 < 0) {
                        s = p1;
                        p1 = -p1;
                    }
                    if (p1 % 1 === 0) {
                        n = p1;
                    } else if (p1 > 0) {
                        if (p1 >= 1) {
                            z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                            p1 /= z;
                        }
                        // Using Farey Sequences
                        // http://www.johndcook.com/blog/2010/10/20/best-rational-approximation/
                        while(B <= N && D <= N){
                            M = (A + C) / (B + D);
                            if (p1 === M) {
                                if (B + D <= N) {
                                    n = A + C;
                                    d = B + D;
                                } else if (D > B) {
                                    n = C;
                                    d = D;
                                } else {
                                    n = A;
                                    d = B;
                                }
                                break;
                            } else {
                                if (p1 > M) {
                                    A += C;
                                    B += D;
                                } else {
                                    C += A;
                                    D += B;
                                }
                                if (B > N) {
                                    n = C;
                                    d = D;
                                } else {
                                    n = A;
                                    d = B;
                                }
                            }
                        }
                        n *= z;
                    } else if (isNaN(p1) || isNaN(p2)) {
                        d = n = NaN;
                    }
                    break;
                }
            case "string":
                {
                    B = p1.match(/\d+|./g);
                    if (B === null) throw InvalidParameter();
                    if (B[A] === '-') {
                        s = -1;
                        A++;
                    } else if (B[A] === '+') {
                        A++;
                    }
                    if (B.length === A + 1) {
                        w = assign(B[A++], s);
                    } else if (B[A + 1] === '.' || B[A] === '.') {
                        if (B[A] !== '.') {
                            v = assign(B[A++], s);
                        }
                        A++;
                        // Check for decimal places
                        if (A + 1 === B.length || B[A + 1] === '(' && B[A + 3] === ')' || B[A + 1] === "'" && B[A + 3] === "'") {
                            w = assign(B[A], s);
                            y = Math.pow(10, B[A].length);
                            A++;
                        }
                        // Check for repeating places
                        if (B[A] === '(' && B[A + 2] === ')' || B[A] === "'" && B[A + 2] === "'") {
                            x = assign(B[A + 1], s);
                            z = Math.pow(10, B[A + 1].length) - 1;
                            A += 3;
                        }
                    } else if (B[A + 1] === '/' || B[A + 1] === ':') {
                        w = assign(B[A], s);
                        y = assign(B[A + 2], 1);
                        A += 3;
                    } else if (B[A + 3] === '/' && B[A + 1] === ' ') {
                        v = assign(B[A], s);
                        w = assign(B[A + 2], s);
                        y = assign(B[A + 4], 1);
                        A += 5;
                    }
                    if (B.length <= A) {
                        d = y * z;
                        s = /* void */ n = x + d * v + z * w;
                        break;
                    }
                /* Fall through on error */ }
            default:
                throw InvalidParameter();
        }
        if (d === 0) {
            throw DivisionByZero();
        }
        P["s"] = s < 0 ? -1 : 1;
        P["n"] = Math.abs(n);
        P["d"] = Math.abs(d);
    };
    function modpow(b, e, m) {
        var r = 1;
        for(; e > 0; b = b * b % m, e >>= 1){
            if (e & 1) {
                r = r * b % m;
            }
        }
        return r;
    }
    function cycleLen(n, d) {
        for(; d % 2 === 0; d /= 2){}
        for(; d % 5 === 0; d /= 5){}
        if (d === 1) return 0;
        // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
        // 10^(d-1) % d == 1
        // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
        // as we want to translate the numbers to strings.
        var rem = 10 % d;
        var t = 1;
        for(; rem !== 1; t++){
            rem = rem * 10 % d;
            if (t > MAX_CYCLE_LEN) return 0; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
        }
        return t;
    }
    function cycleStart(n, d, len) {
        var rem1 = 1;
        var rem2 = modpow(10, len, d);
        for(var t = 0; t < 300; t++){
            // Solve 10^s == 10^(s+t) (mod d)
            if (rem1 === rem2) return t;
            rem1 = rem1 * 10 % d;
            rem2 = rem2 * 10 % d;
        }
        return 0;
    }
    function gcd(a, b) {
        if (!a) return b;
        if (!b) return a;
        while(1){
            a %= b;
            if (!a) return b;
            b %= a;
            if (!b) return a;
        }
    }
    ;
    /**
   * Module constructor
   *
   * @constructor
   * @param {number|Fraction=} a
   * @param {number=} b
   */ function Fraction(a, b) {
        parse(a, b);
        if (this instanceof Fraction) {
            a = gcd(P["d"], P["n"]); // Abuse variable a
            this["s"] = P["s"];
            this["n"] = P["n"] / a;
            this["d"] = P["d"] / a;
        } else {
            return newFraction(P['s'] * P['n'], P['d']);
        }
    }
    var DivisionByZero = function() {
        return new Error("Division by Zero");
    };
    var InvalidParameter = function() {
        return new Error("Invalid argument");
    };
    var NonIntegerParameter = function() {
        return new Error("Parameters must be integer");
    };
    Fraction.prototype = {
        "s": 1,
        "n": 0,
        "d": 1,
        /**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     **/ "abs": function() {
            return newFraction(this["n"], this["d"]);
        },
        /**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     **/ "neg": function() {
            return newFraction(-this["s"] * this["n"], this["d"]);
        },
        /**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     **/ "add": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     **/ "sub": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     **/ "mul": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     **/ "div": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["d"], this["d"] * P["n"]);
        },
        /**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     **/ "clone": function() {
            return newFraction(this['s'] * this['n'], this['d']);
        },
        /**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     **/ "mod": function(a, b) {
            if (isNaN(this['n']) || isNaN(this['d'])) {
                return new Fraction(NaN);
            }
            if (a === undefined) {
                return newFraction(this["s"] * this["n"] % this["d"], 1);
            }
            parse(a, b);
            if (0 === P["n"] && 0 === this["d"]) {
                throw DivisionByZero();
            }
            /*
       * First silly attempt, kinda slow
       *
       return that["sub"]({
       "n": num["n"] * Math.floor((this.n / this.d) / (num.n / num.d)),
       "d": num["d"],
       "s": this["s"]
       });*/ /*
       * New attempt: a1 / b1 = a2 / b2 * q + r
       * => b2 * a1 = a2 * b1 * q + b1 * b2 * r
       * => (b2 * a1 % a2 * b1) / (b1 * b2)
       */ return newFraction(this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */ "gcd": function(a, b) {
            parse(a, b);
            // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)
            return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */ "lcm": function(a, b) {
            parse(a, b);
            // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)
            if (P["n"] === 0 && this["n"] === 0) {
                return newFraction(0, 1);
            }
            return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
        },
        /**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
     **/ "ceil": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) {
                return new Fraction(NaN);
            }
            return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor() => (4 / 1)
     **/ "floor": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) {
                return new Fraction(NaN);
            }
            return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round() => (4 / 1)
     **/ "round": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) {
                return new Fraction(NaN);
            }
            return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Rounds a rational number to a multiple of another rational number
     *
     * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
     **/ "roundTo": function(a, b) {
            /*
      k * x/y ≤ a/b < (k+1) * x/y
      ⇔ k ≤ a/b / (x/y) < (k+1)
      ⇔ k = floor(a/b * y/x)
      */ parse(a, b);
            return newFraction(this['s'] * Math.round(this['n'] * P['d'] / (this['d'] * P['n'])) * P['n'], P['d']);
        },
        /**
     * Gets the inverse of the fraction, means numerator and denominator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     **/ "inverse": function() {
            return newFraction(this["s"] * this["d"], this["n"]);
        },
        /**
     * Calculates the fraction to some rational exponent, if possible
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */ "pow": function(a, b) {
            parse(a, b);
            // Trivial case when exp is an integer
            if (P['d'] === 1) {
                if (P['s'] < 0) {
                    return newFraction(Math.pow(this['s'] * this["d"], P['n']), Math.pow(this["n"], P['n']));
                } else {
                    return newFraction(Math.pow(this['s'] * this["n"], P['n']), Math.pow(this["d"], P['n']));
                }
            }
            // Negative roots become complex
            //     (-a/b)^(c/d) = x
            // <=> (-1)^(c/d) * (a/b)^(c/d) = x
            // <=> (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x         # rotate 1 by 180°
            // <=> (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula in Q ( https://proofwiki.org/wiki/De_Moivre%27s_Formula/Rational_Index )
            // From which follows that only for c=0 the root is non-complex. c/d is a reduced fraction, so that sin(c/dpi)=0 occurs for d=1, which is handled by our trivial case.
            if (this['s'] < 0) return null;
            // Now prime factor n and d
            var N = factorize(this['n']);
            var D = factorize(this['d']);
            // Exponentiate and take root for n and d individually
            var n = 1;
            var d = 1;
            for(var k in N){
                if (k === '1') continue;
                if (k === '0') {
                    n = 0;
                    break;
                }
                N[k] *= P['n'];
                if (N[k] % P['d'] === 0) {
                    N[k] /= P['d'];
                } else return null;
                n *= Math.pow(k, N[k]);
            }
            for(var k in D){
                if (k === '1') continue;
                D[k] *= P['n'];
                if (D[k] % P['d'] === 0) {
                    D[k] /= P['d'];
                } else return null;
                d *= Math.pow(k, D[k]);
            }
            if (P['s'] < 0) {
                return newFraction(d, n);
            }
            return newFraction(n, d);
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "equals": function(a, b) {
            parse(a, b);
            return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"]; // Same as compare() === 0
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "compare": function(a, b) {
            parse(a, b);
            var t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
            return (0 < t) - (t < 0);
        },
        "simplify": function(eps) {
            if (isNaN(this['n']) || isNaN(this['d'])) {
                return this;
            }
            eps = eps || 0.001;
            var thisABS = this['abs']();
            var cont = thisABS['toContinued']();
            for(var i = 1; i < cont.length; i++){
                var s = newFraction(cont[i - 1], 1);
                for(var k = i - 2; k >= 0; k--){
                    s = s['inverse']()['add'](cont[k]);
                }
                if (Math.abs(s['sub'](thisABS).valueOf()) < eps) {
                    return s['mul'](this['s']);
                }
            }
            return this;
        },
        /**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */ "divisible": function(a, b) {
            parse(a, b);
            return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
        },
        /**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     **/ 'valueOf': function() {
            return this["s"] * this["n"] / this["d"];
        },
        /**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
     **/ 'toFraction': function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) {
                str += '-';
            }
            if (d === 1) {
                str += n;
            } else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    str += " ";
                    n %= d;
                }
                str += n;
                str += '/';
                str += d;
            }
            return str;
        },
        /**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     **/ 'toLatex': function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) {
                str += '-';
            }
            if (d === 1) {
                str += n;
            } else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    n %= d;
                }
                str += "\\frac{";
                str += n;
                str += '}{';
                str += d;
                str += '}';
            }
            return str;
        },
        /**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */ 'toContinued': function() {
            var t;
            var a = this['n'];
            var b = this['d'];
            var res = [];
            if (isNaN(a) || isNaN(b)) {
                return res;
            }
            do {
                res.push(Math.floor(a / b));
                t = a % b;
                a = b;
                b = t;
            }while (a !== 1)
            return res;
        },
        /**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     **/ 'toString': function(dec) {
            var N = this["n"];
            var D = this["d"];
            if (isNaN(N) || isNaN(D)) {
                return "NaN";
            }
            dec = dec || 15; // 15 = decimal places when no repetation
            var cycLen = cycleLen(N, D); // Cycle length
            var cycOff = cycleStart(N, D, cycLen); // Cycle start
            var str = this['s'] < 0 ? "-" : "";
            str += N / D | 0;
            N %= D;
            N *= 10;
            if (N) str += ".";
            if (cycLen) {
                for(var i = cycOff; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += "(";
                for(var i = cycLen; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += ")";
            } else {
                for(var i = dec; N && i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
            }
            return str;
        }
    };
    if ("TURBOPACK compile-time truthy", 1) {
        Object.defineProperty(exports, "__esModule", {
            'value': true
        });
        exports['default'] = Fraction;
        module['exports'] = Fraction;
    } else //TURBOPACK unreachable
    ;
})(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
];

//# sourceMappingURL=_14347196._.js.map