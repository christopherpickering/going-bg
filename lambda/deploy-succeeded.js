!(function (e, a) {
  for (var i in a) e[i] = a[i];
})(
  exports,
  (function (e) {
    var a = {};
    function i(n) {
      if (a[n]) return a[n].exports;
      var o = (a[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    return (
      (i.m = e),
      (i.c = a),
      (i.d = function (e, a, n) {
        i.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: n });
      }),
      (i.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (i.t = function (e, a) {
        if ((1 & a && (e = i(e)), 8 & a)) return e;
        if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & a && 'string' != typeof e)
        )
          for (var o in e)
            i.d(
              n,
              o,
              function (a) {
                return e[a];
              }.bind(null, o),
            );
        return n;
      }),
      (i.n = function (e) {
        var a =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return i.d(a, 'a', a), a;
      }),
      (i.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a);
      }),
      (i.p = ''),
      i((i.s = 20))
    );
  })([
    function (e, a) {
      e.exports = require('stream');
    },
    function (e, a) {
      e.exports = require('zlib');
    },
    function (e, a) {
      e.exports = require('util');
    },
    ,
    function (e, a) {
      e.exports = require('url');
    },
    function (e, a) {
      e.exports = require('http');
    },
    function (e, a) {
      e.exports = require('https');
    },
    function (e, a) {
      e.exports = require('path');
    },
    function (e, a, i) {
      var n = i(9),
        o = i(10);
      e.exports = function (e, a, i, s) {
        var t = i.keyedList ? i.keyedList[i.index] : i.index;
        i.jobs[t] = (function (e, a, i, o) {
          var s;
          s = 2 == e.length ? e(i, n(o)) : e(i, a, n(o));
          return s;
        })(a, t, e[t], function (e, a) {
          t in i.jobs &&
            (delete i.jobs[t], e ? o(i) : (i.results[t] = a), s(e, i.results));
        });
      };
    },
    function (e, a, i) {
      var n = i(29);
      e.exports = function (e) {
        var a = !1;
        return (
          n(function () {
            a = !0;
          }),
          function (i, o) {
            a
              ? e(i, o)
              : n(function () {
                  e(i, o);
                });
          }
        );
      };
    },
    function (e, a) {
      function i(e) {
        'function' == typeof this.jobs[e] && this.jobs[e]();
      }
      e.exports = function (e) {
        Object.keys(e.jobs).forEach(i.bind(e)), (e.jobs = {});
      };
    },
    function (e, a) {
      e.exports = function (e, a) {
        var i = !Array.isArray(e),
          n = {
            index: 0,
            keyedList: i || a ? Object.keys(e) : null,
            jobs: {},
            results: i ? {} : [],
            size: i ? Object.keys(e).length : e.length,
          };
        a &&
          n.keyedList.sort(
            i
              ? a
              : function (i, n) {
                  return a(e[i], e[n]);
                },
          );
        return n;
      };
    },
    function (e, a, i) {
      var n = i(10),
        o = i(9);
      e.exports = function (e) {
        if (!Object.keys(this.jobs).length) return;
        (this.index = this.size), n(this), o(e)(null, this.results);
      };
    },
    function (e, a, i) {
      var n = i(8),
        o = i(11),
        s = i(12);
      function t(e, a) {
        return e < a ? -1 : e > a ? 1 : 0;
      }
      (e.exports = function (e, a, i, t) {
        var r = o(e, i);
        return (
          n(e, a, r, function i(o, s) {
            o
              ? t(o, s)
              : (r.index++,
                r.index < (r.keyedList || e).length
                  ? n(e, a, r, i)
                  : t(null, r.results));
          }),
          s.bind(r, t)
        );
      }),
        (e.exports.ascending = t),
        (e.exports.descending = function (e, a) {
          return -1 * t(e, a);
        });
    },
    function (e, a, i) {
      e.exports = function (e) {
        function a(e) {
          let i,
            o,
            s,
            t = null;
          function r(...e) {
            if (!r.enabled) return;
            const n = r,
              o = Number(new Date()),
              s = o - (i || o);
            (n.diff = s),
              (n.prev = i),
              (n.curr = o),
              (i = o),
              (e[0] = a.coerce(e[0])),
              'string' != typeof e[0] && e.unshift('%O');
            let t = 0;
            (e[0] = e[0].replace(/%([a-zA-Z%])/g, (i, o) => {
              if ('%%' === i) return '%';
              t++;
              const s = a.formatters[o];
              if ('function' == typeof s) {
                const a = e[t];
                (i = s.call(n, a)), e.splice(t, 1), t--;
              }
              return i;
            })),
              a.formatArgs.call(n, e);
            (n.log || a.log).apply(n, e);
          }
          return (
            (r.namespace = e),
            (r.useColors = a.useColors()),
            (r.color = a.selectColor(e)),
            (r.extend = n),
            (r.destroy = a.destroy),
            Object.defineProperty(r, 'enabled', {
              enumerable: !0,
              configurable: !1,
              get: () =>
                null !== t
                  ? t
                  : (o !== a.namespaces &&
                      ((o = a.namespaces), (s = a.enabled(e))),
                    s),
              set: (e) => {
                t = e;
              },
            }),
            'function' == typeof a.init && a.init(r),
            r
          );
        }
        function n(e, i) {
          const n = a(this.namespace + (void 0 === i ? ':' : i) + e);
          return (n.log = this.log), n;
        }
        function o(e) {
          return e
            .toString()
            .substring(2, e.toString().length - 2)
            .replace(/\.\*\?$/, '*');
        }
        return (
          (a.debug = a),
          (a.default = a),
          (a.coerce = function (e) {
            if (e instanceof Error) return e.stack || e.message;
            return e;
          }),
          (a.disable = function () {
            const e = [
              ...a.names.map(o),
              ...a.skips.map(o).map((e) => '-' + e),
            ].join(',');
            return a.enable(''), e;
          }),
          (a.enable = function (e) {
            let i;
            a.save(e), (a.namespaces = e), (a.names = []), (a.skips = []);
            const n = ('string' == typeof e ? e : '').split(/[\s,]+/),
              o = n.length;
            for (i = 0; i < o; i++)
              n[i] &&
                ('-' === (e = n[i].replace(/\*/g, '.*?'))[0]
                  ? a.skips.push(new RegExp('^' + e.slice(1) + '$'))
                  : a.names.push(new RegExp('^' + e + '$')));
          }),
          (a.enabled = function (e) {
            if ('*' === e[e.length - 1]) return !0;
            let i, n;
            for (i = 0, n = a.skips.length; i < n; i++)
              if (a.skips[i].test(e)) return !1;
            for (i = 0, n = a.names.length; i < n; i++)
              if (a.names[i].test(e)) return !0;
            return !1;
          }),
          (a.humanize = i(36)),
          (a.destroy = function () {
            console.warn(
              'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
            );
          }),
          Object.keys(e).forEach((i) => {
            a[i] = e[i];
          }),
          (a.names = []),
          (a.skips = []),
          (a.formatters = {}),
          (a.selectColor = function (e) {
            let i = 0;
            for (let a = 0; a < e.length; a++)
              (i = (i << 5) - i + e.charCodeAt(a)), (i |= 0);
            return a.colors[Math.abs(i) % a.colors.length];
          }),
          a.enable(a.load()),
          a
        );
      };
    },
    function (e, a) {
      e.exports = require('tty');
    },
    function (e, a, i) {
      var n = i(21),
        o = i(2),
        s = i(7),
        t = i(5),
        r = i(6),
        c = i(4).parse,
        p = i(23),
        l = i(0).Stream,
        u = i(24),
        m = i(27),
        d = i(31);
      function x(e) {
        if (!(this instanceof x)) return new x(e);
        for (var a in ((this._overheadLength = 0),
        (this._valueLength = 0),
        (this._valuesToMeasure = []),
        n.call(this),
        (e = e || {})))
          this[a] = e[a];
      }
      (e.exports = x),
        o.inherits(x, n),
        (x.LINE_BREAK = '\r\n'),
        (x.DEFAULT_CONTENT_TYPE = 'application/octet-stream'),
        (x.prototype.append = function (e, a, i) {
          'string' == typeof (i = i || {}) && (i = { filename: i });
          var s = n.prototype.append.bind(this);
          if (('number' == typeof a && (a = '' + a), o.isArray(a)))
            this._error(new Error('Arrays are not supported.'));
          else {
            var t = this._multiPartHeader(e, a, i),
              r = this._multiPartFooter();
            s(t), s(a), s(r), this._trackLength(t, a, i);
          }
        }),
        (x.prototype._trackLength = function (e, a, i) {
          var n = 0;
          null != i.knownLength
            ? (n += +i.knownLength)
            : Buffer.isBuffer(a)
            ? (n = a.length)
            : 'string' == typeof a && (n = Buffer.byteLength(a)),
            (this._valueLength += n),
            (this._overheadLength +=
              Buffer.byteLength(e) + x.LINE_BREAK.length),
            a &&
              (a.path ||
                (a.readable && a.hasOwnProperty('httpVersion')) ||
                a instanceof l) &&
              (i.knownLength || this._valuesToMeasure.push(a));
        }),
        (x.prototype._lengthRetriever = function (e, a) {
          e.hasOwnProperty('fd')
            ? null != e.end && e.end != 1 / 0 && null != e.start
              ? a(null, e.end + 1 - (e.start ? e.start : 0))
              : p.stat(e.path, function (i, n) {
                  var o;
                  i
                    ? a(i)
                    : ((o = n.size - (e.start ? e.start : 0)), a(null, o));
                })
            : e.hasOwnProperty('httpVersion')
            ? a(null, +e.headers['content-length'])
            : e.hasOwnProperty('httpModule')
            ? (e.on('response', function (i) {
                e.pause(), a(null, +i.headers['content-length']);
              }),
              e.resume())
            : a('Unknown stream');
        }),
        (x.prototype._multiPartHeader = function (e, a, i) {
          if ('string' == typeof i.header) return i.header;
          var n,
            o = this._getContentDisposition(a, i),
            s = this._getContentType(a, i),
            t = '',
            r = {
              'Content-Disposition': ['form-data', 'name="' + e + '"'].concat(
                o || [],
              ),
              'Content-Type': [].concat(s || []),
            };
          for (var c in ('object' == typeof i.header && d(r, i.header), r))
            r.hasOwnProperty(c) &&
              null != (n = r[c]) &&
              (Array.isArray(n) || (n = [n]),
              n.length && (t += c + ': ' + n.join('; ') + x.LINE_BREAK));
          return '--' + this.getBoundary() + x.LINE_BREAK + t + x.LINE_BREAK;
        }),
        (x.prototype._getContentDisposition = function (e, a) {
          var i, n;
          return (
            'string' == typeof a.filepath
              ? (i = s.normalize(a.filepath).replace(/\\/g, '/'))
              : a.filename || e.name || e.path
              ? (i = s.basename(a.filename || e.name || e.path))
              : e.readable &&
                e.hasOwnProperty('httpVersion') &&
                (i = s.basename(e.client._httpMessage.path || '')),
            i && (n = 'filename="' + i + '"'),
            n
          );
        }),
        (x.prototype._getContentType = function (e, a) {
          var i = a.contentType;
          return (
            !i && e.name && (i = u.lookup(e.name)),
            !i && e.path && (i = u.lookup(e.path)),
            !i &&
              e.readable &&
              e.hasOwnProperty('httpVersion') &&
              (i = e.headers['content-type']),
            i ||
              (!a.filepath && !a.filename) ||
              (i = u.lookup(a.filepath || a.filename)),
            i || 'object' != typeof e || (i = x.DEFAULT_CONTENT_TYPE),
            i
          );
        }),
        (x.prototype._multiPartFooter = function () {
          return function (e) {
            var a = x.LINE_BREAK;
            0 === this._streams.length && (a += this._lastBoundary()), e(a);
          }.bind(this);
        }),
        (x.prototype._lastBoundary = function () {
          return '--' + this.getBoundary() + '--' + x.LINE_BREAK;
        }),
        (x.prototype.getHeaders = function (e) {
          var a,
            i = {
              'content-type':
                'multipart/form-data; boundary=' + this.getBoundary(),
            };
          for (a in e) e.hasOwnProperty(a) && (i[a.toLowerCase()] = e[a]);
          return i;
        }),
        (x.prototype.setBoundary = function (e) {
          this._boundary = e;
        }),
        (x.prototype.getBoundary = function () {
          return this._boundary || this._generateBoundary(), this._boundary;
        }),
        (x.prototype.getBuffer = function () {
          for (
            var e = new Buffer.alloc(0),
              a = this.getBoundary(),
              i = 0,
              n = this._streams.length;
            i < n;
            i++
          )
            'function' != typeof this._streams[i] &&
              ((e = Buffer.isBuffer(this._streams[i])
                ? Buffer.concat([e, this._streams[i]])
                : Buffer.concat([e, Buffer.from(this._streams[i])])),
              ('string' == typeof this._streams[i] &&
                this._streams[i].substring(2, a.length + 2) === a) ||
                (e = Buffer.concat([e, Buffer.from(x.LINE_BREAK)])));
          return Buffer.concat([e, Buffer.from(this._lastBoundary())]);
        }),
        (x.prototype._generateBoundary = function () {
          for (var e = '--------------------------', a = 0; a < 24; a++)
            e += Math.floor(10 * Math.random()).toString(16);
          this._boundary = e;
        }),
        (x.prototype.getLengthSync = function () {
          var e = this._overheadLength + this._valueLength;
          return (
            this._streams.length && (e += this._lastBoundary().length),
            this.hasKnownLength() ||
              this._error(
                new Error('Cannot calculate proper length in synchronous way.'),
              ),
            e
          );
        }),
        (x.prototype.hasKnownLength = function () {
          var e = !0;
          return this._valuesToMeasure.length && (e = !1), e;
        }),
        (x.prototype.getLength = function (e) {
          var a = this._overheadLength + this._valueLength;
          this._streams.length && (a += this._lastBoundary().length),
            this._valuesToMeasure.length
              ? m.parallel(
                  this._valuesToMeasure,
                  this._lengthRetriever,
                  function (i, n) {
                    i
                      ? e(i)
                      : (n.forEach(function (e) {
                          a += e;
                        }),
                        e(null, a));
                  },
                )
              : process.nextTick(e.bind(this, null, a));
        }),
        (x.prototype.submit = function (e, a) {
          var i,
            n,
            o = { method: 'post' };
          return (
            'string' == typeof e
              ? ((e = c(e)),
                (n = d(
                  {
                    port: e.port,
                    path: e.pathname,
                    host: e.hostname,
                    protocol: e.protocol,
                  },
                  o,
                )))
              : (n = d(e, o)).port ||
                (n.port = 'https:' == n.protocol ? 443 : 80),
            (n.headers = this.getHeaders(e.headers)),
            (i = 'https:' == n.protocol ? r.request(n) : t.request(n)),
            this.getLength(
              function (e, n) {
                if (e && 'Unknown stream' !== e) this._error(e);
                else if (
                  (n && i.setHeader('Content-Length', n), this.pipe(i), a)
                ) {
                  var o,
                    s = function (e, n) {
                      return (
                        i.removeListener('error', s),
                        i.removeListener('response', o),
                        a.call(this, e, n)
                      );
                    };
                  (o = s.bind(this, null)),
                    i.on('error', s),
                    i.on('response', o);
                }
              }.bind(this),
            ),
            i
          );
        }),
        (x.prototype._error = function (e) {
          this.error || ((this.error = e), this.pause(), this.emit('error', e));
        }),
        (x.prototype.toString = function () {
          return '[object FormData]';
        });
    },
    function (e, a, i) {
      'use strict';
      var n = i(4).parse,
        o = { ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 },
        s =
          String.prototype.endsWith ||
          function (e) {
            return (
              e.length <= this.length &&
              -1 !== this.indexOf(e, this.length - e.length)
            );
          };
      function t(e) {
        return (
          process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || ''
        );
      }
      a.getProxyForUrl = function (e) {
        var a = 'string' == typeof e ? n(e) : e || {},
          i = a.protocol,
          r = a.host,
          c = a.port;
        if ('string' != typeof r || !r || 'string' != typeof i) return '';
        if (
          ((i = i.split(':', 1)[0]),
          !(function (e, a) {
            var i = (t('npm_config_no_proxy') || t('no_proxy')).toLowerCase();
            if (!i) return !0;
            if ('*' === i) return !1;
            return i.split(/[,\s]/).every(function (i) {
              if (!i) return !0;
              var n = i.match(/^(.+):(\d+)$/),
                o = n ? n[1] : i,
                t = n ? parseInt(n[2]) : 0;
              return (
                !(!t || t === a) ||
                (/^[.*]/.test(o)
                  ? ('*' === o.charAt(0) && (o = o.slice(1)), !s.call(e, o))
                  : e !== o)
              );
            });
          })((r = r.replace(/:\d*$/, '')), (c = parseInt(c) || o[i] || 0)))
        )
          return '';
        var p =
          t('npm_config_' + i + '_proxy') ||
          t(i + '_proxy') ||
          t('npm_config_proxy') ||
          t('all_proxy');
        return p && -1 === p.indexOf('://') && (p = i + '://' + p), p;
      };
    },
    function (e, a, i) {
      var n = i(4),
        o = n.URL,
        s = i(5),
        t = i(6),
        r = i(0).Writable,
        c = i(32),
        p = i(33),
        l = ['abort', 'aborted', 'connect', 'error', 'socket', 'timeout'],
        u = Object.create(null);
      l.forEach(function (e) {
        u[e] = function (a, i, n) {
          this._redirectable.emit(e, a, i, n);
        };
      });
      var m = w('ERR_FR_REDIRECTION_FAILURE', 'Redirected request failed'),
        d = w(
          'ERR_FR_TOO_MANY_REDIRECTS',
          'Maximum number of redirects exceeded',
        ),
        x = w(
          'ERR_FR_MAX_BODY_LENGTH_EXCEEDED',
          'Request body larger than maxBodyLength limit',
        ),
        f = w('ERR_STREAM_WRITE_AFTER_END', 'write after end');
      function v(e, a) {
        r.call(this),
          this._sanitizeOptions(e),
          (this._options = e),
          (this._ended = !1),
          (this._ending = !1),
          (this._redirectCount = 0),
          (this._redirects = []),
          (this._requestBodyLength = 0),
          (this._requestBodyBuffers = []),
          a && this.on('response', a);
        var i = this;
        (this._onNativeResponse = function (e) {
          i._processResponse(e);
        }),
          this._performRequest();
      }
      function h(e) {
        var a = { maxRedirects: 21, maxBodyLength: 10485760 },
          i = {};
        return (
          Object.keys(e).forEach(function (s) {
            var t = s + ':',
              r = (i[t] = e[s]),
              l = (a[s] = Object.create(r));
            Object.defineProperties(l, {
              request: {
                value: function (e, s, r) {
                  if ('string' == typeof e) {
                    var l = e;
                    try {
                      e = g(new o(l));
                    } catch (a) {
                      e = n.parse(l);
                    }
                  } else
                    o && e instanceof o
                      ? (e = g(e))
                      : ((r = s), (s = e), (e = { protocol: t }));
                  return (
                    'function' == typeof s && ((r = s), (s = null)),
                    ((s = Object.assign(
                      {
                        maxRedirects: a.maxRedirects,
                        maxBodyLength: a.maxBodyLength,
                      },
                      e,
                      s,
                    )).nativeProtocols = i),
                    c.equal(s.protocol, t, 'protocol mismatch'),
                    p('options', s),
                    new v(s, r)
                  );
                },
                configurable: !0,
                enumerable: !0,
                writable: !0,
              },
              get: {
                value: function (e, a, i) {
                  var n = l.request(e, a, i);
                  return n.end(), n;
                },
                configurable: !0,
                enumerable: !0,
                writable: !0,
              },
            });
          }),
          a
        );
      }
      function b() {}
      function g(e) {
        var a = {
          protocol: e.protocol,
          hostname: e.hostname.startsWith('[')
            ? e.hostname.slice(1, -1)
            : e.hostname,
          hash: e.hash,
          search: e.search,
          pathname: e.pathname,
          path: e.pathname + e.search,
          href: e.href,
        };
        return '' !== e.port && (a.port = Number(e.port)), a;
      }
      function y(e, a) {
        var i;
        for (var n in a) e.test(n) && ((i = a[n]), delete a[n]);
        return null == i ? void 0 : String(i).trim();
      }
      function w(e, a) {
        function i(e) {
          Error.captureStackTrace(this, this.constructor),
            e
              ? ((this.message = a + ': ' + e.message), (this.cause = e))
              : (this.message = a);
        }
        return (
          (i.prototype = new Error()),
          (i.prototype.constructor = i),
          (i.prototype.name = 'Error [' + e + ']'),
          (i.prototype.code = e),
          i
        );
      }
      function k(e) {
        for (var a = 0; a < l.length; a++) e.removeListener(l[a], u[l[a]]);
        e.on('error', b), e.abort();
      }
      (v.prototype = Object.create(r.prototype)),
        (v.prototype.abort = function () {
          k(this._currentRequest), this.emit('abort');
        }),
        (v.prototype.write = function (e, a, i) {
          if (this._ending) throw new f();
          if (
            !('string' == typeof e || ('object' == typeof e && 'length' in e))
          )
            throw new TypeError(
              'data should be a string, Buffer or Uint8Array',
            );
          'function' == typeof a && ((i = a), (a = null)),
            0 !== e.length
              ? this._requestBodyLength + e.length <=
                this._options.maxBodyLength
                ? ((this._requestBodyLength += e.length),
                  this._requestBodyBuffers.push({ data: e, encoding: a }),
                  this._currentRequest.write(e, a, i))
                : (this.emit('error', new x()), this.abort())
              : i && i();
        }),
        (v.prototype.end = function (e, a, i) {
          if (
            ('function' == typeof e
              ? ((i = e), (e = a = null))
              : 'function' == typeof a && ((i = a), (a = null)),
            e)
          ) {
            var n = this,
              o = this._currentRequest;
            this.write(e, a, function () {
              (n._ended = !0), o.end(null, null, i);
            }),
              (this._ending = !0);
          } else
            (this._ended = this._ending = !0),
              this._currentRequest.end(null, null, i);
        }),
        (v.prototype.setHeader = function (e, a) {
          (this._options.headers[e] = a), this._currentRequest.setHeader(e, a);
        }),
        (v.prototype.removeHeader = function (e) {
          delete this._options.headers[e], this._currentRequest.removeHeader(e);
        }),
        (v.prototype.setTimeout = function (e, a) {
          var i = this;
          function n(a) {
            a.setTimeout(e),
              a.removeListener('timeout', a.destroy),
              a.addListener('timeout', a.destroy);
          }
          function o(a) {
            i._timeout && clearTimeout(i._timeout),
              (i._timeout = setTimeout(function () {
                i.emit('timeout'), s();
              }, e)),
              n(a);
          }
          function s() {
            i._timeout && (clearTimeout(i._timeout), (i._timeout = null)),
              i.removeListener('abort', s),
              i.removeListener('error', s),
              i.removeListener('response', s),
              a && i.removeListener('timeout', a),
              i.socket || i._currentRequest.removeListener('socket', o);
          }
          return (
            a && this.on('timeout', a),
            this.socket
              ? o(this.socket)
              : this._currentRequest.once('socket', o),
            this.on('socket', n),
            this.on('abort', s),
            this.on('error', s),
            this.on('response', s),
            this
          );
        }),
        [
          'flushHeaders',
          'getHeader',
          'setNoDelay',
          'setSocketKeepAlive',
        ].forEach(function (e) {
          v.prototype[e] = function (a, i) {
            return this._currentRequest[e](a, i);
          };
        }),
        ['aborted', 'connection', 'socket'].forEach(function (e) {
          Object.defineProperty(v.prototype, e, {
            get: function () {
              return this._currentRequest[e];
            },
          });
        }),
        (v.prototype._sanitizeOptions = function (e) {
          if (
            (e.headers || (e.headers = {}),
            e.host && (e.hostname || (e.hostname = e.host), delete e.host),
            !e.pathname && e.path)
          ) {
            var a = e.path.indexOf('?');
            a < 0
              ? (e.pathname = e.path)
              : ((e.pathname = e.path.substring(0, a)),
                (e.search = e.path.substring(a)));
          }
        }),
        (v.prototype._performRequest = function () {
          var e = this._options.protocol,
            a = this._options.nativeProtocols[e];
          if (a) {
            if (this._options.agents) {
              var i = e.slice(0, -1);
              this._options.agent = this._options.agents[i];
            }
            var o = (this._currentRequest = a.request(
              this._options,
              this._onNativeResponse,
            ));
            (this._currentUrl = n.format(this._options)),
              (o._redirectable = this);
            for (var s = 0; s < l.length; s++) o.on(l[s], u[l[s]]);
            if (this._isRedirect) {
              var t = 0,
                r = this,
                c = this._requestBodyBuffers;
              !(function e(a) {
                if (o === r._currentRequest)
                  if (a) r.emit('error', a);
                  else if (t < c.length) {
                    var i = c[t++];
                    o.finished || o.write(i.data, i.encoding, e);
                  } else r._ended && o.end();
              })();
            }
          } else this.emit('error', new TypeError('Unsupported protocol ' + e));
        }),
        (v.prototype._processResponse = function (e) {
          var a = e.statusCode;
          this._options.trackRedirects &&
            this._redirects.push({
              url: this._currentUrl,
              headers: e.headers,
              statusCode: a,
            });
          var i = e.headers.location;
          if (!i || !1 === this._options.followRedirects || a < 300 || a >= 400)
            return (
              (e.responseUrl = this._currentUrl),
              (e.redirects = this._redirects),
              this.emit('response', e),
              void (this._requestBodyBuffers = [])
            );
          if (
            (k(this._currentRequest),
            e.destroy(),
            ++this._redirectCount > this._options.maxRedirects)
          )
            this.emit('error', new d());
          else {
            var o,
              s = this._options.beforeRedirect;
            s &&
              (o = Object.assign(
                { Host: e.req.getHeader('host') },
                this._options.headers,
              ));
            var t = this._options.method;
            (((301 === a || 302 === a) && 'POST' === this._options.method) ||
              (303 === a && !/^(?:GET|HEAD)$/.test(this._options.method))) &&
              ((this._options.method = 'GET'),
              (this._requestBodyBuffers = []),
              y(/^content-/i, this._options.headers));
            var r,
              c = y(/^host$/i, this._options.headers),
              l = n.parse(this._currentUrl),
              u = c || l.host,
              x = /^\w+:/.test(i)
                ? this._currentUrl
                : n.format(Object.assign(l, { host: u }));
            try {
              r = n.resolve(x, i);
            } catch (e) {
              return void this.emit('error', new m(e));
            }
            p('redirecting to', r), (this._isRedirect = !0);
            var f = n.parse(r);
            if (
              (Object.assign(this._options, f),
              ((f.protocol !== l.protocol && 'https:' !== f.protocol) ||
                (f.host !== u &&
                  !(function (e, a) {
                    const i = e.length - a.length - 1;
                    return i > 0 && '.' === e[i] && e.endsWith(a);
                  })(f.host, u))) &&
                y(/^(?:authorization|cookie)$/i, this._options.headers),
              'function' == typeof s)
            ) {
              var v = { headers: e.headers, statusCode: a },
                h = { url: x, method: t, headers: o };
              try {
                s(this._options, v, h);
              } catch (e) {
                return void this.emit('error', e);
              }
              this._sanitizeOptions(this._options);
            }
            try {
              this._performRequest();
            } catch (e) {
              this.emit('error', new m(e));
            }
          }
        }),
        (e.exports = h({ http: s, https: t })),
        (e.exports.wrap = h);
    },
    function (e, a) {
      e.exports = require('events');
    },
    function (e, a, i) {
      const n = 'https://www.going.bg/sitemap.xml',
        o = i(41);
      a.handler = async (e) => {
        try {
          const { payload: a } = JSON.parse(e.body),
            { state: i, context: s } = a;
          return 'ready' === i && 'production' === s
            ? (console.log('Sending sitemap ping to google for ' + n),
              o.get('https://www.google.com/ping?sitemap=' + n),
              console.log('Sending sitemap ping to bing for ' + n),
              o.get('http://www.bing.com/ping?sitemap=' + n),
              { statusCode: 200, body: 'Submitted Successfully' })
            : (console.log('Conditions not met, not submitting'),
              { statusCode: 200, body: 'Conditions not met, not submitting' });
        } catch (e) {
          throw (console.log(e), e);
        }
      };
    },
    function (e, a, i) {
      var n = i(2),
        o = i(0).Stream,
        s = i(22);
      function t() {
        (this.writable = !1),
          (this.readable = !0),
          (this.dataSize = 0),
          (this.maxDataSize = 2097152),
          (this.pauseStreams = !0),
          (this._released = !1),
          (this._streams = []),
          (this._currentStream = null),
          (this._insideLoop = !1),
          (this._pendingNext = !1);
      }
      (e.exports = t),
        n.inherits(t, o),
        (t.create = function (e) {
          var a = new this();
          for (var i in (e = e || {})) a[i] = e[i];
          return a;
        }),
        (t.isStreamLike = function (e) {
          return (
            'function' != typeof e &&
            'string' != typeof e &&
            'boolean' != typeof e &&
            'number' != typeof e &&
            !Buffer.isBuffer(e)
          );
        }),
        (t.prototype.append = function (e) {
          if (t.isStreamLike(e)) {
            if (!(e instanceof s)) {
              var a = s.create(e, {
                maxDataSize: 1 / 0,
                pauseStream: this.pauseStreams,
              });
              e.on('data', this._checkDataSize.bind(this)), (e = a);
            }
            this._handleErrors(e), this.pauseStreams && e.pause();
          }
          return this._streams.push(e), this;
        }),
        (t.prototype.pipe = function (e, a) {
          return o.prototype.pipe.call(this, e, a), this.resume(), e;
        }),
        (t.prototype._getNext = function () {
          if (((this._currentStream = null), this._insideLoop))
            this._pendingNext = !0;
          else {
            this._insideLoop = !0;
            try {
              do {
                (this._pendingNext = !1), this._realGetNext();
              } while (this._pendingNext);
            } finally {
              this._insideLoop = !1;
            }
          }
        }),
        (t.prototype._realGetNext = function () {
          var e = this._streams.shift();
          void 0 !== e
            ? 'function' == typeof e
              ? e(
                  function (e) {
                    t.isStreamLike(e) &&
                      (e.on('data', this._checkDataSize.bind(this)),
                      this._handleErrors(e)),
                      this._pipeNext(e);
                  }.bind(this),
                )
              : this._pipeNext(e)
            : this.end();
        }),
        (t.prototype._pipeNext = function (e) {
          if (((this._currentStream = e), t.isStreamLike(e)))
            return (
              e.on('end', this._getNext.bind(this)),
              void e.pipe(this, { end: !1 })
            );
          var a = e;
          this.write(a), this._getNext();
        }),
        (t.prototype._handleErrors = function (e) {
          var a = this;
          e.on('error', function (e) {
            a._emitError(e);
          });
        }),
        (t.prototype.write = function (e) {
          this.emit('data', e);
        }),
        (t.prototype.pause = function () {
          this.pauseStreams &&
            (this.pauseStreams &&
              this._currentStream &&
              'function' == typeof this._currentStream.pause &&
              this._currentStream.pause(),
            this.emit('pause'));
        }),
        (t.prototype.resume = function () {
          this._released ||
            ((this._released = !0), (this.writable = !0), this._getNext()),
            this.pauseStreams &&
              this._currentStream &&
              'function' == typeof this._currentStream.resume &&
              this._currentStream.resume(),
            this.emit('resume');
        }),
        (t.prototype.end = function () {
          this._reset(), this.emit('end');
        }),
        (t.prototype.destroy = function () {
          this._reset(), this.emit('close');
        }),
        (t.prototype._reset = function () {
          (this.writable = !1),
            (this._streams = []),
            (this._currentStream = null);
        }),
        (t.prototype._checkDataSize = function () {
          if ((this._updateDataSize(), !(this.dataSize <= this.maxDataSize))) {
            var e =
              'DelayedStream#maxDataSize of ' +
              this.maxDataSize +
              ' bytes exceeded.';
            this._emitError(new Error(e));
          }
        }),
        (t.prototype._updateDataSize = function () {
          this.dataSize = 0;
          var e = this;
          this._streams.forEach(function (a) {
            a.dataSize && (e.dataSize += a.dataSize);
          }),
            this._currentStream &&
              this._currentStream.dataSize &&
              (this.dataSize += this._currentStream.dataSize);
        }),
        (t.prototype._emitError = function (e) {
          this._reset(), this.emit('error', e);
        });
    },
    function (e, a, i) {
      var n = i(0).Stream,
        o = i(2);
      function s() {
        (this.source = null),
          (this.dataSize = 0),
          (this.maxDataSize = 1048576),
          (this.pauseStream = !0),
          (this._maxDataSizeExceeded = !1),
          (this._released = !1),
          (this._bufferedEvents = []);
      }
      (e.exports = s),
        o.inherits(s, n),
        (s.create = function (e, a) {
          var i = new this();
          for (var n in (a = a || {})) i[n] = a[n];
          i.source = e;
          var o = e.emit;
          return (
            (e.emit = function () {
              return i._handleEmit(arguments), o.apply(e, arguments);
            }),
            e.on('error', function () {}),
            i.pauseStream && e.pause(),
            i
          );
        }),
        Object.defineProperty(s.prototype, 'readable', {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.source.readable;
          },
        }),
        (s.prototype.setEncoding = function () {
          return this.source.setEncoding.apply(this.source, arguments);
        }),
        (s.prototype.resume = function () {
          this._released || this.release(), this.source.resume();
        }),
        (s.prototype.pause = function () {
          this.source.pause();
        }),
        (s.prototype.release = function () {
          (this._released = !0),
            this._bufferedEvents.forEach(
              function (e) {
                this.emit.apply(this, e);
              }.bind(this),
            ),
            (this._bufferedEvents = []);
        }),
        (s.prototype.pipe = function () {
          var e = n.prototype.pipe.apply(this, arguments);
          return this.resume(), e;
        }),
        (s.prototype._handleEmit = function (e) {
          this._released
            ? this.emit.apply(this, e)
            : ('data' === e[0] &&
                ((this.dataSize += e[1].length),
                this._checkIfMaxDataSizeExceeded()),
              this._bufferedEvents.push(e));
        }),
        (s.prototype._checkIfMaxDataSizeExceeded = function () {
          if (
            !(this._maxDataSizeExceeded || this.dataSize <= this.maxDataSize)
          ) {
            this._maxDataSizeExceeded = !0;
            var e =
              'DelayedStream#maxDataSize of ' +
              this.maxDataSize +
              ' bytes exceeded.';
            this.emit('error', new Error(e));
          }
        });
    },
    function (e, a) {
      e.exports = require('fs');
    },
    function (e, a, i) {
      'use strict';
      /*!
       * mime-types
       * Copyright(c) 2014 Jonathan Ong
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ var n,
        o,
        s,
        t = i(25),
        r = i(7).extname,
        c = /^\s*([^;\s]*)(?:;|\s|$)/,
        p = /^text\//i;
      function l(e) {
        if (!e || 'string' != typeof e) return !1;
        var a = c.exec(e),
          i = a && t[a[1].toLowerCase()];
        return i && i.charset ? i.charset : !(!a || !p.test(a[1])) && 'UTF-8';
      }
      (a.charset = l),
        (a.charsets = { lookup: l }),
        (a.contentType = function (e) {
          if (!e || 'string' != typeof e) return !1;
          var i = -1 === e.indexOf('/') ? a.lookup(e) : e;
          if (!i) return !1;
          if (-1 === i.indexOf('charset')) {
            var n = a.charset(i);
            n && (i += '; charset=' + n.toLowerCase());
          }
          return i;
        }),
        (a.extension = function (e) {
          if (!e || 'string' != typeof e) return !1;
          var i = c.exec(e),
            n = i && a.extensions[i[1].toLowerCase()];
          if (!n || !n.length) return !1;
          return n[0];
        }),
        (a.extensions = Object.create(null)),
        (a.lookup = function (e) {
          if (!e || 'string' != typeof e) return !1;
          var i = r('x.' + e)
            .toLowerCase()
            .substr(1);
          if (!i) return !1;
          return a.types[i] || !1;
        }),
        (a.types = Object.create(null)),
        (n = a.extensions),
        (o = a.types),
        (s = ['nginx', 'apache', void 0, 'iana']),
        Object.keys(t).forEach(function (e) {
          var a = t[e],
            i = a.extensions;
          if (i && i.length) {
            n[e] = i;
            for (var r = 0; r < i.length; r++) {
              var c = i[r];
              if (o[c]) {
                var p = s.indexOf(t[o[c]].source),
                  l = s.indexOf(a.source);
                if (
                  'application/octet-stream' !== o[c] &&
                  (p > l || (p === l && 'application/' === o[c].substr(0, 12)))
                )
                  continue;
              }
              o[c] = e;
            }
          }
        });
    },
    function (e, a, i) {
      /*!
       * mime-db
       * Copyright(c) 2014 Jonathan Ong
       * MIT Licensed
       */
      e.exports = i(26);
    },
    function (e) {
      e.exports = JSON.parse(
        '{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["es","ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana"},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana"},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana"},"image/avcs":{"source":"iana"},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}',
      );
    },
    function (e, a, i) {
      e.exports = { parallel: i(28), serial: i(30), serialOrdered: i(13) };
    },
    function (e, a, i) {
      var n = i(8),
        o = i(11),
        s = i(12);
      e.exports = function (e, a, i) {
        var t = o(e);
        for (; t.index < (t.keyedList || e).length; )
          n(e, a, t, function (e, a) {
            e
              ? i(e, a)
              : 0 !== Object.keys(t.jobs).length || i(null, t.results);
          }),
            t.index++;
        return s.bind(t, i);
      };
    },
    function (e, a) {
      e.exports = function (e) {
        var a =
          'function' == typeof setImmediate
            ? setImmediate
            : 'object' == typeof process &&
              'function' == typeof process.nextTick
            ? process.nextTick
            : null;
        a ? a(e) : setTimeout(e, 0);
      };
    },
    function (e, a, i) {
      var n = i(13);
      e.exports = function (e, a, i) {
        return n(e, a, null, i);
      };
    },
    function (e, a) {
      e.exports = function (e, a) {
        return (
          Object.keys(a).forEach(function (i) {
            e[i] = e[i] || a[i];
          }),
          e
        );
      };
    },
    function (e, a) {
      e.exports = require('assert');
    },
    function (e, a, i) {
      var n;
      e.exports = function () {
        if (!n) {
          try {
            n = i(34)('follow-redirects');
          } catch (e) {}
          'function' != typeof n && (n = function () {});
        }
        n.apply(null, arguments);
      };
    },
    function (e, a, i) {
      'undefined' == typeof process ||
      'renderer' === process.type ||
      !0 === process.browser ||
      process.__nwjs
        ? (e.exports = i(35))
        : (e.exports = i(37));
    },
    function (e, a, i) {
      (a.formatArgs = function (a) {
        if (
          ((a[0] =
            (this.useColors ? '%c' : '') +
            this.namespace +
            (this.useColors ? ' %c' : ' ') +
            a[0] +
            (this.useColors ? '%c ' : ' ') +
            '+' +
            e.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        const i = 'color: ' + this.color;
        a.splice(1, 0, i, 'color: inherit');
        let n = 0,
          o = 0;
        a[0].replace(/%[a-zA-Z%]/g, (e) => {
          '%%' !== e && (n++, '%c' === e && (o = n));
        }),
          a.splice(o, 0, i);
      }),
        (a.save = function (e) {
          try {
            e ? a.storage.setItem('debug', e) : a.storage.removeItem('debug');
          } catch (e) {}
        }),
        (a.load = function () {
          let e;
          try {
            e = a.storage.getItem('debug');
          } catch (e) {}
          !e &&
            'undefined' != typeof process &&
            'env' in process &&
            (e = process.env.DEBUG);
          return e;
        }),
        (a.useColors = function () {
          if (
            'undefined' != typeof window &&
            window.process &&
            ('renderer' === window.process.type || window.process.__nwjs)
          )
            return !0;
          if (
            'undefined' != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          return (
            ('undefined' != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ('undefined' != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (a.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (a.destroy = (() => {
          let e = !1;
          return () => {
            e ||
              ((e = !0),
              console.warn(
                'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
              ));
          };
        })()),
        (a.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (a.log = console.debug || console.log || (() => {})),
        (e.exports = i(14)(a));
      const { formatters: n } = e.exports;
      n.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '[UnexpectedJSONParseError]: ' + e.message;
        }
      };
    },
    function (e, a) {
      var i = 1e3,
        n = 6e4,
        o = 60 * n,
        s = 24 * o;
      function t(e, a, i, n) {
        var o = a >= 1.5 * i;
        return Math.round(e / i) + ' ' + n + (o ? 's' : '');
      }
      e.exports = function (e, a) {
        a = a || {};
        var r = typeof e;
        if ('string' === r && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var a =
              /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                e,
              );
            if (!a) return;
            var t = parseFloat(a[1]);
            switch ((a[2] || 'ms').toLowerCase()) {
              case 'years':
              case 'year':
              case 'yrs':
              case 'yr':
              case 'y':
                return 315576e5 * t;
              case 'weeks':
              case 'week':
              case 'w':
                return 6048e5 * t;
              case 'days':
              case 'day':
              case 'd':
                return t * s;
              case 'hours':
              case 'hour':
              case 'hrs':
              case 'hr':
              case 'h':
                return t * o;
              case 'minutes':
              case 'minute':
              case 'mins':
              case 'min':
              case 'm':
                return t * n;
              case 'seconds':
              case 'second':
              case 'secs':
              case 'sec':
              case 's':
                return t * i;
              case 'milliseconds':
              case 'millisecond':
              case 'msecs':
              case 'msec':
              case 'ms':
                return t;
              default:
                return;
            }
          })(e);
        if ('number' === r && isFinite(e))
          return a.long
            ? (function (e) {
                var a = Math.abs(e);
                if (a >= s) return t(e, a, s, 'day');
                if (a >= o) return t(e, a, o, 'hour');
                if (a >= n) return t(e, a, n, 'minute');
                if (a >= i) return t(e, a, i, 'second');
                return e + ' ms';
              })(e)
            : (function (e) {
                var a = Math.abs(e);
                if (a >= s) return Math.round(e / s) + 'd';
                if (a >= o) return Math.round(e / o) + 'h';
                if (a >= n) return Math.round(e / n) + 'm';
                if (a >= i) return Math.round(e / i) + 's';
                return e + 'ms';
              })(e);
        throw new Error(
          'val is not a non-empty string or a valid number. val=' +
            JSON.stringify(e),
        );
      };
    },
    function (e, a, i) {
      const n = i(15),
        o = i(2);
      (a.init = function (e) {
        e.inspectOpts = {};
        const i = Object.keys(a.inspectOpts);
        for (let n = 0; n < i.length; n++)
          e.inspectOpts[i[n]] = a.inspectOpts[i[n]];
      }),
        (a.log = function (...e) {
          return process.stderr.write(o.format(...e) + '\n');
        }),
        (a.formatArgs = function (i) {
          const { namespace: n, useColors: o } = this;
          if (o) {
            const a = this.color,
              o = '[3' + (a < 8 ? a : '8;5;' + a),
              s = `  ${o};1m${n} [0m`;
            (i[0] = s + i[0].split('\n').join('\n' + s)),
              i.push(o + 'm+' + e.exports.humanize(this.diff) + '[0m');
          } else
            i[0] =
              (function () {
                if (a.inspectOpts.hideDate) return '';
                return new Date().toISOString() + ' ';
              })() +
              n +
              ' ' +
              i[0];
        }),
        (a.save = function (e) {
          e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
        }),
        (a.load = function () {
          return process.env.DEBUG;
        }),
        (a.useColors = function () {
          return 'colors' in a.inspectOpts
            ? Boolean(a.inspectOpts.colors)
            : n.isatty(process.stderr.fd);
        }),
        (a.destroy = o.deprecate(() => {},
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.')),
        (a.colors = [6, 2, 3, 4, 5, 1]);
      try {
        const e = i(38);
        e &&
          (e.stderr || e).level >= 2 &&
          (a.colors = [
            20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62,
            63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112,
            113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165,
            166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196,
            197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209,
            214, 215, 220, 221,
          ]);
      } catch (e) {}
      (a.inspectOpts = Object.keys(process.env)
        .filter((e) => /^debug_/i.test(e))
        .reduce((e, a) => {
          const i = a
            .substring(6)
            .toLowerCase()
            .replace(/_([a-z])/g, (e, a) => a.toUpperCase());
          let n = process.env[a];
          return (
            (n =
              !!/^(yes|on|true|enabled)$/i.test(n) ||
              (!/^(no|off|false|disabled)$/i.test(n) &&
                ('null' === n ? null : Number(n)))),
            (e[i] = n),
            e
          );
        }, {})),
        (e.exports = i(14)(a));
      const { formatters: s } = e.exports;
      (s.o = function (e) {
        return (
          (this.inspectOpts.colors = this.useColors),
          o
            .inspect(e, this.inspectOpts)
            .split('\n')
            .map((e) => e.trim())
            .join(' ')
        );
      }),
        (s.O = function (e) {
          return (
            (this.inspectOpts.colors = this.useColors),
            o.inspect(e, this.inspectOpts)
          );
        });
    },
    function (e, a, i) {
      'use strict';
      const n = i(39),
        o = i(15),
        s = i(40),
        { env: t } = process;
      let r;
      function c(e) {
        return (
          0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 }
        );
      }
      function p(e, a) {
        if (0 === r) return 0;
        if (s('color=16m') || s('color=full') || s('color=truecolor')) return 3;
        if (s('color=256')) return 2;
        if (e && !a && void 0 === r) return 0;
        const i = r || 0;
        if ('dumb' === t.TERM) return i;
        if ('win32' === process.platform) {
          const e = n.release().split('.');
          return Number(e[0]) >= 10 && Number(e[2]) >= 10586
            ? Number(e[2]) >= 14931
              ? 3
              : 2
            : 1;
        }
        if ('CI' in t)
          return [
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE',
          ].some((e) => e in t) || 'codeship' === t.CI_NAME
            ? 1
            : i;
        if ('TEAMCITY_VERSION' in t)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(t.TEAMCITY_VERSION)
            ? 1
            : 0;
        if ('truecolor' === t.COLORTERM) return 3;
        if ('TERM_PROGRAM' in t) {
          const e = parseInt((t.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
          switch (t.TERM_PROGRAM) {
            case 'iTerm.app':
              return e >= 3 ? 3 : 2;
            case 'Apple_Terminal':
              return 2;
          }
        }
        return /-256(color)?$/i.test(t.TERM)
          ? 2
          : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
              t.TERM,
            ) || 'COLORTERM' in t
          ? 1
          : i;
      }
      s('no-color') || s('no-colors') || s('color=false') || s('color=never')
        ? (r = 0)
        : (s('color') || s('colors') || s('color=true') || s('color=always')) &&
          (r = 1),
        'FORCE_COLOR' in t &&
          (r =
            'true' === t.FORCE_COLOR
              ? 1
              : 'false' === t.FORCE_COLOR
              ? 0
              : 0 === t.FORCE_COLOR.length
              ? 1
              : Math.min(parseInt(t.FORCE_COLOR, 10), 3)),
        (e.exports = {
          supportsColor: function (e) {
            return c(p(e, e && e.isTTY));
          },
          stdout: c(p(!0, o.isatty(1))),
          stderr: c(p(!0, o.isatty(2))),
        });
    },
    function (e, a) {
      e.exports = require('os');
    },
    function (e, a, i) {
      'use strict';
      e.exports = (e, a = process.argv) => {
        const i = e.startsWith('-') ? '' : 1 === e.length ? '-' : '--',
          n = a.indexOf(i + e),
          o = a.indexOf('--');
        return -1 !== n && (-1 === o || n < o);
      };
    },
    function (e, a, i) {
      'use strict';
      function n(e, a) {
        return function () {
          return e.apply(a, arguments);
        };
      }
      i.r(a),
        i.d(a, 'default', function () {
          return Ra;
        }),
        i.d(a, 'Axios', function () {
          return Oa;
        }),
        i.d(a, 'AxiosError', function () {
          return Sa;
        }),
        i.d(a, 'CanceledError', function () {
          return Ta;
        }),
        i.d(a, 'isCancel', function () {
          return za;
        }),
        i.d(a, 'CancelToken', function () {
          return Fa;
        }),
        i.d(a, 'VERSION', function () {
          return Aa;
        }),
        i.d(a, 'all', function () {
          return La;
        }),
        i.d(a, 'Cancel', function () {
          return qa;
        }),
        i.d(a, 'isAxiosError', function () {
          return Ba;
        }),
        i.d(a, 'spread', function () {
          return Na;
        }),
        i.d(a, 'toFormData', function () {
          return Ua;
        }),
        i.d(a, 'AxiosHeaders', function () {
          return Pa;
        }),
        i.d(a, 'HttpStatusCode', function () {
          return Da;
        }),
        i.d(a, 'formToJSON', function () {
          return Ia;
        }),
        i.d(a, 'mergeConfig', function () {
          return Ma;
        });
      const { toString: o } = Object.prototype,
        { getPrototypeOf: s } = Object,
        t =
          ((r = Object.create(null)),
          (e) => {
            const a = o.call(e);
            return r[a] || (r[a] = a.slice(8, -1).toLowerCase());
          });
      var r;
      const c = (e) => ((e = e.toLowerCase()), (a) => t(a) === e),
        p = (e) => (a) => typeof a === e,
        { isArray: l } = Array,
        u = p('undefined');
      const m = c('ArrayBuffer');
      const d = p('string'),
        x = p('function'),
        f = p('number'),
        v = (e) => null !== e && 'object' == typeof e,
        h = (e) => {
          if ('object' !== t(e)) return !1;
          const a = s(e);
          return !(
            (null !== a &&
              a !== Object.prototype &&
              null !== Object.getPrototypeOf(a)) ||
            Symbol.toStringTag in e ||
            Symbol.iterator in e
          );
        },
        b = c('Date'),
        g = c('File'),
        y = c('Blob'),
        w = c('FileList'),
        k = c('URLSearchParams');
      function j(e, a, { allOwnKeys: i = !1 } = {}) {
        if (null == e) return;
        let n, o;
        if (('object' != typeof e && (e = [e]), l(e)))
          for (n = 0, o = e.length; n < o; n++) a.call(null, e[n], n, e);
        else {
          const o = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
            s = o.length;
          let t;
          for (n = 0; n < s; n++) (t = o[n]), a.call(null, e[t], t, e);
        }
      }
      function _(e, a) {
        a = a.toLowerCase();
        const i = Object.keys(e);
        let n,
          o = i.length;
        for (; o-- > 0; ) if (((n = i[o]), a === n.toLowerCase())) return n;
        return null;
      }
      const E =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : global,
        C = (e) => !u(e) && e !== E;
      const R =
        ((O = 'undefined' != typeof Uint8Array && s(Uint8Array)),
        (e) => O && e instanceof O);
      var O;
      const S = c('HTMLFormElement'),
        T = (
          ({ hasOwnProperty: e }) =>
          (a, i) =>
            e.call(a, i)
        )(Object.prototype),
        z = c('RegExp'),
        F = (e, a) => {
          const i = Object.getOwnPropertyDescriptors(e),
            n = {};
          j(i, (i, o) => {
            !1 !== a(i, o, e) && (n[o] = i);
          }),
            Object.defineProperties(e, n);
        },
        A = 'abcdefghijklmnopqrstuvwxyz',
        L = {
          DIGIT: '0123456789',
          ALPHA: A,
          ALPHA_DIGIT: A + A.toUpperCase() + '0123456789',
        };
      var q = {
        isArray: l,
        isArrayBuffer: m,
        isBuffer: function (e) {
          return (
            null !== e &&
            !u(e) &&
            null !== e.constructor &&
            !u(e.constructor) &&
            x(e.constructor.isBuffer) &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: (e) =>
          e &&
          (('function' == typeof FormData && e instanceof FormData) ||
            '[object FormData]' === o.call(e) ||
            (x(e.toString) && '[object FormData]' === e.toString())),
        isArrayBufferView: function (e) {
          let a;
          return (
            (a =
              'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(e)
                : e && e.buffer && m(e.buffer)),
            a
          );
        },
        isString: d,
        isNumber: f,
        isBoolean: (e) => !0 === e || !1 === e,
        isObject: v,
        isPlainObject: h,
        isUndefined: u,
        isDate: b,
        isFile: g,
        isBlob: y,
        isRegExp: z,
        isFunction: x,
        isStream: (e) => v(e) && x(e.pipe),
        isURLSearchParams: k,
        isTypedArray: R,
        isFileList: w,
        forEach: j,
        merge: function e() {
          const { caseless: a } = (C(this) && this) || {},
            i = {},
            n = (n, o) => {
              const s = (a && _(i, o)) || o;
              h(i[s]) && h(n)
                ? (i[s] = e(i[s], n))
                : h(n)
                ? (i[s] = e({}, n))
                : l(n)
                ? (i[s] = n.slice())
                : (i[s] = n);
            };
          for (let e = 0, a = arguments.length; e < a; e++)
            arguments[e] && j(arguments[e], n);
          return i;
        },
        extend: (e, a, i, { allOwnKeys: o } = {}) => (
          j(
            a,
            (a, o) => {
              i && x(a) ? (e[o] = n(a, i)) : (e[o] = a);
            },
            { allOwnKeys: o },
          ),
          e
        ),
        trim: (e) =>
          e.trim
            ? e.trim()
            : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''),
        stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        inherits: (e, a, i, n) => {
          (e.prototype = Object.create(a.prototype, n)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, 'super', { value: a.prototype }),
            i && Object.assign(e.prototype, i);
        },
        toFlatObject: (e, a, i, n) => {
          let o, t, r;
          const c = {};
          if (((a = a || {}), null == e)) return a;
          do {
            for (o = Object.getOwnPropertyNames(e), t = o.length; t-- > 0; )
              (r = o[t]),
                (n && !n(r, e, a)) || c[r] || ((a[r] = e[r]), (c[r] = !0));
            e = !1 !== i && s(e);
          } while (e && (!i || i(e, a)) && e !== Object.prototype);
          return a;
        },
        kindOf: t,
        kindOfTest: c,
        endsWith: (e, a, i) => {
          (e = String(e)),
            (void 0 === i || i > e.length) && (i = e.length),
            (i -= a.length);
          const n = e.indexOf(a, i);
          return -1 !== n && n === i;
        },
        toArray: (e) => {
          if (!e) return null;
          if (l(e)) return e;
          let a = e.length;
          if (!f(a)) return null;
          const i = new Array(a);
          for (; a-- > 0; ) i[a] = e[a];
          return i;
        },
        forEachEntry: (e, a) => {
          const i = (e && e[Symbol.iterator]).call(e);
          let n;
          for (; (n = i.next()) && !n.done; ) {
            const i = n.value;
            a.call(e, i[0], i[1]);
          }
        },
        matchAll: (e, a) => {
          let i;
          const n = [];
          for (; null !== (i = e.exec(a)); ) n.push(i);
          return n;
        },
        isHTMLForm: S,
        hasOwnProperty: T,
        hasOwnProp: T,
        reduceDescriptors: F,
        freezeMethods: (e) => {
          F(e, (a, i) => {
            if (x(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(i))
              return !1;
            const n = e[i];
            x(n) &&
              ((a.enumerable = !1),
              'writable' in a
                ? (a.writable = !1)
                : a.set ||
                  (a.set = () => {
                    throw Error("Can not rewrite read-only method '" + i + "'");
                  }));
          });
        },
        toObjectSet: (e, a) => {
          const i = {},
            n = (e) => {
              e.forEach((e) => {
                i[e] = !0;
              });
            };
          return l(e) ? n(e) : n(String(e).split(a)), i;
        },
        toCamelCase: (e) =>
          e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, a, i) {
            return a.toUpperCase() + i;
          }),
        noop: () => {},
        toFiniteNumber: (e, a) => ((e = +e), Number.isFinite(e) ? e : a),
        findKey: _,
        global: E,
        isContextDefined: C,
        ALPHABET: L,
        generateString: (e = 16, a = L.ALPHA_DIGIT) => {
          let i = '';
          const { length: n } = a;
          for (; e--; ) i += a[(Math.random() * n) | 0];
          return i;
        },
        isSpecCompliantForm: function (e) {
          return !!(
            e &&
            x(e.append) &&
            'FormData' === e[Symbol.toStringTag] &&
            e[Symbol.iterator]
          );
        },
        toJSONObject: (e) => {
          const a = new Array(10),
            i = (e, n) => {
              if (v(e)) {
                if (a.indexOf(e) >= 0) return;
                if (!('toJSON' in e)) {
                  a[n] = e;
                  const o = l(e) ? [] : {};
                  return (
                    j(e, (e, a) => {
                      const s = i(e, n + 1);
                      !u(s) && (o[a] = s);
                    }),
                    (a[n] = void 0),
                    o
                  );
                }
              }
              return e;
            };
          return i(e, 0);
        },
      };
      function B(e, a, i, n, o) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = 'AxiosError'),
          a && (this.code = a),
          i && (this.config = i),
          n && (this.request = n),
          o && (this.response = o);
      }
      q.inherits(B, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: q.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const N = B.prototype,
        U = {};
      [
        'ERR_BAD_OPTION_VALUE',
        'ERR_BAD_OPTION',
        'ECONNABORTED',
        'ETIMEDOUT',
        'ERR_NETWORK',
        'ERR_FR_TOO_MANY_REDIRECTS',
        'ERR_DEPRECATED',
        'ERR_BAD_RESPONSE',
        'ERR_BAD_REQUEST',
        'ERR_CANCELED',
        'ERR_NOT_SUPPORT',
        'ERR_INVALID_URL',
      ].forEach((e) => {
        U[e] = { value: e };
      }),
        Object.defineProperties(B, U),
        Object.defineProperty(N, 'isAxiosError', { value: !0 }),
        (B.from = (e, a, i, n, o, s) => {
          const t = Object.create(N);
          return (
            q.toFlatObject(
              e,
              t,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => 'isAxiosError' !== e,
            ),
            B.call(t, e.message, a, i, n, o),
            (t.cause = e),
            (t.name = e.name),
            s && Object.assign(t, s),
            t
          );
        });
      var P = B,
        D = i(16),
        I = i.n(D).a;
      function M(e) {
        return q.isPlainObject(e) || q.isArray(e);
      }
      function H(e) {
        return q.endsWith(e, '[]') ? e.slice(0, -2) : e;
      }
      function J(e, a, i) {
        return e
          ? e
              .concat(a)
              .map(function (e, a) {
                return (e = H(e)), !i && a ? '[' + e + ']' : e;
              })
              .join(i ? '.' : '')
          : a;
      }
      const K = q.toFlatObject(q, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var $ = function (e, a, i) {
        if (!q.isObject(e)) throw new TypeError('target must be an object');
        a = a || new (I || FormData)();
        const n = (i = q.toFlatObject(
            i,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, a) {
              return !q.isUndefined(a[e]);
            },
          )).metaTokens,
          o = i.visitor || p,
          s = i.dots,
          t = i.indexes,
          r =
            (i.Blob || ('undefined' != typeof Blob && Blob)) &&
            q.isSpecCompliantForm(a);
        if (!q.isFunction(o)) throw new TypeError('visitor must be a function');
        function c(e) {
          if (null === e) return '';
          if (q.isDate(e)) return e.toISOString();
          if (!r && q.isBlob(e))
            throw new P('Blob is not supported. Use a Buffer instead.');
          return q.isArrayBuffer(e) || q.isTypedArray(e)
            ? r && 'function' == typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function p(e, i, o) {
          let r = e;
          if (e && !o && 'object' == typeof e)
            if (q.endsWith(i, '{}'))
              (i = n ? i : i.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (q.isArray(e) &&
                (function (e) {
                  return q.isArray(e) && !e.some(M);
                })(e)) ||
              ((q.isFileList(e) || q.endsWith(i, '[]')) && (r = q.toArray(e)))
            )
              return (
                (i = H(i)),
                r.forEach(function (e, n) {
                  !q.isUndefined(e) &&
                    null !== e &&
                    a.append(
                      !0 === t ? J([i], n, s) : null === t ? i : i + '[]',
                      c(e),
                    );
                }),
                !1
              );
          return !!M(e) || (a.append(J(o, i, s), c(e)), !1);
        }
        const l = [],
          u = Object.assign(K, {
            defaultVisitor: p,
            convertValue: c,
            isVisitable: M,
          });
        if (!q.isObject(e)) throw new TypeError('data must be an object');
        return (
          (function e(i, n) {
            if (!q.isUndefined(i)) {
              if (-1 !== l.indexOf(i))
                throw Error('Circular reference detected in ' + n.join('.'));
              l.push(i),
                q.forEach(i, function (i, s) {
                  !0 ===
                    (!(q.isUndefined(i) || null === i) &&
                      o.call(a, i, q.isString(s) ? s.trim() : s, n, u)) &&
                    e(i, n ? n.concat(s) : [s]);
                }),
                l.pop();
            }
          })(e),
          a
        );
      };
      function V(e) {
        const a = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '~': '%7E',
          '%20': '+',
          '%00': '\0',
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return a[e];
        });
      }
      function W(e, a) {
        (this._pairs = []), e && $(e, this, a);
      }
      const G = W.prototype;
      (G.append = function (e, a) {
        this._pairs.push([e, a]);
      }),
        (G.toString = function (e) {
          const a = e
            ? function (a) {
                return e.call(this, a, V);
              }
            : V;
          return this._pairs
            .map(function (e) {
              return a(e[0]) + '=' + a(e[1]);
            }, '')
            .join('&');
        });
      var Y = W;
      function Q(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      function X(e, a, i) {
        if (!a) return e;
        const n = (i && i.encode) || Q,
          o = i && i.serialize;
        let s;
        if (
          ((s = o
            ? o(a, i)
            : q.isURLSearchParams(a)
            ? a.toString()
            : new Y(a, i).toString(n)),
          s)
        ) {
          const a = e.indexOf('#');
          -1 !== a && (e = e.slice(0, a)),
            (e += (-1 === e.indexOf('?') ? '?' : '&') + s);
        }
        return e;
      }
      var Z = class {
          constructor() {
            this.handlers = [];
          }
          use(e, a, i) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: a,
                synchronous: !!i && i.synchronous,
                runWhen: i ? i.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            q.forEach(this.handlers, function (a) {
              null !== a && e(a);
            });
          }
        },
        ee = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        ae = i(4),
        ie = {
          isNode: !0,
          classes: {
            URLSearchParams: i.n(ae).a.URLSearchParams,
            FormData: I,
            Blob: ('undefined' != typeof Blob && Blob) || null,
          },
          protocols: ['http', 'https', 'file', 'data'],
        };
      var ne = function (e) {
        function a(e, i, n, o) {
          let s = e[o++];
          const t = Number.isFinite(+s),
            r = o >= e.length;
          if (((s = !s && q.isArray(n) ? n.length : s), r))
            return q.hasOwnProp(n, s) ? (n[s] = [n[s], i]) : (n[s] = i), !t;
          (n[s] && q.isObject(n[s])) || (n[s] = []);
          return (
            a(e, i, n[s], o) &&
              q.isArray(n[s]) &&
              (n[s] = (function (e) {
                const a = {},
                  i = Object.keys(e);
                let n;
                const o = i.length;
                let s;
                for (n = 0; n < o; n++) (s = i[n]), (a[s] = e[s]);
                return a;
              })(n[s])),
            !t
          );
        }
        if (q.isFormData(e) && q.isFunction(e.entries)) {
          const i = {};
          return (
            q.forEachEntry(e, (e, n) => {
              a(
                (function (e) {
                  return q
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ('[]' === e[0] ? '' : e[1] || e[0]));
                })(e),
                n,
                i,
                0,
              );
            }),
            i
          );
        }
        return null;
      };
      const oe = { 'Content-Type': void 0 };
      const se = {
        transitional: ee,
        adapter: ['xhr', 'http'],
        transformRequest: [
          function (e, a) {
            const i = a.getContentType() || '',
              n = i.indexOf('application/json') > -1,
              o = q.isObject(e);
            o && q.isHTMLForm(e) && (e = new FormData(e));
            if (q.isFormData(e)) return n && n ? JSON.stringify(ne(e)) : e;
            if (
              q.isArrayBuffer(e) ||
              q.isBuffer(e) ||
              q.isStream(e) ||
              q.isFile(e) ||
              q.isBlob(e)
            )
              return e;
            if (q.isArrayBufferView(e)) return e.buffer;
            if (q.isURLSearchParams(e))
              return (
                a.setContentType(
                  'application/x-www-form-urlencoded;charset=utf-8',
                  !1,
                ),
                e.toString()
              );
            let s;
            if (o) {
              if (i.indexOf('application/x-www-form-urlencoded') > -1)
                return (function (e, a) {
                  return $(
                    e,
                    new ie.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, a, i, n) {
                          return ie.isNode && q.isBuffer(e)
                            ? (this.append(a, e.toString('base64')), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      a,
                    ),
                  );
                })(e, this.formSerializer).toString();
              if (
                (s = q.isFileList(e)) ||
                i.indexOf('multipart/form-data') > -1
              ) {
                const a = this.env && this.env.FormData;
                return $(
                  s ? { 'files[]': e } : e,
                  a && new a(),
                  this.formSerializer,
                );
              }
            }
            return o || n
              ? (a.setContentType('application/json', !1),
                (function (e, a, i) {
                  if (q.isString(e))
                    try {
                      return (a || JSON.parse)(e), q.trim(e);
                    } catch (e) {
                      if ('SyntaxError' !== e.name) throw e;
                    }
                  return (i || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const a = this.transitional || se.transitional,
              i = a && a.forcedJSONParsing,
              n = 'json' === this.responseType;
            if (e && q.isString(e) && ((i && !this.responseType) || n)) {
              const i = !(a && a.silentJSONParsing) && n;
              try {
                return JSON.parse(e);
              } catch (e) {
                if (i) {
                  if ('SyntaxError' === e.name)
                    throw P.from(
                      e,
                      P.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response,
                    );
                  throw e;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: ie.classes.FormData, Blob: ie.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: 'application/json, text/plain, */*' } },
      };
      q.forEach(['delete', 'get', 'head'], function (e) {
        se.headers[e] = {};
      }),
        q.forEach(['post', 'put', 'patch'], function (e) {
          se.headers[e] = q.merge(oe);
        });
      var te = se;
      const re = q.toObjectSet([
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
      ]);
      const ce = Symbol('internals');
      function pe(e) {
        return e && String(e).trim().toLowerCase();
      }
      function le(e) {
        return !1 === e || null == e ? e : q.isArray(e) ? e.map(le) : String(e);
      }
      function ue(e, a, i, n, o) {
        return q.isFunction(n)
          ? n.call(this, a, i)
          : (o && (a = i),
            q.isString(a)
              ? q.isString(n)
                ? -1 !== a.indexOf(n)
                : q.isRegExp(n)
                ? n.test(a)
                : void 0
              : void 0);
      }
      class me {
        constructor(e) {
          e && this.set(e);
        }
        set(e, a, i) {
          const n = this;
          function o(e, a, i) {
            const o = pe(a);
            if (!o) throw new Error('header name must be a non-empty string');
            const s = q.findKey(n, o);
            (!s ||
              void 0 === n[s] ||
              !0 === i ||
              (void 0 === i && !1 !== n[s])) &&
              (n[s || a] = le(e));
          }
          const s = (e, a) => q.forEach(e, (e, i) => o(e, i, a));
          return (
            q.isPlainObject(e) || e instanceof this.constructor
              ? s(e, a)
              : q.isString(e) &&
                (e = e.trim()) &&
                !/^[-_a-zA-Z]+$/.test(e.trim())
              ? s(
                  ((e) => {
                    const a = {};
                    let i, n, o;
                    return (
                      e &&
                        e.split('\n').forEach(function (e) {
                          (o = e.indexOf(':')),
                            (i = e.substring(0, o).trim().toLowerCase()),
                            (n = e.substring(o + 1).trim()),
                            !i ||
                              (a[i] && re[i]) ||
                              ('set-cookie' === i
                                ? a[i]
                                  ? a[i].push(n)
                                  : (a[i] = [n])
                                : (a[i] = a[i] ? a[i] + ', ' + n : n));
                        }),
                      a
                    );
                  })(e),
                  a,
                )
              : null != e && o(a, e, i),
            this
          );
        }
        get(e, a) {
          if ((e = pe(e))) {
            const i = q.findKey(this, e);
            if (i) {
              const e = this[i];
              if (!a) return e;
              if (!0 === a)
                return (function (e) {
                  const a = Object.create(null),
                    i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let n;
                  for (; (n = i.exec(e)); ) a[n[1]] = n[2];
                  return a;
                })(e);
              if (q.isFunction(a)) return a.call(this, e, i);
              if (q.isRegExp(a)) return a.exec(e);
              throw new TypeError('parser must be boolean|regexp|function');
            }
          }
        }
        has(e, a) {
          if ((e = pe(e))) {
            const i = q.findKey(this, e);
            return !(!i || void 0 === this[i] || (a && !ue(0, this[i], i, a)));
          }
          return !1;
        }
        delete(e, a) {
          const i = this;
          let n = !1;
          function o(e) {
            if ((e = pe(e))) {
              const o = q.findKey(i, e);
              !o || (a && !ue(0, i[o], o, a)) || (delete i[o], (n = !0));
            }
          }
          return q.isArray(e) ? e.forEach(o) : o(e), n;
        }
        clear(e) {
          const a = Object.keys(this);
          let i = a.length,
            n = !1;
          for (; i--; ) {
            const o = a[i];
            (e && !ue(0, this[o], o, e, !0)) || (delete this[o], (n = !0));
          }
          return n;
        }
        normalize(e) {
          const a = this,
            i = {};
          return (
            q.forEach(this, (n, o) => {
              const s = q.findKey(i, o);
              if (s) return (a[s] = le(n)), void delete a[o];
              const t = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, a, i) => a.toUpperCase() + i,
                      );
                  })(o)
                : String(o).trim();
              t !== o && delete a[o], (a[t] = le(n)), (i[t] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          const a = Object.create(null);
          return (
            q.forEach(this, (i, n) => {
              null != i &&
                !1 !== i &&
                (a[n] = e && q.isArray(i) ? i.join(', ') : i);
            }),
            a
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, a]) => e + ': ' + a)
            .join('\n');
        }
        get [Symbol.toStringTag]() {
          return 'AxiosHeaders';
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...a) {
          const i = new this(e);
          return a.forEach((e) => i.set(e)), i;
        }
        static accessor(e) {
          const a = (this[ce] = this[ce] = { accessors: {} }).accessors,
            i = this.prototype;
          function n(e) {
            const n = pe(e);
            a[n] ||
              (!(function (e, a) {
                const i = q.toCamelCase(' ' + a);
                ['get', 'set', 'has'].forEach((n) => {
                  Object.defineProperty(e, n + i, {
                    value: function (e, i, o) {
                      return this[n].call(this, a, e, i, o);
                    },
                    configurable: !0,
                  });
                });
              })(i, e),
              (a[n] = !0));
          }
          return q.isArray(e) ? e.forEach(n) : n(e), this;
        }
      }
      me.accessor([
        'Content-Type',
        'Content-Length',
        'Accept',
        'Accept-Encoding',
        'User-Agent',
        'Authorization',
      ]),
        q.freezeMethods(me.prototype),
        q.freezeMethods(me);
      var de = me;
      function xe(e, a) {
        const i = this || te,
          n = a || i,
          o = de.from(n.headers);
        let s = n.data;
        return (
          q.forEach(e, function (e) {
            s = e.call(i, s, o.normalize(), a ? a.status : void 0);
          }),
          o.normalize(),
          s
        );
      }
      function fe(e) {
        return !(!e || !e.__CANCEL__);
      }
      function ve(e, a, i) {
        P.call(this, null == e ? 'canceled' : e, P.ERR_CANCELED, a, i),
          (this.name = 'CanceledError');
      }
      q.inherits(ve, P, { __CANCEL__: !0 });
      var he = ve;
      function be(e, a, i) {
        const n = i.config.validateStatus;
        i.status && n && !n(i.status)
          ? a(
              new P(
                'Request failed with status code ' + i.status,
                [P.ERR_BAD_REQUEST, P.ERR_BAD_RESPONSE][
                  Math.floor(i.status / 100) - 4
                ],
                i.config,
                i.request,
                i,
              ),
            )
          : e(i);
      }
      function ge(e, a) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)
          ? (function (e, a) {
              return a
                ? e.replace(/\/+$/, '') + '/' + a.replace(/^\/+/, '')
                : e;
            })(e, a)
          : a;
      }
      var ye = i(17),
        we = i(5),
        ke = i.n(we),
        je = i(6),
        _e = i.n(je),
        Ee = i(2),
        Ce = i.n(Ee),
        Re = i(18),
        Oe = i.n(Re),
        Se = i(1),
        Te = i.n(Se);
      function ze(e) {
        const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return (a && a[1]) || '';
      }
      const Fe = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
      var Ae = i(0),
        Le = i.n(Ae);
      var qe = function (e, a) {
        let i = 0;
        const n = 1e3 / a;
        let o = null;
        return function (a, s) {
          const t = Date.now();
          if (a || t - i > n)
            return (
              o && (clearTimeout(o), (o = null)), (i = t), e.apply(null, s)
            );
          o ||
            (o = setTimeout(
              () => ((o = null), (i = Date.now()), e.apply(null, s)),
              n - (t - i),
            ));
        };
      };
      var Be = function (e, a) {
        e = e || 10;
        const i = new Array(e),
          n = new Array(e);
        let o,
          s = 0,
          t = 0;
        return (
          (a = void 0 !== a ? a : 1e3),
          function (r) {
            const c = Date.now(),
              p = n[t];
            o || (o = c), (i[s] = r), (n[s] = c);
            let l = t,
              u = 0;
            for (; l !== s; ) (u += i[l++]), (l %= e);
            if (((s = (s + 1) % e), s === t && (t = (t + 1) % e), c - o < a))
              return;
            const m = p && c - p;
            return m ? Math.round((1e3 * u) / m) : void 0;
          }
        );
      };
      const Ne = Symbol('internals');
      class Ue extends Le.a.Transform {
        constructor(e) {
          super({
            readableHighWaterMark: (e = q.toFlatObject(
              e,
              {
                maxRate: 0,
                chunkSize: 65536,
                minChunkSize: 100,
                timeWindow: 500,
                ticksRate: 2,
                samplesCount: 15,
              },
              null,
              (e, a) => !q.isUndefined(a[e]),
            )).chunkSize,
          });
          const a = this,
            i = (this[Ne] = {
              length: e.length,
              timeWindow: e.timeWindow,
              ticksRate: e.ticksRate,
              chunkSize: e.chunkSize,
              maxRate: e.maxRate,
              minChunkSize: e.minChunkSize,
              bytesSeen: 0,
              isCaptured: !1,
              notifiedBytesLoaded: 0,
              ts: Date.now(),
              bytes: 0,
              onReadCallback: null,
            }),
            n = Be(i.ticksRate * e.samplesCount, i.timeWindow);
          this.on('newListener', (e) => {
            'progress' === e && (i.isCaptured || (i.isCaptured = !0));
          });
          let o = 0;
          i.updateProgress = qe(function () {
            const e = i.length,
              s = i.bytesSeen,
              t = s - o;
            if (!t || a.destroyed) return;
            const r = n(t);
            (o = s),
              process.nextTick(() => {
                a.emit('progress', {
                  loaded: s,
                  total: e,
                  progress: e ? s / e : void 0,
                  bytes: t,
                  rate: r || void 0,
                  estimated: r && e && s <= e ? (e - s) / r : void 0,
                });
              });
          }, i.ticksRate);
          const s = () => {
            i.updateProgress(!0);
          };
          this.once('end', s), this.once('error', s);
        }
        _read(e) {
          const a = this[Ne];
          return a.onReadCallback && a.onReadCallback(), super._read(e);
        }
        _transform(e, a, i) {
          const n = this,
            o = this[Ne],
            s = o.maxRate,
            t = this.readableHighWaterMark,
            r = o.timeWindow,
            c = s / (1e3 / r),
            p = !1 !== o.minChunkSize ? Math.max(o.minChunkSize, 0.01 * c) : 0;
          const l = (e, a) => {
            const i = Buffer.byteLength(e);
            let l,
              u = null,
              m = t,
              d = 0;
            if (s) {
              const e = Date.now();
              (!o.ts || (d = e - o.ts) >= r) &&
                ((o.ts = e),
                (l = c - o.bytes),
                (o.bytes = l < 0 ? -l : 0),
                (d = 0)),
                (l = c - o.bytes);
            }
            if (s) {
              if (l <= 0)
                return setTimeout(() => {
                  a(null, e);
                }, r - d);
              l < m && (m = l);
            }
            m &&
              i > m &&
              i - m > p &&
              ((u = e.subarray(m)), (e = e.subarray(0, m))),
              (function (e, a) {
                const i = Buffer.byteLength(e);
                (o.bytesSeen += i),
                  (o.bytes += i),
                  o.isCaptured && o.updateProgress(),
                  n.push(e)
                    ? process.nextTick(a)
                    : (o.onReadCallback = () => {
                        (o.onReadCallback = null), process.nextTick(a);
                      });
              })(
                e,
                u
                  ? () => {
                      process.nextTick(a, null, u);
                    }
                  : a,
              );
          };
          l(e, function e(a, n) {
            if (a) return i(a);
            n ? l(n, e) : i(null);
          });
        }
        setLength(e) {
          return (this[Ne].length = +e), this;
        }
      }
      var Pe = Ue,
        De = i(19),
        Ie = i.n(De);
      const { asyncIterator: Me } = Symbol;
      var He = async function* (e) {
        e.stream
          ? yield* e.stream()
          : e.arrayBuffer
          ? yield await e.arrayBuffer()
          : e[Me]
          ? yield* e[Me]()
          : yield e;
      };
      const Je = q.ALPHABET.ALPHA_DIGIT + '-_',
        Ke = new Ee.TextEncoder(),
        $e = Ke.encode('\r\n');
      class Ve {
        constructor(e, a) {
          const { escapeName: i } = this.constructor,
            n = q.isString(a);
          let o = `Content-Disposition: form-data; name="${i(e)}"${
            !n && a.name ? `; filename="${i(a.name)}"` : ''
          }\r\n`;
          n
            ? (a = Ke.encode(String(a).replace(/\r?\n|\r\n?/g, '\r\n')))
            : (o += `Content-Type: ${
                a.type || 'application/octet-stream'
              }\r\n`),
            (this.headers = Ke.encode(o + '\r\n')),
            (this.contentLength = n ? a.byteLength : a.size),
            (this.size = this.headers.byteLength + this.contentLength + 2),
            (this.name = e),
            (this.value = a);
        }
        async *encode() {
          yield this.headers;
          const { value: e } = this;
          q.isTypedArray(e) ? yield e : yield* He(e), yield $e;
        }
        static escapeName(e) {
          return String(e).replace(
            /[\r\n"]/g,
            (e) => ({ '\r': '%0D', '\n': '%0A', '"': '%22' }[e]),
          );
        }
      }
      var We = (e, a, i) => {
        const {
          tag: n = 'form-data-boundary',
          size: o = 25,
          boundary: s = n + '-' + q.generateString(o, Je),
        } = i || {};
        if (!q.isFormData(e)) throw TypeError('FormData instance required');
        if (s.length < 1 || s.length > 70)
          throw Error('boundary must be 10-70 characters long');
        const t = Ke.encode('--' + s + '\r\n'),
          r = Ke.encode('--' + s + '--\r\n\r\n');
        let c = r.byteLength;
        const p = Array.from(e.entries()).map(([e, a]) => {
          const i = new Ve(e, a);
          return (c += i.size), i;
        });
        (c += t.byteLength * p.length), (c = q.toFiniteNumber(c));
        const l = { 'Content-Type': 'multipart/form-data; boundary=' + s };
        return (
          Number.isFinite(c) && (l['Content-Length'] = c),
          a && a(l),
          Ae.Readable.from(
            (async function* () {
              for (const e of p) yield t, yield* e.encode();
              yield r;
            })(),
          )
        );
      };
      class Ge extends Le.a.Transform {
        __transform(e, a, i) {
          this.push(e), i();
        }
        _transform(e, a, i) {
          if (
            0 !== e.length &&
            ((this._transform = this.__transform), 120 !== e[0])
          ) {
            const e = Buffer.alloc(2);
            (e[0] = 120), (e[1] = 156), this.push(e, a);
          }
          this.__transform(e, a, i);
        }
      }
      var Ye = Ge;
      const Qe = {
          flush: Te.a.constants.Z_SYNC_FLUSH,
          finishFlush: Te.a.constants.Z_SYNC_FLUSH,
        },
        Xe = {
          flush: Te.a.constants.BROTLI_OPERATION_FLUSH,
          finishFlush: Te.a.constants.BROTLI_OPERATION_FLUSH,
        },
        Ze = q.isFunction(Te.a.createBrotliDecompress),
        { http: ea, https: aa } = Oe.a,
        ia = /https:?/,
        na = ie.protocols.map((e) => e + ':');
      function oa(e) {
        e.beforeRedirects.proxy && e.beforeRedirects.proxy(e),
          e.beforeRedirects.config && e.beforeRedirects.config(e);
      }
      function sa(e, a, i) {
        let n = a;
        if (!n && !1 !== n) {
          const e = Object(ye.getProxyForUrl)(i);
          e && (n = new URL(e));
        }
        if (n) {
          if (
            (n.username &&
              (n.auth = (n.username || '') + ':' + (n.password || '')),
            n.auth)
          ) {
            (n.auth.username || n.auth.password) &&
              (n.auth =
                (n.auth.username || '') + ':' + (n.auth.password || ''));
            const a = Buffer.from(n.auth, 'utf8').toString('base64');
            e.headers['Proxy-Authorization'] = 'Basic ' + a;
          }
          e.headers.host = e.hostname + (e.port ? ':' + e.port : '');
          const a = n.hostname || n.host;
          (e.hostname = a),
            (e.host = a),
            (e.port = n.port),
            (e.path = i),
            n.protocol &&
              (e.protocol = n.protocol.includes(':')
                ? n.protocol
                : n.protocol + ':');
        }
        e.beforeRedirects.proxy = function (e) {
          sa(e, a, e.href);
        };
      }
      var ta =
        'undefined' != typeof process &&
        'process' === q.kindOf(process) &&
        function (e) {
          return new Promise(async function (a, i) {
            let n = e.data;
            const o = e.responseType,
              s = e.responseEncoding,
              t = e.method.toUpperCase();
            let r,
              c,
              p,
              l = !1;
            const u = new Ie.a();
            function m() {
              r ||
                ((r = !0),
                e.cancelToken && e.cancelToken.unsubscribe(v),
                e.signal && e.signal.removeEventListener('abort', v),
                u.removeAllListeners());
            }
            function d(e, n) {
              c || ((c = !0), n && ((l = !0), m()), n ? i(e) : a(e));
            }
            const x = function (e) {
                d(e);
              },
              f = function (e) {
                d(e, !0);
              };
            function v(a) {
              u.emit('abort', !a || a.type ? new he(null, e, p) : a);
            }
            u.once('abort', f),
              (e.cancelToken || e.signal) &&
                (e.cancelToken && e.cancelToken.subscribe(v),
                e.signal &&
                  (e.signal.aborted
                    ? v()
                    : e.signal.addEventListener('abort', v)));
            const h = ge(e.baseURL, e.url),
              b = new URL(h, 'http://localhost'),
              g = b.protocol || na[0];
            if ('data:' === g) {
              let a;
              if ('GET' !== t)
                return be(x, f, {
                  status: 405,
                  statusText: 'method not allowed',
                  headers: {},
                  config: e,
                });
              try {
                a = (function (e, a, i) {
                  const n = (i && i.Blob) || ie.classes.Blob,
                    o = ze(e);
                  if ((void 0 === a && n && (a = !0), 'data' === o)) {
                    e = o.length ? e.slice(o.length + 1) : e;
                    const i = Fe.exec(e);
                    if (!i) throw new P('Invalid URL', P.ERR_INVALID_URL);
                    const s = i[1],
                      t = i[2],
                      r = i[3],
                      c = Buffer.from(
                        decodeURIComponent(r),
                        t ? 'base64' : 'utf8',
                      );
                    if (a) {
                      if (!n)
                        throw new P('Blob is not supported', P.ERR_NOT_SUPPORT);
                      return new n([c], { type: s });
                    }
                    return c;
                  }
                  throw new P('Unsupported protocol ' + o, P.ERR_NOT_SUPPORT);
                })(e.url, 'blob' === o, { Blob: e.env && e.env.Blob });
              } catch (a) {
                throw P.from(a, P.ERR_BAD_REQUEST, e);
              }
              return (
                'text' === o
                  ? ((a = a.toString(s)),
                    (s && 'utf8' !== s) || (a = q.stripBOM(a)))
                  : 'stream' === o && (a = Le.a.Readable.from(a)),
                be(x, f, {
                  data: a,
                  status: 200,
                  statusText: 'OK',
                  headers: new de(),
                  config: e,
                })
              );
            }
            if (-1 === na.indexOf(g))
              return f(
                new P('Unsupported protocol ' + g, P.ERR_BAD_REQUEST, e),
              );
            const y = de.from(e.headers).normalize();
            y.set('User-Agent', 'axios/1.3.3', !1);
            const w = e.onDownloadProgress,
              k = e.onUploadProgress,
              j = e.maxRate;
            let _ = void 0,
              E = void 0;
            if (q.isSpecCompliantForm(n)) {
              const e = y.getContentType(/boundary=([-_\w\d]{10,70})/i);
              n = We(
                n,
                (e) => {
                  y.set(e);
                },
                {
                  tag: 'axios-1.3.3-boundary',
                  boundary: (e && e[1]) || void 0,
                },
              );
            } else if (q.isFormData(n) && q.isFunction(n.getHeaders)) {
              if ((y.set(n.getHeaders()), !y.hasContentLength()))
                try {
                  const e = await Ce.a.promisify(n.getLength).call(n);
                  Number.isFinite(e) && e >= 0 && y.setContentLength(e);
                } catch (e) {}
            } else if (q.isBlob(n))
              n.size && y.setContentType(n.type || 'application/octet-stream'),
                y.setContentLength(n.size || 0),
                (n = Le.a.Readable.from(He(n)));
            else if (n && !q.isStream(n)) {
              if (Buffer.isBuffer(n));
              else if (q.isArrayBuffer(n)) n = Buffer.from(new Uint8Array(n));
              else {
                if (!q.isString(n))
                  return f(
                    new P(
                      'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                      P.ERR_BAD_REQUEST,
                      e,
                    ),
                  );
                n = Buffer.from(n, 'utf-8');
              }
              if (
                (y.setContentLength(n.length, !1),
                e.maxBodyLength > -1 && n.length > e.maxBodyLength)
              )
                return f(
                  new P(
                    'Request body larger than maxBodyLength limit',
                    P.ERR_BAD_REQUEST,
                    e,
                  ),
                );
            }
            const C = q.toFiniteNumber(y.getContentLength());
            q.isArray(j) ? ((_ = j[0]), (E = j[1])) : (_ = E = j),
              n &&
                (k || _) &&
                (q.isStream(n) ||
                  (n = Le.a.Readable.from(n, { objectMode: !1 })),
                (n = Le.a.pipeline(
                  [n, new Pe({ length: C, maxRate: q.toFiniteNumber(_) })],
                  q.noop,
                )),
                k &&
                  n.on('progress', (e) => {
                    k(Object.assign(e, { upload: !0 }));
                  }));
            let R,
              O = void 0;
            if (e.auth) {
              O = (e.auth.username || '') + ':' + (e.auth.password || '');
            }
            if (!O && b.username) {
              O = b.username + ':' + b.password;
            }
            O && y.delete('authorization');
            try {
              R = X(
                b.pathname + b.search,
                e.params,
                e.paramsSerializer,
              ).replace(/^\?/, '');
            } catch (a) {
              const i = new Error(a.message);
              return (i.config = e), (i.url = e.url), (i.exists = !0), f(i);
            }
            y.set(
              'Accept-Encoding',
              'gzip, compress, deflate' + (Ze ? ', br' : ''),
              !1,
            );
            const S = {
              path: R,
              method: t,
              headers: y.toJSON(),
              agents: { http: e.httpAgent, https: e.httpsAgent },
              auth: O,
              protocol: g,
              beforeRedirect: oa,
              beforeRedirects: {},
            };
            let T;
            e.socketPath
              ? (S.socketPath = e.socketPath)
              : ((S.hostname = b.hostname),
                (S.port = b.port),
                sa(
                  S,
                  e.proxy,
                  g + '//' + b.hostname + (b.port ? ':' + b.port : '') + S.path,
                ));
            const z = ia.test(S.protocol);
            if (
              ((S.agent = z ? e.httpsAgent : e.httpAgent),
              e.transport
                ? (T = e.transport)
                : 0 === e.maxRedirects
                ? (T = z ? _e.a : ke.a)
                : (e.maxRedirects && (S.maxRedirects = e.maxRedirects),
                  e.beforeRedirect &&
                    (S.beforeRedirects.config = e.beforeRedirect),
                  (T = z ? aa : ea)),
              e.maxBodyLength > -1
                ? (S.maxBodyLength = e.maxBodyLength)
                : (S.maxBodyLength = 1 / 0),
              e.insecureHTTPParser &&
                (S.insecureHTTPParser = e.insecureHTTPParser),
              (p = T.request(S, function (a) {
                if (p.destroyed) return;
                const i = [a],
                  n = +a.headers['content-length'];
                if (w) {
                  const e = new Pe({
                    length: q.toFiniteNumber(n),
                    maxRate: q.toFiniteNumber(E),
                  });
                  w &&
                    e.on('progress', (e) => {
                      w(Object.assign(e, { download: !0 }));
                    }),
                    i.push(e);
                }
                let r = a;
                const c = a.req || p;
                if (!1 !== e.decompress && a.headers['content-encoding'])
                  switch (
                    (('HEAD' !== t && 204 !== a.statusCode) ||
                      delete a.headers['content-encoding'],
                    a.headers['content-encoding'])
                  ) {
                    case 'gzip':
                    case 'x-gzip':
                    case 'compress':
                    case 'x-compress':
                      i.push(Te.a.createUnzip(Qe)),
                        delete a.headers['content-encoding'];
                      break;
                    case 'deflate':
                      i.push(new Ye()),
                        i.push(Te.a.createUnzip(Qe)),
                        delete a.headers['content-encoding'];
                      break;
                    case 'br':
                      Ze &&
                        (i.push(Te.a.createBrotliDecompress(Xe)),
                        delete a.headers['content-encoding']);
                  }
                r = i.length > 1 ? Le.a.pipeline(i, q.noop) : i[0];
                const d = Le.a.finished(r, () => {
                    d(), m();
                  }),
                  v = {
                    status: a.statusCode,
                    statusText: a.statusMessage,
                    headers: new de(a.headers),
                    config: e,
                    request: c,
                  };
                if ('stream' === o) (v.data = r), be(x, f, v);
                else {
                  const a = [];
                  let i = 0;
                  r.on('data', function (n) {
                    a.push(n),
                      (i += n.length),
                      e.maxContentLength > -1 &&
                        i > e.maxContentLength &&
                        ((l = !0),
                        r.destroy(),
                        f(
                          new P(
                            'maxContentLength size of ' +
                              e.maxContentLength +
                              ' exceeded',
                            P.ERR_BAD_RESPONSE,
                            e,
                            c,
                          ),
                        ));
                  }),
                    r.on('aborted', function () {
                      if (l) return;
                      const a = new P(
                        'maxContentLength size of ' +
                          e.maxContentLength +
                          ' exceeded',
                        P.ERR_BAD_RESPONSE,
                        e,
                        c,
                      );
                      r.destroy(a), f(a);
                    }),
                    r.on('error', function (a) {
                      p.destroyed || f(P.from(a, null, e, c));
                    }),
                    r.on('end', function () {
                      try {
                        let e = 1 === a.length ? a[0] : Buffer.concat(a);
                        'arraybuffer' !== o &&
                          ((e = e.toString(s)),
                          (s && 'utf8' !== s) || (e = q.stripBOM(e))),
                          (v.data = e);
                      } catch (a) {
                        f(P.from(a, null, e, v.request, v));
                      }
                      be(x, f, v);
                    });
                }
                u.once('abort', (e) => {
                  r.destroyed || (r.emit('error', e), r.destroy());
                });
              })),
              u.once('abort', (e) => {
                f(e), p.destroy(e);
              }),
              p.on('error', function (a) {
                f(P.from(a, null, e, p));
              }),
              p.on('socket', function (e) {
                e.setKeepAlive(!0, 6e4);
              }),
              e.timeout)
            ) {
              const a = parseInt(e.timeout, 10);
              if (isNaN(a))
                return void f(
                  new P(
                    'error trying to parse `config.timeout` to int',
                    P.ERR_BAD_OPTION_VALUE,
                    e,
                    p,
                  ),
                );
              p.setTimeout(a, function () {
                if (c) return;
                let a = e.timeout
                  ? 'timeout of ' + e.timeout + 'ms exceeded'
                  : 'timeout exceeded';
                const i = e.transitional || ee;
                e.timeoutErrorMessage && (a = e.timeoutErrorMessage),
                  f(
                    new P(
                      a,
                      i.clarifyTimeoutError ? P.ETIMEDOUT : P.ECONNABORTED,
                      e,
                      p,
                    ),
                  ),
                  v();
              });
            }
            if (q.isStream(n)) {
              let a = !1,
                i = !1;
              n.on('end', () => {
                a = !0;
              }),
                n.once('error', (e) => {
                  (i = !0), p.destroy(e);
                }),
                n.on('close', () => {
                  a || i || v(new he('Request stream has been aborted', e, p));
                }),
                n.pipe(p);
            } else p.end(n);
          });
        };
      var ra = ie.isStandardBrowserEnv
          ? {
              write: function (e, a, i, n, o, s) {
                const t = [];
                t.push(e + '=' + encodeURIComponent(a)),
                  q.isNumber(i) &&
                    t.push('expires=' + new Date(i).toGMTString()),
                  q.isString(n) && t.push('path=' + n),
                  q.isString(o) && t.push('domain=' + o),
                  !0 === s && t.push('secure'),
                  (document.cookie = t.join('; '));
              },
              read: function (e) {
                const a = document.cookie.match(
                  new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
                );
                return a ? decodeURIComponent(a[3]) : null;
              },
              remove: function (e) {
                this.write(e, '', Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            },
        ca = ie.isStandardBrowserEnv
          ? (function () {
              const e = /(msie|trident)/i.test(navigator.userAgent),
                a = document.createElement('a');
              let i;
              function n(i) {
                let n = i;
                return (
                  e && (a.setAttribute('href', n), (n = a.href)),
                  a.setAttribute('href', n),
                  {
                    href: a.href,
                    protocol: a.protocol ? a.protocol.replace(/:$/, '') : '',
                    host: a.host,
                    search: a.search ? a.search.replace(/^\?/, '') : '',
                    hash: a.hash ? a.hash.replace(/^#/, '') : '',
                    hostname: a.hostname,
                    port: a.port,
                    pathname:
                      '/' === a.pathname.charAt(0)
                        ? a.pathname
                        : '/' + a.pathname,
                  }
                );
              }
              return (
                (i = n(window.location.href)),
                function (e) {
                  const a = q.isString(e) ? n(e) : e;
                  return a.protocol === i.protocol && a.host === i.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      function pa(e, a) {
        let i = 0;
        const n = Be(50, 250);
        return (o) => {
          const s = o.loaded,
            t = o.lengthComputable ? o.total : void 0,
            r = s - i,
            c = n(r);
          i = s;
          const p = {
            loaded: s,
            total: t,
            progress: t ? s / t : void 0,
            bytes: r,
            rate: c || void 0,
            estimated: c && t && s <= t ? (t - s) / c : void 0,
            event: o,
          };
          (p[a ? 'download' : 'upload'] = !0), e(p);
        };
      }
      const la = {
        http: ta,
        xhr:
          'undefined' != typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (a, i) {
              let n = e.data;
              const o = de.from(e.headers).normalize(),
                s = e.responseType;
              let t;
              function r() {
                e.cancelToken && e.cancelToken.unsubscribe(t),
                  e.signal && e.signal.removeEventListener('abort', t);
              }
              q.isFormData(n) &&
                (ie.isStandardBrowserEnv || ie.isStandardBrowserWebWorkerEnv) &&
                o.setContentType(!1);
              let c = new XMLHttpRequest();
              if (e.auth) {
                const a = e.auth.username || '',
                  i = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : '';
                o.set('Authorization', 'Basic ' + btoa(a + ':' + i));
              }
              const p = ge(e.baseURL, e.url);
              function l() {
                if (!c) return;
                const n = de.from(
                  'getAllResponseHeaders' in c && c.getAllResponseHeaders(),
                );
                be(
                  function (e) {
                    a(e), r();
                  },
                  function (e) {
                    i(e), r();
                  },
                  {
                    data:
                      s && 'text' !== s && 'json' !== s
                        ? c.response
                        : c.responseText,
                    status: c.status,
                    statusText: c.statusText,
                    headers: n,
                    config: e,
                    request: c,
                  },
                ),
                  (c = null);
              }
              if (
                (c.open(
                  e.method.toUpperCase(),
                  X(p, e.params, e.paramsSerializer),
                  !0,
                ),
                (c.timeout = e.timeout),
                'onloadend' in c
                  ? (c.onloadend = l)
                  : (c.onreadystatechange = function () {
                      c &&
                        4 === c.readyState &&
                        (0 !== c.status ||
                          (c.responseURL &&
                            0 === c.responseURL.indexOf('file:'))) &&
                        setTimeout(l);
                    }),
                (c.onabort = function () {
                  c &&
                    (i(new P('Request aborted', P.ECONNABORTED, e, c)),
                    (c = null));
                }),
                (c.onerror = function () {
                  i(new P('Network Error', P.ERR_NETWORK, e, c)), (c = null);
                }),
                (c.ontimeout = function () {
                  let a = e.timeout
                    ? 'timeout of ' + e.timeout + 'ms exceeded'
                    : 'timeout exceeded';
                  const n = e.transitional || ee;
                  e.timeoutErrorMessage && (a = e.timeoutErrorMessage),
                    i(
                      new P(
                        a,
                        n.clarifyTimeoutError ? P.ETIMEDOUT : P.ECONNABORTED,
                        e,
                        c,
                      ),
                    ),
                    (c = null);
                }),
                ie.isStandardBrowserEnv)
              ) {
                const a =
                  (e.withCredentials || ca(p)) &&
                  e.xsrfCookieName &&
                  ra.read(e.xsrfCookieName);
                a && o.set(e.xsrfHeaderName, a);
              }
              void 0 === n && o.setContentType(null),
                'setRequestHeader' in c &&
                  q.forEach(o.toJSON(), function (e, a) {
                    c.setRequestHeader(a, e);
                  }),
                q.isUndefined(e.withCredentials) ||
                  (c.withCredentials = !!e.withCredentials),
                s && 'json' !== s && (c.responseType = e.responseType),
                'function' == typeof e.onDownloadProgress &&
                  c.addEventListener('progress', pa(e.onDownloadProgress, !0)),
                'function' == typeof e.onUploadProgress &&
                  c.upload &&
                  c.upload.addEventListener('progress', pa(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((t = (a) => {
                    c &&
                      (i(!a || a.type ? new he(null, e, c) : a),
                      c.abort(),
                      (c = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(t),
                  e.signal &&
                    (e.signal.aborted
                      ? t()
                      : e.signal.addEventListener('abort', t)));
              const u = ze(p);
              u && -1 === ie.protocols.indexOf(u)
                ? i(
                    new P(
                      'Unsupported protocol ' + u + ':',
                      P.ERR_BAD_REQUEST,
                      e,
                    ),
                  )
                : c.send(n || null);
            });
          },
      };
      q.forEach(la, (e, a) => {
        if (e) {
          try {
            Object.defineProperty(e, 'name', { value: a });
          } catch (e) {}
          Object.defineProperty(e, 'adapterName', { value: a });
        }
      });
      var ua = (e) => {
        e = q.isArray(e) ? e : [e];
        const { length: a } = e;
        let i, n;
        for (
          let o = 0;
          o < a && ((i = e[o]), !(n = q.isString(i) ? la[i.toLowerCase()] : i));
          o++
        );
        if (!n) {
          if (!1 === n)
            throw new P(
              `Adapter ${i} is not supported by the environment`,
              'ERR_NOT_SUPPORT',
            );
          throw new Error(
            q.hasOwnProp(la, i)
              ? `Adapter '${i}' is not available in the build`
              : `Unknown adapter '${i}'`,
          );
        }
        if (!q.isFunction(n)) throw new TypeError('adapter is not a function');
        return n;
      };
      function ma(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new he(null, e);
      }
      function da(e) {
        ma(e),
          (e.headers = de.from(e.headers)),
          (e.data = xe.call(e, e.transformRequest)),
          -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1);
        return ua(e.adapter || te.adapter)(e).then(
          function (a) {
            return (
              ma(e),
              (a.data = xe.call(e, e.transformResponse, a)),
              (a.headers = de.from(a.headers)),
              a
            );
          },
          function (a) {
            return (
              fe(a) ||
                (ma(e),
                a &&
                  a.response &&
                  ((a.response.data = xe.call(
                    e,
                    e.transformResponse,
                    a.response,
                  )),
                  (a.response.headers = de.from(a.response.headers)))),
              Promise.reject(a)
            );
          },
        );
      }
      const xa = (e) => (e instanceof de ? e.toJSON() : e);
      function fa(e, a) {
        a = a || {};
        const i = {};
        function n(e, a, i) {
          return q.isPlainObject(e) && q.isPlainObject(a)
            ? q.merge.call({ caseless: i }, e, a)
            : q.isPlainObject(a)
            ? q.merge({}, a)
            : q.isArray(a)
            ? a.slice()
            : a;
        }
        function o(e, a, i) {
          return q.isUndefined(a)
            ? q.isUndefined(e)
              ? void 0
              : n(void 0, e, i)
            : n(e, a, i);
        }
        function s(e, a) {
          if (!q.isUndefined(a)) return n(void 0, a);
        }
        function t(e, a) {
          return q.isUndefined(a)
            ? q.isUndefined(e)
              ? void 0
              : n(void 0, e)
            : n(void 0, a);
        }
        function r(i, o, s) {
          return s in a ? n(i, o) : s in e ? n(void 0, i) : void 0;
        }
        const c = {
          url: s,
          method: s,
          data: s,
          baseURL: t,
          transformRequest: t,
          transformResponse: t,
          paramsSerializer: t,
          timeout: t,
          timeoutMessage: t,
          withCredentials: t,
          adapter: t,
          responseType: t,
          xsrfCookieName: t,
          xsrfHeaderName: t,
          onUploadProgress: t,
          onDownloadProgress: t,
          decompress: t,
          maxContentLength: t,
          maxBodyLength: t,
          beforeRedirect: t,
          transport: t,
          httpAgent: t,
          httpsAgent: t,
          cancelToken: t,
          socketPath: t,
          responseEncoding: t,
          validateStatus: r,
          headers: (e, a) => o(xa(e), xa(a), !0),
        };
        return (
          q.forEach(Object.keys(e).concat(Object.keys(a)), function (n) {
            const s = c[n] || o,
              t = s(e[n], a[n], n);
            (q.isUndefined(t) && s !== r) || (i[n] = t);
          }),
          i
        );
      }
      const va = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
        (e, a) => {
          va[e] = function (i) {
            return typeof i === e || 'a' + (a < 1 ? 'n ' : ' ') + e;
          };
        },
      );
      const ha = {};
      va.transitional = function (e, a, i) {
        function n(e, a) {
          return (
            "[Axios v1.3.3] Transitional option '" +
            e +
            "'" +
            a +
            (i ? '. ' + i : '')
          );
        }
        return (i, o, s) => {
          if (!1 === e)
            throw new P(
              n(o, ' has been removed' + (a ? ' in ' + a : '')),
              P.ERR_DEPRECATED,
            );
          return (
            a &&
              !ha[o] &&
              ((ha[o] = !0),
              console.warn(
                n(
                  o,
                  ' has been deprecated since v' +
                    a +
                    ' and will be removed in the near future',
                ),
              )),
            !e || e(i, o, s)
          );
        };
      };
      var ba = {
        assertOptions: function (e, a, i) {
          if ('object' != typeof e)
            throw new P('options must be an object', P.ERR_BAD_OPTION_VALUE);
          const n = Object.keys(e);
          let o = n.length;
          for (; o-- > 0; ) {
            const s = n[o],
              t = a[s];
            if (t) {
              const a = e[s],
                i = void 0 === a || t(a, s, e);
              if (!0 !== i)
                throw new P(
                  'option ' + s + ' must be ' + i,
                  P.ERR_BAD_OPTION_VALUE,
                );
            } else if (!0 !== i)
              throw new P('Unknown option ' + s, P.ERR_BAD_OPTION);
          }
        },
        validators: va,
      };
      const ga = ba.validators;
      class ya {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new Z(), response: new Z() });
        }
        request(e, a) {
          'string' == typeof e ? ((a = a || {}).url = e) : (a = e || {}),
            (a = fa(this.defaults, a));
          const { transitional: i, paramsSerializer: n, headers: o } = a;
          let s;
          void 0 !== i &&
            ba.assertOptions(
              i,
              {
                silentJSONParsing: ga.transitional(ga.boolean),
                forcedJSONParsing: ga.transitional(ga.boolean),
                clarifyTimeoutError: ga.transitional(ga.boolean),
              },
              !1,
            ),
            void 0 !== n &&
              ba.assertOptions(
                n,
                { encode: ga.function, serialize: ga.function },
                !0,
              ),
            (a.method = (
              a.method ||
              this.defaults.method ||
              'get'
            ).toLowerCase()),
            (s = o && q.merge(o.common, o[a.method])),
            s &&
              q.forEach(
                ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                (e) => {
                  delete o[e];
                },
              ),
            (a.headers = de.concat(s, o));
          const t = [];
          let r = !0;
          this.interceptors.request.forEach(function (e) {
            ('function' == typeof e.runWhen && !1 === e.runWhen(a)) ||
              ((r = r && e.synchronous), t.unshift(e.fulfilled, e.rejected));
          });
          const c = [];
          let p;
          this.interceptors.response.forEach(function (e) {
            c.push(e.fulfilled, e.rejected);
          });
          let l,
            u = 0;
          if (!r) {
            const e = [da.bind(this), void 0];
            for (
              e.unshift.apply(e, t),
                e.push.apply(e, c),
                l = e.length,
                p = Promise.resolve(a);
              u < l;

            )
              p = p.then(e[u++], e[u++]);
            return p;
          }
          l = t.length;
          let m = a;
          for (u = 0; u < l; ) {
            const e = t[u++],
              a = t[u++];
            try {
              m = e(m);
            } catch (e) {
              a.call(this, e);
              break;
            }
          }
          try {
            p = da.call(this, m);
          } catch (e) {
            return Promise.reject(e);
          }
          for (u = 0, l = c.length; u < l; ) p = p.then(c[u++], c[u++]);
          return p;
        }
        getUri(e) {
          return X(
            ge((e = fa(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer,
          );
        }
      }
      q.forEach(['delete', 'get', 'head', 'options'], function (e) {
        ya.prototype[e] = function (a, i) {
          return this.request(
            fa(i || {}, { method: e, url: a, data: (i || {}).data }),
          );
        };
      }),
        q.forEach(['post', 'put', 'patch'], function (e) {
          function a(a) {
            return function (i, n, o) {
              return this.request(
                fa(o || {}, {
                  method: e,
                  headers: a ? { 'Content-Type': 'multipart/form-data' } : {},
                  url: i,
                  data: n,
                }),
              );
            };
          }
          (ya.prototype[e] = a()), (ya.prototype[e + 'Form'] = a(!0));
        });
      var wa = ya;
      class ka {
        constructor(e) {
          if ('function' != typeof e)
            throw new TypeError('executor must be a function.');
          let a;
          this.promise = new Promise(function (e) {
            a = e;
          });
          const i = this;
          this.promise.then((e) => {
            if (!i._listeners) return;
            let a = i._listeners.length;
            for (; a-- > 0; ) i._listeners[a](e);
            i._listeners = null;
          }),
            (this.promise.then = (e) => {
              let a;
              const n = new Promise((e) => {
                i.subscribe(e), (a = e);
              }).then(e);
              return (
                (n.cancel = function () {
                  i.unsubscribe(a);
                }),
                n
              );
            }),
            e(function (e, n, o) {
              i.reason || ((i.reason = new he(e, n, o)), a(i.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason
            ? e(this.reason)
            : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const a = this._listeners.indexOf(e);
          -1 !== a && this._listeners.splice(a, 1);
        }
        static source() {
          let e;
          return {
            token: new ka(function (a) {
              e = a;
            }),
            cancel: e,
          };
        }
      }
      var ja = ka;
      const _a = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(_a).forEach(([e, a]) => {
        _a[a] = e;
      });
      var Ea = _a;
      const Ca = (function e(a) {
        const i = new wa(a),
          o = n(wa.prototype.request, i);
        return (
          q.extend(o, wa.prototype, i, { allOwnKeys: !0 }),
          q.extend(o, i, null, { allOwnKeys: !0 }),
          (o.create = function (i) {
            return e(fa(a, i));
          }),
          o
        );
      })(te);
      (Ca.Axios = wa),
        (Ca.CanceledError = he),
        (Ca.CancelToken = ja),
        (Ca.isCancel = fe),
        (Ca.VERSION = '1.3.3'),
        (Ca.toFormData = $),
        (Ca.AxiosError = P),
        (Ca.Cancel = Ca.CanceledError),
        (Ca.all = function (e) {
          return Promise.all(e);
        }),
        (Ca.spread = function (e) {
          return function (a) {
            return e.apply(null, a);
          };
        }),
        (Ca.isAxiosError = function (e) {
          return q.isObject(e) && !0 === e.isAxiosError;
        }),
        (Ca.mergeConfig = fa),
        (Ca.AxiosHeaders = de),
        (Ca.formToJSON = (e) => ne(q.isHTMLForm(e) ? new FormData(e) : e)),
        (Ca.HttpStatusCode = Ea),
        (Ca.default = Ca);
      var Ra = Ca;
      const {
        Axios: Oa,
        AxiosError: Sa,
        CanceledError: Ta,
        isCancel: za,
        CancelToken: Fa,
        VERSION: Aa,
        all: La,
        Cancel: qa,
        isAxiosError: Ba,
        spread: Na,
        toFormData: Ua,
        AxiosHeaders: Pa,
        HttpStatusCode: Da,
        formToJSON: Ia,
        mergeConfig: Ma,
      } = Ra;
    },
  ]),
);
