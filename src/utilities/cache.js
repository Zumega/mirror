const _CACHE_ = {
    functions: {},
    api: {}
};

export {
    memoize
}

function memoize (fn, args = [], clear = false) {
    if (!fn) {
        return new Error('No Function to memoize.');
    }

    const memCache = _CACHE_.functions;
    const fnName = fn.name || null;
    const argName = args.map(x => {
        if (!x) {
            return;
        }

        if (typeof x.getTime === 'function') {
            x = x.getTime();
        }
        x = encodeURI((x + ''));

        return x;
    }).join('_');

    if (fnName && argName && clear) {
        // Clear cache of function -> args
        if (memCache[fnName] && memCache[fnName][argName]) {
            memCache[fnName][argName] = undefined;
        }
    } else if (fnName && !argName && clear) {
        // Clear cache of function
        if (memCache[fnName]) {
            memCache[fnName] = undefined;
        }
    }

    // Set cache
    if (!memCache[fnName]) {
        memCache[fnName] = {};
    }

    if (!memCache[fnName][argName]) {
        memCache[fnName][argName] = fn(...args);
    }

    return memCache[fnName][argName];
}