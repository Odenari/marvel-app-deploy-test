function bc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver(l => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function ef(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Cs = { exports: {} },
  vl = {},
  _s = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ir = Symbol.for('react.element'),
  tf = Symbol.for('react.portal'),
  nf = Symbol.for('react.fragment'),
  rf = Symbol.for('react.strict_mode'),
  lf = Symbol.for('react.profiler'),
  of = Symbol.for('react.provider'),
  uf = Symbol.for('react.context'),
  sf = Symbol.for('react.forward_ref'),
  af = Symbol.for('react.suspense'),
  cf = Symbol.for('react.memo'),
  ff = Symbol.for('react.lazy'),
  uu = Symbol.iterator;
function df(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (uu && e[uu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ps = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ns = Object.assign,
  Ls = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ls),
    (this.updater = n || Ps);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Rs() {}
Rs.prototype = dn.prototype;
function oo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ls),
    (this.updater = n || Ps);
}
var uo = (oo.prototype = new Rs());
uo.constructor = oo;
Ns(uo, dn.prototype);
uo.isPureReactComponent = !0;
var su = Array.isArray,
  js = Object.prototype.hasOwnProperty,
  so = { current: null },
  zs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ts(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      js.call(t, r) && !zs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ir,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: so.current,
  };
}
function pf(e, t) {
  return {
    $$typeof: ir,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ao(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ir;
}
function hf(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var au = /\/+/g;
function Dl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? hf('' + e.key)
    : t.toString(36);
}
function jr(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ir:
          case tf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + Dl(o, 0) : r),
      su(l)
        ? ((n = ''),
          e != null && (n = e.replace(au, '$&/') + '/'),
          jr(l, t, n, '', function (a) {
            return a;
          }))
        : l != null &&
          (ao(l) &&
            (l = pf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(au, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), su(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Dl(i, u);
      o += jr(i, t, n, s, l);
    }
  else if (((s = df(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Dl(i, u++)), (o += jr(i, t, n, s, l));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function pr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    jr(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function mf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  zr = { transition: null },
  vf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: zr,
    ReactCurrentOwner: so,
  };
T.Children = {
  map: pr,
  forEach: function (e, t, n) {
    pr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ao(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
T.Component = dn;
T.Fragment = nf;
T.Profiler = lf;
T.PureComponent = oo;
T.StrictMode = rf;
T.Suspense = af;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vf;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Ns({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = so.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      js.call(t, s) &&
        !zs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: ir, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: uf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: of, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = Ts;
T.createFactory = function (e) {
  var t = Ts.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: sf, render: e };
};
T.isValidElement = ao;
T.lazy = function (e) {
  return { $$typeof: ff, _payload: { _status: -1, _result: e }, _init: mf };
};
T.memo = function (e, t) {
  return { $$typeof: cf, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
T.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
T.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
T.useId = function () {
  return ae.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ae.current.useRef(e);
};
T.useState = function (e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ae.current.useTransition();
};
T.version = '18.2.0';
_s.exports = T;
var x = _s.exports;
const Os = ef(x),
  yf = bc({ __proto__: null, default: Os }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gf = x,
  wf = Symbol.for('react.element'),
  Sf = Symbol.for('react.fragment'),
  kf = Object.prototype.hasOwnProperty,
  xf = gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function Is(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) kf.call(t, r) && !Ef.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: wf,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: xf.current,
  };
}
vl.Fragment = Sf;
vl.jsx = Is;
vl.jsxs = Is;
Cs.exports = vl;
var k = Cs.exports,
  fi = {},
  Ms = { exports: {} },
  Se = {},
  Ds = { exports: {} },
  Us = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, j) {
    var z = _.length;
    _.push(j);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        J = _[Q];
      if (0 < l(J, j)) (_[Q] = j), (_[z] = J), (z = Q);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var j = _[0],
      z = _.pop();
    if (z !== j) {
      _[0] = z;
      e: for (var Q = 0, J = _.length, fr = J >>> 1; Q < fr; ) {
        var St = 2 * (Q + 1) - 1,
          Ml = _[St],
          kt = St + 1,
          dr = _[kt];
        if (0 > l(Ml, z))
          kt < J && 0 > l(dr, Ml)
            ? ((_[Q] = dr), (_[kt] = z), (Q = kt))
            : ((_[Q] = Ml), (_[St] = z), (Q = St));
        else if (kt < J && 0 > l(dr, z)) (_[Q] = dr), (_[kt] = z), (Q = kt);
        else break e;
      }
    }
    return j;
  }
  function l(_, j) {
    var z = _.sortIndex - j.sortIndex;
    return z !== 0 ? z : _.id - j.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    h = null,
    m = 3,
    g = !1,
    w = !1,
    v = !1,
    N = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var j = n(a); j !== null; ) {
      if (j.callback === null) r(a);
      else if (j.startTime <= _)
        r(a), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = n(a);
    }
  }
  function y(_) {
    if (((v = !1), d(_), !w))
      if (n(s) !== null) (w = !0), Ol(E);
      else {
        var j = n(a);
        j !== null && Il(y, j.startTime - _);
      }
  }
  function E(_, j) {
    (w = !1), v && ((v = !1), f(R), (R = -1)), (g = !0);
    var z = m;
    try {
      for (
        d(j), h = n(s);
        h !== null && (!(h.expirationTime > j) || (_ && !Le()));

      ) {
        var Q = h.callback;
        if (typeof Q == 'function') {
          (h.callback = null), (m = h.priorityLevel);
          var J = Q(h.expirationTime <= j);
          (j = e.unstable_now()),
            typeof J == 'function' ? (h.callback = J) : h === n(s) && r(s),
            d(j);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var fr = !0;
      else {
        var St = n(a);
        St !== null && Il(y, St.startTime - j), (fr = !1);
      }
      return fr;
    } finally {
      (h = null), (m = z), (g = !1);
    }
  }
  var P = !1,
    L = null,
    R = -1,
    H = 5,
    O = -1;
  function Le() {
    return !(e.unstable_now() - O < H);
  }
  function yn() {
    if (L !== null) {
      var _ = e.unstable_now();
      O = _;
      var j = !0;
      try {
        j = L(!0, _);
      } finally {
        j ? gn() : ((P = !1), (L = null));
      }
    } else P = !1;
  }
  var gn;
  if (typeof c == 'function')
    gn = function () {
      c(yn);
    };
  else if (typeof MessageChannel < 'u') {
    var ou = new MessageChannel(),
      qc = ou.port2;
    (ou.port1.onmessage = yn),
      (gn = function () {
        qc.postMessage(null);
      });
  } else
    gn = function () {
      N(yn, 0);
    };
  function Ol(_) {
    (L = _), P || ((P = !0), gn());
  }
  function Il(_, j) {
    R = N(function () {
      _(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Ol(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (H = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var z = m;
      m = j;
      try {
        return _();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, j) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var z = m;
      m = _;
      try {
        return j();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (_, j, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? Q + z : Q))
          : (z = Q),
        _)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = z + J),
        (_ = {
          id: p++,
          callback: j,
          priorityLevel: _,
          startTime: z,
          expirationTime: J,
          sortIndex: -1,
        }),
        z > Q
          ? ((_.sortIndex = z),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (v ? (f(R), (R = -1)) : (v = !0), Il(y, z - Q)))
          : ((_.sortIndex = J), t(s, _), w || g || ((w = !0), Ol(E))),
        _
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (_) {
      var j = m;
      return function () {
        var z = m;
        m = j;
        try {
          return _.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(Us);
Ds.exports = Us;
var Cf = Ds.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fs = x,
  we = Cf;
function S(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var $s = new Set(),
  An = {};
function Mt(e, t) {
  ln(e, t), ln(e + 'Capture', t);
}
function ln(e, t) {
  for (An[e] = t, e = 0; e < t.length; e++) $s.add(t[e]);
}
var Ke = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  di = Object.prototype.hasOwnProperty,
  _f =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  cu = {},
  fu = {};
function Pf(e) {
  return di.call(fu, e)
    ? !0
    : di.call(cu, e)
    ? !1
    : _f.test(e)
    ? (fu[e] = !0)
    : ((cu[e] = !0), !1);
}
function Nf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Lf(e, t, n, r) {
  if (t === null || typeof t > 'u' || Nf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var co = /[\-:]([a-z])/g;
function fo(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(co, fo);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(co, fo);
    ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(co, fo);
  ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function po(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Lf(t, n, l, r) && (n = null),
    r || l === null
      ? Pf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Fs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hr = Symbol.for('react.element'),
  Bt = Symbol.for('react.portal'),
  At = Symbol.for('react.fragment'),
  ho = Symbol.for('react.strict_mode'),
  pi = Symbol.for('react.profiler'),
  Bs = Symbol.for('react.provider'),
  As = Symbol.for('react.context'),
  mo = Symbol.for('react.forward_ref'),
  hi = Symbol.for('react.suspense'),
  mi = Symbol.for('react.suspense_list'),
  vo = Symbol.for('react.memo'),
  qe = Symbol.for('react.lazy'),
  Ws = Symbol.for('react.offscreen'),
  du = Symbol.iterator;
function wn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (du && e[du]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var W = Object.assign,
  Ul;
function Nn(e) {
  if (Ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ul = (t && t[1]) || '';
    }
  return (
    `
` +
    Ul +
    e
  );
}
var Fl = !1;
function $l(e, t) {
  if (!e || Fl) return '';
  Fl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Fl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Nn(e) : '';
}
function Rf(e) {
  switch (e.tag) {
    case 5:
      return Nn(e.type);
    case 16:
      return Nn('Lazy');
    case 13:
      return Nn('Suspense');
    case 19:
      return Nn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = $l(e.type, !1)), e;
    case 11:
      return (e = $l(e.type.render, !1)), e;
    case 1:
      return (e = $l(e.type, !0)), e;
    default:
      return '';
  }
}
function vi(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case At:
      return 'Fragment';
    case Bt:
      return 'Portal';
    case pi:
      return 'Profiler';
    case ho:
      return 'StrictMode';
    case hi:
      return 'Suspense';
    case mi:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case As:
        return (e.displayName || 'Context') + '.Consumer';
      case Bs:
        return (e._context.displayName || 'Context') + '.Provider';
      case mo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case vo:
        return (
          (t = e.displayName || null), t !== null ? t : vi(e.type) || 'Memo'
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return vi(e(t));
        } catch {}
    }
  return null;
}
function jf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return vi(t);
    case 8:
      return t === ho ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Vs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function zf(e) {
  var t = Vs(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function mr(e) {
  e._valueTracker || (e._valueTracker = zf(e));
}
function Hs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Vs(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yi(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Qs(e, t) {
  (t = t.checked), t != null && po(e, 'checked', t, !1);
}
function gi(e, t) {
  Qs(e, t);
  var n = ht(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? wi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && wi(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function wi(e, t, n) {
  (t !== 'number' || Wr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ln = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Si(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function mu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: ht(n) };
}
function Ks(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function vu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Ys(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ki(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ys(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var vr,
  Xs = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        vr = vr || document.createElement('div'),
          vr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = vr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Tn).forEach(function (e) {
  Tf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tn[t] = Tn[e]);
  });
});
function Gs(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Tn.hasOwnProperty(e) && Tn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Zs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Gs(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Of = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xi(e, t) {
  if (t) {
    if (Of[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(S(62));
  }
}
function Ei(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Ci = null;
function yo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _i = null,
  bt = null,
  en = null;
function yu(e) {
  if ((e = sr(e))) {
    if (typeof _i != 'function') throw Error(S(280));
    var t = e.stateNode;
    t && ((t = kl(t)), _i(e.stateNode, e.type, t));
  }
}
function Js(e) {
  bt ? (en ? en.push(e) : (en = [e])) : (bt = e);
}
function qs() {
  if (bt) {
    var e = bt,
      t = en;
    if (((en = bt = null), yu(e), t)) for (e = 0; e < t.length; e++) yu(t[e]);
  }
}
function bs(e, t) {
  return e(t);
}
function ea() {}
var Bl = !1;
function ta(e, t, n) {
  if (Bl) return e(t, n);
  Bl = !0;
  try {
    return bs(e, t, n);
  } finally {
    (Bl = !1), (bt !== null || en !== null) && (ea(), qs());
  }
}
function Vn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(S(231, t, typeof n));
  return n;
}
var Pi = !1;
if (Ke)
  try {
    var Sn = {};
    Object.defineProperty(Sn, 'passive', {
      get: function () {
        Pi = !0;
      },
    }),
      window.addEventListener('test', Sn, Sn),
      window.removeEventListener('test', Sn, Sn);
  } catch {
    Pi = !1;
  }
function If(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var On = !1,
  Vr = null,
  Hr = !1,
  Ni = null,
  Mf = {
    onError: function (e) {
      (On = !0), (Vr = e);
    },
  };
function Df(e, t, n, r, l, i, o, u, s) {
  (On = !1), (Vr = null), If.apply(Mf, arguments);
}
function Uf(e, t, n, r, l, i, o, u, s) {
  if ((Df.apply(this, arguments), On)) {
    if (On) {
      var a = Vr;
      (On = !1), (Vr = null);
    } else throw Error(S(198));
    Hr || ((Hr = !0), (Ni = a));
  }
}
function Dt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function na(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function gu(e) {
  if (Dt(e) !== e) throw Error(S(188));
}
function Ff(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return gu(l), e;
        if (i === r) return gu(l), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function ra(e) {
  return (e = Ff(e)), e !== null ? la(e) : null;
}
function la(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = la(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ia = we.unstable_scheduleCallback,
  wu = we.unstable_cancelCallback,
  $f = we.unstable_shouldYield,
  Bf = we.unstable_requestPaint,
  K = we.unstable_now,
  Af = we.unstable_getCurrentPriorityLevel,
  go = we.unstable_ImmediatePriority,
  oa = we.unstable_UserBlockingPriority,
  Qr = we.unstable_NormalPriority,
  Wf = we.unstable_LowPriority,
  ua = we.unstable_IdlePriority,
  yl = null,
  $e = null;
function Vf(e) {
  if ($e && typeof $e.onCommitFiberRoot == 'function')
    try {
      $e.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Kf,
  Hf = Math.log,
  Qf = Math.LN2;
function Kf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hf(e) / Qf) | 0)) | 0;
}
var yr = 64,
  gr = 4194304;
function Rn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Kr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Rn(u)) : ((i &= o), i !== 0 && (r = Rn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Rn(o)) : i !== 0 && (r = Rn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Yf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Yf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Li(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function sa() {
  var e = yr;
  return (yr <<= 1), !(yr & 4194240) && (yr = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function or(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function Gf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function wo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function aa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ca,
  So,
  fa,
  da,
  pa,
  Ri = !1,
  wr = [],
  it = null,
  ot = null,
  ut = null,
  Hn = new Map(),
  Qn = new Map(),
  et = [],
  Zf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Su(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      it = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ot = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ut = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Hn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Qn.delete(t.pointerId);
  }
}
function kn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = sr(t)), t !== null && So(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Jf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (it = kn(it, e, t, n, r, l)), !0;
    case 'dragenter':
      return (ot = kn(ot, e, t, n, r, l)), !0;
    case 'mouseover':
      return (ut = kn(ut, e, t, n, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return Hn.set(i, kn(Hn.get(i) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), Qn.set(i, kn(Qn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ha(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = Dt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = na(n)), t !== null)) {
          (e.blockedOn = t),
            pa(e.priority, function () {
              fa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Tr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ci = r), n.target.dispatchEvent(r), (Ci = null);
    } else return (t = sr(n)), t !== null && So(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ku(e, t, n) {
  Tr(e) && n.delete(t);
}
function qf() {
  (Ri = !1),
    it !== null && Tr(it) && (it = null),
    ot !== null && Tr(ot) && (ot = null),
    ut !== null && Tr(ut) && (ut = null),
    Hn.forEach(ku),
    Qn.forEach(ku);
}
function xn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ri ||
      ((Ri = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, qf)));
}
function Kn(e) {
  function t(l) {
    return xn(l, e);
  }
  if (0 < wr.length) {
    xn(wr[0], e);
    for (var n = 1; n < wr.length; n++) {
      var r = wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && xn(it, e),
      ot !== null && xn(ot, e),
      ut !== null && xn(ut, e),
      Hn.forEach(t),
      Qn.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    ha(n), n.blockedOn === null && et.shift();
}
var tn = Ze.ReactCurrentBatchConfig,
  Yr = !0;
function bf(e, t, n, r) {
  var l = M,
    i = tn.transition;
  tn.transition = null;
  try {
    (M = 1), ko(e, t, n, r);
  } finally {
    (M = l), (tn.transition = i);
  }
}
function ed(e, t, n, r) {
  var l = M,
    i = tn.transition;
  tn.transition = null;
  try {
    (M = 4), ko(e, t, n, r);
  } finally {
    (M = l), (tn.transition = i);
  }
}
function ko(e, t, n, r) {
  if (Yr) {
    var l = ji(e, t, n, r);
    if (l === null) Jl(e, t, r, Xr, n), Su(e, r);
    else if (Jf(l, e, t, n, r)) r.stopPropagation();
    else if ((Su(e, r), t & 4 && -1 < Zf.indexOf(e))) {
      for (; l !== null; ) {
        var i = sr(l);
        if (
          (i !== null && ca(i),
          (i = ji(e, t, n, r)),
          i === null && Jl(e, t, r, Xr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Jl(e, t, r, null, n);
  }
}
var Xr = null;
function ji(e, t, n, r) {
  if (((Xr = null), (e = yo(r)), (e = Ct(e)), e !== null))
    if (((t = Dt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = na(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xr = e), null;
}
function ma(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Af()) {
        case go:
          return 1;
        case oa:
          return 4;
        case Qr:
        case Wf:
          return 16;
        case ua:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  xo = null,
  Or = null;
function va() {
  if (Or) return Or;
  var e,
    t = xo,
    n = t.length,
    r,
    l = 'value' in nt ? nt.value : nt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ir(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Sr() {
  return !0;
}
function xu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Sr
        : xu),
      (this.isPropagationStopped = xu),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Sr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Sr));
      },
      persist: function () {},
      isPersistent: Sr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Eo = ke(pn),
  ur = W({}, pn, { view: 0, detail: 0 }),
  td = ke(ur),
  Wl,
  Vl,
  En,
  gl = W({}, ur, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Co,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== En &&
            (En && e.type === 'mousemove'
              ? ((Wl = e.screenX - En.screenX), (Vl = e.screenY - En.screenY))
              : (Vl = Wl = 0),
            (En = e)),
          Wl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Vl;
    },
  }),
  Eu = ke(gl),
  nd = W({}, gl, { dataTransfer: 0 }),
  rd = ke(nd),
  ld = W({}, ur, { relatedTarget: 0 }),
  Hl = ke(ld),
  id = W({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  od = ke(id),
  ud = W({}, pn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sd = ke(ud),
  ad = W({}, pn, { data: 0 }),
  Cu = ke(ad),
  cd = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  fd = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  dd = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function pd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dd[e]) ? !!t[e] : !1;
}
function Co() {
  return pd;
}
var hd = W({}, ur, {
    key: function (e) {
      if (e.key) {
        var t = cd[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ir(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? fd[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Co,
    charCode: function (e) {
      return e.type === 'keypress' ? Ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ir(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  md = ke(hd),
  vd = W({}, gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _u = ke(vd),
  yd = W({}, ur, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Co,
  }),
  gd = ke(yd),
  wd = W({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sd = ke(wd),
  kd = W({}, gl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xd = ke(kd),
  Ed = [9, 13, 27, 32],
  _o = Ke && 'CompositionEvent' in window,
  In = null;
Ke && 'documentMode' in document && (In = document.documentMode);
var Cd = Ke && 'TextEvent' in window && !In,
  ya = Ke && (!_o || (In && 8 < In && 11 >= In)),
  Pu = String.fromCharCode(32),
  Nu = !1;
function ga(e, t) {
  switch (e) {
    case 'keyup':
      return Ed.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function wa(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Wt = !1;
function _d(e, t) {
  switch (e) {
    case 'compositionend':
      return wa(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Nu = !0), Pu);
    case 'textInput':
      return (e = t.data), e === Pu && Nu ? null : e;
    default:
      return null;
  }
}
function Pd(e, t) {
  if (Wt)
    return e === 'compositionend' || (!_o && ga(e, t))
      ? ((e = va()), (Or = xo = nt = null), (Wt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return ya && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Nd = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Nd[e.type] : t === 'textarea';
}
function Sa(e, t, n, r) {
  Js(r),
    (t = Gr(t, 'onChange')),
    0 < t.length &&
      ((n = new Eo('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Mn = null,
  Yn = null;
function Ld(e) {
  za(e, 0);
}
function wl(e) {
  var t = Qt(e);
  if (Hs(t)) return e;
}
function Rd(e, t) {
  if (e === 'change') return t;
}
var ka = !1;
if (Ke) {
  var Ql;
  if (Ke) {
    var Kl = 'oninput' in document;
    if (!Kl) {
      var Ru = document.createElement('div');
      Ru.setAttribute('oninput', 'return;'),
        (Kl = typeof Ru.oninput == 'function');
    }
    Ql = Kl;
  } else Ql = !1;
  ka = Ql && (!document.documentMode || 9 < document.documentMode);
}
function ju() {
  Mn && (Mn.detachEvent('onpropertychange', xa), (Yn = Mn = null));
}
function xa(e) {
  if (e.propertyName === 'value' && wl(Yn)) {
    var t = [];
    Sa(t, Yn, e, yo(e)), ta(Ld, t);
  }
}
function jd(e, t, n) {
  e === 'focusin'
    ? (ju(), (Mn = t), (Yn = n), Mn.attachEvent('onpropertychange', xa))
    : e === 'focusout' && ju();
}
function zd(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return wl(Yn);
}
function Td(e, t) {
  if (e === 'click') return wl(t);
}
function Od(e, t) {
  if (e === 'input' || e === 'change') return wl(t);
}
function Id(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == 'function' ? Object.is : Id;
function Xn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!di.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function zu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tu(e, t) {
  var n = zu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = zu(n);
  }
}
function Ea(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ea(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ca() {
  for (var e = window, t = Wr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wr(e.document);
  }
  return t;
}
function Po(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Md(e) {
  var t = Ca(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ea(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Po(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Tu(n, i));
        var o = Tu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Dd = Ke && 'documentMode' in document && 11 >= document.documentMode,
  Vt = null,
  zi = null,
  Dn = null,
  Ti = !1;
function Ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ti ||
    Vt == null ||
    Vt !== Wr(r) ||
    ((r = Vt),
    'selectionStart' in r && Po(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dn && Xn(Dn, r)) ||
      ((Dn = r),
      (r = Gr(zi, 'onSelect')),
      0 < r.length &&
        ((t = new Eo('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vt))));
}
function kr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ht = {
    animationend: kr('Animation', 'AnimationEnd'),
    animationiteration: kr('Animation', 'AnimationIteration'),
    animationstart: kr('Animation', 'AnimationStart'),
    transitionend: kr('Transition', 'TransitionEnd'),
  },
  Yl = {},
  _a = {};
Ke &&
  ((_a = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ht.animationend.animation,
    delete Ht.animationiteration.animation,
    delete Ht.animationstart.animation),
  'TransitionEvent' in window || delete Ht.transitionend.transition);
function Sl(e) {
  if (Yl[e]) return Yl[e];
  if (!Ht[e]) return e;
  var t = Ht[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _a) return (Yl[e] = t[n]);
  return e;
}
var Pa = Sl('animationend'),
  Na = Sl('animationiteration'),
  La = Sl('animationstart'),
  Ra = Sl('transitionend'),
  ja = new Map(),
  Iu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function vt(e, t) {
  ja.set(e, t), Mt(t, [e]);
}
for (var Xl = 0; Xl < Iu.length; Xl++) {
  var Gl = Iu[Xl],
    Ud = Gl.toLowerCase(),
    Fd = Gl[0].toUpperCase() + Gl.slice(1);
  vt(Ud, 'on' + Fd);
}
vt(Pa, 'onAnimationEnd');
vt(Na, 'onAnimationIteration');
vt(La, 'onAnimationStart');
vt('dblclick', 'onDoubleClick');
vt('focusin', 'onFocus');
vt('focusout', 'onBlur');
vt(Ra, 'onTransitionEnd');
ln('onMouseEnter', ['mouseout', 'mouseover']);
ln('onMouseLeave', ['mouseout', 'mouseover']);
ln('onPointerEnter', ['pointerout', 'pointerover']);
ln('onPointerLeave', ['pointerout', 'pointerover']);
Mt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Mt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Mt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Mt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Mt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Mt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var jn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  $d = new Set('cancel close invalid load scroll toggle'.split(' ').concat(jn));
function Mu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Uf(r, t, void 0, e), (e.currentTarget = null);
}
function za(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Mu(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Mu(l, u, a), (i = s);
        }
    }
  }
  if (Hr) throw ((e = Ni), (Hr = !1), (Ni = null), e);
}
function U(e, t) {
  var n = t[Ui];
  n === void 0 && (n = t[Ui] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Ta(t, e, 2, !1), n.add(r));
}
function Zl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ta(n, e, r, t);
}
var xr = '_reactListening' + Math.random().toString(36).slice(2);
function Gn(e) {
  if (!e[xr]) {
    (e[xr] = !0),
      $s.forEach(function (n) {
        n !== 'selectionchange' && ($d.has(n) || Zl(n, !1, e), Zl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xr] || ((t[xr] = !0), Zl('selectionchange', !1, t));
  }
}
function Ta(e, t, n, r) {
  switch (ma(t)) {
    case 1:
      var l = bf;
      break;
    case 4:
      l = ed;
      break;
    default:
      l = ko;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Pi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Jl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Ct(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ta(function () {
    var a = i,
      p = yo(n),
      h = [];
    e: {
      var m = ja.get(e);
      if (m !== void 0) {
        var g = Eo,
          w = e;
        switch (e) {
          case 'keypress':
            if (Ir(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = md;
            break;
          case 'focusin':
            (w = 'focus'), (g = Hl);
            break;
          case 'focusout':
            (w = 'blur'), (g = Hl);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Hl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Eu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = rd;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = gd;
            break;
          case Pa:
          case Na:
          case La:
            g = od;
            break;
          case Ra:
            g = Sd;
            break;
          case 'scroll':
            g = td;
            break;
          case 'wheel':
            g = xd;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = sd;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = _u;
        }
        var v = (t & 4) !== 0,
          N = !v && e === 'scroll',
          f = v ? (m !== null ? m + 'Capture' : null) : m;
        v = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = Vn(c, f)), y != null && v.push(Zn(c, y, d)))),
            N)
          )
            break;
          c = c.return;
        }
        0 < v.length &&
          ((m = new g(m, w, null, n, p)), h.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          m &&
            n !== Ci &&
            (w = n.relatedTarget || n.fromElement) &&
            (Ct(w) || w[Ye]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = a),
              (w = w ? Ct(w) : null),
              w !== null &&
                ((N = Dt(w)), w !== N || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = a)),
          g !== w)
        ) {
          if (
            ((v = Eu),
            (y = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = _u),
              (y = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (N = g == null ? m : Qt(g)),
            (d = w == null ? m : Qt(w)),
            (m = new v(y, c + 'leave', g, n, p)),
            (m.target = N),
            (m.relatedTarget = d),
            (y = null),
            Ct(p) === a &&
              ((v = new v(f, c + 'enter', w, n, p)),
              (v.target = d),
              (v.relatedTarget = N),
              (y = v)),
            (N = y),
            g && w)
          )
            t: {
              for (v = g, f = w, c = 0, d = v; d; d = Ft(d)) c++;
              for (d = 0, y = f; y; y = Ft(y)) d++;
              for (; 0 < c - d; ) (v = Ft(v)), c--;
              for (; 0 < d - c; ) (f = Ft(f)), d--;
              for (; c--; ) {
                if (v === f || (f !== null && v === f.alternate)) break t;
                (v = Ft(v)), (f = Ft(f));
              }
              v = null;
            }
          else v = null;
          g !== null && Du(h, m, g, v, !1),
            w !== null && N !== null && Du(h, N, w, v, !0);
        }
      }
      e: {
        if (
          ((m = a ? Qt(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && m.type === 'file'))
        )
          var E = Rd;
        else if (Lu(m))
          if (ka) E = Od;
          else {
            E = zd;
            var P = jd;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (E = Td);
        if (E && (E = E(e, a))) {
          Sa(h, E, n, p);
          break e;
        }
        P && P(e, m, a),
          e === 'focusout' &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === 'number' &&
            wi(m, 'number', m.value);
      }
      switch (((P = a ? Qt(a) : window), e)) {
        case 'focusin':
          (Lu(P) || P.contentEditable === 'true') &&
            ((Vt = P), (zi = a), (Dn = null));
          break;
        case 'focusout':
          Dn = zi = Vt = null;
          break;
        case 'mousedown':
          Ti = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Ti = !1), Ou(h, n, p);
          break;
        case 'selectionchange':
          if (Dd) break;
        case 'keydown':
        case 'keyup':
          Ou(h, n, p);
      }
      var L;
      if (_o)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart';
              break e;
            case 'compositionend':
              R = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              R = 'onCompositionUpdate';
              break e;
          }
          R = void 0;
        }
      else
        Wt
          ? ga(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart');
      R &&
        (ya &&
          n.locale !== 'ko' &&
          (Wt || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && Wt && (L = va())
            : ((nt = p),
              (xo = 'value' in nt ? nt.value : nt.textContent),
              (Wt = !0))),
        (P = Gr(a, R)),
        0 < P.length &&
          ((R = new Cu(R, e, null, n, p)),
          h.push({ event: R, listeners: P }),
          L ? (R.data = L) : ((L = wa(n)), L !== null && (R.data = L)))),
        (L = Cd ? _d(e, n) : Pd(e, n)) &&
          ((a = Gr(a, 'onBeforeInput')),
          0 < a.length &&
            ((p = new Cu('onBeforeInput', 'beforeinput', null, n, p)),
            h.push({ event: p, listeners: a }),
            (p.data = L)));
    }
    za(h, t);
  });
}
function Zn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Vn(e, n)),
      i != null && r.unshift(Zn(e, i, l)),
      (i = Vn(e, t)),
      i != null && r.push(Zn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ft(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Du(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Vn(n, i)), s != null && o.unshift(Zn(n, s, u)))
        : l || ((s = Vn(n, i)), s != null && o.push(Zn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Bd = /\r\n?/g,
  Ad = /\u0000|\uFFFD/g;
function Uu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Bd,
      `
`
    )
    .replace(Ad, '');
}
function Er(e, t, n) {
  if (((t = Uu(t)), Uu(e) !== t && n)) throw Error(S(425));
}
function Zr() {}
var Oi = null,
  Ii = null;
function Mi(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Di = typeof setTimeout == 'function' ? setTimeout : void 0,
  Wd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Fu = typeof Promise == 'function' ? Promise : void 0,
  Vd =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Fu < 'u'
      ? function (e) {
          return Fu.resolve(null).then(e).catch(Hd);
        }
      : Di;
function Hd(e) {
  setTimeout(function () {
    throw e;
  });
}
function ql(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Kn(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Kn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function $u(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2),
  Fe = '__reactFiber$' + hn,
  Jn = '__reactProps$' + hn,
  Ye = '__reactContainer$' + hn,
  Ui = '__reactEvents$' + hn,
  Qd = '__reactListeners$' + hn,
  Kd = '__reactHandles$' + hn;
function Ct(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Fe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $u(e); e !== null; ) {
          if ((n = e[Fe])) return n;
          e = $u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function sr(e) {
  return (
    (e = e[Fe] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function kl(e) {
  return e[Jn] || null;
}
var Fi = [],
  Kt = -1;
function yt(e) {
  return { current: e };
}
function F(e) {
  0 > Kt || ((e.current = Fi[Kt]), (Fi[Kt] = null), Kt--);
}
function D(e, t) {
  Kt++, (Fi[Kt] = e.current), (e.current = t);
}
var mt = {},
  oe = yt(mt),
  pe = yt(!1),
  jt = mt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Jr() {
  F(pe), F(oe);
}
function Bu(e, t, n) {
  if (oe.current !== mt) throw Error(S(168));
  D(oe, t), D(pe, n);
}
function Oa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, jf(e) || 'Unknown', l));
  return W({}, n, r);
}
function qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (jt = oe.current),
    D(oe, e),
    D(pe, pe.current),
    !0
  );
}
function Au(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = Oa(e, t, jt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(pe),
      F(oe),
      D(oe, e))
    : F(pe),
    D(pe, n);
}
var We = null,
  xl = !1,
  bl = !1;
function Ia(e) {
  We === null ? (We = [e]) : We.push(e);
}
function Yd(e) {
  (xl = !0), Ia(e);
}
function gt() {
  if (!bl && We !== null) {
    bl = !0;
    var e = 0,
      t = M;
    try {
      var n = We;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (We = null), (xl = !1);
    } catch (l) {
      throw (We !== null && (We = We.slice(e + 1)), ia(go, gt), l);
    } finally {
      (M = t), (bl = !1);
    }
  }
  return null;
}
var Yt = [],
  Xt = 0,
  br = null,
  el = 0,
  xe = [],
  Ee = 0,
  zt = null,
  Ve = 1,
  He = '';
function xt(e, t) {
  (Yt[Xt++] = el), (Yt[Xt++] = br), (br = e), (el = t);
}
function Ma(e, t, n) {
  (xe[Ee++] = Ve), (xe[Ee++] = He), (xe[Ee++] = zt), (zt = e);
  var r = Ve;
  e = He;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ve = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (He = i + e);
  } else (Ve = (1 << i) | (n << l) | r), (He = e);
}
function No(e) {
  e.return !== null && (xt(e, 1), Ma(e, 1, 0));
}
function Lo(e) {
  for (; e === br; )
    (br = Yt[--Xt]), (Yt[Xt] = null), (el = Yt[--Xt]), (Yt[Xt] = null);
  for (; e === zt; )
    (zt = xe[--Ee]),
      (xe[Ee] = null),
      (He = xe[--Ee]),
      (xe[Ee] = null),
      (Ve = xe[--Ee]),
      (xe[Ee] = null);
}
var ge = null,
  ye = null,
  $ = !1,
  Te = null;
function Da(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ye = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: Ve, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function $i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bi(e) {
  if ($) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Wu(e, t)) {
        if ($i(e)) throw Error(S(418));
        t = st(n.nextSibling);
        var r = ge;
        t && Wu(e, t)
          ? Da(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ge = e));
      }
    } else {
      if ($i(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ge = e);
    }
  }
}
function Vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function Cr(e) {
  if (e !== ge) return !1;
  if (!$) return Vu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Mi(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if ($i(e)) throw (Ua(), Error(S(418)));
    for (; t; ) Da(e, t), (t = st(t.nextSibling));
  }
  if ((Vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ye = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function Ua() {
  for (var e = ye; e; ) e = st(e.nextSibling);
}
function un() {
  (ye = ge = null), ($ = !1);
}
function Ro(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var Xd = Ze.ReactCurrentBatchConfig;
function je(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var tl = yt(null),
  nl = null,
  Gt = null,
  jo = null;
function zo() {
  jo = Gt = nl = null;
}
function To(e) {
  var t = tl.current;
  F(tl), (e._currentValue = t);
}
function Ai(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nn(e, t) {
  (nl = e),
    (jo = Gt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (jo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gt === null)) {
      if (nl === null) throw Error(S(308));
      (Gt = e), (nl.dependencies = { lanes: 0, firstContext: e });
    } else Gt = Gt.next = e;
  return t;
}
var _t = null;
function Oo(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function Fa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Oo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function Io(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $a(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Oo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Mr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wo(e, n);
  }
}
function Hu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function rl(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== o &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (p = a = s = null), (u = i);
    do {
      var m = u.lane,
        g = u.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            v = u;
          switch (((m = t), (g = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == 'function')) {
                h = w.call(g, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (m = typeof w == 'function' ? w.call(g, h, m) : w),
                m == null)
              )
                break e;
              h = W({}, h, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = g), (s = h)) : (p = p.next = g),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Ot |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Qu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var Ba = new Fs.Component().refs;
function Wi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = Qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Ie(t, e, l, r), Mr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Ie(t, e, l, r), Mr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ft(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Ie(t, e, r, n), Mr(t, e, r));
  },
};
function Ku(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xn(n, r) || !Xn(l, i)
      : !0
  );
}
function Aa(e, t, n) {
  var r = !1,
    l = mt,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Pe(i))
      : ((l = he(t) ? jt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? on(e, l) : mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Yu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function Vi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ba), Io(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = Pe(i))
    : ((i = he(t) ? jt : oe.current), (l.context = on(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Wi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && El.enqueueReplaceState(l, l.state, null),
      rl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Cn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === Ba && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function _r(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Xu(e) {
  var t = e._init;
  return t(e._payload);
}
function Wa(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, y) {
    return c === null || c.tag !== 6
      ? ((c = oi(d, f.mode, y)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, y) {
    var E = d.type;
    return E === At
      ? p(f, c, d.props.children, y, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === qe &&
            Xu(E) === c.type))
      ? ((y = l(c, d.props)), (y.ref = Cn(f, c, d)), (y.return = f), y)
      : ((y = Ar(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = Cn(f, c, d)),
        (y.return = f),
        y);
  }
  function a(f, c, d, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = ui(d, f.mode, y)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function p(f, c, d, y, E) {
    return c === null || c.tag !== 7
      ? ((c = Lt(d, f.mode, y, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function h(f, c, d) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = oi('' + c, f.mode, d)), (c.return = f), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case hr:
          return (
            (d = Ar(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = Cn(f, null, c)),
            (d.return = f),
            d
          );
        case Bt:
          return (c = ui(c, f.mode, d)), (c.return = f), c;
        case qe:
          var y = c._init;
          return h(f, y(c._payload), d);
      }
      if (Ln(c) || wn(c))
        return (c = Lt(c, f.mode, d, null)), (c.return = f), c;
      _r(f, c);
    }
    return null;
  }
  function m(f, c, d, y) {
    var E = c !== null ? c.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return E !== null ? null : u(f, c, '' + d, y);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case hr:
          return d.key === E ? s(f, c, d, y) : null;
        case Bt:
          return d.key === E ? a(f, c, d, y) : null;
        case qe:
          return (E = d._init), m(f, c, E(d._payload), y);
      }
      if (Ln(d) || wn(d)) return E !== null ? null : p(f, c, d, y, null);
      _r(f, d);
    }
    return null;
  }
  function g(f, c, d, y, E) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (f = f.get(d) || null), u(c, f, '' + y, E);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case hr:
          return (f = f.get(y.key === null ? d : y.key) || null), s(c, f, y, E);
        case Bt:
          return (f = f.get(y.key === null ? d : y.key) || null), a(c, f, y, E);
        case qe:
          var P = y._init;
          return g(f, c, d, P(y._payload), E);
      }
      if (Ln(y) || wn(y)) return (f = f.get(d) || null), p(c, f, y, E, null);
      _r(c, y);
    }
    return null;
  }
  function w(f, c, d, y) {
    for (
      var E = null, P = null, L = c, R = (c = 0), H = null;
      L !== null && R < d.length;
      R++
    ) {
      L.index > R ? ((H = L), (L = null)) : (H = L.sibling);
      var O = m(f, L, d[R], y);
      if (O === null) {
        L === null && (L = H);
        break;
      }
      e && L && O.alternate === null && t(f, L),
        (c = i(O, c, R)),
        P === null ? (E = O) : (P.sibling = O),
        (P = O),
        (L = H);
    }
    if (R === d.length) return n(f, L), $ && xt(f, R), E;
    if (L === null) {
      for (; R < d.length; R++)
        (L = h(f, d[R], y)),
          L !== null &&
            ((c = i(L, c, R)), P === null ? (E = L) : (P.sibling = L), (P = L));
      return $ && xt(f, R), E;
    }
    for (L = r(f, L); R < d.length; R++)
      (H = g(L, f, R, d[R], y)),
        H !== null &&
          (e && H.alternate !== null && L.delete(H.key === null ? R : H.key),
          (c = i(H, c, R)),
          P === null ? (E = H) : (P.sibling = H),
          (P = H));
    return (
      e &&
        L.forEach(function (Le) {
          return t(f, Le);
        }),
      $ && xt(f, R),
      E
    );
  }
  function v(f, c, d, y) {
    var E = wn(d);
    if (typeof E != 'function') throw Error(S(150));
    if (((d = E.call(d)), d == null)) throw Error(S(151));
    for (
      var P = (E = null), L = c, R = (c = 0), H = null, O = d.next();
      L !== null && !O.done;
      R++, O = d.next()
    ) {
      L.index > R ? ((H = L), (L = null)) : (H = L.sibling);
      var Le = m(f, L, O.value, y);
      if (Le === null) {
        L === null && (L = H);
        break;
      }
      e && L && Le.alternate === null && t(f, L),
        (c = i(Le, c, R)),
        P === null ? (E = Le) : (P.sibling = Le),
        (P = Le),
        (L = H);
    }
    if (O.done) return n(f, L), $ && xt(f, R), E;
    if (L === null) {
      for (; !O.done; R++, O = d.next())
        (O = h(f, O.value, y)),
          O !== null &&
            ((c = i(O, c, R)), P === null ? (E = O) : (P.sibling = O), (P = O));
      return $ && xt(f, R), E;
    }
    for (L = r(f, L); !O.done; R++, O = d.next())
      (O = g(L, f, R, O.value, y)),
        O !== null &&
          (e && O.alternate !== null && L.delete(O.key === null ? R : O.key),
          (c = i(O, c, R)),
          P === null ? (E = O) : (P.sibling = O),
          (P = O));
    return (
      e &&
        L.forEach(function (yn) {
          return t(f, yn);
        }),
      $ && xt(f, R),
      E
    );
  }
  function N(f, c, d, y) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === At &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case hr:
          e: {
            for (var E = d.key, P = c; P !== null; ) {
              if (P.key === E) {
                if (((E = d.type), E === At)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (c = l(P, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === qe &&
                    Xu(E) === P.type)
                ) {
                  n(f, P.sibling),
                    (c = l(P, d.props)),
                    (c.ref = Cn(f, P, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === At
              ? ((c = Lt(d.props.children, f.mode, y, d.key)),
                (c.return = f),
                (f = c))
              : ((y = Ar(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = Cn(f, c, d)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Bt:
          e: {
            for (P = d.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ui(d, f.mode, y)), (c.return = f), (f = c);
          }
          return o(f);
        case qe:
          return (P = d._init), N(f, c, P(d._payload), y);
      }
      if (Ln(d)) return w(f, c, d, y);
      if (wn(d)) return v(f, c, d, y);
      _r(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = oi(d, f.mode, y)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return N;
}
var sn = Wa(!0),
  Va = Wa(!1),
  ar = {},
  Be = yt(ar),
  qn = yt(ar),
  bn = yt(ar);
function Pt(e) {
  if (e === ar) throw Error(S(174));
  return e;
}
function Mo(e, t) {
  switch ((D(bn, t), D(qn, e), D(Be, ar), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ki(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ki(t, e));
  }
  F(Be), D(Be, t);
}
function an() {
  F(Be), F(qn), F(bn);
}
function Ha(e) {
  Pt(bn.current);
  var t = Pt(Be.current),
    n = ki(t, e.type);
  t !== n && (D(qn, e), D(Be, n));
}
function Do(e) {
  qn.current === e && (F(Be), F(qn));
}
var B = yt(0);
function ll(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ei = [];
function Uo() {
  for (var e = 0; e < ei.length; e++)
    ei[e]._workInProgressVersionPrimary = null;
  ei.length = 0;
}
var Dr = Ze.ReactCurrentDispatcher,
  ti = Ze.ReactCurrentBatchConfig,
  Tt = 0,
  A = null,
  G = null,
  q = null,
  il = !1,
  Un = !1,
  er = 0,
  Gd = 0;
function re() {
  throw Error(S(321));
}
function Fo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function $o(e, t, n, r, l, i) {
  if (
    ((Tt = i),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Dr.current = e === null || e.memoizedState === null ? bd : ep),
    (e = n(r, l)),
    Un)
  ) {
    i = 0;
    do {
      if (((Un = !1), (er = 0), 25 <= i)) throw Error(S(301));
      (i += 1),
        (q = G = null),
        (t.updateQueue = null),
        (Dr.current = tp),
        (e = n(r, l));
    } while (Un);
  }
  if (
    ((Dr.current = ol),
    (t = G !== null && G.next !== null),
    (Tt = 0),
    (q = G = A = null),
    (il = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Bo() {
  var e = er !== 0;
  return (er = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (A.memoizedState = q = e) : (q = q.next = e), q;
}
function Ne() {
  if (G === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? A.memoizedState : q.next;
  if (t !== null) (q = t), (G = e);
  else {
    if (e === null) throw Error(S(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (A.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function tr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ni(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var p = a.lane;
      if ((Tt & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (A.lanes |= p),
          (Ot |= p);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Me(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (Ot |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ri(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Me(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Qa() {}
function Ka(e, t) {
  var n = A,
    r = Ne(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Ao(Ga.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      nr(9, Xa.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(S(349));
    Tt & 30 || Ya(n, t, l);
  }
  return l;
}
function Ya(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Za(t) && Ja(e);
}
function Ga(e, t, n) {
  return n(function () {
    Za(t) && Ja(e);
  });
}
function Za(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Ja(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Gu(e) {
  var t = Ue();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function nr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qa() {
  return Ne().memoizedState;
}
function Ur(e, t, n, r) {
  var l = Ue();
  (A.flags |= e),
    (l.memoizedState = nr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Cl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (((i = o.destroy), r !== null && Fo(r, o.deps))) {
      l.memoizedState = nr(t, n, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = nr(1 | t, n, i, r));
}
function Zu(e, t) {
  return Ur(8390656, 8, e, t);
}
function Ao(e, t) {
  return Cl(2048, 8, e, t);
}
function ba(e, t) {
  return Cl(4, 2, e, t);
}
function ec(e, t) {
  return Cl(4, 4, e, t);
}
function tc(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function nc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Cl(4, 4, tc.bind(null, t, e), n)
  );
}
function Wo() {}
function rc(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lc(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ic(e, t, n) {
  return Tt & 21
    ? (Me(n, t) || ((n = sa()), (A.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Zd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ti.transition;
  ti.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (ti.transition = r);
  }
}
function oc() {
  return Ne().memoizedState;
}
function Jd(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    uc(e))
  )
    sc(t, n);
  else if (((n = Fa(e, t, n, r)), n !== null)) {
    var l = se();
    Ie(n, e, r, l), ac(n, t, r);
  }
}
function qd(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (uc(e)) sc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Oo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fa(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), ac(n, t, r));
  }
}
function uc(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function sc(e, t) {
  Un = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ac(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wo(e, n);
  }
}
var ol = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  bd = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: Zu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ur(4194308, 4, tc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ur(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ur(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Jd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Gu,
    useDebugValue: Wo,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = Gu(!1),
        t = e[0];
      return (e = Zd.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Ue();
      if ($) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(S(349));
        Tt & 30 || Ya(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Zu(Ga.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        nr(9, Xa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = b.identifierPrefix;
      if ($) {
        var n = He,
          r = Ve;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = er++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Gd++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ep = {
    readContext: Pe,
    useCallback: rc,
    useContext: Pe,
    useEffect: Ao,
    useImperativeHandle: nc,
    useInsertionEffect: ba,
    useLayoutEffect: ec,
    useMemo: lc,
    useReducer: ni,
    useRef: qa,
    useState: function () {
      return ni(tr);
    },
    useDebugValue: Wo,
    useDeferredValue: function (e) {
      var t = Ne();
      return ic(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ni(tr)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Qa,
    useSyncExternalStore: Ka,
    useId: oc,
    unstable_isNewReconciler: !1,
  },
  tp = {
    readContext: Pe,
    useCallback: rc,
    useContext: Pe,
    useEffect: Ao,
    useImperativeHandle: nc,
    useInsertionEffect: ba,
    useLayoutEffect: ec,
    useMemo: lc,
    useReducer: ri,
    useRef: qa,
    useState: function () {
      return ri(tr);
    },
    useDebugValue: Wo,
    useDeferredValue: function (e) {
      var t = Ne();
      return G === null ? (t.memoizedState = e) : ic(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ri(tr)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Qa,
    useSyncExternalStore: Ka,
    useId: oc,
    unstable_isNewReconciler: !1,
  };
function cn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Rf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function li(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var np = typeof WeakMap == 'function' ? WeakMap : Map;
function cc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      sl || ((sl = !0), (eo = r)), Hi(e, t);
    }),
    n
  );
}
function fc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Hi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Hi(e, t),
          typeof r != 'function' &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function Ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new np();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = vp.bind(null, e, t, n)), t.then(e, e));
}
function qu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rp = Ze.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Va(t, null, n, r) : sn(t, e.child, n, r);
}
function es(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    nn(t, l),
    (r = $o(e, t, n, r, i, l)),
    (n = Bo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && n && No(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function ts(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Zo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), dc(e, t, i, r, l))
      : ((e = Ar(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Xn), n(o, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function dc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Xn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Qi(e, t, n, r, l);
}
function pc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Jt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Jt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(Jt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Jt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function hc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qi(e, t, n, r, l) {
  var i = he(n) ? jt : oe.current;
  return (
    (i = on(t, i)),
    nn(t, l),
    (n = $o(e, t, n, r, i, l)),
    (r = Bo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && r && No(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function ns(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    qr(t);
  } else i = !1;
  if ((nn(t, l), t.stateNode === null))
    Fr(e, t), Aa(t, n, r), Vi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Pe(a))
      : ((a = he(n) ? jt : oe.current), (a = on(t, a)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && Yu(t, o, r, a)),
      (be = !1);
    var m = t.memoizedState;
    (o.state = m),
      rl(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || be
        ? (typeof p == 'function' && (Wi(t, n, p, r), (s = t.memoizedState)),
          (u = be || Ku(t, n, u, r, m, s, a))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      $a(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : je(t.type, u)),
      (o.props = a),
      (h = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Pe(s))
        : ((s = he(n) ? jt : oe.current), (s = on(t, s)));
    var g = n.getDerivedStateFromProps;
    (p =
      typeof g == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== h || m !== s) && Yu(t, o, r, s)),
      (be = !1),
      (m = t.memoizedState),
      (o.state = m),
      rl(t, r, o, l);
    var w = t.memoizedState;
    u !== h || m !== w || pe.current || be
      ? (typeof g == 'function' && (Wi(t, n, g, r), (w = t.memoizedState)),
        (a = be || Ku(t, n, a, r, m, w, s) || !1)
          ? (p ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ki(e, t, n, r, i, l);
}
function Ki(e, t, n, r, l, i) {
  hc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Au(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (rp.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = sn(t, e.child, null, i)), (t.child = sn(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && Au(t, n, !0),
    t.child
  );
}
function mc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bu(e, t.context, !1),
    Mo(e, t.containerInfo);
}
function rs(e, t, n, r, l) {
  return un(), Ro(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Yi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(B, l & 1),
    e === null)
  )
    return (
      Bi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Nl(o, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Xi(n)),
              (t.memoizedState = Yi),
              e)
            : Vo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return lp(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dt(u, i)) : ((i = Lt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Xi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Yi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Vo(e, t) {
  return (
    (t = Nl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Pr(e, t, n, r) {
  return (
    r !== null && Ro(r),
    sn(t, e.child, null, n),
    (e = Vo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lp(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = li(Error(S(422)))), Pr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Nl({ mode: 'visible', children: r.children }, l, 0, null)),
        (i = Lt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && sn(t, e.child, null, o),
        (t.child.memoizedState = Xi(o)),
        (t.memoizedState = Yi),
        i);
  if (!(t.mode & 1)) return Pr(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(S(419))), (r = li(i, r, void 0)), Pr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Ie(r, e, l, -1));
    }
    return Go(), (r = li(Error(S(421)))), Pr(e, t, o, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ye = st(l.nextSibling)),
      (ge = t),
      ($ = !0),
      (Te = null),
      e !== null &&
        ((xe[Ee++] = Ve),
        (xe[Ee++] = He),
        (xe[Ee++] = zt),
        (Ve = e.id),
        (He = e.overflow),
        (zt = t)),
      (t = Vo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ls(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ai(e.return, t, n);
}
function ii(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function yc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ls(e, n, t);
        else if (e.tag === 19) ls(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ll(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ii(t, !1, l, n, i);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ll(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ii(t, !0, n, null, i);
        break;
      case 'together':
        ii(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ip(e, t, n) {
  switch (t.tag) {
    case 3:
      mc(t), un();
      break;
    case 5:
      Ha(t);
      break;
    case 1:
      he(t.type) && qr(t);
      break;
    case 4:
      Mo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(tl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? vc(e, t, n)
          : (D(B, B.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      D(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), pc(e, t, n);
  }
  return Ge(e, t, n);
}
var gc, Gi, wc, Sc;
gc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Gi = function () {};
wc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Pt(Be.current);
    var i = null;
    switch (n) {
      case 'input':
        (l = yi(e, l)), (r = yi(e, r)), (i = []);
        break;
      case 'select':
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = Si(e, l)), (r = Si(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Zr);
    }
    xi(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === 'style') {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (An.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (An.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && U('scroll', e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Sc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!$)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function op(e, t, n) {
  var r = t.pendingProps;
  switch ((Lo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && Jr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        an(),
        F(pe),
        F(oe),
        Uo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Cr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (ro(Te), (Te = null)))),
        Gi(e, t),
        le(t),
        null
      );
    case 5:
      Do(t);
      var l = Pt(bn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return le(t), null;
        }
        if (((e = Pt(Be.current)), Cr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Fe] = t), (r[Jn] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              U('cancel', r), U('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              U('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < jn.length; l++) U(jn[l], r);
              break;
            case 'source':
              U('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              U('error', r), U('load', r);
              break;
            case 'details':
              U('toggle', r);
              break;
            case 'input':
              pu(r, i), U('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                U('invalid', r);
              break;
            case 'textarea':
              mu(r, i), U('invalid', r);
          }
          xi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Er(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Er(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : An.hasOwnProperty(o) &&
                  u != null &&
                  o === 'onScroll' &&
                  U('scroll', r);
            }
          switch (n) {
            case 'input':
              mr(r), hu(r, i, !0);
              break;
            case 'textarea':
              mr(r), vu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Zr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ys(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Fe] = t),
            (e[Jn] = r),
            gc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ei(n, r)), n)) {
              case 'dialog':
                U('cancel', e), U('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                U('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < jn.length; l++) U(jn[l], e);
                l = r;
                break;
              case 'source':
                U('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                U('error', e), U('load', e), (l = r);
                break;
              case 'details':
                U('toggle', e), (l = r);
                break;
              case 'input':
                pu(e, r), (l = yi(e, r)), U('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  U('invalid', e);
                break;
              case 'textarea':
                mu(e, r), (l = Si(e, r)), U('invalid', e);
                break;
              default:
                l = r;
            }
            xi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? Zs(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Xs(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Wn(e, s)
                    : typeof s == 'number' && Wn(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (An.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && U('scroll', e)
                      : s != null && po(e, i, s, o));
              }
            switch (n) {
              case 'input':
                mr(e), hu(e, r, !1);
                break;
              case 'textarea':
                mr(e), vu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + ht(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Zr);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) Sc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(S(166));
        if (((n = Pt(bn.current)), Pt(Be.current), Cr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fe] = t),
            (i = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                Er(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Er(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fe] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (F(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ye !== null && t.mode & 1 && !(t.flags & 128))
          Ua(), un(), (t.flags |= 98560), (i = !1);
        else if (((i = Cr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[Fe] = t;
          } else
            un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Te !== null && (ro(Te), (Te = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? Z === 0 && (Z = 3) : Go())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        an(), Gi(e, t), e === null && Gn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return To(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Jr(), le(t), null;
    case 19:
      if ((F(B), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) _n(i, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ll(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    _n(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > fn &&
            ((t.flags |= 128), (r = !0), _n(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ll(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _n(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !$)
            )
              return le(t), null;
          } else
            2 * K() - i.renderingStartTime > fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _n(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = B.current),
          D(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Xo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function up(e, t) {
  switch ((Lo(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Jr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        F(pe),
        F(oe),
        Uo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Do(t), null;
    case 13:
      if ((F(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(B), null;
    case 4:
      return an(), null;
    case 10:
      return To(t.type._context), null;
    case 22:
    case 23:
      return Xo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1,
  ie = !1,
  sp = typeof WeakSet == 'function' ? WeakSet : Set,
  C = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function Zi(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var is = !1;
function ap(e, t) {
  if (((Oi = Yr), (e = Ca()), Po(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (m = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++a === l && (u = o),
                m === i && ++p === r && (s = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ii = { focusedElem: e, selectionRange: n }, Yr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    N = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : je(t.type, v),
                      N
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (y) {
          V(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (w = is), (is = !1), w;
}
function Fn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Zi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _l(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ji(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function kc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), kc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fe], delete t[Jn], delete t[Ui], delete t[Qd], delete t[Kd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function xc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function os(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || xc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Zr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qi(e, t, n), e = e.sibling; e !== null; ) qi(e, t, n), (e = e.sibling);
}
function bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bi(e, t, n), e = e.sibling; e !== null; ) bi(e, t, n), (e = e.sibling);
}
var ee = null,
  ze = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) Ec(e, t, n), (n = n.sibling);
}
function Ec(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == 'function')
    try {
      $e.onCommitFiberUnmount(yl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Zt(n, t);
    case 6:
      var r = ee,
        l = ze;
      (ee = null),
        Je(e, t, n),
        (ee = r),
        (ze = l),
        ee !== null &&
          (ze
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (ze
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? ql(e.parentNode, n)
              : e.nodeType === 1 && ql(e, n),
            Kn(e))
          : ql(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = ze),
        (ee = n.stateNode.containerInfo),
        (ze = !0),
        Je(e, t, n),
        (ee = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Zi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), Je(e, t, n), (ie = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function us(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sp()),
      t.forEach(function (r) {
        var l = gp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (ze = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(S(160));
        Ec(i, o, l), (ee = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        V(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Cc(t, e), (t = t.sibling);
}
function Cc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), De(e), r & 4)) {
        try {
          Fn(3, e, e.return), _l(3, e);
        } catch (v) {
          V(e, e.return, v);
        }
        try {
          Fn(5, e, e.return);
        } catch (v) {
          V(e, e.return, v);
        }
      }
      break;
    case 1:
      Re(t, e), De(e), r & 512 && n !== null && Zt(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        De(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wn(l, '');
        } catch (v) {
          V(e, e.return, v);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && Qs(l, i),
              Ei(u, o);
            var a = Ei(u, i);
            for (o = 0; o < s.length; o += 2) {
              var p = s[o],
                h = s[o + 1];
              p === 'style'
                ? Zs(l, h)
                : p === 'dangerouslySetInnerHTML'
                ? Xs(l, h)
                : p === 'children'
                ? Wn(l, h)
                : po(l, p, h, a);
            }
            switch (u) {
              case 'input':
                gi(l, i);
                break;
              case 'textarea':
                Ks(l, i);
                break;
              case 'select':
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? qt(l, !!i.multiple, g, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qt(l, !!i.multiple, i.defaultValue, !0)
                      : qt(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[Jn] = i;
          } catch (v) {
            V(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Re(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (v) {
          V(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Kn(t.containerInfo);
        } catch (v) {
          V(e, e.return, v);
        }
      break;
    case 4:
      Re(t, e), De(e);
      break;
    case 13:
      Re(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ko = K())),
        r & 4 && us(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || p), Re(t, e), (ie = a)) : Re(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (C = e, p = e.child; p !== null; ) {
            for (h = C = p; C !== null; ) {
              switch (((m = C), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fn(4, m, m.return);
                  break;
                case 1:
                  Zt(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      V(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Zt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    as(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (C = g)) : as(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (l = h.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Gs('display', o)));
              } catch (v) {
                V(e, e.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = a ? '' : h.memoizedProps;
              } catch (v) {
                V(e, e.return, v);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), De(e), r & 4 && us(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (xc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wn(l, ''), (r.flags &= -33));
          var i = os(e);
          bi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = os(e);
          qi(e, u, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cp(e, t, n) {
  (C = e), _c(e);
}
function _c(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Nr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Nr;
        var a = ie;
        if (((Nr = o), (ie = s) && !a))
          for (C = l; C !== null; )
            (o = C),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? cs(l)
                : s !== null
                ? ((s.return = o), (C = s))
                : cs(l);
        for (; i !== null; ) (C = i), _c(i), (i = i.sibling);
        (C = l), (Nr = u), (ie = a);
      }
      ss(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : ss(e);
  }
}
function ss(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || _l(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Qu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && Kn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        ie || (t.flags & 512 && Ji(t));
      } catch (m) {
        V(t, t.return, m);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function as(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function cs(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ji(t);
          } catch (s) {
            V(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ji(t);
          } catch (s) {
            V(t, o, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var fp = Math.ceil,
  ul = Ze.ReactCurrentDispatcher,
  Ho = Ze.ReactCurrentOwner,
  _e = Ze.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  Y = null,
  te = 0,
  ve = 0,
  Jt = yt(0),
  Z = 0,
  rr = null,
  Ot = 0,
  Pl = 0,
  Qo = 0,
  $n = null,
  fe = null,
  Ko = 0,
  fn = 1 / 0,
  Ae = null,
  sl = !1,
  eo = null,
  ct = null,
  Lr = !1,
  rt = null,
  al = 0,
  Bn = 0,
  to = null,
  $r = -1,
  Br = 0;
function se() {
  return I & 6 ? K() : $r !== -1 ? $r : ($r = K());
}
function ft(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Xd.transition !== null
      ? (Br === 0 && (Br = sa()), Br)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ma(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Bn) throw ((Bn = 0), (to = null), Error(S(185)));
  or(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (Pl |= n), Z === 4 && tt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((fn = K() + 500), xl && gt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Xf(e, t);
  var r = Kr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && wu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wu(n), t === 1))
      e.tag === 0 ? Yd(fs.bind(null, e)) : Ia(fs.bind(null, e)),
        Vd(function () {
          !(I & 6) && gt();
        }),
        (n = null);
    else {
      switch (aa(r)) {
        case 1:
          n = go;
          break;
        case 4:
          n = oa;
          break;
        case 16:
          n = Qr;
          break;
        case 536870912:
          n = ua;
          break;
        default:
          n = Qr;
      }
      n = Oc(n, Pc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pc(e, t) {
  if ((($r = -1), (Br = 0), I & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = Kr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = Lc();
    (b !== e || te !== t) && ((Ae = null), (fn = K() + 500), Nt(e, t));
    do
      try {
        hp();
        break;
      } catch (u) {
        Nc(e, u);
      }
    while (1);
    zo(),
      (ul.current = i),
      (I = l),
      Y !== null ? (t = 0) : ((b = null), (te = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Li(e)), l !== 0 && ((r = l), (t = no(e, l)))), t === 1)
    )
      throw ((n = rr), Nt(e, 0), tt(e, r), me(e, K()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !dp(l) &&
          ((t = cl(e, r)),
          t === 2 && ((i = Li(e)), i !== 0 && ((r = i), (t = no(e, i)))),
          t === 1))
      )
        throw ((n = rr), Nt(e, 0), tt(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Et(e, fe, Ae);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Ko + 500 - K()), 10 < t))
          ) {
            if (Kr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Di(Et.bind(null, e, fe, Ae), t);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * fp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Di(Et.bind(null, e, fe, Ae), r);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 5:
          Et(e, fe, Ae);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? Pc.bind(null, e) : null;
}
function no(e, t) {
  var n = $n;
  return (
    e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    (e = cl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && ro(t)),
    e
  );
}
function ro(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function dp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~Qo,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function fs(e) {
  if (I & 6) throw Error(S(327));
  rn();
  var t = Kr(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Li(e);
    r !== 0 && ((t = r), (n = no(e, r)));
  }
  if (n === 1) throw ((n = rr), Nt(e, 0), tt(e, t), me(e, K()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, fe, Ae),
    me(e, K()),
    null
  );
}
function Yo(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((fn = K() + 500), xl && gt());
  }
}
function It(e) {
  rt !== null && rt.tag === 0 && !(I & 6) && rn();
  var t = I;
  I |= 1;
  var n = _e.transition,
    r = M;
  try {
    if (((_e.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (_e.transition = n), (I = t), !(I & 6) && gt();
  }
}
function Xo() {
  (ve = Jt.current), F(Jt);
}
function Nt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wd(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Lo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Jr();
          break;
        case 3:
          an(), F(pe), F(oe), Uo();
          break;
        case 5:
          Do(r);
          break;
        case 4:
          an();
          break;
        case 13:
          F(B);
          break;
        case 19:
          F(B);
          break;
        case 10:
          To(r.type._context);
          break;
        case 22:
        case 23:
          Xo();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = dt(e.current, null)),
    (te = ve = t),
    (Z = 0),
    (rr = null),
    (Qo = Pl = Ot = 0),
    (fe = $n = null),
    _t !== null)
  ) {
    for (t = 0; t < _t.length; t++)
      if (((n = _t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    _t = null;
  }
  return e;
}
function Nc(e, t) {
  do {
    var n = Y;
    try {
      if ((zo(), (Dr.current = ol), il)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((Tt = 0),
        (q = G = A = null),
        (Un = !1),
        (er = 0),
        (Ho.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (rr = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            p = u,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var g = qu(o);
          if (g !== null) {
            (g.flags &= -257),
              bu(g, o, u, i, t),
              g.mode & 1 && Ju(i, a, t),
              (t = g),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ju(i, a, t), Go();
              break e;
            }
            s = Error(S(426));
          }
        } else if ($ && u.mode & 1) {
          var N = qu(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              bu(N, o, u, i, t),
              Ro(cn(s, u));
            break e;
          }
        }
        (i = s = cn(s, u)),
          Z !== 4 && (Z = 2),
          $n === null ? ($n = [i]) : $n.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = cc(i, s, t);
              Hu(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (ct === null || !ct.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = fc(i, u, t);
                Hu(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      jc(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Lc() {
  var e = ul.current;
  return (ul.current = ol), e === null ? ol : e;
}
function Go() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    b === null || (!(Ot & 268435455) && !(Pl & 268435455)) || tt(b, te);
}
function cl(e, t) {
  var n = I;
  I |= 2;
  var r = Lc();
  (b !== e || te !== t) && ((Ae = null), Nt(e, t));
  do
    try {
      pp();
      break;
    } catch (l) {
      Nc(e, l);
    }
  while (1);
  if ((zo(), (I = n), (ul.current = r), Y !== null)) throw Error(S(261));
  return (b = null), (te = 0), Z;
}
function pp() {
  for (; Y !== null; ) Rc(Y);
}
function hp() {
  for (; Y !== null && !$f(); ) Rc(Y);
}
function Rc(e) {
  var t = Tc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? jc(e) : (Y = t),
    (Ho.current = null);
}
function jc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = up(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (Y = null);
        return;
      }
    } else if (((n = op(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Et(e, t, n) {
  var r = M,
    l = _e.transition;
  try {
    (_e.transition = null), (M = 1), mp(e, t, n, r);
  } finally {
    (_e.transition = l), (M = r);
  }
  return null;
}
function mp(e, t, n, r) {
  do rn();
  while (rt !== null);
  if (I & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Gf(e, i),
    e === b && ((Y = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lr ||
      ((Lr = !0),
      Oc(Qr, function () {
        return rn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Ho.current = null),
      ap(e, n),
      Cc(n, e),
      Md(Ii),
      (Yr = !!Oi),
      (Ii = Oi = null),
      (e.current = n),
      cp(n),
      Bf(),
      (I = u),
      (M = o),
      (_e.transition = i);
  } else e.current = n;
  if (
    (Lr && ((Lr = !1), (rt = e), (al = l)),
    (i = e.pendingLanes),
    i === 0 && (ct = null),
    Vf(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (sl) throw ((sl = !1), (e = eo), (eo = null), e);
  return (
    al & 1 && e.tag !== 0 && rn(),
    (i = e.pendingLanes),
    i & 1 ? (e === to ? Bn++ : ((Bn = 0), (to = e))) : (Bn = 0),
    gt(),
    null
  );
}
function rn() {
  if (rt !== null) {
    var e = aa(al),
      t = _e.transition,
      n = M;
    try {
      if (((_e.transition = null), (M = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (al = 0), I & 6)) throw Error(S(331));
        var l = I;
        for (I |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (C = a; C !== null; ) {
                  var p = C;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fn(8, p, i);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (C = h);
                  else
                    for (; C !== null; ) {
                      p = C;
                      var m = p.sibling,
                        g = p.return;
                      if ((kc(p), p === a)) {
                        C = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (C = m);
                        break;
                      }
                      C = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var N = v.sibling;
                    (v.sibling = null), (v = N);
                  } while (v !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (C = f);
                break e;
              }
              C = i.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          o = C;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (C = d);
          else
            e: for (o = c; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _l(9, u);
                  }
                } catch (E) {
                  V(u, u.return, E);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (C = y);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((I = l), gt(), $e && typeof $e.onPostCommitFiberRoot == 'function')
        )
          try {
            $e.onPostCommitFiberRoot(yl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (_e.transition = t);
    }
  }
  return !1;
}
function ds(e, t, n) {
  (t = cn(n, t)),
    (t = cc(e, t, 1)),
    (e = at(e, t, 1)),
    (t = se()),
    e !== null && (or(e, 1, t), me(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) ds(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ds(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ct === null || !ct.has(r)))
        ) {
          (e = cn(n, e)),
            (e = fc(t, e, 1)),
            (t = at(t, e, 1)),
            (e = se()),
            t !== null && (or(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (Z === 4 || (Z === 3 && (te & 130023424) === te && 500 > K() - Ko)
        ? Nt(e, 0)
        : (Qo |= n)),
    me(e, t);
}
function zc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gr), (gr <<= 1), !(gr & 130023424) && (gr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (or(e, t, n), me(e, n));
}
function yp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zc(e, n);
}
function gp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), zc(e, n);
}
var Tc;
Tc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), ip(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && Ma(t, el, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fr(e, t), (e = t.pendingProps);
      var l = on(t, oe.current);
      nn(t, n), (l = $o(null, t, r, e, l, n));
      var i = Bo();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), qr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Io(t),
            (l.updater = El),
            (t.stateNode = l),
            (l._reactInternals = t),
            Vi(t, r, e, n),
            (t = Ki(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && No(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Sp(r)),
          (e = je(r, e)),
          l)
        ) {
          case 0:
            t = Qi(null, t, r, e, n);
            break e;
          case 1:
            t = ns(null, t, r, e, n);
            break e;
          case 11:
            t = es(null, t, r, e, n);
            break e;
          case 14:
            t = ts(null, t, r, je(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : je(r, l)),
        Qi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : je(r, l)),
        ns(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((mc(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          $a(e, t),
          rl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = cn(Error(S(423)), t)), (t = rs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = cn(Error(S(424)), t)), (t = rs(e, t, r, n, l));
            break e;
          } else
            for (
              ye = st(t.stateNode.containerInfo.firstChild),
                ge = t,
                $ = !0,
                Te = null,
                n = Va(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((un(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ha(t),
        e === null && Bi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Mi(r, l) ? (o = null) : i !== null && Mi(r, i) && (t.flags |= 32),
        hc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Bi(t), null;
    case 13:
      return vc(e, t, n);
    case 4:
      return (
        Mo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : je(r, l)),
        es(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          D(tl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ai(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(S(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ai(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        nn(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = je(r, t.pendingProps)),
        (l = je(r.type, l)),
        ts(e, t, r, l, n)
      );
    case 15:
      return dc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : je(r, l)),
        Fr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), qr(t)) : (e = !1),
        nn(t, n),
        Aa(t, r, l),
        Vi(t, r, l, n),
        Ki(null, t, r, !0, e, n)
      );
    case 19:
      return yc(e, t, n);
    case 22:
      return pc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Oc(e, t) {
  return ia(e, t);
}
function wp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new wp(e, t, n, r);
}
function Zo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sp(e) {
  if (typeof e == 'function') return Zo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === mo)) return 11;
    if (e === vo) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ar(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Zo(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case At:
        return Lt(n.children, l, i, t);
      case ho:
        (o = 8), (l |= 8);
        break;
      case pi:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = pi), (e.lanes = i), e
        );
      case hi:
        return (e = Ce(13, n, t, l)), (e.elementType = hi), (e.lanes = i), e;
      case mi:
        return (e = Ce(19, n, t, l)), (e.elementType = mi), (e.lanes = i), e;
      case Ws:
        return Nl(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Bs:
              o = 10;
              break e;
            case As:
              o = 9;
              break e;
            case mo:
              o = 11;
              break e;
            case vo:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ce(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Lt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Nl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Ws),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oi(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function ui(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Jo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new kp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ce(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Io(i),
    e
  );
}
function xp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ic(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Dt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return Oa(e, n, t);
  }
  return t;
}
function Mc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Jo(n, r, !0, e, l, i, o, u, s)),
    (e.context = Ic(null)),
    (n = e.current),
    (r = se()),
    (l = ft(n)),
    (i = Qe(r, l)),
    (i.callback = t ?? null),
    at(n, i, l),
    (e.current.lanes = l),
    or(e, l, r),
    me(e, r),
    e
  );
}
function Ll(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = ft(l);
  return (
    (n = Ic(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, o)),
    e !== null && (Ie(e, l, o, i), Mr(e, l, o)),
    o
  );
}
function fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ps(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qo(e, t) {
  ps(e, t), (e = e.alternate) && ps(e, t);
}
function Ep() {
  return null;
}
var Dc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function bo(e) {
  this._internalRoot = e;
}
Rl.prototype.render = bo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Ll(e, t, null, null);
};
Rl.prototype.unmount = bo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    It(function () {
      Ll(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function Rl(e) {
  this._internalRoot = e;
}
Rl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = da();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && ha(e);
  }
};
function eu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function hs() {}
function Cp(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = fl(o);
        i.call(a);
      };
    }
    var o = Mc(t, r, e, 0, null, !1, !1, '', hs);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Gn(e.nodeType === 8 ? e.parentNode : e),
      It(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = fl(s);
      u.call(a);
    };
  }
  var s = Jo(e, 0, !1, null, null, !1, !1, '', hs);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    It(function () {
      Ll(t, s, n, r);
    }),
    s
  );
}
function zl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = fl(o);
        u.call(s);
      };
    }
    Ll(t, o, e, l);
  } else o = Cp(n, t, e, l, r);
  return fl(o);
}
ca = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rn(t.pendingLanes);
        n !== 0 &&
          (wo(t, n | 1), me(t, K()), !(I & 6) && ((fn = K() + 500), gt()));
      }
      break;
    case 13:
      It(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        qo(e, 1);
  }
};
So = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    qo(e, 134217728);
  }
};
fa = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    qo(e, t);
  }
};
da = function () {
  return M;
};
pa = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
_i = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((gi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = kl(r);
            if (!l) throw Error(S(90));
            Hs(r), gi(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Ks(e, n);
      break;
    case 'select':
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
bs = Yo;
ea = It;
var _p = { usingClientEntryPoint: !1, Events: [sr, Qt, kl, Js, qs, Yo] },
  Pn = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Pp = {
    bundleType: Pn.bundleType,
    version: Pn.version,
    rendererPackageName: Pn.rendererPackageName,
    rendererConfig: Pn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ra(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pn.findFiberByHostInstance || Ep,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber)
    try {
      (yl = Rr.inject(Pp)), ($e = Rr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!eu(t)) throw Error(S(200));
  return xp(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!eu(e)) throw Error(S(299));
  var n = !1,
    r = '',
    l = Dc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Jo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    new bo(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(S(188))
      : ((e = Object.keys(e).join(',')), Error(S(268, e)));
  return (e = ra(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return It(e);
};
Se.hydrate = function (e, t, n) {
  if (!jl(t)) throw Error(S(200));
  return zl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!eu(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = Dc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Mc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Gn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Rl(t);
};
Se.render = function (e, t, n) {
  if (!jl(t)) throw Error(S(200));
  return zl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!jl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (It(function () {
        zl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = Yo;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return zl(e, t, n, !1, r);
};
Se.version = '18.2.0-next-9e3b772b8-20220608';
function Uc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc);
    } catch (e) {
      console.error(e);
    }
}
Uc(), (Ms.exports = Se);
var Np = Ms.exports,
  ms = Np;
(fi.createRoot = ms.createRoot), (fi.hydrateRoot = ms.hydrateRoot);
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function lr() {
  return (
    (lr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lr.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(lt || (lt = {}));
const vs = 'popstate';
function Lp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return lo(
      '',
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : dl(l);
  }
  return jp(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function tu(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Rp() {
  return Math.random().toString(36).substr(2, 8);
}
function ys(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function lo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    lr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? mn(t) : t,
      { state: n, key: (t && t.key) || r || Rp() }
    )
  );
}
function dl(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function mn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function jp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = lt.Pop,
    s = null,
    a = p();
  a == null && ((a = 0), o.replaceState(lr({}, o.state, { idx: a }), ''));
  function p() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    u = lt.Pop;
    let N = p(),
      f = N == null ? null : N - a;
    (a = N), s && s({ action: u, location: v.location, delta: f });
  }
  function m(N, f) {
    u = lt.Push;
    let c = lo(v.location, N, f);
    n && n(c, N), (a = p() + 1);
    let d = ys(c, a),
      y = v.createHref(c);
    try {
      o.pushState(d, '', y);
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E;
      l.location.assign(y);
    }
    i && s && s({ action: u, location: v.location, delta: 1 });
  }
  function g(N, f) {
    u = lt.Replace;
    let c = lo(v.location, N, f);
    n && n(c, N), (a = p());
    let d = ys(c, a),
      y = v.createHref(c);
    o.replaceState(d, '', y),
      i && s && s({ action: u, location: v.location, delta: 0 });
  }
  function w(N) {
    let f = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      c = typeof N == 'string' ? N : dl(N);
    return (
      X(
        f,
        'No window.location.(origin|href) available to create URL for href: ' +
          c
      ),
      new URL(c, f)
    );
  }
  let v = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(N) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(vs, h),
        (s = N),
        () => {
          l.removeEventListener(vs, h), (s = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: w,
    encodeLocation(N) {
      let f = w(N);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: g,
    go(N) {
      return o.go(N);
    },
  };
  return v;
}
var gs;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(gs || (gs = {}));
function zp(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? mn(t) : t,
    l = nu(r.pathname || '/', n);
  if (l == null) return null;
  let i = Fc(e);
  Tp(i);
  let o = null;
  for (let u = 0; o == null && u < i.length; ++u) o = Ap(i[u], Hp(l));
  return o;
}
function Fc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (i, o, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || '' : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (X(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = pt([r, s.relativePath]),
      p = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (X(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".')
      ),
      Fc(i.children, t, p, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: $p(a, i.index), routesMeta: p });
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === '' || !((u = i.path) != null && u.includes('?'))) l(i, o);
      else for (let s of $c(i.path)) l(i, o, s);
    }),
    t
  );
}
function $c(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [i, ''] : [i];
  let o = $c(r.join('/')),
    u = [];
  return (
    u.push(...o.map(s => (s === '' ? i : [i, s].join('/')))),
    l && u.push(...o),
    u.map(s => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function Tp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Bp(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex)
        )
  );
}
const Op = /^:\w+$/,
  Ip = 3,
  Mp = 2,
  Dp = 1,
  Up = 10,
  Fp = -2,
  ws = e => e === '*';
function $p(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(ws) && (r += Fp),
    t && (r += Mp),
    n
      .filter(l => !ws(l))
      .reduce((l, i) => l + (Op.test(i) ? Ip : i === '' ? Dp : Up), r)
  );
}
function Bp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ap(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let u = n[o],
      s = o === n.length - 1,
      a = l === '/' ? t : t.slice(l.length) || '/',
      p = Wp(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let h = u.route;
    i.push({
      params: r,
      pathname: pt([l, p.pathname]),
      pathnameBase: Xp(pt([l, p.pathnameBase])),
      route: h,
    }),
      p.pathnameBase !== '/' && (l = pt([l, p.pathnameBase]));
  }
  return i;
}
function Wp(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Vp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((a, p, h) => {
      if (p === '*') {
        let m = u[h] || '';
        o = i.slice(0, i.length - m.length).replace(/(.)\/+$/, '$1');
      }
      return (a[p] = Qp(u[h] || '', p)), a;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Vp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    tu(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (o, u) => (r.push(u), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Hp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      tu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Qp(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      tu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function nu(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Kp(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? mn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Yp(n, t)) : t,
    search: Gp(r),
    hash: Zp(l),
  };
}
function Yp(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach(l => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function si(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Bc(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ac(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = mn(e))
    : ((l = lr({}, e)),
      X(
        !l.pathname || !l.pathname.includes('?'),
        si('?', 'pathname', 'search', l)
      ),
      X(
        !l.pathname || !l.pathname.includes('#'),
        si('#', 'pathname', 'hash', l)
      ),
      X(!l.search || !l.search.includes('#'), si('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    o = i ? '/' : l.pathname,
    u;
  if (r || o == null) u = n;
  else {
    let h = t.length - 1;
    if (o.startsWith('..')) {
      let m = o.split('/');
      for (; m[0] === '..'; ) m.shift(), (h -= 1);
      l.pathname = m.join('/');
    }
    u = h >= 0 ? t[h] : '/';
  }
  let s = Kp(l, u),
    a = o && o !== '/' && o.endsWith('/'),
    p = (i || o === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || p) && (s.pathname += '/'), s;
}
const pt = e => e.join('/').replace(/\/\/+/g, '/'),
  Xp = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Gp = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Zp = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Jp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Wc = ['post', 'put', 'patch', 'delete'];
new Set(Wc);
const qp = ['get', ...Wc];
new Set(qp);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pl.apply(this, arguments)
  );
}
const ru = x.createContext(null),
  Vc = x.createContext(null),
  Ut = x.createContext(null),
  Tl = x.createContext(null),
  wt = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Hc = x.createContext(null);
function bp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  cr() || X(!1);
  let { basename: r, navigator: l } = x.useContext(Ut),
    { hash: i, pathname: o, search: u } = lu(e, { relative: n }),
    s = o;
  return (
    r !== '/' && (s = o === '/' ? r : pt([r, o])),
    l.createHref({ pathname: s, search: u, hash: i })
  );
}
function cr() {
  return x.useContext(Tl) != null;
}
function vn() {
  return cr() || X(!1), x.useContext(Tl).location;
}
function Qc(e) {
  x.useContext(Ut).static || x.useLayoutEffect(e);
}
function Kc() {
  let { isDataRoute: e } = x.useContext(wt);
  return e ? ph() : eh();
}
function eh() {
  cr() || X(!1);
  let e = x.useContext(ru),
    { basename: t, navigator: n } = x.useContext(Ut),
    { matches: r } = x.useContext(wt),
    { pathname: l } = vn(),
    i = JSON.stringify(Bc(r).map(s => s.pathnameBase)),
    o = x.useRef(!1);
  return (
    Qc(() => {
      o.current = !0;
    }),
    x.useCallback(
      function (s, a) {
        if ((a === void 0 && (a = {}), !o.current)) return;
        if (typeof s == 'number') {
          n.go(s);
          return;
        }
        let p = Ac(s, JSON.parse(i), l, a.relative === 'path');
        e == null &&
          t !== '/' &&
          (p.pathname = p.pathname === '/' ? t : pt([t, p.pathname])),
          (a.replace ? n.replace : n.push)(p, a.state, a);
      },
      [t, n, i, l, e]
    )
  );
}
function th() {
  let { matches: e } = x.useContext(wt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function lu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(wt),
    { pathname: l } = vn(),
    i = JSON.stringify(Bc(r).map(o => o.pathnameBase));
  return x.useMemo(() => Ac(e, JSON.parse(i), l, n === 'path'), [e, i, l, n]);
}
function nh(e, t) {
  return rh(e, t);
}
function rh(e, t, n) {
  cr() || X(!1);
  let { navigator: r } = x.useContext(Ut),
    { matches: l } = x.useContext(wt),
    i = l[l.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let s = vn(),
    a;
  if (t) {
    var p;
    let v = typeof t == 'string' ? mn(t) : t;
    u === '/' || ((p = v.pathname) != null && p.startsWith(u)) || X(!1),
      (a = v);
  } else a = s;
  let h = a.pathname || '/',
    m = u === '/' ? h : h.slice(u.length) || '/',
    g = zp(e, { pathname: m }),
    w = sh(
      g &&
        g.map(v =>
          Object.assign({}, v, {
            params: Object.assign({}, o, v.params),
            pathname: pt([
              u,
              r.encodeLocation
                ? r.encodeLocation(v.pathname).pathname
                : v.pathname,
            ]),
            pathnameBase:
              v.pathnameBase === '/'
                ? u
                : pt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(v.pathnameBase).pathname
                      : v.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && w
    ? x.createElement(
        Tl.Provider,
        {
          value: {
            location: pl(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              a
            ),
            navigationType: lt.Pop,
          },
        },
        w
      )
    : w;
}
function lh() {
  let e = dh(),
    t = Jp(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement('h2', null, 'Unexpected Application Error!'),
    x.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? x.createElement('pre', { style: l }, n) : null,
    i
  );
}
const ih = x.createElement(lh, null);
class oh extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          wt.Provider,
          { value: this.props.routeContext },
          x.createElement(Hc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function uh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = x.useContext(ru);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(wt.Provider, { value: t }, r)
  );
}
function sh(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let i = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let u = i.findIndex(
      s => s.route.id && (o == null ? void 0 : o[s.route.id])
    );
    u >= 0 || X(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
  }
  return i.reduceRight((u, s, a) => {
    let p = s.route.id ? (o == null ? void 0 : o[s.route.id]) : null,
      h = null;
    n && (h = s.route.errorElement || ih);
    let m = t.concat(i.slice(0, a + 1)),
      g = () => {
        let w;
        return (
          p
            ? (w = h)
            : s.route.Component
            ? (w = x.createElement(s.route.Component, null))
            : s.route.element
            ? (w = s.route.element)
            : (w = u),
          x.createElement(uh, {
            match: s,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? x.createElement(oh, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: p,
          children: g(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var Yc = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Yc || {}),
  hl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(hl || {});
function ah(e) {
  let t = x.useContext(ru);
  return t || X(!1), t;
}
function ch(e) {
  let t = x.useContext(Vc);
  return t || X(!1), t;
}
function fh(e) {
  let t = x.useContext(wt);
  return t || X(!1), t;
}
function Xc(e) {
  let t = fh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function dh() {
  var e;
  let t = x.useContext(Hc),
    n = ch(hl.UseRouteError),
    r = Xc(hl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function ph() {
  let { router: e } = ah(Yc.UseNavigateStable),
    t = Xc(hl.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Qc(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, pl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function zn(e) {
  X(!1);
}
function hh(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = lt.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  cr() && X(!1);
  let u = t.replace(/^\/*/, '/'),
    s = x.useMemo(() => ({ basename: u, navigator: i, static: o }), [u, i, o]);
  typeof r == 'string' && (r = mn(r));
  let {
      pathname: a = '/',
      search: p = '',
      hash: h = '',
      state: m = null,
      key: g = 'default',
    } = r,
    w = x.useMemo(() => {
      let v = nu(a, u);
      return v == null
        ? null
        : {
            location: { pathname: v, search: p, hash: h, state: m, key: g },
            navigationType: l,
          };
    }, [u, a, p, h, m, g, l]);
  return w == null
    ? null
    : x.createElement(
        Ut.Provider,
        { value: s },
        x.createElement(Tl.Provider, { children: n, value: w })
      );
}
function mh(e) {
  let { children: t, location: n } = e;
  return nh(io(t), n);
}
new Promise(() => {});
function io(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, l) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === x.Fragment) {
        n.push.apply(n, io(r.props.children, i));
        return;
      }
      r.type !== zn && X(!1), !r.props.index || !r.props.children || X(!1);
      let o = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = io(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ml() {
  return (
    (ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ml.apply(this, arguments)
  );
}
function Gc(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function vh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function yh(e, t) {
  return e.button === 0 && (!t || t === '_self') && !vh(e);
}
const gh = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  wh = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'children',
  ],
  Sh = 'startTransition',
  Ss = yf[Sh];
function kh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = x.useRef();
  i.current == null && (i.current = Lp({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, s] = x.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    p = x.useCallback(
      h => {
        a && Ss ? Ss(() => s(h)) : s(h);
      },
      [s, a]
    );
  return (
    x.useLayoutEffect(() => o.listen(p), [o, p]),
    x.createElement(hh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
    })
  );
}
const xh =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Eh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Rt = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: s,
        to: a,
        preventScrollReset: p,
      } = t,
      h = Gc(t, gh),
      { basename: m } = x.useContext(Ut),
      g,
      w = !1;
    if (typeof a == 'string' && Eh.test(a) && ((g = a), xh))
      try {
        let c = new URL(window.location.href),
          d = a.startsWith('//') ? new URL(c.protocol + a) : new URL(a),
          y = nu(d.pathname, m);
        d.origin === c.origin && y != null
          ? (a = y + d.search + d.hash)
          : (w = !0);
      } catch {}
    let v = bp(a, { relative: l }),
      N = Ch(a, {
        replace: o,
        state: u,
        target: s,
        preventScrollReset: p,
        relative: l,
      });
    function f(c) {
      r && r(c), c.defaultPrevented || N(c);
    }
    return x.createElement(
      'a',
      ml({}, h, { href: g || v, onClick: w || i ? r : f, ref: n, target: s })
    );
  }),
  Jh = x.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: i = '',
        end: o = !1,
        style: u,
        to: s,
        children: a,
      } = t,
      p = Gc(t, wh),
      h = lu(s, { relative: p.relative }),
      m = vn(),
      g = x.useContext(Vc),
      { navigator: w } = x.useContext(Ut),
      v = w.encodeLocation ? w.encodeLocation(h).pathname : h.pathname,
      N = m.pathname,
      f =
        g && g.navigation && g.navigation.location
          ? g.navigation.location.pathname
          : null;
    l ||
      ((N = N.toLowerCase()),
      (f = f ? f.toLowerCase() : null),
      (v = v.toLowerCase()));
    let c = N === v || (!o && N.startsWith(v) && N.charAt(v.length) === '/'),
      d =
        f != null &&
        (f === v || (!o && f.startsWith(v) && f.charAt(v.length) === '/')),
      y = c ? r : void 0,
      E;
    typeof i == 'function'
      ? (E = i({ isActive: c, isPending: d }))
      : (E = [i, c ? 'active' : null, d ? 'pending' : null]
          .filter(Boolean)
          .join(' '));
    let P = typeof u == 'function' ? u({ isActive: c, isPending: d }) : u;
    return x.createElement(
      Rt,
      ml({}, p, { 'aria-current': y, className: E, ref: n, style: P, to: s }),
      typeof a == 'function' ? a({ isActive: c, isPending: d }) : a
    );
  });
var ks;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher');
})(ks || (ks = {}));
var xs;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(xs || (xs = {}));
function Ch(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
    } = t === void 0 ? {} : t,
    u = Kc(),
    s = vn(),
    a = lu(e, { relative: o });
  return x.useCallback(
    p => {
      if (yh(p, n)) {
        p.preventDefault();
        let h = r !== void 0 ? r : dl(s) === dl(a);
        u(e, { replace: h, state: l, preventScrollReset: i, relative: o });
      }
    },
    [s, u, a, r, l, n, e, i, o]
  );
}
const _h = 'modulepreload',
  Ph = function (e) {
    return '/' + e;
  },
  Es = {},
  iu = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const l = document.getElementsByTagName('link');
    return Promise.all(
      n.map(i => {
        if (((i = Ph(i)), i in Es)) return;
        Es[i] = !0;
        const o = i.endsWith('.css'),
          u = o ? '[rel="stylesheet"]' : '';
        if (!!r)
          for (let p = l.length - 1; p >= 0; p--) {
            const h = l[p];
            if (h.href === i && (!o || h.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${i}"]${u}`)) return;
        const a = document.createElement('link');
        if (
          ((a.rel = o ? 'stylesheet' : _h),
          o || ((a.as = 'script'), (a.crossOrigin = '')),
          (a.href = i),
          document.head.appendChild(a),
          o)
        )
          return new Promise((p, h) => {
            a.addEventListener('load', p),
              a.addEventListener('error', () =>
                h(new Error(`Unable to preload CSS for ${i}`))
              );
          });
      })
    ).then(() => t());
  };
const Nh = '_nav_1pbsh_1',
  ai = '_activeLink_1pbsh_28';
const Lh = () => {
    const e = vn(),
      n = (({ pathname: r }) => (r === '/' ? r : r.replace('/', '')))(e);
    return k.jsx('header', {
      children: k.jsxs('nav', {
        className: Nh,
        children: [
          k.jsx(Rt, {
            to: '/',
            children: k.jsxs('h1', {
              children: [
                k.jsx('span', {
                  className: n === '/' ? ai : null,
                  children: 'Marvel ',
                }),
                'Information Portal',
              ],
            }),
          }),
          k.jsxs('ul', {
            children: [
              k.jsx(Rt, {
                to: '/',
                children: k.jsx('li', {
                  className: n === '/' ? ai : null,
                  children: 'Characters',
                }),
              }),
              ' / ',
              k.jsx(Rt, {
                to: '/comics',
                children: k.jsx('li', {
                  className: n.includes('comics') ? ai : null,
                  children: 'Comics',
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Rh = '_spinner_tybxz_1',
  jh = { spinner: Rh };
function Zc() {
  return k.jsx('div', {
    className: jh.spinner,
    children: k.jsxs('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        k.jsx('g', {
          transform: 'rotate(0 50 50)',
          children: k.jsx('rect', {
            x: '46.5',
            y: '28.5',
            rx: '1.8',
            ry: '1.8',
            width: '7',
            height: '9',
            fill: '#7f745b',
            children: k.jsx('animate', {
              attributeName: 'opacity',
              values: '1;0',
              keyTimes: '0;1',
              dur: '1.4492753623188404s',
              begin: '-1.2882447665056358s',
              repeatCount: 'indefinite',
            }),
          }),
        }),
        k.jsx('g', {
          transform: 'rotate(40 50 50)',
          children: k.jsx('rect', {
            x: '46.5',
            y: '28.5',
            rx: '1.8',
            ry: '1.8',
            width: '7',
            height: '9',
            fill: '#7f745b',
            children: k.jsx('animate', {
              attributeName: 'opacity',
              values: '1;0',
              keyTimes: '0;1',
              dur: '1.4492753623188404s',
              begin: '-1.1272141706924315s',
              repeatCount: 'indefinite',
            }),
          }),
        }),
        k.jsx('g', {
          transform: 'rotate(80 50 50)',
          children: k.jsx('rect', {
            x: '46.5',
            y: '28.5',
            rx: '1.8',
            ry: '1.8',
            width: '7',
            height: '9',
            fill: '#7f745b',
            children: k.jsx('animate', {
              attributeName: 'opacity',
              values: '1;0',
              keyTimes: '0;1',
              dur: '1.4492753623188404s',
              begin: '-0.9661835748792269s',
              repeatCount: 'indefinite',
            }),
          }),
        }),
        k.jsx('g', {
          transform: 'rotate(120 50 50)',
          children: k.jsx('rect', {
            x: '46.5',
            y: '28.5',
            rx: '1.8',
            ry: '1.8',
            width: '7',
            height: '9',
            fill: '#7f745b',
            children: k.jsx('animate', {
              attributeName: 'opacity',
              values: '1;0',
              keyTimes: '0;1',
              dur: '1.4492753623188404s',
              begin: '-0.8051529790660225s',
              repeatCount: 'indefinite',
            }),
          }),
        }),
        k.jsx('g', {
          transform: 'rotate(160 50 50)',
          children: k.jsx('rect', {
            x: '46.5',
            y: '28.5',
            rx: '1.8',
            ry: '1.8',
            width: '7',
            height: '9',
            fill: '#7f745b',
            children: k.jsx('animate', {
              attributeName: 'opacity',
              values: '1;0',
              keyTimes: '0;1',
              dur: '1.4492753623188404s',
              begin: '-0.6441223832528179s',
              repeatCount: 'indefinite',
            }),
          }),
        }),
        k.jsx('g', {
          transform: 'rotate(200 50 50)',
          children: k.jsx('rect', {
            x: '46.5',
            y: '28.5',
            rx: '1.8',
            ry: '1.8',
            width: '7',
            height: '9',
            fill: '#7f745b',
            children: k.jsx('animate', {
              attributeName: 'opacity',
              values: '1;0',
              keyTimes: '0;1',
              dur: '1.4492753623188404s',
              begin: '-0.48309178743961345s',
              repeatCount: 'indefinite',
            }),
          }),
        }),
        k.jsx('g', {
          transform: 'rotate(240 50 50)',
          children: k.jsx('rect', {
            x: '46.5',
            y: '28.5',
            rx: '1.8',
            ry: '1.8',
            width: '7',
            height: '9',
            fill: '#7f745b',
            children: k.jsx('animate', {
              attributeName: 'opacity',
              values: '1;0',
              keyTimes: '0;1',
              dur: '1.4492753623188404s',
              begin: '-0.32206119162640895s',
              repeatCount: 'indefinite',
            }),
          }),
        }),
        k.jsx('g', {
          transform: 'rotate(280 50 50)',
          children: k.jsx('rect', {
            x: '46.5',
            y: '28.5',
            rx: '1.8',
            ry: '1.8',
            width: '7',
            height: '9',
            fill: '#7f745b',
            children: k.jsx('animate', {
              attributeName: 'opacity',
              values: '1;0',
              keyTimes: '0;1',
              dur: '1.4492753623188404s',
              begin: '-0.16103059581320447s',
              repeatCount: 'indefinite',
            }),
          }),
        }),
        k.jsx('g', {
          transform: 'rotate(320 50 50)',
          children: k.jsx('rect', {
            x: '46.5',
            y: '28.5',
            rx: '1.8',
            ry: '1.8',
            width: '7',
            height: '9',
            fill: '#7f745b',
            children: k.jsx('animate', {
              attributeName: 'opacity',
              values: '1;0',
              keyTimes: '0;1',
              dur: '1.4492753623188404s',
              begin: '0s',
              repeatCount: 'indefinite',
            }),
          }),
        }),
      ],
    }),
  });
}
const zh = '_comicsInfo_1bdxb_1',
  Th = '_descrWrapper_1bdxb_6',
  Oh = '_title_1bdxb_15',
  Ih = '_descr_1bdxb_6',
  Mh = '_price_1bdxb_25',
  Dh = '_noPrice_1bdxb_31',
  $t = {
    comicsInfo: zh,
    descrWrapper: Th,
    title: Oh,
    descr: Ih,
    price: Mh,
    noPrice: Dh,
  },
  Uh = '_banner_19f3u_1',
  Fh = '_descr_19f3u_16',
  ci = { banner: Uh, descr: Fh },
  $h = () =>
    k.jsxs('div', {
      className: ci.banner,
      children: [
        k.jsx('img', {
          src: 'assets/banner/AvengersTeam.png',
          alt: 'Avengers Team',
        }),
        k.jsxs('div', {
          children: [
            k.jsx('p', {
              className: ci.descr,
              children: 'New comics every week!',
            }),
            k.jsx('p', { className: ci.descr, children: 'Stay tuned!' }),
          ],
        }),
        k.jsx('img', {
          src: '/assets/banner/Avengers logo.png',
          alt: 'Avengers logo',
        }),
      ],
    }),
  Bh = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(null),
      l = x.useCallback(
        async (
          o,
          u = 'GET',
          s = null,
          a = { 'Content-Type': 'application/json' }
        ) => {
          t(!0);
          try {
            const p = await fetch(o, { method: u, body: s, headers: a });
            if (!p.ok)
              throw new Error(`Could not fetch ${o}, status: ${p.status}`);
            const h = await p.json();
            return t(!1), h;
          } catch (p) {
            throw (t(!1), r(p.message), p);
          }
        },
        []
      ),
      i = x.useCallback(() => r(null), []);
    return { loading: e, request: l, error: n, clearError: i };
  },
  Ah = () => {
    const e = 'https://gateway.marvel.com:443/v1/public/',
      t = 'apikey=0e1b8bcd2dc50536e9574db39bfca638',
      n = 'comics?noVariants=true&dateDescriptor=thisMonth&limit=12&',
      { loading: l, request: i, error: o, clearError: u } = Bh(),
      s = x.useCallback(
        async (f = 0) =>
          (
            await i(`${e}characters?limit=9&offset=${530 + f}&${t}`)
          ).data.results.map(d => p(d)),
        [i]
      ),
      a = x.useCallback(
        async f => {
          const c = await i(`${e}characters/${f}?${t}`);
          if (c.status >= 400)
            throw new Error(`Suddenly an error occurred - ${c.statusText}`);
          return p(c.data.results[0]);
        },
        [i]
      );
    function p(f) {
      return {
        name: f.name,
        description:
          f.description ||
          'We are do not posses a short description for that character',
        thumbnail: f.thumbnail,
        urls: f.urls,
        id: f.id,
      };
    }
    function h(f) {
      return {
        id: f.id,
        title: f.title,
        thumbnail: f.thumbnail,
        price:
          f.prices[0].price === 0
            ? 'Price is unknown for the moment'
            : f.prices[0].price,
      };
    }
    function m(f) {
      return {
        id: f.id,
        pages: f.pageCount,
        title: f.title,
        thumbnail: f.thumbnail,
        description: f.description || "Author hasn't  provided any description",
        langs: f.langs || 'EN-US',
        price: f.prices[0].price
          ? f.prices[0].price
          : "This comic book is brand new to the market, and pricing hasn't been finalized or announced yet.",
      };
    }
    const g = x.useCallback(
        async f => await i(`${e}characters/${f}/comics?limit=10&${t}`),
        [i]
      ),
      w = x.useCallback(
        async (f = 0) =>
          (await i(`${e}${n}&offset=${f}&${t}`)).data.results.map(d => h(d)),
        [i]
      ),
      v = x.useCallback((f, c) => Math.floor(Math.random() * (f - c) + c), []),
      N = x.useCallback(
        async f => {
          const c = await i(`${e}comics/${f}?${t}`);
          return m(c.data.results[0]);
        },
        [i]
      );
    return {
      loading: l,
      error: o,
      clearError: u,
      getAllCharacters: s,
      getCharacter: a,
      getComics: g,
      getRandomId: v,
      getNewComics: w,
      getSingleComics: N,
    };
  },
  Wh = '/assets/error-a00af8d8.gif',
  Vh = () =>
    k.jsx('img', {
      style: { margin: '0 auto', objectFit: 'contain' },
      src: Wh,
      alt: 'Unexpected error, please try to refresh the page',
    }),
  Jc = () => {
    const e = { textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem' },
      t = Kc();
    return (
      console.log(t(1)),
      k.jsxs('div', {
        children: [
          k.jsx('div', {
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '.725em',
            },
            children: k.jsx(Vh, {}),
          }),
          k.jsx('p', { style: e, children: "This page isn't existing yet" }),
          k.jsx(Rt, {
            style: {
              ...e,
              display: 'block',
              padding: '1em',
              color: '#9f0013',
              fontSize: '2rem',
              textDecoration: 'underline',
            },
            to: '/',
            children: 'Back to main page',
          }),
          k.jsxs(Rt, {
            style: {
              ...e,
              display: 'block',
              padding: '1em',
              fontSize: '1.450rem',
            },
            to: t('/comics'),
            children: [' ', 'Back to previous page'],
          }),
        ],
      })
    );
  },
  Hh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Jc },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Qh = () => {
    const { comicsId: e } = th(),
      [t, n] = x.useState(),
      { getSingleComics: r, loading: l, error: i } = Ah();
    return (
      x.useEffect(() => {
        r(e).then(o => {
          n(o);
        });
      }, [r, e]),
      i
        ? k.jsx(Jc, {})
        : k.jsxs(k.Fragment, {
            children: [
              k.jsx($h, {}),
              t ? k.jsx(Kh, { comicsData: t }) : l ? k.jsx(Zc, {}) : null,
            ],
          })
    );
  },
  Kh = ({ comicsData: e }) => {
    const {
      price: t,
      description: n,
      title: r,
      thumbnail: l,
      langs: i,
      pages: o,
    } = e;
    let u = { marginRight: '.725em' };
    return (
      l.path.includes('image_not_available') && (u.objectFit = 'fill'),
      k.jsxs('div', {
        className: $t.comicsInfo,
        children: [
          k.jsx('img', {
            style: u,
            width: 293,
            height: 450,
            src: `${l.path}.${l.extension}`,
            alt: r,
          }),
          k.jsxs('div', {
            className: $t.descrWrapper,
            children: [
              k.jsx('h3', { className: $t.title, children: r }),
              k.jsx('p', { className: $t.descr, children: n }),
              k.jsxs('div', { children: ['Length: ', o, ' pages'] }),
              k.jsxs('div', { children: ['Language: ', i] }),
              k.jsxs('p', {
                className: typeof t == 'number' ? $t.price : $t.noPrice,
                children: ['Price: ', typeof t == 'number' ? t + ' $' : t],
              }),
            ],
          }),
          k.jsx(Rt, {
            to: '/comics',
            style: { textDecoration: 'underline', color: '#9f0013' },
            children: 'Back to all comics',
          }),
        ],
      })
    );
  },
  Yh = x.lazy(() =>
    iu(
      () => import('./Home-c781723f.js'),
      [
        'assets/Home-c781723f.js',
        'assets/MainButton-409c2996.js',
        'assets/MainButton-e337cace.css',
        'assets/Home-542f3ec2.css',
      ]
    ).then(e => ({ default: e.Home }))
  ),
  Xh = x.lazy(() =>
    iu(
      () => import('./Comics-e304b24c.js'),
      [
        'assets/Comics-e304b24c.js',
        'assets/MainButton-409c2996.js',
        'assets/MainButton-e337cace.css',
        'assets/Comics-12ca8629.css',
      ]
    )
  ),
  Gh = x.lazy(() => iu(() => Promise.resolve().then(() => Hh), void 0));
function Zh() {
  return k.jsxs('div', {
    className: 'container',
    children: [
      k.jsx('header', { children: k.jsx(Lh, {}) }),
      k.jsx('main', {
        children: k.jsx(x.Suspense, {
          fallback: k.jsx(Zc, {}),
          children: k.jsxs(mh, {
            children: [
              k.jsx(zn, { path: '/', exact: !0, element: k.jsx(Yh, {}) }),
              k.jsx(zn, { path: '/comics', element: k.jsx(Xh, {}) }),
              k.jsx(zn, { path: 'comics/:comicsId/', element: k.jsx(Qh, {}) }),
              k.jsx(zn, { path: '*', element: k.jsx(Gh, {}) }),
            ],
          }),
        }),
      }),
    ],
  });
}
fi.createRoot(document.getElementById('root')).render(
  k.jsx(Os.StrictMode, { children: k.jsx(kh, { children: k.jsx(Zh, {}) }) })
);
export {
  $h as B,
  Vh as E,
  Rt as L,
  Jh as N,
  Jc as P,
  Zc as S,
  ef as g,
  k as j,
  x as r,
  Ah as u,
};
