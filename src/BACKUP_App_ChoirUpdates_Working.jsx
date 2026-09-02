import { useState } from "react";
import choirLogo from "./assets/Choir_logo.png.JPG";
import hymns from "./data/hymns";
import bibleLessons from "./data/bibleLessons";
import choirUpdates from "./data/choirUpdates";

function App() {
  const [selectedHymn, setSelectedHymn] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [hymnFontSize, setHymnFontSize] = useState(18);

  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessonSearch, setLessonSearch] = useState("");
  const [lessonYear, setLessonYear] = useState("All");

  const meetingLink =
    "https://meet.jit.si/LightOfJesusParishChoir";

  const whatsAppLink =
    "https://chat.whatsapp.com/EV7GLtRWqyLHFJuypMmiFQ?mode=gi_t";

  /* ================= MEETING ================= */

  const joinWhatsAppGroup = () => {
    window.open(whatsAppLink, "_blank");
  };

  const joinLiveMeeting = () => {
    window.open(meetingLink, "_blank");
  };

  const copyMeetingLink = async () => {
    try {
      await navigator.clipboard.writeText(meetingLink);
      alert("Choir meeting link copied!");
    } catch {
      alert("Unable to copy the meeting link.");
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /* ================= HYMNS ================= */

  const categories = [
    "All",
    ...new Set(hymns.map((hymn) => hymn.category)),
  ];

  const filteredHymns = hymns.filter((hymn) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      String(hymn.number).toLowerCase().includes(search) ||
      String(hymn.title).toLowerCase().includes(search);

    const matchesCategory =
      category === "All" || hymn.category === category;

    return matchesSearch && matchesCategory;
  });

  const selectedHymnIndex = selectedHymn
    ? hymns.findIndex(
        (hymn) =>
          String(hymn.number) === String(selectedHymn.number)
      )
    : -1;

  const hasPreviousHymn = selectedHymnIndex > 0;

  const hasNextHymn =
    selectedHymnIndex >= 0 &&
    selectedHymnIndex < hymns.length - 1;

  const openPreviousHymn = () => {
    if (hasPreviousHymn) {
      setSelectedHymn(hymns[selectedHymnIndex - 1]);
    }
  };

  const openNextHymn = () => {
    if (hasNextHymn) {
      setSelectedHymn(hymns[selectedHymnIndex + 1]);
    }
  };

  const increaseHymnFont = () => {
    setHymnFontSize((size) => Math.min(size + 2, 30));
  };

  const decreaseHymnFont = () => {
    setHymnFontSize((size) => Math.max(size - 2, 14));
  };

  /* ================= BIBLE LESSONS ================= */

  const years = [
    "All",
    ...new Set(
      bibleLessons.map((lesson) => String(lesson.year))
    ),
  ];

  const filteredLessons = bibleLessons.filter((lesson) => {
    const search = lessonSearch.toLowerCase();

    const matchesSearch =
      String(lesson.lessonNumber)
        .toLowerCase()
        .includes(search) ||
      String(lesson.topic).toLowerCase().includes(search) ||
      String(lesson.scripture).toLowerCase().includes(search);

    const matchesYear =
      lessonYear === "All" ||
      String(lesson.year) === String(lessonYear);

    return matchesSearch && matchesYear;
  });

  /* ================= STYLES ================= */

  const navButtonStyle = {
    background: "white",
    color: "#6a4c93",
    border: "1px solid #d8cbea",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const purpleButtonStyle = {
    width: "100%",
    background: "#6a4c93",
    color: "white",
    border: "none",
    padding: "15px 20px",
    fontSize: "17px",
    fontWeight: "bold",
    borderRadius: "10px",
    cursor: "pointer",
  };

  const homeCardStyle = {
    background: "white",
    border: "1px solid #e5def0",
    borderRadius: "14px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f1ff",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* ================= HEADER ================= */}

        <header
          style={{
            textAlign: "center",
            padding: "25px 20px 20px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "3px",
              color: "#6a4c93",
              marginBottom: "18px",
            }}
          >
            OBANIMISTUDIO
          </div>

          <img
            src={choirLogo}
            alt="Light of Jesus Parish Choir"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "5px solid #f0c419",
              padding: "4px",
              background: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />

          <h1
            style={{
              margin: "20px 0 10px",
              fontSize: "30px",
            }}
          >
            Light of Jesus Parish Choir
          </h1>

          <p
            style={{
              color: "#555",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            Welcome to our online choir platform.
          </p>

          <p
            style={{
              color: "#666",
              lineHeight: "1.6",
            }}
          >
            Connect, worship, learn and fellowship together.
          </p>
        </header>

        {/* ================= NAVIGATION ================= */}

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            padding: "15px",
            background: "#f4f1ff",
            borderTop: "1px solid #eee",
            borderBottom: "1px solid #eee",
          }}
        >
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            style={navButtonStyle}
          >
            🏠 Home
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("meeting")}
            style={navButtonStyle}
          >
            🎥 Meeting
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("hymns")}
            style={navButtonStyle}
          >
            🎼 Hymns
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("bible-lessons")}
            style={navButtonStyle}
          >
            📖 Bible Lessons
          </button>
        </nav>

        {/* ================= HOME ================= */}

        <section
          id="home"
          style={{
            padding: "30px 25px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, #6a4c93, #8b6bb4)",
              color: "white",
              padding: "28px 20px",
              borderRadius: "18px",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                marginBottom: "10px",
              }}
            >
              🎶
            </div>

            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "27px",
              }}
            >
              Welcome, Choir Family
            </h2>

            <p
              style={{
                margin: 0,
                lineHeight: "1.7",
              }}
            >
              One place for our meetings, hymns, Bible lessons,
              rehearsals and fellowship.
            </p>
          </div>

          {/* NEXT PRACTICE */}

          <div
            style={{
              background: "#fff8df",
              border: "1px solid #f0c419",
              borderRadius: "14px",
              padding: "20px",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#6a4c93",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              NEXT REGULAR CHOIR PRACTICE
            </div>

            <h2 style={{ marginBottom: "5px" }}>
              📅 {choirUpdates.practice.day}
            </h2>

            <div
              style={{
                fontSize: "25px",
                color: "#6a4c93",
                fontWeight: "bold",
              }}
            >
              🕑 {choirUpdates.practice.time}
            </div>

            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
              }}
            >
              Members are encouraged to join a few minutes early
              and check their microphone and camera.
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("meeting")}
              style={{
                ...purpleButtonStyle,
                marginTop: "5px",
              }}
            >
              🎥 Go to Meeting Room
            </button>
          </div>

          {/* QUICK ACCESS */}

          <h2>⚡ Quick Access</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
              marginBottom: "25px",
            }}
          >
            <div style={homeCardStyle}>
              <div style={{ fontSize: "35px" }}>🎥</div>
              <h3>Choir Meeting</h3>
              <p style={{ color: "#666", lineHeight: "1.5" }}>
                Join our online rehearsal and choir meetings.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection("meeting")}
                style={{
                  ...purpleButtonStyle,
                  fontSize: "15px",
                  padding: "12px",
                }}
              >
                Open Meeting
              </button>
            </div>

            <div style={homeCardStyle}>
              <div style={{ fontSize: "35px" }}>🎼</div>
              <h3>Hymn Library</h3>
              <p style={{ color: "#666", lineHeight: "1.5" }}>
                Search and read hymns for worship and rehearsal.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection("hymns")}
                style={{
                  ...purpleButtonStyle,
                  fontSize: "15px",
                  padding: "12px",
                }}
              >
                Browse Hymns
              </button>
            </div>

            <div style={homeCardStyle}>
              <div style={{ fontSize: "35px" }}>📖</div>
              <h3>Bible Lessons</h3>
              <p style={{ color: "#666", lineHeight: "1.5" }}>
                Read and study our yearly Bible lessons.
              </p>
              <button
                type="button"
                onClick={() =>
                  scrollToSection("bible-lessons")
                }
                style={{
                  ...purpleButtonStyle,
                  fontSize: "15px",
                  padding: "12px",
                }}
              >
                Open Bible Lessons
              </button>
            </div>

            <div style={homeCardStyle}>
              <div style={{ fontSize: "35px" }}>💬</div>
              <h3>Choir WhatsApp</h3>
              <p style={{ color: "#666", lineHeight: "1.5" }}>
                Stay connected with choir announcements and
                messages.
              </p>
              <button
                type="button"
                onClick={joinWhatsAppGroup}
                style={{
                  ...purpleButtonStyle,
                  background: "#25D366",
                  fontSize: "15px",
                  padding: "12px",
                }}
              >
                Open WhatsApp
              </button>
            </div>
          </div>

          <div
            style={{
              background: "#f4f1ff",
              borderRadius: "14px",
              padding: "20px",
            }}
          >
            <h3 style={{ color: "#6a4c93" }}>
              🌟 Our Choir Community
            </h3>

            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
              }}
            >
              Let us continue to grow together in worship,
              unity, discipline, fellowship and the knowledge of
              God.
            </p>
          </div>
        </section>

        {/* ================= MEETING ================= */}

        <section
          id="meeting"
          style={{
            padding: "30px 25px",
            borderTop: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#fff8df",
              color: "#6a4c93",
              padding: "7px 14px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            OBANIMISTUDIO LIVE
          </div>

          <h2>🎥 Choir Meeting Room</h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.7",
            }}
          >
            Join our online choir meeting for rehearsals,
            discussions, fellowship and choir planning.
          </p>

          <div
            style={{
              background: "#f4f1ff",
              borderRadius: "14px",
              padding: "22px",
              margin: "22px 0",
            }}
          >
            <div style={{ fontSize: "40px" }}>🎤</div>

            <h3 style={{ color: "#6a4c93" }}>
              Light of Jesus Parish Choir
            </h3>

            <p>{choirUpdates.practice.title}</p>

            <p
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              📅 Every {choirUpdates.practice.day}
            </p>

            <p
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#6a4c93",
              }}
            >
              🕑 {choirUpdates.practice.time}
            </p>
          </div>

          <button
            type="button"
            onClick={joinLiveMeeting}
            style={{
              ...purpleButtonStyle,
              marginBottom: "12px",
            }}
          >
            🎥 Join Live Meeting
          </button>

          <button
            type="button"
            onClick={copyMeetingLink}
            style={{
              ...purpleButtonStyle,
              background: "white",
              color: "#6a4c93",
              border: "2px solid #6a4c93",
              marginBottom: "12px",
            }}
          >
            🔗 Copy Meeting Link
          </button>

          <button
            type="button"
            onClick={joinWhatsAppGroup}
            style={{
              ...purpleButtonStyle,
              background: "#25D366",
            }}
          >
            💬 Choir WhatsApp Group
          </button>

          <div
            style={{
              marginTop: "25px",
              textAlign: "left",
              background: "#fff8df",
              border: "1px solid #f0c419",
              borderRadius: "12px",
              padding: "18px",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#6a4c93",
              }}
            >
              🎧 Before Joining
            </h3>

            <p>✅ Find a quiet place.</p>
            <p>🎧 Use headphones or earphones where possible.</p>
            <p>🎤 Keep your microphone muted when not speaking.</p>
            <p>📹 Allow browser microphone and camera permissions.</p>
            <p>
              ⚠️ If two devices are in the same room, use
              headphones or mute one device to prevent echo and
              feedback.
            </p>
          </div>

          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              background: "#f4f1ff",
              borderRadius: "10px",
            }}
          >
            <strong style={{ color: "#6a4c93" }}>
              💡 Meeting Tip
            </strong>

            <p style={{ marginBottom: 0 }}>
              Join a few minutes early to check your microphone
              and camera.
            </p>
          </div>
        </section>

        {/* ================= HYMNS ================= */}

        <section
          id="hymns"
          style={{
            padding: "30px 25px",
            borderTop: "1px solid #eee",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            🎼 CCC Hymn Library
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#555",
            }}
          >
            Search hymns by number, title or category.
          </p>

          {!selectedHymn ? (
            <>
              <input
                type="text"
                placeholder="🔎 Search hymns..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  margin: "15px 0",
                }}
              />

              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value)
                }
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  marginBottom: "20px",
                }}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item === "All"
                      ? "📚 All Categories"
                      : item}
                  </option>
                ))}
              </select>

              {filteredHymns.map((hymn) => (
                <div
                  key={hymn.number}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    padding: "16px",
                    marginBottom: "12px",
                  }}
                >
                  <strong>
                    {hymn.number} — {hymn.title}
                  </strong>

                  <p>Category: {hymn.category}</p>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedHymn(hymn);
                      setHymnFontSize(18);
                    }}
                    style={{
                      background: "#6a4c93",
                      color: "white",
                      border: "none",
                      padding: "10px 18px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    🎼 Open Hymn
                  </button>
                </div>
              ))}
            </>
          ) : (
            <div>
              <button
                type="button"
                onClick={() => setSelectedHymn(null)}
              >
                ← Back to Hymn Library
              </button>

              <div
                style={{
                  textAlign: "center",
                  margin: "20px 0",
                }}
              >
                <button
                  type="button"
                  onClick={decreaseHymnFont}
                >
                  A−
                </button>

                <span style={{ margin: "0 12px" }}>
                  Text size
                </span>

                <button
                  type="button"
                  onClick={increaseHymnFont}
                >
                  A+
                </button>
              </div>

              <div
                style={{
                  background: "#fff8df",
                  padding: "25px",
                  borderRadius: "14px",
                }}
              >
                <h2>{selectedHymn.title}</h2>

                <p>
                  <strong>Hymn {selectedHymn.number}</strong>
                </p>

                <p>Category: {selectedHymn.category}</p>

                <div
                  style={{
                    fontSize: `${hymnFontSize}px`,
                    lineHeight: "1.9",
                    whiteSpace: "pre-line",
                  }}
                >
                  {selectedHymn.lyrics}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  disabled={!hasPreviousHymn}
                  onClick={openPreviousHymn}
                >
                  ← Previous Hymn
                </button>

                <button
                  type="button"
                  disabled={!hasNextHymn}
                  onClick={openNextHymn}
                >
                  Next Hymn →
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ================= BIBLE LESSONS ================= */}

        <section
          id="bible-lessons"
          style={{
            padding: "30px 25px",
            borderTop: "1px solid #eee",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            📖 Yearly Bible Lessons
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#555",
            }}
          >
            Search and study our Bible lessons.
          </p>

          {!selectedLesson ? (
            <>
              <input
                type="text"
                placeholder="🔎 Search Bible lessons..."
                value={lessonSearch}
                onChange={(event) =>
                  setLessonSearch(event.target.value)
                }
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  margin: "15px 0",
                }}
              />

              <select
                value={lessonYear}
                onChange={(event) =>
                  setLessonYear(event.target.value)
                }
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  marginBottom: "20px",
                }}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === "All"
                      ? "📚 All Years"
                      : year}
                  </option>
                ))}
              </select>

              {filteredLessons.map((lesson) => (
                <div
                  key={`${lesson.year}-${lesson.lessonNumber}`}
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    borderRadius: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <strong>
                    LESSON {lesson.lessonNumber}
                  </strong>

                  <h3>{lesson.topic}</h3>

                  <p>
                    📅 {lesson.month} {lesson.year}
                  </p>

                  <p>📖 {lesson.scripture}</p>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedLesson(lesson)
                    }
                    style={{
                      background: "#6a4c93",
                      color: "white",
                      border: "none",
                      padding: "11px 20px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    📖 Open Lesson
                  </button>
                </div>
              ))}
            </>
          ) : (
            <div>
              <button
                type="button"
                onClick={() =>
                  setSelectedLesson(null)
                }
              >
                ← Back to Bible Lessons
              </button>

              <div
                style={{
                  background: "#fff8df",
                  padding: "25px",
                  borderRadius: "14px",
                  marginTop: "20px",
                }}
              >
                <p>
                  {selectedLesson.year} •{" "}
                  {selectedLesson.month}
                </p>

                <h3>
                  Lesson {selectedLesson.lessonNumber}
                </h3>

                <h2>{selectedLesson.topic}</h2>

                <p>
                  <strong>📖 Scripture:</strong>{" "}
                  {selectedLesson.scripture}
                </p>

                <h3>📝 Memory Verse</h3>

                <p>{selectedLesson.memoryVerse}</p>

                <h3>📚 Lesson</h3>

                <p
                  style={{
                    lineHeight: "1.8",
                  }}
                >
                  {selectedLesson.content}
                </p>

                <h3>💬 Discussion Questions</h3>

                <ol
                  style={{
                    lineHeight: "1.8",
                  }}
                >
                  {selectedLesson.questions.map(
                    (question, index) => (
                      <li key={index}>
                        {question}
                      </li>
                    )
                  )}
                </ol>
              </div>
            </div>
          )}
        </section>

        {/* ================= PRACTICE SCHEDULE ================= */}

        <section
          style={{
            padding: "30px 25px",
            borderTop: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <h2>📅 Practice Schedule</h2>

          <p>
            <strong>
              {choirUpdates.practice.title}
            </strong>
          </p>

          <p
            style={{
              fontSize: "18px",
              color: "#6a4c93",
              fontWeight: "bold",
            }}
          >
            Every {choirUpdates.practice.day} at{" "}
            {choirUpdates.practice.time}
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("meeting")}
            style={purpleButtonStyle}
          >
            🎥 Go to Meeting Room
          </button>
        </section>

        {/* ================= ANNOUNCEMENTS ================= */}

        <section
          style={{
            padding: "30px 25px",
            borderTop: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <h2>
            📢 {choirUpdates.announcement.title}
          </h2>

          <div
            style={{
              background: "#fff8df",
              border: "1px solid #f0c419",
              borderRadius: "12px",
              padding: "18px",
            }}
          >
            <p
              style={{
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {choirUpdates.announcement.message}
            </p>
          </div>
        </section>

        {/* ================= NOTICE BOARD ================= */}

        <section
          style={{
            margin: "0 25px 25px",
            padding: "20px",
            background: "#f4f1ff",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#6a4c93",
            }}
          >
            📌 {choirUpdates.notice.title}
          </h3>

          <p
            style={{
              lineHeight: "1.7",
            }}
          >
            {choirUpdates.notice.message}
          </p>
        </section>

        {/* ================= WEEKLY VERSE ================= */}

        <section
          style={{
            margin: "0 25px 30px",
            padding: "22px",
            background: "#fff8df",
            borderRadius: "12px",
            border: "1px solid #f0c419",
            textAlign: "center",
          }}
        >
          <h2>
            📖 {choirUpdates.weeklyVerse.title}
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              fontStyle: "italic",
            }}
          >
            “{choirUpdates.weeklyVerse.verse}”
          </p>

          <strong
            style={{
              color: "#6a4c93",
            }}
          >
            {choirUpdates.weeklyVerse.reference}
          </strong>
        </section>

        {/* ================= FOOTER ================= */}

        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            background: "#f4f1ff",
            color: "#777",
            fontSize: "13px",
          }}
        >
          Powered by OBANIMISTUDIO
        </footer>
      </div>
    </div>
  );
}

export default App;