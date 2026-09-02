// CCC WORLDWIDE BIBLE LESSONS - 2026
// January to September
//
// Structured for the Light of Jesus Parish Choir platform.
// Standard service times used:
// Wednesday - 6PM
// Friday - 6PM
// Sunday Morning - 10AM
// Sunday Evening - 6PM
// New Moon - 10PM
//
// Special-service times are preserved where specifically provided.

const reading = (
  time,
  lesson,
  scripture,
  service = ""
) => ({
  time,
  lesson,
  scripture,
  service,
});

const makeLesson = ({
  id,
  date,
  displayDate,
  day,
  month,
  special = "",
  readings = [],
  sourceNote = "",
}) => ({
  id,
  date,
  displayDate,
  day,
  year: "2026",
  month,
  special,
  readings,
  sourceNote,

  // Compatibility with the present Bible Lesson page.
  // These fields allow the app to continue working until
  // we install the improved Bible Lesson display.
  lessonNumber: id,
  topic: displayDate,
  scripture: readings
    .map(
      (item) =>
        `${item.time ? `${item.time} - ` : ""}${
          item.lesson
        }: ${item.scripture}`
    )
    .join(" • "),
  memoryVerse: "",
  content: special
    ? `${special}. CCC Bible Lessons for ${displayDate}.`
    : `CCC Bible Lessons for ${displayDate}.`,
  questions: [],
});

