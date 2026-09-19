import { useState } from "react";
import parishHero from "./assets/Parish_Hero_Banner.png";
import obanimiLogo from "./assets/ObanimiStudio_App_Brand_Logo.png";
import hymns from "./data/hymns";
import bibleLessons from "./data/biblelessons";
import choirUpdates from "./data/choirUpdates";
import events from "./data/events";
import programmes from "./data/programmes";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [siteTheme, setSiteTheme] = useState("dark");

  // =========================
  // HYMNS
  // =========================
  const [hymnSearch, setHymnSearch] = useState("");
  const [hymnCategory, setHymnCategory] = useState("All");
  const [selectedHymn, setSelectedHymn] = useState(null);
  const [hymnFontSize, setHymnFontSize] = useState(18);

  // =========================
  // BIBLE LESSONS
  // =========================
  const [lessonSearch, setLessonSearch] = useState("");
  const [lessonMonth, setLessonMonth] = useState("All");
  const [selectedLesson, setSelectedLesson] = useState(null);

  const meetingLink =
    "https://meet.jit.si/LightOfJesusParishChoir";

  const whatsappLink =
    "https://chat.whatsapp.com/EV7GLtRWqyLHFJuypMmiFQ?mode=gi_t";

  const mensWhatsappLink =
    "https://chat.whatsapp.com/IU5d5Qgm791LRyKDwvNU1a?mode=gi_t";

  const mensMeetingLink =
    "https://meet.jit.si/LightOfJesusParishMensRoom";

  const womensMeetingLink =
    "https://meet.jit.si/LightOfJesusParishWomensRoom";

  const mediaMeetingLink =
    "https://meet.jit.si/LightOfJesusParishMediaRoom";

  const sundaySchoolMeetingLink =
    "https://meet.jit.si/LightOfJesusParishSundaySchoolRoom";

  const colours = {
    purple: "#68449a",
    deepPurple: "#49306f",
    darkPurple: "#2e1d48",
    lavender: "#f5f1fa",
    gold: "#e6b82e",
    softGold: "#fff8df",
    text: "#282330",
    muted: "#716979",
    border: "#e6deed",
    white: "#ffffff",
  };

  // =========================
  // NAVIGATION
  // =========================
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);

    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  // =========================
  // MEETING
  // =========================
  const copyMeetingLink = async () => {
    try {
      await navigator.clipboard.writeText(meetingLink);
      alert("Meeting link copied.");
    } catch {
      alert("Unable to copy the meeting link.");
    }
  };

  const copyMensMeetingLink = async () => {
    try {
      await navigator.clipboard.writeText(mensMeetingLink);
      alert("Men's meeting link copied.");
    } catch {
      alert("Unable to copy the men's meeting link.");
    }
  };

  const copyDepartmentMeetingLink = async (link, department) => {
    try {
      await navigator.clipboard.writeText(link);
      alert(`${department} meeting link copied.`);
    } catch {
      alert(`Unable to copy the ${department.toLowerCase()} meeting link.`);
    }
  };

  // =========================
  // HYMN LIBRARY
  // =========================
  const hymnCategories = [
    "All",
    ...new Set(hymns.map((hymn) => hymn.category)),
  ];

  const filteredHymns = hymns.filter((hymn) => {
    const search = hymnSearch.trim().toLowerCase();

    const matchesSearch =
      String(hymn.number).toLowerCase().includes(search) ||
      String(hymn.title).toLowerCase().includes(search);

    const matchesCategory =
      hymnCategory === "All" ||
      hymn.category === hymnCategory;

    return matchesSearch && matchesCategory;
  });

  const openPreviousHymn = () => {
    if (!selectedHymn) return;

    const currentIndex = hymns.findIndex(
      (hymn) => hymn.number === selectedHymn.number
    );

    if (currentIndex > 0) {
      setSelectedHymn(hymns[currentIndex - 1]);
    }
  };

  const openNextHymn = () => {
    if (!selectedHymn) return;

    const currentIndex = hymns.findIndex(
      (hymn) => hymn.number === selectedHymn.number
    );

    if (
      currentIndex >= 0 &&
      currentIndex < hymns.length - 1
    ) {
      setSelectedHymn(hymns[currentIndex + 1]);
    }
  };

  const getBilingualLyrics = (lyrics = "") => {
    const englishMarker = "English Version";
    const yorubaMarker = "Yoruba Version";

    if (
      lyrics.includes(englishMarker) &&
      lyrics.includes(yorubaMarker)
    ) {
      const afterEnglish =
        lyrics.split(englishMarker)[1];

      const parts =
        afterEnglish.split(yorubaMarker);

      return {
        english: parts[0]?.trim() || "",
        yoruba: parts[1]?.trim() || "",
      };
    }

    return {
      english: lyrics,
      yoruba: "",
    };
  };

  // =========================
  // CCC BIBLE LESSONS
  // =========================
  const lessonMonths = [
    "All",
    ...new Set(
      bibleLessons.map((lesson) => lesson.month)
    ),
  ];

  const filteredLessons = bibleLessons
    .filter((lesson) => {
      const search =
        lessonSearch.trim().toLowerCase();

      const readingsText = (
        lesson.readings || []
      )
        .map((item) =>
          [
            item.time,
            item.service,
            item.lesson,
            item.scripture,
          ]
            .filter(Boolean)
            .join(" ")
        )
        .join(" ");

      const searchableText = [
        lesson.displayDate,
        lesson.day,
        lesson.month,
        lesson.year,
        lesson.special,
        readingsText,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !search ||
        searchableText.includes(search);

      const matchesMonth =
        lessonMonth === "All" ||
        lesson.month === lessonMonth;

      return matchesSearch && matchesMonth;
    })
    .sort((a, b) =>
      String(a.date).localeCompare(String(b.date))
    );

  const groupLessonReadings = (lesson) => {
    const groups = [];

    (lesson.readings || []).forEach((item) => {
      const key = `${item.service || ""}|${
        item.time || ""
      }`;

      let group = groups.find(
        (entry) => entry.key === key
      );

      if (!group) {
        group = {
          key,
          service: item.service || "",
          time: item.time || "",
          readings: [],
        };

        groups.push(group);
      }

      group.readings.push(item);
    });

    return groups;
  };

  // =========================
  // EVENTS
  // =========================
  const getEventStatus = (event) => {
    const eventDate = new Date(
      `${event.date} ${event.time}`
    );

    if (Number.isNaN(eventDate.getTime())) {
      return event.status || "Upcoming";
    }

    return eventDate < new Date()
      ? "Completed"
      : "Upcoming";
  };

  const eventsWithStatus = events.map((event) => ({
    ...event,
    calculatedStatus: getEventStatus(event),
  }));

  const upcomingEvents = eventsWithStatus
    .filter(
      (event) =>
        event.calculatedStatus === "Upcoming"
    )
    .sort(
      (a, b) =>
        new Date(`${a.date} ${a.time}`) -
        new Date(`${b.date} ${b.time}`)
    );

  const completedEvents = eventsWithStatus
    .filter(
      (event) =>
        event.calculatedStatus === "Completed"
    )
    .sort(
      (a, b) =>
        new Date(`${b.date} ${b.time}`) -
        new Date(`${a.date} ${a.time}`)
    );

  const nextUpcomingEvent =
    upcomingEvents.length > 0
      ? upcomingEvents[0]
      : null;

  // =========================
  // SHARED STYLES
  // =========================
  const buttonStyle = {
    background:
      "linear-gradient(135deg, #68449a 0%, #49306f 100%)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "12px 18px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "14px",
    boxShadow:
      "0 7px 18px rgba(79, 48, 115, 0.18)",
  };

  const secondaryButtonStyle = {
    background: "white",
    color: colours.purple,
    border: `1px solid ${colours.border}`,
    borderRadius: "12px",
    padding: "11px 17px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "14px",
  };

  const sectionTitleStyle = {
    textAlign: "center",
    color: colours.purple,
    fontSize: "clamp(26px, 4vw, 35px)",
    lineHeight: "1.2",
    margin: "0 0 8px",
    fontWeight: "800",
  };

  const programmeCardStyle = {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "26px",
    background: "white",
    border: `1px solid ${colours.border}`,
    borderRadius: "22px",
    boxShadow:
      "0 12px 32px rgba(69, 47, 91, 0.07)",
  };

  const programmeInfoStyle = {
    padding: "14px 16px",
    marginTop: "10px",
    background: colours.lavender,
    borderRadius: "14px",
    lineHeight: "1.6",
  };

  const renderEventCard = (event) => {
    const status = event.calculatedStatus;

    return (
      <div
        key={event.id}
        className={`event-card ${
          status === "Completed"
            ? "past-event"
            : ""
        }`}
      >
        <div className="event-card-top">
          <span className="small-badge">
            {event.type}
          </span>

          <span
            className={`status-badge ${
              status === "Upcoming"
                ? "upcoming"
                : "completed"
            }`}
          >
            {status === "Upcoming"
              ? "● Upcoming"
              : "✓ Completed"}
          </span>
        </div>

        {event.priority === "Important" &&
          status === "Upcoming" && (
            <div className="important-event">
              ★ IMPORTANT EVENT
            </div>
          )}

        <h3 className="event-title">
          {event.title}
        </h3>

        <div className="event-information">
          <div className="event-info-box">
            <span className="event-icon">📅</span>
            <div>
              <strong>Date</strong>
              <span>{event.date}</span>
            </div>
          </div>

          <div className="event-info-box">
            <span className="event-icon">🕑</span>
            <div>
              <strong>Time</strong>
              <span>{event.time}</span>
            </div>
          </div>

          <div className="event-info-box">
            <span className="event-icon">📍</span>
            <div>
              <strong>Location</strong>
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        <p className="event-description">
          {event.description}
        </p>
      </div>
    );
  };

  return (
    <div className={`app theme-${siteTheme}`}>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          overflow-x: hidden;
          background: #f7f4fa;
        }

        button,
        input,
        select {
          font: inherit;
        }

        button {
          transition:
            transform 0.18s ease,
            box-shadow 0.18s ease;
        }

        button:hover {
          transform: translateY(-1px);
        }

        button:active {
          transform: translateY(0);
        }

        .app {
          min-height: 100vh;
          color: #282330;
          font-family:
            "Segoe UI",
            Inter,
            Arial,
            Helvetica,
            sans-serif;
          background:
            radial-gradient(
              circle at top,
              rgba(104, 68, 154, 0.06),
              transparent 30%
            ),
            linear-gradient(
              180deg,
              #faf8fc 0%,
              #f6f2fa 100%
            );
        }

        .top-header {
          position: relative;
          overflow: hidden;
          text-align: center;
          color: white;
          padding: 32px 20px 30px;
          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(230, 184, 46, 0.24),
              transparent 26%
            ),
            radial-gradient(
              circle at 85% 20%,
              rgba(255, 255, 255, 0.08),
              transparent 20%
            ),
            linear-gradient(
              135deg,
              #704ca0 0%,
              #49306f 100%
            );
          box-shadow:
            0 10px 35px
            rgba(57, 32, 83, 0.16);
        }

        .header-logo {
          width: 105px;
          height: 105px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #e6b82e;
          background: white;
          box-shadow:
            0 12px 30px
            rgba(0, 0, 0, 0.22);
        }

        .church-name {
          margin: 16px 0 5px;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.4px;
        }

        .choir-name {
          margin: 0;
          font-size:
            clamp(28px, 5vw, 43px);
          line-height: 1.15;
          font-weight: 800;
        }

        .nav-bar {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          padding: 12px 15px;
          background:
            rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          border-bottom:
            1px solid #ebe4f1;
          box-shadow:
            0 5px 20px
            rgba(63, 44, 79, 0.08);
        }

        .nav-button {
          border: none;
          border-radius: 12px;
          padding: 10px 15px;
          cursor: pointer;
          font-weight: 700;
          font-size: 14px;
          white-space: nowrap;
        }

        .nav-button.active {
          color: white;
          background:
            linear-gradient(
              135deg,
              #68449a,
              #49306f
            );
        }

        .nav-button.inactive {
          color: #604088;
          background: #f7f3fa;
        }

        .main-shell {
          width: min(100%, 1040px);
          margin: 0 auto;
        }

        .section {
          padding: 50px 28px;
          scroll-margin-top: 82px;
        }

        .section + .section {
          border-top: 1px solid #eee7f2;
        }

        .section-intro {
          max-width: 700px;
          margin: 0 auto 27px;
          text-align: center;
          color: #716979;
          line-height: 1.65;
        }

        .small-badge {
          display: inline-block;
          padding: 6px 10px;
          color: #68449a;
          background: #f5f0f9;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
        }

        .modern-input,
        .modern-select {
          width: 100%;
          min-height: 48px;
          padding: 12px 14px;
          color: #282330;
          background: white;
          border: 1px solid #dcd2e6;
          border-radius: 12px;
          outline: none;
          font-size: 15px;
        }

        .search-row {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 10px;
          margin-bottom: 21px;
        }

        .list-card {
          margin-bottom: 14px;
          padding: 21px;
          background: white;
          border: 1px solid #e6deed;
          border-radius: 18px;
          box-shadow:
            0 8px 24px
            rgba(69, 47, 91, 0.055);
        }

        .hero-panel {
          padding: 38px 32px;
          text-align: center;
          background: white;
          border: 1px solid #e9e1ef;
          border-radius: 28px;
          box-shadow:
            0 18px 45px
            rgba(69, 47, 91, 0.08);
        }

        .hero-kicker {
          display: inline-flex;
          margin-bottom: 17px;
          padding: 7px 13px;
          color: #63418e;
          background: #fff9e8;
          border: 1px solid #efd778;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .home-heading {
          max-width: 760px;
          margin: 0 auto 13px;
          color: #4d326f;
          font-size: clamp(32px, 5.5vw, 49px);
          line-height: 1.08;
        }

        .lead-text {
          max-width: 650px;
          margin: 0 auto;
          color: #716979;
          font-size: 18px;
          line-height: 1.7;
        }

        .next-event-card {
          margin-top: 29px;
          padding: 24px;
          text-align: left;
          border: 1px solid #ead066;
          border-radius: 21px;
          background:
            linear-gradient(
              135deg,
              #fffaf0,
              #fff7df
            );
        }

        .small-overline {
          color: #68449a;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.1px;
        }

        .next-event-title {
          margin: 9px 0 17px;
          font-size: 25px;
          color: #282330;
        }

        .next-event-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 11px;
          margin-bottom: 18px;
        }

        .next-info {
          min-height: 78px;
          padding: 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.72);
        }

        .next-info strong {
          display: block;
          margin-bottom: 5px;
        }

        .next-info span {
          color: #716979;
        }

        .practice-card {
          margin-top: 21px;
          padding: 24px;
          text-align: center;
          background: white;
          border: 1px solid #e6deed;
          border-radius: 20px;
        }

        .practice-icon {
          font-size: 31px;
        }

        .practice-card h2 {
          margin: 8px 0 5px;
          color: #68449a;
        }

        .practice-card p {
          margin: 0;
          color: #716979;
          font-size: 17px;
        }

        .quick-access {
          margin-top: 31px;
        }

        .quick-access h2 {
          margin-bottom: 6px;
          color: #68449a;
        }

        .quick-access > p {
          margin-top: 0;
          color: #716979;
        }

        .quick-grid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 12px;
          margin-top: 18px;
        }

        .quick-card {
          min-height: 94px;
          padding: 16px 9px;
          cursor: pointer;
          color: #68449a;
          background: white;
          border: 1px solid #e6deed;
          border-radius: 17px;
          font-weight: 800;
          box-shadow:
            0 8px 22px
            rgba(69, 47, 91, 0.05);
        }

        .quick-icon {
          display: block;
          margin-bottom: 7px;
          font-size: 23px;
        }

        .meeting-hero {
          padding: 35px 28px;
          text-align: center;
          color: white;
          border-radius: 27px;
          background:
            linear-gradient(
              135deg,
              #68449a,
              #49306f
            );
        }

        .meeting-live {
          display: inline-flex;
          padding: 7px 13px;
          color: #f4ce4d;
          background:
            rgba(255, 255, 255, 0.11);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
        }

        .meeting-hero h2 {
          margin: 17px 0 7px;
        }

        .meeting-time {
          margin-top: 5px;
          opacity: 0.84;
        }

        .action-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        .meeting-button-gold,
        .meeting-button-light {
          border: none;
          border-radius: 12px;
          padding: 12px 17px;
          cursor: pointer;
          font-weight: 800;
        }

        .meeting-button-gold {
          color: #312500;
          background: #e6b82e;
        }

        .meeting-button-light {
          color: #5c3b83;
          background: white;
        }

        .tips-heading {
          margin: 26px 0 15px;
          text-align: center;
          color: #68449a;
        }

        .tips-grid {
          display: grid;
          grid-template-columns:
            repeat(2, 1fr);
          gap: 12px;
        }

        .tip-card {
          padding: 15px;
          color: #554d5e;
          background: white;
          border: 1px solid #e6deed;
          border-radius: 15px;
        }

        .tip-card.full {
          grid-column: 1 / -1;
        }

        .hymn-list-number {
          color: #68449a;
          font-weight: 900;
        }

        .hymn-list-title {
          margin: 8px 0 6px;
          font-size: 21px;
        }

        .hymn-list-category {
          color: #716979;
        }

        .hymn-reader,
        .lesson-detail {
          padding: 25px;
          background: white;
          border: 1px solid #e6deed;
          border-radius: 24px;
        }

        .reader-toolbar {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .font-controls {
          display: flex;
          gap: 7px;
        }

        .hymn-title-area {
          margin: 27px 0 28px;
          text-align: center;
        }

        .hymn-number {
          color: #68449a;
        }

        .bilingual-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);
          border-top: 1px solid #ece5f1;
          border-bottom: 1px solid #ece5f1;
        }

        .language-column {
          min-width: 0;
          padding: 25px 27px 29px;
        }

        .language-column:first-child {
          border-right: 1px solid #ded4e7;
        }

        .language-heading {
          color: #59377f;
          border-bottom: 2px solid #68449a;
          padding-bottom: 11px;
        }

        .lyrics-text {
          white-space: pre-line;
          overflow-wrap: break-word;
          line-height: 1.9;
        }

        .reader-nav {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 23px;
        }

        .lesson-summary {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }

        .lesson-date {
          color: #332d38;
        }

        .lesson-special {
          display: inline-block;
          padding: 6px 10px;
          color: #78530d;
          background: #fff6d5;
          border: 1px solid #efd778;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
        }

        .lesson-preview {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin: 14px 0 18px;
        }

        .lesson-preview-box {
          padding: 14px;
          background: #faf8fc;
          border: 1px solid #e6deed;
          border-radius: 14px;
        }

        .lesson-preview-box strong {
          display: block;
          margin-bottom: 6px;
          color: #68449a;
        }

        .lesson-detail-header {
          margin-top: 24px;
          padding: 24px 18px;
          text-align: center;
          background: #f8f3fc;
          border-radius: 19px;
        }

        .service-group {
          margin-top: 17px;
          overflow: hidden;
          background: white;
          border: 1px solid #e6deed;
          border-radius: 18px;
        }

        .service-heading {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          padding: 14px 17px;
          color: white;
          background:
            linear-gradient(
              135deg,
              #68449a,
              #49306f
            );
          font-weight: 800;
        }

        .service-reading {
          display: grid;
          grid-template-columns: 125px 1fr;
          gap: 14px;
          padding: 17px;
          border-top: 1px solid #eee7f2;
        }

        .service-reading-label {
          color: #68449a;
          font-weight: 900;
        }

        .service-reading-scripture {
          font-size: 18px;
          font-weight: 700;
        }

        .event-card {
          margin-bottom: 16px;
          padding: 22px;
          background: white;
          border: 1px solid #e6deed;
          border-radius: 20px;
        }

        .event-card.past-event {
          opacity: 0.84;
        }

        .event-card-top {
          display: flex;
          justify-content: space-between;
          gap: 9px;
        }

        .status-badge {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
        }

        .status-badge.upcoming {
          color: #5c3c83;
          background: #efe8f7;
        }

        .status-badge.completed {
          color: #666;
          background: #ececec;
        }

        .important-event {
          margin: 13px 0 5px;
          color: #68449a;
          font-weight: 900;
        }

        .event-information {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 10px;
        }

        .event-info-box {
          display: flex;
          gap: 9px;
          padding: 13px;
          background: #faf8fc;
          border-radius: 14px;
        }

        .event-info-box strong {
          display: block;
        }

        .event-description {
          color: #716979;
          line-height: 1.7;
        }

        .past-events {
          margin-top: 38px;
          padding-top: 30px;
          border-top: 1px solid #e6deed;
        }

        .announcement-grid {
          display: grid;
          grid-template-columns:
            repeat(2, 1fr);
          gap: 15px;
        }

        .announcement-card {
          padding: 21px;
          color: #282330;
          background: white;
          border: 1px solid #e6deed;
          border-radius: 19px;
        }

        .announcement-card h3,
        .announcement-card p,
        .announcement-card .announcement-top {
          color: #282330;
        }

        .announcement-card.important {
          color: #2b2205;
          background: #fff4bf;
          border: 1.5px solid #d8a900;
          box-shadow: 0 8px 24px rgba(216, 169, 0, 0.16);
        }

        .announcement-card.important h3,
        .announcement-card.important p,
        .announcement-card.important .announcement-top {
          color: #2b2205;
        }

        .announcement-top {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .notice-card {
          padding: 30px;
          text-align: center;
          background: #f3edf8;
          border-radius: 21px;
        }

        .weekly-verse {
          padding: 31px;
          text-align: center;
          color: white;
          border-radius: 24px;
          background:
            linear-gradient(
              135deg,
              #68449a,
              #49306f
            );
        }

        .weekly-verse h2 {
          color: #f2cd49;
        }

        .programme-empty {
          color: #8a8190;
          font-style: italic;
        }

        .footer {
          padding: 37px 20px 35px;
          text-align: center;
          color: white;
          background: #17131d;
        }

        .footer-logo {
          width: 88px;
          height: 88px;
          margin-top: 21px;
          object-fit: cover;
          border-radius: 17px;
        }

        .footer-credit {
          margin-top: 13px;
          color: #e6b82e;
          font-weight: 800;
        }

        .footer-tagline {
          margin-top: 6px;
          color: #aaa2b2;
          font-size: 13px;
        }

        .parish-visual-header {
          width: 100%;
          background: #25104f;
          border-bottom: 4px solid #d7a72a;
          overflow: hidden;
        }

        .parish-hero-image {
          display: block;
          width: 100%;
          height: auto;
          max-height: 390px;
          object-fit: cover;
          object-position: center;
        }

        .shepherd-strip {
          width: min(94%, 1060px);
          margin: 18px auto 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          padding: 15px 22px;
          color: #28144d;
          background: linear-gradient(135deg, #ffffff, #fbf8ff);
          border: 1px solid #e5dced;
          border-radius: 24px;
          box-shadow: 0 8px 24px rgba(55, 32, 87, 0.08);
        }

        .shepherd-icon {
          font-size: 34px;
        }

        .shepherd-copy {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          font-size: 16px;
        }

        .shepherd-copy strong {
          color: #b87b10;
          font-size: 18px;
        }

        .shepherd-phone {
          color: #3f2372;
          text-decoration: none;
          font-weight: 800;
        }

        .nav-bar {
          position: relative;
          top: auto;
          z-index: 20;
          display: grid;
          grid-template-columns: repeat(5, minmax(120px, 1fr));
          width: min(94%, 1120px);
          margin: 18px auto 8px;
          gap: 14px;
          padding: 0;
          background: transparent;
          border: 0;
          box-shadow: none;
          backdrop-filter: none;
        }

        .nav-button {
          min-height: 126px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 18px 10px;
          color: #2e135f;
          background: linear-gradient(180deg, #ffffff, #fcfbfe);
          border: 1px solid #e6e0ed;
          border-radius: 22px;
          box-shadow: 0 8px 24px rgba(54, 30, 90, 0.08);
          font-size: 16px;
          font-weight: 800;
        }

        .nav-button.active {
          color: white;
          background: linear-gradient(145deg, #7338c7, #3d126f);
          box-shadow: 0 11px 25px rgba(78, 35, 126, 0.25);
        }

        .nav-button.inactive {
          color: #2e135f;
          background: linear-gradient(180deg, #ffffff, #fcfbfe);
        }

        .nav-icon {
          display: block;
          font-size: 32px;
          line-height: 1;
        }

        .parish-welcome {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 22px;
          align-items: center;
          padding: 27px;
          background: linear-gradient(135deg, #ffffff, #fcf9ff);
          border: 1px solid #e6deed;
          border-radius: 25px;
          box-shadow: 0 10px 28px rgba(69, 47, 91, 0.06);
        }

        .parish-welcome h1 {
          margin: 0 0 8px;
          color: #3f1d73;
          font-size: clamp(27px, 4vw, 39px);
          line-height: 1.15;
        }

        .parish-welcome p {
          margin: 0;
          color: #5f5668;
          line-height: 1.7;
          font-size: 17px;
        }

        .parish-verse {
          padding-left: 22px;
          border-left: 1px solid #d8ad42;
          color: #472477;
          font-style: italic;
          line-height: 1.65;
          text-align: center;
        }

        .parish-verse strong {
          display: block;
          margin-top: 8px;
          font-style: normal;
        }

        .programme-placeholder-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .programme-placeholder-card {
          padding: 24px;
          background: white;
          border: 1px solid #e6deed;
          border-radius: 20px;
          box-shadow: 0 10px 28px rgba(69, 47, 91, 0.06);
        }

        .programme-placeholder-card h3 {
          margin: 8px 0;
          color: #5b3384;
        }

        .programme-placeholder-card p {
          color: #6f6678;
          line-height: 1.65;
        }

        .footer {
          color: #2d155d;
          background: linear-gradient(135deg, #f3eafd, #fbf8ff);
          border-top: 1px solid #dfd2ea;
        }

        .footer::before {
          background: #d5a629;
        }

        .footer-church {
          color: #28144d;
        }

        .footer-choir {
          color: #5f536b;
        }

        .footer-contact {
          max-width: 760px;
          margin: 16px auto 0;
          color: #4f4160;
          line-height: 1.7;
        }

        .footer-contact a {
          color: #3d1e6f;
          font-weight: 800;
          text-decoration: none;
        }

        .footer-credit {
          color: #4f257d;
        }

        .footer-tagline {
          color: #71627f;
        }

        @media (max-width: 800px) {
          .nav-bar {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
          }

          .nav-button {
            min-height: 105px;
          }

          .parish-welcome {
            grid-template-columns: 1fr;
          }

          .parish-verse {
            padding: 18px 0 0;
            border-left: 0;
            border-top: 1px solid #d8ad42;
          }

          .programme-placeholder-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 42px 18px;
          }

          .quick-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .next-event-grid,
          .event-information,
          .search-row,
          .tips-grid,
          .announcement-grid {
            grid-template-columns: 1fr;
          }
        }


        /* =========================
           APPEARANCE THEMES
           ========================= */
        .theme-settings {
          position: sticky;
          top: 0;
          z-index: 110;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          padding: 9px 14px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(8, 16, 28, 0.94);
          backdrop-filter: blur(14px);
        }

        .theme-label {
          margin-right: 3px;
          color: #d8e2ef;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .35px;
          text-transform: uppercase;
        }

        .theme-button {
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 7px 11px;
          cursor: pointer;
          color: #dbe7f4;
          background: rgba(255,255,255,0.06);
          font-size: 12px;
          font-weight: 800;
        }

        .theme-button.selected {
          color: #101827;
          background: #f2c94c;
          border-color: #f2c94c;
          box-shadow: 0 0 0 3px rgba(242,201,76,.13);
        }

        .theme-dark {
          color: #eef5ff;
          background:
            radial-gradient(circle at 15% 0%, rgba(29,95,209,.15), transparent 28%),
            radial-gradient(circle at 85% 8%, rgba(242,201,76,.08), transparent 22%),
            linear-gradient(180deg, #07111f 0%, #0b1626 100%);
        }

        .theme-dark body {
          background: #07111f;
        }

        .theme-dark .nav-bar {
          background: rgba(9, 18, 31, 0.94);
          border-bottom-color: rgba(255,255,255,.08);
        }

        .theme-dark .nav-button.inactive {
          color: #d7e5f5;
          background: rgba(255,255,255,.06);
        }

        .theme-dark .hero-panel,
        .theme-dark .practice-card,
        .theme-dark .list-card,
        .theme-dark .hymn-reader,
        .theme-dark .lesson-detail,
        .theme-dark .tip-card,
        .theme-dark .programme-placeholder-card {
          color: #eef5ff;
          background: rgba(16, 26, 43, .92);
          border-color: rgba(255,255,255,.09);
        }

        .theme-dark .quick-access h2,
        .theme-dark .practice-card h2,
        .theme-dark .tips-heading {
          color: #f0ca4f;
        }

        .theme-dark .quick-access > p,
        .theme-dark .practice-card p,
        .theme-dark .section-intro,
        .theme-dark .hymn-list-category {
          color: #b9c7d8;
        }

        .theme-bright {
          color: #282330;
          background:
            radial-gradient(circle at top, rgba(230,184,46,.12), transparent 28%),
            linear-gradient(180deg, #fffdf7 0%, #f6f8ff 100%);
        }

        .theme-bright .theme-settings {
          background: rgba(255,255,255,.96);
          border-bottom-color: #e5e8ef;
        }

        .theme-bright .theme-label {
          color: #5b6575;
        }

        .theme-bright .theme-button {
          color: #445064;
          background: #f4f6fa;
          border-color: #dfe4ec;
        }

        .theme-bright .theme-button.selected {
          color: #2d2504;
          background: #f2c94c;
          border-color: #dfb532;
        }

        .theme-cool {
          color: #eaf8ff;
          background:
            radial-gradient(circle at 20% 0%, rgba(20,184,166,.18), transparent 28%),
            radial-gradient(circle at 90% 12%, rgba(59,130,246,.16), transparent 24%),
            linear-gradient(180deg, #071923 0%, #092438 100%);
        }

        .theme-cool .theme-settings {
          background: rgba(5, 25, 36, .95);
        }

        .theme-cool .nav-bar {
          background: rgba(7, 31, 45, .94);
          border-bottom-color: rgba(255,255,255,.08);
        }

        .theme-cool .nav-button.inactive {
          color: #cdeff5;
          background: rgba(255,255,255,.06);
        }

        .theme-cool .hero-panel,
        .theme-cool .practice-card,
        .theme-cool .list-card,
        .theme-cool .hymn-reader,
        .theme-cool .lesson-detail,
        .theme-cool .tip-card,
        .theme-cool .programme-placeholder-card {
          color: #eaf8ff;
          background: rgba(8, 38, 53, .91);
          border-color: rgba(109,220,224,.13);
        }

        .theme-cool .section-intro,
        .theme-cool .quick-access > p,
        .theme-cool .practice-card p {
          color: #b7dbe2;
        }

        /* =========================
           DEPARTMENT COLOUR IDENTITY
           ========================= */
        .quick-card {
          overflow: hidden;
          position: relative;
        }

        .quick-card.quick-choir,
        .quick-card.quick-bible,
        .quick-card.quick-mens,
        .quick-card.quick-womens,
        .quick-card.quick-sunday,
        .quick-card.quick-media {
          color: white;
          border-width: 1px;
          border-style: solid;
          box-shadow: 0 12px 27px rgba(0,0,0,.16);
        }

        .quick-choir {
          background: linear-gradient(135deg, #0d3b8c 0%, #1d5fd1 74%, #f2c94c 75%, #f7da69 100%) !important;
          border-color: #f2c94c !important;
        }

        .quick-bible {
          background: linear-gradient(135deg, #4b1489, #7c3aed) !important;
          border-color: #a78bfa !important;
        }

        .quick-mens {
          background: linear-gradient(135deg, #0f5f2f, #17803d) !important;
          border-color: #4ade80 !important;
        }

        .quick-womens {
          background: linear-gradient(135deg, #7d163d, #b11f5c) !important;
          border-color: #fb7185 !important;
        }

        .quick-sunday {
          background: linear-gradient(135deg, #b45309, #ea7a11) !important;
          border-color: #fbbf24 !important;
        }

        .quick-media {
          background: linear-gradient(135deg, #0f766e, #0891b2) !important;
          border-color: #5eead4 !important;
        }

        .quick-card.quick-choir .quick-icon,
        .quick-card.quick-bible .quick-icon,
        .quick-card.quick-mens .quick-icon,
        .quick-card.quick-womens .quick-icon,
        .quick-card.quick-sunday .quick-icon,
        .quick-card.quick-media .quick-icon {
          width: 46px;
          height: 46px;
          margin: 0 auto 8px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(255,255,255,.14);
        }

        .quick-card.quick-choir .quick-icon {
          color: #f8d84f;
          background: rgba(242,201,76,.18);
        }

        .department-section {
          position: relative;
        }

        .department-section::before {
          content: "";
          position: absolute;
          top: 24px;
          left: 28px;
          right: 28px;
          height: 4px;
          border-radius: 999px;
          opacity: .9;
        }

        .choir-section::before { background: linear-gradient(90deg,#1d5fd1,#f2c94c); }
        .bible-section::before { background: linear-gradient(90deg,#4b1489,#a78bfa); }
        .mens-section::before { background: linear-gradient(90deg,#0f5f2f,#4ade80); }
        .womens-section::before { background: linear-gradient(90deg,#7d163d,#fb7185); }
        .sunday-section::before { background: linear-gradient(90deg,#b45309,#fbbf24); }
        .media-section::before { background: linear-gradient(90deg,#0f766e,#22d3ee); }

        .choir-meeting-hero {
          background: linear-gradient(135deg,#0d3b8c 0%,#1d5fd1 72%,#e7b92f 100%);
        }

        .bible-section > h2 { color: #7c3aed !important; }
        .mens-section > h2 { color: #17803d !important; }
        .womens-section > h2 { color: #b11f5c !important; }
        .sunday-section > h2 { color: #d8660d !important; }
        .media-section > h2 { color: #0f8a91 !important; }

        .sunday-meeting-hero {
          background: linear-gradient(135deg,#a84706,#e97812);
        }

        .mens-meeting-hero {
          background: linear-gradient(135deg,#0b4d26,#18753a);
        }

        .womens-meeting-hero {
          background: linear-gradient(135deg,#731332,#ad2458);
        }

        .media-meeting-hero {
          background: linear-gradient(135deg,#0b625d,#087d99);
        }

        /* Top navigation mirrors the Quick Access colour identity */
        .nav-button {
          min-width: 112px;
          min-height: 72px;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border: 1px solid rgba(255,255,255,.16);
          box-shadow: 0 8px 20px rgba(0,0,0,.12);
        }

        .nav-button .nav-icon {
          font-size: 22px;
          line-height: 1;
        }

        .nav-meeting,
        .nav-bible-class,
        .nav-mens-vigil,
        .nav-womens-group,
        .nav-sunday-school,
        .nav-media {
          color: #ffffff !important;
        }

        .nav-meeting {
          background: linear-gradient(135deg, #0d3b8c 0%, #1d5fd1 74%, #f2c94c 75%, #f7da69 100%) !important;
          border-color: #f2c94c !important;
        }

        .nav-bible-class {
          background: linear-gradient(135deg, #4b1489, #7c3aed) !important;
          border-color: #a78bfa !important;
        }

        .nav-mens-vigil {
          background: linear-gradient(135deg, #0f5f2f, #17803d) !important;
          border-color: #4ade80 !important;
        }

        .nav-womens-group {
          background: linear-gradient(135deg, #7d163d, #b11f5c) !important;
          border-color: #fb7185 !important;
        }

        .nav-sunday-school {
          background: linear-gradient(135deg, #b45309, #ea7a11) !important;
          border-color: #fbbf24 !important;
        }

        .nav-media {
          background: linear-gradient(135deg, #0f766e, #0891b2) !important;
          border-color: #5eead4 !important;
        }

        .nav-home,
        .nav-hymns,
        .nav-lessons,
        .nav-events {
          color: #5b4673;
          background: rgba(255,255,255,.92) !important;
          border-color: rgba(104,68,154,.18) !important;
        }

        .theme-dark .nav-home,
        .theme-dark .nav-hymns,
        .theme-dark .nav-lessons,
        .theme-dark .nav-events,
        .theme-cool .nav-home,
        .theme-cool .nav-hymns,
        .theme-cool .nav-lessons,
        .theme-cool .nav-events {
          color: #eef6ff;
          background: rgba(255,255,255,.07) !important;
          border-color: rgba(255,255,255,.16) !important;
        }

        .nav-button.active {
          transform: translateY(-2px);
          box-shadow:
            0 0 0 2px rgba(255,255,255,.8),
            0 12px 28px rgba(0,0,0,.24);
        }

        .nav-meeting.active {
          box-shadow:
            0 0 0 2px #f2c94c,
            0 12px 28px rgba(13,59,140,.34);
        }

        @media (max-width: 560px) {
          .theme-settings {
            justify-content: flex-start;
            overflow-x: auto;
            flex-wrap: nowrap;
          }

          .theme-label {
            display: none;
          }

          .top-header {
            padding: 25px 14px 24px;
          }

          .header-logo {
            width: 90px;
            height: 90px;
          }

          .nav-bar {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding: 10px;
          }

          .nav-button {
            flex: 0 0 auto;
            padding: 9px 12px;
            font-size: 13px;
          }

          .section {
            padding: 36px 14px;
          }

          .hero-panel {
            padding: 27px 16px;
          }

          .home-heading {
            font-size: 31px;
          }

          .lead-text {
            font-size: 16px;
          }

          .action-row {
            flex-direction: column;
          }

          .meeting-button-gold,
          .meeting-button-light {
            width: 100%;
          }

          .hymn-reader {
            padding: 17px 12px;
          }

          .bilingual-grid {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr);
          }

          .language-column {
            padding: 18px 9px 23px;
          }

          .lyrics-text {
          }

          .lesson-preview {
            grid-template-columns: 1fr;
          }

          .service-reading {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="parish-visual-header">
        <img
          src={parishHero}
          alt="Celestial Church of Christ — The Light of Jesus Parish, Purton, Swindon"
          className="parish-hero-image"
        />
      </header>

      <div className="shepherd-strip">
        <span className="shepherd-icon" aria-hidden="true">♰</span>
        <div className="shepherd-copy">
          <span>Shepherd in Charge:</span>
          <strong>VSE Shina Akomolafe</strong>
          <a className="shepherd-phone" href="tel:+447414105000">
            ☎ +44 7414 105000
          </a>
        </div>
      </div>

      <div className="theme-settings" aria-label="Website appearance">
        <span className="theme-label">Appearance</span>
        {[
          ["dark", "🌙", "Dark"],
          ["bright", "☀️", "Bright"],
          ["cool", "❄️", "Cool"],
        ].map(([theme, icon, label]) => (
          <button
            key={theme}
            type="button"
            className={`theme-button ${siteTheme === theme ? "selected" : ""}`}
            onClick={() => setSiteTheme(theme)}
            aria-pressed={siteTheme === theme}
          >
            <span aria-hidden="true">{icon}</span> {label}
          </button>
        ))}
      </div>

      <nav className="nav-bar">
        {[
          ["home", "🏠", "Home"],
          ["meeting", "🎤", "Choir"],
          ["hymns", "🎼", "Hymns"],
          ["lessons", "📖", "Bible Lessons"],
          ["events", "📅", "Events"],
          ["bible-class", "📚", "Bible Class"],
          ["sunday-school", "🧒🏾", "Sunday School"],
          ["mens-vigil", "🌙", "Men's Vigil"],
          ["womens-group", "👩🏾‍🤝‍👩🏾", "Women's Group"],
          ["media", "🎬", "Media"],
        ].map(([id, icon, label]) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`nav-button nav-${id} ${
              activeSection === id
                ? "active"
                : "inactive"
            }`}
          >
            <span className="nav-icon" aria-hidden="true">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <main className="main-shell">
        <section id="home" className="section">
          <div className="hero-panel">
            <div className="parish-welcome">
              <div>
                <h1>Welcome to The Light of Jesus Parish</h1>
                <p>
                  Your online platform for fellowship, learning,
                  worship and spiritual growth.
                </p>
              </div>
              <div className="parish-verse">
                “Let your light so shine before men, that they may see
                your good works, and glorify your Father which is in heaven.”
                <strong>Matthew 5:16</strong>
              </div>
            </div>

            <div className="practice-card">
              <div className="practice-icon" aria-hidden="true">⛪</div>
              <h2>Sunday Worship Service</h2>
              <p>
                Every Sunday at <strong>10:00 a.m.</strong>
              </p>
              <p style={{ marginTop: "8px", fontSize: "15px" }}>
                Millennium Hall, Church Street, Purton, Swindon SN5 4DT
              </p>
              <button
                style={{ ...secondaryButtonStyle, marginTop: "16px" }}
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/search/?api=1&query=Millennium+Hall+Church+Street+Purton+Swindon+SN5+4DT",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                📍 Get Directions
              </button>
            </div>

            <div className="next-event-card">
              <div className="small-overline">
                NEXT UPCOMING EVENT
              </div>

              {nextUpcomingEvent ? (
                <>
                  <h2 className="next-event-title">
                    {nextUpcomingEvent.title}
                  </h2>

                  <div className="next-event-grid">
                    <div className="next-info">
                      <strong>📅 Date</strong>
                      <span>
                        {nextUpcomingEvent.date}
                      </span>
                    </div>

                    <div className="next-info">
                      <strong>🕑 Time</strong>
                      <span>
                        {nextUpcomingEvent.time}
                      </span>
                    </div>

                    <div className="next-info">
                      <strong>📍 Location</strong>
                      <span>
                        {nextUpcomingEvent.location}
                      </span>
                    </div>
                  </div>

                  <button
                    style={buttonStyle}
                    onClick={() =>
                      scrollToSection("events")
                    }
                  >
                    View Event Details →
                  </button>
                </>
              ) : (
                <p>
                  There are currently no upcoming
                  events.
                </p>
              )}
            </div>

            <div className="practice-card">
              <div className="practice-icon">
                🎶
              </div>

              <h2>Regular Choir Practice</h2>

              <p>
                Every{" "}
                <strong>
                  {choirUpdates.practice.day}
                </strong>{" "}
                at{" "}
                <strong>
                  {choirUpdates.practice.time}
                </strong>
              </p>
            </div>

            <div className="quick-access">
              <h2>Quick Access</h2>

              <p>
                Everything you need, in one place.
              </p>

              <div className="quick-grid">
                <button
                  className="quick-card quick-choir"
                  onClick={() =>
                    scrollToSection("meeting")
                  }
                >
                  <span className="quick-icon">
                    🎤
                  </span>
                  Choir
                </button>

                <button
                  className="quick-card"
                  onClick={() =>
                    scrollToSection("hymns")
                  }
                >
                  <span className="quick-icon">
                    🎼
                  </span>
                  Hymns
                </button>

                <button
                  className="quick-card"
                  onClick={() =>
                    scrollToSection("lessons")
                  }
                >
                  <span className="quick-icon">
                    📖
                  </span>
                  Bible Lessons
                </button>

                <button
                  className="quick-card"
                  onClick={() =>
                    scrollToSection("events")
                  }
                >
                  <span className="quick-icon">
                    📅
                  </span>
                  Events
                </button>

                <button
                  className="quick-card quick-bible"
                  onClick={() =>
                    scrollToSection("bible-class")
                  }
                >
                  <span className="quick-icon">
                    📚
                  </span>
                  Bible Class
                </button>

                <button
                  className="quick-card quick-mens"
                  onClick={() =>
                    scrollToSection("mens-vigil")
                  }
                >
                  <span className="quick-icon">
                    🌙
                  </span>
                  Men's Vigil
                </button>

                <button
                  className="quick-card quick-sunday"
                  onClick={() =>
                    scrollToSection("sunday-school")
                  }
                >
                  <span className="quick-icon">🧒🏾</span>
                  Sunday School
                </button>

                <button
                  className="quick-card quick-womens"
                  onClick={() =>
                    scrollToSection("womens-group")
                  }
                >
                  <span className="quick-icon">👩🏾‍🤝‍👩🏾</span>
                  Women's Group
                </button>

                <button
                  className="quick-card quick-media"
                  onClick={() =>
                    scrollToSection("media")
                  }
                >
                  <span className="quick-icon">🎬</span>
                  Media
                </button>

                <button
                  className="quick-card"
                  onClick={() =>
                    window.open(
                      whatsappLink,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <span className="quick-icon">
                    💬
                  </span>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="meeting"
          className="section department-section choir-section"
        >
          <div className="meeting-hero choir-meeting-hero">
            <span className="meeting-live">
              ● OBANIMISTUDIO LIVE
            </span>

            <h2>🎥 Choir Meeting Room</h2>

            <p>
              The Light of Jesus Parish Choir
            </p>

            <div>
              <strong>
                Regular Choir Practice
              </strong>

              <div className="meeting-time">
                Every Saturday • 2:00 PM
              </div>
            </div>

            <div className="action-row">
              <button
                className="meeting-button-gold"
                onClick={() =>
                  window.open(
                    meetingLink,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                🎥 Join Live Meeting
              </button>

              <button
                className="meeting-button-light"
                onClick={copyMeetingLink}
              >
                🔗 Copy Meeting Link
              </button>

              <button
                className="meeting-button-light"
                onClick={() =>
                  window.open(
                    whatsappLink,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                💬 WhatsApp Group
              </button>
            </div>
          </div>

          <h3 className="tips-heading">
            Before Joining
          </h3>

          <div className="tips-grid">
            <div className="tip-card">
              🤫 Find a quiet place before joining.
            </div>

            <div className="tip-card">
              🎧 Use headphones or earphones where
              possible.
            </div>

            <div className="tip-card">
              🎤 Keep your microphone muted when not
              speaking.
            </div>

            <div className="tip-card">
              📹 Allow browser microphone and camera
              permissions.
            </div>

            <div className="tip-card full">
              ⚠️ If two devices are in the same room,
              mute one device or use headphones to
              prevent feedback.
            </div>
          </div>
        </section>

        <section
          id="hymns"
          className="section"
        >
          <h2 style={sectionTitleStyle}>
            🎼 Hymn Library
          </h2>

          <p className="section-intro">
            Search, open and read choir hymns clearly
            in English and Yoruba.
          </p>

          {selectedHymn ? (
            <div className="hymn-reader">
              <div className="reader-toolbar">
                <button
                  style={secondaryButtonStyle}
                  onClick={() =>
                    setSelectedHymn(null)
                  }
                >
                  ← Back to Hymns
                </button>

                <div className="font-controls">
                  <button
                    style={buttonStyle}
                    onClick={() =>
                      setHymnFontSize((size) =>
                        Math.max(14, size - 2)
                      )
                    }
                  >
                    A−
                  </button>

                  <button
                    style={buttonStyle}
                    onClick={() =>
                      setHymnFontSize((size) =>
                        Math.min(30, size + 2)
                      )
                    }
                  >
                    A+
                  </button>
                </div>
              </div>

              <div className="hymn-title-area">
                <h2 className="hymn-number">
                  Hymn {selectedHymn.number}
                </h2>

                <h3>
                  {selectedHymn.title}
                </h3>

                <p>
                  {selectedHymn.category}
                </p>
              </div>

              {(() => {
                const {
                  english,
                  yoruba,
                } = getBilingualLyrics(
                  selectedHymn.lyrics
                );

                return (
                  <div className="bilingual-grid">
                    <div className="language-column">
                      <h4 className="language-heading">
                        English
                      </h4>

                      <div
                        className="lyrics-text"
                        style={{
                          fontSize:
                            `${hymnFontSize}px`,
                        }}
                      >
                        {english}
                      </div>
                    </div>

                    <div className="language-column">
                      <h4 className="language-heading">
                        Yoruba
                      </h4>

                      <div
                        className="lyrics-text"
                        style={{
                          fontSize:
                            `${hymnFontSize}px`,
                        }}
                      >
                        {yoruba ||
                          "Yoruba version not yet available."}
                      </div>
                    </div>
                  </div>
                );
              })()}

              <div className="reader-nav">
                <button
                  style={secondaryButtonStyle}
                  onClick={openPreviousHymn}
                >
                  ← Previous
                </button>

                <button
                  style={buttonStyle}
                  onClick={openNextHymn}
                >
                  Next →
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="search-row">
                <input
                  type="text"
                  placeholder="Search hymn number or title..."
                  value={hymnSearch}
                  onChange={(e) =>
                    setHymnSearch(e.target.value)
                  }
                  className="modern-input"
                />

                <select
                  value={hymnCategory}
                  onChange={(e) =>
                    setHymnCategory(e.target.value)
                  }
                  className="modern-select"
                >
                  {hymnCategories.map(
                    (category) => (
                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>
                    )
                  )}
                </select>
              </div>

              {filteredHymns.map((hymn) => (
                <div
                  key={hymn.number}
                  className="list-card"
                >
                  <div className="hymn-list-number">
                    HYMN {hymn.number}
                  </div>

                  <h3 className="hymn-list-title">
                    {hymn.title}
                  </h3>

                  <p className="hymn-list-category">
                    {hymn.category}
                  </p>

                  <button
                    style={buttonStyle}
                    onClick={() =>
                      setSelectedHymn(hymn)
                    }
                  >
                    🎼 Open Hymn →
                  </button>
                </div>
              ))}
            </>
          )}
        </section>

        <section
          id="lessons"
          className="section"
        >
          <h2 style={sectionTitleStyle}>
            📖 CCC Bible Lessons 2026
          </h2>

          <p className="section-intro">
            Celestial Church of Christ Bible Lessons
            for January to September 2026. Search by
            date, scripture or service, or select a
            month below.
          </p>

          {selectedLesson ? (
            <div className="lesson-detail">
              <button
                style={secondaryButtonStyle}
                onClick={() =>
                  setSelectedLesson(null)
                }
              >
                ← Back to Bible Lessons
              </button>

              <div className="lesson-detail-header">
                <span className="small-badge">
                  CCC BIBLE LESSONS • 2026
                </span>

                <h2>
                  {selectedLesson.displayDate}
                </h2>

                {selectedLesson.special && (
                  <div className="lesson-special">
                    ✦ {selectedLesson.special}
                  </div>
                )}
              </div>

              {groupLessonReadings(
                selectedLesson
              ).map((group) => (
                <div
                  className="service-group"
                  key={group.key}
                >
                  <div className="service-heading">
                    <span>
                      {group.service ||
                        "Bible Lesson Service"}
                    </span>

                    {group.time && (
                      <span>
                        🕑 {group.time}
                      </span>
                    )}
                  </div>

                  {group.readings.map(
                    (item, index) => (
                      <div
                        className="service-reading"
                        key={`${item.lesson}-${item.scripture}-${index}`}
                      >
                        <div className="service-reading-label">
                          {item.lesson}
                        </div>

                        <div className="service-reading-scripture">
                          📖 {item.scripture}
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="search-row">
                <input
                  type="text"
                  placeholder="Search date, scripture or service..."
                  value={lessonSearch}
                  onChange={(e) =>
                    setLessonSearch(e.target.value)
                  }
                  className="modern-input"
                />

                <select
                  value={lessonMonth}
                  onChange={(e) =>
                    setLessonMonth(e.target.value)
                  }
                  className="modern-select"
                >
                  {lessonMonths.map((month) => (
                    <option
                      key={month}
                      value={month}
                    >
                      {month === "All"
                        ? "All Months"
                        : month}
                    </option>
                  ))}
                </select>
              </div>

              {filteredLessons.map(
                (lesson) => {
                  const groups =
                    groupLessonReadings(lesson);

                  const previewReadings = (
                    lesson.readings || []
                  ).slice(0, 3);

                  return (
                    <div
                      key={
                        lesson.id ||
                        lesson.date
                      }
                      className="list-card"
                    >
                      <div className="lesson-summary">
                        <span className="small-badge">
                          {lesson.month}{" "}
                          {lesson.year}
                        </span>

                        {lesson.special && (
                          <span className="lesson-special">
                            ✦ {lesson.special}
                          </span>
                        )}
                      </div>

                      <h3 className="lesson-date">
                        {lesson.displayDate}
                      </h3>

                      <div className="lesson-preview">
                        {previewReadings.map(
                          (item, index) => (
                            <div
                              className="lesson-preview-box"
                              key={`${item.scripture}-${index}`}
                            >
                              <strong>
                                {item.time
                                  ? `${item.time} • `
                                  : ""}
                                {item.lesson}
                              </strong>

                              <span>
                                📖 {item.scripture}
                              </span>
                            </div>
                          )
                        )}
                      </div>

                      <p>
                        {groups.length === 1
                          ? "1 service schedule"
                          : `${groups.length} service schedules`}
                      </p>

                      <button
                        style={buttonStyle}
                        onClick={() =>
                          setSelectedLesson(lesson)
                        }
                      >
                        📖 View Full Lessons →
                      </button>
                    </div>
                  );
                }
              )}
            </>
          )}
        </section>

        <section
          id="events"
          className="section"
        >
          <h2 style={sectionTitleStyle}>
            📅 Events
          </h2>

          <p className="section-intro">
            Keep up to date with parish programmes, rehearsals,
            worship and special events.
          </p>

          {upcomingEvents.length > 0 ? (
            upcomingEvents.map(renderEventCard)
          ) : (
            <p className="section-intro">
              There are currently no upcoming
              events.
            </p>
          )}

          {completedEvents.length > 0 && (
            <div className="past-events">
              <h2>
                🕘 Past / Completed Events
              </h2>

              {completedEvents.map(
                renderEventCard
              )}
            </div>
          )}
        </section>

        <section
          id="bible-class"
          className="section department-section bible-section"
        >
          <h2 style={sectionTitleStyle}>
            📚 Bible Class
          </h2>

          <p className="section-intro">
            Grow deeper in the Word of God through
            Bible teaching, study and discussion.
          </p>

          <div style={programmeCardStyle}>
            <span className="small-badge">
              BIBLE CLASS
            </span>

            <h2
              style={{
                color: colours.purple,
                marginTop: "15px",
              }}
            >
              {programmes.bibleClass.title}
            </h2>

            <div style={programmeInfoStyle}>
              <strong>📅 Day / Date</strong>
              <div>
                {programmes.bibleClass.day ||
                  "To be updated"}
              </div>
            </div>

            <div style={programmeInfoStyle}>
              <strong>🕑 Time</strong>
              <div>
                {programmes.bibleClass.time ||
                  "To be updated"}
              </div>
            </div>

            <div style={programmeInfoStyle}>
              <strong>💡 Theme / Topic</strong>
              <div>
                {programmes.bibleClass.theme ||
                  "To be updated"}
              </div>
            </div>

            <div style={programmeInfoStyle}>
              <strong>📖 Bible Text</strong>
              <div>
                {programmes.bibleClass.bibleText ||
                  "To be updated"}
              </div>
            </div>

            <div style={programmeInfoStyle}>
              <strong>👤 Teacher</strong>
              <div>
                {programmes.bibleClass.teacher ||
                  "To be updated"}
              </div>
            </div>

            {programmes.bibleClass.details && (
              <div style={programmeInfoStyle}>
                <strong>📝 Details</strong>
                <div>
                  {programmes.bibleClass.details}
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="sunday-school" className="section department-section sunday-section">
          <h2 style={sectionTitleStyle}>🧒🏾 Sunday School</h2>

          <p className="section-intro">
            Bible teaching, learning and Christian fellowship for children.
          </p>

          <div className="meeting-hero sunday-meeting-hero" style={{ marginBottom: "28px" }}>
            <span className="meeting-live">● OBANIMISTUDIO LIVE</span>
            <h2>🧒🏾 Sunday School Meeting Room</h2>
            <p>CCC The Light of Jesus Parish Sunday School</p>
            <div>
              <strong>Teaching, Learning and Children's Fellowship</strong>
              <div className="meeting-time">Open when a meeting is announced</div>
            </div>
            <div className="action-row">
              <button
                className="meeting-button-gold"
                onClick={() =>
                  window.open(
                    sundaySchoolMeetingLink,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                🎥 Join Live Meeting
              </button>
              <button
                className="meeting-button-light"
                onClick={() =>
                  copyDepartmentMeetingLink(
                    sundaySchoolMeetingLink,
                    "Sunday School"
                  )
                }
              >
                🔗 Copy Meeting Link
              </button>
            </div>
          </div>
        </section>

        <section
          id="mens-vigil"
          className="section department-section mens-section"
        >
          <h2 style={sectionTitleStyle}>
            🌙 Men's Vigil
          </h2>

          <p className="section-intro">
            A time of prayer, worship, teaching and
            spiritual fellowship.
          </p>

          <div className="meeting-hero mens-meeting-hero" style={{ marginBottom: "28px" }}>
            <span className="meeting-live">
              ● OBANIMISTUDIO LIVE
            </span>

            <h2>🌙 Men's Meeting Room</h2>

            <p>CCC The Light of Jesus Parish Men's Group</p>

            <div>
              <strong>Men's Fellowship and Vigil</strong>
              <div className="meeting-time">
                Open when a meeting is announced
              </div>
            </div>

            <div className="action-row">
              <button
                className="meeting-button-gold"
                onClick={() =>
                  window.open(
                    mensMeetingLink,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                🎥 Join Live Meeting
              </button>

              <button
                className="meeting-button-light"
                onClick={copyMensMeetingLink}
              >
                🔗 Copy Meeting Link
              </button>

              <button
                className="meeting-button-light"
                onClick={() =>
                  window.open(
                    mensWhatsappLink,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                💬 Men's WhatsApp Group
              </button>
            </div>
          </div>

          <div style={programmeCardStyle}>
            <span className="small-badge">
              MEN'S VIGIL
            </span>

            <h2
              style={{
                color: colours.purple,
                marginTop: "15px",
              }}
            >
              {programmes.mensVigil.title}
            </h2>

            <div style={programmeInfoStyle}>
              <strong>📅 Day / Date</strong>
              <div>
                {programmes.mensVigil.day ||
                  "To be updated"}
              </div>
            </div>

            <div style={programmeInfoStyle}>
              <strong>🕑 Time</strong>
              <div>
                {programmes.mensVigil.time ||
                  "To be updated"}
              </div>
            </div>

            <div style={programmeInfoStyle}>
              <strong>💡 Theme / Topic</strong>
              <div>
                {programmes.mensVigil.theme ||
                  "To be updated"}
              </div>
            </div>

            <div style={programmeInfoStyle}>
              <strong>📖 Bible Text</strong>
              <div>
                {programmes.mensVigil.bibleText ||
                  "To be updated"}
              </div>
            </div>

            <div style={programmeInfoStyle}>
              <strong>👤 Speaker</strong>
              <div>
                {programmes.mensVigil.speaker ||
                  "To be updated"}
              </div>
            </div>

            {programmes.mensVigil.details && (
              <div style={programmeInfoStyle}>
                <strong>📝 Details</strong>
                <div>
                  {programmes.mensVigil.details}
                </div>
              </div>
            )}

            {programmes.mensVigil.orderOfProgramme?.length > 0 && (
              <div style={{ marginTop: "22px" }}>
                <h3
                  style={{
                    color: colours.deepPurple,
                    margin: "0 0 12px",
                    textAlign: "center",
                  }}
                >
                  Order of Programme
                </h3>

                {programmes.mensVigil.orderOfProgramme.map(
                  (programmeItem, index) => (
                    <div
                      key={`${programmeItem.item}-${index}`}
                      style={programmeInfoStyle}
                    >
                      <strong>{programmeItem.item}</strong>
                      {programmeItem.title && (
                        <div>{programmeItem.title}</div>
                      )}
                      {programmeItem.person && (
                        <div>
                          <strong>Officiating: </strong>
                          {programmeItem.person}
                        </div>
                      )}
                      {programmeItem.scriptures && (
                        <div>
                          <strong>Lead verses: </strong>
                          {programmeItem.scriptures}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            )}

          </div>
        </section>

        <section id="womens-group" className="section department-section womens-section">
          <h2 style={sectionTitleStyle}>
            👩🏾‍🤝‍👩🏾 Women's Group
          </h2>

          <p className="section-intro">
            A dedicated space for women of the parish to connect,
            worship, learn, serve and grow together in faith.
          </p>

          <div className="meeting-hero womens-meeting-hero" style={{ marginBottom: "28px" }}>
            <span className="meeting-live">● OBANIMISTUDIO LIVE</span>
            <h2>👩🏾‍🤝‍👩🏾 Women's Meeting Room</h2>
            <p>CCC The Light of Jesus Parish Women's Group</p>
            <div>
              <strong>Women's Fellowship, Planning and Prayer</strong>
              <div className="meeting-time">Open when a meeting is announced</div>
            </div>
            <div className="action-row">
              <button
                className="meeting-button-gold"
                onClick={() =>
                  window.open(womensMeetingLink, "_blank", "noopener,noreferrer")
                }
              >
                🎥 Join Live Meeting
              </button>
              <button
                className="meeting-button-light"
                onClick={() =>
                  copyDepartmentMeetingLink(womensMeetingLink, "Women's")
                }
              >
                🔗 Copy Meeting Link
              </button>
            </div>
          </div>

          <div className="programme-placeholder-grid">
            <div className="programme-placeholder-card">
              <span className="small-badge">WOMEN'S GROUP</span>
              <h3>Programme & Fellowship</h3>
              <p>
                Meeting dates, themes, speakers and parish women's
                programmes will be shared here as they are confirmed.
              </p>
            </div>
            <div className="programme-placeholder-card">
              <span className="small-badge">COMMUNITY</span>
              <h3>Service & Support</h3>
              <p>
                A home for announcements, outreach, support activities
                and opportunities to serve together.
              </p>
            </div>
          </div>
        </section>

        <section id="media" className="section department-section media-section">
          <h2 style={sectionTitleStyle}>
            🎬 Media
          </h2>

          <p className="section-intro">
            Parish media for worship, teaching, memories and ministry.
          </p>

          <div className="meeting-hero media-meeting-hero" style={{ marginBottom: "28px" }}>
            <span className="meeting-live">● OBANIMISTUDIO LIVE</span>
            <h2>🎬 Media Meeting Room</h2>
            <p>CCC The Light of Jesus Parish Media Team</p>
            <div>
              <strong>Media Production and Communications</strong>
              <div className="meeting-time">Open when a meeting is announced</div>
            </div>
            <div className="action-row">
              <button
                className="meeting-button-gold"
                onClick={() =>
                  window.open(mediaMeetingLink, "_blank", "noopener,noreferrer")
                }
              >
                🎥 Join Live Meeting
              </button>
              <button
                className="meeting-button-light"
                onClick={() =>
                  copyDepartmentMeetingLink(mediaMeetingLink, "Media")
                }
              >
                🔗 Copy Meeting Link
              </button>
            </div>
          </div>

          <div className="programme-placeholder-grid">
            <div className="programme-placeholder-card">
              <span className="small-badge">VIDEO</span>
              <h3>Videos & Recorded Programmes</h3>
              <p>
                Service recordings, choir ministrations, Bible teaching
                and special parish programmes can be organised here.
              </p>
            </div>
            <div className="programme-placeholder-card">
              <span className="small-badge">PHOTO / AUDIO</span>
              <h3>Photos & Audio</h3>
              <p>
                Parish photographs, audio messages and other approved
                media will be available here as the library grows.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 style={sectionTitleStyle}>
            📢 Choir Announcements
          </h2>

          <p className="section-intro">
            Important information and choir updates.
          </p>

          <div className="announcement-grid">
            {choirUpdates.announcements.map(
              (announcement) => (
                <div
                  key={announcement.id}
                  className={`announcement-card ${
                    announcement.priority ===
                    "Important"
                      ? "important"
                      : ""
                  }`}
                >
                  <div className="announcement-top">
                    <span>
                      📅 {announcement.date}
                    </span>

                    <span className="small-badge">
                      {announcement.priority}
                    </span>
                  </div>

                  <h3>
                    {announcement.title}
                  </h3>

                  <p>
                    {announcement.message}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="section">
          <div className="notice-card">
            <div style={{ fontSize: "32px" }}>
              📌
            </div>

            <h2>
              {choirUpdates.notice.title}
            </h2>

            <p>
              {choirUpdates.notice.message}
            </p>
          </div>
        </section>

        <section
          className="section"
          style={{
            paddingBottom: "62px",
          }}
        >
          <div className="weekly-verse">
            <div style={{ fontSize: "31px" }}>
              📖
            </div>

            <h2>
              {choirUpdates.weeklyVerse.title}
            </h2>

            <p>
              “{choirUpdates.weeklyVerse.verse}”
            </p>

            <strong>
              {choirUpdates.weeklyVerse.reference}
            </strong>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-church">
          Celestial Church of Christ
        </div>

        <div className="footer-choir">
          The Light of Jesus Parish
        </div>

        <div className="footer-contact">
          📍 Millennium Hall, Church St, Purton, Swindon SN5 4DT
          <br />
          ⛪ Sunday Worship Service: <strong>10:00 a.m.</strong>
          <br />
          Shepherd in Charge: <strong>VSE Shina Akomolafe</strong>
          {" • "}
          <a href="tel:+447414105000">+44 7414 105000</a>
        </div>

        <img
          src={obanimiLogo}
          alt="ObanimiStudio"
          className="footer-logo"
        />

        <div className="footer-credit">
          Designed & Powered by ObanimiStudio
        </div>

        <div className="footer-tagline">
          Digital solutions for Kingdom impact.
        </div>
      </footer>
    </div>
  );
}

export default App;
