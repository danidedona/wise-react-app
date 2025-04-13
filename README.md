# WiSE Website Documentation

**Maintainer:** Daniela DeDona  
**Last updated:** April 2025

---

## Overview

This site is a **React app** embedded into a **WordPress page** via an `<iframe>`.  
It is deployed via **Netlify** and auto-updates whenever the GitHub repo changes.  
All content — especially events — is dynamic and editable through modular `.jsx` files.

---

## What is an Event?

Events are configured using a JavaScript object in `.jsx` files. Here's a complete example:

```js
export default {
  index: 0,
  title: "Fall 2025 Spring Conference",
  date: "April 19, 2025",
  location: "ERC and Barus & Holley",
  link: "/spring-conference-2025",

  flier:
    "/events/spring-2025-spring-conference/spring-2025-spring-conference.jpeg",
  rsvpLink: "https://example.com",

  coverImage: "", // (used only for past events)
  description: "", // (used only for past events)
  imageFolder: "", // (used only for past events)
};
```

### Key Fields:

| Field         | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| `index`       | Determines order; lower = more recent/upcoming (0 = most recent)         |
| `title`       | Event name                                                               |
| `date`        | Event date                                                               |
| `location`    | Event location                                                           |
| `description` | Required for past events (used on full event page)                       |
| `link`        | What clicking the event redirects to (`/events/event-slug`)              |
| `flier`       | Path to event flyer (used for upcoming events only)                      |
| `rsvpLink`    | Optional RSVP form link (used in upcoming events)                        |
| `coverImage`  | Used for past events as the thumbnail                                    |
| `imageFolder` | Path to folder containing numbered event images (`/pastEvents/my-event`) |

---

## How to Add an Upcoming Event

1. Go to:

```
src/pages/events/upcomingEventsData/
```

2. Create a new file (example):

```
spring-2025-spring-conference.jsx
```

3. Paste in this template:

```js
export default {
  index: 0,
  title: "Event Title Here",
  date: "Month Day, Year",
  location: "Building / Room",
  description: "", // used later for past event conversion
  link: "/events/event-slug",
  flier: "/events/event-folder-name/flier.jpg",
  rsvpLink: "https://example.com", // optional
  coverImage: "", // not used yet
  imageFolder: "", // not used yet
};
```

4. Upload your flier to:

```
public/events/event-folder-name/
```

⚠️ **Important:** Do **NOT** use `.heic` or `.HEIC` images — browsers cannot render them. Use `.jpg` or `.png` formats.

---

## How to Make It a Past Event

1. **Move** the event file from:

```
upcomingEventsData/ → pastEventsData/
```

2. **Update the object** with these past-event-specific fields:

```js
export default {
  index: 0,
  title: "Event Title",
  date: "Month Day, Year",
  location: "Location",
  description: "What happened at the event.",
  link: "/events/event-slug",
  coverImage: "/pastEvents/event-folder/cover.jpg",
  imageFolder: "/pastEvents/event-folder/",
};
```

3. **Upload images** to:

```
public/pastEvents/event-folder/
```

4. Name them:

```
1.jpg, 2.jpg, 3.png, etc.
```

They must be sequential and in supported formats (`.jpg`, `.png`, `.webp`)  
❌ `.heic` files are not supported and will break image loading.

---

## How Image Loading Works

- Image folders are scanned from the `imageFolder` path
- The code attempts to load images named `1.jpg`, `2.jpg`, `3.png`, etc.
- If no valid image is found at a given index, loading stops
- Only supported formats are displayed (`.jpg`, `.jpeg`, `.png`, `.webp`)

---

## Deployment Notes

- The site is deployed to [**Netlify**](https://www.netlify.com/)
- Pushing to the main GitHub branch **automatically triggers deployment**
- The final app is embedded in WordPress using a `<iframe>` block
- WordPress page has **custom CSS** to remove the Brown header, footer, and margins

👉 Embedded iframe points to:

```
https://brownwise.netlify.app/
```

---

## Example: Upcoming vs Past Event Format

### Upcoming Event:

```js
export default {
  index: 0,
  title: "Spring Conference 2025",
  date: "April 19, 2025",
  location: "Hazeltine Commons",
  link: "/spring-conference-2025",
  flier: "/events/spring-2025-spring-conference/flier.jpg",
  rsvpLink: "https://google.com/form",
};
```

### Past Event:

```js
export default {
  index: 0,
  title: "Fall 2024 Tea Talks",
  date: "October 18-19, 2024",
  location: "Ten One Tea",
  description: "An open discussion over tea and snacks...",
  link: "/events/fall-2024-tea-talks",
  coverImage: "/pastEvents/fall-2024-tea-talks/cover.jpg",
  imageFolder: "/pastEvents/fall-2024-tea-talks",
};
```

---

## ⚠️ Notes

- **Image formats:** Use `.jpg`, `.png`, `.webp` — ❌ `.heic` will not display
- `index` controls order — lower = more recent
- `flier` is only used in upcoming events
- `description`, `coverImage`, and `imageFolder` are only used for past events
- RSVP buttons only render if `rsvpLink` is present
- Flyer images are clickable and will link to the event's detail page if `link` is set

---

## ✨ Tech Stack

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Netlify](https://www.netlify.com/) (deployment)
- WordPress (iframe embed only)

---

## 💬 Questions or Handover?

Feel free to contact **Daniela DeDona**  
Happy coding! 💻🧬
