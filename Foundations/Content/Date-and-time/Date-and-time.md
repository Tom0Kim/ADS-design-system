Date and time
Communicate date and time clearly and ensure consistency with the localization library to make sure time and date align wherever our customers are.
Date and time formatting is tied to a person’s locale and account settings. Because of this, what a customer sees could be different from the guidelines on this page.

Date and time for internationalization
Each programming language has an i18n (internationalization) library that automatically localizes time and date strings based on a user’s locale settings/preferences. Time and date strings should never be localized manually by a designer, engineer, or translator.

The Product Internationalization team is responsible for creating app UI content in non-English languages by localizing externalized code strings provided by our Product Engineers.

Engineers must:

Ensure date and time references/strings are not hardcoded
Reference the programming i18n library API, which will automatically format time and date strings as per a customer’s detected or selected locale.

Date formats
Atlassian uses US date formatting (for example: January 12, 2028).

When you’re handing designs over to engineers, you need to specify which date format length is needed. The i18n library API will use this information to format the date accordingly. Date and time formats should not be hardcoded.

There are 4 date format lengths: full, long, medium, and short.


Full date
The full date format is weekday, month, day, year.

Do
Sunday, August 14, 2028


Long date
A long date format is month, day, year

Do
November 8, 2008


Medium date
The medium date format is abbreviated month, day, year. Only use this format when space is limited.

Do
Sep 26, 1952


Abbreviating months and days
If you need to abbreviate months or days, use the first 3 letters of the month or day.

Month abbreviation	Month in full		Day abbreviation	Day in full
Jan	January		Mon	Monday
Feb	February		Tue	Tuesday
Mar	March		Wed	Wednesday
Apr	April		Thu	Thursday
May	May		Fri	Friday
Jun	June		Sat	Saturday
Jul	July		Sun	Sunday
Aug	August
Sep	September
Oct	October
Nov	November
Dec	December

Short date
Short format dates are written in digits.

In most cases, avoid short format dates as different countries use the date in a different order, which can cause confusion and effect readability and usability. In the US, 10-8-2026 is October 8, 2026, but in Australia and the UK, it’s August 10, 2026.

However, short format dates might be suitable for situations like data storage, sorting or filtering, or data export/import. If using, use the ISO 8601 international standard for numerical date format, which is YYYY-MM-DD.


Ordinal numbers
Don’t use ordinal numbers (1st, 2nd, 3rd, and so on) in dates.


Date ranges
If you have a date range, use ‘to’ and not hyphens. For example: ‘2020 to 2024’. Hyphens are read out by screen readers as ‘hyphen’, which can lead to confusion.

An exception is financial years, which use a hyphen without spaces on either side. For example: FY2008-09

Use ‘and’ if a range is preceded by ‘between’. For example: He was in Paris between 2025 and 2026.

Do
2014 to 2015

Don’t
2014-15


Time formats
Show time in digits for precision and to give a clearer expression of time.

Specify to engineers which time format length is needed. The i18n library API will then format the time according to a customer’s account settings. Make sure time is not hardcoded.

Use a colon (:) to separate the hours and minutes (though this might change depending on a user’s locale and account settings).

Like dates, there are 4 time format lengths: full, long, medium, and short.


Full time
The full time format is hour, minutes, seconds, and time zone spelt out.

Do
3:30:10 p.m. Pacific Standard Time


Long time
The long time format is hour, minutes, seconds, and the time zone initials.

Do
11:18:30 p.m. PST


Medium time
The medium time format is hour, minutes, and seconds.

Do
8:50:28 a.m.


Short time
The short time format is hour and minutes.

Do
2:40 p.m.


24-hour time
The 24-hour format is useful for more serious communications, for example in the case of outages and security comms. The use of the 24-hour format is mostly system-driven by the i18n library API.

This format numbers hours from 00:00 hours (midnight) to 23:59 and uses 4 digits: the first 2 digits are the hours and the next 2 digits are the minutes. Use a colon (:) to separate the hours and minutes, though this might change depending on someone's account settings.


Writing time

