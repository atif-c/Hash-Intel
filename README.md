# 📁 Hash Intel

A lightweight browser extension that adds a right-click context menu for selected file hashes. When triggered, it:

-   Validates if the selection is a valid MD5, SHA-1, or SHA-256 hash.
-   Opens the defined threat intelligence links.
-   Copies the hash to your clipboard.
-   Shows an alert if the selected text is not a valid hash.

## Installation Instructions

### Chrome

1. Open `chrome://extensions/` in your address bar.
2. Enable **Developer mode** (top-right toggle).
3. Click **Load unpacked**.
4. Select the folder containing `manifest.json` and `background.js`.

### Firefox

1. Open `about:debugging#/runtime/this-firefox` in your address bar.
2. Click **Load Temporary Add-on**.
3. Select the `manifest.json` file in your extension folder.

### Edge

1. Open `edge://extensions/` in your address bar.
2. Enable **Developer mode** (bottom-left toggle).
3. Click **Load unpacked**.
4. Select the folder containing your extension files.

## Example Usage

1. Highlight any valid MD5, SHA-1, or SHA-256 hash on a webpage.
2. Right-click and choose `📁 Hash Intel`.
3. Intel tabs will open in the background.
4. The hash will be copied to your clipboard.

## Hash Types Supported

-   **MD5** – 32 hex characters
-   **SHA-1** – 40 hex characters
-   **SHA-256** – 64 hex characters

## Permissions Used

| Permission       | Purpose                                      |
| ---------------- | -------------------------------------------- |
| `contextMenus`   | Adds right-click options for selected hashes |
| `tabs`           | Opens new tabs for threat intel URLs         |
| `clipboardWrite` | Writes the selected hash to clipboard        |
| `activeTab`      | Executes scripts in the active tab           |
