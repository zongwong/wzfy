'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 表单验证
 * 
 * @param {Object} rules 验证字段的规则
 * @param {Object} messages 验证字段的提示信息
 * 
 */
var WxValidate = function () {
    function WxValidate() {
        var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, WxValidate);

        Object.assign(this, {
            rules: rules,
            messages: messages
        });
        this.__init();
    }

    /**
     * __init
     */


    _createClass(WxValidate, [{
        key: '__init',
        value: function __init() {
            this.__initMethods();
            this.__initDefaults();
            this.__initData();
        }

        /**
         * 初始化数据
         */

    }, {
        key: '__initData',
        value: function __initData() {
            this.form = {};
            this.errorList = [];
        }

        /**
         * 初始化默认提示信息
         */

    }, {
        key: '__initDefaults',
        value: function __initDefaults() {
            this.defaults = {
                messages: {
                    required: '这是必填字段。',
                    email: '请输入有效的电子邮件地址。',
                    tel: '请输入11位的手机号码。',
                    url: '请输入有效的网址。',
                    date: '请输入有效的日期。',
                    dateISO: '请输入有效的日期（ISO），例如：2009-06-23，1998/01/22。',
                    number: '请输入有效的数字。',
                    digits: '只能输入数字。',
                    idcard: '请输入18位的有效身份证。',
                    equalTo: this.formatTpl('输入值必须和 {0} 相同。'),
                    contains: this.formatTpl('输入值必须包含 {0}。'),
                    minlength: this.formatTpl('最少要输入 {0} 个字符。'),
                    maxlength: this.formatTpl('最多可以输入 {0} 个字符。'),
                    rangelength: this.formatTpl('请输入长度在 {0} 到 {1} 之间的字符。'),
                    min: this.formatTpl('请输入不小于 {0} 的数值。'),
                    max: this.formatTpl('请输入不大于 {0} 的数值。'),
                    range: this.formatTpl('请输入范围在 {0} 到 {1} 之间的数值。')
                }
            };
        }

        /**
         * 初始化默认验证方法
         */

    }, {
        key: '__initMethods',
        value: function __initMethods() {
            var that = this;
            that.methods = {
                /**
                 * 验证必填元素
                 */
                required: function required(value, param) {
                    if (!that.depend(param)) {
                        return 'dependency-mismatch';
                    } else if (typeof value === 'number') {
                        value = value.toString();
                    } else if (typeof value === 'boolean') {
                        return !0;
                    }

                    return value.length > 0;
                },

                /**
                 * 验证电子邮箱格式
                 */
                email: function email(value) {
                    return that.optional(value) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
                },

                /**
                 * 验证手机格式
                 */
                tel: function tel(value) {
                    return that.optional(value) || /^1[34578]\d{9}$/.test(value);
                },

                /**
                 * 验证URL格式
                 */
                url: function url(value) {
                    return that.optional(value) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
                },

                /**
                 * 验证日期格式
                 */
                date: function date(value) {
                    return that.optional(value) || !/Invalid|NaN/.test(new Date(value).toString());
                },

                /**
                 * 验证ISO类型的日期格式
                 */
                dateISO: function dateISO(value) {
                    return that.optional(value) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
                },

                /**
                 * 验证十进制数字
                 */
                number: function number(value) {
                    return that.optional(value) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
                },

                /**
                 * 验证整数
                 */
                digits: function digits(value) {
                    return that.optional(value) || /^\d+$/.test(value);
                },

                /**
                 * 验证身份证号码
                 */
                idcard: function idcard(value) {
                    return that.optional(value) || /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
                },

                /**
                 * 验证两个输入框的内容是否相同
                 */
                equalTo: function equalTo(value, param) {
                    return that.optional(value) || value === that.scope.detail.value[param];
                },

                /**
                 * 验证是否包含某个值
                 */
                contains: function contains(value, param) {
                    return that.optional(value) || value.indexOf(param) >= 0;
                },

                /**
                 * 验证最小长度
                 */
                minlength: function minlength(value, param) {
                    return that.optional(value) || value.length >= param;
                },

                /**
                 * 验证最大长度
                 */
                maxlength: function maxlength(value, param) {
                    return that.optional(value) || value.length <= param;
                },

                /**
                 * 验证一个长度范围[min, max]
                 */
                rangelength: function rangelength(value, param) {
                    return that.optional(value) || value.length >= param[0] && value.length <= param[1];
                },

                /**
                 * 验证最小值
                 */
                min: function min(value, param) {
                    return that.optional(value) || value >= param;
                },

                /**
                 * 验证最大值
                 */
                max: function max(value, param) {
                    return that.optional(value) || value <= param;
                },

                /**
                 * 验证一个值范围[min, max]
                 */
                range: function range(value, param) {
                    return that.optional(value) || value >= param[0] && value <= param[1];
                }
            };
        }

        /**
         * 添加自定义验证方法
         * @param {String} name 方法名
         * @param {Function} method 函数体，接收两个参数(value, param)，value表示元素的值，param表示参数
         * @param {String} message 提示信息
         */

    }, {
        key: 'addMethod',
        value: function addMethod(name, method, message) {
            this.methods[name] = method;
            this.defaults.messages[name] = message !== undefined ? message : this.defaults.messages[name];
        }

        /**
         * 判断验证方法是否存在
         */

    }, {
        key: 'isValidMethod',
        value: function isValidMethod(value) {
            var methods = [];
            for (var method in this.methods) {
                if (method && typeof this.methods[method] === 'function') {
                    methods.push(method);
                }
            }
            return methods.indexOf(value) !== -1;
        }

        /**
         * 格式化提示信息模板
         */

    }, {
        key: 'formatTpl',
        value: function formatTpl(source, params) {
            var that = this;
            if (arguments.length === 1) {
                return function () {
                    var args = Array.from(arguments);
                    args.unshift(source);
                    return that.formatTpl.apply(this, args);
                };
            }
            if (params === undefined) {
                return source;
            }
            if (arguments.length > 2 && params.constructor !== Array) {
                params = Array.from(arguments).slice(1);
            }
            if (params.constructor !== Array) {
                params = [params];
            }
            params.forEach(function (n, i) {
                source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
                    return n;
                });
            });
            return source;
        }

        /**
         * 判断规则依赖是否存在
         */

    }, {
        key: 'depend',
        value: function depend(param) {
            switch (typeof param === 'undefined' ? 'undefined' : _typeof(param)) {
                case 'boolean':
                    param = param;
                    break;
                case 'string':
                    param = !!param.length;
                    break;
                case 'function':
                    param = param();
                default:
                    param = !0;
            }
            return param;
        }

        /**
         * 判断输入值是否为空
         */

    }, {
        key: 'optional',
        value: function optional(value) {
            return !this.methods.required(value) && 'dependency-mismatch';
        }

        /**
         * 获取自定义字段的提示信息
         * @param {String} param 字段名
         * @param {Object} rule 规则
         */

    }, {
        key: 'customMessage',
        value: function customMessage(param, rule) {
            var params = this.messages[param];
            var isObject = (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object';
            if (params && isObject) return params[rule.method];
        }

        /**
         * 获取某个指定字段的提示信息
         * @param {String} param 字段名
         * @param {Object} rule 规则
         */

    }, {
        key: 'defaultMessage',
        value: function defaultMessage(param, rule) {
            var message = this.customMessage(param, rule) || this.defaults.messages[rule.method];
            var type = typeof message === 'undefined' ? 'undefined' : _typeof(message);

            if (type === 'undefined') {
                message = 'Warning: No message defined for ' + rule.method + '.';
            } else if (type === 'function') {
                message = message.call(this, rule.parameters);
            }

            return message;
        }

        /**
         * 缓存错误信息
         * @param {String} param 字段名
         * @param {Object} rule 规则
         * @param {String} value 元素的值
         */

    }, {
        key: 'formatTplAndAdd',
        value: function formatTplAndAdd(param, rule, value) {
            var msg = this.defaultMessage(param, rule);

            this.errorList.push({
                param: param,
                msg: msg,
                value: value
            });
        }

        /**
         * 验证某个指定字段的规则
         * @param {String} param 字段名
         * @param {Object} rules 规则
         * @param {Object} event 表单数据对象
         */

    }, {
        key: 'checkParam',
        value: function checkParam(param, rules, event) {

            // 缓存表单数据对象
            this.scope = event;

            // 缓存字段对应的值
            var data = event.detail.value;
            var value = data[param] !== null && data[param] !== undefined ? data[param] : '';

            // 遍历某个指定字段的所有规则，依次验证规则，否则缓存错误信息
            for (var method in rules) {

                // 判断验证方法是否存在
                if (this.isValidMethod(method)) {

                    // 缓存规则的属性及值
                    var rule = {
                        method: method,
                        parameters: rules[method]

                        // 调用验证方法
                    };var result = this.methods[method](value, rule.parameters);

                    // 若result返回值为dependency-mismatch，则说明该字段的值为空或非必填字段
                    if (result === 'dependency-mismatch') {
                        continue;
                    }

                    this.setValue(param, method, result, value);

                    // 判断是否通过验证，否则缓存错误信息，跳出循环
                    if (!result) {
                        this.formatTplAndAdd(param, rule, value);
                        break;
                    }
                }
            }
        }

        /**
         * 设置字段的默认验证值
         * @param {String} param 字段名
         */

    }, {
        key: 'setView',
        value: function setView(param) {
            this.form[param] = {
                $name: param,
                $valid: true,
                $invalid: false,
                $error: {},
                $success: {},
                $viewValue: ''
            };
        }

        /**
         * 设置字段的验证值
         * @param {String} param 字段名
         * @param {String} method 字段的方法
         * @param {Boolean} result 是否通过验证
         * @param {String} value 字段的值
         */

    }, {
        key: 'setValue',
        value: function setValue(param, method, result, value) {
            var params = this.form[param];
            params.$valid = result;
            params.$invalid = !result;
            params.$error[method] = !result;
            params.$success[method] = result;
            params.$viewValue = value;
        }

        /**
         * 验证所有字段的规则，返回验证是否通过
         * @param {Object} event 表单数据对象
         */

    }, {
        key: 'checkForm',
        value: function checkForm(event) {
            this.__initData();

            for (var param in this.rules) {
                this.setView(param);
                this.checkParam(param, this.rules[param], event);
            }

            return this.valid();
        }

        /**
         * 返回验证是否通过
         */

    }, {
        key: 'valid',
        value: function valid() {
            return this.size() === 0;
        }

        /**
         * 返回错误信息的个数
         */

    }, {
        key: 'size',
        value: function size() {
            return this.errorList.length;
        }

        /**
         * 返回所有错误信息
         */

    }, {
        key: 'validationErrors',
        value: function validationErrors() {
            return this.errorList;
        }
    }]);

    return WxValidate;
}();