Duration and timestamps
When writing timestamps, labels on graphs, or durations, avoid using zeros before the hour. For example: 5:29. not 05:29. Use a colon between the hours and minutes with no spaces on either side.


Using a.m. and p.m.
Format time using ‘a.m.’ and ‘p.m.’ when creating content like blogs, manuals, and instructions.

Lowercase ‘a.m.’ and ‘p.m.’
Use periods between the letters
Add a space between the time and the ‘a.m.’ or ‘p.m.’. For example: 6:30 a.m. (not 6:30a.m.)

Time range
If you have a time range that’s entirely in the morning or evening, use 'a.m.' or 'p.m.' only once. For example: 6:30 to 10 p.m.
If the time range goes from the morning into the evening (or vice versa), use both. For example: 10 a.m. to 2 p.m.

Noon, midday, and midnight
Where suitable, use ‘noon’, ‘midday’ or ‘midnight’ instead of ‘12 am’ or ‘12 pm’ as it makes it easier for people to differentiate between these times.


Avoid using ‘fortnightly ‘or ‘bi’ for months and years
Avoid using ‘fortnightly’ and the prefix ‘bi’ to mean either 2 or twice, as these terms can be confusing.

Instead of:

Fortnightly: write ‘every 2 weeks’
Bimonthly: write ‘twice a month’ or ‘every 2 months’
Biannual: write ‘twice a year’ or ‘every 2 years’.
Do
Your sprint will repeat every 2 weeks.

Don’t
Your sprint will repeat fortnightly.


Date and time formats
There are also full, long, medium, and short format lengths when combining date and time.


Full date and time
Do
Wednesday, June 12, 2024 at 6:25:59 p.m. Eastern Standard Time


Long date and time
Do
April 25, 2027 at 9:05:32 p.m. PST


Medium date and time
Do
Sep 5, 1999, 1:25:59 a.m.


Short date and time
Do
2028-10-22, 6:25 p.m.


Relative date and time
In some cases, like when the exact date is less important, the easiest way to describe something that happened very recently is using the ‘ago’ format.

For future and past events, use approximate time by rounding down to the largest or most recent date or time.

You should always provide a way for people to see the actual timestamp, usually via a tooltip.


Past
Description	Display	Display when limited space
Within the last few seconds	just now	now
Within the last minute	a minute ago	1 m
Within 59 minutes	x minutes ago	X m
60 minutes ago	1 hour ago	1 h
x hours ago	x hours ago	X h
1 day ago	yesterday	1 d
1 day ago (with time)	yesterday at 5:05 pm	n/a
2 days ago < 7 days	x days ago	Use the truncated date (Aug 8)
7 days ago	1 week ago	Use the truncated date (Aug 8)
> 7 days ago	Date stamp: "August 8, 2018"	Use the truncated date (Aug 8)

Future
Description	Display	Display when limited space
Within the next few seconds	shortly	now
In the next minute	In 1 minute	in 1 m
In the next 60 minutes	In x minutes	in X m
In 60 minutes	In 1 hour	in 1 hr
In x hours	In x hours	in X hr
In 1 day (by date, not hours)	tomorrow	Use the truncated date (Aug 8)
In 2 to 7 days	In x days
In 7 days	In 1 week
In > 7 days	Date stamp: "August 8, 2018"
> 7 days ago	Date stamp: "August 8, 2018"

Style and punctuation
Style and punctuation for dates and time can change depending on locale and is determined by the i18n library API.


Capitalization
Months and days in English are proper nouns and start with a capital letter.
Specific days or periods in history are all proper nouns, so should be capitalized. For example: New Year’s Day, Renaissance, Cold War.
Use capital letters for all institutional holidays, religious days, and public events. For example: Ramadan, Yom Kippur, Good Friday, Martin Luther King Jr. Day.

Apostrophes
Avoid using apostrophes in UI copy and in developer and support documentation.
In more casual writing, you can use an apostrophe to stand in for the missing numerals in the year, such as 'the '70s’.

Resources
Int.DateTimeFormat constructor - a JavaScript library that devs can use and where designers can check formatting of date and time.
Date formats
Time formats
