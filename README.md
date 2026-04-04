# 💸 Expense Tracker

> **My first production app** — built from scratch with React, Vite, and love (and a little bit of pain).

![Expense Tracker Banner](https://img.shields.io/badge/Status-Beta-ff758f?style=for-the-badge&labelColor=800f2f)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=20232a)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=1a1a2e)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=0f172a)

---

## 🚀 About This Project

This is my **first production-ready web application** — a personal expense tracker that helps you log, categorize, and visualize your spending. I built this to practice real-world React patterns and ship something I actually use every day.

It's not backed by a database (yet!) — data lives in your browser's `localStorage`, which means it's fast, private, and works offline. A proper backend with persistent storage is planned for a future release.

---

## ✨ Features

- 📊 **Visual Charts** — Doughnut chart to see expense breakdown by type; Line chart for spending trends over time
- 🗂️ **Expense Categories** — Create custom expense types (Food, Rent, Transport, etc.) and assign them per entry
- 📅 **Date-Based Filtering** — Filter your expenses by **Today**, **This Week**, or **This Month**
- 📋 **Table View** — Clean tabular overview of all your logged expenses
- 🔍 **Search by Date** — Look up expenses for any specific date
- 💾 **LocalStorage Persistence** — Data stays between sessions without a database
- 🧹 **Cache Clear** — One-click button to wipe all stored data and start fresh
- 📱 **Responsive Design** — Works across desktop and mobile

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI framework |
| [Vite](https://vitejs.dev/) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first styling |
| [Chart.js](https://www.chartjs.org/) | 4.5 | Data visualization |
| [react-chartjs-2](https://react-chartjs-2.js.org/) | 5.3 | React wrapper for Chart.js |
| [React Router DOM](https://reactrouter.com/) | 7 | Client-side routing |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.6 | Icon library |
| [@js-temporal/polyfill](https://github.com/js-temporal/temporal-polyfill) | 0.5 | Modern date/time handling |

---

## 📁 Project Structure

```
expense-tracker/
├── public/
│   └── fonts/
│       └── Bricolage.ttf          # Custom font
├── src/
│   ├── components/
│   │   ├── AddButton.jsx          # FAB to navigate to add page
│   │   ├── CircleChart.jsx        # Doughnut chart (filtered by period)
│   │   └── LineChart.jsx          # Line chart for trends
│   ├── context/
│   │   └── context.js             # React Context for chart state
│   ├── pages/
│   │   ├── AddExpenses.jsx        # Page to add new expense entries
│   │   └── NotFoundPage.jsx       # 404 fallback page
│   ├── ui/
│   │   ├── BarView.jsx            # Doughnut chart + time filter buttons
│   │   ├── DataSearch.jsx         # Date search + line chart section
│   │   ├── Nav.jsx                # Top navigation bar
│   │   ├── TableView.jsx          # Expense data table
│   │   └── TotalExpenses.jsx      # Total amount display
│   ├── App.jsx                    # Root component + layout
│   ├── App.css                    # Global animations (gradient flow)
│   ├── index.css                  # Tailwind imports + custom font
│   └── main.jsx                   # App entry point + router setup
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚡ Live View

[Expense Tracker](https://expense-tracker-azharzisan.vercel.app)

---

## ⚠️ Known Limitations

- **No database** — All data is stored in `localStorage`. Clearing browser data will delete expenses.
- **No edit/delete** — Entries cannot be modified after being added (coming soon).
- **Single user** — No authentication or multi-account support yet.

---

## 👨‍💻 Author

Built with ❤️ by **Zisan**

> *"This is my first production app — shipped, live, and built from zero. More to come."*

[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/AzharZisan)

---

<p align="center">
  <sub>⭐ If you found this useful, consider giving it a star!</sub>
</p>