exports.default = WxValidate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIld4VmFsaWRhdGUuanMiXSwibmFtZXMiOlsiV3hWYWxpZGF0ZSIsInJ1bGVzIiwibWVzc2FnZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJfX2luaXQiLCJfX2luaXRNZXRob2RzIiwiX19pbml0RGVmYXVsdHMiLCJfX2luaXREYXRhIiwiZm9ybSIsImVycm9yTGlzdCIsImRlZmF1bHRzIiwicmVxdWlyZWQiLCJlbWFpbCIsInRlbCIsInVybCIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiaWRjYXJkIiwiZXF1YWxUbyIsImZvcm1hdFRwbCIsImNvbnRhaW5zIiwibWlubGVuZ3RoIiwibWF4bGVuZ3RoIiwicmFuZ2VsZW5ndGgiLCJtaW4iLCJtYXgiLCJyYW5nZSIsInRoYXQiLCJtZXRob2RzIiwidmFsdWUiLCJwYXJhbSIsImRlcGVuZCIsInRvU3RyaW5nIiwibGVuZ3RoIiwib3B0aW9uYWwiLCJ0ZXN0IiwiRGF0ZSIsInNjb3BlIiwiZGV0YWlsIiwiaW5kZXhPZiIsIm5hbWUiLCJtZXRob2QiLCJtZXNzYWdlIiwidW5kZWZpbmVkIiwicHVzaCIsInNvdXJjZSIsInBhcmFtcyIsImFyZ3VtZW50cyIsImFyZ3MiLCJBcnJheSIsImZyb20iLCJ1bnNoaWZ0IiwiYXBwbHkiLCJjb25zdHJ1Y3RvciIsInNsaWNlIiwiZm9yRWFjaCIsIm4iLCJpIiwicmVwbGFjZSIsIlJlZ0V4cCIsInJ1bGUiLCJpc09iamVjdCIsImN1c3RvbU1lc3NhZ2UiLCJ0eXBlIiwiY2FsbCIsInBhcmFtZXRlcnMiLCJtc2ciLCJkZWZhdWx0TWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsImlzVmFsaWRNZXRob2QiLCJyZXN1bHQiLCJzZXRWYWx1ZSIsImZvcm1hdFRwbEFuZEFkZCIsIiRuYW1lIiwiJHZhbGlkIiwiJGludmFsaWQiLCIkZXJyb3IiLCIkc3VjY2VzcyIsIiR2aWV3VmFsdWUiLCJzZXRWaWV3IiwiY2hlY2tQYXJhbSIsInZhbGlkIiwic2l6ZSJdLCJtYXBwaW5n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cUJBQUtrRixPQUFMLENBQWFsRCxLQUFiO0FBQ0EscUJBQUttRCxVQUFMLENBQWdCbkQsS0FBaEIsRUFBdUIsS0FBS2hDLEtBQUwsQ0FBV2dDLEtBQVgsQ0FBdkIsRUFBMENzQyxLQUExQztBQUNIOztBQUVELG1CQUFPLEtBQUtjLEtBQUwsRUFBUDtBQUNIOztBQUVEOzs7Ozs7Z0NBR1E7QUFDSixtQkFBTyxLQUFLQyxJQUFMLE9BQWdCLENBQXZCO0FBQ0g7O0FBRUQ7Ozs7OzsrQkFHTztBQUNILG1CQUFPLEtBQUs1RSxTQUFMLENBQWUwQixNQUF0QjtBQUNIOztBQUVEOzs7Ozs7MkNBR21CO0FBQ2YsbUJBQU8sS0FBSzFCLFNBQVo7QUFDSDs7Ozs7O2tCQUdZVixVIiwiZmlsZSI6Ild4VmFsaWRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6KGo5Y2V6aqM6K+BXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcnVsZXMg6aqM6K+B5a2X5q6155qE6KeE5YiZXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlcyDpqozor4HlrZfmrrXnmoTmj5DnpLrkv6Hmga9cclxuICogXHJcbiAqL1xyXG5jbGFzcyBXeFZhbGlkYXRlIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcyA9IHt9LCBtZXNzYWdlcyA9IHt9KSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICAgICAgcnVsZXMsXHJcbiAgICAgICAgICBtZXNzYWdlcyxcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5fX2luaXQoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogX19pbml0XHJcbiAgICovXHJcbiAgX19pbml0KCkge1xyXG4gICAgICB0aGlzLl9faW5pdE1ldGhvZHMoKVxyXG4gICAgICB0aGlzLl9faW5pdERlZmF1bHRzKClcclxuICAgICAgdGhpcy5fX2luaXREYXRhKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIneWni+WMluaVsOaNrlxyXG4gICAqL1xyXG4gIF9faW5pdERhdGEoKSB7XHJcbiAgICAgIHRoaXMuZm9ybSA9IHt9XHJcbiAgICAgIHRoaXMuZXJyb3JMaXN0ID0gW11cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIneWni+WMlum7mOiupOaPkOekuuS/oeaBr1xyXG4gICAqL1xyXG4gIF9faW5pdERlZmF1bHRzKCkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRzID0ge1xyXG4gICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogJ+i/meaYr+W/heWhq+Wtl+auteOAgicsXHJcbiAgICAgICAgICAgICAgZW1haWw6ICfor7fovpPlhaXmnInmlYjnmoTnlLXlrZDpgq7ku7blnLDlnYDjgIInLFxyXG4gICAgICAgICAgICAgIHRlbDogJ+ivt+i+k+WFpTEx5L2N55qE5omL5py65Y+356CB44CCJyxcclxuICAgICAgICAgICAgICB1cmw6ICfor7fovpPlhaXmnInmlYjnmoTnvZHlnYDjgIInLFxyXG4gICAgICAgICAgICAgIGRhdGU6ICfor7fovpPlhaXmnInmlYjnmoTml6XmnJ/jgIInLFxyXG4gICAgICAgICAgICAgIGRhdGVJU086ICfor7fovpPlhaXmnInmlYjnmoTml6XmnJ/vvIhJU0/vvInvvIzkvovlpoLvvJoyMDA5LTA2LTIz77yMMTk5OC8wMS8yMuOAgicsXHJcbiAgICAgICAgICAgICAgbnVtYmVyOiAn6K+36L6T5YWl5pyJ5pWI55qE5pWw5a2X44CCJyxcclxuICAgICAgICAgICAgICBkaWdpdHM6ICflj6rog73ovpPlhaXmlbDlrZfjgIInLFxyXG4gICAgICAgICAgICAgIGlkY2FyZDogJ+ivt+i+k+WFpTE45L2N55qE5pyJ5pWI6Lqr5Lu96K+B44CCJyxcclxuICAgICAgICAgICAgICBlcXVhbFRvOiB0aGlzLmZvcm1hdFRwbCgn6L6T5YWl5YC85b+F6aG75ZKMIHswfSDnm7jlkIzjgIInKSxcclxuICAgICAgICAgICAgICBjb250YWluczogdGhpcy5mb3JtYXRUcGwoJ+i+k+WFpeWAvOW/hemhu+WMheWQqyB7MH3jgIInKSxcclxuICAgICAgICAgICAgICBtaW5sZW5ndGg6IHRoaXMuZm9ybWF0VHBsKCfmnIDlsJHopoHovpPlhaUgezB9IOS4quWtl+espuOAgicpLFxyXG4gICAgICAgICAgICAgIG1heGxlbmd0aDogdGhpcy5mb3JtYXRUcGwoJ+acgOWkmuWPr+S7pei+k+WFpSB7MH0g5Liq5a2X56ym44CCJyksXHJcbiAgICAgICAgICAgICAgcmFuZ2VsZW5ndGg6IHRoaXMuZm9ybWF0VHBsKCfor7fovpPlhaXplb/luqblnKggezB9IOWIsCB7MX0g5LmL6Ze055qE5a2X56ym44CCJyksXHJcbiAgICAgICAgICAgICAgbWluOiB0aGlzLmZvcm1hdFRwbCgn6K+36L6T5YWl5LiN5bCP5LqOIHswfSDnmoTmlbDlgLzjgIInKSxcclxuICAgICAgICAgICAgICBtYXg6IHRoaXMuZm9ybWF0VHBsKCfor7fovpPlhaXkuI3lpKfkuo4gezB9IOeahOaVsOWAvOOAgicpLFxyXG4gICAgICAgICAgICAgIHJhbmdlOiB0aGlzLmZvcm1hdFRwbCgn6K+36L6T5YWl6IyD5Zu05ZyoIHswfSDliLAgezF9IOS5i+mXtOeahOaVsOWAvOOAgicpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliJ3lp4vljJbpu5jorqTpqozor4Hmlrnms5VcclxuICAgKi9cclxuICBfX2luaXRNZXRob2RzKCkge1xyXG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgICB0aGF0Lm1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIOmqjOivgeW/heWhq+WFg+e0oFxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICByZXF1aXJlZCh2YWx1ZSwgcGFyYW0pIHtcclxuICAgICAgICAgICAgICBpZiAoIXRoYXQuZGVwZW5kKHBhcmFtKSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJ2RlcGVuZGVuY3ktbWlzbWF0Y2gnXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICEwXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICog6aqM6K+B55S15a2Q6YKu566x5qC85byPXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGVtYWlsKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8IC9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvLnRlc3QodmFsdWUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiDpqozor4HmiYvmnLrmoLzlvI9cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgdGVsKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8IC9eMVszNDU3OF1cXGR7OX0kLy50ZXN0KHZhbHVlKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICog6aqM6K+BVVJM5qC85byPXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIHVybCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCAvXig/Oig/Oig/Omh0dHBzP3xmdHApOik/XFwvXFwvKSg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSooPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH0pKS4/KSg/OjpcXGR7Miw1fSk/KD86Wy8/I11cXFMqKT8kL2kudGVzdCh2YWx1ZSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIOmqjOivgeaXpeacn+agvOW8j1xyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBkYXRlKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8ICEvSW52YWxpZHxOYU4vLnRlc3QobmV3IERhdGUodmFsdWUpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiDpqozor4FJU0/nsbvlnovnmoTml6XmnJ/moLzlvI9cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgZGF0ZUlTTyh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCAvXlxcZHs0fVtcXC9cXC1dKDA/WzEtOV18MVswMTJdKVtcXC9cXC1dKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKSQvLnRlc3QodmFsdWUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiDpqozor4HljYHov5vliLbmlbDlrZdcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgbnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8IC9eKD86LT9cXGQrfC0/XFxkezEsM30oPzosXFxkezN9KSspPyg/OlxcLlxcZCspPyQvLnRlc3QodmFsdWUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiDpqozor4HmlbTmlbBcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgZGlnaXRzKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8IC9eXFxkKyQvLnRlc3QodmFsdWUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiDpqozor4Houqvku73or4Hlj7fnoIFcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgaWRjYXJkKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8IC9eWzEtOV1cXGR7NX1bMS05XVxcZHszfSgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pXFxkezN9KFswLTldfFgpJC8udGVzdCh2YWx1ZSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIOmqjOivgeS4pOS4qui+k+WFpeahhueahOWGheWuueaYr+WQpuebuOWQjFxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBlcXVhbFRvKHZhbHVlLCBwYXJhbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCB2YWx1ZSA9PT0gdGhhdC5zY29wZS5kZXRhaWwudmFsdWVbcGFyYW1dXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiDpqozor4HmmK/lkKbljIXlkKvmn5DkuKrlgLxcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgY29udGFpbnModmFsdWUsIHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8IHZhbHVlLmluZGV4T2YocGFyYW0pID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIOmqjOivgeacgOWwj+mVv+W6plxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBtaW5sZW5ndGgodmFsdWUsIHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA+PSBwYXJhbVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICog6aqM6K+B5pyA5aSn6ZW/5bqmXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIG1heGxlbmd0aCh2YWx1ZSwgcGFyYW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25hbCh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoIDw9IHBhcmFtXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiDpqozor4HkuIDkuKrplb/luqbojIPlm7RbbWluLCBtYXhdXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIHJhbmdlbGVuZ3RoKHZhbHVlLCBwYXJhbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCAodmFsdWUubGVuZ3RoID49IHBhcmFtWzBdICYmIHZhbHVlLmxlbmd0aCA8PSBwYXJhbVsxXSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIOmqjOivgeacgOWwj+WAvFxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBtaW4odmFsdWUsIHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8IHZhbHVlID49IHBhcmFtXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiDpqozor4HmnIDlpKflgLxcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgbWF4KHZhbHVlLCBwYXJhbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCB2YWx1ZSA8PSBwYXJhbVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICog6aqM6K+B5LiA5Liq5YC86IyD5Zu0W21pbiwgbWF4XVxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICByYW5nZSh2YWx1ZSwgcGFyYW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25hbCh2YWx1ZSkgfHwgKHZhbHVlID49IHBhcmFtWzBdICYmIHZhbHVlIDw9IHBhcmFtWzFdKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5re75Yqg6Ieq5a6a5LmJ6aqM6K+B5pa55rOVXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUg5pa55rOV5ZCNXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbWV0aG9kIOWHveaVsOS9k++8jOaOpeaUtuS4pOS4quWPguaVsCh2YWx1ZSwgcGFyYW0p77yMdmFsdWXooajnpLrlhYPntKDnmoTlgLzvvIxwYXJhbeihqOekuuWPguaVsFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIOaPkOekuuS/oeaBr1xyXG4gICAqL1xyXG4gIGFkZE1ldGhvZChuYW1lLCBtZXRob2QsIG1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5tZXRob2RzW25hbWVdID0gbWV0aG9kXHJcbiAgICAgIHRoaXMuZGVmYXVsdHMubWVzc2FnZXNbbmFtZV0gPSBtZXNzYWdlICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlIDogdGhpcy5kZWZhdWx0cy5tZXNzYWdlc1tuYW1lXVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5pat6aqM6K+B5pa55rOV5piv5ZCm5a2Y5ZyoXHJcbiAgICovXHJcbiAgaXNWYWxpZE1ldGhvZCh2YWx1ZSkge1xyXG4gICAgICBsZXQgbWV0aG9kcyA9IFtdXHJcbiAgICAgIGZvciAobGV0IG1ldGhvZCBpbiB0aGlzLm1ldGhvZHMpIHtcclxuICAgICAgICAgIGlmIChtZXRob2QgJiYgdHlwZW9mIHRoaXMubWV0aG9kc1ttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKG1ldGhvZClcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbmRleE9mKHZhbHVlKSAhPT0gLTFcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOagvOW8j+WMluaPkOekuuS/oeaBr+aooeadv1xyXG4gICAqL1xyXG4gIGZvcm1hdFRwbChzb3VyY2UsIHBhcmFtcykge1xyXG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpXHJcbiAgICAgICAgICAgICAgYXJncy51bnNoaWZ0KHNvdXJjZSlcclxuICAgICAgICAgICAgICByZXR1cm4gdGhhdC5mb3JtYXRUcGwuYXBwbHkodGhpcywgYXJncylcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAocGFyYW1zID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiBzb3VyY2VcclxuICAgICAgfVxyXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgcGFyYW1zLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xyXG4gICAgICAgICAgcGFyYW1zID0gQXJyYXkuZnJvbShhcmd1bWVudHMpLnNsaWNlKDEpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhcmFtcy5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcclxuICAgICAgICAgIHBhcmFtcyA9IFtwYXJhbXNdXHJcbiAgICAgIH1cclxuICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24obiwgaSkge1xyXG4gICAgICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gc291cmNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliKTmlq3op4TliJnkvp3otZbmmK/lkKblrZjlnKhcclxuICAgKi9cclxuICBkZXBlbmQocGFyYW0pIHtcclxuICAgICAgc3dpdGNoICh0eXBlb2YgcGFyYW0pIHtcclxuICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICAgIHBhcmFtID0gcGFyYW1cclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgICBwYXJhbSA9ICEhcGFyYW0ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcclxuICAgICAgICAgICAgICBwYXJhbSA9IHBhcmFtKClcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgcGFyYW0gPSAhMFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwYXJhbVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5pat6L6T5YWl5YC85piv5ZCm5Li656m6XHJcbiAgICovXHJcbiAgb3B0aW9uYWwodmFsdWUpIHtcclxuICAgICAgcmV0dXJuICF0aGlzLm1ldGhvZHMucmVxdWlyZWQodmFsdWUpICYmICdkZXBlbmRlbmN5LW1pc21hdGNoJ1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W6Ieq5a6a5LmJ5a2X5q6155qE5o+Q56S65L+h5oGvXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtIOWtl+auteWQjVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBydWxlIOinhOWImVxyXG4gICAqL1xyXG4gIGN1c3RvbU1lc3NhZ2UocGFyYW0sIHJ1bGUpIHtcclxuICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5tZXNzYWdlc1twYXJhbV1cclxuICAgICAgY29uc3QgaXNPYmplY3QgPSB0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0J1xyXG4gICAgICBpZiAocGFyYW1zICYmIGlzT2JqZWN0KSByZXR1cm4gcGFyYW1zW3J1bGUubWV0aG9kXVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5p+Q5Liq5oyH5a6a5a2X5q6155qE5o+Q56S65L+h5oGvXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtIOWtl+auteWQjVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBydWxlIOinhOWImVxyXG4gICAqL1xyXG4gIGRlZmF1bHRNZXNzYWdlKHBhcmFtLCBydWxlKSB7XHJcbiAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5jdXN0b21NZXNzYWdlKHBhcmFtLCBydWxlKSB8fCB0aGlzLmRlZmF1bHRzLm1lc3NhZ2VzW3J1bGUubWV0aG9kXVxyXG4gICAgICBsZXQgdHlwZSA9IHR5cGVvZiBtZXNzYWdlXHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIG1lc3NhZ2UgPSBgV2FybmluZzogTm8gbWVzc2FnZSBkZWZpbmVkIGZvciAke3J1bGUubWV0aG9kfS5gXHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UuY2FsbCh0aGlzLCBydWxlLnBhcmFtZXRlcnMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBtZXNzYWdlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnvJPlrZjplJnor6/kv6Hmga9cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0g5a2X5q615ZCNXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHJ1bGUg6KeE5YiZXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIOWFg+e0oOeahOWAvFxyXG4gICAqL1xyXG4gIGZvcm1hdFRwbEFuZEFkZChwYXJhbSwgcnVsZSwgdmFsdWUpIHtcclxuICAgICAgbGV0IG1zZyA9IHRoaXMuZGVmYXVsdE1lc3NhZ2UocGFyYW0sIHJ1bGUpXHJcblxyXG4gICAgICB0aGlzLmVycm9yTGlzdC5wdXNoKHtcclxuICAgICAgICAgIHBhcmFtOiBwYXJhbSxcclxuICAgICAgICAgIG1zZzogbXNnLFxyXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6aqM6K+B5p+Q5Liq5oyH5a6a5a2X5q6155qE6KeE5YiZXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtIOWtl+auteWQjVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBydWxlcyDop4TliJlcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQg6KGo5Y2V5pWw5o2u5a+56LGhXHJcbiAgICovXHJcbiAgY2hlY2tQYXJhbShwYXJhbSwgcnVsZXMsIGV2ZW50KSB7XHJcblxyXG4gICAgICAvLyDnvJPlrZjooajljZXmlbDmja7lr7nosaFcclxuICAgICAgdGhpcy5zY29wZSA9IGV2ZW50XHJcblxyXG4gICAgICAvLyDnvJPlrZjlrZfmrrXlr7nlupTnmoTlgLxcclxuICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRldGFpbC52YWx1ZVxyXG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbcGFyYW1dICE9PSBudWxsICYmIGRhdGFbcGFyYW1dICE9PSB1bmRlZmluZWQgPyBkYXRhW3BhcmFtXSA6ICcnXHJcblxyXG4gICAgICAvLyDpgY3ljobmn5DkuKrmjIflrprlrZfmrrXnmoTmiYDmnInop4TliJnvvIzkvp3mrKHpqozor4Hop4TliJnvvIzlkKbliJnnvJPlrZjplJnor6/kv6Hmga9cclxuICAgICAgZm9yIChsZXQgbWV0aG9kIGluIHJ1bGVzKSB7XHJcblxyXG4gICAgICAgICAgLy8g5Yik5pat6aqM6K+B5pa55rOV5piv5ZCm5a2Y5ZyoXHJcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkTWV0aG9kKG1ldGhvZCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgLy8g57yT5a2Y6KeE5YiZ55qE5bGe5oCn5Y+K5YC8XHJcbiAgICAgICAgICAgICAgY29uc3QgcnVsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6IHJ1bGVzW21ldGhvZF1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIOiwg+eUqOmqjOivgeaWueazlVxyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubWV0aG9kc1ttZXRob2RdKHZhbHVlLCBydWxlLnBhcmFtZXRlcnMpXHJcblxyXG4gICAgICAgICAgICAgIC8vIOiLpXJlc3VsdOi/lOWbnuWAvOS4umRlcGVuZGVuY3ktbWlzbWF0Y2jvvIzliJnor7TmmI7or6XlrZfmrrXnmoTlgLzkuLrnqbrmiJbpnZ7lv4XloavlrZfmrrVcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnZGVwZW5kZW5jeS1taXNtYXRjaCcpIHtcclxuICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUocGFyYW0sIG1ldGhvZCwgcmVzdWx0LCB2YWx1ZSlcclxuXHJcbiAgICAgICAgICAgICAgLy8g5Yik5pat5piv5ZCm6YCa6L+H6aqM6K+B77yM5ZCm5YiZ57yT5a2Y6ZSZ6K+v5L+h5oGv77yM6Lez5Ye65b6q546vXHJcbiAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtYXRUcGxBbmRBZGQocGFyYW0sIHJ1bGUsIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u5a2X5q6155qE6buY6K6k6aqM6K+B5YC8XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtIOWtl+auteWQjVxyXG4gICAqL1xyXG4gIHNldFZpZXcocGFyYW0pIHtcclxuICAgICAgdGhpcy5mb3JtW3BhcmFtXSA9IHtcclxuICAgICAgICAgICRuYW1lOiBwYXJhbSxcclxuICAgICAgICAgICR2YWxpZDogdHJ1ZSxcclxuICAgICAgICAgICRpbnZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICRlcnJvcjoge30sXHJcbiAgICAgICAgICAkc3VjY2Vzczoge30sXHJcbiAgICAgICAgICAkdmlld1ZhbHVlOiBgYCxcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u5a2X5q6155qE6aqM6K+B5YC8XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtIOWtl+auteWQjVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2Qg5a2X5q6155qE5pa55rOVXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSByZXN1bHQg5piv5ZCm6YCa6L+H6aqM6K+BXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIOWtl+auteeahOWAvFxyXG4gICAqL1xyXG4gIHNldFZhbHVlKHBhcmFtLCBtZXRob2QsIHJlc3VsdCwgdmFsdWUpIHtcclxuICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5mb3JtW3BhcmFtXVxyXG4gICAgICBwYXJhbXMuJHZhbGlkID0gcmVzdWx0XHJcbiAgICAgIHBhcmFtcy4kaW52YWxpZCA9ICFyZXN1bHRcclxuICAgICAgcGFyYW1zLiRlcnJvclttZXRob2RdID0gIXJlc3VsdFxyXG4gICAgICBwYXJhbXMuJHN1Y2Nlc3NbbWV0aG9kXSA9IHJlc3VsdFxyXG4gICAgICBwYXJhbXMuJHZpZXdWYWx1ZSA9IHZhbHVlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpqozor4HmiYDmnInlrZfmrrXnmoTop4TliJnvvIzov5Tlm57pqozor4HmmK/lkKbpgJrov4dcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQg6KGo5Y2V5pWw5o2u5a+56LGhXHJcbiAgICovXHJcbiAgY2hlY2tGb3JtKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuX19pbml0RGF0YSgpXHJcblxyXG4gICAgICBmb3IgKGxldCBwYXJhbSBpbiB0aGlzLnJ1bGVzKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFZpZXcocGFyYW0pXHJcbiAgICAgICAgICB0aGlzLmNoZWNrUGFyYW0ocGFyYW0sIHRoaXMucnVsZXNbcGFyYW1dLCBldmVudClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWQoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6L+U5Zue6aqM6K+B5piv5ZCm6YCa6L+HXHJcbiAgICovXHJcbiAgdmFsaWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6L+U5Zue6ZSZ6K+v5L+h5oGv55qE5Liq5pWwXHJcbiAgICovXHJcbiAgc2l6ZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JMaXN0Lmxlbmd0aFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6L+U5Zue5omA5pyJ6ZSZ6K+v5L+h5oGvXHJcbiAgICovXHJcbiAgdmFsaWRhdGlvbkVycm9ycygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JMaXN0XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXeFZhbGlkYXRlIl19