# Project Workflow & Architecture

This document describes the workflow and architectural flow of the `kevinoliveira.com.br` portfolio project. 

## High-Level Architecture Diagram

The application is built leveraging Next.js (Pages Router). Data is largely driven by static JSON datasets (`experiences.json`, `portfolio.json`). The visual logic is broken down into structured, reusable components (`cards`, `lists`, `content`).

```mermaid
graph TD
    User((User)) --> App[Next.js App Entry\n/_app.tsx]
    App --> Home[Index Page\n/pages/index.tsx]

    %% Navigation Core
    Home --> About[About Me Page\n/pages/sobre/index.tsx]
    Home --> Portfolio[Portfolio Page\n/pages/portfolio/index.tsx]
    Home --> Services[Services Page\n/pages/servicos/index.tsx]
    Home --> Blog[External Blog\ndeve.to/kvnol]

    %% Data Injection Flow
    subgraph Static Data Stores (src/data/)
        ExpJS[(experiences.json)]
        PortJS[(portfolio.json)]
        NewPortJS[(newPortfolio.json)]
    end

    ExpJS -.->|Feeds timelines| About
    PortJS -.->|Feeds project listings| Portfolio

    %% Component Mapping for Pages
    subgraph Components: About Page
        About --> C_ListTimeline[ListTimeline Component]
        C_ListTimeline --> C_CardTimeline[CardTimeline Component]
        About --> C_ListTags[ListTags Component]
        About --> C_ContentImage[ContentImage Component]
    end

    subgraph Components: Portfolio Page
        Portfolio --> C_ListChrono[ListChrono Component]
    end

    subgraph Components: Services Page
        Services --> C_ListAccordion[ListAccordion Component]
    end

    subgraph Components: Home Page
        Home --> C_CardPage[CardPage Component]
    end
    
    %% Shared Setup
    style User fill:#f9d0c4,stroke:#333,stroke-width:2px;
    style ExpJS fill:#f9f,stroke:#333,stroke-width:2px;
    style PortJS fill:#f9f,stroke:#333,stroke-width:2px;
```

## Folder Structure Mapping

The logic of the diagram maps directly to these directories inside the `src/` folder:

- **`pages/`**: Contains the route components for the app. The routing is strictly file-system based as per Next.js standards.
- **`components/`**: Holds modular UI elements organized by their category (e.g., `cards`, `lists`, `content`, `footer`, `header`). Each folder has the `tsx` component and associated modules.
- **`data/`**: Central location for the static JSON content keeping the pages themselves clean and separating logic from data.

## Typical User Flow

1. **Initial Load**: A user visits the root `/`, hitting `src/pages/index.tsx`. The user sees the main hero element and four primary navigation cards.
2. **Browsing 'About Me'**: Navigating to `/sobre` triggers the `sobre/index.tsx` page. The page fetches `experiences.json` and maps it directly into `<ListTimeline>` -> `<CardTimeline>` structures.
3. **Exploring the Portfolio**: Navigating to `/portfolio` loads `portfolio/index.tsx`, grabbing the massive `portfolio.json` data array, rendering it neatly via the `<ListChrono />` layout.
4. **Checking Services**: Going to `/servicos`, loads the hardcoded accordion layout showcasing UI/UX, Web Dev, and Branding options via `<ListAccordion />`.
