# Contactly - Contact Management App

A learning project demonstrating React Native contact management using Expo and TypeScript.

## Features

- Display device contacts
- Alphabetically sorted contact list with section headers
- Contact grouped by first letter
- Display contact images
- Show phone numbers and emails
- Sticky section headers for easy navigation

## Tech Stack

- React Native 0.81.5
- Expo 54.0.33
- React 19.1.0
- TypeScript 5.9.2
- Expo Router for navigation
- Expo Contacts API for accessing device contacts

## Project Structure

```
.
├── app/                          # App entry and routing
│   ├── index.tsx                # Home screen entry point
│   └── _layout.tsx              # Layout configuration
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Header.tsx           # Top header component
│   │   ├── ContactItem.tsx      # Individual contact item display
│   │   └── ContactList.tsx      # List of grouped contacts
│   ├── config/
│   │   └── groupContact.ts      # Contact grouping logic
│   ├── providers/
│   │   └── Contact.tsx          # Contact data provider (Context API)
│   └── screens/
│       └── Home.tsx             # Main home screen
├── assets/                       # Static assets
├── package.json                  # Dependencies
├── app.json                      # Expo configuration
└── tsconfig.json                 # TypeScript configuration
```

## How It Works

### Contact Provider

[Contact.tsx](src/providers/Contact.tsx) manages global contact state:

- Requests device contact permissions on app startup
- Fetches contacts from device with name, phone, email, and image
- Sorts contacts alphabetically
- Provides `useContact()` hook for accessing contacts throughout the app

### Contact Grouping

[groupContact.ts](src/config/groupContact.ts) organizes contacts into sections by first letter of name.

### UI Components

- **Header**: Application title/header area
- **ContactList**: Displays contacts in sections with sticky headers
- **ContactItem**: Renders individual contact with image, name, and details

## Getting Started

### Installation

```bash
pnpm install
```

### Running the App

```bash
# Start development server
pnpm start

# Run on Android
pnpm android

# Run on iOS
pnpm ios
```

## Permissions Required

- Contacts: Read access to device contacts

## Learning Goals

This project demonstrates:

- Context API for state management
- Custom React hooks
- TypeScript with React Native
- Expo APIs integration
- Component composition
- Array sorting and grouping
- Styled components with React Native StyleSheet

## Notes

- The project includes commented-out code for sending contacts to a backend server
- This is for educational purposes only that only belongs to me and should not be used in production without proper adjustments and security considerations.
