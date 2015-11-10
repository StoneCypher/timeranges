
'use strict';

export const one_ms          = 1;
export const one_msec        = one_ms;
export const one_millisecond = one_ms;
export const one_sec         = one_ms     * 1000;
export const one_second      = one_sec;
export const one_minute      = one_second * 60;
export const one_hour        = one_minute * 60;
export const one_day         = one_hour   * 24;
export const one_week        = one_day    * 7;
export const one_month_28    = one_day    * 28;
export const one_month_30    = one_day    * 30;
export const one_month_31    = one_day    * 31;
export const one_year        = one_day    * 365;

export const secondly        = one_second;
export const minutely        = one_minute;
export const hourly          = one_hour;
export const daily           = one_day;
export const weekly          = one_week;
export const monthly_28      = one_month_28;
export const monthly_30      = one_month_30;
export const monthly_31      = one_month_31;
export const yearly          = one_year;

export const one_workday     = one_hour * 8;
export const workdaily       = one_workday;

export const rates_y_to_ms   = [
  { rate: yearly,     short_label: 'yr' },
  { rate: monthly_30, short_label: 'mo' },
  { rate: weekly,     short_label: 'wk' },
  { rate: daily,      short_label: 'd'  },
  { rate: hourly,     short_label: 'h'  },
  { rate: minutely,   short_label: 'm'  },
  { rate: one_sec,    short_label: 's'  },
  { rate: one_ms,     short_label: 'ms' }
];
