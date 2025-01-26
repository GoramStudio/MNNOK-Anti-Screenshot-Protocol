# Mononoke GS

Mononoke GS is a JavaScript-based protocol designed to protect web content from screenshots. It uses a custom HTML tag (`<no-screenshot>`) to encapsulate sensitive elements and enforce interaction and capture restrictions. While completely preventing screenshots is impossible, Mononoke GS provides deterrent measures to make it more challenging.

## Features

- **Right-click blocking**: Prevents users from opening the context menu.
- **Screenshot key detection**: Disables actions like `PrintScreen`, `Ctrl + P`, or `Cmd + Shift + 4`.
- **Visual effects**: Displays a temporary overlay to indicate suspicious behavior.
- **Shadow DOM encapsulation**: Ensures styles and behavior are isolated from external manipulation.

---

## Prerequisites

No additional dependencies are required. Mononoke GS works with plain HTML, CSS, and JavaScript.

---

## Installation

1. Clone this repository or copy the required files into your project:
   ```bash
   git clone https://github.com/username/mononoke-gs.git