const bibleLessons = [
  // =====================================================
  // JANUARY 2026
  // =====================================================

  makeLesson({
    id: "JAN-01",
    date: "2026-01-01",
    displayDate: "Thursday 1st January 2026",
    day: "Thursday",
    month: "January",
    special: "New Moon Service",
    readings: [
      reading("10AM", "1st Lesson", "Isaiah 40:1–11"),
      reading(
        "10AM",
        "2nd Lesson",
        "2 Corinthians 1:1–11"
      ),
      reading(
        "10PM",
        "1st Lesson",
        "Isaiah 43:15–21",
        "New Moon Service"
      ),
    ],
  }),

  makeLesson({
    id: "JAN-02",
    date: "2026-01-02",
    displayDate: "Friday 2nd January 2026",
    day: "Friday",
    month: "January",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "2 Corinthians 5:16–19"
      ),
    ],
  }),

  makeLesson({
    id: "JAN-04",
    date: "2026-01-04",
    displayDate: "Sunday 4th January 2026",
    day: "Sunday",
    month: "January",
    readings: [
      reading("10AM", "1st Lesson", "Genesis 1:1–10"),
      reading("10AM", "2nd Lesson", "John 1:1–12"),
      reading("6PM", "1st Lesson", "Genesis 1:26–31"),
    ],
  }),

  makeLesson({
    id: "JAN-07",
    date: "2026-01-07",
    displayDate: "Wednesday 7th January 2026",
    day: "Wednesday",
    month: "January",
    readings: [
      reading("6PM", "1st Lesson", "Luke 8:13–19"),
    ],
  }),

  makeLesson({
    id: "JAN-09",
    date: "2026-01-09",
    displayDate: "Friday 9th January 2026",
    day: "Friday",
    month: "January",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Deuteronomy 18:13–19"
      ),
    ],
  }),

  makeLesson({
    id: "JAN-11",
    date: "2026-01-11",
    displayDate: "Sunday 11th January 2026",
    day: "Sunday",
    month: "January",
    readings: [
      reading("10AM", "1st Lesson", "Exodus 4:1–10"),
      reading(
        "10AM",
        "2nd Lesson",
        "Matthew 13:18–24"
      ),
      reading(
        "6PM",
        "1st Lesson",
        "Deuteronomy 20:1–4"
      ),
    ],
  }),

  makeLesson({
    id: "JAN-14",
    date: "2026-01-14",
    displayDate: "Wednesday 14th January 2026",
    day: "Wednesday",
    month: "January",
    readings: [
      reading("6PM", "1st Lesson", "Genesis 17:1–8"),
    ],
  }),

  makeLesson({
    id: "JAN-16",
    date: "2026-01-16",
    displayDate: "Friday 16th January 2026",
    day: "Friday",
    month: "January",
    readings: [
      reading("6PM", "1st Lesson", "Matthew 7:21–27"),
    ],
  }),

  makeLesson({
    id: "JAN-18",
    date: "2026-01-18",
    displayDate: "Sunday 18th January 2026",
    day: "Sunday",
    month: "January",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "Deuteronomy 28:1–8"
      ),
      reading("10AM", "2nd Lesson", "James 1:21–24"),
      reading(
        "6PM",
        "1st Lesson",
        "Deuteronomy 28:15–20"
      ),
    ],
  }),

  makeLesson({
    id: "JAN-21",
    date: "2026-01-21",
    displayDate: "Wednesday 21st January 2026",
    day: "Wednesday",
    month: "January",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "2 Samuel 22:21–31"
      ),
    ],
  }),

  makeLesson({
    id: "JAN-23",
    date: "2026-01-23",
    displayDate: "Friday 23rd January 2026",
    day: "Friday",
    month: "January",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Proverbs 6:20–27"
      ),
    ],
  }),

  makeLesson({
    id: "JAN-25",
    date: "2026-01-25",
    displayDate: "Sunday 25th January 2026",
    day: "Sunday",
    month: "January",
    readings: [
      reading("10AM", "1st Lesson", "Joshua 1:1–10"),
      reading(
        "10AM",
        "2nd Lesson",
        "1 Corinthians 4:1–6"
      ),
      reading("6PM", "1st Lesson", "1 John 3:7–10"),
    ],
  }),

  makeLesson({
    id: "JAN-28",
    date: "2026-01-28",
    displayDate: "Wednesday 28th January 2026",
    day: "Wednesday",
    month: "January",
    readings: [
      reading("6PM", "1st Lesson", "Nehemiah 9:1–3"),
    ],
  }),

  makeLesson({
    id: "JAN-30",
    date: "2026-01-30",
    displayDate: "Friday 30th January 2026",
    day: "Friday",
    month: "January",
    readings: [
      reading("6PM", "1st Lesson", "1 John 1:19–24"),
    ],
    sourceNote:
      "The referenced online page carries this entry as Friday 31st January 2025. It has been placed on Friday 30th January 2026 to maintain the 2026 Wednesday/Friday service calendar. Scripture wording is retained from the published schedule pending confirmation from the printed worldwide booklet.",
  }),

  // =====================================================
  // FEBRUARY 2026
  // =====================================================

  makeLesson({
    id: "FEB-01",
    date: "2026-02-01",
    displayDate: "Sunday 1st February 2026",
    day: "Sunday",
    month: "February",
    readings: [
      reading("10AM", "1st Lesson", "Nehemiah 8:1–10"),
      reading("10AM", "2nd Lesson", "Romans 12:1–3"),
      reading(
        "6PM",
        "1st Lesson",
        "Colossians 3:10–17"
      ),
    ],
  }),

  makeLesson({
    id: "FEB-04",
    date: "2026-02-04",
    displayDate: "Wednesday 4th February 2026",
    day: "Wednesday",
    month: "February",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Proverbs 6:12–19"
      ),
    ],
  }),

  makeLesson({
    id: "FEB-05",
    date: "2026-02-05",
    displayDate: "Thursday 5th February 2026",
    day: "Thursday",
    month: "February",
    special: "New Moon Service",
    readings: [
      reading(
        "10PM",
        "1st Lesson",
        "Ezekiel 28:14–19",
        "New Moon Service"
      ),
    ],
  }),

  makeLesson({
    id: "FEB-06",
    date: "2026-02-06",
    displayDate: "Friday 6th February 2026",
    day: "Friday",
    month: "February",
    readings: [
      reading("6PM", "1st Lesson", "Acts 12:20–24"),
    ],
  }),

  makeLesson({
    id: "FEB-08",
    date: "2026-02-08",
    displayDate: "Sunday 8th February 2026",
    day: "Sunday",
    month: "February",
    readings: [
      reading("10AM", "1st Lesson", "Daniel 4:29–33"),
      reading("10AM", "2nd Lesson", "1 Peter 5:5–7"),
      reading(
        "6PM",
        "1st Lesson",
        "1 Timothy 6:17–21"
      ),
    ],
  }),

  makeLesson({
    id: "FEB-11",
    date: "2026-02-11",
    displayDate: "Wednesday 11th February 2026",
    day: "Wednesday",
    month: "February",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "1 Samuel 16:4–11"
      ),
    ],
  }),

  makeLesson({
    id: "FEB-13",
    date: "2026-02-13",
    displayDate: "Friday 13th February 2026",
    day: "Friday",
    month: "February",
    readings: [
      reading("6PM", "1st Lesson", "John 12:1–8"),
    ],
  }),

  makeLesson({
    id: "FEB-15",
    date: "2026-02-15",
    displayDate: "Sunday 15th February 2026",
    day: "Sunday",
    month: "February",
    readings: [
      reading("10AM", "1st Lesson", "Joshua 7:19–26"),
      reading("10AM", "2nd Lesson", "Acts 5:1–10"),
      reading(
        "6PM",
        "1st Lesson",
        "Proverbs 12:18–22"
      ),
    ],
  }),

  makeLesson({
    id: "FEB-18",
    date: "2026-02-18",
    displayDate: "Wednesday 18th February 2026",
    day: "Wednesday",
    month: "February",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Proverbs 25:18–20"
      ),
    ],
  }),

  makeLesson({
    id: "FEB-20",
    date: "2026-02-20",
    displayDate: "Friday 20th February 2026",
    day: "Friday",
    month: "February",
    readings: [
      reading("6PM", "1st Lesson", "Acts 21:26–36"),
    ],
  }),

  makeLesson({
    id: "FEB-22",
    date: "2026-02-22",
    displayDate: "Sunday 22nd February 2026",
    day: "Sunday",
    month: "February",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "Numbers 16:41–50"
      ),
      reading(
        "10AM",
        "2nd Lesson",
        "Matthew 9:32–34"
      ),
      reading(
        "6PM",
        "1st Lesson",
        "Matthew 26:14–23"
      ),
    ],
  }),

  makeLesson({
    id: "FEB-25",
    date: "2026-02-25",
    displayDate: "Wednesday 25th February 2026",
    day: "Wednesday",
    month: "February",
    readings: [
      reading("6PM", "1st Lesson", "Titus 3:8–11"),
    ],
  }),

  makeLesson({
    id: "FEB-27",
    date: "2026-02-27",
    displayDate: "Friday 27th February 2026",
    day: "Friday",
    month: "February",
    readings: [
      reading("6PM", "1st Lesson", "Judges 20:34–44"),
    ],
  }),

  // =====================================================
  // MARCH 2026
  // =====================================================

  makeLesson({
    id: "MAR-01",
    date: "2026-03-01",
    displayDate: "Sunday 1st March 2026",
    day: "Sunday",
    month: "March",
    readings: [
      reading("10AM", "1st Lesson", "Genesis 13:8–18"),
      reading(
        "10AM",
        "2nd Lesson",
        "Romans 16:10–20"
      ),
      reading(
        "6PM",
        "1st Lesson",
        "Proverbs 16:16–18"
      ),
    ],
  }),

  makeLesson({
    id: "MAR-04",
    date: "2026-03-04",
    displayDate: "Wednesday 4th March 2026",
    day: "Wednesday",
    month: "March",
    readings: [
      reading("6PM", "1st Lesson", "Luke 10:38–42"),
    ],
  }),

  makeLesson({
    id: "MAR-05",
    date: "2026-03-05",
    displayDate: "Thursday 5th March 2026",
    day: "Thursday",
    month: "March",
    special: "New Moon Service",
    readings: [
      reading(
        "10PM",
        "1st Lesson",
        "Judges 4:1–9",
        "New Moon Service"
      ),
    ],
  }),

  makeLesson({
    id: "MAR-06",
    date: "2026-03-06",
    displayDate: "Friday 6th March 2026",
    day: "Friday",
    month: "March",
    readings: [
      reading("6PM", "1st Lesson", "Mark 15:37–43"),
    ],
  }),

  makeLesson({
    id: "MAR-08",
    date: "2026-03-08",
    displayDate: "Sunday 8th March 2026",
    day: "Sunday",
    month: "March",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "Proverbs 31:1–10"
      ),
      reading("10AM", "2nd Lesson", "Acts 9:36–43"),
      reading("6PM", "1st Lesson", "Luke 1:39–48"),
    ],
  }),

  makeLesson({
    id: "MAR-11",
    date: "2026-03-11",
    displayDate: "Wednesday 11th March 2026",
    day: "Wednesday",
    month: "March",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "2 Corinthians 11:21–30"
      ),
    ],
  }),

  makeLesson({
    id: "MAR-13",
    date: "2026-03-13",
    displayDate: "Friday 13th March 2026",
    day: "Friday",
    month: "March",
    readings: [
      reading("6PM", "1st Lesson", "Jeremiah 38:1–6"),
    ],
  }),

  makeLesson({
    id: "MAR-15",
    date: "2026-03-15",
    displayDate: "Sunday 15th March 2026",
    day: "Sunday",
    month: "March",
    readings: [
      reading("10AM", "1st Lesson", "Genesis 37:16–37"),
      reading(
        "10AM",
        "2nd Lesson",
        "Matthew 10:32–40"
      ),
      reading("6PM", "1st Lesson", "Luke 14:25–33"),
    ],
  }),

  makeLesson({
    id: "MAR-18",
    date: "2026-03-18",
    displayDate: "Wednesday 18th March 2026",
    day: "Wednesday",
    month: "March",
    readings: [
      reading("6PM", "1st Lesson", "Isaiah 43:16–21"),
    ],
  }),

  makeLesson({
    id: "MAR-20",
    date: "2026-03-20",
    displayDate: "Friday 20th March 2026",
    day: "Friday",
    month: "March",
    readings: [
      reading("6PM", "1st Lesson", "Acts 26:24–32"),
    ],
  }),

  makeLesson({
    id: "MAR-22",
    date: "2026-03-22",
    displayDate: "Sunday 22nd March 2026",
    day: "Sunday",
    month: "March",
    readings: [
      reading("10AM", "1st Lesson", "Isaiah 29:11–16"),
      reading(
        "10AM",
        "2nd Lesson",
        "1 Corinthians 1:18–21"
      ),
      reading(
        "6PM",
        "1st Lesson",
        "Matthew 4:16–21"
      ),
    ],
  }),

  makeLesson({
    id: "MAR-25",
    date: "2026-03-25",
    displayDate: "Wednesday 25th March 2026",
    day: "Wednesday",
    month: "March",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Matthew 16:20–24"
      ),
    ],
  }),

  makeLesson({
    id: "MAR-27",
    date: "2026-03-27",
    displayDate: "Friday 27th March 2026",
    day: "Friday",
    month: "March",
    readings: [
      reading("6PM", "1st Lesson", "Matthew 4:22–34"),
    ],
    sourceNote:
      "This reference is retained exactly as published in the CCC schedule pending confirmation from the printed worldwide booklet.",
  }),

  makeLesson({
    id: "MAR-28",
    date: "2026-03-28",
    displayDate: "Saturday 28th March 2026",
    day: "Saturday",
    month: "March",
    readings: [
      reading("", "1st Lesson", "John 13:1–17"),
      reading("", "2nd Lesson", "Matthew 26:17–56"),
    ],
  }),

  makeLesson({
    id: "MAR-29",
    date: "2026-03-29",
    displayDate: "Sunday 29th March 2026",
    day: "Sunday",
    month: "March",
    special: "Palm Sunday",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "Zechariah 9:9–12"
      ),
      reading("10AM", "2nd Lesson", "Luke 19:28–38"),
      reading("6PM", "1st Lesson", "Titus 1:5–9"),
    ],
  }),

  makeLesson({
    id: "MAR-30",
    date: "2026-03-30",
    displayDate: "Monday 30th March 2026",
    day: "Monday",
    month: "March",
    special: "Holy Monday",
    readings: [
      reading("6PM", "1st Lesson", "Matthew 26:1–13"),
    ],
  }),

  makeLesson({
    id: "MAR-31",
    date: "2026-03-31",
    displayDate: "Tuesday 31st March 2026",
    day: "Tuesday",
    month: "March",
    special: "Holy Tuesday",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "1 Corinthians 1:10–17"
      ),
    ],
  }),

  // =====================================================
  // APRIL 2026
  // =====================================================

  makeLesson({
    id: "APR-01",
    date: "2026-04-01",
    displayDate: "Wednesday 1st April 2026",
    day: "Wednesday",
    month: "April",
    readings: [
      reading("6PM", "1st Lesson", "John 17:1–19"),
    ],
  }),

  makeLesson({
    id: "APR-02",
    date: "2026-04-02",
    displayDate: "Thursday 2nd April 2026",
    day: "Thursday",
    month: "April",
    special: "Holy Thursday",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "John 13:1–15",
        "Holy Thursday"
      ),
      reading(
        "8PM",
        "1st Lesson",
        "Matthew 26:20–35",
        "Washing of Feet"
      ),
      reading(
        "8PM",
        "2nd Lesson",
        "Matthew 26:36–56",
        "Washing of Feet"
      ),
      reading(
        "10PM",
        "1st Lesson",
        "John 13:16–27",
        "Lord's Supper"
      ),
    ],
  }),

  makeLesson({
    id: "APR-03",
    date: "2026-04-03",
    displayDate: "Friday 3rd April 2026",
    day: "Friday",
    month: "April",
    special: "Good Friday",
    readings: [
      reading(
        "9AM",
        "1st Lesson",
        "Mark 15:21–32",
        "Good Friday"
      ),
      reading(
        "12PM",
        "1st Lesson",
        "Mark 15:33–41",
        "Good Friday"
      ),
      reading(
        "3PM",
        "1st Lesson",
        "Mark 15:42–47",
        "Good Friday"
      ),
    ],
  }),

  makeLesson({
    id: "APR-04",
    date: "2026-04-04",
    displayDate: "Saturday 4th April 2026",
    day: "Saturday",
    month: "April",
    special: "Holy Saturday",
    readings: [
      reading("6PM", "1st Lesson", "Luke 23:50–56"),
      reading("10PM", "2nd Lesson", "Luke 24:1–7"),
    ],
  }),

  makeLesson({
    id: "APR-05",
    date: "2026-04-05",
    displayDate: "Sunday 5th April 2026",
    day: "Sunday",
    month: "April",
    special: "Easter Sunday",
    readings: [
      reading("10AM", "1st Lesson", "Psalms 16:5–11"),
      reading("10AM", "2nd Lesson", "Luke 24:1–10"),
      reading(
        "6PM",
        "1st Lesson",
        "Matthew 28:9–20"
      ),
    ],
  }),

  makeLesson({
    id: "APR-08",
    date: "2026-04-08",
    displayDate: "Wednesday 8th April 2026",
    day: "Wednesday",
    month: "April",
    readings: [
      reading("6PM", "1st Lesson", "Romans 3:21–24"),
    ],
  }),

  makeLesson({
    id: "APR-10",
    date: "2026-04-10",
    displayDate: "Friday 10th April 2026",
    day: "Friday",
    month: "April",
    readings: [
      reading("6PM", "1st Lesson", "Luke 24:28–35"),
    ],
  }),

  makeLesson({
    id: "APR-12",
    date: "2026-04-12",
    displayDate: "Sunday 12th April 2026",
    day: "Sunday",
    month: "April",
    readings: [
      reading("9AM", "1st Lesson", "2 Kings 4:32–37"),
      reading("9AM", "2nd Lesson", "Mark 16:12–20"),
      reading("6PM", "1st Lesson", "John 20:19–23"),
    ],
  }),

  // The source page contains a leftover:
  // "Monday 14th April 2025 - Holy Monday - John 11:47-54".
  // It is deliberately not inserted as a 2026 event because
  // Holy Monday 2026 is correctly recorded on 30 March 2026.

  makeLesson({
    id: "APR-15",
    date: "2026-04-15",
    displayDate: "Wednesday 15th April 2026",
    day: "Wednesday",
    month: "April",
    readings: [
      reading("6PM", "1st Lesson", "Mark 5:25–43"),
    ],
  }),

  makeLesson({
    id: "APR-17",
    date: "2026-04-17",
    displayDate: "Friday 17th April 2026",
    day: "Friday",
    month: "April",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "1 Samuel 17:41–51"
      ),
    ],
  }),

  makeLesson({
    id: "APR-19",
    date: "2026-04-19",
    displayDate: "Sunday 19th April 2026",
    day: "Sunday",
    month: "April",
    readings: [
      reading("10AM", "1st Lesson", "Genesis 22:1–18"),
      reading(
        "10AM",
        "2nd Lesson",
        "Hebrews 11:1–12"
      ),
      reading("6PM", "1st Lesson", "James 2:14–23"),
    ],
  }),

  makeLesson({
    id: "APR-22",
    date: "2026-04-22",
    displayDate: "Wednesday 22nd April 2026",
    day: "Wednesday",
    month: "April",
    readings: [
      reading("6PM", "1st Lesson", "John 1:21–31"),
    ],
  }),

  makeLesson({
    id: "APR-24",
    date: "2026-04-24",
    displayDate: "Friday 24th April 2026",
    day: "Friday",
    month: "April",
    readings: [
      reading("6PM", "1st Lesson", "Matthew 3:11–17"),
    ],
  }),

  makeLesson({
    id: "APR-26",
    date: "2026-04-26",
    displayDate: "Sunday 26th April 2026",
    day: "Sunday",
    month: "April",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "Ezekiel 36:23–36"
      ),
      reading("10AM", "2nd Lesson", "Acts 19:1–10"),
      reading("6PM", "1st Lesson", "Exodus 14:13–22"),
    ],
  }),

  makeLesson({
    id: "APR-29",
    date: "2026-04-29",
    displayDate: "Wednesday 29th April 2026",
    day: "Wednesday",
    month: "April",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Matthew 12:32–37"
      ),
    ],
  }),

  // =====================================================
  // MAY 2026
  // =====================================================

  makeLesson({
    id: "MAY-01",
    date: "2026-05-01",
    displayDate: "Friday 1st May 2026",
    day: "Friday",
    month: "May",
    readings: [
      reading("6PM", "1st Lesson", "Isaiah 26:14–21"),
    ],
  }),

  makeLesson({
    id: "MAY-03",
    date: "2026-05-03",
    displayDate: "Sunday 3rd May 2026",
    day: "Sunday",
    month: "May",
    readings: [
      reading("10AM", "1st Lesson", "Daniel 7:23–28"),
      reading(
        "10AM",
        "2nd Lesson",
        "Revelation 20:11–15"
      ),
      reading(
        "6PM",
        "1st Lesson",
        "2 Corinthians 5:1–10"
      ),
    ],
  }),

  makeLesson({
    id: "MAY-06",
    date: "2026-05-06",
    displayDate: "Wednesday 6th May 2026",
    day: "Wednesday",
    month: "May",
    readings: [
      reading("6PM", "1st Lesson", "Isaiah 30:20–24"),
    ],
  }),

  makeLesson({
    id: "MAY-07",
    date: "2026-05-07",
    displayDate: "Thursday 7th May 2026",
    day: "Thursday",
    month: "May",
    special: "New Moon Service",
    readings: [
      reading(
        "10PM",
        "1st Lesson",
        "Daniel 5:1–12",
        "New Moon Service"
      ),
    ],
  }),

  makeLesson({
    id: "MAY-08",
    date: "2026-05-08",
    displayDate: "Friday 8th May 2026",
    day: "Friday",
    month: "May",
    readings: [
      reading("6PM", "1st Lesson", "Luke 3:1–18"),
    ],
  }),

  makeLesson({
    id: "MAY-10",
    date: "2026-05-10",
    displayDate: "Sunday 10th May 2026",
    day: "Sunday",
    month: "May",
    readings: [
      reading("10AM", "1st Lesson", "Exodus 3:1–10"),
      reading("10AM", "2nd Lesson", "John 16:7–16"),
      reading("6PM", "1st Lesson", "Luke 1:34–38"),
    ],
  }),

  makeLesson({
    id: "MAY-13",
    date: "2026-05-13",
    displayDate: "Wednesday 13th May 2026",
    day: "Wednesday",
    month: "May",
    readings: [
      reading("6PM", "1st Lesson", "1 Kings 18:27–39"),
    ],
  }),

  makeLesson({
    id: "MAY-14",
    date: "2026-05-14",
    displayDate: "Thursday 14th May 2026",
    day: "Thursday",
    month: "May",
    special: "Ascension Day",
    readings: [
      reading(
        "",
        "1st Lesson",
        "2 Kings 2:1–13",
        "Ascension Day"
      ),
      reading(
        "",
        "2nd Lesson",
        "Acts 1:1–11",
        "Ascension Day"
      ),
    ],
  }),

  makeLesson({
    id: "MAY-15",
    date: "2026-05-15",
    displayDate: "Friday 15th May 2026",
    day: "Friday",
    month: "May",
    readings: [
      reading("6PM", "1st Lesson", "John 4:1–4"),
    ],
  }),

  makeLesson({
    id: "MAY-17",
    date: "2026-05-17",
    displayDate: "Sunday 17th May 2026",
    day: "Sunday",
    month: "May",
    readings: [
      reading("10AM", "1st Lesson", "Exodus 13:17–22"),
      reading(
        "10AM",
        "2nd Lesson",
        "Matthew 3:13–17"
      ),
      reading("6PM", "1st Lesson", "John 15:20–27"),
    ],
  }),

  makeLesson({
    id: "MAY-20",
    date: "2026-05-20",
    displayDate: "Wednesday 20th May 2026",
    day: "Wednesday",
    month: "May",
    readings: [
      reading("6PM", "1st Lesson", "John 14:12–20"),
    ],
  }),

  makeLesson({
    id: "MAY-22",
    date: "2026-05-22",
    displayDate: "Friday 22nd May 2026",
    day: "Friday",
    month: "May",
    readings: [
      reading("6PM", "1st Lesson", "Exodus 31:1–11"),
    ],
  }),

  makeLesson({
    id: "MAY-24",
    date: "2026-05-24",
    displayDate: "Sunday 24th May 2026",
    day: "Sunday",
    month: "May",
    special: "Pentecost Day",
    readings: [
      reading("10AM", "1st Lesson", "Exodus 19:1–20"),
      reading("10AM", "2nd Lesson", "Acts 2:1–21"),
      reading("6PM", "1st Lesson", "Acts 14:1–11"),
    ],
  }),

  makeLesson({
    id: "MAY-27",
    date: "2026-05-27",
    displayDate: "Wednesday 27th May 2026",
    day: "Wednesday",
    month: "May",
    readings: [
      reading("6PM", "1st Lesson", "Psalms 51:4–13"),
    ],
  }),

  makeLesson({
    id: "MAY-29",
    date: "2026-05-29",
    displayDate: "Friday 29th May 2026",
    day: "Friday",
    month: "May",
    readings: [
      reading("6PM", "1st Lesson", "John 15:18–27"),
    ],
  }),

  makeLesson({
    id: "MAY-31",
    date: "2026-05-31",
    displayDate: "Sunday 31st May 2026",
    day: "Sunday",
    month: "May",
    readings: [
      reading("10AM", "1st Lesson", "Joel 2:23–32"),
      reading("10AM", "2nd Lesson", "Luke 4:12–21"),
      reading("6PM", "1st Lesson", "Acts 21:10–14"),
    ],
  }),

  // =====================================================
  // JUNE 2026
  // =====================================================

  makeLesson({
    id: "JUN-03",
    date: "2026-06-03",
    displayDate: "Wednesday 3rd June 2026",
    day: "Wednesday",
    month: "June",
    readings: [
      reading("6PM", "1st Lesson", "Luke 2:41–52"),
    ],
  }),

  makeLesson({
    id: "JUN-04",
    date: "2026-06-04",
    displayDate: "Thursday 4th June 2026",
    day: "Thursday",
    month: "June",
    special: "New Moon Service",
    readings: [
      reading(
        "10PM",
        "1st Lesson",
        "Genesis 22:1–8",
        "New Moon Service"
      ),
    ],
  }),

  makeLesson({
    id: "JUN-05",
    date: "2026-06-05",
    displayDate: "Friday 5th June 2026",
    day: "Friday",
    month: "June",
    readings: [
      reading("6PM", "1st Lesson", "1 Samuel 3:1–10"),
    ],
  }),

  makeLesson({
    id: "JUN-07",
    date: "2026-06-07",
    displayDate: "Sunday 7th June 2026",
    day: "Sunday",
    month: "June",
    special: "Juvenile Harvest",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "Proverbs 4:20–27"
      ),
      reading("10AM", "2nd Lesson", "Luke 18:15–17"),
      reading("6PM", "1st Lesson", "Exodus 39:23–28"),
    ],
  }),

  makeLesson({
    id: "JUN-10",
    date: "2026-06-10",
    displayDate: "Wednesday 10th June 2026",
    day: "Wednesday",
    month: "June",
    readings: [
      reading("6PM", "1st Lesson", "Exodus 3:7–15"),
    ],
  }),

  makeLesson({
    id: "JUN-12",
    date: "2026-06-12",
    displayDate: "Friday 12th June 2026",
    day: "Friday",
    month: "June",
    readings: [
      reading("6PM", "1st Lesson", "Luke 11:14–28"),
    ],
  }),

  makeLesson({
    id: "JUN-14",
    date: "2026-06-14",
    displayDate: "Sunday 14th June 2026",
    day: "Sunday",
    month: "June",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "1 Samuel 3:8–18"
      ),
      reading(
        "10AM",
        "2nd Lesson",
        "2 Timothy 1:1–14"
      ),
      reading("6PM", "1st Lesson", "Leviticus 10:1–7"),
    ],
  }),

  makeLesson({
    id: "JUN-17",
    date: "2026-06-17",
    displayDate: "Wednesday 17th June 2026",
    day: "Wednesday",
    month: "June",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Proverbs 29:18–22"
      ),
    ],
  }),

  makeLesson({
    id: "JUN-19",
    date: "2026-06-19",
    displayDate: "Friday 19th June 2026",
    day: "Friday",
    month: "June",
    readings: [
      reading("6PM", "1st Lesson", "Genesis 25:1–5"),
    ],
  }),

  makeLesson({
    id: "JUN-21",
    date: "2026-06-21",
    displayDate: "Sunday 21st June 2026",
    day: "Sunday",
    month: "June",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "Deuteronomy 5:11–16"
      ),
      reading(
        "10AM",
        "2nd Lesson",
        "Matthew 15:1–9"
      ),
      reading("6PM", "1st Lesson", "1 John 2:12–15"),
    ],
  }),

  makeLesson({
    id: "JUN-24",
    date: "2026-06-24",
    displayDate: "Wednesday 24th June 2026",
    day: "Wednesday",
    month: "June",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Matthew 19:1–12"
      ),
    ],
  }),

  makeLesson({
    id: "JUN-26",
    date: "2026-06-26",
    displayDate: "Friday 26th June 2026",
    day: "Friday",
    month: "June",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "1 Samuel 16:1–16"
      ),
    ],
  }),

  makeLesson({
    id: "JUN-28",
    date: "2026-06-28",
    displayDate: "Sunday 28th June 2026",
    day: "Sunday",
    month: "June",
    readings: [
      reading("10AM", "1st Lesson", "2 Kings 16:1–8"),
      reading("10AM", "2nd Lesson", "Ephesians 6:1–8"),
      reading("6PM", "1st Lesson", "2 Kings 17:13–23"),
    ],
  }),

  // =====================================================
  // JULY 2026
  // =====================================================

  makeLesson({
    id: "JUL-01",
    date: "2026-07-01",
    displayDate: "Wednesday 1st July 2026",
    day: "Wednesday",
    month: "July",
    readings: [
      reading("6PM", "1st Lesson", "Genesis 3:1–8"),
    ],
  }),

  makeLesson({
    id: "JUL-02",
    date: "2026-07-02",
    displayDate: "Thursday 2nd July 2026",
    day: "Thursday",
    month: "July",
    special: "New Moon Service",
    readings: [
      reading(
        "10PM",
        "1st Lesson",
        "Genesis 2:18–25",
        "New Moon Service"
      ),
    ],
    sourceNote:
      "The source webpage places this July reading under the incorrect heading Thursday 4th June 2026. It has been normalized to the first Thursday of July 2026.",
  }),

  makeLesson({
    id: "JUL-03",
    date: "2026-07-03",
    displayDate: "Friday 3rd July 2026",
    day: "Friday",
    month: "July",
    readings: [
      reading("6PM", "1st Lesson", "Luke 1:26–38"),
    ],
  }),

  makeLesson({
    id: "JUL-05",
    date: "2026-07-05",
    displayDate: "Sunday 5th July 2026",
    day: "Sunday",
    month: "July",
    readings: [
      reading("10AM", "1st Lesson", "Genesis 3:1–16"),
      reading("10AM", "2nd Lesson", "Luke 1:39–55"),
      reading("6PM", "1st Lesson", "Luke 2:1–8"),
    ],
  }),

  makeLesson({
    id: "JUL-08",
    date: "2026-07-08",
    displayDate: "Wednesday 8th July 2026",
    day: "Wednesday",
    month: "July",
    readings: [
      reading("6PM", "1st Lesson", "Luke 7:36–50"),
    ],
  }),

  makeLesson({
    id: "JUL-10",
    date: "2026-07-10",
    displayDate: "Friday 10th July 2026",
    day: "Friday",
    month: "July",
    readings: [
      reading("6PM", "1st Lesson", "John 8:1–11"),
    ],
  }),

  makeLesson({
    id: "JUL-12",
    date: "2026-07-12",
    displayDate: "Sunday 12th July 2026",
    day: "Sunday",
    month: "July",
    readings: [
      reading("10AM", "1st Lesson", "Joshua 2:1–21"),
      reading("10AM", "2nd Lesson", "John 4:19–39"),
      reading("6PM", "1st Lesson", "Genesis 38:24–30"),
    ],
  }),

  makeLesson({
    id: "JUL-15",
    date: "2026-07-15",
    displayDate: "Wednesday 15th July 2026",
    day: "Wednesday",
    month: "July",
    readings: [
      reading("6PM", "1st Lesson", "1 Kings 21:1–16"),
    ],
  }),

  makeLesson({
    id: "JUL-17",
    date: "2026-07-17",
    displayDate: "Friday 17th July 2026",
    day: "Friday",
    month: "July",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Matthew 27:15–26"
      ),
    ],
  }),

  makeLesson({
    id: "JUL-19",
    date: "2026-07-19",
    displayDate: "Sunday 19th July 2026",
    day: "Sunday",
    month: "July",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "2 Samuel 6:19–23"
      ),
      reading("10AM", "2nd Lesson", "Mark 6:14–29"),
      reading("6PM", "1st Lesson", "Esther 7:1–10"),
    ],
  }),

  makeLesson({
    id: "JUL-22",
    date: "2026-07-22",
    displayDate: "Wednesday 22nd July 2026",
    day: "Wednesday",
    month: "July",
    readings: [
      reading("6PM", "1st Lesson", "1 Samuel 2:1–10"),
    ],
  }),

  makeLesson({
    id: "JUL-24",
    date: "2026-07-24",
    displayDate: "Friday 24th July 2026",
    day: "Friday",
    month: "July",
    readings: [
      reading("6PM", "1st Lesson", "Luke 1:46–56"),
    ],
  }),

  makeLesson({
    id: "JUL-26",
    date: "2026-07-26",
    displayDate: "Sunday 26th July 2026",
    day: "Sunday",
    month: "July",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "1 Samuel 1:1–20"
      ),
      reading("10AM", "2nd Lesson", "Luke 2:25–39"),
      reading("6PM", "1st Lesson", "Exodus 15:11–21"),
    ],
  }),

  makeLesson({
    id: "JUL-29",
    date: "2026-07-29",
    displayDate: "Wednesday 29th July 2026",
    day: "Wednesday",
    month: "July",
    readings: [
      reading("6PM", "1st Lesson", "Judges 4:1–9"),
    ],
  }),

  makeLesson({
    id: "JUL-31",
    date: "2026-07-31",
    displayDate: "Friday 31st July 2026",
    day: "Friday",
    month: "July",
    readings: [
      reading("6PM", "1st Lesson", "Esther 2:5–17"),
    ],
  }),

  // =====================================================
  // AUGUST 2026
  // =====================================================

  makeLesson({
    id: "AUG-02",
    date: "2026-08-02",
    displayDate: "Sunday 2nd August 2026",
    day: "Sunday",
    month: "August",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "1 Samuel 25:21–40"
      ),
      reading("10AM", "2nd Lesson", "Acts 5:1–10"),
      reading("6PM", "1st Lesson", "Acts 9:36–43"),
    ],
  }),

  makeLesson({
    id: "AUG-05",
    date: "2026-08-05",
    displayDate: "Wednesday 5th August 2026",
    day: "Wednesday",
    month: "August",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Nehemiah 10:34–39"
      ),
    ],
  }),

  makeLesson({
    id: "AUG-06",
    date: "2026-08-06",
    displayDate: "Thursday 6th August 2026",
    day: "Thursday",
    month: "August",
    special: "New Moon Service",
    readings: [
      reading(
        "10PM",
        "1st Lesson",
        "Genesis 14:10–20",
        "New Moon Service"
      ),
    ],
  }),

  makeLesson({
    id: "AUG-07",
    date: "2026-08-07",
    displayDate: "Friday 7th August 2026",
    day: "Friday",
    month: "August",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Leviticus 27:28–34"
      ),
    ],
  }),

  makeLesson({
    id: "AUG-09",
    date: "2026-08-09",
    displayDate: "Sunday 9th August 2026",
    day: "Sunday",
    month: "August",
    readings: [
      reading("10AM", "1st Lesson", "Malachi 3:7–12"),
      reading(
        "10AM",
        "2nd Lesson",
        "Hebrews 7:4–10"
      ),
      reading("6PM", "1st Lesson", "Luke 18:10–14"),
    ],
  }),

  makeLesson({
    id: "AUG-12",
    date: "2026-08-12",
    displayDate: "Wednesday 12th August 2026",
    day: "Wednesday",
    month: "August",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "2 Chronicles 31:1–12"
      ),
    ],
  }),

  makeLesson({
    id: "AUG-14",
    date: "2026-08-14",
    displayDate: "Friday 14th August 2026",
    day: "Friday",
    month: "August",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Deuteronomy 12:4–12"
      ),
    ],
  }),

  makeLesson({
    id: "AUG-16",
    date: "2026-08-16",
    displayDate: "Sunday 16th August 2026",
    day: "Sunday",
    month: "August",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "Deuteronomy 14:22–29"
      ),
      reading(
        "10AM",
        "2nd Lesson",
        "Galatians 6:3–10"
      ),
      reading(
        "6PM",
        "1st Lesson",
        "Deuteronomy 26:12–19"
      ),
    ],
  }),

  makeLesson({
    id: "AUG-19",
    date: "2026-08-19",
    displayDate: "Wednesday 19th August 2026",
    day: "Wednesday",
    month: "August",
    readings: [
      reading("6PM", "1st Lesson", "1 Kings 17:8–16"),
    ],
  }),

  makeLesson({
    id: "AUG-21",
    date: "2026-08-21",
    displayDate: "Friday 21st August 2026",
    day: "Friday",
    month: "August",
    readings: [
      reading("6PM", "1st Lesson", "2 Kings 4:8–17"),
    ],
  }),

  makeLesson({
    id: "AUG-23",
    date: "2026-08-23",
    displayDate: "Sunday 23rd August 2026",
    day: "Sunday",
    month: "August",
    readings: [
      reading("10AM", "1st Lesson", "Genesis 18:1–14"),
      reading("10AM", "2nd Lesson", "Hebrews 13:1–8"),
      reading("6PM", "1st Lesson", "Luke 8:30–38"),
    ],
  }),

  makeLesson({
    id: "AUG-26",
    date: "2026-08-26",
    displayDate: "Wednesday 26th August 2026",
    day: "Wednesday",
    month: "August",
    readings: [
      reading("6PM", "1st Lesson", "Luke 10:25–37"),
    ],
  }),

  makeLesson({
    id: "AUG-28",
    date: "2026-08-28",
    displayDate: "Friday 28th August 2026",
    day: "Friday",
    month: "August",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "1 Chronicles 21:17–27"
      ),
    ],
  }),

  makeLesson({
    id: "AUG-30",
    date: "2026-08-30",
    displayDate: "Sunday 30th August 2026",
    day: "Sunday",
    month: "August",
    readings: [
      reading("10AM", "1st Lesson", "John 17:1–16"),
      reading("10AM", "2nd Lesson", "Luke 21:1–6"),
      reading("6PM", "1st Lesson", "Exodus 35:4–9"),
    ],
    sourceNote:
      "John 17:1–16 is confirmed by an additional CCC 2026 lesson source. The Elephant & Castle webpage displays '1 John 17:1–16', which is an apparent transcription error.",
  }),

  // =====================================================
  // SEPTEMBER 2026
  // =====================================================

  makeLesson({
    id: "SEP-02",
    date: "2026-09-02",
    displayDate: "Wednesday 2nd September 2026",
    day: "Wednesday",
    month: "September",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Matthew 16:13–18"
      ),
    ],
  }),

  makeLesson({
    id: "SEP-03",
    date: "2026-09-03",
    displayDate: "Thursday 3rd September 2026",
    day: "Thursday",
    month: "September",
    special: "New Moon Service",
    readings: [
      reading(
        "10PM",
        "1st Lesson",
        "Acts 11:19–26",
        "New Moon Service"
      ),
    ],
  }),

  makeLesson({
    id: "SEP-04",
    date: "2026-09-04",
    displayDate: "Friday 4th September 2026",
    day: "Friday",
    month: "September",
    readings: [
      reading("6PM", "1st Lesson", "Acts 15:5–20"),
    ],
  }),

  makeLesson({
    id: "SEP-06",
    date: "2026-09-06",
    displayDate: "Sunday 6th September 2026",
    day: "Sunday",
    month: "September",
    readings: [
      reading("10AM", "1st Lesson", "Genesis 46:1–7"),
      reading("10AM", "2nd Lesson", "Acts 2:29–41"),
      reading("6PM", "1st Lesson", "Acts 2:38–47"),
    ],
  }),

  makeLesson({
    id: "SEP-09",
    date: "2026-09-09",
    displayDate: "Wednesday 9th September 2026",
    day: "Wednesday",
    month: "September",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Leviticus 26:1–13"
      ),
    ],
  }),

  makeLesson({
    id: "SEP-10",
    date: "2026-09-10",
    displayDate: "Thursday 10th September 2026",
    day: "Thursday",
    month: "September",
    readings: [
      reading(
        "",
        "1st Lesson",
        "Revelation 14:6–13"
      ),
    ],
  }),

  makeLesson({
    id: "SEP-11",
    date: "2026-09-11",
    displayDate: "Friday 11th September 2026",
    day: "Friday",
    month: "September",
    readings: [
      reading("6PM", "1st Lesson", "Acts 13:1–12"),
    ],
  }),

  makeLesson({
    id: "SEP-13",
    date: "2026-09-13",
    displayDate: "Sunday 13th September 2026",
    day: "Sunday",
    month: "September",
    readings: [
      reading("10AM", "1st Lesson", "Exodus 14:19–31"),
      reading(
        "10AM",
        "2nd Lesson",
        "1 Corinthians 10:1–11"
      ),
      reading(
        "6PM",
        "1st Lesson",
        "1 Corinthians 10:17–23"
      ),
    ],
  }),

  makeLesson({
    id: "SEP-16",
    date: "2026-09-16",
    displayDate: "Wednesday 16th September 2026",
    day: "Wednesday",
    month: "September",
    readings: [
      reading("6PM", "1st Lesson", "Acts 9:1–8"),
    ],
  }),

  makeLesson({
    id: "SEP-18",
    date: "2026-09-18",
    displayDate: "Friday 18th September 2026",
    day: "Friday",
    month: "September",
    readings: [
      reading("6PM", "1st Lesson", "Ephesians 4:1–13"),
    ],
  }),

  makeLesson({
    id: "SEP-20",
    date: "2026-09-20",
    displayDate: "Sunday 20th September 2026",
    day: "Sunday",
    month: "September",
    readings: [
      reading(
        "10AM",
        "1st Lesson",
        "Numbers 11:10–26"
      ),
      reading(
        "10AM",
        "2nd Lesson",
        "1 Corinthians 12:1–14"
      ),
      reading(
        "6PM",
        "1st Lesson",
        "Numbers 11:25–30"
      ),
    ],
  }),

  makeLesson({
    id: "SEP-23",
    date: "2026-09-23",
    displayDate: "Wednesday 23rd September 2026",
    day: "Wednesday",
    month: "September",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Matthew 18:12–20"
      ),
    ],
  }),

  makeLesson({
    id: "SEP-25",
    date: "2026-09-25",
    displayDate: "Friday 25th September 2026",
    day: "Friday",
    month: "September",
    readings: [
      reading(
        "6PM",
        "1st Lesson",
        "Matthew 16:13–21"
      ),
    ],
  }),

  makeLesson({
    id: "SEP-27",
    date: "2026-09-27",
    displayDate: "Sunday 27th September 2026",
    day: "Sunday",
    month: "September",
    readings: [
      reading("10AM", "1st Lesson", "Exodus 19:1–11"),
      reading(
        "10AM",
        "2nd Lesson",
        "Revelation 1:1–11"
      ),
      reading("6PM", "1st Lesson", "Exodus 3:13–18"),
    ],
  }),

  makeLesson({
    id: "SEP-30",
    date: "2026-09-30",
    displayDate: "Wednesday 30th September 2026",
    day: "Wednesday",
    month: "September",
    readings: [
      reading("6PM", "1st Lesson", "Job 1:1–12"),
    ],
  }),
];

export default bibleLessons;