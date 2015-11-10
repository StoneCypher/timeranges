'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var one_ms = exports.one_ms = 1;
var one_msec = exports.one_msec = one_ms;
var one_millisecond = exports.one_millisecond = one_ms;
var one_sec = exports.one_sec = one_ms * 1000;
var one_second = exports.one_second = one_sec;
var one_minute = exports.one_minute = one_second * 60;
var one_hour = exports.one_hour = one_minute * 60;
var one_day = exports.one_day = one_hour * 24;
var one_week = exports.one_week = one_day * 7;
var one_month_28 = exports.one_month_28 = one_day * 28;
var one_month_30 = exports.one_month_30 = one_day * 30;
var one_month_31 = exports.one_month_31 = one_day * 31;
var one_year = exports.one_year = one_day * 365;

var secondly = exports.secondly = one_second;
var minutely = exports.minutely = one_minute;
var hourly = exports.hourly = one_hour;
var daily = exports.daily = one_day;
var weekly = exports.weekly = one_week;
var monthly_28 = exports.monthly_28 = one_month_28;
var monthly_30 = exports.monthly_30 = one_month_30;
var monthly_31 = exports.monthly_31 = one_month_31;
var yearly = exports.yearly = one_year;

var one_workday = exports.one_workday = one_hour * 8;
var workdaily = exports.workdaily = one_workday;

var rates_y_to_ms = exports.rates_y_to_ms = [{ rate: yearly, short_label: 'yr' }, { rate: monthly_30, short_label: 'mo' }, { rate: weekly, short_label: 'wk' }, { rate: daily, short_label: 'd' }, { rate: hourly, short_label: 'h' }, { rate: minutely, short_label: 'm' }, { rate: one_sec, short_label: 's' }, { rate: one_ms, short_label: 'ms' }];